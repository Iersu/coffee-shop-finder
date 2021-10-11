const useData = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const fetchShopIds = (lat, lng) => {
    return fetch(
      `https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&categoryId=4bf58dd8d48988d1e0931735&v=20212509&limit=4&radius=15000`
    )
      .then((res) => res.json())
      .then((data) => {
        const results = data.response;
        console.log(results);
        return results;
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  const fetchShopDetails = (itemId) => {
    return fetch(
      `https://api.foursquare.com/v2/venues/${itemId}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20212509`
    )
      .then((res) => res.json())
      .then((data) => {
        const results = data;
        console.log(results);
        return results;
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return { fetchShopDetails, fetchShopIds };
};
export default useData;
