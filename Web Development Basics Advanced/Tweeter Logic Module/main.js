const postInput = $('#postInput');
const twitButton = $('#twitButton');

const renderer = Renderer(); 

twitButton.on('click', function () {
  const text = postInput.val();
  tweeter.addPost(text);
  renderer.renderPosts(tweeter.getPosts()); 
});
