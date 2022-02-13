import type { IMaterial } from "../../typings/types.ts";
import { channelPercentage } from "../_utils.ts";
export const materials: IMaterial[] = [
  {
    name: { en_US: "Plastic" },
    label: "rough",
    normal: "block_normal",
    sound: "note.snare",
    friction: (idx: number) => Math.min(0.9, Math.max(0.1, idx * 0.01)),
    minimumLevel: 50,
    maximumLevel: 100,
    paletteLevel: 75,
    endStep: 100,
    step: 25,
    explosionResistance: (idx: number) => Math.min(1, Math.max(0, idx * 0.01)),
    lightAbsorption: (itr: number) => Math.max(0, Math.min(16, Math.round(itr * 0.5))),
    lightEmission: () => 0,
    metalness: () => 0,
    emissive: () => 0,
    roughness: (idx: number) => channelPercentage(100 - idx),
    opacity: () => 1,
  },
  {
    name: { en_US: "Metallic" },
    label: "metal",
    normal: "block_normal",
    sound: "note.iron_xylophone",
    friction: (idx: number) => Math.min(0.5, Math.max(0.001, idx * 0.01)),
    minimumLevel: 50,
    maximumLevel: 100,
    paletteLevel: 75,
    endStep: 100,
    step: 25,
    explosionResistance: (idx: number) => Math.min(1, Math.max(0, idx * 0.01)),
    lightAbsorption: () => 0,
    lightEmission: () => 0,
    metalness: (idx: number) => channelPercentage(idx),
    emissive: () => 0,
    roughness: () => 0,
    opacity: () => 1,
  },
  {
    name: { en_US: "Glowing" },
    label: "emissive",
    normal: "block_normal",
    sound: "note.pling",
    friction: (idx: number) => Math.min(0.3, Math.max(0.01, idx * 0.1)),
    minimumLevel: 0,
    maximumLevel: 100,
    paletteLevel: 75,
    endStep: 100,
    step: 25,
    explosionResistance: (idx: number) => Math.min(1, Math.max(0, idx * 0.01)),
    lightAbsorption: () => 0,
    lightEmission: (itr: number) => Math.max(0, Math.min(16, Math.round(itr * 0.666))),
    metalness: () => 0,
    emissive: (idx: number) => channelPercentage(idx),
    roughness: () => 0,
    opacity: () => 1,
  },
  {
    name: { en_US: "Glass" },
    label: "glass",
    normal: "block_normal",
    sound: "glass",
    friction: () => 0.2,
    minimumLevel: 40,
    maximumLevel: 80,
    paletteLevel: 75,
    endStep: 90,
    step: 20,
    explosionResistance: () => 0,
    lightAbsorption: () => 0,
    lightEmission: () => 0,
    metalness: () => 0,
    emissive: () => 0,
    roughness: () => 60,
    opacity: (itr: number) => Math.min(0.99, Math.max(0.499, itr * 0.1)),
  },
];
