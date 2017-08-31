var path = [];
var test_path = [1,2,0,3,1,0,2,1,1,2];
//var timeInterval = setInterval(generateNewNote, 300);
var count = 0;
var cur_path = [];

var isOn = false;
var isStrict = false;

ini();
//console.log(typeof(test_path[1]));
//playMelody(test_path);
main_control();

function ini(){
  isOn = false;
  isStrict = false;
  document.getElementById("count").innerHTML = "";
  document.getElementById("strict").disabled = true;
  document.getElementById("bt0").disabled = true;
  document.getElementById("bt1").disabled = true;
  document.getElementById("bt2").disabled = true;
  document.getElementById("bt3").disabled = true;
}
//用户专用的按键动作逻辑，加入了当前用户输入的旋律是否正确的判断
function userClickToPlay(num){
  clickToPlay(num);
  cur_path.push(num);
  if(cur_path[cur_path.length-1] != path[path.length-1]){
    //error;
    document.getElementById("count").innerHTML = "!!";
    cur_path = [];
    
  }
  else{
    if(cur_path.length == path.length)
      //correct; generate new random note
      ;
  }
}

function clickToPlay(num){
  var audio = document.getElementById("audio"+num);
  audio.play();//播放音频
  var element = document.getElementById('bt'+num);
  //https://stackoverflow.com/questions/27175115/why-javascript-cant-get-the-style-value-but-can-change-it
  var orginalColor = getComputedStyle(element).backgroundColor;//动态计算获取原来的按键背景色
  var clickColor = "";
  if(num == 0){
    clickColor = "#CC0000";
  }
  else if(num == 1){
    clickColor = "#00AA00";
  }
  else if(num == 2){
    clickColor = "#007799";
  }
  else if(num == 3){
    clickColor = "#BBBB00";
  }
  document.getElementById('bt'+num).style.backgroundColor = clickColor;
  var clickInterval = setTimeout(recover, 300);

  function recover(){
    document.getElementById('bt'+num).style.backgroundColor = orginalColor;
  }
}

function generateNewNote(){
  var curNote = Math.floor(Math.random() * 4); //新音符
  return curNote;
}

//clearInterval(timeInterval);

function switchAction(checkboxElem){
  if (checkboxElem.checked){
    isOn = true;
    document.getElementById("count").innerHTML = "--";
    document.getElementById("strict").disabled = false;
  }
  else{
    ini();
  }
}

function strictAction(checkboxElem){
  if (checkboxElem.checked)
    isStrict = true;
  else
    isStrict = false;
}

function main_control(){
  document.getElementById("bt0").disabled = false;
  document.getElementById("bt1").disabled = false;
  document.getElementById("bt2").disabled = false;
  document.getElementById("bt3").disabled = false;
  path.push(generateNewNote());
  playMelody(path);
  document.getElementById("count").innerHTML = path.length;
}




function playMelody(melody_path){
  document.getElementById("bt0").disabled = false;
  document.getElementById("bt1").disabled = false;
  document.getElementById("bt2").disabled = false;
  document.getElementById("bt3").disabled = false;
  for(var i=0; i<melody_path.length; i++){//我也很无奈，模拟按键只能这么写才能正常工作，一定不能传带参数的函数，ie.  setTimeout(clickToPlay(melody_path[i]),1000*(i+1));是不行的，这种情况所有按键一股脑全按了
    if(melody_path[i] == 0)
      setTimeout(click0,1000*(i+1));
    else if(melody_path[i] == 1)
      setTimeout(click1,1000*(i+1));
    else if(melody_path[i] == 2)
      setTimeout(click2,1000*(i+1));
    else if(melody_path[i] == 3)
      setTimeout(click3,1000*(i+1));
  }
}

function click0(){
  clickToPlay(0);
}
function click1(){
  clickToPlay(1);
}
function click2(){
  clickToPlay(2);
}
function click3(){
  clickToPlay(3);
}