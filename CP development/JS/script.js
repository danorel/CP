function Validate(){
    var password = document.getElementById("input2").value;
    var login = document.getElementById("input1").value;

    if(login === "mail.ordan@gmail.com"){
        if(password === "16481657"){
              alert("Welcome!");
            return true;
        } else {
            alert("Validation denied");
            return false;
        }
    } else {
        alert("Validation denied");
        return false;
    }
}
