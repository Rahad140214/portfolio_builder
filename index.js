//Header Section JavaScript
document.getElementById('userName').innerHTML = staticData.userDetail[0].name;
document.getElementById('email').href = staticData.userDetail[0].email;
document.getElementById('imageURL').src = staticData.userDetail[0].imageURL;
document.getElementById('linkedInID').innerHTML = staticData.userDetail[0].linkedIn;
document.getElementById('linkedInID').href  = staticData.userDetail[0].linkedInID;
document.getElementById('githubID').innerHTML  = staticData.userDetail[0].github;
document.getElementById('githubID').href  = staticData.userDetail[0].githubID;
document.getElementById('mobile').innerHTML = staticData.userDetail[0].mobile;
document.getElementById('address').innerHTML = staticData.userDetail[0].address;

document.getElementById('currentDesignationTitle').innerHTML = staticData.userDetail[0].current_designation.designation;
document.getElementById('institution').innerHTML = staticData.userDetail[0].current_designation.institution;
document.getElementById('versity_address').innerHTML = staticData.userDetail[0].current_designation.versity_address;


//Objective section JavaScript
document.getElementById('objective').innerHTML = staticData.userDetail[0].objective;


//Education  section JavaScript
document.getElementById('duration').innerHTML = staticData.userDetail[0].education[0].degree_details.duration;
