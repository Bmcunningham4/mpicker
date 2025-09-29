import { useState } from "react";
import { mealOptions } from "./data/mealOptions";
import type { MealNode } from "./types";
import CardList from "./components/CardList";
import "./App.css";

function App() {
  const [currentNode, setCurrentNode] = useState<MealNode>(mealOptions);
  const [history, setHistory] = useState<MealNode[]>([]);
  const [lastChoice, setLastChoice] = useState<string>("");

  const handleChoice = (choice: MealNode) => {
    setLastChoice(choice.label); // Save the last clicked item
    if (choice.options) {
      setHistory((prev) => [...prev, currentNode]);
      setCurrentNode(choice);
    } else {
      setHistory((prev) => [...prev, currentNode]);
      setCurrentNode({ label: "done" }); // End state
    }
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const prevNode = history[history.length - 1];
    setHistory((prev) => prev.slice(0, prev.length - 1));
    setCurrentNode(prevNode);
  };

  const showBackButton = history.length > 0;

  return (
    <div className="app">
      {showBackButton && (
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
      )}

      {currentNode.label === "start" && <h1>Welcome to King’s MealPicker!</h1>}

      {currentNode.label === "done" ? (
        <>
          <h2>Enjoy your {lastChoice}!!! 🍴</h2>
          <p className="yum-paragraph">
            YUM yum YUM 🍕 yum YUM 🍔 yum YUM 🍣 yum YUM 🍝 yum YUM 🥗 yum YUM
            🍛 yum YUM 🍩 yum YUM 🍪 yum YUM 🍟 yum YUM 🌮 yum YUM 🌯 yum YUM 🥪
            yum YUM 🍜 yum YUM 🍲 yum YUM 🍖 yum YUM 🍗 yum YUM 🍤 yum YUM 🥟
            yum YUM 🥞 yum YUM 🥓 yum YUM 🧇 yum YUM 🥩 yum YUM 🥔 yum YUM 🍠
            yum YUM 🥒 yum YUM 🥬 yum YUM 🥕 yum YUM 🍅 yum YUM 🫑 yum YUM 🌽
            yum YUM 🥭 yum YUM 🍓 yum YUM 🍇 yum YUM 🍉 yum YUM 🍊 yum YUM 🍋
            yum YUM 🍌 yum YUM 🍍 yum YUM 🥥 yum YUM 🥑 yum YUM 🥝 yum YUM 🥜
            yum YUM 🧄 yum YUM 🧅 yum YUM 🍄 yum YUM 🫛 yum YUM 🫑 yum ...
          </p>
        </>
      ) : (
        currentNode.options && (
          <CardList options={currentNode.options} onChoose={handleChoice} />
        )
      )}
    </div>
  );
}

export default App;
