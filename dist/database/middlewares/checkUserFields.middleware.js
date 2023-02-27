"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkUserFields(req, res, next) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Required fields not filled",
        });
    }
    next();
}
exports.default = checkUserFields;
