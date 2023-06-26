"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(ID, FirstName, LastName, APT, SET, NationalAssociation, average, position) {
        this.ID = ID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.APT = APT;
        this.SET = SET;
        this.NationalAssociation = NationalAssociation;
        this.average = average;
        this.position = position;
    }
    Player.prototype.getID = function () {
        return this.ID;
    };
    Player.prototype.getFirstName = function () {
        return this.FirstName;
    };
    Player.prototype.getLastName = function () {
        return this.LastName;
    };
    Player.prototype.getAPT = function () {
        return this.APT;
    };
    Player.prototype.getSET = function () {
        return this.SET;
    };
    Player.prototype.getNationalAssociation = function () {
        return this.NationalAssociation;
    };
    Player.prototype.getAverage = function () {
        return this.average;
    };
    Player.prototype.getPosition = function () {
        return this.position;
    };
    Player.prototype.setID = function (ID) {
        this.ID = ID;
    };
    Player.prototype.setFirstName = function (FirstName) {
        this.FirstName = FirstName;
    };
    Player.prototype.setLastName = function (LastName) {
        this.LastName = LastName;
    };
    Player.prototype.setAPT = function (APT) {
        this.APT = APT;
    };
    Player.prototype.setSET = function (SET) {
        this.SET = SET;
    };
    Player.prototype.setNationalAssociation = function (NationalAssociation) {
        this.NationalAssociation = NationalAssociation;
    };
    Player.prototype.setAverage = function () {
        this.average = (this.APT + this.SET) / 2;
    };
    Player.prototype.setPosition = function (position) {
        this.position = position;
    };
    Player.prototype.describe = function () {
        return "ID: ".concat(this.ID + " ", "FirstName: ").concat(this.FirstName + " ", "LastName: ").concat(this.LastName + " ", "APT: ").concat(this.APT + " ", "SET: ").concat(this.SET + " ", "NationalAssociation: ").concat(this.NationalAssociation + " ", "average: ").concat(this.average + " ", " position: ").concat(this.position + " \n");
    };
    return Player;
}());
exports.Player = Player;
