function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} // Get a random number between 1 to 100.

function randomChoose (operators) {

  var index = Math.floor(Math.random() * operators.length);
  return operators[index];
} // Get a operator.

function generateQuestion() {
  for(i = 0; i < 10; i++) {
    $("#box").append('<p><span id="num' + i + '_1"></span><span id="oper' + i + '"></span><span id="num' + i +'_2"></span> = <input type="text" id="answer' + i +'"/> <img id="icon' + i +'" src=""></img></p>');
    var num1 = getRandomInt(1, 100);
    var num2 = getRandomInt(1, 100);
    var operators = ["+", "-", "*", "/"];
    var oper = randomChoose(operators);

    $("#num" + i + "_1").html(num1);
    $("#num" + i + "_2").html(num2);
    $("#oper" + i).html(oper);
  } //Get a set of question
}

function compareAnswer() {
  for(i = 0; i < 10; i++) {
    var total = +$("#answer" + i).val();
    var num1 = +$("#num" + i + "_1").html();
    var num2 = +$("#num" + i + "_2").html();
    var oper = $("#oper" + i).html();

    switch(oper) {
      case "+":
        num_12 = num1 + num2;
        break;
      case "-":
        num_12 = num1 - num2;
        break;
      case "*":
        num_12 = num1 * num2;
        break;
      case "/":
        num_12 = num1 / num2;
        break;
    }

    if(total === num_12) {
      $("#icon" + i).attr("src", "correct.png");
    }
    else {
       $("#icon" + i).attr("src", "iconWrong.png");
    }
  }
}//comparetion of correct and wrong.

$(document).ready(function() {


  generateQuestion();

  $("#submit").on("click", function(e) {
    e.preventDefault();
    //var total = +$("#answer").val();
    //var num12 = num1 + num2;
     //$("#icon").attr("src", "correct.png");
    //}
    //else {
     //$("#icon").attr("src", "iconWrong.png");
    //}
  compareAnswer();
  })

})
