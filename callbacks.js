// mimic blog posts on a server

const posts = [
  {
    title: 'Post One',
    body: 'This is text from post one body'
  },
  {
    title: 'Post Two',
    body: 'This is text from post two body'
  },
  {
    title: 'Post Three',
    body: 'This is text from post three body'
  },

];

//mimicing server delay with setTimeout- 
function getPosts() {
  setTimeout(function () {
    let output = '';
     posts.forEach(function(parameter) {
      return output += `<li>${parameter.title}</li>`
    });
   return document.body.innerHTML = output;
  }, 1000);
}
// 
// with es6 arrow functions
function getPostsES6() {
  setTimeout(() => {
    let output = '';
    posts.forEach((parameter) => {
      output += `<li>${parameter.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}
 //create post never runs because the createPost() took longer to run than the getPost() function()
  // function createPost(post) {
  //   setTimeout(() => {
  //     posts.push(post)
  //   }, 2000)
  // }

  //using callbacks
function createPostCallBack(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback();
  }, 2000);
}
  


// this won't work: //create post never runs because the createPost() took longer to run than the getPost() function()
//getPosts();
//createPost({ title: 'Post Four', body: 'Post Four' })

// have to use a callback
createPostCallBack({ title: 'Post Four', body: 'Post Five' }, getPosts)