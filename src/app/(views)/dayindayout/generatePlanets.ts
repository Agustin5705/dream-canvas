export type Planet = {
  id: number;
  top: string;
  left: string;
  size: string;
  color: string;
  link?: string;
};

export function generatePlanets(): Planet[] {
  const colors = ["blue", "red", "purple"];
  const planets: Planet[] = [];

  colors.forEach((color) => {
    for (let i = 0; i < 3; i++) {
      planets.push({
        id: planets.length,
        top: `${Math.random() * 50}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        color,
      });
    }
  });

  return planets;
}
