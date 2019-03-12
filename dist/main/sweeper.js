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
     * terminate all required process
     */
    sweepWhenTerminating() {
        process.on('SIGINT', () => {
            for (let st of this.list)
                st();
            process.exit(0);
        });
        process.on('uncaughtException', function (err) {
            logger_1.default.error('Uncaught Exception: ' + err);
            for (let st of this.list)
                st();
            process.exit(0);
        });
    }
    /**
     *
     * @param fn Add a function to sweeper list
     */
    add(fn) {
        this.list.push(fn);
    }
}
exports.default = Sweeper;
//# sourceMappingURL=sweeper.js.map