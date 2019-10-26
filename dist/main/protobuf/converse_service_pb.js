/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.ConverseServiceGRPC.ConversationInput', null, global);
goog.exportSymbol('proto.ConverseServiceGRPC.ConversationResponse', null, global);
goog.exportSymbol('proto.ConverseServiceGRPC.ConversationResponse.State', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConverseServiceGRPC.ConversationInput = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ConverseServiceGRPC.ConversationInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.ConverseServiceGRPC.ConversationInput.displayName = 'proto.ConverseServiceGRPC.ConversationInput';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.ConverseServiceGRPC.ConversationInput.prototype.toObject = function (opt_includeInstance) {
        return proto.ConverseServiceGRPC.ConversationInput.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.ConverseServiceGRPC.ConversationInput} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.ConverseServiceGRPC.ConversationInput.toObject = function (includeInstance, msg) {
        var f, obj = {
            transId: jspb.Message.getFieldWithDefault(msg, 1, ""),
            text: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConverseServiceGRPC.ConversationInput}
 */
proto.ConverseServiceGRPC.ConversationInput.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.ConverseServiceGRPC.ConversationInput;
    return proto.ConverseServiceGRPC.ConversationInput.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConverseServiceGRPC.ConversationInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConverseServiceGRPC.ConversationInput}
 */
proto.ConverseServiceGRPC.ConversationInput.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setTransId(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setText(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConverseServiceGRPC.ConversationInput.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.ConverseServiceGRPC.ConversationInput.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConverseServiceGRPC.ConversationInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConverseServiceGRPC.ConversationInput.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getTransId();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getText();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
};
/**
 * optional string trans_id = 1;
 * @return {string}
 */
proto.ConverseServiceGRPC.ConversationInput.prototype.getTransId = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.ConverseServiceGRPC.ConversationInput.prototype.setTransId = function (value) {
    jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * optional string text = 2;
 * @return {string}
 */
proto.ConverseServiceGRPC.ConversationInput.prototype.getText = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.ConverseServiceGRPC.ConversationInput.prototype.setText = function (value) {
    jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConverseServiceGRPC.ConversationResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ConverseServiceGRPC.ConversationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.ConverseServiceGRPC.ConversationResponse.displayName = 'proto.ConverseServiceGRPC.ConversationResponse';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.ConverseServiceGRPC.ConversationResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.ConverseServiceGRPC.ConversationResponse.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.ConverseServiceGRPC.ConversationResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.ConverseServiceGRPC.ConversationResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            transId: jspb.Message.getFieldWithDefault(msg, 1, ""),
            state: jspb.Message.getFieldWithDefault(msg, 2, 0),
            text: jspb.Message.getFieldWithDefault(msg, 3, "")
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConverseServiceGRPC.ConversationResponse}
 */
proto.ConverseServiceGRPC.ConversationResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.ConverseServiceGRPC.ConversationResponse;
    return proto.ConverseServiceGRPC.ConversationResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConverseServiceGRPC.ConversationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConverseServiceGRPC.ConversationResponse}
 */
proto.ConverseServiceGRPC.ConversationResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setTransId(value);
                break;
            case 2:
                var value = /** @type {!proto.ConverseServiceGRPC.ConversationResponse.State} */ (reader.readEnum());
                msg.setState(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setText(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConverseServiceGRPC.ConversationResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.ConverseServiceGRPC.ConversationResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConverseServiceGRPC.ConversationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConverseServiceGRPC.ConversationResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getTransId();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getState();
    if (f !== 0.0) {
        writer.writeEnum(2, f);
    }
    f = message.getText();
    if (f.length > 0) {
        writer.writeString(3, f);
    }
};
/**
 * @enum {number}
 */
proto.ConverseServiceGRPC.ConversationResponse.State = {
    SUCCESS: 0,
    MODEL_ERR: 1,
    UNKNOWN: 2
};
/**
 * optional string trans_id = 1;
 * @return {string}
 */
proto.ConverseServiceGRPC.ConversationResponse.prototype.getTransId = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.ConverseServiceGRPC.ConversationResponse.prototype.setTransId = function (value) {
    jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * optional State state = 2;
 * @return {!proto.ConverseServiceGRPC.ConversationResponse.State}
 */
proto.ConverseServiceGRPC.ConversationResponse.prototype.getState = function () {
    return /** @type {!proto.ConverseServiceGRPC.ConversationResponse.State} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};
/** @param {!proto.ConverseServiceGRPC.ConversationResponse.State} value */
proto.ConverseServiceGRPC.ConversationResponse.prototype.setState = function (value) {
    jspb.Message.setProto3EnumField(this, 2, value);
};
/**
 * optional string text = 3;
 * @return {string}
 */
proto.ConverseServiceGRPC.ConversationResponse.prototype.getText = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};
/** @param {string} value */
proto.ConverseServiceGRPC.ConversationResponse.prototype.setText = function (value) {
    jspb.Message.setProto3StringField(this, 3, value);
};
goog.object.extend(exports, proto.ConverseServiceGRPC);
//# sourceMappingURL=converse_service_pb.js.map