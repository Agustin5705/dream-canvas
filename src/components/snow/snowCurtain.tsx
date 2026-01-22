import {
  Snowfall,
  SnowfallFast,
  SnowfallSlow,
  SnowfallSuperSlow,
  SnowfallVerySlow,
} from "./SnowFlake";

export function SnowCurtain1() {
  return (
    <>
      <SnowfallSlow />
      <Snowfall />
      <SnowfallFast />
      <SnowfallVerySlow />
      <SnowfallSuperSlow />
      <SnowfallSlow />
      <Snowfall />
      <SnowfallFast />
      <SnowfallVerySlow />
      <SnowfallSuperSlow />
    </>
  );
}

export function SnowCurtain2() {
  return (
    <>
      <SnowfallSlow />
      <Snowfall />
      <SnowfallFast />
      <SnowfallVerySlow />
      <SnowfallSuperSlow />
      <SnowfallSlow />
      <Snowfall />
      <SnowfallFast />
      <SnowfallVerySlow />
      <SnowfallSuperSlow />
    </>
  );
}
