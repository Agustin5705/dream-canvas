export type ShootingStar = {
  id: number;
  top: string;
  left: string;
  size: string;
};

export function generateShootingStar(): ShootingStar {
  return {
    id: Date.now(),
    top: `${Math.random() * 5}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 1.5 + 2}px`,
  };
}
