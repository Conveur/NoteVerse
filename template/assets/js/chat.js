// Get the necessary elements
const chatMessages = document.getElementById('chatMessages');
const inputField = document.querySelector('.chat-input');
const addButton = document.querySelector('.chat-add-btn');

// Event listener for the button click
addButton.addEventListener('click', function() {
  // Get the input value
  const messageText = inputField.value.trim();

  // Create a new chat message element
  const newChatMessage = document.createElement('div');
  newChatMessage.classList.add('preview-item', 'border-bottom');

  // Construct the HTML for the chat message
  newChatMessage.innerHTML = `
    <div class="preview-thumbnail">
      <img src="../../assets/images/faces/face15.jpg" alt="image" class="rounded-circle" />
    </div>
    <div class="preview-item-content d-flex flex-grow">
      <div class="flex-grow">
        <div class="d-flex d-md-block d-xl-flex justify-content-between">
          <h6 class="preview-subject">Henry Klein</h6>
          <p class="text-muted text-small">${getCurrentTime()}</p>
        </div>
        <p class="text-muted">${messageText}</p>
      </div>
    </div>
  `;

  // Append the new chat message to the chatMessages element
  chatMessages.appendChild(newChatMessage);

  // Clear the input field
  inputField.value = '';
});

// Helper function to get the current time in HH:MM format
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}
