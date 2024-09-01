// Vanilla JavaScript code for download button
let cvbtn = document.getElementById("cvbtn");
cvbtn.addEventListener("click", function() {
    alert("Download Successfully");
    // Additional logic can be added here to trigger actual download if needed
});

// Vanilla JavaScript code for form submission button
let submitButton = document.querySelector("form button[type='submit']");
submitButton.addEventListener("click", function(event) {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    if (email === "" || pass === "") {
        alert("Please fill in all details");
        event.preventDefault();  // Prevents form submission if fields are empty
    } else {
        alert("Register Successfully");
        // Form will submit automatically after this alert if all fields are filled
    }
});

// jQuery code for sidebar toggle
$(document).ready(function() {
    $("#bar").click(function() {
        $("nav ul").toggleClass("show");
    });
});


