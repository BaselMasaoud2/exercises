$(function () {
    const posts = [];

    // Click event for the "Post" button
    $("#PostButton").on("click", function () {
        // Grab data from inputs
        const name = $("#nameInput").val();
        const text = $("#BirthdayInput").val(); // Update to use BirthdayInput

        // Push new post object to the posts array
        posts.push({ name, text });

        // Log the updated posts array to the console
        console.log(posts);

        // Call render function from render.js to update the UI
        render(posts);

        $("#nameInput").val('');  // Clear the name input
        $("#BirthdayInput").val('');  // Clear the BirthdayInput input

    });

    // Initial render to display any existing posts
    render(posts);
});
