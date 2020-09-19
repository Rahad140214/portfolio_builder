function handleTabChange(e) {
    switch(e.target.id){
    case "cv":
        document.querySelector('#header li.active-tab').classList.remove('active-tab');
        document.querySelector('#header li#cv').classList = "active-tab";
        document.getElementById('dashboardContent').style.display = "none";
        document.getElementById('cvContent').style.display = "block";
        return
    case "user":
    default:
        document.querySelector('#header li.active-tab').classList.remove('active-tab');
        document.querySelector('#header li#user').classList = "active-tab"
        document.getElementById('cvContent').style.display = "none";
        document.getElementById('dashboardContent').style.display = "block";
    }
}