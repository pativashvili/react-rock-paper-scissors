// სტრული თავისუფკლება გაქვს ფოლდერ/ფაილ სტრუქტურაზე რეაქტში
// ასეთი სტატიკურტრი კონფიგურაციისთვის /src/lib/config/*.ts ვიყენებთ უფრო კიტხვადია ფოლდერ სტრუქტურა

import { GameOptionsType } from "../types/game-options.type";
import { OptionsEnum } from "../types/options.enum";

export const GAME_OPTIONS: GameOptionsType[] = [
  {
    id: 0,
    name: OptionsEnum.Rock,
    color: "green",
  },
  {
    id: 1,
    name: OptionsEnum.Paper,
    color: "yellow",
  },
  {
    id: 2,
    name: OptionsEnum.Scissors,
    color: "red",
  },
];
