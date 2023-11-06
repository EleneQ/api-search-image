import axios from "axios";

/* 
  the root url + route + query string make up the url
  we need to get the desired response back.

  http://api.unsplash.com/ is the root url of the api,
  search/photos is the route
*/
const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Cp0cOWip7tq9-9X10RCJNUT0D15VWpQdLlLrXLoM9nw",
    },
    params: {
      query: searchTerm,
    },
  });

  return response.data.results;
};

export default searchImages;
/*
 this file contains all the code related to 
 contacting the unsplash api
*/
