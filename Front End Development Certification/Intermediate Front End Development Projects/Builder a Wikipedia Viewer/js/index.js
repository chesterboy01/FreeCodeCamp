$("#random").on('click', function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");  
});




$("#sc").on('click', function(){
    var str = $("#query").val();//获取文本框的文字内容
    //alert(str);
    var url = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json";
    //$("#entries li:nth-child(2)").html("1111111");//获取孩子对象 修改其属性
    $.getJSON(url, function(data) {
      //https://www.freecodecamp.com/challenges/target-a-specific-child-of-an-element-using-jquery
      //https://www.freecodecamp.com/challenges/create-a-bulleted-unordered-list
    });
});