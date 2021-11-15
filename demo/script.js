function check(){
			var Login = { userEmail : "yash.goswami@5exceptions.com" , password: "admin"};
				$.ajax({
      			type: 'POST',
      			data: JSON.stringify(Login),
      			contentType: "application/json; charset=utf-8",
      			dataType: "json",
      			url: "http://localhost:8080/login",
      success: function(resultData) { 
        console.log(resultData);
      	document.getElementById('mydiv').innerHTML = resultData.userEmail;}
});
		}
function Login(){
 var username = document.getElementById('email').value;
 var password = document.getElementById('password').value;
 var errorMessage = document.querySelector('.errorMessage');

 if( username === "") {
 	errorMessage.innerHTML = "please enter username";
 	return;
 }
 if( password === "") {
 	errorMessage.innerHTML = "please enter password";
 	return;
 }
 errorMessage.innerHTML = "";
  
   var Login = { userEmail : username , password: password};
				$.ajax({
      			type: 'POST',
      			data: JSON.stringify(Login),
      			contentType: "application/json; charset=utf-8",
      			dataType: "json",
      			url: "http://localhost:8080/login",
      success: function(resultData) { 
        console.log(resultData);
      	//document.getElementById('mydiv').innerHTML = resultData.userEmail;
      }
});
}		
