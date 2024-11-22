Spot the Difference Game
A fun "Spot the Difference" game built with React! The game presents two images side by side, and the player has to click on the areas where they spot differences between the two images. The game includes a countdown timer, and the player has 60 seconds to find all the differences. The game ends when all differences are found or when time runs out.

Features
Two images: The player needs to find the differences between two images.
Timer: 60-second countdown to add some challenge.
Click-to-mark: Click on areas of the images to mark differences.
Game Over: The game ends either when the player finds all differences or when time runs out.
Success/Failure messages: Display a message when the game ends, based on whether the player found all the differences or the timer ran out.
Installation
To run the game locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/spot-the-difference-game.git
Navigate to the project directory:

bash
Copy code
cd spot-the-difference-game
Install dependencies:

If you have npm installed, run:

bash
Copy code
npm install
Or if you are using yarn:

bash
Copy code
yarn install
Start the development server:

Run the following command:

bash
Copy code
npm start
This will start the development server and open the game in your browser.

How to Play
You’ll see two images displayed side-by-side.
Your goal is to click on the areas where you notice differences.
Each time you click on a difference, it will be marked on both images.
You have 60 seconds to find all the differences. Once the time runs out, the game will end.
If you find all the differences before time runs out, you'll be congratulated for winning.
Technologies Used
React: The front-end framework used to build the game.
CSS: Basic styling for the layout and the game's interactive elements.
Game Logic
Timer: A countdown timer is used to challenge players to find the differences quickly.
Click Event: When the player clicks on the image, the app checks whether they clicked near a defined difference. If so, the difference is marked as found.
Game Over Logic: The game ends when either all differences are found or the timer reaches zero.
