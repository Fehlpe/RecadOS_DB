"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkUserFields(req, res, next) {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({
            success: false,
            message: "Missing info",
        });
    }
    next();
}
exports.default = checkUserFields;
