var finished = false;
var guesses = 0;
var user_input_text;
var user_integer_number;
var target;

function do_game(){
  var random_number=Math.random()*100;
  var random_number_integer=Math.floor(random_number);
  target = random_number_integer + 1;

  while(!finished){
  user_input_text= prompt("I am thinking of a"+
                              "number between 1 and 100.\n\n"+
                              " Can you guess what it is?")
  user_integer_number= parseInt(user_input_text);
  guesses++;
  finished = check_input();
  }
}

function check_input(){

if(isNaN(user_integer_number)){
        alert("Please enter a number.\n")
        return false;
}
if((user_integer_number<0)||(user_integer_number>100)){
alert("The number should be greater than 0 and less than 100.")
return false;
}
if(user_integer_number<target){
alert("The number is greater than" + user_integer_number);
return false;
}
if(user_integer_number>target){
alert("The number is less than" + user_integer_number);
return false;
}
alert("YOU GOT IT!! The number is" + user_integer_number + "\n\n"
+ "You took" + guesses + "tries.")
return true;
}
