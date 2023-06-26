import styles from "./Keyboard.module.css";

type KeyboardProps = {
  disabled?: boolean;
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (key: string) => void;
};

function Keyboard({disabled =false, activeLetter, inactiveLetter, addGuessedLetter}: KeyboardProps) {
  const keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(40px, 1fr))",
        gap: ".5rem",
        maxWidth: "500px",
        marginInline: "auto",
      }}
    >
      {keys.map((key, i) => {
        const isActive = activeLetter.includes(key)
        const isInactive = inactiveLetter.includes(key)
        return (
          <button disabled={isInactive || isActive || disabled} onClick={() => addGuessedLetter(key)} className={`${styles.btn} ${isActive ? styles.active: ''} ${isInactive ? styles.inactive: ''}`} key={i}>
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
