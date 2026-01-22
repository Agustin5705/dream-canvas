export type SnowflakeData = {
  left: string;
};

export function generateSnowflake(): SnowflakeData {
  return {
    left: `${Math.random() * 100}%`,
  };
}
