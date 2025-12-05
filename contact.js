// Initialize EmailJS
(function() {
    emailjs.init("CsDLE7gud97YaYJET"); 
})();

// Handle form submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send("service_kp7nsvl", "template_8473bq8", {
        email: document.getElementById("user_email").value,
        message: document.getElementById("user_message").value
    }).then(
        function() {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        },
        function(error) {
            alert("Failed to send message. Try again!");
            console.log(error);
        }
    );
});
