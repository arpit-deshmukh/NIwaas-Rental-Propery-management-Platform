

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb",

  "https://images.unsplash.com/photo-1572120360610-d971b9b78825",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",

  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904",
  "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
];

export const getRandomImages = (count = 3) => {
  return [...DEFAULT_IMAGES]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};
