
$(document).ready(function() {
	$("#tabs").tabs({cache: true});
	$("div#errorMessage").hide();
	$("div#confPwd").hide();
});


function showLoginBox(){
	var basePath = "file:///C:/Users/himangi/work/open_project/"
	if(self.location.href== (basePath + "logIn.html") || self.location.href == (basePath + "logIn.html#")){
	document.getElementById("loginBox").style.display="inline";
	document.getElementById("forgotPwdBox").style.display="none"
	}
	else var basePath = "file:///C:/Users/himangi/work/open_project/"
	if(self.location.href== (basePath + "register.html") || self.location.href == (basePath + "register.html#")){
		self.location.href="logIn.html"
		document.getElementById("loginBox").style.display="inline"
		document.getElementById("forgotPwdBox").style.display="none"
	}
}
function showForgotPwd(){
	document.getElementById("loginBox").style.display="none"
	document.getElementById("forgotPwdBox").style.display="inline"



}

function showRegisterBox(){
	document.getElementById("registerBox").style.visibility="visible";
}
function logIn(){
	if($("#username").val() == '') { $("#username").addClass("error");
	//$("#username").css({"border-color":"red","border-style":"ridge"});}
	//$("div#errorUsername").append("user name")
    $("div#errorMessage").show();
  
  }


	else if($("#password").val() == '') {$("#password").addClass("error"); 
		//$("div#errorUsername").append("password")
    	$("div#errorMessage").show();
    }

	else
	self.location.href="dashboard.html";
}
function resetPassword(){
	if($("#uname").val() == '') { $("#uname").addClass("error");
	$("div#errorMessage").show();}
}
function showQuestionBox(){
	document.getElementById("showPwdBox").style.display="none"
	document.getElementById("showQuestionBox").style.display="inline"
	$("#showSuccessMessage").hide()
}
function showPwdBox(){
	
	document.getElementById("showQuestionBox").style.display="none"
	document.getElementById("showPwdBox").style.display="inline"

	
}
function showSuccessMessage(){
	$("#showSuccessMessage").show();
	$("#showPwdBox").hide();
}

function getProfile(){
	pwd=$("#rPassword").val()
	if($("#rName").val() == '') {$("#rName").addClass("error");
	$("div#errorMessage").show();}
    //$("div#errorUsername").show();
	else if($("#rLastname").val() == '') {$("#rLastname").addClass("error");
	$("div#errorMessage").show();}
	else if($("#rEmailId").val() == '') {$("#rEmailId").addClass("error");
	$("div#errorMessage").show();}

	else if($("#rPassword").val() == '') {$("#rPassword").addClass("error");
	$("div#errorMessage").show();}
	else if($("#rConfirmPassword").val() != pwd) { $("#rConfirmPassword").addClass("error");
	$("div#confPwd").show();}
	else if($("#selectRole").val() == 'Select Role') { $("#selectRole").addClass("error");
	$("div#errorMessage").show();}
	else if($("#selectQuestion").val() == 'Select Question') { $("#selectQuestion").addClass("error");
	$("div#errorMessage").show();}

	else
	emailAddress=$("#rEmailId").val()
	function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp('^[a-z|A-Z]+[a-z|A-z|0-9]+.*[a-z|A-Z|0-9]@[a-z|A-Z|0-9]+\.[com|biz|org|edu|co|au|uk]+$')
    return pattern.test(emailAddress)
}
		if(!isValidEmailAddress(emailAddress)){

			alert("invalid email address "+ emailAddress)
		}
		else
	
		self.location.href="profile.html"; 
}	
function validateRegisterData(){
	var registerData = new Array()
	registerData["rName"]=$("#rName").val()
	registerData["rLastname"]=$("#rLastname").val()
	registerData["rEmailId"]=$("#rEmailId").val()
	registerData["rPassword"]=$("#rPassword").val()
	registerData["rConfirmPassword"]=$("#rConfirmPassword").val()
	registerData["selectRole"]=$("#selectRole").val()
	registerData["selectQuestion"]=$("#selectQuestion").val()
	registerData["rAnswer"]=$("#rAnswer").val()
	count = 0
	for(keys in registerData) {
		if(checkEmpty(registerData[keys]) == 1) {
			createId = "#" + keys
			$(createId).addClass("error");
			$("div#errorMessage").show();
			count = 1
		} 
		else {
			if(typeof eval(keys) === "function") {
				var mystr = keys + "(" + "\"" + registerData[keys] + "\"" + ")"
				errorcode = eval(mystr)
				if(errorcode == 1) {
					createId = "#" + keys
					$(createId).addClass("error");
					$("div#errorMessage").show();
					count = 1
				}	
			}	
		}
	}		
	if(count==0){
		self.location.href="profile.html"; 
	}
}

function checkEmpty(val) {
	if(val == '') {
		return 1 //Empty field
	}
	else 
		return 0 // all well
}
function rName(name){
	var patternName = new RegExp('^[a-z|A-z]+$')
	if(patternName.test(name)){
	$("#rName").removeClass("error");
	return 0
	}
	else{
		return 1
	}
}
function rLastname(lastname){
	var patternlastName = new RegExp('^[a-z|A-z]+$')
	if(patternlastName.test(lastname)){
	$("#rLastname").removeClass("error");
	return 0
	}
	else{
		return 1
	}
}

function rEmailId(emailAddress) {
	var pattern = new RegExp('^[a-z|A-Z]+[a-z|A-z|0-9]+.*[a-z|A-Z|0-9]@[a-z|A-Z|0-9]+\.[com|biz|org|edu|co|au|uk]+$')
  	if(pattern.test(emailAddress)){
  		$("#rEmailId").removeClass("error");
  		return 0
	}
	else {	
		return 1
	}
}
function rPassword(password){
	var patternPwd = new RegExp('^[a-z|A-z|0-9]+$')
  	if(patternPwd.test(password)){
  		$("#rPassword").removeClass("error");
  		return 0
	}
	else {	
		return 1
	}

}
function rConfirmPassword(rConfirmPassword){
	var pwd = $("#rPassword").val()

  	if(rConfirmPassword==pwd){
  		$("#rConfirmPassword").removeClass("error");
  		return 0
	}
	else {	
		return 1
	}

}
function selectRole(role){
	$("#selectRole").removeClass("error");
	return 0
	
}
function selectQuestion(Question){
	$("#selectQuestion").removeClass("error");
	return 0
	
}
function rAnswer(name){
	var patternName = new RegExp('^[a-z|A-z]+$')
	if(patternName.test(name)){
	$("#rAnswer").removeClass("error");
	return 0
	}
	else{
		return 1
	}
}


function getFooterMenuPage(){
	var basePath = "file:///C:/Users/himangi/work/open_project/"
	if(self.location.href== (basePath + "logIn.html") || self.location.href == (basePath + "logIn.html#")) {
		document.getElementById("loginBox").style.visibility="hidden";
		document.getElementById("videoBox").style.visibility="hidden";
		document.getElementById("construction").style.visibility="visible";
	}
	else if (self.location.href=="file:///C:/Users/himangi/work/open_project/dashboard.html" || self.location.href=="file:///C:/Users/himangi/work/open_project/dashboard.html#") {
		document.getElementById("selectProject").style.visibility="hidden";
		document.getElementById("tabs").style.visibility="hidden";
		document.getElementById("construction").style.visibility="visible";
	}
	else if (self.location.href=="file:///C:/Users/himangi/work/open_project/register.html" || self.location.href=="file:///C:/Users/himangi/work/open_project/register.html#") {
		document.getElementById("registerBox").style.visibility="hidden";
		
		document.getElementById("construction").style.visibility="visible";
	}
}