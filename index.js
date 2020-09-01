//Header Section JavaScript
var loginBtn = document.getElementById("loginBtn");
var modal = document.getElementById("loginModal");

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
function handleCredentialSubmit(){
    // e.stopPropagation();
    var logInUsername = document.getElementById("logInUsername").value;
    var password = document.getElementById("password").value;
    staticData.user.forEach((value, index) => {
        if(value.email === logInUsername){
            if(value.password === password){
                modal.style.display = "none";

                document.getElementById('userName').innerHTML = staticData.userDetail[value.id].name;
                document.getElementById('email').innerHTML = staticData.userDetail[value.id].email;
                document.getElementById('imageURL').src = staticData.userDetail[value.id].imageURL;
                document.getElementById('linkedInID').innerHTML = staticData.userDetail[value.id].linkedIn;
                document.getElementById('linkedInID').href  = staticData.userDetail[value.id].linkedInID;
                document.getElementById('githubID').innerHTML  = staticData.userDetail[value.id].github;
                document.getElementById('githubID').href  = staticData.userDetail[value.id].githubID;
                document.getElementById('mobile').innerHTML = staticData.userDetail[value.id].mobile;
                document.getElementById('address').innerHTML = staticData.userDetail[value.id].address;

                document.getElementById('currentDesignationTitle').innerHTML = staticData.userDetail[value.id].current_designation.designation;
                document.getElementById('institution').innerHTML = staticData.userDetail[value.id].current_designation.institution;
                document.getElementById('currentDesignationAddress').innerHTML = staticData.userDetail[value.id].current_designation.currentDesignationAddress;


                //Objective section JavaScript
                document.getElementById('objective').innerHTML = staticData.userDetail[value.id].objective;


                //Education  section JavaScript
                //B.Sc
                document.getElementById('duration').innerHTML = staticData.userDetail[value.id].education[0].degree_details.duration;
                document.getElementById('degree').innerHTML = staticData.userDetail[value.id].education[0].degree_details.degree;
                document.getElementById('department').innerHTML = staticData.userDetail[value.id].education[0].degree_details.department;
                document.getElementById('institution').innerHTML = staticData.userDetail[value.id].education[0].degree_details.institution;
                document.getElementById('result').innerHTML = staticData.userDetail[value.id].education[0].degree_details.result;

                //HSC
                document.getElementById('hscDuration').innerHTML = staticData.userDetail[value.id].education[1].degree_details.duration;
                document.getElementById('hscDegree').innerHTML = staticData.userDetail[value.id].education[1].degree_details.degree;
                document.getElementById('hscDepartment').innerHTML = staticData.userDetail[value.id].education[1].degree_details.department;
                document.getElementById('hscInstitution').innerHTML = staticData.userDetail[value.id].education[1].degree_details.institution;
                document.getElementById('hscResult').innerHTML = staticData.userDetail[value.id].education[1].degree_details.result;

                //SSC
                document.getElementById('sscDuration').innerHTML = staticData.userDetail[value.id].education[2].degree_details.duration;
                document.getElementById('sscDegree').innerHTML = staticData.userDetail[value.id].education[2].degree_details.degree;
                document.getElementById('sscDepartment').innerHTML = staticData.userDetail[value.id].education[2].degree_details.department;
                document.getElementById('sscInstitution').innerHTML = staticData.userDetail[value.id].education[2].degree_details.institution;
                document.getElementById('sscResult').innerHTML = staticData.userDetail[value.id].education[2].degree_details.result;


                //Technical Skills & Endorsement section Javascript
                document.getElementById('language').innerHTML = staticData.userDetail[value.id].technicalSkills.language;
                document.getElementById('web').innerHTML = staticData.userDetail[value.id].technicalSkills.web;
                document.getElementById('familiarWith').innerHTML = staticData.userDetail[value.id].technicalSkills.familiarWith;
                document.getElementById('tools').innerHTML = staticData.userDetail[value.id].technicalSkills.tools;

                //Project Experience
                document.getElementById('projectName').innerHTML = staticData.userDetail[value.id].projectExperience[0].projectName;
                document.getElementById('projectDescription').innerHTML = staticData.userDetail[value.id].projectExperience[0].projectDescription;
                document.getElementById('projectUrl').href = staticData.userDetail[value.id].projectExperience[0].projectUrl;

                document.getElementById('projectName1').innerHTML = staticData.userDetail[value.id].projectExperience[1].projectName;
                document.getElementById('projectDescription1').innerHTML = staticData.userDetail[value.id].projectExperience[1].projectDescription;
                document.getElementById('projectUrl1').href = staticData.userDetail[value.id].projectExperience[1].projectUrl;

                document.getElementById('projectName2').innerHTML = staticData.userDetail[value.id].projectExperience[2].projectName;
                document.getElementById('projectDescription2').innerHTML = staticData.userDetail[value.id].projectExperience[2].projectDescription;
                document.getElementById('projectUrl2').href = staticData.userDetail[value.id].projectExperience[2].projectUrl;

                document.getElementById('projectName3').innerHTML = staticData.userDetail[value.id].projectExperience[3].projectName;
                document.getElementById('projectDescription3').innerHTML = staticData.userDetail[value.id].projectExperience[3].projectDescription;
                document.getElementById('projectUrl3').href = staticData.userDetail[value.id].projectExperience[3].projectUrl;

                document.getElementById('projectName4').innerHTML = staticData.userDetail[value.id].projectExperience[4].projectName;
                document.getElementById('projectDescription4').innerHTML = staticData.userDetail[value.id].projectExperience[4].projectDescription;
                document.getElementById('projectUrl4').href = staticData.userDetail[value.id].projectExperience[4].projectUrl;

                //Research project
                document.getElementById('thesisType').innerHTML = staticData.userDetail[value.id].researchProject[0].thesisType;
                document.getElementById('publisehedIn').innerHTML = staticData.userDetail[value.id].researchProject[0].publisehedIn;
                document.getElementById('researchTopic').innerHTML = staticData.userDetail[value.id].researchProject[0].researchTopic;
                document.getElementById('researchDesc').innerHTML = staticData.userDetail[value.id].researchProject[0].researchDesc;

                //Activites
                document.getElementById('listOfActivities1').innerHTML = staticData.userDetail[value.id].activities[0].listOfActivities1;
                document.getElementById('listOfActivities2').innerHTML = staticData.userDetail[value.id].activities[0].listOfActivities2;
                document.getElementById('listOfActivities3').innerHTML = staticData.userDetail[value.id].activities[0].listOfActivities3;
                document.getElementById('listOfActivities4').innerHTML = staticData.userDetail[value.id].activities[0].listOfActivities4;
                document.getElementById('listOfActivities5').innerHTML = staticData.userDetail[value.id].activities[0].listOfActivities5;

                //Project References
                document.getElementById('referenceStorage1').innerHTML = staticData.userDetail[value.id].projectReference[0].projectStorage;
                document.getElementById('referenceTitle1').innerHTML = staticData.userDetail[value.id].projectReference[0].projectTitle;
                document.getElementById('referenceUrl1').href = staticData.userDetail[value.id].projectReference[0].projectUrl;

                document.getElementById('referenceStorage2').innerHTML = staticData.userDetail[value.id].projectReference[1].projectStorage;
                document.getElementById('referenceTitle2').innerHTML = staticData.userDetail[value.id].projectReference[1].projectTitle;
                document.getElementById('referenceUrl2').href = staticData.userDetail[value.id].projectReference[1].projectUrl;

                document.getElementById('referenceStorage3').innerHTML = staticData.userDetail[value.id].projectReference[2].projectStorage;
                document.getElementById('referenceTitle3').innerHTML = staticData.userDetail[value.id].projectReference[2].projectTitle;
                document.getElementById('referenceUrl3').href = staticData.userDetail[value.id].projectReference[2].projectUrl;

                //References
                document.getElementById('teacherName1').innerHTML = staticData.userDetail[value.id].references[0].teacherName;
                document.getElementById('teacherDesignation1').innerHTML = staticData.userDetail[value.id].references[0].teacherDesignation;
                document.getElementById('teacherInstitute1').innerHTML = staticData.userDetail[value.id].references[0].teacherInstitute;
                document.getElementById('teacherEmail1').innerHTML = staticData.userDetail[value.id].references[0].teacherEmail;

                document.getElementById('teacherName2').innerHTML = staticData.userDetail[value.id].references[1].teacherName;
                document.getElementById('teacherDesignation2').innerHTML = staticData.userDetail[value.id].references[1].teacherDesignation;
                document.getElementById('teacherInstitute2').innerHTML = staticData.userDetail[value.id].references[1].teacherInstitute;
                document.getElementById('teacherEmail2').innerHTML = staticData.userDetail[value.id].references[1].teacherEmail;
                return false;
            }
            else{
                console.log("Wrong password! Try again later.");
            }
        }
    });
}