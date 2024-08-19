
fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data)=>{data.forEach((country)=>{
console.log(country)
let card=document.createElement("div");
card.classList.add("country")
card.innerHTML=`  <img src=${country.flags.svg} alt=" flag">
                <div class="country-text">
                    <h2>${country.name.common}</h2>
                    <p>Population: ${country.population} </p>
                    <p>Region: ${country.region} </p>
                    <p>Capital:${country.capital} </p>
                </div>`
const countries=document.querySelector('.countries-container');
countries.append(card)
}
)})


