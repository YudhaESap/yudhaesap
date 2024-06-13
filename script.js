// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can perform further validation or processing with the form data here
    // For now, let's simply log the values to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset the form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

// Add an event listener to the form submit event
const form = document.getElementById("contactForm");
form.addEventListener("submit", submitForm);
