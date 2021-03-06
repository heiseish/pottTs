"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../logger"));
const fbrequest_1 = require("../fbrequest");
/**
 * Show typing on animation
 * @param senderId id of user
 * @param cb callback function
 */
const typingOn = (senderId, cb) => __awaiter(this, void 0, void 0, function* () {
    const opts = {
        form: {
            recipient: {
                id: senderId,
            },
            sender_action: 'typing_on',
            messaging_type: 'RESPONSE',
        },
    };
    fbrequest_1.messaging(opts, (err, resp, data) => {
        if (err) {
            logger_1.default.error(err);
        }
        if (cb) {
            cb(err || (data.error && data.error.message), data);
        }
    });
});
exports.typingOn = typingOn;
/**
 * Show typing off animation
 * @param senderId id of user
 * @param cb callback function
 */
const typingOff = (senderId, cb) => __awaiter(this, void 0, void 0, function* () {
    const opts = {
        form: {
            recipient: {
                id: senderId,
            },
            sender_action: 'typing_off',
            messaging_type: 'RESPONSE',
        },
    };
    fbrequest_1.messaging(opts, (err, resp, data) => {
        if (err) {
            logger_1.default.error(err);
        }
        if (cb) {
            cb(err || (data.error && data.error.message), data);
        }
    });
});
exports.typingOff = typingOff;
/**
 * Show marking seen animation
 * @param senderId id of user
 * @param cb callback function
 */
const markSeen = (senderId, cb) => __awaiter(this, void 0, void 0, function* () {
    const opts = {
        form: {
            recipient: {
                id: senderId,
            },
            sender_action: 'mark_seen',
            messaging_type: 'RESPONSE',
        },
    };
    fbrequest_1.messaging(opts, (err, resp, data) => {
        if (err) {
            logger_1.default.error(err);
        }
        if (cb) {
            cb(err || (data.error && data.error.message), data);
        }
    });
});
exports.markSeen = markSeen;
//# sourceMappingURL=senderAction.js.map