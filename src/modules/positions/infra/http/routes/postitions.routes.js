"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PositionsController_1 = __importDefault(require("../controllers/PositionsController"));
const positionsRouter = express_1.Router();
const positionsController = new PositionsController_1.default();
positionsRouter.post('/', positionsController.create);
positionsRouter.get('/:id', positionsController.listById);
positionsRouter.get('/', positionsController.listAll);
positionsRouter.put('/:id', positionsController.update);
positionsRouter.delete('/:id', positionsController.delete);
exports.default = positionsRouter;
