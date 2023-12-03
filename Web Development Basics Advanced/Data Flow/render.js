const render = function (posts) {
    const postsContainer = $("#postsContainer");
    postsContainer.empty(); // Clear the container before rendering

    posts.forEach((post, index) => {
        const postDiv = $("<div>").addClass("post");
        postDiv.append($("<p>").text(`Name: ${post.name}`));
        postDiv.append($("<p>").text(`Text: ${post.text}`));
        
        // Add "X" button with a click event to remove the post
        const closeButton = $("<button>").text("X").addClass("closeButton");
        closeButton.on("click", function () {
            // Remove the post from the array and re-render
            posts.splice(index, 1);
            render(posts);
        });

        postDiv.append(closeButton);
        postsContainer.append(postDiv);
    });

    console.log(posts);
};
