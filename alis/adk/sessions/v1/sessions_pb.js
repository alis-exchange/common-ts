// source: alis/adk/sessions/v1/sessions.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = globalThis;

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_type_date_pb = require('../../../../google/type/date_pb.js');
goog.object.extend(proto, google_type_date_pb);
goog.exportSymbol('proto.alis.adk.sessions.v1.AppState', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.Blob', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.CitationMetadata', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.CitationMetadata.Citation', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.CodeExecutionResult', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.CodeExecutionResult.Outcome', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.Content', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.EventActions', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.EventMetadata', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.ExecutableCode', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.ExecutableCode.Language', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.FileData', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.FinishReason', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.FunctionCall', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.FunctionResponse', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.FunctionResponseBlob', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.FunctionResponseFileData', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.FunctionResponsePart', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.FunctionResponsePart.DataCase', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GroundingChunk', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GroundingChunk.ChunkTypeCase', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GroundingChunk.Maps', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.ContextDetailsCase', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GroundingChunk.Web', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GroundingMetadata', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GroundingSupport', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.LogprobsResult', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.LogprobsResultCandidate', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.LogprobsResultTopCandidates', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.MediaModality', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.ModalityTokenCount', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.Part', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.Part.DataCase', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.Part.MetadataCase', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.RagChunk', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.RagChunk.PageSpan', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.RetrievalMetadata', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.SearchEntryPoint', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.Segment', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.Session', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.Session.ExpirationCase', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.SessionEvent', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.ToolConfirmation', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.TrafficType', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.UsageMetadata', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.UserState', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.VideoMetadata', null, global);
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
proto.alis.adk.sessions.v1.Session = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.adk.sessions.v1.Session.oneofGroups_);
};
goog.inherits(proto.alis.adk.sessions.v1.Session, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.Session.displayName = 'proto.alis.adk.sessions.v1.Session';
}
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
proto.alis.adk.sessions.v1.AppState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.AppState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.AppState.displayName = 'proto.alis.adk.sessions.v1.AppState';
}
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
proto.alis.adk.sessions.v1.UserState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.UserState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.UserState.displayName = 'proto.alis.adk.sessions.v1.UserState';
}
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
proto.alis.adk.sessions.v1.SessionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.SessionEvent.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.SessionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.SessionEvent.displayName = 'proto.alis.adk.sessions.v1.SessionEvent';
}
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
proto.alis.adk.sessions.v1.EventMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.EventMetadata.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.EventMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.EventMetadata.displayName = 'proto.alis.adk.sessions.v1.EventMetadata';
}
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
proto.alis.adk.sessions.v1.EventActions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.EventActions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.EventActions.displayName = 'proto.alis.adk.sessions.v1.EventActions';
}
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
proto.alis.adk.sessions.v1.Content = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.Content.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.Content, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.Content.displayName = 'proto.alis.adk.sessions.v1.Content';
}
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
proto.alis.adk.sessions.v1.Part = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.adk.sessions.v1.Part.oneofGroups_);
};
goog.inherits(proto.alis.adk.sessions.v1.Part, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.Part.displayName = 'proto.alis.adk.sessions.v1.Part';
}
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
proto.alis.adk.sessions.v1.Blob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.Blob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.Blob.displayName = 'proto.alis.adk.sessions.v1.Blob';
}
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
proto.alis.adk.sessions.v1.FileData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.FileData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.FileData.displayName = 'proto.alis.adk.sessions.v1.FileData';
}
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
proto.alis.adk.sessions.v1.VideoMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.VideoMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.VideoMetadata.displayName = 'proto.alis.adk.sessions.v1.VideoMetadata';
}
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
proto.alis.adk.sessions.v1.FunctionCall = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.FunctionCall, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.FunctionCall.displayName = 'proto.alis.adk.sessions.v1.FunctionCall';
}
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
proto.alis.adk.sessions.v1.FunctionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.FunctionResponse.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.FunctionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.FunctionResponse.displayName = 'proto.alis.adk.sessions.v1.FunctionResponse';
}
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
proto.alis.adk.sessions.v1.FunctionResponsePart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.adk.sessions.v1.FunctionResponsePart.oneofGroups_);
};
goog.inherits(proto.alis.adk.sessions.v1.FunctionResponsePart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.FunctionResponsePart.displayName = 'proto.alis.adk.sessions.v1.FunctionResponsePart';
}
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
proto.alis.adk.sessions.v1.FunctionResponseBlob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.FunctionResponseBlob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.FunctionResponseBlob.displayName = 'proto.alis.adk.sessions.v1.FunctionResponseBlob';
}
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
proto.alis.adk.sessions.v1.FunctionResponseFileData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.FunctionResponseFileData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.FunctionResponseFileData.displayName = 'proto.alis.adk.sessions.v1.FunctionResponseFileData';
}
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
proto.alis.adk.sessions.v1.ExecutableCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.ExecutableCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.ExecutableCode.displayName = 'proto.alis.adk.sessions.v1.ExecutableCode';
}
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
proto.alis.adk.sessions.v1.CodeExecutionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.CodeExecutionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.CodeExecutionResult.displayName = 'proto.alis.adk.sessions.v1.CodeExecutionResult';
}
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
proto.alis.adk.sessions.v1.GroundingMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.GroundingMetadata.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.GroundingMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.GroundingMetadata.displayName = 'proto.alis.adk.sessions.v1.GroundingMetadata';
}
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
proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.displayName = 'proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri';
}
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
proto.alis.adk.sessions.v1.GroundingChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.adk.sessions.v1.GroundingChunk.oneofGroups_);
};
goog.inherits(proto.alis.adk.sessions.v1.GroundingChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.GroundingChunk.displayName = 'proto.alis.adk.sessions.v1.GroundingChunk';
}
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
proto.alis.adk.sessions.v1.GroundingChunk.Web = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.GroundingChunk.Web, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.GroundingChunk.Web.displayName = 'proto.alis.adk.sessions.v1.GroundingChunk.Web';
}
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
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.oneofGroups_);
};
goog.inherits(proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.displayName = 'proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext';
}
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
proto.alis.adk.sessions.v1.GroundingChunk.Maps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.GroundingChunk.Maps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.GroundingChunk.Maps.displayName = 'proto.alis.adk.sessions.v1.GroundingChunk.Maps';
}
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
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.displayName = 'proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources';
}
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
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.displayName = 'proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet';
}
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
proto.alis.adk.sessions.v1.GroundingSupport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.GroundingSupport.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.GroundingSupport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.GroundingSupport.displayName = 'proto.alis.adk.sessions.v1.GroundingSupport';
}
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
proto.alis.adk.sessions.v1.Segment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.Segment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.Segment.displayName = 'proto.alis.adk.sessions.v1.Segment';
}
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
proto.alis.adk.sessions.v1.SearchEntryPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.SearchEntryPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.SearchEntryPoint.displayName = 'proto.alis.adk.sessions.v1.SearchEntryPoint';
}
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
proto.alis.adk.sessions.v1.RetrievalMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.RetrievalMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.RetrievalMetadata.displayName = 'proto.alis.adk.sessions.v1.RetrievalMetadata';
}
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
proto.alis.adk.sessions.v1.RagChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.RagChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.RagChunk.displayName = 'proto.alis.adk.sessions.v1.RagChunk';
}
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
proto.alis.adk.sessions.v1.RagChunk.PageSpan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.RagChunk.PageSpan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.RagChunk.PageSpan.displayName = 'proto.alis.adk.sessions.v1.RagChunk.PageSpan';
}
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
proto.alis.adk.sessions.v1.UsageMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.UsageMetadata.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.UsageMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.UsageMetadata.displayName = 'proto.alis.adk.sessions.v1.UsageMetadata';
}
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
proto.alis.adk.sessions.v1.ModalityTokenCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.ModalityTokenCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.ModalityTokenCount.displayName = 'proto.alis.adk.sessions.v1.ModalityTokenCount';
}
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
proto.alis.adk.sessions.v1.CitationMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.CitationMetadata.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.CitationMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.CitationMetadata.displayName = 'proto.alis.adk.sessions.v1.CitationMetadata';
}
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
proto.alis.adk.sessions.v1.CitationMetadata.Citation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.CitationMetadata.Citation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.CitationMetadata.Citation.displayName = 'proto.alis.adk.sessions.v1.CitationMetadata.Citation';
}
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
proto.alis.adk.sessions.v1.ToolConfirmation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.ToolConfirmation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.ToolConfirmation.displayName = 'proto.alis.adk.sessions.v1.ToolConfirmation';
}
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
proto.alis.adk.sessions.v1.LogprobsResultCandidate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.LogprobsResultCandidate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.LogprobsResultCandidate.displayName = 'proto.alis.adk.sessions.v1.LogprobsResultCandidate';
}
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
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.LogprobsResultTopCandidates, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.displayName = 'proto.alis.adk.sessions.v1.LogprobsResultTopCandidates';
}
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
proto.alis.adk.sessions.v1.LogprobsResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.LogprobsResult.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.LogprobsResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.LogprobsResult.displayName = 'proto.alis.adk.sessions.v1.LogprobsResult';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.alis.adk.sessions.v1.Session.oneofGroups_ = [[96,97]];

/**
 * @enum {number}
 */
proto.alis.adk.sessions.v1.Session.ExpirationCase = {
  EXPIRATION_NOT_SET: 0,
  EXPIRE_TIME: 96,
  TTL: 97
};

/**
 * @return {proto.alis.adk.sessions.v1.Session.ExpirationCase}
 */
proto.alis.adk.sessions.v1.Session.prototype.getExpirationCase = function() {
  return /** @type {proto.alis.adk.sessions.v1.Session.ExpirationCase} */(jspb.Message.computeOneofCase(this, proto.alis.adk.sessions.v1.Session.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.Session.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.Session.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.Session} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.Session.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
appName: jspb.Message.getFieldWithDefault(msg, 2, ""),
userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
displayName: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
state: (f = msg.getState()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
expireTime: (f = msg.getExpireTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
ttl: (f = msg.getTtl()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.Session}
 */
proto.alis.adk.sessions.v1.Session.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.Session;
  return proto.alis.adk.sessions.v1.Session.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.Session} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.Session}
 */
proto.alis.adk.sessions.v1.Session.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAppName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDisplayName(value);
      break;
    case 10:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 96:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpireTime(value);
      break;
    case 97:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTtl(value);
      break;
    case 98:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 99:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.alis.adk.sessions.v1.Session.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.Session.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.Session} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.Session.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getExpireTime();
  if (f != null) {
    writer.writeMessage(
      96,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTtl();
  if (f != null) {
    writer.writeMessage(
      97,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.Session.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
 */
proto.alis.adk.sessions.v1.Session.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string app_name = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.Session.prototype.getAppName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
 */
proto.alis.adk.sessions.v1.Session.prototype.setAppName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.alis.adk.sessions.v1.Session.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
 */
proto.alis.adk.sessions.v1.Session.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string display_name = 4;
 * @return {string}
 */
proto.alis.adk.sessions.v1.Session.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
 */
proto.alis.adk.sessions.v1.Session.prototype.setDisplayName = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
 */
proto.alis.adk.sessions.v1.Session.prototype.clearDisplayName = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Session.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Struct state = 10;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.adk.sessions.v1.Session.prototype.getState = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 10));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
*/
proto.alis.adk.sessions.v1.Session.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
 */
proto.alis.adk.sessions.v1.Session.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Session.prototype.hasState = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp expire_time = 96;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.alis.adk.sessions.v1.Session.prototype.getExpireTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 96));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
*/
proto.alis.adk.sessions.v1.Session.prototype.setExpireTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 96, proto.alis.adk.sessions.v1.Session.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
 */
proto.alis.adk.sessions.v1.Session.prototype.clearExpireTime = function() {
  return this.setExpireTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Session.prototype.hasExpireTime = function() {
  return jspb.Message.getField(this, 96) != null;
};


/**
 * optional google.protobuf.Duration ttl = 97;
 * @return {?proto.google.protobuf.Duration}
 */
proto.alis.adk.sessions.v1.Session.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 97));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
*/
proto.alis.adk.sessions.v1.Session.prototype.setTtl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 97, proto.alis.adk.sessions.v1.Session.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
 */
proto.alis.adk.sessions.v1.Session.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Session.prototype.hasTtl = function() {
  return jspb.Message.getField(this, 97) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 98;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.alis.adk.sessions.v1.Session.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 98));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
*/
proto.alis.adk.sessions.v1.Session.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
 */
proto.alis.adk.sessions.v1.Session.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Session.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 99;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.alis.adk.sessions.v1.Session.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 99));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
*/
proto.alis.adk.sessions.v1.Session.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Session} returns this
 */
proto.alis.adk.sessions.v1.Session.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Session.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 99) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.AppState.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.AppState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.AppState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.AppState.toObject = function(includeInstance, msg) {
  var f, obj = {
appName: jspb.Message.getFieldWithDefault(msg, 1, ""),
state: (f = msg.getState()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.AppState}
 */
proto.alis.adk.sessions.v1.AppState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.AppState;
  return proto.alis.adk.sessions.v1.AppState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.AppState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.AppState}
 */
proto.alis.adk.sessions.v1.AppState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAppName(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 99:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.alis.adk.sessions.v1.AppState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.AppState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.AppState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.AppState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_name = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.AppState.prototype.getAppName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.AppState} returns this
 */
proto.alis.adk.sessions.v1.AppState.prototype.setAppName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct state = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.adk.sessions.v1.AppState.prototype.getState = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.adk.sessions.v1.AppState} returns this
*/
proto.alis.adk.sessions.v1.AppState.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.AppState} returns this
 */
proto.alis.adk.sessions.v1.AppState.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.AppState.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 99;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.alis.adk.sessions.v1.AppState.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 99));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.alis.adk.sessions.v1.AppState} returns this
*/
proto.alis.adk.sessions.v1.AppState.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.AppState} returns this
 */
proto.alis.adk.sessions.v1.AppState.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.AppState.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 99) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.UserState.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.UserState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.UserState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.UserState.toObject = function(includeInstance, msg) {
  var f, obj = {
appName: jspb.Message.getFieldWithDefault(msg, 1, ""),
userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
state: (f = msg.getState()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.UserState}
 */
proto.alis.adk.sessions.v1.UserState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.UserState;
  return proto.alis.adk.sessions.v1.UserState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.UserState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.UserState}
 */
proto.alis.adk.sessions.v1.UserState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAppName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUserId(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 99:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.alis.adk.sessions.v1.UserState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.UserState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.UserState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.UserState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_name = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.UserState.prototype.getAppName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.UserState} returns this
 */
proto.alis.adk.sessions.v1.UserState.prototype.setAppName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.UserState.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.UserState} returns this
 */
proto.alis.adk.sessions.v1.UserState.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct state = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.adk.sessions.v1.UserState.prototype.getState = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.adk.sessions.v1.UserState} returns this
*/
proto.alis.adk.sessions.v1.UserState.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.UserState} returns this
 */
proto.alis.adk.sessions.v1.UserState.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.UserState.prototype.hasState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 99;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.alis.adk.sessions.v1.UserState.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 99));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.alis.adk.sessions.v1.UserState} returns this
*/
proto.alis.adk.sessions.v1.UserState.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.UserState} returns this
 */
proto.alis.adk.sessions.v1.UserState.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.UserState.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.SessionEvent.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.SessionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.SessionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.SessionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
appName: jspb.Message.getFieldWithDefault(msg, 2, ""),
userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
sessionId: jspb.Message.getFieldWithDefault(msg, 4, ""),
invocationId: jspb.Message.getFieldWithDefault(msg, 5, ""),
author: jspb.Message.getFieldWithDefault(msg, 6, ""),
actions: (f = msg.getActions()) && proto.alis.adk.sessions.v1.EventActions.toObject(includeInstance, f),
longRunningToolIdsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
branch: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
content: (f = msg.getContent()) && proto.alis.adk.sessions.v1.Content.toObject(includeInstance, f),
groundingMetadata: (f = msg.getGroundingMetadata()) && proto.alis.adk.sessions.v1.GroundingMetadata.toObject(includeInstance, f),
customMetadata: (f = msg.getCustomMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
usageMetadata: (f = msg.getUsageMetadata()) && proto.alis.adk.sessions.v1.UsageMetadata.toObject(includeInstance, f),
citationMetadata: (f = msg.getCitationMetadata()) && proto.alis.adk.sessions.v1.CitationMetadata.toObject(includeInstance, f),
partial: (f = jspb.Message.getBooleanField(msg, 15)) == null ? undefined : f,
turnComplete: (f = jspb.Message.getBooleanField(msg, 16)) == null ? undefined : f,
errorCode: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
errorMessage: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
interrupted: (f = jspb.Message.getBooleanField(msg, 19)) == null ? undefined : f,
finishReason: jspb.Message.getFieldWithDefault(msg, 20, 0),
avgLogprobs: (f = jspb.Message.getOptionalFloatingPointField(msg, 21)) == null ? undefined : f,
modelVersion: (f = jspb.Message.getField(msg, 22)) == null ? undefined : f,
logprobsResult: (f = msg.getLogprobsResult()) && proto.alis.adk.sessions.v1.LogprobsResult.toObject(includeInstance, f),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent}
 */
proto.alis.adk.sessions.v1.SessionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.SessionEvent;
  return proto.alis.adk.sessions.v1.SessionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.SessionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent}
 */
proto.alis.adk.sessions.v1.SessionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAppName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSessionId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setInvocationId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAuthor(value);
      break;
    case 7:
      var value = new proto.alis.adk.sessions.v1.EventActions;
      reader.readMessage(value,proto.alis.adk.sessions.v1.EventActions.deserializeBinaryFromReader);
      msg.setActions(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addLongRunningToolIds(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setBranch(value);
      break;
    case 10:
      var value = new proto.alis.adk.sessions.v1.Content;
      reader.readMessage(value,proto.alis.adk.sessions.v1.Content.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 11:
      var value = new proto.alis.adk.sessions.v1.GroundingMetadata;
      reader.readMessage(value,proto.alis.adk.sessions.v1.GroundingMetadata.deserializeBinaryFromReader);
      msg.setGroundingMetadata(value);
      break;
    case 12:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setCustomMetadata(value);
      break;
    case 13:
      var value = new proto.alis.adk.sessions.v1.UsageMetadata;
      reader.readMessage(value,proto.alis.adk.sessions.v1.UsageMetadata.deserializeBinaryFromReader);
      msg.setUsageMetadata(value);
      break;
    case 14:
      var value = new proto.alis.adk.sessions.v1.CitationMetadata;
      reader.readMessage(value,proto.alis.adk.sessions.v1.CitationMetadata.deserializeBinaryFromReader);
      msg.setCitationMetadata(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPartial(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTurnComplete(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setErrorCode(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setErrorMessage(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInterrupted(value);
      break;
    case 20:
      var value = /** @type {!proto.alis.adk.sessions.v1.FinishReason} */ (reader.readEnum());
      msg.setFinishReason(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgLogprobs(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setModelVersion(value);
      break;
    case 23:
      var value = new proto.alis.adk.sessions.v1.LogprobsResult;
      reader.readMessage(value,proto.alis.adk.sessions.v1.LogprobsResult.deserializeBinaryFromReader);
      msg.setLogprobsResult(value);
      break;
    case 98:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
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
proto.alis.adk.sessions.v1.SessionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.SessionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.SessionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.SessionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInvocationId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getActions();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.alis.adk.sessions.v1.EventActions.serializeBinaryToWriter
    );
  }
  f = message.getLongRunningToolIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.alis.adk.sessions.v1.Content.serializeBinaryToWriter
    );
  }
  f = message.getGroundingMetadata();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.alis.adk.sessions.v1.GroundingMetadata.serializeBinaryToWriter
    );
  }
  f = message.getCustomMetadata();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getUsageMetadata();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.alis.adk.sessions.v1.UsageMetadata.serializeBinaryToWriter
    );
  }
  f = message.getCitationMetadata();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.alis.adk.sessions.v1.CitationMetadata.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getFinishReason();
  if (f !== 0.0) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeDouble(
      21,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getLogprobsResult();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.alis.adk.sessions.v1.LogprobsResult.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string app_name = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getAppName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setAppName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string session_id = 4;
 * @return {string}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string invocation_id = 5;
 * @return {string}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getInvocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setInvocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string author = 6;
 * @return {string}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setAuthor = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional EventActions actions = 7;
 * @return {?proto.alis.adk.sessions.v1.EventActions}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getActions = function() {
  return /** @type{?proto.alis.adk.sessions.v1.EventActions} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.EventActions, 7));
};


/**
 * @param {?proto.alis.adk.sessions.v1.EventActions|undefined} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
*/
proto.alis.adk.sessions.v1.SessionEvent.prototype.setActions = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearActions = function() {
  return this.setActions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasActions = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string long_running_tool_ids = 8;
 * @return {!Array<string>}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getLongRunningToolIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setLongRunningToolIdsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.addLongRunningToolIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearLongRunningToolIdsList = function() {
  return this.setLongRunningToolIdsList([]);
};


/**
 * optional string branch = 9;
 * @return {string}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setBranch = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearBranch = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Content content = 10;
 * @return {?proto.alis.adk.sessions.v1.Content}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getContent = function() {
  return /** @type{?proto.alis.adk.sessions.v1.Content} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.Content, 10));
};


/**
 * @param {?proto.alis.adk.sessions.v1.Content|undefined} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
*/
proto.alis.adk.sessions.v1.SessionEvent.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasContent = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional GroundingMetadata grounding_metadata = 11;
 * @return {?proto.alis.adk.sessions.v1.GroundingMetadata}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getGroundingMetadata = function() {
  return /** @type{?proto.alis.adk.sessions.v1.GroundingMetadata} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.GroundingMetadata, 11));
};


/**
 * @param {?proto.alis.adk.sessions.v1.GroundingMetadata|undefined} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
*/
proto.alis.adk.sessions.v1.SessionEvent.prototype.setGroundingMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearGroundingMetadata = function() {
  return this.setGroundingMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasGroundingMetadata = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Struct custom_metadata = 12;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getCustomMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 12));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
*/
proto.alis.adk.sessions.v1.SessionEvent.prototype.setCustomMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearCustomMetadata = function() {
  return this.setCustomMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasCustomMetadata = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional UsageMetadata usage_metadata = 13;
 * @return {?proto.alis.adk.sessions.v1.UsageMetadata}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getUsageMetadata = function() {
  return /** @type{?proto.alis.adk.sessions.v1.UsageMetadata} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.UsageMetadata, 13));
};


/**
 * @param {?proto.alis.adk.sessions.v1.UsageMetadata|undefined} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
*/
proto.alis.adk.sessions.v1.SessionEvent.prototype.setUsageMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearUsageMetadata = function() {
  return this.setUsageMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasUsageMetadata = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CitationMetadata citation_metadata = 14;
 * @return {?proto.alis.adk.sessions.v1.CitationMetadata}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getCitationMetadata = function() {
  return /** @type{?proto.alis.adk.sessions.v1.CitationMetadata} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.CitationMetadata, 14));
};


/**
 * @param {?proto.alis.adk.sessions.v1.CitationMetadata|undefined} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
*/
proto.alis.adk.sessions.v1.SessionEvent.prototype.setCitationMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearCitationMetadata = function() {
  return this.setCitationMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasCitationMetadata = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool partial = 15;
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getPartial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setPartial = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearPartial = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasPartial = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool turn_complete = 16;
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getTurnComplete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setTurnComplete = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearTurnComplete = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasTurnComplete = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string error_code = 17;
 * @return {string}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getErrorCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setErrorCode = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearErrorCode = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasErrorCode = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string error_message = 18;
 * @return {string}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasErrorMessage = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool interrupted = 19;
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getInterrupted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setInterrupted = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearInterrupted = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasInterrupted = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional FinishReason finish_reason = 20;
 * @return {!proto.alis.adk.sessions.v1.FinishReason}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getFinishReason = function() {
  return /** @type {!proto.alis.adk.sessions.v1.FinishReason} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.alis.adk.sessions.v1.FinishReason} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setFinishReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 20, value);
};


/**
 * optional double avg_logprobs = 21;
 * @return {number}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getAvgLogprobs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setAvgLogprobs = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearAvgLogprobs = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasAvgLogprobs = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string model_version = 22;
 * @return {string}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getModelVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.setModelVersion = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearModelVersion = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasModelVersion = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional LogprobsResult logprobs_result = 23;
 * @return {?proto.alis.adk.sessions.v1.LogprobsResult}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getLogprobsResult = function() {
  return /** @type{?proto.alis.adk.sessions.v1.LogprobsResult} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.LogprobsResult, 23));
};


/**
 * @param {?proto.alis.adk.sessions.v1.LogprobsResult|undefined} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
*/
proto.alis.adk.sessions.v1.SessionEvent.prototype.setLogprobsResult = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearLogprobsResult = function() {
  return this.setLogprobsResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasLogprobsResult = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 98;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 98));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
*/
proto.alis.adk.sessions.v1.SessionEvent.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.SessionEvent} returns this
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.SessionEvent.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 98) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.EventMetadata.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.EventMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.EventMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.EventMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
groundingMetadata: (f = msg.getGroundingMetadata()) && proto.alis.adk.sessions.v1.GroundingMetadata.toObject(includeInstance, f),
partial: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
turnComplete: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
interrupted: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
longRunningToolIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
branch: jspb.Message.getFieldWithDefault(msg, 6, ""),
customMetadata: (f = msg.getCustomMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.EventMetadata}
 */
proto.alis.adk.sessions.v1.EventMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.EventMetadata;
  return proto.alis.adk.sessions.v1.EventMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.EventMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.EventMetadata}
 */
proto.alis.adk.sessions.v1.EventMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.GroundingMetadata;
      reader.readMessage(value,proto.alis.adk.sessions.v1.GroundingMetadata.deserializeBinaryFromReader);
      msg.setGroundingMetadata(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPartial(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTurnComplete(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInterrupted(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addLongRunningToolIds(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setBranch(value);
      break;
    case 7:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setCustomMetadata(value);
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
proto.alis.adk.sessions.v1.EventMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.EventMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.EventMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.EventMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroundingMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.GroundingMetadata.serializeBinaryToWriter
    );
  }
  f = message.getPartial();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTurnComplete();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getInterrupted();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getLongRunningToolIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getBranch();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCustomMetadata();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroundingMetadata grounding_metadata = 1;
 * @return {?proto.alis.adk.sessions.v1.GroundingMetadata}
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.getGroundingMetadata = function() {
  return /** @type{?proto.alis.adk.sessions.v1.GroundingMetadata} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.GroundingMetadata, 1));
};


/**
 * @param {?proto.alis.adk.sessions.v1.GroundingMetadata|undefined} value
 * @return {!proto.alis.adk.sessions.v1.EventMetadata} returns this
*/
proto.alis.adk.sessions.v1.EventMetadata.prototype.setGroundingMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.EventMetadata} returns this
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.clearGroundingMetadata = function() {
  return this.setGroundingMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.hasGroundingMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool partial = 2;
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.getPartial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.adk.sessions.v1.EventMetadata} returns this
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.setPartial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool turn_complete = 3;
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.getTurnComplete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.adk.sessions.v1.EventMetadata} returns this
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.setTurnComplete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool interrupted = 4;
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.getInterrupted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.adk.sessions.v1.EventMetadata} returns this
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.setInterrupted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated string long_running_tool_ids = 5;
 * @return {!Array<string>}
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.getLongRunningToolIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.adk.sessions.v1.EventMetadata} returns this
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.setLongRunningToolIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.EventMetadata} returns this
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.addLongRunningToolIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.EventMetadata} returns this
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.clearLongRunningToolIdsList = function() {
  return this.setLongRunningToolIdsList([]);
};


/**
 * optional string branch = 6;
 * @return {string}
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.EventMetadata} returns this
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Struct custom_metadata = 7;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.getCustomMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 7));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.adk.sessions.v1.EventMetadata} returns this
*/
proto.alis.adk.sessions.v1.EventMetadata.prototype.setCustomMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.EventMetadata} returns this
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.clearCustomMetadata = function() {
  return this.setCustomMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.EventMetadata.prototype.hasCustomMetadata = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.EventActions.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.EventActions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.EventActions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.EventActions.toObject = function(includeInstance, msg) {
  var f, obj = {
skipSummarization: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
stateDelta: (f = msg.getStateDelta()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
artifactDeltaMap: (f = msg.getArtifactDeltaMap()) ? f.toObject(includeInstance, undefined) : [],
escalate: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
requestedToolConfirmationsMap: (f = msg.getRequestedToolConfirmationsMap()) ? f.toObject(includeInstance, proto.alis.adk.sessions.v1.ToolConfirmation.toObject) : [],
transferAgent: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.EventActions}
 */
proto.alis.adk.sessions.v1.EventActions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.EventActions;
  return proto.alis.adk.sessions.v1.EventActions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.EventActions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.EventActions}
 */
proto.alis.adk.sessions.v1.EventActions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipSummarization(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setStateDelta(value);
      break;
    case 3:
      var value = msg.getArtifactDeltaMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readInt64, null, "", 0);
         });
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEscalate(value);
      break;
    case 7:
      var value = msg.getRequestedToolConfirmationsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readMessage, proto.alis.adk.sessions.v1.ToolConfirmation.deserializeBinaryFromReader, "", new proto.alis.adk.sessions.v1.ToolConfirmation());
         });
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTransferAgent(value);
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
proto.alis.adk.sessions.v1.EventActions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.EventActions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.EventActions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.EventActions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkipSummarization();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getStateDelta();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getArtifactDeltaMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getArtifactDeltaMap(true),
    3,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getEscalate();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getRequestedToolConfirmationsMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getRequestedToolConfirmationsMap(true),
    7,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.alis.adk.sessions.v1.ToolConfirmation.serializeBinaryToWriter);
  }
  f = message.getTransferAgent();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional bool skip_summarization = 1;
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.EventActions.prototype.getSkipSummarization = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.adk.sessions.v1.EventActions} returns this
 */
proto.alis.adk.sessions.v1.EventActions.prototype.setSkipSummarization = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional google.protobuf.Struct state_delta = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.adk.sessions.v1.EventActions.prototype.getStateDelta = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.adk.sessions.v1.EventActions} returns this
*/
proto.alis.adk.sessions.v1.EventActions.prototype.setStateDelta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.EventActions} returns this
 */
proto.alis.adk.sessions.v1.EventActions.prototype.clearStateDelta = function() {
  return this.setStateDelta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.EventActions.prototype.hasStateDelta = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, int64> artifact_delta = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.alis.adk.sessions.v1.EventActions.prototype.getArtifactDeltaMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.adk.sessions.v1.EventActions} returns this
 */
proto.alis.adk.sessions.v1.EventActions.prototype.clearArtifactDeltaMap = function() {
  this.getArtifactDeltaMap().clear();
  return this;
};


/**
 * optional bool escalate = 6;
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.EventActions.prototype.getEscalate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.adk.sessions.v1.EventActions} returns this
 */
proto.alis.adk.sessions.v1.EventActions.prototype.setEscalate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * map<string, ToolConfirmation> requested_tool_confirmations = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.alis.adk.sessions.v1.ToolConfirmation>}
 */
proto.alis.adk.sessions.v1.EventActions.prototype.getRequestedToolConfirmationsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.alis.adk.sessions.v1.ToolConfirmation>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.alis.adk.sessions.v1.ToolConfirmation));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.adk.sessions.v1.EventActions} returns this
 */
proto.alis.adk.sessions.v1.EventActions.prototype.clearRequestedToolConfirmationsMap = function() {
  this.getRequestedToolConfirmationsMap().clear();
  return this;
};


/**
 * optional string transfer_agent = 8;
 * @return {string}
 */
proto.alis.adk.sessions.v1.EventActions.prototype.getTransferAgent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.EventActions} returns this
 */
proto.alis.adk.sessions.v1.EventActions.prototype.setTransferAgent = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.Content.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.Content.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.Content.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.Content} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.Content.toObject = function(includeInstance, msg) {
  var f, obj = {
role: jspb.Message.getFieldWithDefault(msg, 1, ""),
partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.alis.adk.sessions.v1.Part.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.Content}
 */
proto.alis.adk.sessions.v1.Content.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.Content;
  return proto.alis.adk.sessions.v1.Content.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.Content} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.Content}
 */
proto.alis.adk.sessions.v1.Content.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRole(value);
      break;
    case 2:
      var value = new proto.alis.adk.sessions.v1.Part;
      reader.readMessage(value,proto.alis.adk.sessions.v1.Part.deserializeBinaryFromReader);
      msg.addParts(value);
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
proto.alis.adk.sessions.v1.Content.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.Content.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.Content} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.Content.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.alis.adk.sessions.v1.Part.serializeBinaryToWriter
    );
  }
};


/**
 * optional string role = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.Content.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.Content} returns this
 */
proto.alis.adk.sessions.v1.Content.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Part parts = 2;
 * @return {!Array<!proto.alis.adk.sessions.v1.Part>}
 */
proto.alis.adk.sessions.v1.Content.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.Part>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.Part, 2));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.Part>} value
 * @return {!proto.alis.adk.sessions.v1.Content} returns this
*/
proto.alis.adk.sessions.v1.Content.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.Part=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.Part}
 */
proto.alis.adk.sessions.v1.Content.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.alis.adk.sessions.v1.Part, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.Content} returns this
 */
proto.alis.adk.sessions.v1.Content.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.alis.adk.sessions.v1.Part.oneofGroups_ = [[1,2,3,5,6,8,9],[4]];

/**
 * @enum {number}
 */
proto.alis.adk.sessions.v1.Part.DataCase = {
  DATA_NOT_SET: 0,
  TEXT: 1,
  INLINE_DATA: 2,
  FILE_DATA: 3,
  FUNCTION_CALL: 5,
  FUNCTION_RESPONSE: 6,
  EXECUTABLE_CODE: 8,
  CODE_EXECUTION_RESULT: 9
};

/**
 * @return {proto.alis.adk.sessions.v1.Part.DataCase}
 */
proto.alis.adk.sessions.v1.Part.prototype.getDataCase = function() {
  return /** @type {proto.alis.adk.sessions.v1.Part.DataCase} */(jspb.Message.computeOneofCase(this, proto.alis.adk.sessions.v1.Part.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.alis.adk.sessions.v1.Part.MetadataCase = {
  METADATA_NOT_SET: 0,
  VIDEO_METADATA: 4
};

/**
 * @return {proto.alis.adk.sessions.v1.Part.MetadataCase}
 */
proto.alis.adk.sessions.v1.Part.prototype.getMetadataCase = function() {
  return /** @type {proto.alis.adk.sessions.v1.Part.MetadataCase} */(jspb.Message.computeOneofCase(this, proto.alis.adk.sessions.v1.Part.oneofGroups_[1]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.Part.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.Part.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.Part} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.Part.toObject = function(includeInstance, msg) {
  var f, obj = {
text: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
inlineData: (f = msg.getInlineData()) && proto.alis.adk.sessions.v1.Blob.toObject(includeInstance, f),
fileData: (f = msg.getFileData()) && proto.alis.adk.sessions.v1.FileData.toObject(includeInstance, f),
functionCall: (f = msg.getFunctionCall()) && proto.alis.adk.sessions.v1.FunctionCall.toObject(includeInstance, f),
functionResponse: (f = msg.getFunctionResponse()) && proto.alis.adk.sessions.v1.FunctionResponse.toObject(includeInstance, f),
executableCode: (f = msg.getExecutableCode()) && proto.alis.adk.sessions.v1.ExecutableCode.toObject(includeInstance, f),
codeExecutionResult: (f = msg.getCodeExecutionResult()) && proto.alis.adk.sessions.v1.CodeExecutionResult.toObject(includeInstance, f),
videoMetadata: (f = msg.getVideoMetadata()) && proto.alis.adk.sessions.v1.VideoMetadata.toObject(includeInstance, f),
thought: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
thoughtSignature: msg.getThoughtSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.Part}
 */
proto.alis.adk.sessions.v1.Part.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.Part;
  return proto.alis.adk.sessions.v1.Part.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.Part} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.Part}
 */
proto.alis.adk.sessions.v1.Part.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setText(value);
      break;
    case 2:
      var value = new proto.alis.adk.sessions.v1.Blob;
      reader.readMessage(value,proto.alis.adk.sessions.v1.Blob.deserializeBinaryFromReader);
      msg.setInlineData(value);
      break;
    case 3:
      var value = new proto.alis.adk.sessions.v1.FileData;
      reader.readMessage(value,proto.alis.adk.sessions.v1.FileData.deserializeBinaryFromReader);
      msg.setFileData(value);
      break;
    case 5:
      var value = new proto.alis.adk.sessions.v1.FunctionCall;
      reader.readMessage(value,proto.alis.adk.sessions.v1.FunctionCall.deserializeBinaryFromReader);
      msg.setFunctionCall(value);
      break;
    case 6:
      var value = new proto.alis.adk.sessions.v1.FunctionResponse;
      reader.readMessage(value,proto.alis.adk.sessions.v1.FunctionResponse.deserializeBinaryFromReader);
      msg.setFunctionResponse(value);
      break;
    case 8:
      var value = new proto.alis.adk.sessions.v1.ExecutableCode;
      reader.readMessage(value,proto.alis.adk.sessions.v1.ExecutableCode.deserializeBinaryFromReader);
      msg.setExecutableCode(value);
      break;
    case 9:
      var value = new proto.alis.adk.sessions.v1.CodeExecutionResult;
      reader.readMessage(value,proto.alis.adk.sessions.v1.CodeExecutionResult.deserializeBinaryFromReader);
      msg.setCodeExecutionResult(value);
      break;
    case 4:
      var value = new proto.alis.adk.sessions.v1.VideoMetadata;
      reader.readMessage(value,proto.alis.adk.sessions.v1.VideoMetadata.deserializeBinaryFromReader);
      msg.setVideoMetadata(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setThought(value);
      break;
    case 11:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setThoughtSignature(value);
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
proto.alis.adk.sessions.v1.Part.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.Part.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.Part} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.Part.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInlineData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.adk.sessions.v1.Blob.serializeBinaryToWriter
    );
  }
  f = message.getFileData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.adk.sessions.v1.FileData.serializeBinaryToWriter
    );
  }
  f = message.getFunctionCall();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.alis.adk.sessions.v1.FunctionCall.serializeBinaryToWriter
    );
  }
  f = message.getFunctionResponse();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.alis.adk.sessions.v1.FunctionResponse.serializeBinaryToWriter
    );
  }
  f = message.getExecutableCode();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.alis.adk.sessions.v1.ExecutableCode.serializeBinaryToWriter
    );
  }
  f = message.getCodeExecutionResult();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.alis.adk.sessions.v1.CodeExecutionResult.serializeBinaryToWriter
    );
  }
  f = message.getVideoMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.adk.sessions.v1.VideoMetadata.serializeBinaryToWriter
    );
  }
  f = message.getThought();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getThoughtSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      11,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.Part.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
 */
proto.alis.adk.sessions.v1.Part.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.alis.adk.sessions.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
 */
proto.alis.adk.sessions.v1.Part.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 1, proto.alis.adk.sessions.v1.Part.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Part.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Blob inline_data = 2;
 * @return {?proto.alis.adk.sessions.v1.Blob}
 */
proto.alis.adk.sessions.v1.Part.prototype.getInlineData = function() {
  return /** @type{?proto.alis.adk.sessions.v1.Blob} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.Blob, 2));
};


/**
 * @param {?proto.alis.adk.sessions.v1.Blob|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
*/
proto.alis.adk.sessions.v1.Part.prototype.setInlineData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.adk.sessions.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
 */
proto.alis.adk.sessions.v1.Part.prototype.clearInlineData = function() {
  return this.setInlineData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Part.prototype.hasInlineData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FileData file_data = 3;
 * @return {?proto.alis.adk.sessions.v1.FileData}
 */
proto.alis.adk.sessions.v1.Part.prototype.getFileData = function() {
  return /** @type{?proto.alis.adk.sessions.v1.FileData} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.FileData, 3));
};


/**
 * @param {?proto.alis.adk.sessions.v1.FileData|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
*/
proto.alis.adk.sessions.v1.Part.prototype.setFileData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.alis.adk.sessions.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
 */
proto.alis.adk.sessions.v1.Part.prototype.clearFileData = function() {
  return this.setFileData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Part.prototype.hasFileData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional FunctionCall function_call = 5;
 * @return {?proto.alis.adk.sessions.v1.FunctionCall}
 */
proto.alis.adk.sessions.v1.Part.prototype.getFunctionCall = function() {
  return /** @type{?proto.alis.adk.sessions.v1.FunctionCall} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.FunctionCall, 5));
};


/**
 * @param {?proto.alis.adk.sessions.v1.FunctionCall|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
*/
proto.alis.adk.sessions.v1.Part.prototype.setFunctionCall = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.alis.adk.sessions.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
 */
proto.alis.adk.sessions.v1.Part.prototype.clearFunctionCall = function() {
  return this.setFunctionCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Part.prototype.hasFunctionCall = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional FunctionResponse function_response = 6;
 * @return {?proto.alis.adk.sessions.v1.FunctionResponse}
 */
proto.alis.adk.sessions.v1.Part.prototype.getFunctionResponse = function() {
  return /** @type{?proto.alis.adk.sessions.v1.FunctionResponse} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.FunctionResponse, 6));
};


/**
 * @param {?proto.alis.adk.sessions.v1.FunctionResponse|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
*/
proto.alis.adk.sessions.v1.Part.prototype.setFunctionResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.alis.adk.sessions.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
 */
proto.alis.adk.sessions.v1.Part.prototype.clearFunctionResponse = function() {
  return this.setFunctionResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Part.prototype.hasFunctionResponse = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ExecutableCode executable_code = 8;
 * @return {?proto.alis.adk.sessions.v1.ExecutableCode}
 */
proto.alis.adk.sessions.v1.Part.prototype.getExecutableCode = function() {
  return /** @type{?proto.alis.adk.sessions.v1.ExecutableCode} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.ExecutableCode, 8));
};


/**
 * @param {?proto.alis.adk.sessions.v1.ExecutableCode|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
*/
proto.alis.adk.sessions.v1.Part.prototype.setExecutableCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.alis.adk.sessions.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
 */
proto.alis.adk.sessions.v1.Part.prototype.clearExecutableCode = function() {
  return this.setExecutableCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Part.prototype.hasExecutableCode = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CodeExecutionResult code_execution_result = 9;
 * @return {?proto.alis.adk.sessions.v1.CodeExecutionResult}
 */
proto.alis.adk.sessions.v1.Part.prototype.getCodeExecutionResult = function() {
  return /** @type{?proto.alis.adk.sessions.v1.CodeExecutionResult} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.CodeExecutionResult, 9));
};


/**
 * @param {?proto.alis.adk.sessions.v1.CodeExecutionResult|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
*/
proto.alis.adk.sessions.v1.Part.prototype.setCodeExecutionResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.alis.adk.sessions.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
 */
proto.alis.adk.sessions.v1.Part.prototype.clearCodeExecutionResult = function() {
  return this.setCodeExecutionResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Part.prototype.hasCodeExecutionResult = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional VideoMetadata video_metadata = 4;
 * @return {?proto.alis.adk.sessions.v1.VideoMetadata}
 */
proto.alis.adk.sessions.v1.Part.prototype.getVideoMetadata = function() {
  return /** @type{?proto.alis.adk.sessions.v1.VideoMetadata} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.VideoMetadata, 4));
};


/**
 * @param {?proto.alis.adk.sessions.v1.VideoMetadata|undefined} value
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
*/
proto.alis.adk.sessions.v1.Part.prototype.setVideoMetadata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.alis.adk.sessions.v1.Part.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
 */
proto.alis.adk.sessions.v1.Part.prototype.clearVideoMetadata = function() {
  return this.setVideoMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Part.prototype.hasVideoMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool thought = 10;
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.Part.prototype.getThought = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
 */
proto.alis.adk.sessions.v1.Part.prototype.setThought = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bytes thought_signature = 11;
 * @return {!(string|Uint8Array)}
 */
proto.alis.adk.sessions.v1.Part.prototype.getThoughtSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * optional bytes thought_signature = 11;
 * This is a type-conversion wrapper around `getThoughtSignature()`
 * @return {string}
 */
proto.alis.adk.sessions.v1.Part.prototype.getThoughtSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getThoughtSignature()));
};


/**
 * optional bytes thought_signature = 11;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getThoughtSignature()`
 * @return {!Uint8Array}
 */
proto.alis.adk.sessions.v1.Part.prototype.getThoughtSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getThoughtSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.alis.adk.sessions.v1.Part} returns this
 */
proto.alis.adk.sessions.v1.Part.prototype.setThoughtSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.Blob.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.Blob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.Blob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.Blob.toObject = function(includeInstance, msg) {
  var f, obj = {
mimeType: jspb.Message.getFieldWithDefault(msg, 1, ""),
data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.Blob}
 */
proto.alis.adk.sessions.v1.Blob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.Blob;
  return proto.alis.adk.sessions.v1.Blob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.Blob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.Blob}
 */
proto.alis.adk.sessions.v1.Blob.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMimeType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
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
proto.alis.adk.sessions.v1.Blob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.Blob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.Blob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.Blob.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMimeType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string mime_type = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.Blob.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.Blob} returns this
 */
proto.alis.adk.sessions.v1.Blob.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.alis.adk.sessions.v1.Blob.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.alis.adk.sessions.v1.Blob.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.alis.adk.sessions.v1.Blob.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.alis.adk.sessions.v1.Blob} returns this
 */
proto.alis.adk.sessions.v1.Blob.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.FileData.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.FileData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.FileData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FileData.toObject = function(includeInstance, msg) {
  var f, obj = {
mimeType: jspb.Message.getFieldWithDefault(msg, 1, ""),
fileUri: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.FileData}
 */
proto.alis.adk.sessions.v1.FileData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.FileData;
  return proto.alis.adk.sessions.v1.FileData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.FileData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.FileData}
 */
proto.alis.adk.sessions.v1.FileData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMimeType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFileUri(value);
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
proto.alis.adk.sessions.v1.FileData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.FileData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.FileData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FileData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMimeType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFileUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string mime_type = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.FileData.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.FileData} returns this
 */
proto.alis.adk.sessions.v1.FileData.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string file_uri = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.FileData.prototype.getFileUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.FileData} returns this
 */
proto.alis.adk.sessions.v1.FileData.prototype.setFileUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.VideoMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.VideoMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.VideoMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.VideoMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
startOffset: (f = msg.getStartOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
endOffset: (f = msg.getEndOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.VideoMetadata}
 */
proto.alis.adk.sessions.v1.VideoMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.VideoMetadata;
  return proto.alis.adk.sessions.v1.VideoMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.VideoMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.VideoMetadata}
 */
proto.alis.adk.sessions.v1.VideoMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStartOffset(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setEndOffset(value);
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
proto.alis.adk.sessions.v1.VideoMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.VideoMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.VideoMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.VideoMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartOffset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getEndOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration start_offset = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.alis.adk.sessions.v1.VideoMetadata.prototype.getStartOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.alis.adk.sessions.v1.VideoMetadata} returns this
*/
proto.alis.adk.sessions.v1.VideoMetadata.prototype.setStartOffset = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.VideoMetadata} returns this
 */
proto.alis.adk.sessions.v1.VideoMetadata.prototype.clearStartOffset = function() {
  return this.setStartOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.VideoMetadata.prototype.hasStartOffset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration end_offset = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.alis.adk.sessions.v1.VideoMetadata.prototype.getEndOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.alis.adk.sessions.v1.VideoMetadata} returns this
*/
proto.alis.adk.sessions.v1.VideoMetadata.prototype.setEndOffset = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.VideoMetadata} returns this
 */
proto.alis.adk.sessions.v1.VideoMetadata.prototype.clearEndOffset = function() {
  return this.setEndOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.VideoMetadata.prototype.hasEndOffset = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.FunctionCall.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.FunctionCall.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.FunctionCall} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FunctionCall.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
args: (f = msg.getArgs()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.FunctionCall}
 */
proto.alis.adk.sessions.v1.FunctionCall.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.FunctionCall;
  return proto.alis.adk.sessions.v1.FunctionCall.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.FunctionCall} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.FunctionCall}
 */
proto.alis.adk.sessions.v1.FunctionCall.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
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
proto.alis.adk.sessions.v1.FunctionCall.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.FunctionCall.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.FunctionCall} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FunctionCall.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.FunctionCall.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.FunctionCall} returns this
 */
proto.alis.adk.sessions.v1.FunctionCall.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct args = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.adk.sessions.v1.FunctionCall.prototype.getArgs = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.adk.sessions.v1.FunctionCall} returns this
*/
proto.alis.adk.sessions.v1.FunctionCall.prototype.setArgs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.FunctionCall} returns this
 */
proto.alis.adk.sessions.v1.FunctionCall.prototype.clearArgs = function() {
  return this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.FunctionCall.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.alis.adk.sessions.v1.FunctionCall.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.FunctionCall} returns this
 */
proto.alis.adk.sessions.v1.FunctionCall.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.FunctionResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.FunctionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.FunctionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.FunctionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FunctionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
response: (f = msg.getResponse()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.alis.adk.sessions.v1.FunctionResponsePart.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponse}
 */
proto.alis.adk.sessions.v1.FunctionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.FunctionResponse;
  return proto.alis.adk.sessions.v1.FunctionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.FunctionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponse}
 */
proto.alis.adk.sessions.v1.FunctionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 4:
      var value = new proto.alis.adk.sessions.v1.FunctionResponsePart;
      reader.readMessage(value,proto.alis.adk.sessions.v1.FunctionResponsePart.deserializeBinaryFromReader);
      msg.addParts(value);
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
proto.alis.adk.sessions.v1.FunctionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.FunctionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.FunctionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FunctionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.alis.adk.sessions.v1.FunctionResponsePart.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.FunctionResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponse} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct response = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.adk.sessions.v1.FunctionResponse.prototype.getResponse = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponse} returns this
*/
proto.alis.adk.sessions.v1.FunctionResponse.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponse} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponse.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.FunctionResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.alis.adk.sessions.v1.FunctionResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponse} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated FunctionResponsePart parts = 4;
 * @return {!Array<!proto.alis.adk.sessions.v1.FunctionResponsePart>}
 */
proto.alis.adk.sessions.v1.FunctionResponse.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.FunctionResponsePart>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.FunctionResponsePart, 4));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.FunctionResponsePart>} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponse} returns this
*/
proto.alis.adk.sessions.v1.FunctionResponse.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.FunctionResponsePart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.FunctionResponsePart}
 */
proto.alis.adk.sessions.v1.FunctionResponse.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.alis.adk.sessions.v1.FunctionResponsePart, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponse} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponse.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.DataCase = {
  DATA_NOT_SET: 0,
  INLINE_DATA: 1,
  FILE_DATA: 2
};

/**
 * @return {proto.alis.adk.sessions.v1.FunctionResponsePart.DataCase}
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.prototype.getDataCase = function() {
  return /** @type {proto.alis.adk.sessions.v1.FunctionResponsePart.DataCase} */(jspb.Message.computeOneofCase(this, proto.alis.adk.sessions.v1.FunctionResponsePart.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.FunctionResponsePart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.FunctionResponsePart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.toObject = function(includeInstance, msg) {
  var f, obj = {
inlineData: (f = msg.getInlineData()) && proto.alis.adk.sessions.v1.FunctionResponseBlob.toObject(includeInstance, f),
fileData: (f = msg.getFileData()) && proto.alis.adk.sessions.v1.FunctionResponseFileData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponsePart}
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.FunctionResponsePart;
  return proto.alis.adk.sessions.v1.FunctionResponsePart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.FunctionResponsePart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponsePart}
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.FunctionResponseBlob;
      reader.readMessage(value,proto.alis.adk.sessions.v1.FunctionResponseBlob.deserializeBinaryFromReader);
      msg.setInlineData(value);
      break;
    case 2:
      var value = new proto.alis.adk.sessions.v1.FunctionResponseFileData;
      reader.readMessage(value,proto.alis.adk.sessions.v1.FunctionResponseFileData.deserializeBinaryFromReader);
      msg.setFileData(value);
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
proto.alis.adk.sessions.v1.FunctionResponsePart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.FunctionResponsePart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.FunctionResponsePart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInlineData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.FunctionResponseBlob.serializeBinaryToWriter
    );
  }
  f = message.getFileData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.adk.sessions.v1.FunctionResponseFileData.serializeBinaryToWriter
    );
  }
};


/**
 * optional FunctionResponseBlob inline_data = 1;
 * @return {?proto.alis.adk.sessions.v1.FunctionResponseBlob}
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.prototype.getInlineData = function() {
  return /** @type{?proto.alis.adk.sessions.v1.FunctionResponseBlob} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.FunctionResponseBlob, 1));
};


/**
 * @param {?proto.alis.adk.sessions.v1.FunctionResponseBlob|undefined} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponsePart} returns this
*/
proto.alis.adk.sessions.v1.FunctionResponsePart.prototype.setInlineData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.alis.adk.sessions.v1.FunctionResponsePart.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponsePart} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.prototype.clearInlineData = function() {
  return this.setInlineData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.prototype.hasInlineData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FunctionResponseFileData file_data = 2;
 * @return {?proto.alis.adk.sessions.v1.FunctionResponseFileData}
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.prototype.getFileData = function() {
  return /** @type{?proto.alis.adk.sessions.v1.FunctionResponseFileData} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.FunctionResponseFileData, 2));
};


/**
 * @param {?proto.alis.adk.sessions.v1.FunctionResponseFileData|undefined} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponsePart} returns this
*/
proto.alis.adk.sessions.v1.FunctionResponsePart.prototype.setFileData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.adk.sessions.v1.FunctionResponsePart.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponsePart} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.prototype.clearFileData = function() {
  return this.setFileData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.FunctionResponsePart.prototype.hasFileData = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.FunctionResponseBlob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.FunctionResponseBlob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.toObject = function(includeInstance, msg) {
  var f, obj = {
mimeType: jspb.Message.getFieldWithDefault(msg, 1, ""),
data: msg.getData_asB64(),
displayName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponseBlob}
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.FunctionResponseBlob;
  return proto.alis.adk.sessions.v1.FunctionResponseBlob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.FunctionResponseBlob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponseBlob}
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMimeType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDisplayName(value);
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
proto.alis.adk.sessions.v1.FunctionResponseBlob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.FunctionResponseBlob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.FunctionResponseBlob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMimeType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string mime_type = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponseBlob} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponseBlob} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string display_name = 4;
 * @return {string}
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponseBlob} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponseBlob.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.FunctionResponseFileData.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.FunctionResponseFileData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.FunctionResponseFileData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FunctionResponseFileData.toObject = function(includeInstance, msg) {
  var f, obj = {
mimeType: jspb.Message.getFieldWithDefault(msg, 1, ""),
fileUri: jspb.Message.getFieldWithDefault(msg, 2, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponseFileData}
 */
proto.alis.adk.sessions.v1.FunctionResponseFileData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.FunctionResponseFileData;
  return proto.alis.adk.sessions.v1.FunctionResponseFileData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.FunctionResponseFileData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.FunctionResponseFileData}
 */
proto.alis.adk.sessions.v1.FunctionResponseFileData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMimeType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFileUri(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDisplayName(value);
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
proto.alis.adk.sessions.v1.FunctionResponseFileData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.FunctionResponseFileData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.FunctionResponseFileData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.FunctionResponseFileData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMimeType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFileUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string mime_type = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.FunctionResponseFileData.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponseFileData} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponseFileData.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string file_uri = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.FunctionResponseFileData.prototype.getFileUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponseFileData} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponseFileData.prototype.setFileUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.alis.adk.sessions.v1.FunctionResponseFileData.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.FunctionResponseFileData} returns this
 */
proto.alis.adk.sessions.v1.FunctionResponseFileData.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.ExecutableCode.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.ExecutableCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.ExecutableCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ExecutableCode.toObject = function(includeInstance, msg) {
  var f, obj = {
language: jspb.Message.getFieldWithDefault(msg, 1, 0),
code: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.ExecutableCode}
 */
proto.alis.adk.sessions.v1.ExecutableCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.ExecutableCode;
  return proto.alis.adk.sessions.v1.ExecutableCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.ExecutableCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.ExecutableCode}
 */
proto.alis.adk.sessions.v1.ExecutableCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.alis.adk.sessions.v1.ExecutableCode.Language} */ (reader.readEnum());
      msg.setLanguage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCode(value);
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
proto.alis.adk.sessions.v1.ExecutableCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.ExecutableCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.ExecutableCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ExecutableCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguage();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.alis.adk.sessions.v1.ExecutableCode.Language = {
  LANGUAGE_UNSPECIFIED: 0,
  PYTHON: 1
};

/**
 * optional Language language = 1;
 * @return {!proto.alis.adk.sessions.v1.ExecutableCode.Language}
 */
proto.alis.adk.sessions.v1.ExecutableCode.prototype.getLanguage = function() {
  return /** @type {!proto.alis.adk.sessions.v1.ExecutableCode.Language} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.alis.adk.sessions.v1.ExecutableCode.Language} value
 * @return {!proto.alis.adk.sessions.v1.ExecutableCode} returns this
 */
proto.alis.adk.sessions.v1.ExecutableCode.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.ExecutableCode.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.ExecutableCode} returns this
 */
proto.alis.adk.sessions.v1.ExecutableCode.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.CodeExecutionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.CodeExecutionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.CodeExecutionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.CodeExecutionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
outcome: jspb.Message.getFieldWithDefault(msg, 1, 0),
output: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.CodeExecutionResult}
 */
proto.alis.adk.sessions.v1.CodeExecutionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.CodeExecutionResult;
  return proto.alis.adk.sessions.v1.CodeExecutionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.CodeExecutionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.CodeExecutionResult}
 */
proto.alis.adk.sessions.v1.CodeExecutionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.alis.adk.sessions.v1.CodeExecutionResult.Outcome} */ (reader.readEnum());
      msg.setOutcome(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOutput(value);
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
proto.alis.adk.sessions.v1.CodeExecutionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.CodeExecutionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.CodeExecutionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.CodeExecutionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutcome();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOutput();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.alis.adk.sessions.v1.CodeExecutionResult.Outcome = {
  OUTCOME_UNSPECIFIED: 0,
  OUTCOME_OK: 1,
  OUTCOME_FAILED: 2,
  OUTCOME_DEADLINE_EXCEEDED: 3
};

/**
 * optional Outcome outcome = 1;
 * @return {!proto.alis.adk.sessions.v1.CodeExecutionResult.Outcome}
 */
proto.alis.adk.sessions.v1.CodeExecutionResult.prototype.getOutcome = function() {
  return /** @type {!proto.alis.adk.sessions.v1.CodeExecutionResult.Outcome} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.alis.adk.sessions.v1.CodeExecutionResult.Outcome} value
 * @return {!proto.alis.adk.sessions.v1.CodeExecutionResult} returns this
 */
proto.alis.adk.sessions.v1.CodeExecutionResult.prototype.setOutcome = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string output = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.CodeExecutionResult.prototype.getOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.CodeExecutionResult} returns this
 */
proto.alis.adk.sessions.v1.CodeExecutionResult.prototype.setOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.GroundingMetadata.repeatedFields_ = [1,3,5,6,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.GroundingMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.GroundingMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
webSearchQueriesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
retrievalQueriesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
searchEntryPoint: (f = msg.getSearchEntryPoint()) && proto.alis.adk.sessions.v1.SearchEntryPoint.toObject(includeInstance, f),
groundingChunksList: jspb.Message.toObjectList(msg.getGroundingChunksList(),
    proto.alis.adk.sessions.v1.GroundingChunk.toObject, includeInstance),
groundingSupportsList: jspb.Message.toObjectList(msg.getGroundingSupportsList(),
    proto.alis.adk.sessions.v1.GroundingSupport.toObject, includeInstance),
retrievalMetadata: (f = msg.getRetrievalMetadata()) && proto.alis.adk.sessions.v1.RetrievalMetadata.toObject(includeInstance, f),
googleMapsWidgetContextToken: jspb.Message.getFieldWithDefault(msg, 8, ""),
sourceFlaggingUrisList: jspb.Message.toObjectList(msg.getSourceFlaggingUrisList(),
    proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.GroundingMetadata;
  return proto.alis.adk.sessions.v1.GroundingMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.GroundingMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addWebSearchQueries(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addRetrievalQueries(value);
      break;
    case 4:
      var value = new proto.alis.adk.sessions.v1.SearchEntryPoint;
      reader.readMessage(value,proto.alis.adk.sessions.v1.SearchEntryPoint.deserializeBinaryFromReader);
      msg.setSearchEntryPoint(value);
      break;
    case 5:
      var value = new proto.alis.adk.sessions.v1.GroundingChunk;
      reader.readMessage(value,proto.alis.adk.sessions.v1.GroundingChunk.deserializeBinaryFromReader);
      msg.addGroundingChunks(value);
      break;
    case 6:
      var value = new proto.alis.adk.sessions.v1.GroundingSupport;
      reader.readMessage(value,proto.alis.adk.sessions.v1.GroundingSupport.deserializeBinaryFromReader);
      msg.addGroundingSupports(value);
      break;
    case 7:
      var value = new proto.alis.adk.sessions.v1.RetrievalMetadata;
      reader.readMessage(value,proto.alis.adk.sessions.v1.RetrievalMetadata.deserializeBinaryFromReader);
      msg.setRetrievalMetadata(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setGoogleMapsWidgetContextToken(value);
      break;
    case 9:
      var value = new proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri;
      reader.readMessage(value,proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.deserializeBinaryFromReader);
      msg.addSourceFlaggingUris(value);
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
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.GroundingMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.GroundingMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebSearchQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getRetrievalQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getSearchEntryPoint();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.adk.sessions.v1.SearchEntryPoint.serializeBinaryToWriter
    );
  }
  f = message.getGroundingChunksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.alis.adk.sessions.v1.GroundingChunk.serializeBinaryToWriter
    );
  }
  f = message.getGroundingSupportsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.alis.adk.sessions.v1.GroundingSupport.serializeBinaryToWriter
    );
  }
  f = message.getRetrievalMetadata();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.alis.adk.sessions.v1.RetrievalMetadata.serializeBinaryToWriter
    );
  }
  f = message.getGoogleMapsWidgetContextToken();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSourceFlaggingUrisList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.toObject = function(includeInstance, msg) {
  var f, obj = {
sourceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
flagContentUri: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri;
  return proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSourceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFlagContentUri(value);
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
proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFlagContentUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string source_id = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.prototype.getSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.prototype.setSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string flag_content_uri = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.prototype.getFlagContentUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri.prototype.setFlagContentUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string web_search_queries = 1;
 * @return {!Array<string>}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.getWebSearchQueriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.setWebSearchQueriesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.addWebSearchQueries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.clearWebSearchQueriesList = function() {
  return this.setWebSearchQueriesList([]);
};


/**
 * repeated string retrieval_queries = 3;
 * @return {!Array<string>}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.getRetrievalQueriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.setRetrievalQueriesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.addRetrievalQueries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.clearRetrievalQueriesList = function() {
  return this.setRetrievalQueriesList([]);
};


/**
 * optional SearchEntryPoint search_entry_point = 4;
 * @return {?proto.alis.adk.sessions.v1.SearchEntryPoint}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.getSearchEntryPoint = function() {
  return /** @type{?proto.alis.adk.sessions.v1.SearchEntryPoint} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.SearchEntryPoint, 4));
};


/**
 * @param {?proto.alis.adk.sessions.v1.SearchEntryPoint|undefined} value
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
*/
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.setSearchEntryPoint = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.clearSearchEntryPoint = function() {
  return this.setSearchEntryPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.hasSearchEntryPoint = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated GroundingChunk grounding_chunks = 5;
 * @return {!Array<!proto.alis.adk.sessions.v1.GroundingChunk>}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.getGroundingChunksList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.GroundingChunk>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.GroundingChunk, 5));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.GroundingChunk>} value
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
*/
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.setGroundingChunksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.addGroundingChunks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.alis.adk.sessions.v1.GroundingChunk, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.clearGroundingChunksList = function() {
  return this.setGroundingChunksList([]);
};


/**
 * repeated GroundingSupport grounding_supports = 6;
 * @return {!Array<!proto.alis.adk.sessions.v1.GroundingSupport>}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.getGroundingSupportsList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.GroundingSupport>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.GroundingSupport, 6));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.GroundingSupport>} value
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
*/
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.setGroundingSupportsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.GroundingSupport=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.GroundingSupport}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.addGroundingSupports = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.alis.adk.sessions.v1.GroundingSupport, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.clearGroundingSupportsList = function() {
  return this.setGroundingSupportsList([]);
};


/**
 * optional RetrievalMetadata retrieval_metadata = 7;
 * @return {?proto.alis.adk.sessions.v1.RetrievalMetadata}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.getRetrievalMetadata = function() {
  return /** @type{?proto.alis.adk.sessions.v1.RetrievalMetadata} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.RetrievalMetadata, 7));
};


/**
 * @param {?proto.alis.adk.sessions.v1.RetrievalMetadata|undefined} value
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
*/
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.setRetrievalMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.clearRetrievalMetadata = function() {
  return this.setRetrievalMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.hasRetrievalMetadata = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string google_maps_widget_context_token = 8;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.getGoogleMapsWidgetContextToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.setGoogleMapsWidgetContextToken = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated SourceFlaggingUri source_flagging_uris = 9;
 * @return {!Array<!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri>}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.getSourceFlaggingUrisList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri, 9));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri>} value
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
*/
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.setSourceFlaggingUrisList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri}
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.addSourceFlaggingUris = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.alis.adk.sessions.v1.GroundingMetadata.SourceFlaggingUri, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.GroundingMetadata} returns this
 */
proto.alis.adk.sessions.v1.GroundingMetadata.prototype.clearSourceFlaggingUrisList = function() {
  return this.setSourceFlaggingUrisList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.alis.adk.sessions.v1.GroundingChunk.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.alis.adk.sessions.v1.GroundingChunk.ChunkTypeCase = {
  CHUNK_TYPE_NOT_SET: 0,
  WEB: 1,
  RETRIEVED_CONTEXT: 2,
  MAPS: 3
};

/**
 * @return {proto.alis.adk.sessions.v1.GroundingChunk.ChunkTypeCase}
 */
proto.alis.adk.sessions.v1.GroundingChunk.prototype.getChunkTypeCase = function() {
  return /** @type {proto.alis.adk.sessions.v1.GroundingChunk.ChunkTypeCase} */(jspb.Message.computeOneofCase(this, proto.alis.adk.sessions.v1.GroundingChunk.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.GroundingChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.GroundingChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
web: (f = msg.getWeb()) && proto.alis.adk.sessions.v1.GroundingChunk.Web.toObject(includeInstance, f),
retrievedContext: (f = msg.getRetrievedContext()) && proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.toObject(includeInstance, f),
maps: (f = msg.getMaps()) && proto.alis.adk.sessions.v1.GroundingChunk.Maps.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk}
 */
proto.alis.adk.sessions.v1.GroundingChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.GroundingChunk;
  return proto.alis.adk.sessions.v1.GroundingChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk}
 */
proto.alis.adk.sessions.v1.GroundingChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.GroundingChunk.Web;
      reader.readMessage(value,proto.alis.adk.sessions.v1.GroundingChunk.Web.deserializeBinaryFromReader);
      msg.setWeb(value);
      break;
    case 2:
      var value = new proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext;
      reader.readMessage(value,proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.deserializeBinaryFromReader);
      msg.setRetrievedContext(value);
      break;
    case 3:
      var value = new proto.alis.adk.sessions.v1.GroundingChunk.Maps;
      reader.readMessage(value,proto.alis.adk.sessions.v1.GroundingChunk.Maps.deserializeBinaryFromReader);
      msg.setMaps(value);
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
proto.alis.adk.sessions.v1.GroundingChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.GroundingChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWeb();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.GroundingChunk.Web.serializeBinaryToWriter
    );
  }
  f = message.getRetrievedContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.serializeBinaryToWriter
    );
  }
  f = message.getMaps();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.adk.sessions.v1.GroundingChunk.Maps.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Web.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.GroundingChunk.Web.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Web} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.Web.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
uri: jspb.Message.getFieldWithDefault(msg, 2, ""),
title: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Web}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Web.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.GroundingChunk.Web;
  return proto.alis.adk.sessions.v1.GroundingChunk.Web.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Web} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Web}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Web.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUri(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
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
proto.alis.adk.sessions.v1.GroundingChunk.Web.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.GroundingChunk.Web.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Web} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.Web.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Web.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Web} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Web.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Web.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Web} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Web.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Web.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Web} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Web.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.oneofGroups_ = [[4]];

/**
 * @enum {number}
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.ContextDetailsCase = {
  CONTEXT_DETAILS_NOT_SET: 0,
  RAG_CHUNK: 4
};

/**
 * @return {proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.ContextDetailsCase}
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.getContextDetailsCase = function() {
  return /** @type {proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.ContextDetailsCase} */(jspb.Message.computeOneofCase(this, proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.toObject = function(includeInstance, msg) {
  var f, obj = {
uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
title: jspb.Message.getFieldWithDefault(msg, 2, ""),
text: jspb.Message.getFieldWithDefault(msg, 3, ""),
ragChunk: (f = msg.getRagChunk()) && proto.alis.adk.sessions.v1.RagChunk.toObject(includeInstance, f),
documentName: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext}
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext;
  return proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext}
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setText(value);
      break;
    case 4:
      var value = new proto.alis.adk.sessions.v1.RagChunk;
      reader.readMessage(value,proto.alis.adk.sessions.v1.RagChunk.deserializeBinaryFromReader);
      msg.setRagChunk(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDocumentName(value);
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
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRagChunk();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.adk.sessions.v1.RagChunk.serializeBinaryToWriter
    );
  }
  f = message.getDocumentName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text = 3;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RagChunk rag_chunk = 4;
 * @return {?proto.alis.adk.sessions.v1.RagChunk}
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.getRagChunk = function() {
  return /** @type{?proto.alis.adk.sessions.v1.RagChunk} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.RagChunk, 4));
};


/**
 * @param {?proto.alis.adk.sessions.v1.RagChunk|undefined} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext} returns this
*/
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.setRagChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.clearRagChunk = function() {
  return this.setRagChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.hasRagChunk = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string document_name = 6;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.getDocumentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext.prototype.setDocumentName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.GroundingChunk.Maps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Maps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.toObject = function(includeInstance, msg) {
  var f, obj = {
uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
title: jspb.Message.getFieldWithDefault(msg, 2, ""),
text: jspb.Message.getFieldWithDefault(msg, 3, ""),
placeId: jspb.Message.getFieldWithDefault(msg, 4, ""),
placeAnswerSources: (f = msg.getPlaceAnswerSources()) && proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.GroundingChunk.Maps;
  return proto.alis.adk.sessions.v1.GroundingChunk.Maps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Maps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setText(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPlaceId(value);
      break;
    case 5:
      var value = new proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources;
      reader.readMessage(value,proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.deserializeBinaryFromReader);
      msg.setPlaceAnswerSources(value);
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
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.GroundingChunk.Maps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Maps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPlaceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPlaceAnswerSources();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.toObject = function(includeInstance, msg) {
  var f, obj = {
reviewSnippetsList: jspb.Message.toObjectList(msg.getReviewSnippetsList(),
    proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.toObject, includeInstance),
flagContentUri: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources;
  return proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet;
      reader.readMessage(value,proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.deserializeBinaryFromReader);
      msg.addReviewSnippets(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFlagContentUri(value);
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
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReviewSnippetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.serializeBinaryToWriter
    );
  }
  f = message.getFlagContentUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.toObject = function(includeInstance, msg) {
  var f, obj = {
reviewId: jspb.Message.getFieldWithDefault(msg, 1, ""),
googleMapsUri: jspb.Message.getFieldWithDefault(msg, 2, ""),
title: jspb.Message.getFieldWithDefault(msg, 3, ""),
review: jspb.Message.getFieldWithDefault(msg, 4, ""),
flagContentUri: jspb.Message.getFieldWithDefault(msg, 5, ""),
relativePublishTimeDescription: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet;
  return proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReviewId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setGoogleMapsUri(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReview(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFlagContentUri(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRelativePublishTimeDescription(value);
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
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReviewId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGoogleMapsUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReview();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFlagContentUri();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRelativePublishTimeDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string review_id = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.getReviewId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.setReviewId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string google_maps_uri = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.getGoogleMapsUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.setGoogleMapsUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string review = 4;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.getReview = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.setReview = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string flag_content_uri = 5;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.getFlagContentUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.setFlagContentUri = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string relative_publish_time_description = 6;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.getRelativePublishTimeDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.prototype.setRelativePublishTimeDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated ReviewSnippet review_snippets = 1;
 * @return {!Array<!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet>}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.prototype.getReviewSnippetsList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet, 1));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet>} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources} returns this
*/
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.prototype.setReviewSnippetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.prototype.addReviewSnippets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.prototype.clearReviewSnippetsList = function() {
  return this.setReviewSnippetsList([]);
};


/**
 * optional string flag_content_uri = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.prototype.getFlagContentUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources.prototype.setFlagContentUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text = 3;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string place_id = 4;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.getPlaceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.setPlaceId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional PlaceAnswerSources place_answer_sources = 5;
 * @return {?proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.getPlaceAnswerSources = function() {
  return /** @type{?proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources, 5));
};


/**
 * @param {?proto.alis.adk.sessions.v1.GroundingChunk.Maps.PlaceAnswerSources|undefined} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps} returns this
*/
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.setPlaceAnswerSources = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk.Maps} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.clearPlaceAnswerSources = function() {
  return this.setPlaceAnswerSources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.GroundingChunk.Maps.prototype.hasPlaceAnswerSources = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Web web = 1;
 * @return {?proto.alis.adk.sessions.v1.GroundingChunk.Web}
 */
proto.alis.adk.sessions.v1.GroundingChunk.prototype.getWeb = function() {
  return /** @type{?proto.alis.adk.sessions.v1.GroundingChunk.Web} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.GroundingChunk.Web, 1));
};


/**
 * @param {?proto.alis.adk.sessions.v1.GroundingChunk.Web|undefined} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk} returns this
*/
proto.alis.adk.sessions.v1.GroundingChunk.prototype.setWeb = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.alis.adk.sessions.v1.GroundingChunk.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.prototype.clearWeb = function() {
  return this.setWeb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.GroundingChunk.prototype.hasWeb = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RetrievedContext retrieved_context = 2;
 * @return {?proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext}
 */
proto.alis.adk.sessions.v1.GroundingChunk.prototype.getRetrievedContext = function() {
  return /** @type{?proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext, 2));
};


/**
 * @param {?proto.alis.adk.sessions.v1.GroundingChunk.RetrievedContext|undefined} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk} returns this
*/
proto.alis.adk.sessions.v1.GroundingChunk.prototype.setRetrievedContext = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.adk.sessions.v1.GroundingChunk.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.prototype.clearRetrievedContext = function() {
  return this.setRetrievedContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.GroundingChunk.prototype.hasRetrievedContext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Maps maps = 3;
 * @return {?proto.alis.adk.sessions.v1.GroundingChunk.Maps}
 */
proto.alis.adk.sessions.v1.GroundingChunk.prototype.getMaps = function() {
  return /** @type{?proto.alis.adk.sessions.v1.GroundingChunk.Maps} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.GroundingChunk.Maps, 3));
};


/**
 * @param {?proto.alis.adk.sessions.v1.GroundingChunk.Maps|undefined} value
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk} returns this
*/
proto.alis.adk.sessions.v1.GroundingChunk.prototype.setMaps = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.alis.adk.sessions.v1.GroundingChunk.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.GroundingChunk} returns this
 */
proto.alis.adk.sessions.v1.GroundingChunk.prototype.clearMaps = function() {
  return this.setMaps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.GroundingChunk.prototype.hasMaps = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.GroundingSupport.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.GroundingSupport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.GroundingSupport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingSupport.toObject = function(includeInstance, msg) {
  var f, obj = {
segment: (f = msg.getSegment()) && proto.alis.adk.sessions.v1.Segment.toObject(includeInstance, f),
groundingChunkIndicesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
confidenceScoresList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.GroundingSupport}
 */
proto.alis.adk.sessions.v1.GroundingSupport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.GroundingSupport;
  return proto.alis.adk.sessions.v1.GroundingSupport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.GroundingSupport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.GroundingSupport}
 */
proto.alis.adk.sessions.v1.GroundingSupport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.Segment;
      reader.readMessage(value,proto.alis.adk.sessions.v1.Segment.deserializeBinaryFromReader);
      msg.setSegment(value);
      break;
    case 2:
      reader.readPackableInt32Into(msg.getGroundingChunkIndicesList());
      break;
    case 3:
      reader.readPackableFloatInto(msg.getConfidenceScoresList());
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
proto.alis.adk.sessions.v1.GroundingSupport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.GroundingSupport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.GroundingSupport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GroundingSupport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.Segment.serializeBinaryToWriter
    );
  }
  f = message.getGroundingChunkIndicesList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = message.getConfidenceScoresList();
  if (f.length > 0) {
    writer.writePackedFloat(
      3,
      f
    );
  }
};


/**
 * optional Segment segment = 1;
 * @return {?proto.alis.adk.sessions.v1.Segment}
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.getSegment = function() {
  return /** @type{?proto.alis.adk.sessions.v1.Segment} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.Segment, 1));
};


/**
 * @param {?proto.alis.adk.sessions.v1.Segment|undefined} value
 * @return {!proto.alis.adk.sessions.v1.GroundingSupport} returns this
*/
proto.alis.adk.sessions.v1.GroundingSupport.prototype.setSegment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.GroundingSupport} returns this
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.clearSegment = function() {
  return this.setSegment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.hasSegment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int32 grounding_chunk_indices = 2;
 * @return {!Array<number>}
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.getGroundingChunkIndicesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.alis.adk.sessions.v1.GroundingSupport} returns this
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.setGroundingChunkIndicesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.GroundingSupport} returns this
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.addGroundingChunkIndices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.GroundingSupport} returns this
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.clearGroundingChunkIndicesList = function() {
  return this.setGroundingChunkIndicesList([]);
};


/**
 * repeated float confidence_scores = 3;
 * @return {!Array<number>}
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.getConfidenceScoresList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.alis.adk.sessions.v1.GroundingSupport} returns this
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.setConfidenceScoresList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.GroundingSupport} returns this
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.addConfidenceScores = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.GroundingSupport} returns this
 */
proto.alis.adk.sessions.v1.GroundingSupport.prototype.clearConfidenceScoresList = function() {
  return this.setConfidenceScoresList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.Segment.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.Segment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.Segment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.Segment.toObject = function(includeInstance, msg) {
  var f, obj = {
partIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
startIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
endIndex: jspb.Message.getFieldWithDefault(msg, 3, 0),
text: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.Segment}
 */
proto.alis.adk.sessions.v1.Segment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.Segment;
  return proto.alis.adk.sessions.v1.Segment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.Segment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.Segment}
 */
proto.alis.adk.sessions.v1.Segment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPartIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndIndex(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
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
proto.alis.adk.sessions.v1.Segment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.Segment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.Segment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.Segment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStartIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEndIndex();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 part_index = 1;
 * @return {number}
 */
proto.alis.adk.sessions.v1.Segment.prototype.getPartIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.Segment} returns this
 */
proto.alis.adk.sessions.v1.Segment.prototype.setPartIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 start_index = 2;
 * @return {number}
 */
proto.alis.adk.sessions.v1.Segment.prototype.getStartIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.Segment} returns this
 */
proto.alis.adk.sessions.v1.Segment.prototype.setStartIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 end_index = 3;
 * @return {number}
 */
proto.alis.adk.sessions.v1.Segment.prototype.getEndIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.Segment} returns this
 */
proto.alis.adk.sessions.v1.Segment.prototype.setEndIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string text = 4;
 * @return {string}
 */
proto.alis.adk.sessions.v1.Segment.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.Segment} returns this
 */
proto.alis.adk.sessions.v1.Segment.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.SearchEntryPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.SearchEntryPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.SearchEntryPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.SearchEntryPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
renderedContent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sdkBlob: msg.getSdkBlob_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.SearchEntryPoint}
 */
proto.alis.adk.sessions.v1.SearchEntryPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.SearchEntryPoint;
  return proto.alis.adk.sessions.v1.SearchEntryPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.SearchEntryPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.SearchEntryPoint}
 */
proto.alis.adk.sessions.v1.SearchEntryPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRenderedContent(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSdkBlob(value);
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
proto.alis.adk.sessions.v1.SearchEntryPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.SearchEntryPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.SearchEntryPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.SearchEntryPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRenderedContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSdkBlob_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string rendered_content = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.SearchEntryPoint.prototype.getRenderedContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.SearchEntryPoint} returns this
 */
proto.alis.adk.sessions.v1.SearchEntryPoint.prototype.setRenderedContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes sdk_blob = 2;
 * @return {!(string|Uint8Array)}
 */
proto.alis.adk.sessions.v1.SearchEntryPoint.prototype.getSdkBlob = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes sdk_blob = 2;
 * This is a type-conversion wrapper around `getSdkBlob()`
 * @return {string}
 */
proto.alis.adk.sessions.v1.SearchEntryPoint.prototype.getSdkBlob_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSdkBlob()));
};


/**
 * optional bytes sdk_blob = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSdkBlob()`
 * @return {!Uint8Array}
 */
proto.alis.adk.sessions.v1.SearchEntryPoint.prototype.getSdkBlob_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSdkBlob()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.alis.adk.sessions.v1.SearchEntryPoint} returns this
 */
proto.alis.adk.sessions.v1.SearchEntryPoint.prototype.setSdkBlob = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.RetrievalMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.RetrievalMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.RetrievalMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.RetrievalMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
googleSearchDynamicRetrievalScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.RetrievalMetadata}
 */
proto.alis.adk.sessions.v1.RetrievalMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.RetrievalMetadata;
  return proto.alis.adk.sessions.v1.RetrievalMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.RetrievalMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.RetrievalMetadata}
 */
proto.alis.adk.sessions.v1.RetrievalMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGoogleSearchDynamicRetrievalScore(value);
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
proto.alis.adk.sessions.v1.RetrievalMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.RetrievalMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.RetrievalMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.RetrievalMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGoogleSearchDynamicRetrievalScore();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float google_search_dynamic_retrieval_score = 2;
 * @return {number}
 */
proto.alis.adk.sessions.v1.RetrievalMetadata.prototype.getGoogleSearchDynamicRetrievalScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.RetrievalMetadata} returns this
 */
proto.alis.adk.sessions.v1.RetrievalMetadata.prototype.setGoogleSearchDynamicRetrievalScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.RagChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.RagChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.RagChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.RagChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
pageSpan: (f = msg.getPageSpan()) && proto.alis.adk.sessions.v1.RagChunk.PageSpan.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.RagChunk}
 */
proto.alis.adk.sessions.v1.RagChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.RagChunk;
  return proto.alis.adk.sessions.v1.RagChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.RagChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.RagChunk}
 */
proto.alis.adk.sessions.v1.RagChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setText(value);
      break;
    case 2:
      var value = new proto.alis.adk.sessions.v1.RagChunk.PageSpan;
      reader.readMessage(value,proto.alis.adk.sessions.v1.RagChunk.PageSpan.deserializeBinaryFromReader);
      msg.setPageSpan(value);
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
proto.alis.adk.sessions.v1.RagChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.RagChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.RagChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.RagChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSpan();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.adk.sessions.v1.RagChunk.PageSpan.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.RagChunk.PageSpan.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.RagChunk.PageSpan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.RagChunk.PageSpan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.RagChunk.PageSpan.toObject = function(includeInstance, msg) {
  var f, obj = {
firstPage: jspb.Message.getFieldWithDefault(msg, 1, 0),
lastPage: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.RagChunk.PageSpan}
 */
proto.alis.adk.sessions.v1.RagChunk.PageSpan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.RagChunk.PageSpan;
  return proto.alis.adk.sessions.v1.RagChunk.PageSpan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.RagChunk.PageSpan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.RagChunk.PageSpan}
 */
proto.alis.adk.sessions.v1.RagChunk.PageSpan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFirstPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLastPage(value);
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
proto.alis.adk.sessions.v1.RagChunk.PageSpan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.RagChunk.PageSpan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.RagChunk.PageSpan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.RagChunk.PageSpan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstPage();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLastPage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 first_page = 1;
 * @return {number}
 */
proto.alis.adk.sessions.v1.RagChunk.PageSpan.prototype.getFirstPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.RagChunk.PageSpan} returns this
 */
proto.alis.adk.sessions.v1.RagChunk.PageSpan.prototype.setFirstPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 last_page = 2;
 * @return {number}
 */
proto.alis.adk.sessions.v1.RagChunk.PageSpan.prototype.getLastPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.RagChunk.PageSpan} returns this
 */
proto.alis.adk.sessions.v1.RagChunk.PageSpan.prototype.setLastPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.RagChunk.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.RagChunk} returns this
 */
proto.alis.adk.sessions.v1.RagChunk.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PageSpan page_span = 2;
 * @return {?proto.alis.adk.sessions.v1.RagChunk.PageSpan}
 */
proto.alis.adk.sessions.v1.RagChunk.prototype.getPageSpan = function() {
  return /** @type{?proto.alis.adk.sessions.v1.RagChunk.PageSpan} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.RagChunk.PageSpan, 2));
};


/**
 * @param {?proto.alis.adk.sessions.v1.RagChunk.PageSpan|undefined} value
 * @return {!proto.alis.adk.sessions.v1.RagChunk} returns this
*/
proto.alis.adk.sessions.v1.RagChunk.prototype.setPageSpan = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.RagChunk} returns this
 */
proto.alis.adk.sessions.v1.RagChunk.prototype.clearPageSpan = function() {
  return this.setPageSpan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.RagChunk.prototype.hasPageSpan = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.UsageMetadata.repeatedFields_ = [1,4,6,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.UsageMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.UsageMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.UsageMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
cacheTokensDetailsList: jspb.Message.toObjectList(msg.getCacheTokensDetailsList(),
    proto.alis.adk.sessions.v1.ModalityTokenCount.toObject, includeInstance),
cachedContentTokenCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
candidatesTokenCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
candidatesTokensDetailsList: jspb.Message.toObjectList(msg.getCandidatesTokensDetailsList(),
    proto.alis.adk.sessions.v1.ModalityTokenCount.toObject, includeInstance),
promptTokenCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
promptTokensDetailsList: jspb.Message.toObjectList(msg.getPromptTokensDetailsList(),
    proto.alis.adk.sessions.v1.ModalityTokenCount.toObject, includeInstance),
thoughtsTokenCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
toolUsePromptTokenCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
toolUsePromptTokensDetailsList: jspb.Message.toObjectList(msg.getToolUsePromptTokensDetailsList(),
    proto.alis.adk.sessions.v1.ModalityTokenCount.toObject, includeInstance),
totalTokenCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
trafficType: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata}
 */
proto.alis.adk.sessions.v1.UsageMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.UsageMetadata;
  return proto.alis.adk.sessions.v1.UsageMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.UsageMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata}
 */
proto.alis.adk.sessions.v1.UsageMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.ModalityTokenCount;
      reader.readMessage(value,proto.alis.adk.sessions.v1.ModalityTokenCount.deserializeBinaryFromReader);
      msg.addCacheTokensDetails(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCachedContentTokenCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCandidatesTokenCount(value);
      break;
    case 4:
      var value = new proto.alis.adk.sessions.v1.ModalityTokenCount;
      reader.readMessage(value,proto.alis.adk.sessions.v1.ModalityTokenCount.deserializeBinaryFromReader);
      msg.addCandidatesTokensDetails(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPromptTokenCount(value);
      break;
    case 6:
      var value = new proto.alis.adk.sessions.v1.ModalityTokenCount;
      reader.readMessage(value,proto.alis.adk.sessions.v1.ModalityTokenCount.deserializeBinaryFromReader);
      msg.addPromptTokensDetails(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setThoughtsTokenCount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setToolUsePromptTokenCount(value);
      break;
    case 9:
      var value = new proto.alis.adk.sessions.v1.ModalityTokenCount;
      reader.readMessage(value,proto.alis.adk.sessions.v1.ModalityTokenCount.deserializeBinaryFromReader);
      msg.addToolUsePromptTokensDetails(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalTokenCount(value);
      break;
    case 11:
      var value = /** @type {!proto.alis.adk.sessions.v1.TrafficType} */ (reader.readEnum());
      msg.setTrafficType(value);
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
proto.alis.adk.sessions.v1.UsageMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.UsageMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.UsageMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.UsageMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCacheTokensDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.ModalityTokenCount.serializeBinaryToWriter
    );
  }
  f = message.getCachedContentTokenCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCandidatesTokenCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCandidatesTokensDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.alis.adk.sessions.v1.ModalityTokenCount.serializeBinaryToWriter
    );
  }
  f = message.getPromptTokenCount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPromptTokensDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.alis.adk.sessions.v1.ModalityTokenCount.serializeBinaryToWriter
    );
  }
  f = message.getThoughtsTokenCount();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getToolUsePromptTokenCount();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getToolUsePromptTokensDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.alis.adk.sessions.v1.ModalityTokenCount.serializeBinaryToWriter
    );
  }
  f = message.getTotalTokenCount();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getTrafficType();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * repeated ModalityTokenCount cache_tokens_details = 1;
 * @return {!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.getCacheTokensDetailsList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.ModalityTokenCount, 1));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>} value
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
*/
proto.alis.adk.sessions.v1.UsageMetadata.prototype.setCacheTokensDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.ModalityTokenCount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.ModalityTokenCount}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.addCacheTokensDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.alis.adk.sessions.v1.ModalityTokenCount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.clearCacheTokensDetailsList = function() {
  return this.setCacheTokensDetailsList([]);
};


/**
 * optional int32 cached_content_token_count = 2;
 * @return {number}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.getCachedContentTokenCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.setCachedContentTokenCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 candidates_token_count = 3;
 * @return {number}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.getCandidatesTokenCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.setCandidatesTokenCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated ModalityTokenCount candidates_tokens_details = 4;
 * @return {!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.getCandidatesTokensDetailsList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.ModalityTokenCount, 4));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>} value
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
*/
proto.alis.adk.sessions.v1.UsageMetadata.prototype.setCandidatesTokensDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.ModalityTokenCount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.ModalityTokenCount}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.addCandidatesTokensDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.alis.adk.sessions.v1.ModalityTokenCount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.clearCandidatesTokensDetailsList = function() {
  return this.setCandidatesTokensDetailsList([]);
};


/**
 * optional int32 prompt_token_count = 5;
 * @return {number}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.getPromptTokenCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.setPromptTokenCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated ModalityTokenCount prompt_tokens_details = 6;
 * @return {!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.getPromptTokensDetailsList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.ModalityTokenCount, 6));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>} value
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
*/
proto.alis.adk.sessions.v1.UsageMetadata.prototype.setPromptTokensDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.ModalityTokenCount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.ModalityTokenCount}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.addPromptTokensDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.alis.adk.sessions.v1.ModalityTokenCount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.clearPromptTokensDetailsList = function() {
  return this.setPromptTokensDetailsList([]);
};


/**
 * optional int32 thoughts_token_count = 7;
 * @return {number}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.getThoughtsTokenCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.setThoughtsTokenCount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 tool_use_prompt_token_count = 8;
 * @return {number}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.getToolUsePromptTokenCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.setToolUsePromptTokenCount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated ModalityTokenCount tool_use_prompt_tokens_details = 9;
 * @return {!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.getToolUsePromptTokensDetailsList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.ModalityTokenCount, 9));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.ModalityTokenCount>} value
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
*/
proto.alis.adk.sessions.v1.UsageMetadata.prototype.setToolUsePromptTokensDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.ModalityTokenCount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.ModalityTokenCount}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.addToolUsePromptTokensDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.alis.adk.sessions.v1.ModalityTokenCount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.clearToolUsePromptTokensDetailsList = function() {
  return this.setToolUsePromptTokensDetailsList([]);
};


/**
 * optional int32 total_token_count = 10;
 * @return {number}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.getTotalTokenCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.setTotalTokenCount = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional TrafficType traffic_type = 11;
 * @return {!proto.alis.adk.sessions.v1.TrafficType}
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.getTrafficType = function() {
  return /** @type {!proto.alis.adk.sessions.v1.TrafficType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.alis.adk.sessions.v1.TrafficType} value
 * @return {!proto.alis.adk.sessions.v1.UsageMetadata} returns this
 */
proto.alis.adk.sessions.v1.UsageMetadata.prototype.setTrafficType = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.ModalityTokenCount.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.ModalityTokenCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.ModalityTokenCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ModalityTokenCount.toObject = function(includeInstance, msg) {
  var f, obj = {
modality: jspb.Message.getFieldWithDefault(msg, 1, 0),
tokenCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.ModalityTokenCount}
 */
proto.alis.adk.sessions.v1.ModalityTokenCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.ModalityTokenCount;
  return proto.alis.adk.sessions.v1.ModalityTokenCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.ModalityTokenCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.ModalityTokenCount}
 */
proto.alis.adk.sessions.v1.ModalityTokenCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.alis.adk.sessions.v1.MediaModality} */ (reader.readEnum());
      msg.setModality(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTokenCount(value);
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
proto.alis.adk.sessions.v1.ModalityTokenCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.ModalityTokenCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.ModalityTokenCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ModalityTokenCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModality();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTokenCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional MediaModality modality = 1;
 * @return {!proto.alis.adk.sessions.v1.MediaModality}
 */
proto.alis.adk.sessions.v1.ModalityTokenCount.prototype.getModality = function() {
  return /** @type {!proto.alis.adk.sessions.v1.MediaModality} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.alis.adk.sessions.v1.MediaModality} value
 * @return {!proto.alis.adk.sessions.v1.ModalityTokenCount} returns this
 */
proto.alis.adk.sessions.v1.ModalityTokenCount.prototype.setModality = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 token_count = 2;
 * @return {number}
 */
proto.alis.adk.sessions.v1.ModalityTokenCount.prototype.getTokenCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.ModalityTokenCount} returns this
 */
proto.alis.adk.sessions.v1.ModalityTokenCount.prototype.setTokenCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.CitationMetadata.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.CitationMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.CitationMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.CitationMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.CitationMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
citationsList: jspb.Message.toObjectList(msg.getCitationsList(),
    proto.alis.adk.sessions.v1.CitationMetadata.Citation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata}
 */
proto.alis.adk.sessions.v1.CitationMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.CitationMetadata;
  return proto.alis.adk.sessions.v1.CitationMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.CitationMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata}
 */
proto.alis.adk.sessions.v1.CitationMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.CitationMetadata.Citation;
      reader.readMessage(value,proto.alis.adk.sessions.v1.CitationMetadata.Citation.deserializeBinaryFromReader);
      msg.addCitations(value);
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
proto.alis.adk.sessions.v1.CitationMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.CitationMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.CitationMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.CitationMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCitationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.CitationMetadata.Citation.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.CitationMetadata.Citation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.CitationMetadata.Citation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.toObject = function(includeInstance, msg) {
  var f, obj = {
endIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
license: jspb.Message.getFieldWithDefault(msg, 2, ""),
publicationDate: (f = msg.getPublicationDate()) && google_type_date_pb.Date.toObject(includeInstance, f),
startIndex: jspb.Message.getFieldWithDefault(msg, 4, 0),
title: jspb.Message.getFieldWithDefault(msg, 5, ""),
uri: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata.Citation}
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.CitationMetadata.Citation;
  return proto.alis.adk.sessions.v1.CitationMetadata.Citation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.CitationMetadata.Citation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata.Citation}
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndIndex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLicense(value);
      break;
    case 3:
      var value = new google_type_date_pb.Date;
      reader.readMessage(value,google_type_date_pb.Date.deserializeBinaryFromReader);
      msg.setPublicationDate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartIndex(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUri(value);
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
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.CitationMetadata.Citation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.CitationMetadata.Citation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLicense();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublicationDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_type_date_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getStartIndex();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int32 end_index = 1;
 * @return {number}
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.getEndIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata.Citation} returns this
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.setEndIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string license = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.getLicense = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata.Citation} returns this
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.setLicense = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.type.Date publication_date = 3;
 * @return {?proto.google.type.Date}
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.getPublicationDate = function() {
  return /** @type{?proto.google.type.Date} */ (
    jspb.Message.getWrapperField(this, google_type_date_pb.Date, 3));
};


/**
 * @param {?proto.google.type.Date|undefined} value
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata.Citation} returns this
*/
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.setPublicationDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata.Citation} returns this
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.clearPublicationDate = function() {
  return this.setPublicationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.hasPublicationDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 start_index = 4;
 * @return {number}
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.getStartIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata.Citation} returns this
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.setStartIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata.Citation} returns this
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string uri = 6;
 * @return {string}
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata.Citation} returns this
 */
proto.alis.adk.sessions.v1.CitationMetadata.Citation.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Citation citations = 1;
 * @return {!Array<!proto.alis.adk.sessions.v1.CitationMetadata.Citation>}
 */
proto.alis.adk.sessions.v1.CitationMetadata.prototype.getCitationsList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.CitationMetadata.Citation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.CitationMetadata.Citation, 1));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.CitationMetadata.Citation>} value
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata} returns this
*/
proto.alis.adk.sessions.v1.CitationMetadata.prototype.setCitationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.CitationMetadata.Citation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata.Citation}
 */
proto.alis.adk.sessions.v1.CitationMetadata.prototype.addCitations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.alis.adk.sessions.v1.CitationMetadata.Citation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.CitationMetadata} returns this
 */
proto.alis.adk.sessions.v1.CitationMetadata.prototype.clearCitationsList = function() {
  return this.setCitationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.ToolConfirmation.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.ToolConfirmation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.ToolConfirmation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ToolConfirmation.toObject = function(includeInstance, msg) {
  var f, obj = {
hint: jspb.Message.getFieldWithDefault(msg, 1, ""),
confirmed: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
payload: (f = msg.getPayload()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.ToolConfirmation}
 */
proto.alis.adk.sessions.v1.ToolConfirmation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.ToolConfirmation;
  return proto.alis.adk.sessions.v1.ToolConfirmation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.ToolConfirmation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.ToolConfirmation}
 */
proto.alis.adk.sessions.v1.ToolConfirmation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setHint(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConfirmed(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setPayload(value);
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
proto.alis.adk.sessions.v1.ToolConfirmation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.ToolConfirmation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.ToolConfirmation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ToolConfirmation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHint();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfirmed();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string hint = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.ToolConfirmation.prototype.getHint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.ToolConfirmation} returns this
 */
proto.alis.adk.sessions.v1.ToolConfirmation.prototype.setHint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool confirmed = 2;
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.ToolConfirmation.prototype.getConfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.adk.sessions.v1.ToolConfirmation} returns this
 */
proto.alis.adk.sessions.v1.ToolConfirmation.prototype.setConfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional google.protobuf.Value payload = 3;
 * @return {?proto.google.protobuf.Value}
 */
proto.alis.adk.sessions.v1.ToolConfirmation.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 3));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.alis.adk.sessions.v1.ToolConfirmation} returns this
*/
proto.alis.adk.sessions.v1.ToolConfirmation.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.ToolConfirmation} returns this
 */
proto.alis.adk.sessions.v1.ToolConfirmation.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.ToolConfirmation.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.LogprobsResultCandidate.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.LogprobsResultCandidate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.LogprobsResultCandidate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.LogprobsResultCandidate.toObject = function(includeInstance, msg) {
  var f, obj = {
logProbability: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
token: jspb.Message.getFieldWithDefault(msg, 2, ""),
tokenId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultCandidate}
 */
proto.alis.adk.sessions.v1.LogprobsResultCandidate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.LogprobsResultCandidate;
  return proto.alis.adk.sessions.v1.LogprobsResultCandidate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.LogprobsResultCandidate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultCandidate}
 */
proto.alis.adk.sessions.v1.LogprobsResultCandidate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLogProbability(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTokenId(value);
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
proto.alis.adk.sessions.v1.LogprobsResultCandidate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.LogprobsResultCandidate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.LogprobsResultCandidate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.LogprobsResultCandidate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogProbability();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTokenId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional float log_probability = 1;
 * @return {number}
 */
proto.alis.adk.sessions.v1.LogprobsResultCandidate.prototype.getLogProbability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultCandidate} returns this
 */
proto.alis.adk.sessions.v1.LogprobsResultCandidate.prototype.setLogProbability = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.LogprobsResultCandidate.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultCandidate} returns this
 */
proto.alis.adk.sessions.v1.LogprobsResultCandidate.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 token_id = 3;
 * @return {number}
 */
proto.alis.adk.sessions.v1.LogprobsResultCandidate.prototype.getTokenId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultCandidate} returns this
 */
proto.alis.adk.sessions.v1.LogprobsResultCandidate.prototype.setTokenId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.toObject = function(includeInstance, msg) {
  var f, obj = {
candidatesList: jspb.Message.toObjectList(msg.getCandidatesList(),
    proto.alis.adk.sessions.v1.LogprobsResultCandidate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates}
 */
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.LogprobsResultTopCandidates;
  return proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates}
 */
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.LogprobsResultCandidate;
      reader.readMessage(value,proto.alis.adk.sessions.v1.LogprobsResultCandidate.deserializeBinaryFromReader);
      msg.addCandidates(value);
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
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCandidatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.LogprobsResultCandidate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LogprobsResultCandidate candidates = 1;
 * @return {!Array<!proto.alis.adk.sessions.v1.LogprobsResultCandidate>}
 */
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.prototype.getCandidatesList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.LogprobsResultCandidate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.LogprobsResultCandidate, 1));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.LogprobsResultCandidate>} value
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates} returns this
*/
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.prototype.setCandidatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.LogprobsResultCandidate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultCandidate}
 */
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.prototype.addCandidates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.alis.adk.sessions.v1.LogprobsResultCandidate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates} returns this
 */
proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.prototype.clearCandidatesList = function() {
  return this.setCandidatesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.LogprobsResult.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.alis.adk.sessions.v1.LogprobsResult.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.LogprobsResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.LogprobsResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.LogprobsResult.toObject = function(includeInstance, msg) {
  var f, obj = {
chosenCandidatesList: jspb.Message.toObjectList(msg.getChosenCandidatesList(),
    proto.alis.adk.sessions.v1.LogprobsResultCandidate.toObject, includeInstance),
topCandidatesList: jspb.Message.toObjectList(msg.getTopCandidatesList(),
    proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.alis.adk.sessions.v1.LogprobsResult}
 */
proto.alis.adk.sessions.v1.LogprobsResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.LogprobsResult;
  return proto.alis.adk.sessions.v1.LogprobsResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.LogprobsResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.LogprobsResult}
 */
proto.alis.adk.sessions.v1.LogprobsResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.LogprobsResultCandidate;
      reader.readMessage(value,proto.alis.adk.sessions.v1.LogprobsResultCandidate.deserializeBinaryFromReader);
      msg.addChosenCandidates(value);
      break;
    case 2:
      var value = new proto.alis.adk.sessions.v1.LogprobsResultTopCandidates;
      reader.readMessage(value,proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.deserializeBinaryFromReader);
      msg.addTopCandidates(value);
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
proto.alis.adk.sessions.v1.LogprobsResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.LogprobsResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.LogprobsResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.LogprobsResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChosenCandidatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.LogprobsResultCandidate.serializeBinaryToWriter
    );
  }
  f = message.getTopCandidatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.alis.adk.sessions.v1.LogprobsResultTopCandidates.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LogprobsResultCandidate chosen_candidates = 1;
 * @return {!Array<!proto.alis.adk.sessions.v1.LogprobsResultCandidate>}
 */
proto.alis.adk.sessions.v1.LogprobsResult.prototype.getChosenCandidatesList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.LogprobsResultCandidate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.LogprobsResultCandidate, 1));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.LogprobsResultCandidate>} value
 * @return {!proto.alis.adk.sessions.v1.LogprobsResult} returns this
*/
proto.alis.adk.sessions.v1.LogprobsResult.prototype.setChosenCandidatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.LogprobsResultCandidate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultCandidate}
 */
proto.alis.adk.sessions.v1.LogprobsResult.prototype.addChosenCandidates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.alis.adk.sessions.v1.LogprobsResultCandidate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.LogprobsResult} returns this
 */
proto.alis.adk.sessions.v1.LogprobsResult.prototype.clearChosenCandidatesList = function() {
  return this.setChosenCandidatesList([]);
};


/**
 * repeated LogprobsResultTopCandidates top_candidates = 2;
 * @return {!Array<!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates>}
 */
proto.alis.adk.sessions.v1.LogprobsResult.prototype.getTopCandidatesList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.LogprobsResultTopCandidates, 2));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates>} value
 * @return {!proto.alis.adk.sessions.v1.LogprobsResult} returns this
*/
proto.alis.adk.sessions.v1.LogprobsResult.prototype.setTopCandidatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.LogprobsResultTopCandidates}
 */
proto.alis.adk.sessions.v1.LogprobsResult.prototype.addTopCandidates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.alis.adk.sessions.v1.LogprobsResultTopCandidates, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.LogprobsResult} returns this
 */
proto.alis.adk.sessions.v1.LogprobsResult.prototype.clearTopCandidatesList = function() {
  return this.setTopCandidatesList([]);
};


/**
 * @enum {number}
 */
proto.alis.adk.sessions.v1.MediaModality = {
  MEDIA_MODALITY_UNSPECIFIED: 0,
  MEDIA_MODALITY_TEXT: 1,
  MEDIA_MODALITY_IMAGE: 2,
  MEDIA_MODALITY_VIDEO: 3,
  MEDIA_MODALITY_AUDIO: 4,
  MEDIA_MODALITY_DOCUMENT: 5
};

/**
 * @enum {number}
 */
proto.alis.adk.sessions.v1.TrafficType = {
  TRAFFIC_TYPE_UNSPECIFIED: 0,
  TRAFFIC_TYPE_ON_DEMAND: 1,
  TRAFFIC_TYPE_PROVISIONED_THROUGHPUT: 2
};

/**
 * @enum {number}
 */
proto.alis.adk.sessions.v1.FinishReason = {
  FINISH_REASON_UNSPECIFIED: 0,
  FINISH_REASON_STOP: 1,
  FINISH_REASON_MAX_TOKENS: 2,
  FINISH_REASON_SAFETY: 3,
  FINISH_REASON_RECITATION: 4,
  FINISH_REASON_LANGUAGE: 5,
  FINISH_REASON_OTHER: 6,
  FINISH_REASON_BLOCKLIST: 7,
  FINISH_REASON_PROHIBITED_CONTENT: 8,
  FINISH_REASON_SPII: 9,
  FINISH_REASON_MALFORMED_FUNCTION_CALL: 10,
  FINISH_REASON_IMAGE_SAFETY: 11,
  FINISH_REASON_UNEXPECTED_TOOL_CALL: 12,
  FINISH_REASON_IMAGE_PROHIBITED_CONTENT: 13,
  FINISH_REASON_NO_IMAGE: 14,
  FINISH_REASON_IMAGE_RECITATION: 15,
  FINISH_REASON_IMAGE_OTHER: 16
};

goog.object.extend(exports, proto.alis.adk.sessions.v1);

// Below is base64 encoded GeneratedCodeInfo proto
// Ci8KAgQAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiLLCCSLAovCgIEARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YoDIgqDIKLwoCBAISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGI44IJc4Ci8KAgQDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiAPiCMPgovCgIEBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YsUQgvkQKLwoCBAUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOdKIPNKCi8KAgQGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjlUCDsUAovCgIEBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y/VYggVcKLwoCBAgSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGINdIIddCi8KAgQJEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjhYiDpYgovCgIEChIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yz2gg3GgKLwoCBAsSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNFuIN1uCi8KAgQMEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjPdCDfdAovCgIEDRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YlHsgqHsKMQoCBA4SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOqBASD+gQEKMQoCBA8SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIiIASCgiAEKMQoCBBASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLaOASDEjgEKMQoCBBESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLyUASDPlAEKMQoCBBISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNaaASDnmgEKMwoEBBIDABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YsqEBIMOhAQoxCgIEExIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y+qcBIIioAQozCgQEEwMAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjBrgEgxK4BCjMKBAQTAwESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNe0ASDntAEKMwoEBBMDAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y5LsBIOi7AQo1CgYEEwMCAwASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIPCASCVwgEKNwoIBBMDAgMAAwASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMnJASDWyQEKMQoCBBQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMDQASDQ0AEKMQoCBBUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIXXASCM1wEKMQoCBBYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO/cASD/3AEKMQoCBBcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGP3iASCO4wEKMQoCBBgSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGI/pASCX6QEKMwoEBBgDABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yhu8BII7vAQoxCgIEGRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yj/UBIJz1AQoxCgIEGhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YxfsBINf7AQoxCgIEGxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y24ECIOuBAgozCgQEGwMAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxixiAIguYgCCjEKAgQcEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjSjgIg4o4CCjEKAgQdEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjglAIg95QCCjEKAgQeEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiKmwIgpZsCCjEKAgQfEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiGogIglKICCjMKBAQAAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGK2pAiC4qQIKMwoEBAACBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YwKkCIMOpAgozCgQEAAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiR4gIgluICCjMKBAQAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIfkAiCM5AIKMwoEBAACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YzOUCINblAgozCgQEAAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjH5wIg0ecCCjMKBAQAAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJDpAiCZ6QIKMwoEBAACAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YiusCIJPrAgozCgQEAAIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjX7AIg5ewCCjMKBAQAAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNbuAiDk7gIKMwoEBAACAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YyvACINrwAgozCgQEAAIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiT8gIgofICCjMKBAQAAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPbzAiD+8wIKMwoEBAACBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YxfYCIM32AgozCgQEAAIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjD+AIgzfgCCjMKBAQAAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPX5AiD9+QIKMwoEBAACBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y3/sCIOz7AgozCgQEAAIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi//gIgzP4CCjMKBAQAAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPuAAyCKgQMKMwoEBAACBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yt4IDIMSCAwozCgQEAAIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxichAMgooQDCjMKBAQAAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPGGAyD3hgMKMwoEBAACBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YpokDIK6JAwozCgQEAAIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjUigMg2ooDCjMKBAQAAgcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLyMAyDJjAMKMwoEBAACBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YnI8DIKmPAwozCgQEAAIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxifkQMgrpEDCjMKBAQAAgcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNuSAyDokgMKMwoEBAACCBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YypQDINeUAwozCgQEAAIIEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiqlwMgt5cDCjMKBAQAAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGK2ZAyC8mQMKMwoEBAACCBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6ZoDIPaaAwozCgQEAQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiYvwMgor8DCjMKBAQBAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJXBAyCfwQMKMwoEBAECARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YhMMDIIzDAwozCgQEAQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjUxQMg3MUDCjMKBAQBAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNPHAyDdxwMKMwoEBAECARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YhskDII7JAwozCgQEAQICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjwygMg/coDCjMKBAQBAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNLNAyDfzQMKMwoEBAECAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y188DIObPAwozCgQEAQICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiU0QMgodEDCjMKBAQCAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO33AyD39wMKMwoEBAICABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y7PkDIPb5AwozCgQEAgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi3+wMgwPsDCjMKBAQCAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLX9AyC+/QMKMwoEBAICAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YpP8DIKz/AwozCgQEAgICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj2gQQg/oEECjMKBAQCAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPeDBCCBhAQKMwoEBAICAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yq4UEILOFBAozCgQEAgIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiWhwQgo4cECjMKBAQCAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPqJBCCHigQKMwoEBAICAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YgYwEIJCMBAozCgQEAgIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi/jQQgzI0ECjMKBAQDAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJDyBCCV8gQKMwoEBAMCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YkPQEIJX0BAozCgQEAwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxja9QQg5PUECjMKBAQDAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGN/3BCDp9wQKMwoEBAMCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YrfkEILb5BAozCgQEAwICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxix+wQguvsECjMKBAQDAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIH9BCCN/QQKMwoEBAMCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YiP8EIJT/BAozCgQEAwIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjegAUg7YAFCjMKBAQDAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOiCBSD3ggUKMwoEBAMCBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YuoQFIMOEBQozCgQEAwIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi+hgUgx4YFCjMKBAQDAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLOIBSC9iAUKMwoEBAMCBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqosFILSLBQozCgQEAwIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxizjQUgv40FCjMKBAQDAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO6OBSD4jgUKMwoEBAMCBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YwpAFINuQBQozCgQEAwIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjfkgUg+JIFCjMKBAQDAgcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPyUBSCRlQUKMwoEBAMCBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqZcFIMSXBQozCgQEAwIIEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjzmAUg/JgFCjMKBAQDAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPeaBSCAmwUKMwoEBAMCCBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y8JwFIPucBQozCgQEAwIIEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi5ngUgwp4FCjMKBAQDAgkSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJWgBSCfoAUKMwoEBAMCCRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y/qIFIIijBQozCgQEAwIJEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiIpQUglKUFCjMKBAQDAgkSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMOmBSDNpgUKMwoEBAMCChIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YwKgFINSoBQozCgQEAwIKEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjRqwUg5asFCjMKBAQDAgoSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOWtBSD7rQUKMwoEBAMCChIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YtK8FIMivBQozCgQEAwILEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxitsQUgvrEFCjMKBAQDAgsSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGI+0BSCgtAUKMwoEBAMCCxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YoLYFILO2BQozCgQEAwILEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjptwUg+rcFCjMKBAQDAgwSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOG5BSDxuQUKMwoEBAMCDBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4rwFIPK8BQozCgQEAwIMEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjyvgUghL8FCjMKBAQDAgwSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLnABSDJwAUKMwoEBAMCDRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YucIFIMzCBQozCgQEAwINEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjGxQUg2cUFCjMKBAQDAg0SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNnHBSDuxwUKMwoEBAMCDRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YpskFILnJBQozCgQEAwIOEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjuygUg+MoFCjMKBAQDAg4SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIDNBSCKzQUKMwoEBAMCDhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y+84FIIfPBQozCgQEAwIOEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjG0AUg0NAFCjMKBAQDAg8SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIvSBSCa0gUKMwoEBAMCDxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YotQFILHUBQozCgQEAwIPEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxii1gUgs9YFCjMKBAQDAg8SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPLXBSCB2AUKMwoEBAMCEBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YutkFIMbZBQozCgQEAwIQEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjC2wUgztsFCjMKBAQDAhASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL/dBSDN3QUKMwoEBAMCEBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YjN8FIJjfBQozCgQEAwIREiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjU4AUg4+AFCjMKBAQDAhESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGN/iBSDu4gUKMwoEBAMCERIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y3+QFIPDkBQozCgQEAwIREiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiv5gUgvuYFCjMKBAQDAhISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPfnBSCF6AUKMwoEBAMCEhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YjeoFIJvqBQozCgQEAwISEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiM7AUgnOwFCjMKBAQDAhISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNvtBSDp7QUKMwoEBAMCExIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yze8FINzvBQozCgQEAwITEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxib8gUgqvIFCjMKBAQDAhQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPPzBSCB9AUKMwoEBAMCFBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yi/YFIJn2BQozCgQEAwIUEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiK+AUgmvgFCjMKBAQDAhQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNn5BSDn+QUKMwoEBAMCFRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yo/sFILL7BQozCgQEAwIVEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiu/QUgvf0FCjMKBAQDAhUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGK7/BSC//wUKMwoEBAMCFRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y/oAGII2BBgozCgQEAwIWEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj3ggYgiIMGCjMKBAQDAhYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPyFBiCNhgYKMwoEBAMCFhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YjYgGIKCIBgozCgQEAwIWEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjWiQYg54kGCjMKBAQDAhcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMyLBiDYiwYKMwoEBAMCFxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YtY4GIMGOBgozCgQEAwIXEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjBkAYgz5AGCjMKBAQDAhcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGICSBiCMkgYKMwoEBAQCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y3MIGIPDCBgozCgQEBAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjuxQYggsYGCjMKBAQEAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIPIBiCZyAYKMwoEBAQCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y08kGIOfJBgozCgQEBAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxibywYgpcsGCjMKBAQEAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGK7NBiC4zQYKMwoEBAQCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yg88GIJLPBgozCgQEBAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxib0QYgqtEGCjMKBAQEAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPPSBiCB0wYKMwoEBAQCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YitUGIJjVBgozCgQEBAIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj01gYgjdcGCjMKBAQEAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJPZBiCs2QYKMwoEBAQCBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YstsGIMfbBgozCgQEBAIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjh3QYg/N0GCjMKBAQEAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKzfBiC13wYKMwoEBAQCBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YsuEGILvhBgozCgQEBAIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiv4wYgwOMGCjMKBAQEAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJLmBiCj5gYKMwoEBAQCBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YpOgGILfoBgozCgQEBAIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxju6QYg/+kGCjMKBAQFAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMicByDcnAcKMwoEBAUCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y454HIPeeBwozCgQEBQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjnoAcg9KAHCjMKBAQFAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMSjByDRowcKMwoEBAUCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0KUHIN+lBwozCgQEBQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiRpwcgnqcHCjMKBAQFAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNWpByDoqQcKMwoEBAUCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YvqwHINOsBwozCgQEBQIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiLrgcglq4HCjMKBAQFAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJ2wByCosAcKMwoEBAUCBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yr7MHIM+zBwozCgQEBQIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjytgcglLcHCjMKBAQFAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOC4ByDwuAcKMwoEBAUCBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y67oHIPu6BwozCgQEBgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjd3Acg5NwHCjMKBAQGAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNXeByDc3gcKMwoEBAYCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YueAHIMXgBwozCgQEBgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxie4wcgquMHCjMKBAQGAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLzlByDE5QcKMwoEBAYCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YgugHIJDoBwozCgQEBwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjS7Acg1uwHCjMKBAQHAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGN3sByDo7AcKMwoEBAcCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y7+wHIPjsBwozCgQEBwIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj/7AcgjO0HCjMKBAQHAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJPtByCk7QcKMwoEBAcCBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yq+0HILrtBwozCgQEBwIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjB7Qcg1u0HCjMKBAQHAgcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOHwByDv8AcKMwoEBAcCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YkrAIIJmwCAozCgQEBwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiEsgggi7IICjMKBAQHAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKG0CCCqtAgKMwoEBAcCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YlrYIIJ22CAozCgQEBwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjltwgg8rcICjMKBAQHAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLe6CCDEuggKMwoEBAcCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6bwIIPi8CAozCgQEBwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiivgggr74ICjMKBAQHAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGP2/CCCIwAgKMwoEBAcCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2cIIIOTCCAozCgQEBwICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiJxQgglsUICjMKBAQHAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL7GCCDJxggKMwoEBAcCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yo8gIILLICAozCgQEBwIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiPywggnssICjMKBAQHAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMPNCCDUzQgKMwoEBAcCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YgM8III/PCAozCgQEBwIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj10AggiNEICjMKBAQHAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPHTCCCE1AgKMwoEBAcCBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqdYIIL7WCAozCgQEBwIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxju1wgggdgICjMKBAQHAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOHZCCDy2QgKMwoEBAcCBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y1dwIIObcCAozCgQEBwIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiL3wggnt8ICjMKBAQHAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMzgCCDd4AgKMwoEBAcCBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YzeIIIOPiCAozCgQEBwIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjV5Qgg6+UICjMKBAQHAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJDoCCCo6AgKMwoEBAcCBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2+kIIPHpCAozCgQEBwIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjO6wgg3usICjMKBAQHAgcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL7uCCDO7ggKMwoEBAcCBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y8/AIIIXxCAozCgQEBwIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiy8gggwvIICjMKBAQHAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO7zCCD48wgKMwoEBAcCCBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y8PUIIPr1CAozCgQEBwIJEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjQ9wgg4/cICjMKBAQHAgkSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNH/CCDk/wgKMwoEBAgCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yj54JIJqeCQozCgQECAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiFoAkgkKAJCjMKBAQIAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNahCSDdoQkKMwoEBAgCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y5qgJIO2oCQozCgQECQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj8xwkgh8gJCjMKBAQJAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPrJCSCFygkKMwoEBAkCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YxssJINDLCQozCgQECQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjDzQkgzc0JCjMKBAQKAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPrwCSCI8QkKMwoEBAoCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4vMJIPDzCQozCgQECgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjx9QkggfYJCjMKBAQKAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLX3CSDD9wkKMwoEBAoCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YpvkJILL5CQozCgQECgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiM/AkgmPwJCjMKBAQKAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJn+CSCn/gkKMwoEBAoCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2f8JIOX/CQozCgQECwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjLogog0qIKCjMKBAQLAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGM2kCiDUpAoKMwoEBAsCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YvKYKIMOmCgozCgQECwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiTqQogmqkKCjMKBAQLAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJmrCiCiqwoKMwoEBAsCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YzqwKINWsCgozCgQECwICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiErgogia4KCjMKBAQLAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGISwCiCJsAoKMwoEBAwCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqNkKIK/ZCgozCgQEDAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiy2wogudsKCjMKBAQMAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKndCiC03QoKMwoEBAwCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YjOAKIJfgCgozCgQEDAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxie4gogq+IKCjMKBAQMAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGN/jCiDq4woKMwoEBAwCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YneUKIKLlCgozCgQEDAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxil5wogqucKCjMKBAQMAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLDpCiC86QoKMwoEBAwCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y1+wKIOPsCgozCgQEDAIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxie7wogpu8KCjMKBAQMAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIbyCiCU8goKMwoEBA0CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6PYKIPP2CgozCgQEDQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj69gogg/cKCjMKBAQNAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJyeCyCpngsKMwoEBA0CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YvqELIMuhCwozCgQEDQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxigpAsgr6QLCjMKBAQNAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOmlCyD2pQsKMwoEBA0CARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y9KcLIP+nCwozCgQEDQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxigqwsgq6sLCjMKBAQNAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGICuCyCNrgsKMwoEBA0CARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yxa8LINCvCwozCgQEDgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiU0gsgn9ILCjMKBAQOAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKrUCyC11AsKMwoEBA4CARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yi9YLIJLWCwozCgQEDgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjb3Qsg4t0LCjMKBAQOAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLLfCyDA3wsKMwoEBA4CAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yy+ELINnhCwozCgQEDwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiShQwgnYUMCjMKBAQPAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLCHDCC7hwwKMwoEBA8CARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YjIkMIJaJDAozCgQEDwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxipiwwgs4sMCjMKBAQPAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIiNDCCWjQwKMwoEBA8CAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqY8MILePDAozCgQEEAQAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiKrwwgkq8MCjUKBgQQBAACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yma8MIK2vDAo1CgYEEAQAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLSvDCC6rwwKMwoEBBACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4rAMIO2wDAozCgQEEAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjFswwg0LMMCjMKBAQQAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJG1DCCYtQwKMwoEBBACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yl7cMIJ63DAozCgQEEQQAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjI1wwgz9cMCjUKBgQRBAACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y1tcMIOnXDAo1CgYEEQQAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPDXDCD61wwKNQoGBBEEAAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiB2Awgj9gMCjUKBgQRBAACAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YltgMIK/YDAozCgQEEQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxje2Qwg6NkMCjMKBAQRAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNLcDCDc3AwKMwoEBBECARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YpN4MIK3eDAozCgQEEQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi24Awgv+AMCjUKBgQSAwACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y9r0NIIG+DQo1CgYEEgMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKrADSC1wA0KNQoGBBIDAAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiZwg0gqsINCjUKBgQSAwACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y08QNIOTEDQozCgQEEgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjAxg0g18YNCjMKBAQSAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOXIDSD8yA0KMwoEBBICABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YissNIJ3LDQozCgQEEgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi/zQ0g2M0NCjMKBAQSAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJ3PDSC0zw0KMwoEBBICARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YwtENINnRDQozCgQEEgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjn0w0g+tMNCjMKBAQSAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJzWDSC11g0KMwoEBBICAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yo9gNILbYDQozCgQEEgICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi52w0gzNsNCjMKBAQSAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNXdDSDq3Q0KMwoEBBICAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yp98NILrfDQozCgQEEgIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiw4Q0gxuENCjMKBAQSAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNHkDSDn5A0KMwoEBBICAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yl+cNIKnnDQozCgQEEgIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiF6g0gneoNCjMKBAQSAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJLsDSCq7A0KMwoEBBICBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yu+8NINPvDQozCgQEEgIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiH8g0gm/INCjMKBAQSAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPn0DSCT9Q0KMwoEBBICBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YhPcNIJj3DQozCgQEEgIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxie+g0gsvoNCjMKBAQSAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLv8DSDR/A0KMwoEBBICBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yj/4NIKP+DQozCgQEEgIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj1/w0glIAOCjMKBAQSAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJmCDiC4gg4KMwoEBBICBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2oQOIPOEDgozCgQEEgIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi9iA4g1ogOCjMKBAQSAgcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLCLDiDFiw4KMwoEBBICBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yto4OINGODgozCgQEEwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxizkw4gtpMOCjMKBAQTAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL2TDiDOkw4KMwoEBBMCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y1ZMOINmTDgo1CgYEEwMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGM/eDiDY3g4KNQoGBBMDAAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjf4A4g6OAOCjUKBgQTAwACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YruIOILTiDgo1CgYEEwMAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLvkDiDB5A4KNQoGBBMDAAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiJ5g4gkeYOCjUKBgQTAwACAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YmOgOIKDoDgo1CgYEEwMBAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL7tDiDH7Q4KNQoGBBMDAQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiomg8grpoPCjUKBgQTAwECABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yz5wPINWcDwo1CgYEEwMBAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKqeDyCyng8KNQoGBBMDAQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjToA8g26APCjUKBgQTAwECAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yr6IPILaiDwo1CgYEEwMBAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNekDyDepA8KNQoGBBMDAQIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjXpg8g4qYPCjUKBgQTAwECAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6akPIPSpDwo1CgYEEwMBAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOqsDyD3rA8KNQoGBBMDAQIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi6rg8gxa4PCjUKBgQTAwECBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YkrAPIKGwDwo1CgYEEwMBAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMKyDyDRsg8KOQoKBBMDAgMAAwACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yoa8QIKyvEAo5CgoEEwMCAwADAAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj3sRAggrIQCjkKCgQTAwIDAAMAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPazECCGtBAKOQoKBBMDAgMAAwACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0bYQIOG2EAo5CgoEEwMCAwADAAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjLuBAg07gQCjkKCgQTAwIDAAMAAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJ67ECCmuxAKOQoKBBMDAgMAAwACAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Ykb0QIJq9EAo5CgoEEwMCAwADAAIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjlvxAg7r8QCjkKCgQTAwIDAAMAAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOPBECD0wRAKOQoKBBMDAgMAAwACBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yv8QQINDEEAo5CgoEEwMCAwADAAIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjWxhAg98YQCjkKCgQTAwIDAAMAAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMLJECDjyRAKNwoIBBMDAgMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKLMECC3zBAKNwoIBBMDAgMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGN7QECDz0BAKNwoIBBMDAgMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGITUECCV1BAKNwoIBBMDAgMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMHXECDY1xAKNwoIBBMDAgMAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKfZECC42RAKNwoIBBMDAgMAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOfbECD42xAKNQoGBBMDAgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi/3RAgxd0QCjUKBgQTAwICABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yzt8QINTfEAo1CgYEEwMCAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJ3hECCl4RAKNQoGBBMDAgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiu4xAgtuMQCjUKBgQTAwICAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y/uQQIIXlEAo1CgYEEwMCAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGI7nECCV5xAKNQoGBBMDAgIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjh6BAg6+gQCjUKBgQTAwICAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y9OoQIP7qEAo1CgYEEwMCAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJ7tECCz7RAKNQoGBBMDAgIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj88BAgkfEQCjUKBgQTAwICBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YnvMQILXzEAo1CgYEEwMCAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPb0ECCL9RAKMwoEBBMCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4vYQIOj2EAozCgQEEwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjr+RAg8fkQCjMKBAQTAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLT8ECC8/BAKMwoEBBMCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6f0QIO/9EAozCgQEEwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxju/xAggYARCjMKBAQTAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKuDESC+gxEKMwoEBBMCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YgYYRIJaGEQozCgQEEwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjQhxEg44cRCjMKBAQTAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL2JESDEiREKMwoEBBMCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YyowRINGMEQozCgQEEwICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiUjxEgnY8RCjMKBAQTAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMuQESDSkBEKMwoEBBQCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yr7YRILm2EQozCgQEFAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxifuREgqbkRCjMKBAQUAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLC7ESC8uxEKMwoEBBQCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y77wRIPm8EQozCgQEFAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjIvhEg5L4RCjMKBAQUAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPDAESCMwREKMwoEBBQCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YmMMRILDDEQozCgQEFAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjQxREg7sURCjMKBAQUAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLbHESDNxxEKMwoEBBQCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y5skRIP3JEQozCgQEFAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiJzBEgnMwRCjMKBAQUAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLzOESDVzhEKMwoEBBUCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YxvERINLxEQozCgQEFQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjC8xEgzvMRCjMKBAQVAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGI31ESCa9REKMwoEBBUCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YivcRIJf3EQozCgQEFQICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjU+BEg3/gRCjMKBAQVAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGM/6ESDa+hEKMwoEBBUCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yk/wRIJr8EQozCgQEFQIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiL/hEgkv4RCjMKBAQWAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKWeEiC3nhIKMwoEBBYCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YuqASIMygEgozCgQEFgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiiohIgrKISCjMKBAQWAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGP+pEiCJqhIKMwoEBBcCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y78gSIJPJEgozCgQEFwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bximyxIgyssSCjUKBgQYAwACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y9IoTIICLEwo1CgYEGAMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGISNEyCQjRMKNQoGBBgDAAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjXjhMg4o4TCjUKBgQYAwACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y5pATIPGQEwozCgQEGAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxirkhMgspITCjMKBAQYAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKWUEyCslBMKMwoEBBgCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yl5YTIKKWEwozCgQEGAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiWmRMgoZkTCjMKBAQYAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJibEyClmxMKMwoEBBgCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0ZwTINycEwozCgQEGQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjh3RMg+t0TCjMKBAQZAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGInhEyCi4RMKMwoEBBkCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y1uMTIOvjEwozCgQEGQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjD5hMg3uYTCjMKBAQZAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKHoEyC76BMKMwoEBBkCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yt+oTINHqEwozCgQEGQICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxih7BMguOwTCjMKBAQZAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLTuEyDL7hMKMwoEBBkCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2/ATIPnwEwozCgQEGQIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiI9BMgpvQTCjMKBAQZAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNr2EyD09hMKMwoEBBkCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YzPkTIOz5EwozCgQEGQIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxis+xMgv/sTCjMKBAQZAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLv9EyDO/RMKMwoEBBkCBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2v8TIPT/EwozCgQEGQIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiDgxQgnYMUCjMKBAQZAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNGFFCDnhRQKMwoEBBkCBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yv4gUINuIFAozCgQEGQIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiZihQgrooUCjMKBAQZAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKqMFCC/jBQKMwoEBBkCBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YlI4UIK6OFAozCgQEGQIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiqkBQgxJAUCjMKBAQZAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNmSFCD6khQKMwoEBBkCCBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YiZYUIKqWFAozCgQEGQIIEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjemBQg+5gUCjMKBAQZAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNObFCD2mxQKMwoEBBkCCRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YuZ0UIMudFAozCgQEGQIJEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjInxQg2p8UCjMKBAQZAgoSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMmhFCDXoRQKMwoEBBkCChIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YlqQUIKSkFAozCgQEGgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiCxRQgjcUUCjMKBAQaAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNnHFCDkxxQKMwoEBBoCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yr8kUILzJFAozCgQEGgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjCyxQgz8sUCjUKBgQbAwACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y65YVIPaWFQo1CgYEGwMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIqZFSCVmRUKNQoGBBsDAAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjjmhUg7ZoVCjUKBgQbAwACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Ygp0VIIydFQo1CgYEGwMAAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIGfFSCTnxUKNQoGBBsDAAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjpoRUg+6EVCjUKBgQbAwACAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YlKQVIKikFQo1CgYEGwMAAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOylFSD+pRUKNQoGBBsDAAIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjCpxUgz6cVCjUKBgQbAwACAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y46kVIPCpFQo1CgYEGwMAAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLyrFSDEqxUKNQoGBBsDAAIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjZrRUg4a0VCjUKBgQbAwACBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yrq8VILSvFQo1CgYEGwMAAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMmxFSDPsRUKMwoEBBsCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0rMVIOKzFQozCgQEGwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiMtxUgnLcVCjMKBAQbAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOG5FSDtuRUKMwoEBBsCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0rwVIOS8FQozCgQEHAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiL4BUgkuAVCjMKBAQcAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJXiFSCc4hUKMwoEBBwCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y5eMVIPHjFQozCgQEHAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiA5hUgjOYVCjMKBAQcAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPrnFSCE6BUKMwoEBBwCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2eoVIOPqFQozCgQEHAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjq7BUg9uwVCjMKBAQcAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKnuFSCz7hUKMwoEBB0CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YvJEWIM2RFgozCgQEHQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjskxYg/ZMWCjMKBAQdAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMmVFiDRlRYKMwoEBB0CARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4pcWIOqXFgozCgQEHQICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi5mRYgw5kWCjMKBAQdAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNObFiDdmxYKMwoEBB4CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqL8WILm/FgozCgQEHgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjzwhYghMMWCjMKBAQeAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNDFFiDdxRYKMwoEBB4CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y1sgWIOnIFgozCgQEHwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjM7xYg4+8WCjMKBAQfAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIPzFiCa8xYKMwoEBB8CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2fUWIOz1FgozCgQEHwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjL+BYg5PgWCjMKBAQfAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOn6FiD9+hYKMwoEBB8CARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yqf4WIL3+FgozCgQEHwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiEgRcglIEXCjMKBAQfAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPeDFyCNhBcKMQoCBQASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGP+EFyCMhRcKMwoEBQACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yk4UXIK2FFwozCgQFAAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi0hRcgx4UXCjMKBAUAAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGM6FFyDihRcKMwoEBQACAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6YUXIP2FFwozCgQFAAIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiEhhcgmIYXCjMKBAUAAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJ+GFyC2hhcKMQoCBQESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPOGFyD+hhcKMwoEBQECABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YhYcXIJ2HFwozCgQFAQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxikhxcguocXCjMKBAUBAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMGHFyDkhxcKMQoCBQISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKGIFyCtiBcKMwoEBQICABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YtIgXIM2IFwozCgQFAgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjUiBcg5ogXCjMKBAUCAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO2IFyCFiRcKMwoEBQICAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YjIkXIKCJFwozCgQFAgIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiniRcgv4kXCjMKBAUCAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMaJFyDciRcKMwoEBQICBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y44kXIPaJFwozCgQFAgIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj9iRcglIoXCjMKBAUCAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJuKFyC7ihcKMwoEBQICCRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YwooXINSKFwozCgQFAgIKEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjbihcggIsXCjMKBAUCAgsSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIiLFyCiixcKMwoEBQICDBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqosXIMyLFwozCgQFAgINEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjUixcg+osXCjMKBAUCAg4SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIKMFyCYjBcKMwoEBQICDxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YoIwXIL6MFwozCgQFAgIQEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjGjBcg34wX
