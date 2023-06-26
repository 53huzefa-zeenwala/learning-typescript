const HEAD = (
  <div
    style={{
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      border: "10px solid black",
      position: "absolute",
      top: "30px",
      right: "-30px",
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "90px",
      backgroundColor: "black",
      position: "absolute",
      top: "100px",
      right: 0,
    }}
  />
);
const LEFT_HAND = (
  <div
    style={{
      width: "10px",
      height: "100px",
      backgroundColor: "black",
      position: "absolute",
      top: "80px",
      right: "40px",
      rotate: "120deg",
    }}
  />
);
const RIGHT_HAND = (
  <div
    style={{
      width: "10px",
      height: "100px",
      backgroundColor: "black",
      position: "absolute",
      top: "80px",
      right: "-40px",
      rotate: "-120deg",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "10px",
      height: "120px",
      backgroundColor: "black",
      position: "absolute",
      top: "175px",
      right: "30px",
      rotate: "30deg",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "10px",
      height: "120px",
      backgroundColor: "black",
      position: "absolute",
      top: "175px",
      right: "-30px",
      rotate: "-30deg",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, LEFT_HAND, RIGHT_HAND, LEFT_LEG, RIGHT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "10px",
          width: "200px",
          backgroundColor: "black",
          marginLeft: "100px",
        }}
      />
      <div
        style={{
          height: "30px",
          width: "10px",
          backgroundColor: "black",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      
      <div
        style={{
          height: "290px",
          width: "10px",
          backgroundColor: "black",
          marginLeft: "100px",
        }}
      />
      <div
        style={{ height: "10px", width: "200px", backgroundColor: "black" }}
      />
    </div>
  );
}

export default HangmanDrawing;
