//一个开始键
//一个暂停键
//一个时间显示区域(包括剩余时间和到底是session还是break)
//一个session时间增加按键
//一个session时间减小按键
//一个session时间显示区域
//一个break时间增加按键
//一个break时间减小按键
//一个break时间显示区域

var isStart = false;
var isFresh = true;
var timeInterval;
var time = 0;
var s_min = 25;
var b_min = 5;
var remain_time = 0;
var isSession = true;

function control(){
  isStart = !isStart;
  var textOfButton = "";
  if(isStart){
    timeInterval = setInterval(displayTime, 1000);//每1秒重复执行一次
    textOfButton = "Pause";
    displayTime();
  }
  else{
    clearInterval(timeInterval);//暂停
    textOfButton = "Start";
  }
  document.getElementById("controller").value = textOfButton;
  if(isFresh){//如果调节过时间，那么remain_time将被重置
    isFresh = false;
    remain_time = 60*s_min;
    isSession = true;
  }
}

function displayTime() {    
  remain_time--;
  if(remain_time<0){
    isSession = !isSession;//session和break之间的切换
    if(isSession){
      remain_time = s_min*60;
    }
    else{
      remain_time = b_min*60;
    }
    remain_time--;
  }
  //确定title部分
  var title = "";
  if(isSession){
    title = "Session";
  }
  else{
    title = "Break";
  }
  document.getElementById("title").innerHTML = title;

  //确定具体时间
  var min = Math.floor(remain_time/60);
  var second = remain_time%60;
  var display_result = min+":"+second;
  var indexOfColumn = display_result.indexOf(":");
  if(second<10)
    display_result = display_result.slice(0,indexOfColumn+1)+"0"+display_result.slice(indexOfColumn+1);
  document.getElementById("timer").innerHTML = display_result;
}
//调节时间
function adjust(isSess,op){
  if(isStart)
    return;
  isFresh = true;
  if(isSess){
    if(op == '-'){
      if(s_min>1)
        s_min--;
    }
    else if(op == '+'){
      s_min++;
    }
    document.getElementById("s_time").innerHTML = s_min;
  }
  else{
    if(op == '-'){
      if(b_min>1)
        b_min--;
    }
    else if(op == '+'){
      b_min++;
    }
    document.getElementById("b_time").innerHTML = b_min;
  }
}