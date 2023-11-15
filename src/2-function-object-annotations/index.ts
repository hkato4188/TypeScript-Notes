const add = (a: number, b: number): void => {
    console.log(a + b)
    
}

function subtract (a: number, b: number): number {
    console.log( a - b )
    return a
}

const todaysWeather = {
    date: new Date(),
    weather: 'cloudy'
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}
//destructuring
const logWeatherDestructured = ({date, weather}: {date: Date, weather: string}): void => {
    console.log("destructured syntax:")
    console.log(date)
    console.log(weather)
}

const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }

}

//if you want to destructure you have to provide the expected structure of profile rather than just give age's type
const {age}: {age: number} = profile
const {coords: {lat,lng}}: {coords: {lat: number, lng: number}} = profile

add(1, 10)
subtract(10, 1)
logWeather(todaysWeather)
logWeatherDestructured(todaysWeather)