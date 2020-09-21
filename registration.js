function handleValueChange(e){
    var element= e.target.name;
    var value= e.target.value;
    document.getElementById(element).innerHTML = value;//e.target.name is the value of registration
}

function handleLinkChange(e){
    var element= e.target.name;
    var value= e.target.value;
    document.getElementById(element).href = value;
}

function handleImageUpload(e){
    var reader = new FileReader();
    reader.onload = function(readerEvent) {
        document.getElementById(e.target.name).src = readerEvent.target.result;
    }
    reader.readAsDataURL(e.target.files[0]); 
}