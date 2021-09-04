export const randBeetwen = (
  min: number,
  max: number, // min and max included
): number => Math.floor(Math.random() * (max - min + 1) + min)
