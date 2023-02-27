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
exports.UserRepository = void 0;
const users_entity_1 = require("../entities/users.entity");
const pg_helper_1 = require("../pg-helper");
class UserRepository {
    createUser(userName, userEmail, userPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            const newUser = manager.create(users_entity_1.UserEntity, {
                userName,
                userEmail,
                userPassword,
            });
            return yield manager.save(newUser);
        });
    }
    checkExistingEmail(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            const user = yield manager.findOne(users_entity_1.UserEntity, {
                where: { userEmail },
            });
            return !!user;
        });
    }
    checkExistingUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            const user = yield manager.findOne(users_entity_1.UserEntity, {
                where: { userId },
            });
            return !!user;
        });
    }
    checkUserLogin(userEmail, userPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const manager = pg_helper_1.pgHelper.client.manager;
            const user = yield manager.findOne(users_entity_1.UserEntity, {
                where: {
                    userEmail,
                    userPassword,
                },
            });
            return user;
        });
    }
}
exports.UserRepository = UserRepository;
