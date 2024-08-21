

let card
let countries=[]

document.querySelector("[data-search]").addEventListener("input",i=>{
    const value=i.target.value.toLowerCase()
    console.log(value)
    // console.log(countries)
    countries.forEach(country=>{
         const isVisible=country.name.toLowerCase().includes(value)
         country.element.toggleAttribute("hidden",!isVisible)
        
        //  countries-container.element.classList.toggle("c",isVisible)
    })
   
})

document.querySelector("[data-filter]").addEventListener("input",i=>{
    const value=i.target.value.toLowerCase()
    countries.forEach(country=>{
         const isVisible=(country.continent.toLowerCase()==value)
        country.element.toggleAttribute("hidden",!isVisible) 
        console.log(isVisible);
        //  countries-container.element.classList.toggle("c",isVisible)
    })
   
})

// const countryCardTemplate=document.querySelector("[data-country-template]")
// const countryCardContainer=document.querySelector("[data-country-cards-container]")

// fetch("https://restcountries.com/v3.1/all")
// .then((res) => res.json())
// .then((data)=>{ 
//     countries=  data.map(country=>{
// // console.log(country)
//     // const card=countryCardTemplate.content.cloneNode(true). children[0]
//     let card=document.createElement("div");
// card.classList.add("country")

// const header=card.querySelector("[ data-header]");
// const body=card.querySelector("[data-body]");
// card.innerHTML=`  <img src=${country.flags.svg} alt=" flag">
//                     <div class="country-text">
//                     <h2>${country.name.common}</h2>
//                     <p>Population: ${country.population} </p>
//                     <p>Region: ${country.region} </p>
//                         <p>Capital:${country.capital} </p>
//                 </div>`
//                 countryCardContainer.append(card)
//    })
// })

fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data)=>{ 
    countries=  data.map(country=>{
// console.log(country)
card=document.createElement("a");
card.href=`\cntry1.html?name=${country.name.common}`;

card.classList.add("country")
card.innerHTML=`  <img src=${country.flags.svg} alt=" flag">
                <div class="country-text">
                    <h2>${country.name.common}</h2>
                    <p>Population: ${country.population} </p>
                    <p>Region: ${country.region} </p>
                    <p>Capital:${country.capital} </p>
                </div>`

const countries=document.querySelector('.countries-container');
countries.append(card);
return {continent:country.region, element:card,name:country.name.common}
}
)})

// const cards= document.querySelectorAll('.countries-container');

// const onCardClick

// card.forEach(card=>card.addEventListener('click',onCardClick));
// console.log(countries);

