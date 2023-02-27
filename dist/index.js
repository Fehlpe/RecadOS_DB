"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const pg_helper_1 = require("./database/pg-helper");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, routes_1.default)(app);
pg_helper_1.pgHelper
    .connect()
    .then(() => {
    app.listen(process.env.PORT || 8080, () => console.log(`API ok na porta => ${process.env.PORT}`));
})
    .catch((err) => console.log(err));
