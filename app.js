const container = document.querySelector('.container');

function generateMasonryGrid(columns, posts) {
  container.innerHTML = '';

  let columnWrappers = {};

  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }

  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }

  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let columnDiv = document.createElement('div');
    columnDiv.classList.add('column');

    columnPosts.forEach((post) => {
      let postDiv = document.createElement('div');
      postDiv.classList.add('post');
      let image = document.createElement('img');
      image.src = post.image;
      let overlay = document.createElement('div');
      overlay.classList.add('overlay');
      let title = document.createElement('h3');
      title.innerText = post.title;

      overlay.appendChild(title);
      postDiv.append(image, overlay);
      columnDiv.appendChild(postDiv);
    });
    container.appendChild(columnDiv);
    console.log(columnDiv);
  }
}

//change the number of columns depending on the screen size

let screenSize = window.innerWidth;

//dynamiaclly

window.addEventListener('resize', () => {
  imageIndex = 0;
  if (window.innerWidth < 600 && screenSize >= 600) {
    generateMasonryGrid(1, posts);
  } else if (
    window.innerWidth >= 600 &&
    window.innerWidth < 1000 &&
    (screenSize < 600 || screenSize >= 1000)
  ) {
    generateMasonryGrid(2, posts);
  } else if (window.innerWidth >= 1000 && screenSize < 1000) {
    generateMasonryGrid(4, posts);
  }
  screenSize = window.innerWidth;
});

//on page load

if (screenSize < 600) {
  generateMasonryGrid(1, posts);
} else if (screenSize >= 600 && screenSize < 1000) {
  generateMasonryGrid(2, posts);
} else {
  generateMasonryGrid(4, posts);
}
