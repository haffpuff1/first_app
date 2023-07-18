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
exports.sort_by_APT = void 0;
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
function sort_by_APT() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield createConnection();
        try {
            const [rows, fields] = yield connection.execute(` SELECT * FROM players ORDER BY APT ASC `);
            return rows;
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
exports.sort_by_APT = sort_by_APT;
