document.addEventListener("DOMContentLoaded", function () {
    // Get the file input element
    var fileInput = document.getElementById("fileInput");
    
    // Get the button element
    var uploadBtn = document.querySelector("#uploadfile .file-add-btn");
  
    // Add event listener to the button
    uploadBtn.addEventListener("click", function () {
      // Trigger the click event on the file input element
      fileInput.click();
    });
  });
  