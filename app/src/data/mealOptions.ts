import type { MealNode } from "../types";

export const mealOptions: MealNode = {
  label: "start",
  options: [
    {
      label: "Takeaway",
      options: [
        {
          label: "Pizza",
          options: [{ label: "Dominos" }, { label: "Local Shop" }],
        },
        {
          label: "Burgers",
          options: [{ label: "Macca's" }, { label: "Grill'd" }],
        },
        { label: "Sushi" },
      ],
    },
    {
      label: "Ben Make Something",
      options: [{ label: "Pasta" }, { label: "Curry" }, { label: "Salad" }],
    },
    {
      label: "Not Sure",
      options: [{ label: "Surprise Me" }, { label: "Flip a Coin" }],
    },
  ],
};
