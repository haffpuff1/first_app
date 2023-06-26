import { Player } from "./player";

export function create_new_player(): Player {
    const readline = require("readline-sync");
    let ID = readline.question("Enter the player ID: ");

    while (ID === "" || isNaN(ID) || ID < 0) {
      if (ID === "") {
        ID = readline.question("Please enter the player ID: ");
      } else if (isNaN(ID)) {
        console.log("Please enter a number for ID");
        ID = readline.question("Please enter the player ID: ");
      } else if (ID < 0) {
        console.log("Please enter a positive number for ID");
        ID = readline.question("Please enter the player ID: ");
      }
    }
    
    
    console.log("Valid player ID: ", ID);
    
    let FirstName = readline.question('Enter the player First name: ');
    
    while (FirstName === "" || FirstName.length > 20 || /\d/.test(FirstName)) {
      if (FirstName === "") {
        FirstName = readline.question("Please enter the player First name: ");
      } else if (/\d/.test(FirstName)) {
        console.log("Please enter a valid First name without numbers");
        FirstName = readline.question("Please enter the player First name: ");
      } else if (FirstName.length > 20) {
        console.log("First name should be less than or equal to 20 characters");
        FirstName = readline.question("Please enter the player First name: ");
      }
    }
    
    console.log("Valid player First Name: ", FirstName);
    
    let LastName = readline.question('Enter the player Last Name: ');
    
    while (LastName === "" || LastName.length > 20 || /\d/.test(LastName)) {
      if (LastName === "") {
        LastName = readline.question("Please enter the player LasName : ");
      } else if (/\d/.test(LastName)) {
        console.log("Please enter a valid First name without numbers");
        LastName = readline.question("Please enter the player Last Name: ");
      } else if (LastName.length > 20) {
        console.log("Last Name should be less than or equal to 20 characters");
        LastName = readline.question("Please enter the player Last Name: ");
      }
    }
    console.log("Valid player Last Name: ", LastName);
    let APTStr = readline.question('Enter the player APT: ');
    let APT = parseInt(APTStr, 10);
while (isNaN(APT) || APT < 0 || APT > 100) {
  if (isNaN(APT)) {
    console.log("Please enter a number for APT");
  } else if (APT < 0) {
    console.log("Please enter a positive number for APT");
  } else if (APT > 100) {
    console.log("Please enter a number less than 100 for APT");
  }
  APT = readline.question("Please enter the player APT: ");
}

console.log("Valid player APT: ", APT);

    
    
    let SETstr = readline.question('Enter the player SET: ');
    let SET = parseInt(SETstr, 10);
    while (isNaN(SET) || SET < 0 || SET > 100) {
      if (isNaN(SET)) {
        console.log("Please enter a number for SET");
        SET = readline.question("Please enter the player SET: ");
      } else if (SET < 0) {
        console.log("Please enter a positive number for SET");
        SET = readline.question("Please enter the player SET: ");
      } else if (SET > 100) {
        console.log("Please enter a number less than 100 for SET");
        SET = readline.question("Please enter the player SET: ");
      }
    }
    console.log("Valid player SET: ", SET);
    
    let NationalAssociation = readline.question('Enter the player National Association: ');
    while(NationalAssociation === "" || (NationalAssociation.toLowerCase() !=="england" && NationalAssociation.toLowerCase() !=="northern ireland"
    && NationalAssociation.toLowerCase() !=="scotland " && NationalAssociation.toLowerCase() !=="wales")){  

      if(NationalAssociation === ""){
        NationalAssociation = readline.question('Please enter the player National Association: ');
      }
      else if(NationalAssociation.toLowerCase() !=="england" && NationalAssociation.toLowerCase() !=="northern ireland"
       && NationalAssociation.toLowerCase() !=="scotland " && NationalAssociation.toLowerCase() !=="wales"){
        NationalAssociation = readline.question('Please enter a valid player National Association: ');
      }
      else{
        console.log("Valid player National Association: ", NationalAssociation);
      }
    }
    
    let position = readline.question('Please enter the player position: ');
    
    while (
      position === "" ||
      (position.toLowerCase() !== "attacker" &&
        position.toLowerCase() !== "midfielder" &&
        position.toLowerCase() !== "defender")
    ) {
      if (position === "") {
        position = readline.question('Please enter the player position: ');
      } else if (
        position.toLowerCase() !== "attacker" &&
        position.toLowerCase() !== "midfielder" &&
        position.toLowerCase() !== "defender"
      ) {
        position = readline.question('Please enter a valid player position: ');
      } else {
        console.log("Valid player position: ", position);
      }
    }
    
    
    
    // Create a new Player instance using the provided attributes
    const newPlayer = new Player(ID, FirstName, LastName, APT, SET, NationalAssociation, ((APT + SET) / 2), position);
    console.log('New player created:', newPlayer.describe());
    return newPlayer;
}