import { useState, useEffect } from "react";
import  Main  from "../components/coffeshop"
import { UseData } from "../hook/useData";



export default function CoffeSearch() {
    const [shops, setShops] = useState([])
    const [toggleFilter, setToggleFIlter] = useState("distance")
    const [error, setError] = useState('')

    const { fetchShopDetails, fetchShopId} = UseData()


 
    
    useEffect(() => { 
        navigator.geolocation.getCurrentPosition( (position) => {
        
            const lati = position.coords.latitude.toFixed(2) 
            const long = position.coords.longitude.toFixed(2)
            
            fetchShopId(lati,long).then( data => {

                        data.venues.map((item) => {
                             const distance = item.location.distance
                             const itemId = item.id
                              fetchShopDetails(itemId).then(data => {
                                   if(data.response.venue.popular.isOpen && data.response.venue.price.tier) setShops(prev => [...prev,{name:data.response.venue.name,
                                    distance: distance,
                                    photoUrl: data.response.venue.bestPhoto.prefix +"300x300"+ data.response.venue.bestPhoto.suffix,
                                    price:data.response.venue.price.tier ,
                                    location:data.response.venue.location.address +","+ data.response.venue.location.city,
                                
                                    }
                                     ])  
                                      
                                    }).catch(err=> console.error(err.message))
                                        
                           return  null
                        })
                        
            })
        }, (error) => setError(error.message))
            
    }, []) 


       const sorter = (sortBy) => {
        if(sortBy === 'distance'){
            let updated = shops
            updated.sort((a, b) => a.distance - b.distance)
            return  updated
        }
        else if (sortBy === 'price'){
            let updated = shops
            updated.sort((a, b) => b.price - a.price)
            return  updated
        }
    } 
   
    return (
    <>{ !error ? (  <>
        <Main.Header>
            <Main.Holder>
                <Main.Image  src="./images/coffee.jpg" alt="cup of coffee"/>
                <Main.Title>
                    Coffee Shop Finder
                </Main.Title>
            </Main.Holder>
            
        </Main.Header>
        <Main.Frame>
            <Main.Holder>
                <Main.Name>sortBy</Main.Name>
                <Main.Select toggleFilter={toggleFilter} setToggleFIlter={setToggleFIlter} />
        </Main.Holder>
        <Main.Content >
        { sorter(toggleFilter,shops).map((item, index) => (
            <Main.Item key={`${toggleFilter}-${index}`} >
                <Main.Pane>
                     <Main.Image src={item.photoUrl} alt={item.name}/>
                </Main.Pane>
             <Main.Pane>
                    <Main.Name>{index+1}.{item.name}</Main.Name>
                    <Main.Price price={item.price} >
                        <span>$</span>
                        <span>$</span>
                        <span>$</span>
                        <span>$</span>
                    </Main.Price>
                    <Main.Location>{item.location}</Main.Location >
                    <Main.Name>{item.distance} m</Main.Name>
                </Main.Pane>
            
            </Main.Item>
            
            ))}

        </Main.Content>
    </Main.Frame> </>) : (

    <Main.Header>
        <Main.Title>
            Please allow access to your location 
        </Main.Title>
    </Main.Header>
    
    )}
  
    
       
    </>
    )
}
