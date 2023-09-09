
let container=  document.getElementById('container');
let country = document.getElementById('country')



 var allCountry = (val,status)=>{
    fetch(`https://restcountries.com/v3.1/${val}`)
    .then((responce)=>{
        return responce.json()
    
    })
    .then((data)=>{
       data.forEach(element => {
       var countryBox = document.createElement('div');
       countryBox.classList.add('countryBox');
    
       //flag
       var image = document.createElement('div');
       image.classList.add('image');
       image.style.background = `url(${element.flags.png}) no-repeat center center/contain`;
       
       countryBox.appendChild(image);
    
      //name
       var name = document.createElement('h4')
       name.innerText = element.name.common;
       countryBox.appendChild(name);

         //capital
     

       //population
         var Allpopulation = document.createElement('p');
          Allpopulation.innerText = `Population : ${element.population}`
         countryBox.appendChild(Allpopulation)
         
    
      console.log(element)
    
     //add to container
     container.appendChild(countryBox)

       });
      
    })
 }

 allCountry('all')

let search = document.getElementById('Search').addEventListener('click',()=>{
   
   container.innerHTML = '';

    var countryName =  country.value;
    console.log(countryName)
    if(countryName == ''){
       
       allCountry(`all`);
      
    }


   else if(!countryName == ''){
   allCountry(`name/${countryName}`)

}

 

})



