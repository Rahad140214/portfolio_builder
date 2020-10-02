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

var educationAddEditModalClose = document.getElementsByClassName("educationAddEditModalClose")[0];
educationAddEditModalClose.onclick = function() {
    document.getElementById("educationAddEditModal").style.display = "none";
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
                currentUser(value.id);
                userInformation(staticData.userDetail[value.id]);
                userDashBoard(staticData.userDetail[value.id]);
                createYearDdl();
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

let userId = '';
function currentUser(selectedUser){
    function setUserId(selectedUser){
        userId = selectedUser
    }

    function getUserId(){
        return userId 
    }

    if(selectedUser !== undefined)
        return setUserId(selectedUser)
    else
        return getUserId()
}

function apiData (e){
    fetch('https://headerparser.avijitbhattacharjee.com/').then(function (res) {
	    return res.text()
    }).then((html) => {
        document.getElementById('apiDataDiv').innerHTML = html;
    }).catch(function (err) {
        console.warn('Something went wrong', err);
    });

    document.getElementById("testModal").style.display = 'block';
}