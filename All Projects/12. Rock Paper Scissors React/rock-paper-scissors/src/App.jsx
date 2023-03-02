import { useState } from "react";
import "./App.css";

function App() {
  const choices = ["rock", "paper", "scissor"];

  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("paper");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  const rule = () => {
    if (userChoice === computerChoice) {
      setResult("It's a Draw!😐🥱");
    } else if (userChoice === "rock") {
      if (computerChoice === "scissor") {
        setUserScore(userScore + 1);
        setResult("You Won!!🥳🥳");
      } else {
        setComputerScore(computerScore + 1);
        setResult("You Lost!!😖😓");
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        setUserScore(userScore + 1);
        setResult("You Won!!🥳🥳");
      } else {
        setComputerScore(computerScore + 1);
        setResult("You Lost!!😖😓");
      }
    } else if (userChoice === "scissor") {
      if (computerChoice === "paper") {
        setUserScore(userScore + 1);
        setResult("You Won!!🥳🥳");
      } else {
        setComputerScore(computerScore + 1);
        setResult("You Lost!!😖😓");
      }
    }
  };

  const rockOnClick = () => {
    setUserChoice("rock");
    setComputerChoice(choices[Math.floor(Math.random() * 3)])
    rule()
  };

  const paperOnClick = () => {
    setUserChoice("paper");
    setComputerChoice(choices[Math.floor(Math.random() * 3)])
    rule();
  };

  const scissorOnClick = () => {
    setUserChoice("scissor");
    setComputerChoice(choices[Math.floor(Math.random() * 3)])
    rule();
  };

  return (
    <div className='overflow-x-hidden p-4 font-["Poppins"] bg-gradient-radial from-[#70a9a1] to-[#14272d] min-h-screen'>
      <h1 className="text-white mx-auto w-max text-3xl max-w-5xl sm:text-4xl">
        Rock, Paper, Scissors
      </h1>
      <img
        src={`../images/rock-paper-scissors.png`}
        alt="Rock-Paper-Scissors-image"
        className="w-16 m-auto mx-auto mt-6"
      />
      <div className="flex justify-between text-white max-w-5xl mx-auto mt-10 items-center flex-wrap sm:text-xl">
        <p className="bg-[#1E3539] py-1 px-4 rounded-[3px]">
          My Score - {userScore}
        </p>
        <p
          className={result ? "bg-[#1E3539] py-1 px-4 rounded-[3px]" : "hidden"}
        >
          {result}
        </p>
        <p className="bg-[#1E3539] py-1 px-4 rounded-[3px]">
          Computer Score - {computerScore}
        </p>
      </div>
      <div className="flex justify-center gap-12 text-white max-w-5xl mx-auto mt-10 sm:gap-28">
        <div className="flex flex-col items-center gap-4 border-2 border-transparent rounded-md bg-[#1E3539] p-4 w-44">
          <h3 className="text-center">Your Choice</h3>
          <div className="rounded-[100vmax] bg-[#0F172A] p-5">
            <img
              src={`../images/${userChoice}.png`}
              alt="rock-hand-image"
              className="w-10 sm:w-16"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 border-2 border-transparent rounded-md bg-[#1E3539] p-4 w-44">
          <h3 className="text-center">Com's Choice</h3>
          <div className="rounded-[100vmax] bg-[#0F172A] p-5">
            <img
              src={`../images/${computerChoice}.png`}
              alt="paper-hand-image"
              className="w-10 sm:w-16"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-14 gap-4">
        <h2 className="text-white text-lg bg-[#1E3539] py-1 px-4 rounded-[3px]">
          Lock Your Choice
        </h2>
        <div className="flex justify-center gap-10 items-center">
          <button
            className="rounded-[100vmax] bg-[#0F172A] p-5 hover:bg-[#1a4f46]"
            onClick={rockOnClick}
          >
            <img
              src={`../images/rock.png`}
              alt="Rock"
              className="w-10 sm:w-16"
            />
          </button>
          <button
            className="rounded-[100vmax] bg-[#0F172A] p-5 hover:bg-[#1a4f46]"
            onClick={paperOnClick}
          >
            <img
              src={`../images/paper.png`}
              alt="Paper"
              className="w-10 sm:w-16"
            />
          </button>
        </div>
        <button
          className="rounded-[100vmax] bg-[#0F172A] p-5 hover:bg-[#1a4f46]"
          onClick={scissorOnClick}
        >
          <img
            src={`../images/scissor.png`}
            alt="Scissor"
            className="w-10 sm:w-16"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
