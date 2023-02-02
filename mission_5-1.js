var displayNum1 = 0;
var displayNum2 = 0;
var buttonSign1;
var resetFlag = 0;
//resetFlagは四則演算ボタンの初期値(何も押されていないときは0)//



//数字ボタン//
function append(buttonNum){
  if (resetFlag == 1){
    displayNum1 = 0;
    resetFlag = 0; //resetFlagを0に戻さないと数字が入力できない//
  }

  displayNum1 = 10*displayNum1 + buttonNum;
  var object = document.getElementById("num");
  object.innerText = displayNum1;
}



//記号ボタン//
function sign(buttonSign){
  resetFlag = 1;
  displayNum2 = displayNum1;
  buttonSign1 = buttonSign;
  
}
 
//Cボタン//
function reset(){
  displayNum1 = 0;
  var object = document.getElementById("num");
  object.innerText = displayNum1;

}

//=ボタン//
function run(){
  switch (buttonSign1){
    case '+':
      displayNum1 = displayNum2+displayNum1;
      break;
    
    case '-':
      displayNum1 = displayNum2-displayNum1;
      break;

    case '*':
      displayNum1 = displayNum2*displayNum1;
      break;

    case '/':
      if (displayNum1 > 0){
        displayNum1 = displayNum2/displayNum1;
      }
      if (displayNum1 == 0){
        displayNum1 = "error";
      }
      break;
    
    default:
      break;
  }

  resetFlag = 1;
  
  
  var object = document.getElementById("num");
  object.innerText = displayNum1;
  
    
}