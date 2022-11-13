const posts = [];

const images = [
  'https://dr.savee-cdn.com/things/6/2/93aba637fe4e51dc68dc1d.webp',
  'https://dr.savee-cdn.com/things/6/3/62b79e3ecca4cbad593092.webp',
  'https://dr.savee-cdn.com/things/6/3/5da9ef2a511bc7e3e7cae3.webp',
  'https://dr.savee-cdn.com/things/6/3/5a801b2f10b9054cc78701.webp',
  'https://dr.savee-cdn.com/things/6/3/5e657af9249b9824d708f2.webp',
  'https://dr.savee-cdn.com/things/6/3/5fc43487a2bcb7eda67278.webp',
  'https://dr.savee-cdn.com/things/6/3/568e54cc32c7e113cc9e5f.webp',
  'https://dr.savee-cdn.com/things/6/2/14c2425cd11abb3b228b03.webp',
  'https://dr.savee-cdn.com/things/6/3/42940d95100dab13d5f58d.webp',
  'https://dr.savee-cdn.com/things/6/3/445c08cf0ed4a931689354.webp',
  'https://dr.savee-cdn.com/things/6/3/4235016811907199de939f.png',
  'https://dr.savee-cdn.com/things/6/3/20330bae07d67e6f8badfa.webp',
  'https://dr.savee-cdn.com/things/6/1/9c3654947d84e487ebcfae.webp'
];

let imageIndex = 0;

for (let i = 0; i < 80; i++) {
  let item = {
    id: i,
    title: `Post ${i}`,
    image: images[imageIndex]
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}
