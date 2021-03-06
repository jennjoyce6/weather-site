const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=d53e9590df9986c44188e269111f6fcd&query='+latitude+','+longitude
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location services',undefined)
        } else if(body.error){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, 'Todays temperature at '+body.location.name+ ' is '+body.current.temperature+'°C. The temperature feels like '+body.current.feelslike+'°C.\nThe humidity is ' +body.current.humidity+ 'g.kg-1. The weather is '+body.current.weather_descriptions+'.\nThere is a '+body.current.precip+'% chance of rain. The visibility is upto '+body.current.visibility+'km.')
        }
    })
}

module.exports=forecast