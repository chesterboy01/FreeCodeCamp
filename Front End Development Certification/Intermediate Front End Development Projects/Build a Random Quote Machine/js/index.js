var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=";//url最好手打，避免换行
$(document).ready(function() {
    var quote = "";
    var author = "";
    $("#getMessage").on('click', function(){  
        $.ajaxSetup({cache: false});//A Boolean value indicating whether the browser should cache the requested pages. Default is true
        $.getJSON(url, function(data) {
          quote = data[0].content;
          author = data[0].title;
          $(".message").html(quote + "<p>— " + author + "</p>");
        });  
    });
    
    //https://dev.twitter.com/web/intents
    //https://stackoverflow.com/questions/20108436/custom-message-with-twitter-web-intents
    $("#tweet").on('click', function(){
        window.open("https://twitter.com/intent/tweet?text="+quote+" "+author);
    });
});