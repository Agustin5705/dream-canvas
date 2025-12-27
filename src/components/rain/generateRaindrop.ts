export type RaindropData = {
  left: string;
  delay: number;
};

export function generateRaindrop(): RaindropData {
  return {
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 1.5,
  };
}
