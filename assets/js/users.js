let userName = '';

function attachUserEventListeners() {
    document.getElementById('user-name-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        userName = document.getElementById('user-name').value;
        console.log("User's name: " + userName); // For debugging
    });
}

// Call attachUserEventListeners when DOM is fully loaded
document.addEventListener('DOMContentLoaded', attachUserEventListeners);

export { userName, attachUserEventListeners };