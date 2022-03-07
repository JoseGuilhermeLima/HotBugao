const inputs = document.querySelectorAll(".input__personal");

function add(){
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function rem(){
	let parent = this.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input__personal=> 
{
	input__personal.addEventListener("focus", add);
	input__personal.addEventListener("blur", rem);
});