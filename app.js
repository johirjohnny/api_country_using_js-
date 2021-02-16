fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {                    //a function with countries parameter
    const countriesDiv = document.getElementById('countries');  //countriesDiv with inside in countris ID as like ul
        countries.forEach(country => {
        const countryDiv = document.createElement('div');               //countryDiv or li create
        countryDiv.className = 'country';            
        const countryInfo = `
        <h3 class="country-name" > ${country.name}</h3>          //foreach country er jonno name 
        <p> ${country.capital}</p>
        <button onclick = "displayCountryDetail('${country.name}')">show detail </button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}
//     for (let index = 0; index < countries.length; index++) {
//         const country = countries[index];
//         //console.log(country.name);
//         const countryDiv = document.createElement('div');               //countryDiv or li create
//         countriesDiv.className = 'country';            
        
//         // const h3 = document.createElement('h3');                   //create h3 to take name 
//         // h3.innerText = country.name;
//         // //li.innerText = country.name;
//         // const p = document.createElement('p');                      //create paragraph for capital to take                              
//         // p.innerText = country.capital;
//         // countriesDiv.appendChild(h3);
//         // countriesDiv.appendChild(p);
//         // countriesDiv.appendChild(countryDiv);                        //ul with inside li
//         // //ul.appendChild(li);
//         const countryInfo = `
//         <h3 class="country-name" > ${country.name}</h3>
//         <p> ${country.capital}</p>
//         `;
//         countryDiv.innerHTML = countryInfo;
//         countriesDiv.appendChild(countryDiv);
//     }
const displayCountryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch (url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
}
const renderCountryInfo = country =>{
    //console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML= `
    <h1>${country.name}</h1>
    <p>Population : ${country.population}</p>
    <p> Area : ${country.area}</p>
    <img src ="${country.flag}"></img>`
    
}
