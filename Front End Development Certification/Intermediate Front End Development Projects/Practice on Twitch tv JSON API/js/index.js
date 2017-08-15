
$("#w33").css('visibility', 'hidden');
$("#w33").css('visibility', 'visible');

var id_list = ["esl","tchannel","w33"];
var url_list = ["esl_sc2","test_channel","w33haa"];
//别乱用for loop 里嵌入 jQuery 要用each()

$("li").each(function(index,element){
  
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+url_list[index]+'?callback=?', function(data) {
      console.log(data);
        if(data.stream != null){
          $(element).css("background-color", "green");
          $(element).children(".status").text(data.stream.channel.status);
        }
        else{
          $(element).css("background-color", "red");
        }
    });
});

function ds_all(){//index,element 都必不可少
  $("li").each(function(index,element){
     $(element).css('visibility', 'visible');
  });
}

function ds_online(){
  ds_all();
  $("li").each(function(index,element){
    if($(element).children(".status").html() == 'offline')
      $(element).css('visibility', 'hidden');
  });
} 

function ds_offline(){
  ds_all();
  $("li").each(function(index,element){
    if($(element).children(".status").html() != 'offline')
      $(element).css('visibility', 'hidden');
  });
}