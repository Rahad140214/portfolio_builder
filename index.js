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
document.getElementById('currentDesignationAddress').innerHTML = staticData.userDetail[0].current_designation.currentDesignationAddress;


//Objective section JavaScript
document.getElementById('objective').innerHTML = staticData.userDetail[0].objective;


//Education  section JavaScript
//B.Sc
document.getElementById('duration').innerHTML = staticData.userDetail[0].education[0].degree_details.duration;
document.getElementById('degree').innerHTML = staticData.userDetail[0].education[0].degree_details.degree;
document.getElementById('department').innerHTML = staticData.userDetail[0].education[0].degree_details.department;
document.getElementById('institution').innerHTML = staticData.userDetail[0].education[0].degree_details.institution;
document.getElementById('result').innerHTML = staticData.userDetail[0].education[0].degree_details.result;

//HSC
document.getElementById('hscDuration').innerHTML = staticData.userDetail[0].education[1].degree_details.duration;
document.getElementById('hscDegree').innerHTML = staticData.userDetail[0].education[1].degree_details.degree;
document.getElementById('hscDepartment').innerHTML = staticData.userDetail[0].education[1].degree_details.department;
document.getElementById('hscInstitution').innerHTML = staticData.userDetail[0].education[1].degree_details.institution;
document.getElementById('hscResult').innerHTML = staticData.userDetail[0].education[1].degree_details.result;

//SSC
document.getElementById('sscDuration').innerHTML = staticData.userDetail[0].education[2].degree_details.duration;
document.getElementById('sscDegree').innerHTML = staticData.userDetail[0].education[2].degree_details.degree;
document.getElementById('sscDepartment').innerHTML = staticData.userDetail[0].education[2].degree_details.department;
document.getElementById('sscInstitution').innerHTML = staticData.userDetail[0].education[2].degree_details.institution;
document.getElementById('sscResult').innerHTML = staticData.userDetail[0].education[2].degree_details.result;


//Technical Skills & Endorsement section Javascript
document.getElementById('language').innerHTML = staticData.userDetail[0].technicalSkills.language;
document.getElementById('web').innerHTML = staticData.userDetail[0].technicalSkills.web;
document.getElementById('familiarWith').innerHTML = staticData.userDetail[0].technicalSkills.familiarWith;
document.getElementById('tools').innerHTML = staticData.userDetail[0].technicalSkills.tools;

//Project Experience
document.getElementById('projectName').innerHTML = staticData.userDetail[0].projectExperience[0].projectName;
document.getElementById('projectDescription').innerHTML = staticData.userDetail[0].projectExperience[0].projectDescription;
document.getElementById('projectUrl').href = staticData.userDetail[0].projectExperience[0].projectUrl;

document.getElementById('projectName1').innerHTML = staticData.userDetail[0].projectExperience[1].projectName;
document.getElementById('projectDescription1').innerHTML = staticData.userDetail[0].projectExperience[1].projectDescription;
document.getElementById('projectUrl1').href = staticData.userDetail[0].projectExperience[1].projectUrl;

document.getElementById('projectName2').innerHTML = staticData.userDetail[0].projectExperience[2].projectName;
document.getElementById('projectDescription2').innerHTML = staticData.userDetail[0].projectExperience[2].projectDescription;
document.getElementById('projectUrl2').href = staticData.userDetail[0].projectExperience[2].projectUrl;

document.getElementById('projectName3').innerHTML = staticData.userDetail[0].projectExperience[3].projectName;
document.getElementById('projectDescription3').innerHTML = staticData.userDetail[0].projectExperience[3].projectDescription;
document.getElementById('projectUrl3').href = staticData.userDetail[0].projectExperience[3].projectUrl;

document.getElementById('projectName4').innerHTML = staticData.userDetail[0].projectExperience[4].projectName;
document.getElementById('projectDescription4').innerHTML = staticData.userDetail[0].projectExperience[4].projectDescription;
document.getElementById('projectUrl4').href = staticData.userDetail[0].projectExperience[4].projectUrl;