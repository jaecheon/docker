"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://brunch.co.kr/@toyongyeon/7
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('hello typescript 2!!!');
});
app.listen(3000, () => {
    console.log('example app listening on port 3000!!!');
});
//# sourceMappingURL=app.js.map