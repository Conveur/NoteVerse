function logIn() {
    var projectName = document.getElementById("projectDeadlineInput").value;
  
    if (projectName.trim() === "") {
    // If the project name is empty, show an alert or perform any error handling
    alert("Email and password cannot be empty.");
    return;
    }
    else window.location='../project1/overview.html'
}