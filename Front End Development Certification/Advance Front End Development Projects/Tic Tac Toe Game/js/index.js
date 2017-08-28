//标题
//whose turn？
//3*3表格 onclick
//谁win就alert
var isComputer = false;
var board = new Array(3);//棋盘
var count = 0;
var computer_var;//computer's turn using timeout techiques.
var userIsX = false;//用户是o还是x
var user_piece = ' ';
var computer_piece = ' ';
var elem = document.getElementById('select');
var isTerminated = false;

function ini(){
  isTerminated = false;
  if(userIsX){
    user_piece = 'x';
    computer_piece = 'o';
  }
  else{
    user_piece = 'o';
    computer_piece = 'x';
  }
  isComputer = false;//永远先手
  document.getElementById("who").innerHTML = "";
  count = 0;
  for(var i=0; i<3; i++){
    board[i] = new Array(3);
    for(var j=0; j<3; j++){
      board[i][j] = " ";
  document.getElementById("cell"+i+j).innerHTML = board[i][j];
    }
  }
  document.getElementById("x_button").disabled = false;//disable the button
  document.getElementById("o_button").disabled = false;
  document.getElementById("who").innerHTML="Your turn";
}

function move(row,col){
  if(isTerminated)
    return;
  var title = "";
  if(isComputer){
    var arr = computer_play();
    row = arr[0];
    col = arr[1];
    title = "Your turn";//和语义反一下，因为走完了才显示要对方下棋
    board[row][col] = computer_piece;
  }
  else{
    if(board[row][col] == user_piece || board[row][col] == computer_piece)//下过的位置不能再下
     return;
    title = "Computer's turn";
    board[row][col] = user_piece;
  }
  document.getElementById("cell"+row+col).innerHTML = board[row][col];
  document.getElementById("who").innerHTML=title;
  isComputer = !isComputer;
  count++;
  //判定结果
  if(count>=5){
    if(judge() != "No Result")
    { 
      isTerminated = true;
      clearTimeout(computer_var);
      var result = judge();
      document.getElementById("who").innerHTML = result;
      elem.style.display = 'initial'; 
      return;
    }
  }

   if(isComputer)//电脑自动走
     computer_var = setTimeout(move, 200);
} 

function computer_play(){//电脑的下法，随机在空的位置上走棋
  var row = Math.floor(Math.random() * 3); 
  var col = Math.floor(Math.random() * 3);
  while(board[row][col] == user_piece || board[row][col] == computer_piece){
    row = Math.floor(Math.random() * 3); 
    col = Math.floor(Math.random() * 3);
  }
  return [row,col];
}

function judge(){//判定谁赢了
   //人的胜利条件
  if(board[0][0] == user_piece){
    if(board[0][1] == user_piece)
      if(board[0][2] == user_piece)
        return "You win!";
    if(board[1][1] == user_piece)
      if(board[2][2] == user_piece)
        return "You win!";
    if(board[1][0] == user_piece)
      if(board[2][0] == user_piece)
        return "You win!";
  }
  if(board[1][1] == user_piece){
    if(board[2][0] == user_piece)
      if(board[0][2] == user_piece)
        return "You win!";
    if(board[0][1] == user_piece)
      if(board[2][1] == user_piece)
        return "You win!";
    if(board[1][0] == user_piece)
      if(board[1][2] == user_piece)
        return "You win!";
  }
  if(board[2][2] == user_piece){
    if(board[2][1] == user_piece)
      if(board[2][0] == user_piece)
        return "You win!";
    if(board[1][2] == user_piece)
      if(board[0][2] == user_piece)
        return "You win!";
  }
  //电脑的胜利条件
  if(board[0][0] == computer_piece){
    if(board[0][1] == computer_piece)
      if(board[0][2] == computer_piece)
        return "Computer wins!";
    if(board[1][1] == computer_piece)
      if(board[2][2] == computer_piece)
        return "Computer wins!";
    if(board[1][0] == computer_piece)
      if(board[2][0] == computer_piece)
        return "Computer wins!";
  }
  if(board[1][1] == computer_piece){
    if(board[2][0] == computer_piece)
      if(board[0][2] == computer_piece)
        return "Computer wins!";
    if(board[0][1] == computer_piece)
      if(board[0][2] == computer_piece)
        return "Computer wins!";
    if(board[1][0] == computer_piece)
      if(board[1][2] == computer_piece)
        return "Computer wins!";
  }
  if(board[2][2] == computer_piece){
    if(board[2][1] == computer_piece)
      if(board[2][0] == computer_piece)
        return "Computer wins!";
    if(board[1][2] == computer_piece)
      if(board[0][2] == computer_piece)
        return "Computer wins!";
  }
  if(count >= 9){
    return "Draw";
  }
  else{
    return "No Result";
  }
}

function select(b){
  userIsX = b;
  var myVar = setTimeout(ini, 1000);
  elem.style.display = 'none'; 
  document.getElementById("x_button").disabled = true;//disable the button
  document.getElementById("o_button").disabled = true;
}