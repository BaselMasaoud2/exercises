

[
    
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]





const TwitterModule = function(){
const _posts = []
let postIdCounter = 0
let commentIdCounter = 0

const getPosts = function(){
    return _posts
}

const addPost = function(text){

const newPost = {id:"p"+postIdCounter, text:text, comments: []}
 _posts.push(newPost)
postIdCounter = postIdCounter+1
}

const removePost = function(postId){

    const postIndex = _posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        _posts.splice(postIndex, 1);
    }
}

const addComment = function(postID, text){
    const post = _posts.find(post => post.id === postID);
    if (post) {
        const newComment = {id: "c" + commentIdCounter, text: text};
        post.comments.push(newComment);
        commentIdCounter++;
    } else {
        console.error("Post not found.");
    }
}

const removeComment = function (postID, commentID) {
    const post = _posts.find(post => post.id === postID);
    if (post) {
        const commentIndex = post.comments.findIndex(comment => comment.id === commentID);
        if (commentIndex !== -1) {
            post.comments.splice(commentIndex, 1);
        }
    }
}

return {
    getPosts, 
    addPost, 
    removePost,
    addComment,
    removeComment,
    
    }

}

    
    
    
const tweeter = TwitterModule();

console.log(tweeter.getPosts());
/// בדיקות /// 

// tweeter.addPost("First post!");
// console.log(tweeter.getPosts());

// tweeter. addPost("Aw man, I wanted to be first");
// console.log(tweeter.getPosts());

// tweeter.removePost("p0");
// console.log("After removal:");
// console.log(tweeter.getPosts());

// tweeter.addComment("p1", "Cool comment on the second post!");
// console.log("After adding a comment to the second post:");
// console.log(tweeter.getPosts());

// tweeter.removeComment("p1", "c0");
// console.log(tweeter.getPosts());

