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
const client_1 = require("./src/database/client");
const local_server_1 = require("./src/database/local-server");
dotenv_1.default.config();
const initialize = () => __awaiter(void 0, void 0, void 0, function* () {
    if (process.env.NODE_ENV !== 'PRODUCTION') {
        yield local_server_1.localDbServer.initialize();
    }
    yield client_1.dbClient.connect();
});
const shutdown = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client_1.dbClient.disconnect();
    if (process.env.NODE_ENV !== 'PRODUCTION')
        yield local_server_1.localDbServer.shutdown();
    process.exit(0);
});
process.on('SIGINT', () => {
    shutdown();
});
initialize().catch(err => {
    process.exit(1);
});
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
