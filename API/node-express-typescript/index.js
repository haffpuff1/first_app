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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const validation_1 = require("./validation/validation");
const new_player_1 = require("./src/components/new_player");
const team_1 = require("./src/components/team");
const summary_1 = require("./src/components/summary");
const random_1 = require("./src/components/random");
const high_APT_1 = require("./src/components/high_APT");
const avg_1 = require("./src/components/avg");
const player_schema_1 = require("./player_schema");
const player_schema_2 = require("./player_schema");
const player_schema_3 = require("./player_schema");
const sort_APT_1 = require("./src/components/sort_APT");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.post('/new_Player', (0, validation_1.validate)(player_schema_1.create_new_player_schema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, new_player_1.create_new_player)(req.body);
    res.statusCode = 201;
    res.send('New player created successfully.');
}));
app.get('/new_team', (0, validation_1.validate)(player_schema_2.create_new_team_schema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, team_1.create_new_team)(req.body);
    res.statusCode = 201;
    res.send('New team created successfully.');
}));
app.get('/random_team', (0, validation_1.validate)(player_schema_3.random_team_schema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, random_1.random_team)(req.body);
    res.statusCode = 201;
    res.json(result);
}));
app.get('/get_Players', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, summary_1.getPlayers)();
    res.statusCode = 201;
    res.json(result);
}));
app.get('/sort_by_APT', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, sort_APT_1.sort_by_APT)();
    res.statusCode = 201;
    res.json(result);
}));
app.get('/highest_APT', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, high_APT_1.highest_APT)();
    res.statusCode = 201;
    res.send(result);
}));
app.get('/lowest_avg', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, avg_1.lowest_avg)();
    res.statusCode = 201;
    res.json(result);
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// npm run dev
