"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteEntity = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
let NoteEntity = class NoteEntity extends typeorm_1.BaseEntity {
    beforeInsert() {
        this.noteArchived = false;
        this.noteId = new Date().getTime().toString();
        this.noteCreatedAt = new Date();
    }
    beforeUpdate() {
        this.noteUpdatedAt = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: "note_id" }),
    __metadata("design:type", String)
], NoteEntity.prototype, "noteId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "title" }),
    __metadata("design:type", String)
], NoteEntity.prototype, "noteTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "description" }),
    __metadata("design:type", String)
], NoteEntity.prototype, "noteDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "archived" }),
    __metadata("design:type", Boolean)
], NoteEntity.prototype, "noteArchived", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", String)
], NoteEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], NoteEntity.prototype, "noteCreatedAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], NoteEntity.prototype, "noteUpdatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoteEntity.prototype, "beforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoteEntity.prototype, "beforeUpdate", null);
NoteEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "notes" })
], NoteEntity);
exports.NoteEntity = NoteEntity;
