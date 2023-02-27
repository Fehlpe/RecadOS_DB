"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkPasswords(req, res, next) {
    const { password, password2 } = req.body;
    if (password !== password2) {
        return res.status(401).json({
            success: false,
            message: "Passwords don't match",
        });
    }
    next();
}
exports.default = checkPasswords;
