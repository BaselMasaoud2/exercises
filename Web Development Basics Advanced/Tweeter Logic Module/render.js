const Renderer = function () {

  const renderPosts = function (_posts) {
    const postsContainer = $('#postsContainer');
    postsContainer.empty();
    

    for (let i = 0; i < _posts.length; i++) {
      const post = _posts[i];
      const postDiv = $(`<div class="post-container" data-id="${post.id}"></div>`);
      const postText = $(`<p class="post-text">${post.text}</p>`);
      const deletePostButton = $('<div class="delete"></div>').text('Delete Post')
      .on('click', function () {
        tweeter.removePost(post.id);
        renderPosts(tweeter.getPosts());
      });
    

      const commentInput = $('<input>').attr({ type: 'text', placeholder: 'Your comment...' });
      const commentButton = $('<button>').text('Comment').on('click', function () {
        const commentText = commentInput.val();
        if (commentText) {
          tweeter.addComment(post.id, commentText);
          renderPosts(tweeter.getPosts());
        }
      });

      postDiv.append(postText, deletePostButton, commentInput, commentButton);

      if (post.comments.length > 0) {
        const commentsList = $('<ul class="comments-list"></ul>');

        for (let j = 0; j < post.comments.length; j++) {
          const comment = post.comments[j];
          const commentItem = $(`<li class="comment-container" data-id="${comment.id}">${comment.text}</li>`);
          const deleteCommentButton = $('<div class="delete-comment">Delete Comment</div>').on('click', function () {
            tweeter.removeComment(post.id, comment.id);
            renderPosts(tweeter.getPosts());
          });

          commentItem.append(deleteCommentButton);
          commentsList.append(commentItem);
        }

        postDiv.append(commentsList);
      }

      postsContainer.append(postDiv);
    }
  };

  return {
    renderPosts
  };
};
