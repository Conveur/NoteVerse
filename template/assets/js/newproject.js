//   // Get the necessary elements
// const projectName = document.getElementById('projectlist');
// const inputTitle = document.querySelector('.title-input');
// const addButton = document.querySelector('.new-add-btn');

// // Event listener for the button click
// addButton.addEventListener('click', function() {
//   // Get the input value
//   const titleText = inputField.value.trim();

//   // Create a new chat message element
//   const newProject = document.createElement('div');
//   newProject.classList.add('nav-item', 'menu-items');

//   // Construct the HTML for the chat message
//   newProject.innerHTML = `
//     <a class="nav-link" href="../../pages/project1/overview.html">
//         <span class="menu-icon">
//         <i class="mdi mdi-speedometer"></i>
//         </span>
//         <span class="menu-title">${titleText}</span>
//     </a>
//   `;

//   // Append the new chat message to the chatMessages element
//   projectlist.appendChild(newProject);

//   // Clear the input field
//   inputField.value = '';
// });

// script.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the "Create New Project" button
    var createBtn = document.querySelector("#createProjectModal .new-add-btn");
    
    // Check if the event listener is already attached
    if (!createBtn.hasAttribute("data-clicked")) {
      createBtn.setAttribute("data-clicked", "true");
      createBtn.addEventListener("click", createNewProject);
    }
  });
  
  // Function to create a new project
  function createNewProject() {
    // Get the project name input value
    var projectName = document.getElementById("projectNameInput").value;
  
    if (projectName.trim() === "") {
      // If the project name is empty, show an alert or perform any error handling
      alert("Please enter a project name.");
      return;
    }
  
    // Create a new list item
    var listItem = document.createElement("li");
    listItem.className = "nav-item menu-items";
  
    // Create the anchor element
    var anchor = document.createElement("a");
    anchor.className = "nav-link";
    anchor.href = ""; // Add the appropriate href
  
    // Create the menu icon element
    var menuIcon = document.createElement("span");
    menuIcon.className = "menu-icon";
    var icon = document.createElement("i");
    icon.className = "mdi mdi-speedometer";
    menuIcon.appendChild(icon);
  
    // Create the menu title element
    var menuTitle = document.createElement("span");
    menuTitle.className = "menu-title";
    menuTitle.innerText = projectName;
  
    // Append the menu icon and title to the anchor element
    anchor.appendChild(menuIcon);
    anchor.appendChild(menuTitle);
  
    // Append the anchor element to the list item
    listItem.appendChild(anchor);
  
    // Get the project list element and append the new list item
    var projectList = document.getElementById("projectlist");
    projectList.appendChild(listItem);
  
    // Close the modal
    $("#createProjectModal").modal("hide");
  }
  