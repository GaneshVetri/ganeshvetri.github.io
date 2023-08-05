
function myfunction(){
// debugger
	//alert("Hi");
try{
	if(document.getElementById("myName").value != ""){
		if (document.getElementById("myName").value == "Ganesh" && document.getElementById("mypwd").value == "123456"){
			
			document.getElementById("myName").value = "Ganesh";		
			document.getElementById("mypwd").value = "123456";
			window.location.href = "ganesh.html";
			

		}
		else if(document.getElementById("myName").value == "Dharish" && document.getElementById("mypwd").value == "45678"){

			// document.getElementById("myName").value = "Dharish";		
			// document.getElementById("mypwd").value = "45678";
			window.location.href = "https://dhari232.github.io/";

		}
		else if(document.getElementById("myName").value == "Vijay" && document.getElementById("mypwd").value == "98765"){

			document.getElementById("myName").value = "Vijay";		
			document.getElementById("mypwd").value = "98765";
			window.location.href = "vijay.html";

		}
		else {
		alert ("It is a Wrong Name");
		}
	}
	else {
		alert ("Please Enter Username and Password");
	}
}
catch (err){
	alert(err);
}

}
