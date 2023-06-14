// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the "Create New Project" button
      // Add an event listener to the "Create meeting" button in the modal
    var createMeetingButton = document.getElementById("meetingModal").querySelector(".meeting-add-btn");
    
    // Check if the event listener is already attached
    if (!createBtn.hasAttribute("data-clicked")) {
      createBtn.setAttribute("data-clicked", "true");
      createBtn.addEventListener("click", createMeeting);
    }
  });
  

// Function to create a new meeting item
function createMeeting() {
    // Get the input values from the modal
    var title = document.getElementById("projectNameInput").value;
    var date = document.getElementById("projectDate").value;
    var time = document.getElementById("projectTime").value;
    var location = document.getElementById("projectDeadlineInput").value;
    var url = document.getElementById("projectURL").value;
  
    // Create a new table row
    var newRow = document.createElement("tr");
    newRow.className = "table-warning";
    newRow.onclick = function() {
      window.open(url, "_blank");
    };
  
    // Create the table cells for the new row
    var iconCell = document.createElement("td");
    var icon = document.createElement("i");
    icon.className = "mdi mdi-calendar";
    icon.style.fontSize = "52px";
    icon.style.marginLeft = "20%";
    iconCell.appendChild(icon);
  
    var contentCell = document.createElement("td");
    var titleElement = document.createElement("h4");
    titleElement.textContent = title;
    var dateElement = document.createElement("p");
    dateElement.innerHTML = "<br>Date: " + date;
    var timeElement = document.createElement("p");
    timeElement.textContent = "Time: " + time;
    contentCell.appendChild(titleElement);
    contentCell.appendChild(dateElement);
    contentCell.appendChild(timeElement);
  
    var emptyCells = [1, 2, 3, 4];
    emptyCells.forEach(function(cellIndex) {
      newRow.insertCell(cellIndex);
    });
  
    // Append the cells to the new row
    newRow.appendChild(iconCell);
    newRow.appendChild(contentCell);
  
    // Append the new row to the table
    var meetingList = document.getElementById("meetingList");
    meetingList.appendChild(newRow);
  
    // Clear the input values in the modal
    document.getElementById("projectNameInput").value = "";
    document.getElementById("meetingDateInput").value = "";
    document.getElementById("meetingTimeInput").value = "";
    document.getElementById("meetingLocationInput").value = "";
    document.getElementById("meetingURLInput").value = "";
  }
  

  