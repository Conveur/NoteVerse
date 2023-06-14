function register() {
    var projectName = document.getElementById("projectDeadlineInput").value;
  
    if (projectName.trim() === "") {
    // If the project name is empty, show an alert or perform any error handling
    alert("Please complete the form.");
    return;
    }
    else window.location='../samples/login.html'
}