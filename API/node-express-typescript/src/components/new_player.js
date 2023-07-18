"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_new_player = void 0;
const player_1 = require("./player");
const mysql2_1 = __importDefault(require("mysql2"));
const createConnection = () => {
    const connection = mysql2_1.default.createConnection({
        host: 'localhost',
        user: 'root',
        password: '01540787Ra!',
        database: 'player',
    });
    return connection;
};
function create_new_player(player) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = createConnection();
        const newPlayer = new player_1.Player(player.ID, player.FirstName, player.LastName, player.APT, player.SET, player.NationalAssociation, player.average, player.position);
        try {
            yield connection.execute('INSERT INTO players (ID, FirstName, LastName, APT, `SET`, NationalAssociation, `average`, position) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [newPlayer.ID, newPlayer.FirstName, newPlayer.LastName, newPlayer.APT, newPlayer.SET, newPlayer.NationalAssociation, newPlayer.average, newPlayer.position]);
        }
        catch (err) {
            console.error('Error executing query:', err);
        }
    });
}
exports.create_new_player = create_new_player;
