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
  } else if (
    window.innerWidth >= 1000 &&
    window.innerWidth < 1400 &&
    (screenSize < 1000 || screenSize >= 1400)
  ) {
    generateMasonryGrid(4, posts);
  } else if (window.innerWidth >= 1400 && screenSize < 1400) {
    generateMasonryGrid(5, posts);
  }
  screenSize = window.innerWidth;
});

//on page load

if (screenSize < 600) {
  generateMasonryGrid(1, posts);
} else if (screenSize >= 600 && screenSize < 1000) {
  generateMasonryGrid(2, posts);
} else if (screenSize >= 1000 && screenSize < 1400) {
  generateMasonryGrid(4, posts);
} else {
  generateMasonryGrid(5, posts);
}

//Begin cursor

const ball = document.querySelector('.ball');

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.1;

// Update ball position
function animate() {
  //Determine distance between ball and mouse
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;

  // Find position of ball and some distance * speed
  ballX = ballX + distX * speed;
  ballY = ballY + distY * speed;

  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';

  requestAnimationFrame(animate);
}
animate();

// Move ball with cursor
document.addEventListener('mousemove', function (event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
});

ball.addEventListener('mouseover', function handleMouseOver() {
  ball.style.outline = 'rgb(255, 255, 255) solid 20px';
});
