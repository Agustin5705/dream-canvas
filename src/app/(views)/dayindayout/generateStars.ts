export type Star = {
  id: number;
  top: string;
  left: string;
  delay: string;
  size: string;
};

export function generateStars(count: number): Star[] {
  return [...Array(count)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: `${Math.random() * 2 + 1}px`,
  }));
}
