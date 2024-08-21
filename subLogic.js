// document.getElementById('back').addEventListener('click',()=>{
//     window.location.href = "http://127.0.0.1:5500/index.html";
// })


// fetch("https://restcountries.com/v3.1/all")
// .then((res)=>res.json);
// .then((res)=>{

    
// }

// );
// .catch((err)=>alert(err));

// let back=document.getElementById("back");
// back.onclick=function() {
//     window.location.href="index.html";
    
// }
const countryname= new URLSearchParams(window.location.search).get('name');
fetch(`https://restcountries.com/v3.1/name/${countryname}`)
.then(res=>res.json())
.then(data=>{
    console.log(data);
    let flexContainer=document.querySelector('#flexContainer');
    
  flexContainer.innerHTML=`
    <img id="imgDiv" src=${data[0].flags.svg} alt="flag"> 
    <div id="flexContainerCol2">
        <h2 id="headerSubGrid">
        ${data[0].name.common}
        </h2>
        <div id="subGrid">
        <div id="subGridCol_1">
        <div id="NativeName"> Native Name: ${data[0].name.nativeName?Object.values(data[0].name.nativeName)[0].common:"__"}</div>
        <div id="Population"> Population: ${data[0].population}</div> 
        <div id="Region"> Region: ${data[0].region}</div>
        <div id="SubRegion"> Sub Region: ${data[0].subregion?data[0].subregion:"__"}</div>
        <div id="Capital" > Capital: ${data[0].capital?data[0].capital:"__"}</div>
        </div>
        <div id="subGridCol_2">
            <div id="TopLevelDomain"> Top Level Domain: ${data[0].tld}</div>
            <div id="Currencies"> Currencies: ${ data[0].currencies?Object.values(data[0].currencies).map(currency=>currency.name).join(","):"__"}</div> 
            <div id="languages"> languages: ${Object.values(data[0].languages)}</div>
        </div>
        </div>
   </div>`
   let subGrid=document.querySelector("#subGrid");
   let BorderCountriesCountainer=document.createElement("div");
   let BorderCountries=document.createElement("div");
   let border=document.createElement("h5");
   border.textContent='Border Countries: ';
   border.setAttribute("id", "border");
  
   BorderCountries.setAttribute('id','BorderCountries');
   BorderCountriesCountainer.append(border);
   if(data[0].borders)
   {for(let i=0; i<data[0].borders.length; i++)
   {
       let subBorderCountries=document.createElement('span');
       subBorderCountries.setAttribute('id','subBorderCountries');
       subBorderCountries.innerHTML=data[0].borders[i];
       BorderCountries.append(subBorderCountries);
   }}
   else{
    BorderCountries.textContent+="no border countries"
   }
   BorderCountriesCountainer.append(BorderCountries);
   subGrid.append(BorderCountriesCountainer);



})