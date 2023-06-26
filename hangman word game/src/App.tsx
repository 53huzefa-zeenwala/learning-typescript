import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

  const incorrectLetter = guessedLetter.filter(
    (letter) => !wordToGuess.includes(letter)
    );

    const isLoser = incorrectLetter.length >= 6
    const isWinner = wordToGuess.split("").every(letter => guessedLetter.includes(letter))
    
    const addGuessedLetter = useCallback(
      (key: string) => {
        if (guessedLetter.includes(key)) return;
        
      setGuessedLetter((prev) => [...prev, key]);
    },
    [guessedLetter]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/) || isWinner || isLoser) return;
      e.preventDefault();

      addGuessedLetter(e.key);
    };

    document.addEventListener("keypress", handler);

    return () => document.removeEventListener("keypress", handler);
  }, [guessedLetter, isWinner, isLoser]);


  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "1.5rem", textAlign: "center" }}>{isLoser &&"Lose"} {isWinner && "Win"}</div>
      <HangmanDrawing numberOfGuesses={incorrectLetter.length} />
      <HangmanWord guessedLetter={guessedLetter} wordToGuess={wordToGuess} reveal={isLoser} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard disabled={isWinner || isLoser} activeLetter={guessedLetter.filter(letter => wordToGuess.includes(letter))} inactiveLetter={incorrectLetter} addGuessedLetter={addGuessedLetter} />
      </div>
    </div>
  );
}

export default App;
