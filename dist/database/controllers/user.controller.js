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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_repository_1 = require("../repositories/user.repository");
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email, password } = req.body;
            const repository = new user_repository_1.UserRepository();
            const user = yield repository.createUser(username, email, password);
            return res.status(200).json({
                success: true,
                data: user,
            });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const repository = new user_repository_1.UserRepository();
            const user = yield repository.checkUserLogin(email, password);
            if (!user) {
                return res.status(404).json({ error: "Incorrect email or password" });
            }
            else {
                return res.status(201).json({
                    success: true,
                    data: user,
                });
            }
        });
    }
}
exports.UserController = UserController;
