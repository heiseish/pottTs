"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
class Sweeper {
    constructor(list) {
        if (list)
            this.list = list;
        else
            this.list = [];
        this.sweepWhenTerminating();
    }
    /**
     * @param {Function} fn Add a function to sweeper list
     * @returns {void}
     */
    add(fn) {
        this.list.push(fn);
    }
    /**
     * terminate all required process
     * @returns {void}
     */
    sweepWhenTerminating() {
        process.on('SIGINT', () => {
            for (const st of this.list)
                st();
            process.exit(0);
        });
        process.on('uncaughtException', (err) => {
            logger_1.default.error('Uncaught Exception: ' + err);
            for (const st of this.list)
                st();
            process.exit(0);
        });
    }
}
exports.default = Sweeper;
//# sourceMappingURL=sweeper.js.map