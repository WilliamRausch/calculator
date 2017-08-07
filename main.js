let buttons = ["C","placeholder","7","8","9","div","4","5","6","x","1","2","3","-","0","deci","solve","plus"];
let container = document.querySelector(".calculator");
let display = ' ';
let problem = [];
num1 = " ";
num2 = " ";
operator = " ";

 

for(i=0;i<buttons.length;i++){
	display += `<button type="button" class = "button" id ="th${buttons[i]}">${buttons[i]}</button>`;
	
	}
function update(){
	document.querySelector("#thplaceholder").innerHTML = `${problem}`;
}



window.onload = function(){
	


document.querySelector(`#thC`).addEventListener("click",function(){
 reset();
	console.log("clear was clicked");
	document.querySelector("#thplaceholder").innerHTML = `${problem}`;


});
document.querySelector(`#th7`).addEventListener("click",function(){
	problem.push("7");
	update();
	console.log("7 was clicked");


});
document.querySelector(`#th8`).addEventListener("click",function(){
	problem.push("8");
	update();
	console.log("8 was clicked");


});
document.querySelector(`#th9`).addEventListener("click",function(){
	problem.push("9");
	console.log("9 was clicked");
	update();

});
document.querySelector(`#thdiv`).addEventListener("click",function(){
	problem.push("/");
	update();

	console.log("div was clicked");


});
document.querySelector(`#th4`).addEventListener("click",function(){
	problem.push("4");
	update();

	console.log("4 was clicked");


});
document.querySelector(`#th5`).addEventListener("click",function(){
	problem.push("5")
	update();

	console.log("5 was clicked");


});
document.querySelector(`#th6`).addEventListener("click",function(){
	problem.push("6");
	update();

	console.log("6 was clicked");


});
document.querySelector(`#thx`).addEventListener("click",function(){
	problem.push("x");
	update();

	console.log("x was clicked");


});
document.querySelector(`#th1`).addEventListener("click",function(){
	problem.push("1");
	update();

	console.log("1 was clicked");


});
document.querySelector(`#th2`).addEventListener("click",function(){
	problem.push("2");
	update();

	console.log("2 was clicked");


});
document.querySelector(`#th3`).addEventListener("click",function(){
	problem.push("3");
	update();

	console.log("3 was clicked");


});
document.querySelector(`#th-`).addEventListener("click",function(){
	problem.push("-");
	update();

	console.log("- was clicked");


});
document.querySelector(`#th0`).addEventListener("click",function(){
	problem.push("0");
	update();

	console.log("0 was clicked");


});
document.querySelector(`#thdeci`).addEventListener("click",function(){
	problem.push(".");
	update();

	console.log("deci was clicked");


});
document.querySelector(`#thsolve`).addEventListener("click",function(){
	solve();
	

	console.log("solve was clicked");


});
document.querySelector(`#thplus`).addEventListener("click",function(){
	problem.push("+");
	update();

	console.log("plus was clicked");


});
};


function solve(){
	console.log("the probelm is" + problem);
	for(i=0;i<problem.length;i++){
		if(problem[i]=="+"){
			operator = "+";
			for(j=0;j<i;j++){
				num1 += problem[j];
				
			}
			for (j=i+1;j<problem.length;j++){
				num2 += problem[j];

			}
			console.log(num1+" is being added by"+num2);
			eval(num1,num2);
		}
		 else if(problem[i]=="-"){
		 	operator = "-";
			for(j=0;j<i;j++){
				num1 += problem[j];
				
			}
			for (j=i+1;j<problem.length;j++){
				num2 += problem[j];

			}
			console.log(num1+" is being subtracted by "+num2);
		}
		else if(problem[i]=="/"){
			operator = "/";
			for(j=0;j<i;j++){
				num1 += problem[j];
				
			}
			for (j=i+1;j<problem.length;j++){
				num2 += problem[j];

			}
			console.log(num1+" is being divided by "+num2);
		}
		else if(problem[i]=="x"){
			operator = "x";
			for(j=0;j<i;j++){
				num1 += problem[j];
				
			}
			for (j=i+1;j<problem.length;j++){
				num2 += problem[j];

			}
			console.log(num1+" is being multiplied by "+num2);
		}
		else{
			console.log("invalid");
		}
	}
	eval(num1,num2);
}


function eval(num1,num2){
	let ans = 0;
	let number1 = parseInt(num1);
	let number2 = parseInt(num2);
	console.log("eval activated");
	if(operator == "+"){
		ans = number1+number2;
	}
	else if(operator == "-"){
		ans = number1 - number2;
	}
	else if(operator == "x"){
		ans = number1*number2;
	}
	else{
		ans = number1/number2;
	}

	console.log("the answer is "+ ans);
	document.querySelector("#thplaceholder").innerHTML = `${ans}`;
}
function reset(){
	problem = [];
num1 = " ";
num2 = " ";
operator = " ";
}


container.innerHTML = display;

