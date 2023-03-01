function validate() {
    var mail = document.getElementById("mail").value;
    console.log(mail)
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?&/

    if(regx.test(mail)) {
        alert("Emailiniz duzgun daxil edilib");
        return true;
    }
    else {
        alert("Emailnizi duzgun daxil edin.");
        return false;
    }
}