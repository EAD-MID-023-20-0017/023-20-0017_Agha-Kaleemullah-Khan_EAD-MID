//checks if user has filled login form or not and checks regex pattern for email
function loginCheck() {

        var email = document.getElementById("inputemail").value;
        var password = document.getElementById("inputpass").value;
        var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if(email == "" || password == "") {
            alert("Please fill all the fields");
            return false;
        }
        if(!regex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }
        //open index.html if login is successful
        window.open("loggedindex.html");
        return true;
}

//contact us form validation
function contactCheck() {
    var name = document.getElementById("inputname").value;
    var email = document.getElementById("inputemail").value;
    var messagetype = document.getElementById("messagetype").value;
    var message = document.getElementById("inputmessage").value;
    var subject = document.getElementById("inputsubject").value;

    var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(name == "" || email == "" || messagetype == "" || message == "" || subject == "") {
        alert("Please fill all the fields");
        return false;
    }
    if(!regex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    //if message type is not choosen then alert
    if(messagetype == "na") {
        alert("Please choose message type");
        return false;
    }
    return true;
}


