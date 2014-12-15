
$(document).ready(function() {
	$("#tabs").tabs({cache: true});
});

function showLoginBox(){
	document.getElementById("loginBox").style.visibility="visible";
}
function getDashboard(){

	self.location.href="dashboard.html";
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