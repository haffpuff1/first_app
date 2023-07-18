"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.random_team_schema = exports.create_new_team_schema = exports.create_new_player_schema = void 0;
const yup = __importStar(require("yup"));
exports.create_new_player_schema = yup.object({
    body: yup.object({
        ID: yup.number().min(0).max(100).required(),
        FirstName: yup.string().min(1).max(25).required(),
        LastName: yup.string().min(1).max(25).required(),
        APT: yup.number().min(0).max(100).required(),
        SET: yup.number().min(0).max(100).required(),
        NationalAssociation: yup.string().oneOf(["England", "Northern Ireland", "Wales", "Scotland"]),
        average: yup.number().min(0).max(100).required(),
        position: yup.string().lowercase().oneOf(["attacker", "midfielder", "defender"]),
    }),
});
exports.create_new_team_schema = yup.object({
    body: yup.object({
        defender: yup.number().min(0).max(7).required(),
        midfielders: yup.number().min(0).max(7).required(),
        attackers: yup.number().min(0).max(7).required(),
    }),
});
exports.random_team_schema = yup.object({
    body: yup.object({
        nb_required: yup.number().min(0).max(20).required()
    }),
});
