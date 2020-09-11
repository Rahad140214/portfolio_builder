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

//Creating a function of user details.
function userInformation(n){
    document.getElementById('userName').innerHTML = staticData.userDetail[n].name;
    document.getElementById('email').innerHTML = staticData.userDetail[n].email;
    document.getElementById('imageURL').src = staticData.userDetail[n].imageURL;
    document.getElementById('linkedInID').innerHTML = staticData.userDetail[n].linkedIn;
    document.getElementById('linkedInID').href  = staticData.userDetail[n].linkedInID;
    document.getElementById('githubID').innerHTML  = staticData.userDetail[n].github;
    document.getElementById('githubID').href  = staticData.userDetail[n].githubID;
    document.getElementById('mobile').innerHTML = staticData.userDetail[n].mobile;
    document.getElementById('address').innerHTML = staticData.userDetail[n].address;

    document.getElementById('currentDesignationTitle').innerHTML = staticData.userDetail[n].current_designation.designation;
    document.getElementById('institution').innerHTML = staticData.userDetail[n].current_designation.institution;
    document.getElementById('currentDesignationAddress').innerHTML = staticData.userDetail[n].current_designation.currentDesignationAddress;


    //Objective section JavaScript
    document.getElementById('objective').innerHTML = staticData.userDetail[n].objective;


    //Education  section JavaScript
    //B.Sc
    // document.getElementById('duration').innerHTML = staticData.userDetail[n].education[0].degree_details.duration;
    // document.getElementById('degree').innerHTML = staticData.userDetail[n].education[0].degree_details.degree;
    // document.getElementById('department').innerHTML = staticData.userDetail[n].education[0].degree_details.department;
    // document.getElementById('institution').innerHTML = staticData.userDetail[n].education[0].degree_details.institution;
    // document.getElementById('result').innerHTML = staticData.userDetail[n].education[0].degree_details.result;

    // //HSC
    // document.getElementById('hscDuration').innerHTML = staticData.userDetail[n].education[1].degree_details.duration;
    // document.getElementById('hscDegree').innerHTML = staticData.userDetail[n].education[1].degree_details.degree;
    // document.getElementById('hscDepartment').innerHTML = staticData.userDetail[n].education[1].degree_details.department;
    // document.getElementById('hscInstitution').innerHTML = staticData.userDetail[n].education[1].degree_details.institution;
    // document.getElementById('hscResult').innerHTML = staticData.userDetail[n].education[1].degree_details.result;

    // //SSC
    // document.getElementById('sscDuration').innerHTML = staticData.userDetail[n].education[2].degree_details.duration;
    // document.getElementById('sscDegree').innerHTML = staticData.userDetail[n].education[2].degree_details.degree;
    // document.getElementById('sscDepartment').innerHTML = staticData.userDetail[n].education[2].degree_details.department;
    // document.getElementById('sscInstitution').innerHTML = staticData.userDetail[n].education[2].degree_details.institution;
    // document.getElementById('sscResult').innerHTML = staticData.userDetail[n].education[2].degree_details.result;
    
    var educationTable = document.getElementById("educationTable");

    for(let row=0; row < staticData.userDetail[n].education.length; row++){
        var tr = document.createElement('TR');
        
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(staticData.userDetail[n].education[row].duration));
        td.style.color = 'gray';
        td.style.paddingBottom= '64px';
        td.style.paddingRight = '54px';
        td.width = '24%';
        tr.appendChild(td);

        var b = document.createElement('B');
        var span = document.createElement('SPAN');
        var br = document.createElement('BR');
        var div = document.createElement('DIV');
        var div1= document.createElement('DIV');
        var  td = document.createElement('TD');
        b.appendChild(document.createTextNode(staticData.userDetail[n].education[row].degree));
        td.appendChild(b);
        td.appendChild(br);
        span.appendChild(document.createTextNode(staticData.userDetail[n].education[row].department));
        span.style.color = 'gray';
        td.appendChild(span);
        div.appendChild(document.createTextNode(staticData.userDetail[n].education[row].institution));
        td.appendChild(div);
        div1.appendChild(document.createTextNode(staticData.userDetail[n].education[row].result));
        td.appendChild(div1);
        td.style.paddingLeft = '4.5%';
        td.style.paddingBottom = '16px';
        tr.appendChild(td);
        educationTable.appendChild(tr);
    }



    //Technical Skills & Endorsement section Javascript
    document.getElementById('language').innerHTML = staticData.userDetail[n].technicalSkills.language;
    document.getElementById('web').innerHTML = staticData.userDetail[n].technicalSkills.web;
    document.getElementById('familiarWith').innerHTML = staticData.userDetail[n].technicalSkills.familiarWith;
    document.getElementById('tools').innerHTML = staticData.userDetail[n].technicalSkills.tools;

    //Project Experience
    // document.getElementById('projectName').innerHTML = staticData.userDetail[n].projectExperience[0].projectName;
    // document.getElementById('projectDescription').innerHTML = staticData.userDetail[n].projectExperience[0].projectDescription;
    // document.getElementById('projectUrl').href = staticData.userDetail[n].projectExperience[0].projectUrl;

    // document.getElementById('projectName1').innerHTML = staticData.userDetail[n].projectExperience[1].projectName;
    // document.getElementById('projectDescription1').innerHTML = staticData.userDetail[n].projectExperience[1].projectDescription;
    // document.getElementById('projectUrl1').href = staticData.userDetail[n].projectExperience[1].projectUrl;

    // document.getElementById('projectName2').innerHTML = staticData.userDetail[n].projectExperience[2].projectName;
    // document.getElementById('projectDescription2').innerHTML = staticData.userDetail[n].projectExperience[2].projectDescription;
    // document.getElementById('projectUrl2').href = staticData.userDetail[n].projectExperience[2].projectUrl;

    // document.getElementById('projectName3').innerHTML = staticData.userDetail[n].projectExperience[3].projectName;
    // document.getElementById('projectDescription3').innerHTML = staticData.userDetail[n].projectExperience[3].projectDescription;
    // document.getElementById('projectUrl3').href = staticData.userDetail[n].projectExperience[3].projectUrl;

    // document.getElementById('projectName4').innerHTML = staticData.userDetail[n].projectExperience[4].projectName;
    // document.getElementById('projectDescription4').innerHTML = staticData.userDetail[n].projectExperience[4].projectDescription;
    // document.getElementById('projectUrl4').href = staticData.userDetail[n].projectExperience[4].projectUrl;

    var projectTbl = document.getElementById("projectTbl");

    for(let row=0; row < staticData.userDetail[n].projectExperience.length; row++){
        let icon='';
        var tr = document.createElement('TR');
        
        var td = document.createElement('TD');
        td.width = '17%'; 
        td.color = 'gray';
        td.style.paddingRight= '40px';
        td.appendChild(document.createTextNode(staticData.userDetail[n].projectExperience[row].projectName));
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(staticData.userDetail[n].projectExperience[row].projectDescription));
        tr.appendChild(td);
        
        var td = document.createElement('TD');
        var aTag = document.createElement('a');
        aTag.setAttribute('href',staticData.userDetail[n].projectExperience[row].projectUrl);
        let domainName = staticData.userDetail[n].projectExperience[row].projectUrl.substring(
            staticData.userDetail[n].projectExperience[row].projectUrl.indexOf("/") + 2,
            staticData.userDetail[n].projectExperience[row].projectUrl.indexOf(".")
        );
        
        if(domainName== "bitbucket"){
            icon = domainName;
        }
        else if(domainName== "github"){
            icon = domainName;
        }
        else{
            icon = "world";        
        }
        aTag.innerHTML = `<i class="fa fa-${icon} fa-2x" style="color:#1206b6a8; font-size:22px; padding-right:2px;"></i>`;
        td.appendChild(aTag);
        tr.appendChild(td);

        projectTbl.appendChild(tr);
    }
    
    //Research project
    // document.getElementById('thesisType').innerHTML = staticData.userDetail[n].researchProject[0].thesisType;
    // document.getElementById('publisehedIn').innerHTML = staticData.userDetail[n].researchProject[0].publisehedIn;
    // document.getElementById('researchTopic').innerHTML = staticData.userDetail[n].researchProject[0].researchTopic;
    // document.getElementById('researchDesc').innerHTML = staticData.userDetail[n].researchProject[0].researchDesc;

    var researchProjectTbl = document.getElementById("researchProject");

    for(let row=0; row < staticData.userDetail[n].researchProject.length; row++){
        var tr = document.createElement('TR');
        
        var td = document.createElement('TD');
        td.width = '17%'; 
        td.style.color = 'gray';
        td.style.paddingRight= '50px';
        td.appendChild(document.createTextNode(staticData.userDetail[n].researchProject[row].thesisType));
        tr.appendChild(td);

        var td = document.createElement('TD');
        var b = document.createElement('B');
        var span = document.createElement('SPAN');
        var br = document.createElement('BR');
        var div = document.createElement('DIV');
        b.appendChild(document.createTextNode(staticData.userDetail[n].researchProject[row].researchTopic));
        td.appendChild(b);
        td.appendChild(br);
        span.appendChild(document.createTextNode(staticData.userDetail[n].researchProject[row].publisehedIn));
        span.style.color = 'gray';
        td.appendChild(span);
        div.appendChild(document.createTextNode(staticData.userDetail[n].researchProject[row].researchDesc));
        td.appendChild(div);
        tr.appendChild(td);
        researchProjectTbl.appendChild(tr);
    }


    var projectTbl = document.getElementById("projectRefTbl");

    for(let row=0; row < staticData.userDetail[n].projectReference.length; row++){
        var tr = document.createElement('TR');
        
        var td = document.createElement('TD');
        td.width = '17%'; 
        td.style.color = 'gray';
        td.style.paddingRight= '40px';
        td.appendChild(document.createTextNode(staticData.userDetail[n].projectReference[row].projectStorage));
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.style.paddingRight= '30px';
        td.appendChild(document.createTextNode(staticData.userDetail[n].projectReference[row].projectTitle));
        tr.appendChild(td);
        
        var td = document.createElement('TD');
        var aTag = document.createElement('a');
        aTag.setAttribute('href',staticData.userDetail[n].projectReference[row].projectUrl);
        aTag.innerHTML = '<i class="fa fa-bitbucket fa-2x" style="color:#1206b6a8; font-size:22px; padding-right:2px;"></i>';
        td.appendChild(aTag);
        tr.appendChild(td);

        projectTbl.appendChild(tr);
    }

    //Activites
    
    var uList = document.getElementById("uList");
    for(let row=0; row < staticData.userDetail[n].activities.length; row++){
        var li = document.createElement('LI');
        li.appendChild(document.createTextNode(staticData.userDetail[n].activities[row]));
        uList.appendChild(li);
    }


    //References
    // document.getElementById('teacherName1').innerHTML = staticData.userDetail[n].references[0].teacherName;
    // document.getElementById('teacherDesignation1').innerHTML = staticData.userDetail[n].references[0].teacherDesignation;
    // document.getElementById('teacherInstitute1').innerHTML = staticData.userDetail[n].references[0].teacherInstitute;
    // document.getElementById('teacherEmail1').innerHTML = staticData.userDetail[n].references[0].teacherEmail;

    // document.getElementById('teacherName2').innerHTML = staticData.userDetail[n].references[1].teacherName;
    // document.getElementById('teacherDesignation2').innerHTML = staticData.userDetail[n].references[1].teacherDesignation;
    // document.getElementById('teacherInstitute2').innerHTML = staticData.userDetail[n].references[1].teacherInstitute;
    // document.getElementById('teacherEmail2').innerHTML = staticData.userDetail[n].references[1].teacherEmail;
    
    var teachRef = document.getElementById("teachRef");

    for(let row=0; row < staticData.userDetail[n].references.length; row++){
        var tr = document.createElement('TR');
        
        var td = document.createElement('TD');
        td.style.border = '1px solid'; 
        td.style.color = 'gray';
        td.style.textAlign = 'left';
        td.style.padding= '8px';
        td.appendChild(document.createTextNode(staticData.userDetail[n].references[row].teacherName));
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.style.border = '1px solid'; 
        td.style.color = 'gray';
        td.style.textAlign = 'left';
        td.style.padding= '8px';
        td.appendChild(document.createTextNode(staticData.userDetail[n].references[row].teacherDesignation));
        tr.appendChild(td);
        
        var td = document.createElement('TD');
        td.style.border = '1px solid'; 
        td.style.color = 'gray';
        td.style.textAlign = 'left';
        td.style.padding= '8px';
        td.appendChild(document.createTextNode(staticData.userDetail[n].references[row].teacherInstitute));
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.style.border = '1px solid'; 
        td.style.color = 'gray';
        td.style.textAlign = 'left';
        td.style.padding= '8px';
        td.appendChild(document.createTextNode(staticData.userDetail[n].references[row].teacherEmail));
        tr.appendChild(td);

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
                modal.style.display = "none";
                userInformation(value.id);
                return;
            }
            else{
                console.log("Wrong password! Try again later.");
            }
        }
    });
}