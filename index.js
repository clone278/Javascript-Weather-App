$(document).ready(function(){
  $.get("http://ipinfo.io", function(r) { 
  
  $('#coun').append(r.country);
  $('#cit').append(r.city);
  $('#reg').append(r.region);
  $('#loc').append(r.loc);
    loc = r.loc.split(',');
    lat = loc[0];
    lon = loc[1];
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=8ccd5c26658281d7e5879a2e7a390c4c";
  
$.get(url,function(data){
   $('#main').append(data.weather[0].main);   
   $('#des').append(data.weather[0].description);
   $('#temp').append(data.main.temp-273.15+' °C');
   $('#pre').append(data.main.pressure+' hpa');
   $('#hum').append(data.main.humidity+'%');
  
  iurl = 'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
   $('#w_icon').attr("src",iurl);
      },"json");
}, "jsonp");
  

  
});