const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=d53e9590df9986c44188e269111f6fcd&query='+latitude+','+longitude
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location services',undefined)
        } else if(body.error){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, 'Todays temperature at '+body.location.name+ ' is '+body.current.temperature+'°C. The temperature feels like '+body.current.feelslike+'. The weather is '+body.current.weather_descriptions+'. There is a '+body.current.precip+'% chance of rain')
        }
    })
}

module.exports=forecast