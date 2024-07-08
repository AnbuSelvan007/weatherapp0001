//var city=document.getElementById("city-name");
var div=document.querySelector(".weather-condition");
var count=0;
function getweather()
{
    if(count==1)
    {
        return;
    }
    count++;
    div.style="padding-top:0%";
    div.style="margin-top:0%";
   
    var cont=document.getElementsByClassName("container");
    cont.classname="container-blured";

    var x=document.getElementById("visit");
    x.style.display="none";
     var searchbox=document.getElementById("search-img");
     searchbox.style.display="none";
    var city=document.getElementById("city-name");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${"cb775a45038902d5e272e073377c2ad2"}`)
    .then((res)=>res.json())
    .then((data)=>{
        updateweather(data);
        return;
    })
    .catch((err)=>{
        head=document.createElement("h1");
        head.style.color="red";
        head.textContent="Refresh page and Try Again";
        div.append(head);
        
    });
   
   

}
var temp,pressure,condition,wind,img;
function updateweather(data)
{   var getcityname=document.getElementById("city-name");
    var setcityname=document.createElement("h1");
    var tite=document.getElementById("title");
    tite.style="font-size:26px";
    setcityname.textContent=getcityname.value;
    tite.appendChild(setcityname);

   //img setting
   var tempcont=document.getElementById("temp-cont");
    setimage(data.weather[0].main);
    
    //temperature report
    var temp=document.createElement("h1");
    temp.textContent=Math.floor(data.main.temp-273.15)+"℃";
    tempcont.appendChild(temp);
    tempcont.style="font-size:20px";
    var button=document.getElementById("btn");
    temp.style="margin-top:0%";

    var weathercondition=document.createElement("h1");
    var setweathercont=document.getElementById("weather-cont");
    weathercondition.textContent="Condition:"+data.weather[0].main;
    setweathercont.appendChild(weathercondition);
    //wind setting
    var windpress=document.getElementById("wind-press");
    var  windcont=document.getElementById("wind-press-cont");
    windpress.style.display="block";
    var wind=document.createElement("h1");
    wind.textContent=data.wind.speed+"KM/H";
    windcont.appendChild(wind);
    wind.style="margin-top:0%";
    //measuring pressure
    var press=document.createElement("h1");
    press.textContent=data.main.pressure+"Pa";
    windcont.appendChild(press);
    press.style="margin-top:0%";
    console.log(data);

    //diable the searching after 1st search
    disable_btn();
    var end=document.getElementById("exit");
    end.style.display="block";
    
    
}

function setimage(condition)
{  
    console.log(condition);
    if(condition=="Clouds")
        {
            var get_img_id=document.getElementById("cloudy");
            get_img_id.style.display="block";
        }
        
    else if(condition=="Rain")
    {
        var get_img_id=document.getElementById("rain");
        get_img_id.style.display="block";
    }
   
    else if(condition=="Mist"){
        var get_img_id=document.getElementById("cloudysun");
        get_img_id.style.display="block";
    }

   
    else if(condition=="Clear"){
        var get_img_id=document.getElementById("sun");
        get_img_id.style.display="block";
    }
    
    else if(condition=="Thuder"){
        var get_img_id=document.getElementById("thunder");
        get_img_id.style.display="block";
    }

    else if(condition=="Snow")
    {
        var get_img_id=document.getElementById("snow");
        get_img_id.style.display="block";
    }
    else if(condition=="Haze")
    {
        var get_img_id=document.getElementById("haze");
        get_img_id.style.display="block";
    }
   

}
function disable_btn()
{
    var button=document.getElementById("btn");
    button.setAttribute("disabled",true); 
}
