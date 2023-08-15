// export const apiKey = '45324e78cb55400b8f2161331231408';
// export const location = 'jodhpur';

// async function fetchCurrentWeather(apiKey, location) {
//     const url = "https://api.weatherapi.com/v1/current.json";
//     const params = {
//       key: apiKey,
//       q: location,
//     };
  
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       params: params,
//     });
  
//     if (response.status === 200) {
//       const data = await response.json();
//       return data;
//     } else {
//       throw new Error("Error fetching weather dataaaa: " + response.status);
//     }
//   }
  
//  export default fetchCurrentWeather(apiKey, location);
   