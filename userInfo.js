//Creating a function of user details.
function userInformation(userData){
    debugger
    document.getElementById('userName').innerHTML = userData.name;
    document.getElementById('email').innerHTML = userData.email;
    document.getElementById('imageURL').src = userData.imageURL;
    document.getElementById('linkedInID').innerHTML = userData.linkedIn;
    document.getElementById('linkedInID').href  = userData.linkedInID;
    document.getElementById('githubID').innerHTML  = userData.github;
    document.getElementById('githubID').href  = userData.githubID;
    document.getElementById('mobile').innerHTML = userData.mobile;
    document.getElementById('address').innerHTML = userData.address;

    document.getElementById('currentDesignationTitle').innerHTML = userData.current_designation.designation;
    document.getElementById('institution').innerHTML = userData.current_designation.institution;
    document.getElementById('currentDesignationAddress').innerHTML = userData.current_designation.currentDesignationAddress;


    //Objective section JavaScript
    document.getElementById('objective').innerHTML = userData.objective;


    //Education  section JavaScript
    //B.Sc
    // document.getElementById('duration').innerHTML = userData.education[0].degree_details.duration;
    // document.getElementById('degree').innerHTML = userData.education[0].degree_details.degree;
    // document.getElementById('department').innerHTML = userData.education[0].degree_details.department;
    // document.getElementById('institution').innerHTML = userData.education[0].degree_details.institution;
    // document.getElementById('result').innerHTML = userData.education[0].degree_details.result;

    // //HSC
    // document.getElementById('hscDuration').innerHTML = userData.education[1].degree_details.duration;
    // document.getElementById('hscDegree').innerHTML = userData.education[1].degree_details.degree;
    // document.getElementById('hscDepartment').innerHTML = userData.education[1].degree_details.department;
    // document.getElementById('hscInstitution').innerHTML = userData.education[1].degree_details.institution;
    // document.getElementById('hscResult').innerHTML = userData.education[1].degree_details.result;

    // //SSC
    // document.getElementById('sscDuration').innerHTML = userData.education[2].degree_details.duration;
    // document.getElementById('sscDegree').innerHTML = userData.education[2].degree_details.degree;
    // document.getElementById('sscDepartment').innerHTML = userData.education[2].degree_details.department;
    // document.getElementById('sscInstitution').innerHTML = userData.education[2].degree_details.institution;
    // document.getElementById('sscResult').innerHTML = userData.education[2].degree_details.result;
    
    var educationTable = document.getElementById("educationTable");

    for(let row=0; row < userData.education.length; row++){
        var tr = document.createElement('TR');
        
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(userData.education[row].duration));
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
        b.appendChild(document.createTextNode(userData.education[row].degree));
        td.appendChild(b);
        td.appendChild(br);
        span.appendChild(document.createTextNode(userData.education[row].department));
        span.style.color = 'gray';
        td.appendChild(span);
        div.appendChild(document.createTextNode(userData.education[row].institution));
        td.appendChild(div);
        div1.appendChild(document.createTextNode(userData.education[row].result));
        td.appendChild(div1);
        td.style.paddingLeft = '4.5%';
        td.style.paddingBottom = '16px';
        tr.appendChild(td);
        educationTable.appendChild(tr);
    }



    //Technical Skills & Endorsement section Javascript
    document.getElementById('language').innerHTML = userData.technicalSkills.language;
    document.getElementById('web').innerHTML = userData.technicalSkills.web;
    document.getElementById('familiarWith').innerHTML = userData.technicalSkills.familiarWith;
    document.getElementById('tools').innerHTML = userData.technicalSkills.tools;

    //Project Experience
    // document.getElementById('projectName').innerHTML = userData.projectExperience[0].projectName;
    // document.getElementById('projectDescription').innerHTML = userData.projectExperience[0].projectDescription;
    // document.getElementById('projectUrl').href = userData.projectExperience[0].projectUrl;

    // document.getElementById('projectName1').innerHTML = userData.projectExperience[1].projectName;
    // document.getElementById('projectDescription1').innerHTML = userData.projectExperience[1].projectDescription;
    // document.getElementById('projectUrl1').href = userData.projectExperience[1].projectUrl;

    // document.getElementById('projectName2').innerHTML = userData.projectExperience[2].projectName;
    // document.getElementById('projectDescription2').innerHTML = userData.projectExperience[2].projectDescription;
    // document.getElementById('projectUrl2').href = userData.projectExperience[2].projectUrl;

    // document.getElementById('projectName3').innerHTML = userData.projectExperience[3].projectName;
    // document.getElementById('projectDescription3').innerHTML = userData.projectExperience[3].projectDescription;
    // document.getElementById('projectUrl3').href = userData.projectExperience[3].projectUrl;

    // document.getElementById('projectName4').innerHTML = userData.projectExperience[4].projectName;
    // document.getElementById('projectDescription4').innerHTML = userData.projectExperience[4].projectDescription;
    // document.getElementById('projectUrl4').href = userData.projectExperience[4].projectUrl;

    var projectTbl = document.getElementById("projectTbl");

    for(let row=0; row < userData.projectExperience.length; row++){
        let icon='';
        var tr = document.createElement('TR');
        
        var td = document.createElement('TD');
        td.width = '17%'; 
        td.color = 'gray';
        td.style.paddingRight= '40px';
        td.appendChild(document.createTextNode(userData.projectExperience[row].projectName));
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(userData.projectExperience[row].projectDescription));
        tr.appendChild(td);
        
        var td = document.createElement('TD');
        var aTag = document.createElement('a');
        aTag.setAttribute('href',userData.projectExperience[row].projectUrl);
        let domainName = userData.projectExperience[row].projectUrl.substring(
            userData.projectExperience[row].projectUrl.indexOf("/") + 2,
            userData.projectExperience[row].projectUrl.indexOf(".")
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
    // document.getElementById('thesisType').innerHTML = userData.researchProject[0].thesisType;
    // document.getElementById('publisehedIn').innerHTML = userData.researchProject[0].publisehedIn;
    // document.getElementById('researchTopic').innerHTML = userData.researchProject[0].researchTopic;
    // document.getElementById('researchDesc').innerHTML = userData.researchProject[0].researchDesc;

    var researchProjectTbl = document.getElementById("researchProject");

    for(let row=0; row < userData.researchProject.length; row++){
        var tr = document.createElement('TR');
        
        var td = document.createElement('TD');
        td.width = '17%'; 
        td.style.color = 'gray';
        td.style.paddingRight= '50px';
        td.appendChild(document.createTextNode(userData.researchProject[row].thesisType));
        tr.appendChild(td);

        var td = document.createElement('TD');
        var b = document.createElement('B');
        var span = document.createElement('SPAN');
        var br = document.createElement('BR');
        var div = document.createElement('DIV');
        b.appendChild(document.createTextNode(userData.researchProject[row].researchTopic));
        td.appendChild(b);
        td.appendChild(br);
        span.appendChild(document.createTextNode(userData.researchProject[row].publisehedIn));
        span.style.color = 'gray';
        td.appendChild(span);
        div.appendChild(document.createTextNode(userData.researchProject[row].researchDesc));
        td.appendChild(div);
        tr.appendChild(td);
        researchProjectTbl.appendChild(tr);
    }


    var projectTbl = document.getElementById("projectRefTbl");

    for(let row=0; row < userData.projectReference.length; row++){
        var tr = document.createElement('TR');
        
        var td = document.createElement('TD');
        td.width = '17%'; 
        td.style.color = 'gray';
        td.style.paddingRight= '40px';
        td.appendChild(document.createTextNode(userData.projectReference[row].projectStorage));
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.style.paddingRight= '30px';
        td.appendChild(document.createTextNode(userData.projectReference[row].projectTitle));
        tr.appendChild(td);
        
        var td = document.createElement('TD');
        var aTag = document.createElement('a');
        aTag.setAttribute('href',userData.projectReference[row].projectUrl);
        aTag.innerHTML = '<i class="fa fa-bitbucket fa-2x" style="color:#1206b6a8; font-size:22px; padding-right:2px;"></i>';
        td.appendChild(aTag);
        tr.appendChild(td);

        projectTbl.appendChild(tr);
    }

    //Activites
    
    var uList = document.getElementById("uList");
    for(let row=0; row < userData.activities.length; row++){
        var li = document.createElement('LI');
        li.appendChild(document.createTextNode(userData.activities[row]));
        uList.appendChild(li);
    }


    //References
    // document.getElementById('teacherName1').innerHTML = userData.references[0].teacherName;
    // document.getElementById('teacherDesignation1').innerHTML = userData.references[0].teacherDesignation;
    // document.getElementById('teacherInstitute1').innerHTML = userData.references[0].teacherInstitute;
    // document.getElementById('teacherEmail1').innerHTML = userData.references[0].teacherEmail;

    // document.getElementById('teacherName2').innerHTML = userData.references[1].teacherName;
    // document.getElementById('teacherDesignation2').innerHTML = userData.references[1].teacherDesignation;
    // document.getElementById('teacherInstitute2').innerHTML = userData.references[1].teacherInstitute;
    // document.getElementById('teacherEmail2').innerHTML = userData.references[1].teacherEmail;
    
    var teachRef = document.getElementById("teachRef");
    var referenceTable = document.getElementById('referenceTable');
    for(let row=0; row < userData.references.length; row++){
        var tr = document.createElement('TR');
        
        var td = document.createElement('TD');
        td.style.border = '1px solid';
        td.style.textAlign = 'left';
        td.style.padding= '8px';
        td.appendChild(document.createTextNode(userData.references[row].teacherName));
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.style.border = '1px solid';
        td.style.textAlign = 'left';
        td.style.padding= '8px';
        td.appendChild(document.createTextNode(userData.references[row].teacherDesignation));
        tr.appendChild(td);
        
        var td = document.createElement('TD');
        td.style.border = '1px solid';
        td.style.textAlign = 'left';
        td.style.padding= '8px';
        td.appendChild(document.createTextNode(userData.references[row].teacherInstitute));
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.style.border = '1px solid';
        td.style.textAlign = 'left';
        td.style.padding= '8px';
        td.appendChild(document.createTextNode(userData.references[row].teacherEmail));
        tr.appendChild(td);
        referenceTable.appendChild(tr);

    }

}