
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