//set api info
import key from '../config.js'
let enterCity = ''

function runApp() {
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${enterCity}&units=imperial&appid=${key}`

    //get API info
    fetch(api)
        .then(res => {
            if (res.ok || enterCity == '') {
                return res.json()
            } else {
                alert('Cannot Process. Check your spelling!')
            }

        })
        .then(populateApp)


    //populate page with app data
    function populateApp(data) {
        console.log(data)
        let city = document.querySelector('.city')
        let temp = document.querySelector('.temperature')
        let weather = document.querySelector('.weather')
        let icon = document.querySelector('.main-icon img')

        icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        weather.innerText = data.weather[0].description
        temp.innerHTML = `Temperature: ${Math.round(data.main.temp)}` + `&deg;F`
        city.innerText = data.name
    }
}



//submits form when you press enter
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        submitForm();
    }
}

//grabs the value from the form
function submitForm() {
    let searchBar = document.querySelector('.search')
    enterCity = searchBar.value
    console.log(enterCity)
    runApp();
}

//runs the app
runApp();