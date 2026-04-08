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
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_type_date_pb = require('../../../../google/type/date_pb.js');
goog.object.extend(proto, google_type_date_pb);
goog.exportSymbol('proto.alis.adk.sessions.v1.AppState', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.AppendEventRequest', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.AppendEventResponse', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.Blob', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.CitationMetadata', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.CitationMetadata.Citation', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.CodeExecutionResult', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.CodeExecutionResult.Outcome', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.Content', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.CreateSessionRequest', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.DeleteSessionRequest', null, global);
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
goog.exportSymbol('proto.alis.adk.sessions.v1.GetEventRequest', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.GetSessionRequest', null, global);
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
goog.exportSymbol('proto.alis.adk.sessions.v1.ListEventsRequest', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.ListEventsResponse', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.ListSessionsRequest', null, global);
goog.exportSymbol('proto.alis.adk.sessions.v1.ListSessionsResponse', null, global);
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
goog.exportSymbol('proto.alis.adk.sessions.v1.UpdateSessionRequest', null, global);
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
proto.alis.adk.sessions.v1.CreateSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.CreateSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.CreateSessionRequest.displayName = 'proto.alis.adk.sessions.v1.CreateSessionRequest';
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
proto.alis.adk.sessions.v1.GetSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.GetSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.GetSessionRequest.displayName = 'proto.alis.adk.sessions.v1.GetSessionRequest';
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
proto.alis.adk.sessions.v1.ListSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.ListSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.ListSessionsRequest.displayName = 'proto.alis.adk.sessions.v1.ListSessionsRequest';
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
proto.alis.adk.sessions.v1.ListSessionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.ListSessionsResponse.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.ListSessionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.ListSessionsResponse.displayName = 'proto.alis.adk.sessions.v1.ListSessionsResponse';
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
proto.alis.adk.sessions.v1.UpdateSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.UpdateSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.UpdateSessionRequest.displayName = 'proto.alis.adk.sessions.v1.UpdateSessionRequest';
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
proto.alis.adk.sessions.v1.DeleteSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.DeleteSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.DeleteSessionRequest.displayName = 'proto.alis.adk.sessions.v1.DeleteSessionRequest';
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
proto.alis.adk.sessions.v1.GetEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.GetEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.GetEventRequest.displayName = 'proto.alis.adk.sessions.v1.GetEventRequest';
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
proto.alis.adk.sessions.v1.ListEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.ListEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.ListEventsRequest.displayName = 'proto.alis.adk.sessions.v1.ListEventsRequest';
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
proto.alis.adk.sessions.v1.ListEventsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.adk.sessions.v1.ListEventsResponse.repeatedFields_, null);
};
goog.inherits(proto.alis.adk.sessions.v1.ListEventsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.ListEventsResponse.displayName = 'proto.alis.adk.sessions.v1.ListEventsResponse';
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
proto.alis.adk.sessions.v1.AppendEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.AppendEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.AppendEventRequest.displayName = 'proto.alis.adk.sessions.v1.AppendEventRequest';
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
proto.alis.adk.sessions.v1.AppendEventResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.adk.sessions.v1.AppendEventResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.adk.sessions.v1.AppendEventResponse.displayName = 'proto.alis.adk.sessions.v1.AppendEventResponse';
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
proto.alis.adk.sessions.v1.CreateSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.CreateSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.CreateSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.CreateSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
session: (f = msg.getSession()) && proto.alis.adk.sessions.v1.Session.toObject(includeInstance, f),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.alis.adk.sessions.v1.CreateSessionRequest}
 */
proto.alis.adk.sessions.v1.CreateSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.CreateSessionRequest;
  return proto.alis.adk.sessions.v1.CreateSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.CreateSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.CreateSessionRequest}
 */
proto.alis.adk.sessions.v1.CreateSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.Session;
      reader.readMessage(value,proto.alis.adk.sessions.v1.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSessionId(value);
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
proto.alis.adk.sessions.v1.CreateSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.CreateSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.CreateSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.CreateSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.Session.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Session session = 1;
 * @return {?proto.alis.adk.sessions.v1.Session}
 */
proto.alis.adk.sessions.v1.CreateSessionRequest.prototype.getSession = function() {
  return /** @type{?proto.alis.adk.sessions.v1.Session} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.Session, 1));
};


/**
 * @param {?proto.alis.adk.sessions.v1.Session|undefined} value
 * @return {!proto.alis.adk.sessions.v1.CreateSessionRequest} returns this
*/
proto.alis.adk.sessions.v1.CreateSessionRequest.prototype.setSession = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.CreateSessionRequest} returns this
 */
proto.alis.adk.sessions.v1.CreateSessionRequest.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.CreateSessionRequest.prototype.hasSession = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.CreateSessionRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.CreateSessionRequest} returns this
 */
proto.alis.adk.sessions.v1.CreateSessionRequest.prototype.setSessionId = function(value) {
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
proto.alis.adk.sessions.v1.GetSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.GetSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.GetSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GetSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.alis.adk.sessions.v1.GetSessionRequest}
 */
proto.alis.adk.sessions.v1.GetSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.GetSessionRequest;
  return proto.alis.adk.sessions.v1.GetSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.GetSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.GetSessionRequest}
 */
proto.alis.adk.sessions.v1.GetSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.adk.sessions.v1.GetSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.GetSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.GetSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GetSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GetSessionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GetSessionRequest} returns this
 */
proto.alis.adk.sessions.v1.GetSessionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.alis.adk.sessions.v1.ListSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.ListSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.ListSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
filter: jspb.Message.getFieldWithDefault(msg, 3, ""),
orderBy: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.alis.adk.sessions.v1.ListSessionsRequest}
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.ListSessionsRequest;
  return proto.alis.adk.sessions.v1.ListSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.ListSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.ListSessionsRequest}
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFilter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOrderBy(value);
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
proto.alis.adk.sessions.v1.ListSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.ListSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.ListSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrderBy();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.ListSessionsRequest} returns this
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.ListSessionsRequest} returns this
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.ListSessionsRequest} returns this
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string order_by = 4;
 * @return {string}
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.prototype.getOrderBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.ListSessionsRequest} returns this
 */
proto.alis.adk.sessions.v1.ListSessionsRequest.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.ListSessionsResponse.repeatedFields_ = [1];



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
proto.alis.adk.sessions.v1.ListSessionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.ListSessionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.ListSessionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ListSessionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    proto.alis.adk.sessions.v1.Session.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.alis.adk.sessions.v1.ListSessionsResponse}
 */
proto.alis.adk.sessions.v1.ListSessionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.ListSessionsResponse;
  return proto.alis.adk.sessions.v1.ListSessionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.ListSessionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.ListSessionsResponse}
 */
proto.alis.adk.sessions.v1.ListSessionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.Session;
      reader.readMessage(value,proto.alis.adk.sessions.v1.Session.deserializeBinaryFromReader);
      msg.addSessions(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNextPageToken(value);
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
proto.alis.adk.sessions.v1.ListSessionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.ListSessionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.ListSessionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ListSessionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.Session.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Session sessions = 1;
 * @return {!Array<!proto.alis.adk.sessions.v1.Session>}
 */
proto.alis.adk.sessions.v1.ListSessionsResponse.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.Session>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.Session, 1));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.Session>} value
 * @return {!proto.alis.adk.sessions.v1.ListSessionsResponse} returns this
*/
proto.alis.adk.sessions.v1.ListSessionsResponse.prototype.setSessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.Session=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.Session}
 */
proto.alis.adk.sessions.v1.ListSessionsResponse.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.alis.adk.sessions.v1.Session, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.ListSessionsResponse} returns this
 */
proto.alis.adk.sessions.v1.ListSessionsResponse.prototype.clearSessionsList = function() {
  return this.setSessionsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.ListSessionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.ListSessionsResponse} returns this
 */
proto.alis.adk.sessions.v1.ListSessionsResponse.prototype.setNextPageToken = function(value) {
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
proto.alis.adk.sessions.v1.UpdateSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.UpdateSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.UpdateSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.UpdateSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
session: (f = msg.getSession()) && proto.alis.adk.sessions.v1.Session.toObject(includeInstance, f),
updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.alis.adk.sessions.v1.UpdateSessionRequest}
 */
proto.alis.adk.sessions.v1.UpdateSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.UpdateSessionRequest;
  return proto.alis.adk.sessions.v1.UpdateSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.UpdateSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.UpdateSessionRequest}
 */
proto.alis.adk.sessions.v1.UpdateSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.Session;
      reader.readMessage(value,proto.alis.adk.sessions.v1.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.alis.adk.sessions.v1.UpdateSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.UpdateSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.UpdateSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.UpdateSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.Session.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Session session = 1;
 * @return {?proto.alis.adk.sessions.v1.Session}
 */
proto.alis.adk.sessions.v1.UpdateSessionRequest.prototype.getSession = function() {
  return /** @type{?proto.alis.adk.sessions.v1.Session} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.Session, 1));
};


/**
 * @param {?proto.alis.adk.sessions.v1.Session|undefined} value
 * @return {!proto.alis.adk.sessions.v1.UpdateSessionRequest} returns this
*/
proto.alis.adk.sessions.v1.UpdateSessionRequest.prototype.setSession = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.UpdateSessionRequest} returns this
 */
proto.alis.adk.sessions.v1.UpdateSessionRequest.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.UpdateSessionRequest.prototype.hasSession = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.alis.adk.sessions.v1.UpdateSessionRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.alis.adk.sessions.v1.UpdateSessionRequest} returns this
*/
proto.alis.adk.sessions.v1.UpdateSessionRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.UpdateSessionRequest} returns this
 */
proto.alis.adk.sessions.v1.UpdateSessionRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.UpdateSessionRequest.prototype.hasUpdateMask = function() {
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
proto.alis.adk.sessions.v1.DeleteSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.DeleteSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.DeleteSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.DeleteSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.alis.adk.sessions.v1.DeleteSessionRequest}
 */
proto.alis.adk.sessions.v1.DeleteSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.DeleteSessionRequest;
  return proto.alis.adk.sessions.v1.DeleteSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.DeleteSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.DeleteSessionRequest}
 */
proto.alis.adk.sessions.v1.DeleteSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.adk.sessions.v1.DeleteSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.DeleteSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.DeleteSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.DeleteSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.DeleteSessionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.DeleteSessionRequest} returns this
 */
proto.alis.adk.sessions.v1.DeleteSessionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.alis.adk.sessions.v1.GetEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.GetEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.GetEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GetEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.alis.adk.sessions.v1.GetEventRequest}
 */
proto.alis.adk.sessions.v1.GetEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.GetEventRequest;
  return proto.alis.adk.sessions.v1.GetEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.GetEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.GetEventRequest}
 */
proto.alis.adk.sessions.v1.GetEventRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.adk.sessions.v1.GetEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.GetEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.GetEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.GetEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.GetEventRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.GetEventRequest} returns this
 */
proto.alis.adk.sessions.v1.GetEventRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.ListEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.ListEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ListEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
filter: jspb.Message.getFieldWithDefault(msg, 4, ""),
orderBy: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.alis.adk.sessions.v1.ListEventsRequest}
 */
proto.alis.adk.sessions.v1.ListEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.ListEventsRequest;
  return proto.alis.adk.sessions.v1.ListEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.ListEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.ListEventsRequest}
 */
proto.alis.adk.sessions.v1.ListEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPageToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFilter(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOrderBy(value);
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
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.ListEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.ListEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ListEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrderBy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.ListEventsRequest} returns this
 */
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.adk.sessions.v1.ListEventsRequest} returns this
 */
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.ListEventsRequest} returns this
 */
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string filter = 4;
 * @return {string}
 */
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.ListEventsRequest} returns this
 */
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string order_by = 5;
 * @return {string}
 */
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.getOrderBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.ListEventsRequest} returns this
 */
proto.alis.adk.sessions.v1.ListEventsRequest.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.adk.sessions.v1.ListEventsResponse.repeatedFields_ = [1];



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
proto.alis.adk.sessions.v1.ListEventsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.ListEventsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.ListEventsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ListEventsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionEventsList: jspb.Message.toObjectList(msg.getSessionEventsList(),
    proto.alis.adk.sessions.v1.SessionEvent.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.alis.adk.sessions.v1.ListEventsResponse}
 */
proto.alis.adk.sessions.v1.ListEventsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.ListEventsResponse;
  return proto.alis.adk.sessions.v1.ListEventsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.ListEventsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.ListEventsResponse}
 */
proto.alis.adk.sessions.v1.ListEventsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.adk.sessions.v1.SessionEvent;
      reader.readMessage(value,proto.alis.adk.sessions.v1.SessionEvent.deserializeBinaryFromReader);
      msg.addSessionEvents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNextPageToken(value);
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
proto.alis.adk.sessions.v1.ListEventsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.ListEventsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.ListEventsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.ListEventsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.alis.adk.sessions.v1.SessionEvent.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated SessionEvent session_events = 1;
 * @return {!Array<!proto.alis.adk.sessions.v1.SessionEvent>}
 */
proto.alis.adk.sessions.v1.ListEventsResponse.prototype.getSessionEventsList = function() {
  return /** @type{!Array<!proto.alis.adk.sessions.v1.SessionEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.adk.sessions.v1.SessionEvent, 1));
};


/**
 * @param {!Array<!proto.alis.adk.sessions.v1.SessionEvent>} value
 * @return {!proto.alis.adk.sessions.v1.ListEventsResponse} returns this
*/
proto.alis.adk.sessions.v1.ListEventsResponse.prototype.setSessionEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.alis.adk.sessions.v1.SessionEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.adk.sessions.v1.SessionEvent}
 */
proto.alis.adk.sessions.v1.ListEventsResponse.prototype.addSessionEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.alis.adk.sessions.v1.SessionEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.adk.sessions.v1.ListEventsResponse} returns this
 */
proto.alis.adk.sessions.v1.ListEventsResponse.prototype.clearSessionEventsList = function() {
  return this.setSessionEventsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.alis.adk.sessions.v1.ListEventsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.ListEventsResponse} returns this
 */
proto.alis.adk.sessions.v1.ListEventsResponse.prototype.setNextPageToken = function(value) {
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
proto.alis.adk.sessions.v1.AppendEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.AppendEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.AppendEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.AppendEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
event: (f = msg.getEvent()) && proto.alis.adk.sessions.v1.SessionEvent.toObject(includeInstance, f)
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
 * @return {!proto.alis.adk.sessions.v1.AppendEventRequest}
 */
proto.alis.adk.sessions.v1.AppendEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.AppendEventRequest;
  return proto.alis.adk.sessions.v1.AppendEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.AppendEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.AppendEventRequest}
 */
proto.alis.adk.sessions.v1.AppendEventRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.adk.sessions.v1.SessionEvent;
      reader.readMessage(value,proto.alis.adk.sessions.v1.SessionEvent.deserializeBinaryFromReader);
      msg.setEvent(value);
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
proto.alis.adk.sessions.v1.AppendEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.AppendEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.AppendEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.AppendEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.adk.sessions.v1.SessionEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.adk.sessions.v1.AppendEventRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.adk.sessions.v1.AppendEventRequest} returns this
 */
proto.alis.adk.sessions.v1.AppendEventRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionEvent event = 2;
 * @return {?proto.alis.adk.sessions.v1.SessionEvent}
 */
proto.alis.adk.sessions.v1.AppendEventRequest.prototype.getEvent = function() {
  return /** @type{?proto.alis.adk.sessions.v1.SessionEvent} */ (
    jspb.Message.getWrapperField(this, proto.alis.adk.sessions.v1.SessionEvent, 2));
};


/**
 * @param {?proto.alis.adk.sessions.v1.SessionEvent|undefined} value
 * @return {!proto.alis.adk.sessions.v1.AppendEventRequest} returns this
*/
proto.alis.adk.sessions.v1.AppendEventRequest.prototype.setEvent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.adk.sessions.v1.AppendEventRequest} returns this
 */
proto.alis.adk.sessions.v1.AppendEventRequest.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.adk.sessions.v1.AppendEventRequest.prototype.hasEvent = function() {
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
proto.alis.adk.sessions.v1.AppendEventResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.adk.sessions.v1.AppendEventResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.adk.sessions.v1.AppendEventResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.AppendEventResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.alis.adk.sessions.v1.AppendEventResponse}
 */
proto.alis.adk.sessions.v1.AppendEventResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.adk.sessions.v1.AppendEventResponse;
  return proto.alis.adk.sessions.v1.AppendEventResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.adk.sessions.v1.AppendEventResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.adk.sessions.v1.AppendEventResponse}
 */
proto.alis.adk.sessions.v1.AppendEventResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.alis.adk.sessions.v1.AppendEventResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.adk.sessions.v1.AppendEventResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.adk.sessions.v1.AppendEventResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.adk.sessions.v1.AppendEventResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
// Ci8KAgQAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi9NSDENQovCgIEARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0jsg2jsKLwoCBAISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMBBIMlBCi8KAgQDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiyRyC+RwovCgIEBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y400g900KLwoCBAUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIFUIJJUCi8KAgQGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiTWiCmWgovCgIEBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YrWAgwWAKLwoCBAgSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIZnIJpnCi8KAgQJEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxikbSC4bQovCgIEChIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YwnMg0XMKLwoCBAsSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMx5IN15Ci8KAgQMEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjefyDwfwoxCgIEDRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YrYYBIL+GAQoxCgIEDhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yw4wBINaMAQoxCgIEDxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y3ZIBIOqSAQoxCgIEEBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yk5kBIJ+ZAQoxCgIEERIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YkZ8BIJifAQoxCgIEEhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqaUBIK2lAQoxCgIEExIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yr6sBILOrAQoxCgIEFBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YjbEBIJWxAQoxCgIEFRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y+7YBIIi3AQoxCgIEFhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y/bwBIIm9AQoxCgIEFxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y+8IBIIvDAQoxCgIEGBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YwMkBINTJAQoxCgIEGRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YltABIKrQAQoxCgIEGhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YtNYBIMzWAQoxCgIEGxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4twBIPDcAQoxCgIEHBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6OIBIPviAQoxCgIEHRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YgukBIJPpAQozCgQEHQMAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxje7wEg7+8BCjEKAgQeEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxim9gEgtPYBCjMKBAQeAwASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO38ASDw/AEKMwoEBB4DARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yg4MCIJODAgozCgQEHgMCEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiQigIglIoCCjUKBgQeAwIDABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yr5ACIMGQAgo3CggEHgMCAwADABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y9ZcCIIKYAgoxCgIEHxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y7J4CIPyeAgoxCgIEIBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YsaUCILilAgoxCgIEIRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Ym6sCIKurAgoxCgIEIhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqbECILqxAgoxCgIEIxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yu7cCIMO3AgozCgQEIwMAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiyvQIgur0CCjEKAgQkEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi7wwIgyMMCCjEKAgQlEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjxyQIgg8oCCjEKAgQmEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiH0AIgl9ACCjMKBAQmAwASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGN3WAiDl1gIKMQoCBCcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGP7cAiCO3QIKMQoCBCgSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIzjAiCj4wIKMQoCBCkSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLbpAiDR6QIKMQoCBCoSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLLwAiDA8AIKMwoEBAACBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2fcCIOT3AgozCgQEAAIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjs9wIg7/cCCjMKBAQAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL2wAyDCsAMKMwoEBAACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Ys7IDILiyAwozCgQEAAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj4swMggrQDCjMKBAQAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPO1AyD9tQMKMwoEBAACAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YvLcDIMW3AwozCgQEAAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi2uQMgv7kDCjMKBAQAAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIO7AyCRuwMKMwoEBAACAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Ygr0DIJC9AwozCgQEAAIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj2vgMghr8DCjMKBAQAAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL/AAyDNwAMKMwoEBAACBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YosIDIKrCAwozCgQEAAIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjxxAMg+cQDCjMKBAQAAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO/GAyD5xgMKMwoEBAACBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YocgDIKnIAwozCgQEAAIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiLygMgmMoDCjMKBAQAAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOvMAyD4zAMKMwoEBAACBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yp88DILbPAwozCgQEAAIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjj0AMg8NADCjMKBAQAAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMjSAyDO0gMKMwoEBAACBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YndUDIKPVAwozCgQEAAIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjS1wMg2tcDCjMKBAQAAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIDZAyCG2QMKMwoEBAACBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6NoDIPXaAwozCgQEAAIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjI3QMg1d0DCjMKBAQAAgcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMvfAyDa3wMKMwoEBAACBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yh+EDIJThAwozCgQEAAIIEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj24gMgg+MDCjMKBAQAAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNblAyDj5QMKMwoEBAACCBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2ecDIOjnAwozCgQEAAIIEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiV6QMgoukDCjMKBAQBAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMSNBCDOjQQKMwoEBAECABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YwY8EIMuPBAozCgQEAQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiwkQQguJEECjMKBAQBAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGICUBCCIlAQKMwoEBAECARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y/5UEIImWBAozCgQEAQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiylwQgupcECjMKBAQBAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJyZBCCpmQQKMwoEBAECAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y/psEIIucBAozCgQEAQICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiDngQgkp4ECjMKBAQBAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMCfBCDNnwQKMwoEBAICABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YmcYEIKPGBAozCgQEAgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiYyAQgosgECjMKBAQCAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOPJBCDsyQQKMwoEBAICARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4csEIOrLBAozCgQEAgICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjQzQQg2M0ECjMKBAQCAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKLQBCCq0AQKMwoEBAICAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yo9IEIK3SBAozCgQEAgICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjX0wQg39MECjMKBAQCAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMLVBCDP1QQKMwoEBAICAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YptgEILPYBAozCgQEAgIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxit2gQgvNoECjMKBAQCAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOvbBCD42wQKMwoEBAMCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YvMAFIMHABQozCgQEAwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi8wgUgwcIFCjMKBAQDAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIbEBSCQxAUKMwoEBAMCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yi8YFIJXGBQozCgQEAwICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjZxwUg4scFCjMKBAQDAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGN3JBSDmyQUKMwoEBAMCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YrcsFILnLBQozCgQEAwIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi0zQUgwM0FCjMKBAQDAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIrPBSCZzwUKMwoEBAMCBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YlNEFIKPRBQozCgQEAwIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjm0gUg79IFCjMKBAQDAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOrUBSDz1AUKMwoEBAMCBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y39YFIOnWBQozCgQEAwIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjW2QUg4NkFCjMKBAQDAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGN/bBSDr2wUKMwoEBAMCBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Ymt0FIKTdBQozCgQEAwIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxju3gUgh98FCjMKBAQDAgcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIvhBSCk4QUKMwoEBAMCBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqOMFIL3jBQozCgQEAwIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjV5QUg8OUFCjMKBAQDAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJ/nBSCo5wUKMwoEBAMCCBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yo+kFIKzpBQozCgQEAwIIEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxic6wUgp+sFCjMKBAQDAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOXsBSDu7AUKMwoEBAMCCRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Ywe4FIMvuBQozCgQEAwIJEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiq8QUgtPEFCjMKBAQDAgkSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLTzBSDA8wUKMwoEBAMCCRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y7/QFIPn0BQozCgQEAwIKEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjs9gUggPcFCjMKBAQDAgoSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGP35BSCR+gUKMwoEBAMCChIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YkfwFIKf8BQozCgQEAwIKEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjg/QUg9P0FCjMKBAQDAgsSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNn/BSDq/wUKMwoEBAMCCxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yu4IGIMyCBgozCgQEAwILEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjMhAYg34QGCjMKBAQDAgsSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJWGBiCmhgYKMwoEBAMCDBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YjYgGIJ2IBgozCgQEAwIMEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiOiwYgnosGCjMKBAQDAgwSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJ6NBiCwjQYKMwoEBAMCDBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y5Y4GIPWOBgozCgQEAwINEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjlkAYg+JAGCjMKBAQDAg0SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPKTBiCFlAYKMwoEBAMCDRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YhZYGIJqWBgozCgQEAwINEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjSlwYg5ZcGCjMKBAQDAg4SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJqZBiCkmQYKMwoEBAMCDhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YrJsGILabBgozCgQEAwIOEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxinnQYgs50GCjMKBAQDAg4SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPKeBiD8ngYKMwoEBAMCDxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yt6AGIMagBgozCgQEAwIPEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjOogYg3aIGCjMKBAQDAg8SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGM6kBiDfpAYKMwoEBAMCDxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YnqYGIK2mBgozCgQEAwIQEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjmpwYg8qcGCjMKBAQDAhASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO6pBiD6qQYKMwoEBAMCEBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y66sGIPmrBgozCgQEAwIQEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi4rQYgxK0GCjMKBAQDAhESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGICvBiCPrwYKMwoEBAMCERIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yi7EGIJqxBgozCgQEAwIREiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiLswYgnLMGCjMKBAQDAhESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNu0BiDqtAYKMwoEBAMCEhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yo7YGILG2BgozCgQEAwISEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi5uAYgx7gGCjMKBAQDAhISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLi6BiDIugYKMwoEBAMCEhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yh7wGIJW8BgozCgQEAwITEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj5vQYgiL4GCjMKBAQDAhMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMfABiDWwAYKMwoEBAMCFBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yn8IGIK3CBgozCgQEAwIUEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi3xAYgxcQGCjMKBAQDAhQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLbGBiDGxgYKMwoEBAMCFBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YhcgGIJPIBgozCgQEAwIVEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjPyQYg3skGCjMKBAQDAhUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNrLBiDpywYKMwoEBAMCFRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2s0GIOvNBgozCgQEAwIVEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiqzwYguc8GCjMKBAQDAhYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKPRBiC00QYKMwoEBAMCFhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqNQGILnUBgozCgQEAwIWEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi51gYgzNYGCjMKBAQDAhYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGILYBiCT2AYKMwoEBAMCFxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y+NkGIITaBgozCgQEAwIXEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjh3AYg7dwGCjMKBAQDAhcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO3eBiD73gYKMwoEBAMCFxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YrOAGILjgBgozCgQEBAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjVggcg34IHCjMKBAQEAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGM2FByDXhQcKMwoEBAQCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y5ocHIPKHBwozCgQEBAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxipiQcgs4kHCjMKBAQEAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPKKByD+igcKMwoEBAQCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YiY0HIJWNBwozCgQEBQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiHqwcgjqsHCjMKBAQFAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJOtByCarQcKMwoEBAYCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yg9IHII7SBwozCgQEBgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiW1AcgodQHCjMKBAQGAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOzVByD41QcKMwoEBAYCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YgdgHII3YBwozCgQEBgICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjX2Qcg4NkHCjMKBAQGAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOnbByDy2wcKMwoEBAYCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yvt0HIMjdBwozCgQEBgIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjR3wcg298HCjMKBAQHAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPeDCCCGhAgKMwoEBAcCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YgocIIJGHCAozCgQEBwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi2iQggwYkICjMKBAQHAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJyMCCCtjAgKMwoEBAcCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y440IIPONCAozCgQEBwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj+jwggjpAICjMKBAQIAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJG0CCCbtAgKMwoEBAgCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YibcIIJO3CAozCgQECAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiiuQggrrkICjMKBAQIAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOW6CCDvuggKMwoEBAgCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y3LwIIOm8CAozCgQECAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjWvwgg478ICjMKBAQIAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPLBCCCBwggKMwoEBAgCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yu8MIIMjDCAozCgQECQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxja4Qgg4eEICjMKBAQJAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOzjCCDz4wgKMwoEBAoCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YxYEJIMyBCQozCgQECgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjNgwkg1IMJCjMKBAQLAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLWqCSC+qgkKMwoEBAsCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yw6wJIMysCQozCgQECwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiWrgkgoa4JCjMKBAQLAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKWwCSCwsAkKMwoEBAsCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y+bEJIIWyCQozCgQECwICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiKtAkglrQJCjMKBAQLAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGN61CSDntQkKMwoEBAsCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y7LcJIPW3CQozCgQECwIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi/uQkgybkJCjMKBAQLAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGM67CSDYuwkKMwoEBAwCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YiuAJIJ7gCQozCgQEDAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxil4wkgueMJCjMKBAQMAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOblCSD25QkKMwoEBAwCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0ugJIOjoCQozCgQEDAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxih6gkgseoJCjMKBAQMAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLjsCSDI7AkKMwoEBA0CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YsI4KILeOCgozCgQEDQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi+kAogxZAKCjMKBAQNAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLWSCiC9kgoKMwoEBA0CARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YtpUKIL6VCgozCgQEDQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjJlwog05cKCjMKBAQNAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIaZCiCOmQoKMwoEBA8CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YleQKIKnkCgozCgQEDwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxin5wogu+cKCjMKBAQPAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLzpCiDS6QoKMwoEBA8CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YjOsKIKDrCgozCgQEDwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjU7Aog3uwKCjMKBAQPAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOfuCiDx7goKMwoEBA8CAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YvPAKIMvwCgozCgQEDwICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjU8gog4/IKCjMKBAQPAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKz0CiC69AoKMwoEBA8CAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yw/YKINH2CgozCgQEDwIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxit+AogxvgKCjMKBAQPAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMz6CiDl+goKMwoEBA8CBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6/wKIID9CgozCgQEDwIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxia/wogtf8KCjMKBAQPAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOWACyDugAsKMwoEBA8CBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y64ILIPSCCwozCgQEDwIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjohAsg+YQLCjMKBAQPAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMuHCyDchwsKMwoEBA8CBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y3YkLIPCJCwozCgQEDwIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiniwsguIsLCjMKBAQQAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIG+CyCVvgsKMwoEBBACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YnMALILDACwozCgQEEAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxigwgsgrcILCjMKBAQQAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGP3ECyCKxQsKMwoEBBACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YiccLIJjHCwozCgQEEAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjKyAsg18gLCjMKBAQQAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGI7LCyChywsKMwoEBBACAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y980LIIzOCwozCgQEEAIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjEzwsgz88LCjMKBAQQAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNbRCyDh0QsKMwoEBBACBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6NQLIIjVCwozCgQEEAIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxir2AsgzdgLCjMKBAQQAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJnaCyCp2gsKMwoEBBACBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YpNwLILTcCwozCgQEEQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiW/gsgnf4LCjMKBAQRAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGI6ADCCVgAwKMwoEBBECARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y8oEMIP6BDAozCgQEEQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjXhAwg44QMCjMKBAQRAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPWGDCD9hgwKMwoEBBECARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yu4kMIMmJDAozCgQEEgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiLjgwgj44MCjMKBAQSAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJaODCChjgwKMwoEBBICAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqI4MILGODAozCgQEEgIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi4jgwgxY4MCjMKBAQSAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMyODCDdjgwKMwoEBBICBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y5I4MIPOODAozCgQEEgIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj6jgwgj48MCjMKBAQSAgcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJqSDCCokgwKMwoEBBICABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yy9EMINLRDAozCgQEEgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi90wwgxNMMCjMKBAQSAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNrVDCDj1QwKMwoEBBICABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yz9cMINbXDAozCgQEEgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxie2Qwgq9kMCjMKBAQSAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPDbDCD92wwKMwoEBBICARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yot4MILHeDAozCgQEEgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjb3wwg6N8MCjMKBAQSAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLbhDCDB4QwKMwoEBBICAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YkuQMIJ3kDAozCgQEEgICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjC5gwgz+YMCjMKBAQSAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPfnDCCC6AwKMwoEBBICAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y3OkMIOvpDAozCgQEEgIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjI7Awg1+wMCjMKBAQSAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPzuDCCN7wwKMwoEBBICAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YufAMIMjwDAozCgQEEgIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiu8gwgwfIMCjMKBAQSAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKr1DCC99QwKMwoEBBICBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4vcMIPf3DAozCgQEEgIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxin+QwguvkMCjMKBAQSAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJr7DCCr+wwKMwoEBBICBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yjv4MIJ/+DAozCgQEEgIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjEgA0g14ANCjMKBAQSAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIWCDSCWgg0KMwoEBBICBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YhoQNIJyEDQozCgQEEgIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiOhw0gpIcNCjMKBAQSAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMmJDSDhiQ0KMwoEBBICBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YlIsNIKqLDQozCgQEEgIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiHjQ0gl40NCjMKBAQSAgcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPePDSCHkA0KMwoEBBICBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YrJINIL6SDQozCgQEEgIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjrkw0g+5MNCjMKBAQSAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKeVDSCxlQ0KMwoEBBICCBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqZcNILOXDQozCgQEEgIJEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiJmQ0gnJkNCjMKBAQSAgkSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIqhDSCdoQ0KMwoEBBMCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YyL8NINO/DQozCgQEEwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi+wQ0gycENCjMKBAQTAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGI/DDSCWww0KMwoEBBMCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yn8oNIKbKDQozCgQEFAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi16Q0gwOkNCjMKBAQUAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLPrDSC+6w0KMwoEBBQCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y/+wNIIntDQozCgQEFAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj87g0ghu8NCjMKBAQVAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLOSDiDBkg4KMwoEBBUCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Ym5UOIKmVDgozCgQEFQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiqlw4gupcOCjMKBAQVAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO6YDiD8mA4KMwoEBBUCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y35oOIOuaDgozCgQEFQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjFnQ4g0Z0OCjMKBAQVAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNKfDiDgnw4KMwoEBBUCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YkqEOIJ6hDgozCgQEFgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiExA4gi8QOCjMKBAQWAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIbGDiCNxg4KMwoEBBYCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y9ccOIPzHDgozCgQEFgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjMyg4g08oOCjMKBAQWAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNLMDiDbzA4KMwoEBBYCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yh84OII7ODgozCgQEFgICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi9zw4gws8OCjMKBAQWAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL3RDiDC0Q4KMwoEBBcCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4foOIOj6DgozCgQEFwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjr/A4g8vwOCjMKBAQXAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOL+DiDt/g4KMwoEBBcCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YxYEPINCBDwozCgQEFwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjXgw8g5IMPCjMKBAQXAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJiFDyCjhQ8KMwoEBBcCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y1oYPINuGDwozCgQEFwICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjeiA8g44gPCjMKBAQXAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOmKDyD1ig8KMwoEBBcCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YkI4PIJyODwozCgQEFwIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjXkA8g35APCjMKBAQXAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL+TDyDNkw8KMwoEBBgCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YoZgPIKyYDwozCgQEGAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxizmA8gvJgPCjMKBAQYAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNW/DyDivw8KMwoEBBgCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y98IPIITDDwozCgQEGAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjZxQ8g6MUPCjMKBAQYAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKLHDyCvxw8KMwoEBBgCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YrckPILjJDwozCgQEGAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjZzA8g5MwPCjMKBAQYAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLnPDyDGzw8KMwoEBBgCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y/tAPIInRDwozCgQEGQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjN8w8g2PMPCjMKBAQZAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOP1DyDu9Q8KMwoEBBkCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YxPcPIMv3DwozCgQEGQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiU/w8gm/8PCjMKBAQZAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOuAECD5gBAKMwoEBBkCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YhIMQIJKDEAozCgQEGgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjLphAg1qYQCjMKBAQaAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOmoECD0qBAKMwoEBBoCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YxaoQIM+qEAozCgQEGgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjirBAg7KwQCjMKBAQaAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMGuECDPrhAKMwoEBBoCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4rAQIPCwEAozCgQEGwQAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjD0BAgy9AQCjUKBgQbBAACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0tAQIObQEAo1CgYEGwQAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO3QECDz0BAKMwoEBBsCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Ym9IQIKbSEAozCgQEGwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj+1BAgidUQCjMKBAQbAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMrWECDR1hAKMwoEBBsCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0NgQINfYEAozCgQEHAQAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiB+RAgiPkQCjUKBgQcBAACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yj/kQIKL5EAo1CgYEHAQAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKn5ECCz+RAKNQoGBBwEAAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi6+RAgyPkQCjUKBgQcBAACAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yz/kQIOj5EAozCgQEHAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiX+xAgofsQCjMKBAQcAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIv+ECCV/hAKMwoEBBwCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y3f8QIOb/EAozCgQEHAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjvgREg+IERCjUKBgQdAwACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yr98RILrfEQo1CgYEHQMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOPhESDu4REKNQoGBB0DAAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjS4xEg4+MRCjUKBgQdAwACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YjOYRIJ3mEQozCgQEHQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj55xEgkOgRCjMKBAQdAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJ7qESC16hEKMwoEBB0CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yw+wRINbsEQozCgQEHQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj47hEgke8RCjMKBAQdAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNbwESDt8BEKMwoEBB0CARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y+/IRIJLzEQozCgQEHQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxig9REgs/URCjMKBAQdAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNX3ESDu9xEKMwoEBB0CAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y3PkRIO/5EQozCgQEHQICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjy/BEghf0RCjMKBAQdAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGI7/ESCj/xEKMwoEBB0CAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4IASIPOAEgozCgQEHQIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjpghIg/4ISCjMKBAQdAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIqGEiCghhIKMwoEBB0CAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0IgSIOKIEgozCgQEHQIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi+ixIg1osSCjMKBAQdAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMuNEiDjjRIKMwoEBB0CBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y9JASIIyREgozCgQEHQIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjAkxIg1JMSCjMKBAQdAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLKWEiDMlhIKMwoEBB0CBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YvZgSINGYEgozCgQEHQIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjXmxIg65sSCjMKBAQdAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPSdEiCKnhIKMwoEBB0CBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YyJ8SINyfEgozCgQEHQIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiuoRIgzaESCjMKBAQdAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNKjEiDxoxIKMwoEBB0CBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yk6YSIKymEgozCgQEHQIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj2qRIgj6oSCjMKBAQdAgcSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOmsEiD+rBIKMwoEBB0CBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y768SIIqwEgozCgQEHgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjstBIg77QSCjMKBAQeAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPa0EiCHtRIKMwoEBB4CAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YjrUSIJK1Ego1CgYEHgMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIiAEyCRgBMKNQoGBB4DAAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiYghMgoYITCjUKBgQeAwACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y54MTIO2DEwo1CgYEHgMAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPSFEyD6hRMKNQoGBB4DAAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjChxMgyocTCjUKBgQeAwACAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0YkTINmJEwo1CgYEHgMBAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPeOEyCAjxMKNQoGBB4DAQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjhuxMg57sTCjUKBgQeAwECABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YiL4TII6+Ewo1CgYEHgMBAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOO/EyDrvxMKNQoGBB4DAQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiMwhMglMITCjUKBgQeAwECAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6MMTIO/DEwo1CgYEHgMBAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJDGEyCXxhMKNQoGBB4DAQIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiQyBMgm8gTCjUKBgQeAwECAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YossTIK3LEwo1CgYEHgMBAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKPOEyCwzhMKNQoGBB4DAQIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjzzxMg/s8TCjUKBgQeAwECBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yy9ETINrREwo1CgYEHgMBAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPvTEyCK1BMKOQoKBB4DAgMAAwACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2tAUIOXQFAo5CgoEHgMCAwADAAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiw0xQgu9MUCjkKCgQeAwIDAAMAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGK/VFCC/1RQKOQoKBB4DAgMAAwACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YitgUIJrYFAo5CgoEHgMCAwADAAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiE2hQgjNoUCjkKCgQeAwIDAAMAAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNfcFCDf3BQKOQoKBB4DAgMAAwACAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yyt4UINPeFAo5CgoEHgMCAwADAAIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxie4RQgp+EUCjkKCgQeAwIDAAMAAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJzjFCCt4xQKOQoKBB4DAgMAAwACBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y+OUUIInmFAo5CgoEHgMCAwADAAIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiP6BQgsOgUCjkKCgQeAwIDAAMAAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPvqFCCc6xQKNwoIBB4DAgMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNvtFCDw7RQKNwoIBB4DAgMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJfyFCCs8hQKNwoIBB4DAgMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL31FCDO9RQKNwoIBB4DAgMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPr4FCCR+RQKNwoIBB4DAgMAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOD6FCDx+hQKNwoIBB4DAgMAAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKD9FCCx/RQKNQoGBB4DAgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj4/hQg/v4UCjUKBgQeAwICABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yh4EVII2BFQo1CgYEHgMCAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNaCFSDeghUKNQoGBB4DAgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjnhBUg74QVCjUKBgQeAwICAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yt4YVIL6GFQo1CgYEHgMCAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMeIFSDOiBUKNQoGBB4DAgIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiaihUgpIoVCjUKBgQeAwICAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YrYwVILeMFQo1CgYEHgMCAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNeOFSDsjhUKNQoGBB4DAgIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi1khUgypIVCjUKBgQeAwICBBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y15QVIO6UFQo1CgYEHgMCAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGK+WFSDElhUKMwoEBB4CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Ym5gVIKGYFQozCgQEHgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxikmxUgqpsVCjMKBAQeAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO2dFSD1nRUKMwoEBB4CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yop8VIKifFQozCgQEHgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxinoRUguqEVCjMKBAQeAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOSkFSD3pBUKMwoEBB4CARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YuqcVIM+nFQozCgQEHgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiJqRUgnKkVCjMKBAQeAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPaqFSD9qhUKMwoEBB4CAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yg64VIIquFQozCgQEHgICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjNsBUg1rAVCjMKBAQeAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGISyFSCLshUKMwoEBB8CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6NcVIPLXFQozCgQEHwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjY2hUg4toVCjMKBAQfAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOncFSD13BUKMwoEBB8CABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqN4VILLeFQozCgQEHwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiB4BUgneAVCjMKBAQfAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKniFSDF4hUKMwoEBB8CARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0eQVIOnkFQozCgQEHwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiJ5xUgp+cVCjMKBAQfAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO/oFSCG6RUKMwoEBB8CAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yn+sVILbrFQozCgQEHwICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjC7RUg1e0VCjMKBAQfAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPXvFSCO8BUKMwoEBCACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y/5IWIIuTFgozCgQEIAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj7lBYgh5UWCjMKBAQgAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMaWFiDTlhYKMwoEBCACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yw5gWINCYFgozCgQEIAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiNmhYgmJoWCjMKBAQgAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIicFiCTnBYKMwoEBCACAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YzJ0WINOdFgozCgQEIAIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjEnxYgy58WCjMKBAQhAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGN6/FiDwvxYKMwoEBCECABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y88EWIIXCFgozCgQEIQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjbwxYg5cMWCjMKBAQhAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLjLFiDCyxYKMwoEBCICABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YqOoWIMzqFgozCgQEIgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjf7BYgg+0WCjUKBgQjAwACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YrawXILmsFwo1CgYEIwMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGL2uFyDJrhcKNQoGBCMDAAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiQsBcgm7AXCjUKBgQjAwACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yn7IXIKqyFwozCgQEIwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjksxcg67MXCjMKBAQjAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGN61FyDltRcKMwoEBCMCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y0LcXINu3FwozCgQEIwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjPuhcg2roXCjMKBAQjAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNG8FyDevBcKMwoEBCMCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yir4XIJW+FwozCgQEJAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxia/xcgs/8XCjMKBAQkAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMKCGCDbghgKMwoEBCQCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yj4UYIKSFGAozCgQEJAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj8hxggl4gYCjMKBAQkAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNqJGCD0iRgKMwoEBCQCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y8IsYIIqMGAozCgQEJAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjajRgg8Y0YCjMKBAQkAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGO2PGCCEkBgKMwoEBCQCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YlJIYILKSGAozCgQEJAIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjBlRgg35UYCjMKBAQkAgMSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJOYGCCtmBgKMwoEBCQCAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YhZsYIKWbGAozCgQEJAIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjlnBgg+JwYCjMKBAQkAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPSeGCCHnxgKMwoEBCQCBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yk6EYIK2hGAozCgQEJAIFEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi8pBgg1qQYCjMKBAQkAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIqnGCCgpxgKMwoEBCQCBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y+KkYIJSqGAozCgQEJAIGEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjSqxgg56sYCjMKBAQkAgYSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOOtGCD4rRgKMwoEBCQCBxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yza8YIOevGAozCgQEJAIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjjsRgg/bEYCjMKBAQkAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJK0GCCztBgKMwoEBCQCCBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YwrcYIOO3GAozCgQEJAIIEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiXuhggtLoYCjMKBAQkAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIy9GCCvvRgKMwoEBCQCCRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y8r4YIIS/GAozCgQEJAIJEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiBwRggk8EYCjMKBAQkAgoSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGILDGCCQwxgKMwoEBCQCChIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yz8UYIN3FGAozCgQEJQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi75hggxuYYCjMKBAQlAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJLpGCCd6RgKMwoEBCUCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y6OoYIPXqGAozCgQEJQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj77BggiO0YCjUKBgQmAwACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YpLgZIK+4GQo1CgYEJgMAAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMO6GSDOuhkKNQoGBCYDAAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxicvBkgprwZCjUKBgQmAwACARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yu74ZIMW+GQo1CgYEJgMAAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLrAGSDMwBkKNQoGBCYDAAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiiwxkgtMMZCjUKBgQmAwACAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YzcUZIOHFGQo1CgYEJgMAAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKXHGSC3xxkKNQoGBCYDAAIDEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj7yBkgiMkZCjUKBgQmAwACAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YnMsZIKnLGQo1CgYEJgMAAgQSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPXMGSD9zBkKNQoGBCYDAAIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiSzxkgms8ZCjUKBgQmAwACBRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y59AZIO3QGQo1CgYEJgMAAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGILTGSCI0xkKMwoEBCYCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yi9UZIJvVGQozCgQEJgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjF2Bkg1dgZCjMKBAQmAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGJrbGSCm2xkKMwoEBCYCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yi94ZIJ3eGQozCgQEJwIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjEgRogy4EaCjMKBAQnAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGM6DGiDVgxoKMwoEBCcCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YnoUaIKqFGgozCgQEJwIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi5hxogxYcaCjMKBAQnAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLOJGiC9iRoKMwoEBCcCAhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YkowaIJyMGgozCgQEJwICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxijjhogr44aCjMKBAQnAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGOKPGiDsjxoKMwoEBCgCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y9bIaIIazGgozCgQEKAIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiltRogtrUaCjMKBAQoAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIK3GiCKtxoKMwoEBCgCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Ym7kaIKO5GgozCgQEKAICEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjyuhog/LoaCjMKBAQoAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIy9GiCWvRoKMwoEBCkCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4eAaIPLgGgozCgQEKQIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxis5BogveQaCjMKBAQpAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGInnGiCW5xoKMwoEBCkCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Yj+oaIKLqGgozCgQEKgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiFkRsgnJEbCjMKBAQqAgASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLyUGyDTlBsKMwoEBCoCABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YkpcbIKWXGwozCgQEKgIAEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiEmhsgnZobCjMKBAQqAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKKcGyC2nBsKMwoEBCoCARIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y4p8bIPafGwozCgQEKgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi9ohsgzaIbCjMKBAQqAgESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLClGyDGpRsKMQoCBQASI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLimGyDFphsKMwoEBQACABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YzKYbIOamGwozCgQFAAIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjtphsggKcbCjMKBAUAAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGIenGyCbpxsKMwoEBQACAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YoqcbILanGwozCgQFAAIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi9pxsg0acbCjMKBAUAAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNinGyDvpxsKMQoCBQESI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKyoGyC3qBsKMwoEBQECABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YvqgbINaoGwozCgQFAQIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjdqBsg86gbCjMKBAUBAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGPqoGyCdqRsKMQoCBQISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNqpGyDmqRsKMwoEBQICABIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y7akbIIaqGwozCgQFAgIBEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiNqhsgn6obCjMKBAUCAgISI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGKaqGyC+qhsKMwoEBQICAxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YxaobINmqGwozCgQFAgIEEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxjgqhsg+KobCjMKBAUCAgUSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGP+qGyCVqxsKMwoEBQICBhIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8YnKsbIK+rGwozCgQFAgIHEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxi2qxsgzasbCjMKBAUCAggSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGNSrGyD0qxsKMwoEBQICCRIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y+6sbII2sGwozCgQFAgIKEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiUrBsguawbCjMKBAUCAgsSI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGMGsGyDbrBsKMwoEBQICDBIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y46wbIIWtGwozCgQFAgINEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxiNrRsgs60bCjMKBAUCAg4SI2FsaXMvYWRrL3Nlc3Npb25zL3YxL3Nlc3Npb25zLnByb3RvGLutGyDRrRsKMwoEBQICDxIjYWxpcy9hZGsvc2Vzc2lvbnMvdjEvc2Vzc2lvbnMucHJvdG8Y2a0bIPetGwozCgQFAgIQEiNhbGlzL2Fkay9zZXNzaW9ucy92MS9zZXNzaW9ucy5wcm90bxj/rRsgmK4b
