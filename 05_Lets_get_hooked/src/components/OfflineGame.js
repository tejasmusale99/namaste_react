import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/context/UserContext";

const OfflineGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  const userName = useContext(UserContext)

  console.log(userName);
  
  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleClick = () => {
    if (!gameOver) {
      setScore(score + 1);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameOver(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>📴 You are Offline {userName.loggedInUser}</h1>
      <h2>🎮 Click Game</h2>

      <p>⏱ Time Left: {timeLeft}s</p>
      <p>🔥 Score: {score}</p>

      {!gameOver ? (
        <button
          onClick={handleClick}
          style={{ padding: "15px 30px", fontSize: "18px", cursor: "pointer" }}
        >
          CLICK ME 😄
        </button>
      ) : (
        <>
          <h2>😎 Game Over!</h2>
          <button onClick={restartGame}>Restart 🔁</button>
        </>
      )}
    </div>
  );
};

export default OfflineGame;
