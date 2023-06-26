type HangmanWordProps = {
    guessedLetter: string[],
    wordToGuess: string,
    reveal?: boolean
}
function HangmanWord({guessedLetter, wordToGuess, reveal = false}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "3.5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, i) => (
        <span style={{ borderBottom: ".1em solid black" }} key={i}>
          <span
            style={{
              visibility: guessedLetter.includes(letter) || reveal ? "visible" : "hidden", color: !guessedLetter.includes(letter) && reveal ? "red" : "black"
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
