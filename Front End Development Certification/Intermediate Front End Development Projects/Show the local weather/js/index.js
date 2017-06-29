
var x = document.getElementById("display_area");
var pos = {"lat":-1000,"lon":-2000};//艹，只能用全局object了
//为了防止值不变，最好把变量都包在函数体里面

if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(showPosition);
else
    x.innerHTML = "Geolocation is not supported by this browser.";

function showPosition(position) {
    pos.lat = position.coords.latitude;
    pos.lon = position.coords.longitude;
    x.innerHTML = "Latitude: " + pos.lat + 
    "<br>Longitude: " + pos.lon;
    //?callback=?    很关键！！
    var url = "https://api.darksky.net/forecast/7555d2cf3bc9c6556400f832815eac15/"+pos.lat+","+pos.lon+"?callback=?";
      document.getElementById("url").innerHTML = url;

      $.getJSON(url, function(data) {
      var temp = data.currently.temperature;
      var temp_area = document.getElementById("termperature");
      var isFarenheit = true;
      temp_area.innerHTML = temp+" F";
      $("#bt").on('click', function(){
        
        isFarenheit = !isFarenheit; //取反用!，而不是~
        if(isFarenheit)
          temp_area.innerHTML = temp+" F";
        else
          temp_area.innerHTML = ((temp-32)/9*5).toFixed(2) + " C";//保留两位小数
        alert(isFarenheit);
      });
      var icon_area = document.getElementById("icon");
      icon_area.innerHTML = "Weather: "+data.currently.summary;
      var typeOfWeather = "fa-sun-o";
      if(data.currently.summary.indexOf("Cloud") != -1)
        typeOfWeather = "fa-cloud";
      else if (data.currently.summary.indexOf("Rain") != -1)
        typeOfWeather = "fa-shower";
      else if(data.currently.summary.indexOf("Snow") != -1)
         typeOfWeather = "fa-snowflake-o";
      var ic_str = '<i class=\"fa fa-3x '+typeOfWeather+'\"></i>';
      document.getElementById("ic").innerHTML = ic_str;
    });   
}