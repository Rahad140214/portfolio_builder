//Creating a function of user details.
function userDashBoard(userData){
    userData.education.forEach(eduItem => {
        createEduItem(eduItem)
    });
}

function createEduItem(educationData) {
    education = document.getElementById("education");
    let li = document.createElement('li');
    li.name = "liEducation";
    li.style.listStyleTYype = "none";
    li.style.display = "flex";
    li.style.padding = "0.5em";

    let editButton = document.createElement('button');
    editButton.className = "btn btn-primary";
    editButton.style.right = "2em";
    editButton.style.position = "absolute";
    editButton.style.borderRadius = "50%";
    editButton.id = "editEducation";
    editButton.name = educationData.name;

    let editIcon = document.createElement('i');
    editIcon.className = "fa fa-pencil";
    editIcon.ariaHidden = "true";
    editIcon.id = "editEducation";
    editIcon.name = educationData.name;
    editButton.appendChild(editIcon);
    li.appendChild(editButton);
    
    let institutionIcon = document.createElement("i");
    institutionIcon.className = "fa fa-university";
    institutionIcon.style.padding = "0 1%";
    institutionIcon.style.fontSize = "xx-large";
    institutionIcon.style.alignSelf = "center"; 
    li.appendChild(institutionIcon)

    let eduContent = document.createElement('div');
    let institution = document.createElement('h6');
    institution.style.marginBottom = "0rem";
    institution.innerHTML = educationData.institution;
    eduContent.appendChild(institution);
    eduContent.id = educationData.name;

    let degree = document.createElement('div');
    degree.innerHTML = educationData.degree;
    eduContent.appendChild(degree);

    let department = document.createElement('div');
    department.innerHTML = educationData.department;
    eduContent.appendChild(department);

    let result = document.createElement('div');
    result.innerHTML = educationData.result;
    eduContent.appendChild(result);

    let duration = document.createElement('div');
    duration.style.color = "rgb(190, 187, 187)";
    duration.innerHTML = educationData.duration;
    eduContent.appendChild(duration);
    
    li.appendChild(eduContent);
    education.appendChild(li);
}

// document.addEventListener('mouseover',function(e){
//     if(e.target && e.target.name== 'liEducation'){
//         console.log('inside hover handler')
//         document.getElementById("editEducation").style.display = "none"
//     }
// });

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'editEducation'){
        handleAddEditEducation(e)
    }
});

function handleAddEditEducation(e){
    document.getElementById("educationAddEditModal").style.display = "block";
    let loggedInUser = currentUser();

    if(e.target.id == "addEducation"){
        document.getElementById("editModalInstitution").defaultValue = ''; 
        document.getElementById("editModalDegree").defaultValue = ''; 
        document.getElementById("editModalDepartment").defaultValue = ''; 
        document.getElementById("editModalResult").defaultValue = '';
        document.getElementById('startYearDdl').value = '';
        document.getElementById('endYearDdl').value = '';

        document.getElementById("addEditBtn").innerHTML = "Add";
    }

    else if(e.target.id == "editEducation"){
        console.log(e.target.name)
        let targetEduDiv = document.getElementById(e.target.name);
        document.getElementById("addEditBtn").innerHTML = "Update";
        staticData.userDetail[loggedInUser].education.forEach(data => {
            if(data.name == e.target.name){
                document.getElementById("editModalInstitution").defaultValue = data.institution; 
                document.getElementById("editModalDegree").defaultValue = data.degree; 
                document.getElementById("editModalDepartment").defaultValue = data.department; 
                document.getElementById("editModalResult").defaultValue = data.result;

                startYear = data.duration.substring(0, data.duration.indexOf('-'));
                endYear = data.duration.substring(data.duration.indexOf('-')+1, data.duration.length);
                
                document.getElementById('startYearDdl').value = startYear;
                document.getElementById('endYearDdl').value = endYear;
            }
        })
    }
}

function handleAddEditData(e){
    institution=document.getElementById("editModalInstitution").value;
    degree=document.getElementById("editModalDegree").value;
    department=document.getElementById("editModalDepartment").value;
    result=document.getElementById("editModalResult").value;
    startYear=document.getElementById('startYearDdl').value;
    endYear=document.getElementById('endYearDdl').value;
    console.log(institution);
    console.log(degree);
    console.log(department);
    console.log(result);
    console.log(startYear);
    console.log(endYear);
}

function createYearDdl(){
    date = new Date();
    currYear = date.getFullYear();

    document.getElementById('startYearDdl').options[0] = new Option('Choose...');
    document.getElementById('endYearDdl').options[0] = new Option('Choose...');
    for(i = 1; i < 25; i++)
    {
        document.getElementById('startYearDdl').options[i] = new Option((currYear+1)-i,(currYear+1)-i);
        document.getElementById('endYearDdl').options[i] = new Option((currYear+1)-i,(currYear+1)-i);
    }
}