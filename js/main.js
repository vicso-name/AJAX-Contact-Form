$("form.contact-form").submit(function() {
	let UserName=document.getElementById('UName').value;
	let userPhone=document.getElementById('UPhone').value;
	var RadioBtn=document.getElementById('radioBtn').checked;


	if(UserName==""){
		document.getElementById('NameBlank').innerHTML="Please Enter Your Name";
		return false;
	
	  }else if(UserName!=""){
		document.getElementById('NameBlank').innerHTML="";
	  }
	  
	if(userPhone==""){
		document.getElementById('PhoneBlank').innerHTML="Please Enter Your Phone";
		return false;

	}else if(userPhone!=""){
		document.getElementById('PhoneBlank').innerHTML="";
	}

	if(RadioBtn==false){
		let acceptionValidation=document.getElementById('acceptionLine');
		acceptionValidation.classList.add("unvalidradio");
		return false;

	}else{
		let acceptionValidation=document.getElementById('acceptionLine');
		acceptionValidation.classList.remove("unvalidradio");
	}

	if(UserName!=false && userPhone!=false && RadioBtn!=false){

		let th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.bg-success').fadeIn();
			setTimeout(function() {
				$(th).find('.bg-success').fadeOut()
				th.trigger("reset");
			}, 3000);
		});
		return false;
	}	

});