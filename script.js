
function getinfo(city) {
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd6b96fca1fmsh7e94a6074d39511p1cbf87jsne4d440345425',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

fetch(url, options).then(function(response)
{
    if(!response.ok)
    {
        throw new Error('Network response was not ok');
    }
    return response.json();
}).then(function(result) {
    console.log(result);
    let b = document.querySelector('#search-results');
    let c = document.createElement('div');

    let d1 = document.createElement('h3');
    let e1 = document.createElement('p');
    let d2 = document.createElement('h3');
    let e2 = document.createElement('p');
    let d3 = document.createElement('h3');
    let e3 = document.createElement('p');

    d1.innerHTML = "Current Temperature";
    e1.innerHTML = result.temp;
    d2.innerHTML = "Minimum Temperature";
    e2.innerHTML = result.min_temp;
    d3.innerHTML = "Maximum Temperature";
    e3.innerHTML = result.max_temp;

    c.appendChild(d1);
    c.appendChild(e1);
    c.appendChild(d2);
    c.appendChild(e2);
    c.appendChild(d3);
    c.appendChild(e3);


    b.innerHTML="";
    b.appendChild(c);


}).catch(function(err)
{
    let a= document.getElementById('search-results')
    a.innerText="Coudn't find"
    console.log(err);
})
}
function handle()
{
    console.log("working")
    let city = document.querySelector('#search-input').value;
    getinfo(city);

}
let a= document.querySelector('#search-btn')
a.addEventListener('click', function()
{
    handle();
});


/* cloud_pct
: 
0
feels_like
: 
15
humidity
: 
36
max_temp
: 
16
min_temp
: 
16
sunrise
: 
1706839436
sunset
: 
1706877486
temp
: 
16
wind_degrees
: 
294
wind_speed
: 
2.8
[[Prototype]]
: 
Object */
