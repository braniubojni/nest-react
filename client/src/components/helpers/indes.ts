const getImageUrl = (name: string) => {
  return new URL(`./dir/${name}.png`, import.meta.url).href;
};

export { getImageUrl };
