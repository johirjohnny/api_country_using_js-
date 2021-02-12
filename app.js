fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries =>{
    const ul = document.getElementById('countries');
    for (let index = 0; index < countries.length; index++) {
        const country= countries[index];
        console.log(country.name);
        const li = document.createElement('li');
        li.innerText = country.name;
        ul.appendChild(li);
    }
}