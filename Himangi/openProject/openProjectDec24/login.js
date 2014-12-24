
$(document).ready(function() {
	$("#tabs").tabs({cache: true});
	//$("div#errorUsername").hide();
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
	if($("#username").val() == '') { alert("Please enter username")}
	//$("div#errorUsername").append("user name")
    //$("div#errorUsername").show();
  
  


	else if($("#password").val() == '') { alert("Please enter password")}
		//$("div#errorUsername").append("password")
    	//$("div#errorUsername").show();

	else
	self.location.href="dashboard.html";
}
function showQuestionBox(){
	document.getElementById("showPwdBox").style.display="none"
	document.getElementById("showQuestionBox").style.display="inline"
}
function showPwdBox(){
	
	document.getElementById("showQuestionBox").style.display="none"
	document.getElementById("showPwdBox").style.display="inline"

	
}
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp('^[a-z|A-Z]+\w+\.*\w@[a-z]+\.[com|biz|org|edu|co|au|uk|in]+$')
    return pattern.test(emailAddress);
}
function getProfile(){
	
	if($("#rName").val() == '') {alert("Please enter name")} 
	
    //$("div#errorUsername").show();
	else if($("#rLastname").val() == '') { alert("Please enter last name")}
	else if($("#rEmailId").val() == '') { alert("Please enter email-id")}

	else if($("#rpassword").val() == '') { alert("Please enter password")}
	else if($("#rConfirmPassword").val() == '') { alert("Please confirm password")}

	else
		var emailAddress=$("rEmailId").val()
		if( !isValidEmailAddress(emailAddress)){
			alert("invalid email address")
		}
		else
	
		self.location.href="profile.html"; 
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
}