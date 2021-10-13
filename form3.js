// JavaScript Document

//Validate username

function formValidator(){
    	
      var usrname = document.getElementById("username");
	  var emll = document.getElementById("emaill");
	  var phn = document.getElementById("phone");
	  var passd = document.getElementById("passwordd");
	  var cnfpassd = document.getElementById("cpassword");
	  
	  if(Uname(usrname))
	  {
		if(emailId(emll))
		{
		  if(phoneNo(phn))
		  {
			if(passWord(passd))
			{
			  if(cnfPassword(cnfpassd))
			  {
				return true;  
			  }
			}
		  }
		}
	  }
	  return false;
}

function Uname(elem){
	
	var crcl1 = document.getElementById("circle1");
	var exc1 = document.getElementById("excmtn1");
  	var smll1 = document.getElementById("small1");
	var usrExp = /^[a-zA-Z]+$/;
	if(elem.value.match(usrExp))
	{
	  smll1.textContent = "Username is valid";
	  smll1.style.color = "green";
	  crcl1.style.display = "block";
	  exc1.style.display = "none";
	  return true;
	}
	else
	{
	  smll1.textContent = "Please enter only characters between 3 and 30.";
	  smll1.style.color = "red";
	  exc1.style.display = "block";
	  crcl1.style.display = "none";
	  elem.focus();
	  return false;
	}
}

function emailId(elem){
	
	var crcl2 = document.getElementById("circle2");
	var exc2 = document.getElementById("excmtn2");
  	var smll2 = document.getElementById("small2");
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
	if(elem.value.match(emailExp))
	{
	  smll2.textContent = "email is valid";
	  smll2.style.color = "green";
	  crcl2.style.display = "block";
	  exc2.style.display = "none";
	  return true;
	}
	else
	{
	  smll2.textContent = "Please enter valid email";
	  smll2.style.color = "red";
	  exc2.style.display = "block";
	  crcl2.style.display = "none";
	  elem.focus();
	  return false;
	}
}


function phoneNo(elem){
	
	var crcl3 = document.getElementById("circle3");
	var exc3 = document.getElementById("excmtn3");
  	var smll3 = document.getElementById("small3");
	var phnExp = /^[6789]{1}[0-9]{9}$/;
	if(elem.value.match(phnExp))
	{
	  smll3.textContent = "Phoneno. is valid";
	  smll3.style.color = "green";
	  crcl3.style.display = "block";
	  exc3.style.display = "none";
	  return true;
	}
	else
	{
	  smll3.textContent = "Please enter valid phoneno.";
	  smll3.style.color = "red";
	  exc3.style.display = "block";
	  crcl3.style.display = "none";
	  elem.focus();
	  return false;
	}
}


function passWord(elem){
	
	var crcl4 = document.getElementById("circle4");
	var exc4 = document.getElementById("excmtn4");
  	var smll4 = document.getElementById("small4");
	var passdExp = /^[a-zA-Z]+[\@_\-\$\&]{1}[0-9]{1,3}$/;
	if(elem.value.match(passdExp))
	{
	  smll4.textContent = "Password is valid";
	  smll4.style.color = "green";
	  crcl4.style.display = "block";
	  exc4.style.display = "none";
	  return true;
	}
	else
	{
	  smll4.textContent = "Please enter valid password between 6 and 8 and in                          the sequence hjH@/_/-/$/&5.";
	  smll4.style.color = "red";
	  exc4.style.display = "block";
	  crcl4.style.display = "none";
	  elem.focus();
	  return false;
	}
}


function cnfPassword(elem){
	
	var crcl5 = document.getElementById("circle5");
	var exc5 = document.getElementById("excmtn5");
  	var smll5 = document.getElementById("small5");
	var passd = document.getElementById("passwordd");
    var cnfpassd = document.getElementById("cpassword");
	if(passd.value == cnfpassd.value)
	{
	  smll5.textContent = "Password matched";
	  smll5.style.color = "green";
	  crcl5.style.display = "block";
	  exc5.style.display = "none";
	  return true;
	}
	else
	{
	  smll5.textContent = "Password didn't match.";
	  smll5.style.color = "red";
	  exc5.style.display = "block";
	  crcl5.style.display = "none";
	  elem.focus();
	  return false;
	}
}