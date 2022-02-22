// apikey
const key = 'cHlZ77KI5CksvX46A5DO1AwYclv7gW6v';

// geCity
const getCity= async (city)=>{

    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const querry = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseUrl + querry);

    const data = await response.json();
    return data[0]
}

   
    // get weather
const getWeather = async (id)=>{
    const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const querry = `${id}?apikey=${key}`;

    const response = await fetch(baseUrl + querry);

    const data = await response.json();

    return data[0];
}



    