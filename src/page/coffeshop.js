import { useState, useEffect } from 'react'
import Main from '../components/coffeshop'
import { CoffeShopPresentational } from '../containers/coffeshopPresentational'
import useData from '../hook/useData'

export default function CoffeSearch() {
  const [shops, setShops] = useState([])
  const [toggleFilter, setToggleFIlter] = useState('distance')
  const [error, setError] = useState()

  const { fetchShopDetails, fetchShopIds } = useData()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(2)
        const lng = position.coords.longitude.toFixed(2)

        fetchShopIds(lat, lng)
          .then((data) => {
            data.venues.map((item) => {
              const distance = item.location.distance
              const itemId = item.id
              fetchShopDetails(itemId)
                .then(({ response }) => {
                  if (response.venue.popular.isOpen)
                    setShops((prev) => [
                      ...prev,
                      {
                        name: response.venue.name,
                        distance: distance,
                        photoUrl:
                          response.venue.bestPhoto.prefix +
                          '300x300' +
                          response.venue.bestPhoto.suffix,
                        price: response.venue.price.tier,
                        location:
                          response.venue.location.address +
                          ',' +
                          response.venue.location.city,
                      },
                    ])
                })
                .catch((err) => console.log(err))

              return null
            })
          })
          .catch((err) => console.log(err))
      },
      (error) => setError(error.message)
    )

    return () => {}
    // Disabled because  fetchShopDetails and fetchShopIds will not change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sorter = () => {
    if (toggleFilter === 'distance')
      return [...shops].sort((a, b) => a.distance - b.distance)
    if (toggleFilter === 'price')
      return [...shops].sort((a, b) => b.price - a.price)
  }

  const sortedShops = sorter()

  return (
    <>
      {!error ? (
        <CoffeShopPresentational
          toggleFilter={toggleFilter}
          setToggleFIlter={setToggleFIlter}
          shops={sortedShops}
        />
      ) : (
        <Main.Header>
          <Main.Title>Please allow access to your location</Main.Title>
        </Main.Header>
      )}
    </>
  )
}
