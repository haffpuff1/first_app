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
exports.create_new_team = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const createConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield promise_1.default.createConnection({
        host: 'localhost',
        user: 'root',
        password: '01540787Ra!',
        database: 'player',
    });
    return connection;
});
function create_new_team(team) {
    return __awaiter(this, void 0, void 0, function* () {
        const defender = team.defender;
        const midfielders = team.midfielders;
        const attackers = team.attackers;
        const connection = yield createConnection();
        try {
            const [rows, fields] = yield connection.execute(`SELECT * FROM players WHERE position = 'defender' LIMIT ${defender} `);
            console.log(rows);
            const [rowss, fieldss] = yield connection.execute(`SELECT * FROM players WHERE position = 'midfielder' LIMIT ${midfielders} `);
            console.log(rowss);
            const [rowsss, fieldsss] = yield connection.execute(`SELECT * FROM players WHERE position = 'attacker' LIMIT ${attackers}`);
            console.log(rowsss);
        }
        catch (err) {
            console.error('Error executing query:', err);
            throw err;
        }
        finally {
            connection.end();
        }
    });
}
exports.create_new_team = create_new_team;
