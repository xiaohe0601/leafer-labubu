import { PathCreator } from "leafer-ui";
import type { Point } from "@/types";

function reflect(p: Point, cp: Point) {
  return {
    x: p.x + (p.x - cp.x),
    y: p.y + (p.y - cp.y)
  };
}

export function createBezierEllipsePath(p1: Point, p2: Point, ox: number, oy: number) {
  const cp1 = { x: p1.x + ox, y: p1.y + oy };
  const cp2 = { x: p2.x - ox, y: p2.y + oy };
  const cp3 = reflect(p2, cp2);
  const cp4 = reflect(p1, cp1);

  return new PathCreator()
    .moveTo(p1.x, p1.y)
    .bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, p2.x, p2.y)
    .bezierCurveTo(cp3.x, cp3.y, cp4.x, cp4.y, p1.x, p1.y)
    .closePath()
    .path;
}