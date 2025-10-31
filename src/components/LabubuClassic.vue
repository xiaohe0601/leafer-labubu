<template>
  <Box
    :width="300"
    :height="520"
    v-bind="attrs"
  >
    <Group :z-index="1">
      <!-- Left ear -->
      <Ellipse
        :x="74"
        :y="56"
        :width="65"
        :height="150"
        fill="#984628"
        stroke="#000000"
        :stroke-width="3"
      ></Ellipse>

      <!-- Left inner ear -->
      <Ellipse
        :x="82"
        :y="72"
        :width="50"
        :height="120"
        fill="#ffd9d0"
        stroke="#000000"
        :stroke-width="2"
      ></Ellipse>

      <!-- Left cochlea -->
      <Ellipse
        :x="95"
        :y="118"
        :width="26"
        :height="60"
        fill="#ffbbbf"
        stroke="#000000"
        :stroke-width="2"
      ></Ellipse>

      <!-- Right ear -->
      <Ellipse
        :x="156"
        :y="56"
        :width="65"
        :height="150"
        fill="#984628"
        stroke="#000000"
        :stroke-width="3"
      ></Ellipse>

      <!-- Right inner ear -->
      <Ellipse
        :x="164"
        :y="72"
        :width="50"
        :height="120"
        fill="#ffd9d0"
        stroke="#000000"
        :stroke-width="2"
      ></Ellipse>

      <!-- Right cochlea -->
      <Ellipse
        :x="176"
        :y="118"
        :width="26"
        :height="60"
        fill="#ffbbbf"
        stroke="#000000"
        :stroke-width="2"
      ></Ellipse>

      <!-- Head -->
      <Path
        :path="headPath"
        fill="#984628"
        stroke="#000000"
        :stroke-width="3"
      ></Path>

      <!-- Face -->
      <Path
        :path="facePath"
        fill="#ffd9d0"
        stroke="#000000"
        :stroke-width="3"
      ></Path>

      <!-- Left eye white -->
      <Ellipse
        :x="93"
        :y="228"
        :width="40"
        :height="60"
        fill="#f9f9f9"
        stroke="#000000"
        :stroke-width="2"
      ></Ellipse>

      <!-- Left upper eyelid -->
      <Ellipse
        :x="96"
        :y="206"
        :width="44"
        :height="26"
        :rotation="10"
        :start-angle="20"
        :end-angle="154"
        fill="#ffd9d0"
      ></Ellipse>

      <!-- Left eyebrow -->
      <Line
        :points="[96, 226, 104, 233, 124, 235, 134, 232]"
        curve
        stroke="#000000"
        :stroke-width="2"
        stroke-cap="round"
      ></Line>

      <!-- Left eyeball -->
      <Ellipse
        :x="100"
        :y="242"
        :width="28"
        :height="45"
        fill="#000000"
      ></Ellipse>

      <!-- Left eye highlight -->
      <Ellipse
        :x="111"
        :y="245"
        :width="6"
        :height="10"
        fill="#ffffff"
      ></Ellipse>

      <!-- Right eye white -->
      <Ellipse
        :x="165"
        :y="228"
        :width="40"
        :height="60"
        fill="#f9f9f9"
        stroke="#000000"
        :stroke-width="2"
      ></Ellipse>

      <!-- Right upper eyelid -->
      <Ellipse
        :x="158"
        :y="214"
        :width="44"
        :height="26"
        :rotation="-10"
        :start-angle="24"
        :end-angle="158"
        fill="#ffd9d0"
      ></Ellipse>

      <!-- Right eyebrow -->
      <Line
        :points="[164, 232, 176, 236, 194, 233, 202, 226]"
        curve
        stroke="#000000"
        :stroke-width="2"
        stroke-cap="round"
      ></Line>

      <!-- Right eyeball -->
      <Ellipse
        :x="171"
        :y="242"
        :width="28"
        :height="45"
        fill="#000000"
      ></Ellipse>

      <!-- Right eye highlight -->
      <Ellipse
        :x="181"
        :y="245"
        :width="6"
        :height="10"
        fill="#ffffff"
      ></Ellipse>

      <!-- Nose -->
      <Path
        :path="nosePath"
        fill="#ff0154"
        stroke="#000000"
        :stroke-width="2"
      ></Path>

      <!-- Mouth -->
      <Line
        :points="mouthPoints"
        :curve="mouthCurve"
        stroke="#000000"
        :stroke-width="2"
        stroke-cap="round"
      ></Line>

      <!-- Teeth -->
      <Path
        v-for="(item, index) in teethPaths"
        :key="index"
        :path="item"
        fill="#ffffff"
        stroke="#000000"
        :stroke-width="2"
      ></Path>
    </Group>

    <Group>
      <!-- Left hand -->
      <Path
        :path="leftHandPath"
        fill="#ffdbd7"
        stroke="#000000"
        :stroke-width="3"
      ></Path>

      <!-- Right hand -->
      <Path
        :path="rightHandPath"
        fill="#ffdbd7"
        stroke="#000000"
        :stroke-width="3"
      ></Path>

      <!-- Left foot -->
      <Path
        :path="leftFootPath"
        fill="#ffdbd7"
        stroke="#000000"
        :stroke-width="3"
      ></Path>

      <!-- Right foot -->
      <Path
        :path="rightFootPath"
        fill="#ffdbd7"
        stroke="#000000"
        :stroke-width="3"
      ></Path>

      <!-- Body -->
      <Path
        :path="bodyPath"
        fill="#984628"
        stroke="#000000"
        :stroke-width="3"
      ></Path>
    </Group>
  </Box>
</template>

<script lang="ts" setup>
import { PathCreator } from "leafer-ui";

const attrs = useAttrs();

const headPath = createBezierEllipsePath(
  { x: 40, y: 240 },
  { x: 260, y: 240 },
  28,
  -120
);

const facePath = createBezierEllipsePath(
  { x: 60, y: 260 },
  { x: 240, y: 260 },
  -10,
  80
);

const nosePath = createBezierEllipsePath(
  { x: 141, y: 275 },
  { x: 157, y: 275 },
  2,
  9
);

const mouthPoints = [76, 266, 150, 304, 224, 266];
const mouthCurve = 0.76;

function createTeethPaths(
  count: number,
  toothWidth: number,
  toothHeight: number,
  curve: number
) {
  const p1 = { x: mouthPoints[0], y: mouthPoints[1] };
  const c0 = { x: mouthPoints[2], y: mouthPoints[3] };
  const p2 = { x: mouthPoints[4], y: mouthPoints[5] };

  function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
  }

  const c1 = {
    x: lerp(p1.x, c0.x, 0.5) - curve * 20,
    y: lerp(p1.y, c0.y, 0.5) + curve * 43
  };

  const c2 = {
    x: lerp(c0.x, p2.x, 0.5) + curve * 20,
    y: lerp(c0.y, p2.y, 0.5) + curve * 43
  };

  function cubic(t: number): [number, number] {
    return [
      (1 - t) ** 3 * p1.x + 3 * (1 - t) ** 2 * t * c1.x + 3 * (1 - t) * t ** 2 * c2.x + t ** 3 * p2.x,
      (1 - t) ** 3 * p1.y + 3 * (1 - t) ** 2 * t * c1.y + 3 * (1 - t) * t ** 2 * c2.y + t ** 3 * p2.y
    ];
  }

  function derivative(t: number): [number, number] {
    return [
      3 * (1 - t) ** 2 * (c1.x - p1.x) + 6 * (1 - t) * t * (c2.x - c1.x) + 3 * t ** 2 * (p2.x - c2.x),
      3 * (1 - t) ** 2 * (c1.y - p1.y) + 6 * (1 - t) * t * (c2.y - c1.y) + 3 * t ** 2 * (p2.y - c2.y)
    ];
  }

  const value: number[][] = [];

  for (let i = 0; i < count; i += 1) {
    const t = i / (count - 1);

    const [cx, cy] = cubic(t);
    const [dx, dy] = derivative(t);

    const length = Math.sqrt(dx * dx + dy * dy);

    const nx = -dy / length;
    const ny = dx / length;

    const halfWidth = toothWidth / 2;

    const x1 = cx - halfWidth * dx / length;
    const y1 = cy - halfWidth * dy / length;
    const x2 = cx + halfWidth * dx / length;
    const y2 = cy + halfWidth * dy / length;

    const xt = cx + toothHeight * nx;
    const yt = cy + toothHeight * ny;

    const path = new PathCreator()
      .moveTo(x1, y1)
      .quadraticCurveTo(xt, yt, x2, y2)
      .closePath()
      .path;

    value.push(path);
  }

  return value;
}

const teethPaths = createTeethPaths(11, 16, 18, mouthCurve);

const bodyPath = new PathCreator()
  .moveTo(84, 316)
  .quadraticCurveTo(40, 374, 90, 368)
  .bezierCurveTo(74, 460, 140, 440, 147, 430)
  .bezierCurveTo(154, 444, 224, 454, 204, 368)
  .quadraticCurveTo(254, 374, 210, 316)
  .closePath()
  .path;

const leftHandPath = new PathCreator()
  .moveTo(68, 352)
  .quadraticCurveTo(48, 348, 59, 360)
  .quadraticCurveTo(42, 372, 58, 370)
  .quadraticCurveTo(50, 386, 66, 372)
  .quadraticCurveTo(68, 392, 76, 366)
  .closePath()
  .path;

const rightHandPath = new PathCreator()
  .moveTo(226, 352)
  .quadraticCurveTo(246, 348, 235, 360)
  .quadraticCurveTo(252, 372, 236, 370)
  .quadraticCurveTo(244, 386, 228, 372)
  .quadraticCurveTo(226, 392, 218, 366)
  .closePath()
  .path;

const leftFootPath = new PathCreator()
  .moveTo(104, 430)
  .quadraticCurveTo(103, 456, 115, 444)
  .quadraticCurveTo(122, 456, 128, 444)
  .quadraticCurveTo(144, 456, 140, 430)
  .closePath()
  .path;

const rightFootPath = new PathCreator()
  .moveTo(191, 430)
  .quadraticCurveTo(192, 456, 180, 444)
  .quadraticCurveTo(173, 456, 167, 444)
  .quadraticCurveTo(151, 456, 155, 430)
  .closePath()
  .path;
</script>