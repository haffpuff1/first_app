"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayers = void 0;
var player_1 = require("./player");
var readline = require("readline-sync");
var players = [
    new player_1.Player(1, "Daniel", "Scott", 79, 92, "Scotland", 85.5, "Attacker"),
    new player_1.Player(2, "Ali", "Aslam", 98, 94, "Northern Ireland", 96.0, "Midfielder"),
    new player_1.Player(3, "Oliver", "Barker", 89, 95, "England", 92.0, "Defender"),
    new player_1.Player(4, "Jordan", "Robinson", 45, 89, "Wales", 67.0, "Attacker"),
    new player_1.Player(5, "Steven", "Walker", 88, 87, "Wales", 87.5, "Midfielder"),
    new player_1.Player(6, "Alfie", "Loy", 85, 79, "Wales", 82.0, "Attacker"),
    new player_1.Player(7, "Rashid", "Bhatti", 90, 86, "England", 88.0, "Midfielder"),
    new player_1.Player(8, "Thomas", "Taylor", 97, 85, "England", 91.0, "Defender"),
    new player_1.Player(9, "Theo", "Dolan", 87, 82, "Scotland", 84.5, "Attacker"),
    new player_1.Player(10, "Finley", "Cross", 95, 83, "Northern Ireland", 89.0, "Midfielder"),
    new player_1.Player(11, "Joshua", "Mills", 92, 71, "Scotland", 81.5, "Attacker"),
    new player_1.Player(12, "Leander", "Moore", 91, 72, "Northern Ireland", 81.5, "Midfielder"),
    new player_1.Player(13, "Isaac", "Johnson", 76, 77, "England", 76.5, "Defender"),
    new player_1.Player(14, "William", "Adams", 78, 78, "England", 78.0, "Midfielder"),
    new player_1.Player(15, "Jacob", "Stone", 77, 79, "Wales", 78.0, "Midfielder"),
    new player_1.Player(16, "James", "Chaffey", 93, 70, "Wales", 81.5, "Attacker"),
    new player_1.Player(17, "Lucas", "Saunders", 68, 69, "Wales", 68.5, "Attacker"),
    new player_1.Player(18, "Alexander", "Daly", 43, 67, "England", 55.0, "Midfielder"),
    new player_1.Player(19, "Arlo", "Gilchrist", 50, 65, "England", 57.5, "Attacker"),
];
function getPlayers() {
    var Att_nb = 0;
    var Mid_nb = 0;
    var Def_nb = 0;
    for (var i = 0; i < players.length; i++) {
        if (players[i].getPosition() == "Attacker") {
            Att_nb++;
        }
        if (players[i].getPosition() == "Midfielder") {
            Mid_nb++;
        }
        if (players[i].getPosition() == "Defender") {
            Def_nb++;
        }
    }
    console.log("ID      |position        |count   ");
    console.log("-----------------------------------");
    console.log("1       |Attacker        |" + Att_nb);
    console.log("2       |Midfielder      |" + Mid_nb);
    console.log("3       |Defender        |" + Def_nb);
}
exports.getPlayers = getPlayers;
