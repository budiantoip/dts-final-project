import {
  GiMeat,
  GiChickenOven,
  GiBeerBottle,
  GiBowlOfRice,
} from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import { FaFish } from "react-icons/fa";

export const Categories = [
  {
    id: 1,
    name: "Beef",
    urlParam: "beef",
    icon: <GiMeat />,
  },
  {
    id: 2,
    name: "Chicken",
    urlParam: "chicken",
    icon: <GiChickenOven />,
  },
  {
    id: 3,
    name: "Dessert",
    urlParam: "dessert",
    icon: <GiBeerBottle />,
  },
];
