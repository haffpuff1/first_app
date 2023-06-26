"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var new_player_1 = require("./new_player");
var team_1 = require("./team");
var summary_1 = require("./summary");
var random_1 = require("./random");
var sort_APT_1 = require("./sort_APT");
var sort_APT_2 = require("./sort_APT");
var sort_APT_3 = require("./sort_APT");
var team_2 = require("./team");
//Prompt the user for input (e.g., using the readline-sync library)
var readline = require("readline-sync");
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
    var your_choice = "";
    while (your_choice.toUpperCase() !== "Q") {
        your_choice = readline.question("Enter your choice: ");
        switch (your_choice) {
            case "1":
                (0, new_player_1.create_new_player)();
                break;
            case "2":
                (0, team_1.create_new_team)();
                break;
            case "3":
                (0, team_2.display_all_teams)();
                break;
            case "4":
                (0, random_1.random_team)();
                break;
            case "5":
                (0, summary_1.getPlayers)();
                break;
            case "6":
                (0, sort_APT_1.sort_by_APT)();
                break;
            case "7":
                (0, sort_APT_2.highest_APT)();
                break;
            case "8":
                (0, sort_APT_3.lowest_avg)();
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
