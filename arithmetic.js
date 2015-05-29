function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateQuestion() {
  for(i = 0; i < 10; i++) {
    $("#box").append('<p><span id="num' + i + '_1"></span> + <span id="num' + i +'_2"></span> = <input type="text" id="answer' + i +'"/> <img id="icon' + i +'" src=""></img></p>');
    var num1 = getRandomInt(0, 100);
    var num2 = getRandomInt(0, 100);
    $("#num" + i + "_1").html(num1);
    $("#num" + i + "_2").html(num2);
  }
}

function compareAnswer() {
  for(i = 0; i < 10; i++) {
    var total = +$("#answer" + i).val();
    var num1 = +$("#num" + i + "_1").html();
    var num2 = +$("#num" + i + "_2").html();
    var num_12 = num1 + num2;
    //var num_12 = +$("#num" + i + "_1").html() + +$("#num" + i + "_2").html();
    if(total === num_12) {
      $("#icon" + i).attr("src", "correct.png")
    }
    else {
       $("#icon" + i).attr("src", "iconWrong.png")
    }
  }
}

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
