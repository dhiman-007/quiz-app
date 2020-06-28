
var username_name;

function copy(){
	alert("Copy and Paste is restricted");
}
const name = document.getElementById('Name')
const divz = document.getElementById('instruction')
const showDiv = ()=>{
	
	divz.style.display='block';
	if(name.value.length==0){
		divz.style.display='none';
	}
}


const show =()=>{
var z1=0;
 username_name=document.getElementById("Name").value;
	if(username_name.length==0){
		z1=1;
		alert("Enter Your Name");
		return false;
	}
	if(z1!=1){
    document.getElementById("myDiv").style.display="block";
	setTimeout("hide()", 2500);  // 2 seconds
	}
}

const hide = () =>{	
    document.getElementById("myDiv").style.display="none";
	setTimeout("startQuiz()", 0100);
}

const startQuiz =() => {

document.getElementById("NameHere").style.display="none";
document.getElementById("Name").style.display="none";
document.getElementById("instruction").style.display="none";
document.getElementById("start-quiz").style.display="none";
document.getElementById("basic_info").style.display="block";
document.getElementById("name_value").style.display="block";

document.getElementById("name_value").innerHTML= "Hi, " + document.getElementById("Name").value;
document.getElementById("started").innerHTML="<b> Quiz is running </b>";
document.getElementById("time_left").style.display="block";
document.getElementById("timer").style.display="block";
document.getElementById("timer").innerHTML =  07 + ":" +00;
  
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(":");
  var mm= timeArray[0];
  var check=0;
  
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){mm=mm-1}
  
  if(mm<0){
	ResultQuiz();
	}
  document.getElementById('timer').innerHTML =
	mm + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
	var x="", z, sel="" , i , j;
	for( i=0 ;i <myQuestion. length; i++){
	x+="<br/>"+ ""+ (i+1)+" :" +myQuestion[i].question +" <br/><br/>";
	z="abc";
	sel= '<select class="show" id= show-'+(i+1)+'>'
		 + '<option value="$">Select your Answer</option>'
		+'<option value="a">a</option>'+
		'<option value="b">b</option>'
		+'<option value="c">c</option>'
		+'</select>';
		for(j=0;j<3;j++){
		x+=z.charAt(j)+ ": "+ myQuestion[i].answers[z.charAt(j)]+ "<br/> <br/>" ;
		}
		x+=sel+ "<br/><br/>";
	}
	document.getElementById("show-question").innerHTML=x.toString();
	document.getElementById("result-quiz").style.display="block";
	}
	
	
	const ResultQuiz = () =>{
	
		
	var answers_user="", answers="", i=0, l , m, out_var, out_var_user, un=0, c=0, wrong=0, output="";
	for( i=0; i < myQuestion.length; i++){
		answers+=myQuestion[i].correctAnswer;
	}
	for(i=0;i <myQuestion.length; i++){
		l="show-"+(i+1);
		m=document.getElementById(l).value;
		answers_user+=m;
	}
	output+="Your Wrong Answers : <br/><br/> ------------------------------------------ <br/> <br/> "
	for(i=0;i< answers.length; i++){
	 if(answers_user.charAt(i)=='$'){
				++un;
				}
		else if(answers.charAt(i)== answers_user.charAt(i)){
				++c;
			}
			else{
				++wrong;
				out_var=myQuestion[i].correctAnswer;
				out_var_user=answers_user.charAt(i);
				output+="Qus: " +myQuestion[i].question+ "<br/><br/>"+ "Right answer: "+ myQuestion[i].answers[out_var]+ "<br/>" + "Your answer: "+ 
				myQuestion[i].answers[out_var_user]
				+"<br/><br/> ------------------------------------------<br/><br/> ";
			}
	}
	document.getElementById("timer").style.display="none";
	document.getElementById("time_left").style.display="none";
	document.getElementById("show-question").style.display="none";	
	document.getElementById("basic_info").style.display="none";	
	document.getElementById("result-quiz").style.display="none";
	
	document.getElementById("edge").style.display="block";	
	document.getElementById("Answer1").innerHTML= "Quiz is Over: <br/><br/> Your result is: <br/> " + c + " out of " + myQuestion.length;  
	document.getElementById("Answer2").innerHTML= "Number of Attempted Question: <br/> " + (myQuestion.length-un) ;
	document.getElementById("Answer3").innerHTML= "Number of Wrong Answer: <br/> " + wrong ;
	document.getElementById("Answer4").innerHTML= output.toString();

	
  setTimeout(()=>{
	function download(filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	  }
		  var text= "Hi, "+ username_name+ " Your Score is "+ c + " out of "+ myQuestion.length + ". Thanks for taking this Quiz. ";
		  var userName= username_name; 
		  download(userName+".txt",text);
  },3000)
 
}


window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
    
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
    
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
     
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };


