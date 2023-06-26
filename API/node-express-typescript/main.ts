import { Player } from "./player";
import { create_new_player } from "./new_player";
import { create_new_team } from "./team";
import { getPlayers } from "./summary";
import { random_team } from "./random";
import { sort_by_APT } from "./sort_APT";
import {highest_APT} from"./sort_APT";
import {lowest_avg} from "./sort_APT";
import { display_all_teams } from "./team";

//Prompt the user for input (e.g., using the readline-sync library)
const readline = require("readline-sync");

function promptUser() {
  console.log("Enter 1 if you want to create a new player");
  console.log("Enter 2 if you want to create a new team");
  console.log("Enter 3 if you want to display all players");
  console.log("Enter 4 if you want to display a random team");
  console.log("Enter 5 if you want to display a sample status report");
  console.log("Enter 6 if you want to display the players sorted by APT descending order");
  console.log("Enter 7 if you want to find the player with the highest APT");
  console.log("Enter 8 if you want to find the player with the lowest average");
  console.log("Enter Q if you want to quit the program");

  let your_choice: string = "";

  while (your_choice.toUpperCase() !== "Q") {
    your_choice = readline.question("Enter your choice: ");

    switch (your_choice) {
      case "1":
        create_new_player();
        break;
      case "2":
        create_new_team();
        break;
      case "3":
        display_all_teams();
        break;
      case "4":
        random_team();
        break;
      case "5":
        getPlayers();
        break;
      case "6":
        sort_by_APT();
        break;
      case "7":
        highest_APT();
        break;
      case "8":
        lowest_avg();
        break;
      case "Q":
        process.exit(1);
        break;
      default:
        console.log("Please enter a valid choice");
        break;
    }
  }
}

promptUser();
