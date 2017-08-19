//不考虑运算符的优先级
var equation = [];
var str = "";
var operator = "+-/*";
var isJustEqual = false;

function operate(op){
  if(isJustEqual){
    isJustEqual = false;
  }
  console.log("-------"+str.length);
  if(str.length == 0){
    //符号不能出现在开头
    return;
  }
  if(operator.indexOf(str.charAt(str.length-1))!=-1)//覆盖之前的运算符 //not str.length()!
    equation.pop();
  equation.push(op);
  str = equation.join("");
  document.getElementById("cal_display").innerHTML = str;
} 

function digit(d){//在html中给onclick传参数
  if(isJustEqual){
    equation = [];
    isJustEqual = false;
  }
  if(d == '0')
    if(str.charAt(str.length-1) == '/')
      return;
  equation.push(d);
  str = equation.join("");
  document.getElementById("cal_display").innerHTML = str;
}

function dot(){
  if(isJustEqual){
    equation = [];
    equation.push("0.");
    isJustEqual = false;
    str = equation.join("");
  document.getElementById("cal_display").innerHTML = str;
    return;
  }
  if(str.length == 0 || operator.indexOf(str.charAt(str.length-1))!=-1 || str.charAt(str.length-1) == '.')
    return;
  equation.push('.');
  str = equation.join("");
  document.getElementById("cal_display").innerHTML = str;
}

function allClear(){
  equation = [];
  str = equation.join("");
  document.getElementById("cal_display").innerHTML = str;
}

function equalTo(){
  if(str.charAt(str.length-1) == '.' || operator.indexOf(str.charAt(str.length-1))!=-1)
    return;//末尾是小数点或运算符时 等号无效

  cal();
  document.getElementById("cal_display").innerHTML = str;
  equation = [];
  equation.push(str);
  isJustEqual = true;//置flag，表示刚刚进行了运算
}

function cal(){//纯粹连着算下去，结果取两位小数点
  
}