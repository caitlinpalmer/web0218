function checkExist(){
	var bValid = false;
	var sValue = this.value;
	if(sValue == ''){
		//not valid
		this.nextElementSibling.nextElementSibling.children[0].style.visibility = 'visible';
		this.nextElementSibling.children[0].style.visibility = 'hidden';

	}else{
		//say thank you
		this.nextElementSibling.children[0].style.visibility = 'visible';
		this.nextElementSibling.nextElementSibling.children[0].style.visibility = 'hidden';
		bValid = true;
	}
	return bValid;
}


function checkLetters(){
	var bValid = false;
	var sValue = this.value;
	if(sValue == ''){
		//not valid
		this.nextElementSibling.nextElementSibling.children[0].style.visibility = 'visible';
		this.nextElementSibling.children[0].style.visibility = 'hidden';
	}else{
		//check alphabetic
		var oAphabeticExp = /^[A-Za-z]*$/;
		var bTest = oAphabeticExp.test(sValue);
		if(bTest == false){
			//complain
			this.nextElementSibling.nextElementSibling.children[0].style.visibility = 'visible';
			this.nextElementSibling.children[0].style.visibility = 'hidden';
		}else{
			//say thankyou
			this.nextElementSibling.children[0].style.visibility = 'visible';
			this.nextElementSibling.nextElementSibling.children[0].style.visibility = 'hidden';
			bValid = true;
		}
	}
	return bValid;
}

function checkEmail(){
	var bValid = false;
	var sValue = this.value;
	if(sValue == ''){
		//not valid
		this.nextElementSibling.nextElementSibling.children[0].style.visibility = 'visible';
		this.nextElementSibling.children[0].style.visibility = 'hidden';
	}else{
		var oEmailExp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		var bTest = oEmailExp.test(sValue);
		if(bTest == false){
			//complain
			this.nextElementSibling.nextElementSibling.children[0].style.visibility = 'visible';
			this.nextElementSibling.children[0].style.visibility = 'hidden';
		}else{
			//say thankyou
			this.nextElementSibling.children[0].style.visibility = 'visible';
			this.nextElementSibling.nextElementSibling.children[0].style.visibility = 'hidden';
			bValid = true;
		}
	}
}

function checkAll(e){

	
	var bTest1 = checkAlphabetic.call(oFirstNameInput);
	var bTest2 = checkAlphabetic.call(oLastNameInput);
	var bTest3 = checkExist.call(oEmailInput);
	var bTest4 = checkExist.call(oPasswordInput);

	var bAllTests = bTest1 && bTest2 && bTest3 && bTest4;

	if(bAllTests == false){
		e.preventDefault();
	}

}

var oFirstNameInput = document.querySelector('#firstName');
oFirstNameInput.addEventListener('blur',checkLetters);

var oLastNameInput = document.querySelector('#lastName');
oLastNameInput.addEventListener('blur',checkLetters);

var oEmailInput = document.querySelector('#email');
oEmailInput.addEventListener('blur',checkEmail);

var oPasswordInput = document.querySelector('#password');
oPasswordInput.addEventListener('blur',checkExist);

var oForm = document.querySelector('form');
oForm.addEventListener('submit',checkAll);







