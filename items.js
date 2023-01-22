const posts = [];
let imageIndex = 0;
const imageArray = [];

const apiKey = 'WLcQFJMXO_PBQfpVFZ1jisJWFvQZRm3wpjBfPWxxMZ0';
const url = `https://api.unsplash.com/photos?client_id=${apiKey}`;

// this dodesn't work because the code block that creates and pushes
// the 'item' objects to the 'posts' array is running before the 'imageArray'
// is populated by the fetch request.

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     for (let i = 0; i < 10; i++) {
//       imageArray.push(data[i].urls.small);
//     }
//     console.log(posts);
//     console.log(imageArray);
//     // console.log(images);
//   })
//   .catch((error) => console.log(error));

// for (let i = 0; i < 100; i++) {
//   let item = {
//     id: i,
//     title: `Post ${i}`,
//     image: imageArray[imageIndex]
//   };
//   posts.push(item);
//   imageIndex++;
//   if (imageIndex > imageArray.length - 1) imageIndex = 0;
// }

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 10; i++) {
      imageArray.push(data[i].urls.small);
    }
    //console.log(posts);
    // console.log(imageArray);
    for (let i = 0; i < 100; i++) {
      let item = {
        id: i,
        title: `Post ${i}`,
        image: imageArray[imageIndex]
      };
      posts.push(item);
      imageIndex++;
      if (imageIndex > imageArray.length - 1) imageIndex = 0;
    }
    console.log(posts);
  })
  .catch((error) => console.log(error));
