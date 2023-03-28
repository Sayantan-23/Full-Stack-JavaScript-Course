import { useEffect, useState } from "react";

function App() {
  const choices = ["rock", "paper", "scissor"];

  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("paper");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("Let's Play");
  const [gameStart, setGameStart] = useState(false);

  const computerSelect = () => {
    setComputerChoice(choices[Math.floor(Math.random() * 3)]);
  };

  const rockOnClick = () => {
    setUserChoice("rock");
    computerSelect();
    setGameStart(true);
  };

  const paperOnClick = () => {
    setUserChoice("paper");
    computerSelect();
    setGameStart(true);
  };

  const scissorOnClick = () => {
    setUserChoice("scissor");
    computerSelect();
    setGameStart(true);
  };

  const reset = () => {
    setUserChoice("rock")
    setComputerChoice("paper")
    setUserScore(0)
    setComputerScore(0)
    setResult("Let's Play")
    setGameStart(false)
  };

  const rules = () => {
    if (userChoice === computerChoice) {
      setResult("It's a Draw!😐🥱");
    } else if (
      (userChoice === "rock" && computerChoice === "scissor") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissor" && computerChoice === "paper")
    ) {
      setUserScore(userScore + 1);
      setResult("You Won!!🥳🥳");
    } else {
      setComputerScore(computerScore + 1);
      setResult("You Lost!!😖😓");
    }
  };

  useEffect(() => {
    if (gameStart) rules();
  }, [userChoice, computerChoice]);

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
      <div className="flex justify-between gap-1 text-white max-w-5xl mx-auto mt-10 items-center flex-wrap text-sm sm:text-xl">
        <p className="bg-[#1E3539] py-1 px-2 sm:px-4 rounded-[3px]">
          My Score - {userScore}
        </p>

        <p className="bg-[#1E3539] py-1 px-2 sm:px-4 rounded-[3px]">
          Computer Score - {computerScore}
        </p>
      </div>
      <p
        className={
          result
            ? "bg-[#1E3539] py-1 px-4 rounded-[3px] text-white mt-4 w-fit mx-auto sm:text-xl"
            : "hidden"
        }
      >
        {result}
      </p>
      {computerScore > 0 || userScore > 0 ? (
        <button
          className="bg-[#0F172A] py-1 px-4 rounded-[3px] text-white mx-auto mt-4 hover:bg-[#1a4f46] sm:text-lg block outline-none"
          onClick={reset}
        >
          Reset
        </button>
      ) : (
        <></>
      )}
      <div className="flex justify-center gap-12 text-white max-w-5xl mx-auto mt-10 sm:gap-28">
        <div className="flex flex-col items-center gap-4 border-2 border-transparent rounded-md bg-[#1E3539] p-4 w-44">
          <h3 className="text-center text-sm sm:text-base">Your Choice</h3>
          <div className="rounded-[100vmax] bg-[#0F172A] p-5">
            <img
              src={`../images/${userChoice}.png`}
              alt="rock-hand-image"
              className={
                userChoice === choices[2]
                  ? "w-10 sm:w-16 rotate-90"
                  : "w-10 sm:w-16 rotate-45"
              }
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 border-2 border-transparent rounded-md bg-[#1E3539] p-4 w-44">
          <h3 className="text-center text-sm sm:text-base">Com's Choice</h3>
          <div className="rounded-[100vmax] bg-[#0F172A] p-5">
            <img
              src={`../images/${computerChoice}.png`}
              alt="paper-hand-image"
              className={
                computerChoice === choices[2]
                  ? "w-10 sm:w-16 scale-x-[-1] rotate-[-90deg]"
                  : "w-10 sm:w-16 scale-x-[-1] rotate-[-45deg]"
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-14 gap-4">
        <h2 className="text-white sm:text-lg bg-[#1E3539] py-1 px-4 rounded-[3px]">
          Lock Your Choice
        </h2>
        <div className="flex justify-center gap-10 items-center">
          <button
            className="rounded-[100vmax] bg-[#0F172A] p-5 hover:bg-[#1a4f46] outline-none"
            onClick={rockOnClick}
          >
            <img
              src={`../images/rock.png`}
              alt="Rock"
              className="w-10 sm:w-16 rotate-45"
            />
          </button>
          <button
            className="rounded-[100vmax] bg-[#0F172A] p-5 hover:bg-[#1a4f46] outline-none"
            onClick={paperOnClick}
          >
            <img
              src={`../images/paper.png`}
              alt="Paper"
              className="w-10 sm:w-16 scale-x-[-1] rotate-[-45deg]"
            />
          </button>
        </div>
        <button
          className="rounded-[100vmax] bg-[#0F172A] p-5 hover:bg-[#1a4f46] outline-none"
          onClick={scissorOnClick}
        >
          <img
            src={`../images/scissor.png`}
            alt="Scissor"
            className="w-10 sm:w-16 rotate-90"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
