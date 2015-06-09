
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

  this.Verify = function() {

    var total = +$("#answer" + this.id).val();//get the content of input.


    switch(this.oper) {
      case "+":
        num_12 = this.num1 + this.num2;
        break;
      case "-":
        num_12 = this.num1 - this.num2;
        break;
      case "*":
        num_12 = this.num1 * this.num2;
        break;
      case "/":
        num_12 = (this.num1 / this.num2).toFixed(2);
        total = total.toFixed(2);
        break;
    }
    if(total === num_12) {
      $("#icon" + this.id).attr("src", "correct.png");
    }
    else {
      $("#icon" + this.id).attr("src", "iconWrong.png");
    }//comparison of correct and wrong.

  }
}

$(document).ready(function() {
  equaArray = [];
  for(i=0; i < 10; i++) {
    var equa = new Equation();
    equa.id = i;
    equa.generateQuestion();
    equaArray.push(equa);
  } //write page.

  $("#submit").on("click", function(e) {
    e.preventDefault();
    //var total = +$("#answer").val();
    //var num12 = num1 + num2;

     //$("#icon").attr("src", "correct.png");
    //}
    //else {
     //$("#icon").attr("src", "iconWrong.png");
    //}
    for(i = 0; i < 10; i++) {
      equaArray[i].Verify();

    }
  })

})

