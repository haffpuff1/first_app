import { Player } from "./player";
const readline = require("readline-sync");
const players: Player[] = [
    new Player(1, "Daniel", "Scott", 79, 92, "Scotland", 85.5, "Attacker"),
    new Player(2, "Ali", "Aslam", 98, 94, "Northern Ireland", 96.0, "Midfielder"),
    new Player(3, "Oliver", "Barker", 89, 95, "England", 92.0, "Defender"),
    new Player(4, "Jordan", "Robinson", 45, 89, "Wales", 67.0, "Attacker"),
    new Player(5, "Steven", "Walker", 88, 87, "Wales", 87.5, "Midfielder"),
    new Player(6, "Alfie", "Loy", 85, 79, "Wales", 82.0, "Attacker"),
    new Player(7, "Rashid", "Bhatti", 90, 86, "England", 88.0, "Midfielder"),
    new Player(8, "Thomas", "Taylor", 97, 85, "England", 91.0, "Defender"),
    new Player(9, "Theo", "Dolan", 87, 82, "Scotland", 84.5, "Attacker"),
    new Player(10,"Finley","Cross",95,83,"Northern Ireland",89.0,"Midfielder"),
    new Player(11, "Joshua", "Mills", 92, 71, "Scotland", 81.5, "Attacker"),
    new Player(12,"Leander","Moore",91,72,"Northern Ireland",81.5,"Midfielder"),
    new Player(13, "Isaac", "Johnson", 76, 77, "England", 76.5, "Defender"),
    new Player(14, "William", "Adams", 78, 78, "England", 78.0, "Midfielder"),
    new Player(15, "Jacob", "Stone", 77, 79, "Wales", 78.0, "Midfielder"),
    new Player(16, "James", "Chaffey", 93, 70, "Wales", 81.5, "Attacker"),
    new Player(17, "Lucas", "Saunders", 68, 69, "Wales", 68.5, "Attacker"),
    new Player(18, "Alexander", "Daly", 43, 67, "England", 55.0, "Midfielder"),
    new Player(19, "Arlo", "Gilchrist", 50, 65, "England", 57.5, "Attacker"),
  ];
  

export function sort_by_APT(): void {
  players.sort((a, b) => b.getAPT() - a.getAPT());
  console.log("Sorted by APT:", players.map((p) => p.describe()) );
}

export function highest_APT(): void {
  console.log("The player with the highest APT is:", players[0].describe());
}

export function lowest_avg(): void {
    
let lowest_avg: number = players[0].getAPT();
for (let i = 0; i < players.length; i++) {
  if (players[i].getAPT() < lowest_avg) {
    lowest_avg = players[i].getAPT();
  }
}
console.log("the player with the lowest APT is : "+players[players.length-1].describe());
}