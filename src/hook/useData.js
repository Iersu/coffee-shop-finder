

export  function UseData() {

    const CLIENT_ID = "X0RZXBQWBVGLSYFH522PC00HTZYO2GHVSZPGH03H0AYO1L4O"
    const CLIENT_SECRET = "0QHSOXVMKDBXHQ1LKQ2YNPF5NP2GM23THJAPZHUSLLXRYIFK"

    const fetchShopId = ( lati, long) => {
        return  fetch(`https://api.foursquare.com/v2/venues/search?ll=${lati},${long}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&categoryId=4bf58dd8d48988d1e0931735&v=20212509&limit=5&radius=15000`)
        .then(res => res.json())
        .then(data => { 
            const results = data.response
            return results
        })
        .catch((err) => {
            console.error(err.message)
        })
    }
    const fetchShopDetails = ( itemId) => {
       
             return fetch(`https://api.foursquare.com/v2/venues/${itemId}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20212509`)
                    .then(res => res.json()) 
                    .then(data => { 
                        const results = data
                        console.log(results)
                        return results
                    })
                    .catch((err) => {
                        console.error(err.message)
                    })
                     
                                          
    }

    return { fetchShopDetails, fetchShopId }

    
}


