const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
];

export const getRandomImages = (count = 3) => {
  return [...DEFAULT_IMAGES]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};
