"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(ID, FirstName, LastName, APT, SET, NationalAssociation, average, position) {
        this.ID = ID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.APT = APT;
        this.SET = SET;
        this.NationalAssociation = NationalAssociation;
        this.average = average;
        this.position = position;
    }
    getID() {
        return this.ID;
    }
    getFirstName() {
        return this.FirstName;
    }
    getLastName() {
        return this.LastName;
    }
    getAPT() {
        return this.APT;
    }
    getSET() {
        return this.SET;
    }
    getNationalAssociation() {
        return this.NationalAssociation;
    }
    getAverage() {
        return this.average;
    }
    getPosition() {
        return this.position;
    }
    setID(ID) {
        this.ID = ID;
    }
    setFirstName(FirstName) {
        this.FirstName = FirstName;
    }
    setLastName(LastName) {
        this.LastName = LastName;
    }
    setAPT(APT) {
        this.APT = APT;
    }
    setSET(SET) {
        this.SET = SET;
    }
    setNationalAssociation(NationalAssociation) {
        this.NationalAssociation = NationalAssociation;
    }
    setAverage() {
        this.average = (this.APT + this.SET) / 2;
    }
    setPosition(position) {
        this.position = position;
    }
    describe() {
        return `ID: ${this.ID + " "}FirstName: ${this.FirstName + " "}LastName: ${this.LastName + " "}APT: ${this.APT + " "}SET: ${this.SET + " "}NationalAssociation: ${this.NationalAssociation + " "}average: ${this.average + " "} position: ${this.position + " "}`;
    }
}
exports.Player = Player;
