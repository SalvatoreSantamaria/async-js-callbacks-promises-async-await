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

  //using callbacks
  // function createPostCallBack(post, callback) {
  //   setTimeout(() => {
  //     posts.push(post)
  //     callback();
  //   }, 2000);
  // }


// using promises
function createPostPromise(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      // error checking here
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  })
}

// promises replace the callback with .then syntax
createPostPromise({ title: 'Post Six', body: 'Post Six' }) //once the promise resolves, then it will call get posts
  .then(getPostsES6)//using .then inthe promise, call getPostsES6 function
  .catch(error => console.log(error)) //use .catch to get the error. (change const error to true to see funcitonality)


  //Async / Await 
// async function init() {
//   await createPostPromise({ title: 'Post Six', body: 'Post Six' });
//   getPosts();
// }
  
// init();