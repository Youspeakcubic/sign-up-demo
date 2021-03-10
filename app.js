function createUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass1 = document.getElementById("password").value;
  let pass2 = document.getElementById("passwordVerify").value;
  let promote = document.getElementById("promotions").value;
  if (pass1 !== pass2) {
    sendRequestError();
    document.getElementById("pass1").placeholder = "Passwords do not match";
    document.getElementById("pass2").placeholder = "Passwords do not match";

  }
  else if (name == ""){
    sendRequestError();
    document.getElementById("name").placeholder = "Please enter your name";
  }
  else {
    sendRequestSuccess();
    console.log("succ");
  }
}
function sendRequestError() {
  /* when using ajax we must first start with declaring a variable as a new XML request throught the method seen below, if we need multiple request you have to declare another variable for each request.*/
    let xhr = new XMLHttpRequest();
  /* After declaring the variable we then give our request a url or file in our server or outside our server to get data*/
    xhr.open('GET', 'error.html');
  /* XML request are classified through 4 numbers dictating at what point in the request they are at, 4 being completed and received. We can use to use a callback only one our data has been received.*/
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
        document.getElementById('status').innerHTML = xhr.responseText;
      }
    };
   /* The last step for an ajax request is simply sending it through the method send().*/
    xhr.send();
  clear();
}
function sendRequestSuccess(){
  /* when using ajax we must first start with declaring a variable as a new XML request throught the method seen below, if we need multiple request you have to declare another variable for each request.*/
    let xhr = new XMLHttpRequest();
  /* After declaring the variable we then give our request a url or file in our server or outside our server to get data*/
    xhr.open('GET', 'success.html');
  /* XML request are classified through 4 numbers dictating at what point in the request they are at, 4 being completed and received. We can use to use a callback only one our data has been received.*/
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
        document.getElementById('status').innerHTML = xhr.responseText;
      }
    };
   /* The last step for an ajax request is simply sending it through the method send().*/
    xhr.send();
  clear();
}
function clear(){
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("password").value = "";
document.getElementById("passwordVerify").value = "";
document.getElementById("promotions").value = "";
}
