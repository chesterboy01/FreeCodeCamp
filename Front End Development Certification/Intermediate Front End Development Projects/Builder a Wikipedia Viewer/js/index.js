
$(document).ready(function() {

  $("#random").on('click', function(){
      window.open("https://en.wikipedia.org/wiki/Special:Random");  
  });

  var url = "https://en.wikipedia.org/w/api.php?callback=?";

  $("#sc").on('click', function(){
      //getJSON is a shorthand Ajax function
      $.ajax({
        dataType: "jsonp",//still confused about json and jsonp
        url:url,
        data:{
          action: 'query',
          format: 'json',
          formatversion: 2,
          generator: 'search',
          gsrsearch: $("#query").val(),//获取文本框的文字内容
          gsrwhat: "text",
          prop: "extracts|info",
          exsentences: 3,      
          exlimit: 10,
          exintro: 1,
          inprop: "url",
        },
        success: function(data){
          //console.log("!!!!!!!");
          data.query.pages.forEach(displayResult)//没有分号！
        }
      });
  });

  function displayResult(entries){
        $("#entries").append("<li><a href="+entries.fullurl+">"+"<h2>"+entries.title+"</h2>"+entries.extract+"</a></li>");
  }
});   //https://www.freecodecamp.com/challenges/target-a-specific-child-of-an-element-using-jquery
      //https://www.freecodecamp.com/challenges/create-a-bulleted-unordered-list
      //$("#entries li:nth-child(2)").html("1111111");//获取孩子对象 修改其属性