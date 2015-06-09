
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
} // Get a random number between 1 to 100.


function randomChoose(operators) {
  var index = Math.floor(Math.random() * operators.length);
  return operators[index];
} // Get a operator.
function Equation () {
  this.id = 0;
  this.num1 = getRandomInt(1, 100);
  this.num2 = getRandomInt(1, 100);
  var operators = ['+','-','*','/'];
  this.oper = randomChoose(operators);

  this.generateQuestion = function() {
    //$("#box").append('<p><span id="num1"'+ this.id +
    //    '></span><span id="oper"' + this.id +'></span><span id="num2"' + this.id +
    //    '></span> = <input type="text" id="answer"/><img id="icon" src=""</img> </P>');
    $("#box").append(
      $("<p/>").append(
        $("<span/>", {
          type: "text",
          id: "num1" + this.id
        }),
        $("<span/>", {
          type: "text",
          id: "oper" + this.id
        }),

        $("<span/>", {
          type: "text",
          id: "num2" + this.id
        }),
        $("<span/>").text("="),
        $("<input/>", {
          type: "text",
          id: "answer" + this.id
        }),
        $("<img/>", {

          id: "icon" + this.id
        })
      )

    )
    $("#num1" + this.id).html(this.num1);
    $("#num2" + this.id).html(this.num2);
    $("#oper" + this.id).html(this.oper);
  }

}

function Verify() {
    for(i = 0; i < 10; i++) {
      var total = +$("#answer" + i).val();//get the content of input.
      var num1 = +$("#num1" + i ).html();
      var num2 = +$("#num2" + i).html();
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
}//comparison of correct and wrong.


for(i=0; i < 10; i++) {
    var equa = new Equation();
    equa.id = i;
    equa.generateQuestion();
    equaErray = [];
    equaErray.push(equa);
}

$(document).ready(function() {

  $("#submit").on("click", function(e) {
    e.preventDefault();
    //var total = +$("#answer").val();
    //var num12 = num1 + num2;
     //$("#icon").attr("src", "correct.png");
    //}
    //else {
     //$("#icon").attr("src", "iconWrong.png");
    //}
     Verify();
  })

})

