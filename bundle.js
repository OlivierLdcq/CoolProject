(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const text = document.querySelector('#text');
const button = document.querySelector('#button');
const ul = document.querySelector('ul');
let targeted;
let targetedButton;

const createNewList = () =>{
		const li = document.createElement("li");
		li.appendChild(document.createTextNode(text.value)); 
		const newButton = document.createElement("button");
		newButton.classList.add("newButton");
		li.appendChild(newButton);
		ul.appendChild(li);
		text.value ="";
		newButton.addEventListener('click',function(event){
			targetedButton = event.target;
			targetedButton.parentElement.remove();

		});

}

const lengthCheck =() =>{
	if(text.value.length > 0){
		return true;
	}else{
		return false;
	}
}

ul.addEventListener('click', function(event) {
	targeted = event.target;
	targeted.classList.toggle("done");
	
});


button.addEventListener('click', function(e) {
	if(lengthCheck()){
		createNewList();
	}
});

text.addEventListener('keypress', function(event) {
	if(lengthCheck() && event.which === 13){
		createNewList();
	}
	
});
},{}]},{},[1]);
