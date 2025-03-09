document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from refreshing the page

    let rating = document.getElementById("rating").value;
    let teaQuality = document.querySelector('input[name="tea_quality"]:checked')?.value;
    let storeExperience = document.querySelector('input[name="store_experience"]:checked')?.value;
    let staffBehaviour = document.querySelector('input[name="staff_behaviour"]:checked')?.value;
    let comments = document.getElementById("comments").value;

    if (!teaQuality || !storeExperience || !staffBehaviour) {
        alert("Please complete all the questions.");
        return;
    }

    let feedbackData = {
        rating: rating,
        teaQuality: teaQuality,
        storeExperience: storeExperience,
        staffBehaviour: staffBehaviour,
        comments: comments
    };

    console.log("Feedback Submitted:", feedbackData);
    alert("Thank you for your feedback!");
    document.getElementById("feedback-form").reset();
});
