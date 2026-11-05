// Imports Node.js's built-in readline module
const readLine = require("readline");

// Message components organized by categories
const messageComponents = {
  // messageComponents object literal containing 3 arrays
  openers: [
    "Believe it or not,",
    "Keep this in mind:",
    "Today is the perfect day to remember:",
    "No matter how tough it gets,",
    "Listen closely:",
    "Your journey is unique, and",
  ],
  bodies: [
    "your small steps are building something massive",
    "the obstacles in your path are actually guiding you",
    "your potential expands every single time you push through doubt",
    "failure is just a data point on your road to success",
    "the hard work you are putting in hidden spaces will soon show",
    "you possess the exact strength needed to conquer this season",
  ],
  closers: [
    "so keep moving forward!",
    "now go shock the world.",
    "trust the process.",
    "you are closer than you think!",
    "never underestimate your grit.",
    "make today count!",
  ],
};

// Function that pulls a random elemnt from an array
const getRandomComponent = (componentArray) => {
  const randomIndex = Math.floor(Math.random() * componentArray.length);
  return componentArray[randomIndex];
};

// Function that generates and formats the mixed message itself
const generateMotivationalMessage = () => {
  const opener = getRandomComponent(messageComponents.openers);
  const body = getRandomComponent(messageComponents.bodies);
  const closer = getRandomComponent(messageComponents.closers);

  return `${opener}\n${body}\n${closer}`; // Returns the formatted message
};

// Sets up the terminal interactive interface
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const startGame = () => {
  console.clear();

  console.log("=========================================");
  console.log("     WELCOME TO THE MOTIVATION ENGINE    ");
  console.log("=========================================\n");

  askForMessage();
};

const askForMessage = () => {
  rl.question(
    "Press [ENTER] to generate a spark of inspiration (or type 'exit' to quit): ",
    (input) => {
      if (input.toLowerCase() === "exit") {
        console.log("\nKeep shining. Goodbye!\n");
        rl.close();
        return;
      }

      console.log("\n-----------------------------------------");
      console.log(generateMotivationalMessage());
      console.log("-----------------------------------------\n");

      // Loops back to playing
      askForMessage();
    },
  );
};

// Starts the game
startGame();
