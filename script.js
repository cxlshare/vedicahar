document.getElementById("aiHelpBtn").addEventListener("click", function () {
    let message = document.getElementById("message").value;
    if (!message.trim()) {
        alert("Please enter your question first.");
        return;
    }

    // Simulating AI Help
    document.getElementById("aiResponse").innerText =
        "AI Suggestion: Based on your question, you may want to check related FAQs or documentation.";
    document.getElementById("aiPopup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("aiPopup").style.display = "none";
});

document.getElementById("queryForm").addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "thankyou.html";
});
