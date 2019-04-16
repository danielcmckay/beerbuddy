// API Request

const proxyurl = "https://cors-anywhere.herokuapp.com/";
let endpoint =
  "https://sandbox-api.brewerydb.com/v2/beers/?key=def34c816c7aa962d9c92192486b300b";

class Beer {
  constructor() {}

  async getBeer() {
    const response = await fetch(proxyurl + endpoint);

   
      const responseData = await response.json();
      return responseData;
    
      console.log(responseData);
      }
}