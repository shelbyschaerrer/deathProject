// inject current year in footer
const currentYear = new Date()
document.querySelector('#year').textContent = currentYear.getFullYear()

function checkPassword(event) {
    event.preventDefault();  // Prevent form submission (default behavior)

    const password = document.getElementById("passwordInput").value;
    console.log("Entered Password:", password);  // Debugging: log the password entered

    const correctPasswords = ["death", "DEATH", "Death"];
    console.log("Checking password...");  // Debugging: log to track the function

    if (correctPasswords.includes(password)) {
        console.log("Password is correct. Redirecting...");  // Debugging: log if password is correct
        window.location.href = "/intro.html";  // Redirect to another page (adjust path)
    } else {
        console.log("Password is incorrect.");  // Debugging: log if password is incorrect
        alert("Incorrect password. Try again.");
    }
}