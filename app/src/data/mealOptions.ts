import type { MealNode } from "../types";

export const mealOptions: MealNode = {
  label: "start",
  options: [
    {
      label: "Head Chef to make something",
      options: [
        { label: "Burgers" },
        { label: "Bake something" },
        { label: "Crepes" },
        { label: "Cake (World Famous)" },
        { label: "Eggs" },
        { label: "Fruit.." },
        {
          label: "Mash potato",
        },
        {
          label: "Meat + something",
          options: [
            { label: "Eg parmi and mash" },
            { label: "Salmon ..." },
            { label: "Steak and chips" },
          ],
        },
        {
          label: "Pasta",
          options: [
            { label: "Carbonara oof.." },
            { label: "Pesto" },
            { label: "Spag bol" },
          ],
        },
        {
          label: "Porridge",
        },
        {
          label: "Pumpkin Soup",
        },
        {
          label: "Ramen..",
        },
        {
          label: "Something mexican",
          options: [
            { label: "chicken or mince.." },
            { label: "nachos.." },
            { label: "wraps wooooh" },
          ],
        },
        {
          label: "Something with rice",
          options: [
            { label: "burritos" },
            { label: "fried rice" },
            { label: "Poke bowl" },
            { label: "sushi" },
          ],
        },
        { label: "PIzza" },
        { label: "Toasted Sandwhiches" },
        { label: "Toast" },
      ],
    },
    {
      label: "Takeaway",
      options: [
        { label: "Bakers Delight" },
        { label: "Cafes.." },
        { label: "Curry" },
        { label: "Dominoes" },
        { label: "Fish and Chips" },
        { label: "Grilld" },
        { label: "Hood Burger" },
        { label: "Ice cream?" },
        { label: "Jesters?" },
        { label: "Katsu Chicken" },
        { label: "Kebabs" },
        { label: "My mums food" },
        {
          label: "Something Ferral (Maccas)",
          options: [{ label: "No" }],
        },
        { label: "New restaurant" },
        { label: "Pizza" },
        { label: "Porkies" },
        { label: "Pub food" },
        { label: "Souvlaki" },
        { label: "Subway" },
        { label: "Sushi" },
        { label: "WoknRoll" },
        { label: "Wildflower" },
        { label: "Your mums food" },
      ],
    },
    {
      label: "Not Sure?",
      options: [
        {
          label: "Random Chef",
          options: [
            { label: "Burgers" },
            { label: "Crepes" },
            { label: "Eggs" },
            { label: "Fruit.." },
            { label: "Mash potato" },
            {
              label: "Meat + something",
              options: [
                { label: "Eg parmi and mash" },
                { label: "Salmon ..." },
                { label: "Steak and chips" },
              ],
            },
            {
              label: "Pasta",
              options: [
                { label: "Carbonara oof.." },
                { label: "Pesto" },
                { label: "Spag bol" },
              ],
            },
            { label: "Pumpkin Soup" },
            { label: "Ramen.." },
            {
              label: "Something mexican",
              options: [
                { label: "chicken or mince.." },
                { label: "nachos.." },
                { label: "wraps wooooh" },
              ],
            },
            {
              label: "Something with rice",
              options: [
                { label: "burritos" },
                { label: "fried rice" },
                { label: "Poke bowl" },
                { label: "sushi" },
              ],
            },
            { label: "PIzza" },
            { label: "Toasted Sandwhiches" },
          ],
        },
        {
          label: "Random Takeaway",
          options: [
            { label: "Bakers Delight" },
            { label: "Cafes.." },
            { label: "Curry" },
            { label: "Dominoes" },
            { label: "Fish and Chips" },
            { label: "Grilld" },
            { label: "Hood Burger" },
            { label: "Ice cream?" },
            { label: "Katsu Chicken" },
            { label: "Kebabs" },
            { label: "My mums food" },
            { label: "New restaurant" },
            { label: "Pizza" },
            { label: "Porkies" },
            { label: "Pub food" },
            { label: "Souvlaki" },
            { label: "Sushi" },
            { label: "WoknRoll" },
            { label: "Wildflower" },
            { label: "Your mums food" },
            {
              label: "Something Ferral (Maccas)",
              options: [{ label: "No" }],
            },
          ],
        },
        {
          label: "Surprise Me",
          options: [
            { label: "Chef’s Choice" },
            { label: "Random Dessert" },
            { label: "Leftovers Adventure" },
            { label: "Mystery Takeaway" },
            { label: "Something Exotic" },
            {
              label: "Snack Attack",
              options: [
                { label: "Chips & Dip" },
                { label: "Fruit Bowl" },
                { label: "Nuts & Seeds" },
              ],
            },
          ],
        },
        { label: "Flip a Coin" },
        { label: "Ask a Friend" },
        { label: "Ben Chooses" },
      ],
    },
  ],
};
