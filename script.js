const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt){
    if (evt.keyCode == 13){
        getResults(searchbox.value);
       // console.log(searchbox.value);
    }
}

function getResults(query){
  
        const one='http://api.openweathermap.org/data/2.5/weather?q=';
        const two=query;
        const three='&appid=5f319cc7690acd9f35d27bfd5dc5cdc2';

        
        fetch(one+two+three).then(weather => {  
            if(weather.ok){
                return weather.json();
            }
            else{
                //console.log("NO SUCH CITY FOUND");
               
                let city = document.querySelector('.city');
                let country = document.querySelector('.country');
                city.innerText= "CITY NOT FOUND" ;
                country.innerText="please Enter correctly";

                let temp=document.querySelector('.temp');
                temp.innerHTML="";

                let wtr=document.querySelector('.weather');
                wtr.innerText="";

                document.getElementById('imge').src="";

            }
       
    }).then(displayResults);
}

function displayResults(weather){

  //  console.log(weather);
    let city = document.querySelector('.city');
    let country = document.querySelector('.country');

    let now =new Date();
    let dte= now.getDate();
    let year=now.getFullYear();
    let mnth=now.getMonth();
    let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][now.getDay()]; 


    let date=document.querySelector('.date');
    date.innerText=dte +"/"+(mnth+1)+"/"+year+", "+day

    city.innerText=weather.name ;
    country.innerText=weather.sys.country;

    let temp=document.querySelector('.temp');
    const x=Math.round(weather.main.temp) -278  ;
    const y='°C';
    temp.innerHTML=x+y;

    let wtr=document.querySelector('.weather');
    wtr.innerText=weather.weather[0].main;


     document.getElementById('imge').src="";
    if(wtr.innerText=="Haze")
    {
        document.getElementById('imge').src="./images/haze.jpg";
    }
    else if(wtr.innerText=="Clouds")
    {
        document.getElementById('imge').src="./images/Cloudy.jpg";
    }
    else if(wtr.innerText=="Foggy")
    {
        document.getElementById('imge').src="./images/Foggy.jpg";
    }
    else if(wtr.innerText=="Hailing")
    {
        document.getElementById('imge').src="./images/Hailing.jpg";
    }
    else if(wtr.innerText=="Icy")
    {
        document.getElementById('imge').src="./images/icy.jpg";
    }
    else if(wtr.innerText=="Lightning")
    {
        document.getElementById('imge').src="./images/lightning.jpg";
    }
    else if(wtr.innerText=="Rain")
    {
        document.getElementById('imge').src="./images/rainy.jpg";
    }
    else if(wtr.innerText=="Snowy")
    {
        document.getElementById('imge').src="./images/Snowy.jpg";
    }
    else if(wtr.innerText=="Stormy")
    {
        document.getElementById('imge').src="./images/Stormy.jpg";
    }
    else if(wtr.innerText=="Sunny")
    {
        document.getElementById('imge').src="./images/Sunny.jpg";
    }
    else if(wtr.innerText=="Clear")
    {
        document.getElementById('imge').src="./images/clear.jpg";
    }
    else if(wtr.innerText=="Windy")
    {
        document.getElementById('imge').src="./images/Windy.jpg";
    }
    else if(wtr.innerText=="Smoke")
    {
        document.getElementById('imge').src="./images/Smoke.jpg";
    }

}