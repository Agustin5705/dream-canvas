export type SnowflakeData = {
  left: string;
  delay: number;
};

export function generateSnowflake(): SnowflakeData {
  return {
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 1.5,
  };
}
