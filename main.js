function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

   // Chat Widget functionality
   const chatIcon = document.getElementById('chat-icon');
   const chatWindow = document.getElementById('chat-window');
   const closeIcon = document.getElementById('close-icon');
   const chatInput = document.querySelector('#chat-input input');
   const sendButton = document.getElementById('send-btn');
   const chatMessages = document.getElementById('chat-messages');
   
   chatIcon.addEventListener('click', toggleChatWindow);
   closeIcon.addEventListener('click', toggleChatWindow);
   sendButton.addEventListener('click', sendMessage);
   chatInput.addEventListener('keydown', handleInputKeydown);
   
   function toggleChatWindow() {
     chatWindow.classList.toggle('hidden');
   }
   
   function sendMessage() {
     const message = chatInput.value.trim();
     if (message !== '') {
       displayMessage(message, 'outgoing');
       chatInput.value = '';
       scrollToBottom();
       simulateReply();
     }
   }
   
   function handleInputKeydown(event) {
     if (event.key === 'Enter') {
       event.preventDefault();
       sendMessage();
     }
   }
   
   function displayMessage(message, type) {
     const messageContainer = document.createElement('div');
     messageContainer.classList.add('message', type);
     messageContainer.textContent = message;
     chatMessages.appendChild(messageContainer);
   }
   
   function simulateReply() {
     const replyDelay = Math.random() * 2000 + 500;
     const replyMessage = 'Thank you for your message! How can i help you today?';
     setTimeout(() => {
       displayMessage(replyMessage, 'incoming');
       scrollToBottom();
     }, replyDelay);
   }
   
   function scrollToBottom() {
     chatMessages.scrollTop = chatMessages.scrollHeight;
   }
   