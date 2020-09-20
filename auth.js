//Header Section JavaScript

var isLoggedIn;
var loginBtn = document.getElementById("loginBtn");
var modal = document.getElementById("loginModal");

//setting LogIn as initial dom element.
document.getElementById("loginBtn").style.display = '';
document.getElementById("logoutBtn").style.display = 'none';

// When the user clicks the button, open the modal 
loginBtn.onclick = function() {
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var loginCloseBtn = document.getElementsByClassName("loginModalClose")[0];

// When the user clicks the button, open the modal 
loginCloseBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Reading logInput field values
function handleCredentialSubmit(e){
    e.preventDefault();
    var logInUsername = document.getElementById("logInUsername").value;
    var password = document.getElementById("password").value;
    staticData.user.forEach((value, index) => {
        if(value.email === logInUsername){
            if(value.password === password){
                isLoggedIn= true;
                authenticationChecking(isLoggedIn);
                modal.style.display = "none";
                document.getElementById("homeContent").style.display = "none";
                document.getElementById("userContent").style.display = "block";
                handleTabChange(e)
                userInformation(staticData.userDetail[value.id]);
                return;
            }
            else{
                isLoggedIn= false;
                authenticationChecking(isLoggedIn);
                alert("Wrong password! Try again later.");
            }
        }
    });
}

function logoutUser(e){
    e.preventDefault();
    window.location.href = "home.html";
}

function authenticationChecking(isLoggedIn){
if(isLoggedIn== true){
    document.getElementById("loginBtn").style.display = 'none';
    document.getElementById("logoutBtn").style.display = '';
}
else{
    document.getElementById("loginBtn").style.display = '';
    document.getElementById("logoutBtn").style.display = 'none';
}
}