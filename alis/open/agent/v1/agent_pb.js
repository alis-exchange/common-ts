// source: alis/open/agent/v1/agent.proto
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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_client_pb = require('../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.alis.open.agent.v1.APIKeySecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.AgentCapabilities', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.AgentCard', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.AgentCardSignature', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.AgentExtension', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.AgentInterface', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.AgentProvider', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.AgentSkill', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.Artifact', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.AuthenticationInfo', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.CancelTaskRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.ClientCredentialsOAuthFlow', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.DataPart', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.FilePart', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.FilePart.FileCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.GetAgentCardRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.GetTaskRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.HTTPAuthSecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.ImplicitOAuthFlow', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.ListTasksRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.ListTasksResponse', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.Message', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.MutualTlsSecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.OAuth2SecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.OAuthFlows', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.OAuthFlows.FlowCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.OpenIdConnectSecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.Part', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.Part.PartCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.PasswordOAuthFlow', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.PushNotificationConfig', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.Role', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.Security', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.SecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.SecurityScheme.SchemeCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.SendMessageConfiguration', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.SendMessageRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.SendMessageResponse', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.SendMessageResponse.PayloadCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.StreamResponse', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.StreamResponse.PayloadCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.StringList', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.Task', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.TaskArtifactUpdateEvent', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.TaskPushNotificationConfig', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.TaskState', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.TaskStatus', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.TaskStatusUpdateEvent', null, global);
goog.exportSymbol('proto.alis.open.agent.v1.TaskSubscriptionRequest', null, global);
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
proto.alis.open.agent.v1.SendMessageConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v1.SendMessageConfiguration.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v1.SendMessageConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.SendMessageConfiguration.displayName = 'proto.alis.open.agent.v1.SendMessageConfiguration';
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
proto.alis.open.agent.v1.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v1.Task.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v1.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.Task.displayName = 'proto.alis.open.agent.v1.Task';
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
proto.alis.open.agent.v1.TaskStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.TaskStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.TaskStatus.displayName = 'proto.alis.open.agent.v1.TaskStatus';
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
proto.alis.open.agent.v1.Part = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v1.Part.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v1.Part, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.Part.displayName = 'proto.alis.open.agent.v1.Part';
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
proto.alis.open.agent.v1.FilePart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v1.FilePart.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v1.FilePart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.FilePart.displayName = 'proto.alis.open.agent.v1.FilePart';
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
proto.alis.open.agent.v1.DataPart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.DataPart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.DataPart.displayName = 'proto.alis.open.agent.v1.DataPart';
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
proto.alis.open.agent.v1.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v1.Message.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v1.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.Message.displayName = 'proto.alis.open.agent.v1.Message';
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
proto.alis.open.agent.v1.Artifact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v1.Artifact.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v1.Artifact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.Artifact.displayName = 'proto.alis.open.agent.v1.Artifact';
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
proto.alis.open.agent.v1.TaskStatusUpdateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.TaskStatusUpdateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.TaskStatusUpdateEvent.displayName = 'proto.alis.open.agent.v1.TaskStatusUpdateEvent';
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
proto.alis.open.agent.v1.TaskArtifactUpdateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.TaskArtifactUpdateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.TaskArtifactUpdateEvent.displayName = 'proto.alis.open.agent.v1.TaskArtifactUpdateEvent';
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
proto.alis.open.agent.v1.PushNotificationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.PushNotificationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.PushNotificationConfig.displayName = 'proto.alis.open.agent.v1.PushNotificationConfig';
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
proto.alis.open.agent.v1.AuthenticationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v1.AuthenticationInfo.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v1.AuthenticationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.AuthenticationInfo.displayName = 'proto.alis.open.agent.v1.AuthenticationInfo';
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
proto.alis.open.agent.v1.AgentInterface = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.AgentInterface, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.AgentInterface.displayName = 'proto.alis.open.agent.v1.AgentInterface';
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
proto.alis.open.agent.v1.AgentCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v1.AgentCard.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v1.AgentCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.AgentCard.displayName = 'proto.alis.open.agent.v1.AgentCard';
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
proto.alis.open.agent.v1.AgentProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.AgentProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.AgentProvider.displayName = 'proto.alis.open.agent.v1.AgentProvider';
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
proto.alis.open.agent.v1.AgentCapabilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v1.AgentCapabilities.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v1.AgentCapabilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.AgentCapabilities.displayName = 'proto.alis.open.agent.v1.AgentCapabilities';
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
proto.alis.open.agent.v1.AgentExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.AgentExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.AgentExtension.displayName = 'proto.alis.open.agent.v1.AgentExtension';
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
proto.alis.open.agent.v1.AgentSkill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v1.AgentSkill.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v1.AgentSkill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.AgentSkill.displayName = 'proto.alis.open.agent.v1.AgentSkill';
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
proto.alis.open.agent.v1.AgentCardSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.AgentCardSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.AgentCardSignature.displayName = 'proto.alis.open.agent.v1.AgentCardSignature';
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
proto.alis.open.agent.v1.TaskPushNotificationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.TaskPushNotificationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.TaskPushNotificationConfig.displayName = 'proto.alis.open.agent.v1.TaskPushNotificationConfig';
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
proto.alis.open.agent.v1.StringList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v1.StringList.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v1.StringList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.StringList.displayName = 'proto.alis.open.agent.v1.StringList';
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
proto.alis.open.agent.v1.Security = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.Security, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.Security.displayName = 'proto.alis.open.agent.v1.Security';
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
proto.alis.open.agent.v1.SecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v1.SecurityScheme.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v1.SecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.SecurityScheme.displayName = 'proto.alis.open.agent.v1.SecurityScheme';
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
proto.alis.open.agent.v1.APIKeySecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.APIKeySecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.APIKeySecurityScheme.displayName = 'proto.alis.open.agent.v1.APIKeySecurityScheme';
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
proto.alis.open.agent.v1.HTTPAuthSecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.HTTPAuthSecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.HTTPAuthSecurityScheme.displayName = 'proto.alis.open.agent.v1.HTTPAuthSecurityScheme';
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
proto.alis.open.agent.v1.OAuth2SecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.OAuth2SecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.OAuth2SecurityScheme.displayName = 'proto.alis.open.agent.v1.OAuth2SecurityScheme';
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
proto.alis.open.agent.v1.OpenIdConnectSecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.OpenIdConnectSecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.displayName = 'proto.alis.open.agent.v1.OpenIdConnectSecurityScheme';
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
proto.alis.open.agent.v1.MutualTlsSecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.MutualTlsSecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.MutualTlsSecurityScheme.displayName = 'proto.alis.open.agent.v1.MutualTlsSecurityScheme';
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
proto.alis.open.agent.v1.OAuthFlows = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v1.OAuthFlows.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v1.OAuthFlows, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.OAuthFlows.displayName = 'proto.alis.open.agent.v1.OAuthFlows';
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
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.displayName = 'proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow';
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
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.ClientCredentialsOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.displayName = 'proto.alis.open.agent.v1.ClientCredentialsOAuthFlow';
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
proto.alis.open.agent.v1.ImplicitOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.ImplicitOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.ImplicitOAuthFlow.displayName = 'proto.alis.open.agent.v1.ImplicitOAuthFlow';
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
proto.alis.open.agent.v1.PasswordOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.PasswordOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.PasswordOAuthFlow.displayName = 'proto.alis.open.agent.v1.PasswordOAuthFlow';
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
proto.alis.open.agent.v1.SendMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.SendMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.SendMessageRequest.displayName = 'proto.alis.open.agent.v1.SendMessageRequest';
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
proto.alis.open.agent.v1.GetTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.GetTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.GetTaskRequest.displayName = 'proto.alis.open.agent.v1.GetTaskRequest';
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
proto.alis.open.agent.v1.ListTasksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.ListTasksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.ListTasksRequest.displayName = 'proto.alis.open.agent.v1.ListTasksRequest';
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
proto.alis.open.agent.v1.CancelTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.CancelTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.CancelTaskRequest.displayName = 'proto.alis.open.agent.v1.CancelTaskRequest';
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
proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.displayName = 'proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest';
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
proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.displayName = 'proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest';
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
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.displayName = 'proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest';
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
proto.alis.open.agent.v1.TaskSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.TaskSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.TaskSubscriptionRequest.displayName = 'proto.alis.open.agent.v1.TaskSubscriptionRequest';
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
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.displayName = 'proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest';
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
proto.alis.open.agent.v1.GetAgentCardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v1.GetAgentCardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.GetAgentCardRequest.displayName = 'proto.alis.open.agent.v1.GetAgentCardRequest';
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
proto.alis.open.agent.v1.SendMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v1.SendMessageResponse.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v1.SendMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.SendMessageResponse.displayName = 'proto.alis.open.agent.v1.SendMessageResponse';
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
proto.alis.open.agent.v1.StreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v1.StreamResponse.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v1.StreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.StreamResponse.displayName = 'proto.alis.open.agent.v1.StreamResponse';
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
proto.alis.open.agent.v1.ListTasksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v1.ListTasksResponse.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v1.ListTasksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.ListTasksResponse.displayName = 'proto.alis.open.agent.v1.ListTasksResponse';
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
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.displayName = 'proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v1.SendMessageConfiguration.repeatedFields_ = [1];



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
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.SendMessageConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.SendMessageConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.SendMessageConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
acceptedOutputModesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
pushNotification: (f = msg.getPushNotification()) && proto.alis.open.agent.v1.PushNotificationConfig.toObject(includeInstance, f),
historyLength: jspb.Message.getFieldWithDefault(msg, 3, 0),
blocking: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.alis.open.agent.v1.SendMessageConfiguration}
 */
proto.alis.open.agent.v1.SendMessageConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.SendMessageConfiguration;
  return proto.alis.open.agent.v1.SendMessageConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.SendMessageConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.SendMessageConfiguration}
 */
proto.alis.open.agent.v1.SendMessageConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addAcceptedOutputModes(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v1.PushNotificationConfig;
      reader.readMessage(value,proto.alis.open.agent.v1.PushNotificationConfig.deserializeBinaryFromReader);
      msg.setPushNotification(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHistoryLength(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlocking(value);
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
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.SendMessageConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.SendMessageConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.SendMessageConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAcceptedOutputModesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPushNotification();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v1.PushNotificationConfig.serializeBinaryToWriter
    );
  }
  f = message.getHistoryLength();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getBlocking();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * repeated string accepted_output_modes = 1;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.getAcceptedOutputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.setAcceptedOutputModesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.addAcceptedOutputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.clearAcceptedOutputModesList = function() {
  return this.setAcceptedOutputModesList([]);
};


/**
 * optional PushNotificationConfig push_notification = 2;
 * @return {?proto.alis.open.agent.v1.PushNotificationConfig}
 */
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.getPushNotification = function() {
  return /** @type{?proto.alis.open.agent.v1.PushNotificationConfig} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.PushNotificationConfig, 2));
};


/**
 * @param {?proto.alis.open.agent.v1.PushNotificationConfig|undefined} value
 * @return {!proto.alis.open.agent.v1.SendMessageConfiguration} returns this
*/
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.setPushNotification = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.clearPushNotification = function() {
  return this.setPushNotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.hasPushNotification = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 history_length = 3;
 * @return {number}
 */
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.getHistoryLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v1.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.setHistoryLength = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool blocking = 4;
 * @return {boolean}
 */
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.getBlocking = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v1.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v1.SendMessageConfiguration.prototype.setBlocking = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v1.Task.repeatedFields_ = [5,6];



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
proto.alis.open.agent.v1.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 3, ""),
status: (f = msg.getStatus()) && proto.alis.open.agent.v1.TaskStatus.toObject(includeInstance, f),
artifactsList: jspb.Message.toObjectList(msg.getArtifactsList(),
    proto.alis.open.agent.v1.Artifact.toObject, includeInstance),
historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.alis.open.agent.v1.Message.toObject, includeInstance),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.Task}
 */
proto.alis.open.agent.v1.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.Task;
  return proto.alis.open.agent.v1.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.Task}
 */
proto.alis.open.agent.v1.Task.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContextId(value);
      break;
    case 4:
      var value = new proto.alis.open.agent.v1.TaskStatus;
      reader.readMessage(value,proto.alis.open.agent.v1.TaskStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 5:
      var value = new proto.alis.open.agent.v1.Artifact;
      reader.readMessage(value,proto.alis.open.agent.v1.Artifact.deserializeBinaryFromReader);
      msg.addArtifacts(value);
      break;
    case 6:
      var value = new proto.alis.open.agent.v1.Message;
      reader.readMessage(value,proto.alis.open.agent.v1.Message.deserializeBinaryFromReader);
      msg.addHistory(value);
      break;
    case 7:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
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
proto.alis.open.agent.v1.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContextId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.open.agent.v1.TaskStatus.serializeBinaryToWriter
    );
  }
  f = message.getArtifactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.alis.open.agent.v1.Artifact.serializeBinaryToWriter
    );
  }
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.alis.open.agent.v1.Message.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.Task.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.Task} returns this
 */
proto.alis.open.agent.v1.Task.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.Task.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.Task} returns this
 */
proto.alis.open.agent.v1.Task.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string context_id = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.Task.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.Task} returns this
 */
proto.alis.open.agent.v1.Task.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TaskStatus status = 4;
 * @return {?proto.alis.open.agent.v1.TaskStatus}
 */
proto.alis.open.agent.v1.Task.prototype.getStatus = function() {
  return /** @type{?proto.alis.open.agent.v1.TaskStatus} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.TaskStatus, 4));
};


/**
 * @param {?proto.alis.open.agent.v1.TaskStatus|undefined} value
 * @return {!proto.alis.open.agent.v1.Task} returns this
*/
proto.alis.open.agent.v1.Task.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.Task} returns this
 */
proto.alis.open.agent.v1.Task.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.Task.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Artifact artifacts = 5;
 * @return {!Array<!proto.alis.open.agent.v1.Artifact>}
 */
proto.alis.open.agent.v1.Task.prototype.getArtifactsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.Artifact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.Artifact, 5));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.Artifact>} value
 * @return {!proto.alis.open.agent.v1.Task} returns this
*/
proto.alis.open.agent.v1.Task.prototype.setArtifactsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.alis.open.agent.v1.Artifact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.Artifact}
 */
proto.alis.open.agent.v1.Task.prototype.addArtifacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.alis.open.agent.v1.Artifact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.Task} returns this
 */
proto.alis.open.agent.v1.Task.prototype.clearArtifactsList = function() {
  return this.setArtifactsList([]);
};


/**
 * repeated Message history = 6;
 * @return {!Array<!proto.alis.open.agent.v1.Message>}
 */
proto.alis.open.agent.v1.Task.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.Message, 6));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.Message>} value
 * @return {!proto.alis.open.agent.v1.Task} returns this
*/
proto.alis.open.agent.v1.Task.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.alis.open.agent.v1.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.Message}
 */
proto.alis.open.agent.v1.Task.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.alis.open.agent.v1.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.Task} returns this
 */
proto.alis.open.agent.v1.Task.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};


/**
 * optional google.protobuf.Struct metadata = 7;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v1.Task.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 7));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v1.Task} returns this
*/
proto.alis.open.agent.v1.Task.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.Task} returns this
 */
proto.alis.open.agent.v1.Task.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.Task.prototype.hasMetadata = function() {
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
proto.alis.open.agent.v1.TaskStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.TaskStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.TaskStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.TaskStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0),
update: (f = msg.getUpdate()) && proto.alis.open.agent.v1.Message.toObject(includeInstance, f),
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
 * @return {!proto.alis.open.agent.v1.TaskStatus}
 */
proto.alis.open.agent.v1.TaskStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.TaskStatus;
  return proto.alis.open.agent.v1.TaskStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.TaskStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.TaskStatus}
 */
proto.alis.open.agent.v1.TaskStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.alis.open.agent.v1.TaskState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v1.Message;
      reader.readMessage(value,proto.alis.open.agent.v1.Message.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    case 3:
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
proto.alis.open.agent.v1.TaskStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.TaskStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.TaskStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.TaskStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v1.Message.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional TaskState state = 1;
 * @return {!proto.alis.open.agent.v1.TaskState}
 */
proto.alis.open.agent.v1.TaskStatus.prototype.getState = function() {
  return /** @type {!proto.alis.open.agent.v1.TaskState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.alis.open.agent.v1.TaskState} value
 * @return {!proto.alis.open.agent.v1.TaskStatus} returns this
 */
proto.alis.open.agent.v1.TaskStatus.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Message update = 2;
 * @return {?proto.alis.open.agent.v1.Message}
 */
proto.alis.open.agent.v1.TaskStatus.prototype.getUpdate = function() {
  return /** @type{?proto.alis.open.agent.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.Message, 2));
};


/**
 * @param {?proto.alis.open.agent.v1.Message|undefined} value
 * @return {!proto.alis.open.agent.v1.TaskStatus} returns this
*/
proto.alis.open.agent.v1.TaskStatus.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.TaskStatus} returns this
 */
proto.alis.open.agent.v1.TaskStatus.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.TaskStatus.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.alis.open.agent.v1.TaskStatus.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.alis.open.agent.v1.TaskStatus} returns this
*/
proto.alis.open.agent.v1.TaskStatus.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.TaskStatus} returns this
 */
proto.alis.open.agent.v1.TaskStatus.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.TaskStatus.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.alis.open.agent.v1.Part.oneofGroups_ = [[1,2,3,20]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v1.Part.PartCase = {
  PART_NOT_SET: 0,
  TEXT: 1,
  FILE: 2,
  DATA: 3,
  ANY: 20
};

/**
 * @return {proto.alis.open.agent.v1.Part.PartCase}
 */
proto.alis.open.agent.v1.Part.prototype.getPartCase = function() {
  return /** @type {proto.alis.open.agent.v1.Part.PartCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v1.Part.oneofGroups_[0]));
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
proto.alis.open.agent.v1.Part.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.Part.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.Part} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.Part.toObject = function(includeInstance, msg) {
  var f, obj = {
text: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
file: (f = msg.getFile()) && proto.alis.open.agent.v1.FilePart.toObject(includeInstance, f),
data: (f = msg.getData()) && proto.alis.open.agent.v1.DataPart.toObject(includeInstance, f),
any: (f = msg.getAny()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.Part}
 */
proto.alis.open.agent.v1.Part.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.Part;
  return proto.alis.open.agent.v1.Part.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.Part} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.Part}
 */
proto.alis.open.agent.v1.Part.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v1.FilePart;
      reader.readMessage(value,proto.alis.open.agent.v1.FilePart.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v1.DataPart;
      reader.readMessage(value,proto.alis.open.agent.v1.DataPart.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 20:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setAny(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
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
proto.alis.open.agent.v1.Part.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.Part.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.Part} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.Part.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v1.FilePart.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.open.agent.v1.DataPart.serializeBinaryToWriter
    );
  }
  f = message.getAny();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.Part.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.Part} returns this
 */
proto.alis.open.agent.v1.Part.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.alis.open.agent.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.open.agent.v1.Part} returns this
 */
proto.alis.open.agent.v1.Part.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 1, proto.alis.open.agent.v1.Part.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.Part.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FilePart file = 2;
 * @return {?proto.alis.open.agent.v1.FilePart}
 */
proto.alis.open.agent.v1.Part.prototype.getFile = function() {
  return /** @type{?proto.alis.open.agent.v1.FilePart} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.FilePart, 2));
};


/**
 * @param {?proto.alis.open.agent.v1.FilePart|undefined} value
 * @return {!proto.alis.open.agent.v1.Part} returns this
*/
proto.alis.open.agent.v1.Part.prototype.setFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.open.agent.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.Part} returns this
 */
proto.alis.open.agent.v1.Part.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.Part.prototype.hasFile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DataPart data = 3;
 * @return {?proto.alis.open.agent.v1.DataPart}
 */
proto.alis.open.agent.v1.Part.prototype.getData = function() {
  return /** @type{?proto.alis.open.agent.v1.DataPart} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.DataPart, 3));
};


/**
 * @param {?proto.alis.open.agent.v1.DataPart|undefined} value
 * @return {!proto.alis.open.agent.v1.Part} returns this
*/
proto.alis.open.agent.v1.Part.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.alis.open.agent.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.Part} returns this
 */
proto.alis.open.agent.v1.Part.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.Part.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Any any = 20;
 * @return {?proto.google.protobuf.Any}
 */
proto.alis.open.agent.v1.Part.prototype.getAny = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 20));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.alis.open.agent.v1.Part} returns this
*/
proto.alis.open.agent.v1.Part.prototype.setAny = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.alis.open.agent.v1.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.Part} returns this
 */
proto.alis.open.agent.v1.Part.prototype.clearAny = function() {
  return this.setAny(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.Part.prototype.hasAny = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional google.protobuf.Struct metadata = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v1.Part.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v1.Part} returns this
*/
proto.alis.open.agent.v1.Part.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.Part} returns this
 */
proto.alis.open.agent.v1.Part.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.Part.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.alis.open.agent.v1.FilePart.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v1.FilePart.FileCase = {
  FILE_NOT_SET: 0,
  FILE_WITH_URI: 1,
  FILE_WITH_BYTES: 2
};

/**
 * @return {proto.alis.open.agent.v1.FilePart.FileCase}
 */
proto.alis.open.agent.v1.FilePart.prototype.getFileCase = function() {
  return /** @type {proto.alis.open.agent.v1.FilePart.FileCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v1.FilePart.oneofGroups_[0]));
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
proto.alis.open.agent.v1.FilePart.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.FilePart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.FilePart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.FilePart.toObject = function(includeInstance, msg) {
  var f, obj = {
fileWithUri: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
fileWithBytes: msg.getFileWithBytes_asB64(),
mimeType: jspb.Message.getFieldWithDefault(msg, 3, ""),
name: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.alis.open.agent.v1.FilePart}
 */
proto.alis.open.agent.v1.FilePart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.FilePart;
  return proto.alis.open.agent.v1.FilePart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.FilePart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.FilePart}
 */
proto.alis.open.agent.v1.FilePart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFileWithUri(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileWithBytes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMimeType(value);
      break;
    case 4:
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
proto.alis.open.agent.v1.FilePart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.FilePart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.FilePart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.FilePart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getMimeType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string file_with_uri = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.FilePart.prototype.getFileWithUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.FilePart} returns this
 */
proto.alis.open.agent.v1.FilePart.prototype.setFileWithUri = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.alis.open.agent.v1.FilePart.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.open.agent.v1.FilePart} returns this
 */
proto.alis.open.agent.v1.FilePart.prototype.clearFileWithUri = function() {
  return jspb.Message.setOneofField(this, 1, proto.alis.open.agent.v1.FilePart.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.FilePart.prototype.hasFileWithUri = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes file_with_bytes = 2;
 * @return {!(string|Uint8Array)}
 */
proto.alis.open.agent.v1.FilePart.prototype.getFileWithBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes file_with_bytes = 2;
 * This is a type-conversion wrapper around `getFileWithBytes()`
 * @return {string}
 */
proto.alis.open.agent.v1.FilePart.prototype.getFileWithBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileWithBytes()));
};


/**
 * optional bytes file_with_bytes = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileWithBytes()`
 * @return {!Uint8Array}
 */
proto.alis.open.agent.v1.FilePart.prototype.getFileWithBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileWithBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.alis.open.agent.v1.FilePart} returns this
 */
proto.alis.open.agent.v1.FilePart.prototype.setFileWithBytes = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.alis.open.agent.v1.FilePart.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.open.agent.v1.FilePart} returns this
 */
proto.alis.open.agent.v1.FilePart.prototype.clearFileWithBytes = function() {
  return jspb.Message.setOneofField(this, 2, proto.alis.open.agent.v1.FilePart.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.FilePart.prototype.hasFileWithBytes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string mime_type = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.FilePart.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.FilePart} returns this
 */
proto.alis.open.agent.v1.FilePart.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.alis.open.agent.v1.FilePart.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.FilePart} returns this
 */
proto.alis.open.agent.v1.FilePart.prototype.setName = function(value) {
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
proto.alis.open.agent.v1.DataPart.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.DataPart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.DataPart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.DataPart.toObject = function(includeInstance, msg) {
  var f, obj = {
data: (f = msg.getData()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.DataPart}
 */
proto.alis.open.agent.v1.DataPart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.DataPart;
  return proto.alis.open.agent.v1.DataPart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.DataPart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.DataPart}
 */
proto.alis.open.agent.v1.DataPart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
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
proto.alis.open.agent.v1.DataPart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.DataPart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.DataPart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.DataPart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Struct data = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v1.DataPart.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v1.DataPart} returns this
*/
proto.alis.open.agent.v1.DataPart.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.DataPart} returns this
 */
proto.alis.open.agent.v1.DataPart.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.DataPart.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v1.Message.repeatedFields_ = [5,7,8];



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
proto.alis.open.agent.v1.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
messageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
taskId: jspb.Message.getFieldWithDefault(msg, 3, ""),
role: jspb.Message.getFieldWithDefault(msg, 4, 0),
partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.alis.open.agent.v1.Part.toObject, includeInstance),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
extensionsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
referenceTaskIdsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.alis.open.agent.v1.Message}
 */
proto.alis.open.agent.v1.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.Message;
  return proto.alis.open.agent.v1.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.Message}
 */
proto.alis.open.agent.v1.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMessageId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContextId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTaskId(value);
      break;
    case 4:
      var value = /** @type {!proto.alis.open.agent.v1.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 5:
      var value = new proto.alis.open.agent.v1.Part;
      reader.readMessage(value,proto.alis.open.agent.v1.Part.deserializeBinaryFromReader);
      msg.addParts(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addExtensions(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addReferenceTaskIds(value);
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
proto.alis.open.agent.v1.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContextId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.alis.open.agent.v1.Part.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getReferenceTaskIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string message_id = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.Message.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.Message.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string task_id = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.Message.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Role role = 4;
 * @return {!proto.alis.open.agent.v1.Role}
 */
proto.alis.open.agent.v1.Message.prototype.getRole = function() {
  return /** @type {!proto.alis.open.agent.v1.Role} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.alis.open.agent.v1.Role} value
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated Part parts = 5;
 * @return {!Array<!proto.alis.open.agent.v1.Part>}
 */
proto.alis.open.agent.v1.Message.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.Part>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.Part, 5));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.Part>} value
 * @return {!proto.alis.open.agent.v1.Message} returns this
*/
proto.alis.open.agent.v1.Message.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.alis.open.agent.v1.Part=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.Part}
 */
proto.alis.open.agent.v1.Message.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.alis.open.agent.v1.Part, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};


/**
 * optional google.protobuf.Struct metadata = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v1.Message.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v1.Message} returns this
*/
proto.alis.open.agent.v1.Message.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.Message.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string extensions = 7;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.Message.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};


/**
 * repeated string reference_task_ids = 8;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.Message.prototype.getReferenceTaskIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.setReferenceTaskIdsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.addReferenceTaskIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.Message} returns this
 */
proto.alis.open.agent.v1.Message.prototype.clearReferenceTaskIdsList = function() {
  return this.setReferenceTaskIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v1.Artifact.repeatedFields_ = [5,7];



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
proto.alis.open.agent.v1.Artifact.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.Artifact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.Artifact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.Artifact.toObject = function(includeInstance, msg) {
  var f, obj = {
artifactId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.alis.open.agent.v1.Part.toObject, includeInstance),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
extensionsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.alis.open.agent.v1.Artifact}
 */
proto.alis.open.agent.v1.Artifact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.Artifact;
  return proto.alis.open.agent.v1.Artifact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.Artifact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.Artifact}
 */
proto.alis.open.agent.v1.Artifact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setArtifactId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.alis.open.agent.v1.Part;
      reader.readMessage(value,proto.alis.open.agent.v1.Part.deserializeBinaryFromReader);
      msg.addParts(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addExtensions(value);
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
proto.alis.open.agent.v1.Artifact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.Artifact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.Artifact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.Artifact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArtifactId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.alis.open.agent.v1.Part.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional string artifact_id = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.Artifact.prototype.getArtifactId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.Artifact} returns this
 */
proto.alis.open.agent.v1.Artifact.prototype.setArtifactId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.Artifact.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.Artifact} returns this
 */
proto.alis.open.agent.v1.Artifact.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.alis.open.agent.v1.Artifact.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.Artifact} returns this
 */
proto.alis.open.agent.v1.Artifact.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Part parts = 5;
 * @return {!Array<!proto.alis.open.agent.v1.Part>}
 */
proto.alis.open.agent.v1.Artifact.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.Part>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.Part, 5));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.Part>} value
 * @return {!proto.alis.open.agent.v1.Artifact} returns this
*/
proto.alis.open.agent.v1.Artifact.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.alis.open.agent.v1.Part=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.Part}
 */
proto.alis.open.agent.v1.Artifact.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.alis.open.agent.v1.Part, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.Artifact} returns this
 */
proto.alis.open.agent.v1.Artifact.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};


/**
 * optional google.protobuf.Struct metadata = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v1.Artifact.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v1.Artifact} returns this
*/
proto.alis.open.agent.v1.Artifact.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.Artifact} returns this
 */
proto.alis.open.agent.v1.Artifact.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.Artifact.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string extensions = 7;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.Artifact.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.Artifact} returns this
 */
proto.alis.open.agent.v1.Artifact.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.Artifact} returns this
 */
proto.alis.open.agent.v1.Artifact.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.Artifact} returns this
 */
proto.alis.open.agent.v1.Artifact.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
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
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.TaskStatusUpdateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.TaskStatusUpdateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
taskId: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
status: (f = msg.getStatus()) && proto.alis.open.agent.v1.TaskStatus.toObject(includeInstance, f),
pb_final: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.TaskStatusUpdateEvent}
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.TaskStatusUpdateEvent;
  return proto.alis.open.agent.v1.TaskStatusUpdateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.TaskStatusUpdateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.TaskStatusUpdateEvent}
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTaskId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContextId(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v1.TaskStatus;
      reader.readMessage(value,proto.alis.open.agent.v1.TaskStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinal(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
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
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.TaskStatusUpdateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.TaskStatusUpdateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContextId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.open.agent.v1.TaskStatus.serializeBinaryToWriter
    );
  }
  f = message.getFinal();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string task_id = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.TaskStatusUpdateEvent} returns this
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.TaskStatusUpdateEvent} returns this
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TaskStatus status = 3;
 * @return {?proto.alis.open.agent.v1.TaskStatus}
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.getStatus = function() {
  return /** @type{?proto.alis.open.agent.v1.TaskStatus} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.TaskStatus, 3));
};


/**
 * @param {?proto.alis.open.agent.v1.TaskStatus|undefined} value
 * @return {!proto.alis.open.agent.v1.TaskStatusUpdateEvent} returns this
*/
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.TaskStatusUpdateEvent} returns this
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool final = 4;
 * @return {boolean}
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.getFinal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v1.TaskStatusUpdateEvent} returns this
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.setFinal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Struct metadata = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v1.TaskStatusUpdateEvent} returns this
*/
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.TaskStatusUpdateEvent} returns this
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.TaskStatusUpdateEvent.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.TaskArtifactUpdateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
taskId: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
artifact: (f = msg.getArtifact()) && proto.alis.open.agent.v1.Artifact.toObject(includeInstance, f),
append: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
lastChunk: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent}
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.TaskArtifactUpdateEvent;
  return proto.alis.open.agent.v1.TaskArtifactUpdateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent}
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTaskId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContextId(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v1.Artifact;
      reader.readMessage(value,proto.alis.open.agent.v1.Artifact.deserializeBinaryFromReader);
      msg.setArtifact(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAppend(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLastChunk(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
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
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.TaskArtifactUpdateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContextId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArtifact();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.open.agent.v1.Artifact.serializeBinaryToWriter
    );
  }
  f = message.getAppend();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getLastChunk();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string task_id = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Artifact artifact = 3;
 * @return {?proto.alis.open.agent.v1.Artifact}
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.getArtifact = function() {
  return /** @type{?proto.alis.open.agent.v1.Artifact} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.Artifact, 3));
};


/**
 * @param {?proto.alis.open.agent.v1.Artifact|undefined} value
 * @return {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent} returns this
*/
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.setArtifact = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.clearArtifact = function() {
  return this.setArtifact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.hasArtifact = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool append = 4;
 * @return {boolean}
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.getAppend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.setAppend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool last_chunk = 5;
 * @return {boolean}
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.getLastChunk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.setLastChunk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional google.protobuf.Struct metadata = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent} returns this
*/
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.TaskArtifactUpdateEvent.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.alis.open.agent.v1.PushNotificationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.PushNotificationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.PushNotificationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.PushNotificationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
url: jspb.Message.getFieldWithDefault(msg, 2, ""),
token: jspb.Message.getFieldWithDefault(msg, 3, ""),
authentication: (f = msg.getAuthentication()) && proto.alis.open.agent.v1.AuthenticationInfo.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.PushNotificationConfig}
 */
proto.alis.open.agent.v1.PushNotificationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.PushNotificationConfig;
  return proto.alis.open.agent.v1.PushNotificationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.PushNotificationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.PushNotificationConfig}
 */
proto.alis.open.agent.v1.PushNotificationConfig.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setToken(value);
      break;
    case 4:
      var value = new proto.alis.open.agent.v1.AuthenticationInfo;
      reader.readMessage(value,proto.alis.open.agent.v1.AuthenticationInfo.deserializeBinaryFromReader);
      msg.setAuthentication(value);
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
proto.alis.open.agent.v1.PushNotificationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.PushNotificationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.PushNotificationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.PushNotificationConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAuthentication();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.open.agent.v1.AuthenticationInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.PushNotificationConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.PushNotificationConfig} returns this
 */
proto.alis.open.agent.v1.PushNotificationConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.PushNotificationConfig.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.PushNotificationConfig} returns this
 */
proto.alis.open.agent.v1.PushNotificationConfig.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.PushNotificationConfig.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.PushNotificationConfig} returns this
 */
proto.alis.open.agent.v1.PushNotificationConfig.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AuthenticationInfo authentication = 4;
 * @return {?proto.alis.open.agent.v1.AuthenticationInfo}
 */
proto.alis.open.agent.v1.PushNotificationConfig.prototype.getAuthentication = function() {
  return /** @type{?proto.alis.open.agent.v1.AuthenticationInfo} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.AuthenticationInfo, 4));
};


/**
 * @param {?proto.alis.open.agent.v1.AuthenticationInfo|undefined} value
 * @return {!proto.alis.open.agent.v1.PushNotificationConfig} returns this
*/
proto.alis.open.agent.v1.PushNotificationConfig.prototype.setAuthentication = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.PushNotificationConfig} returns this
 */
proto.alis.open.agent.v1.PushNotificationConfig.prototype.clearAuthentication = function() {
  return this.setAuthentication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.PushNotificationConfig.prototype.hasAuthentication = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v1.AuthenticationInfo.repeatedFields_ = [1];



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
proto.alis.open.agent.v1.AuthenticationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.AuthenticationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.AuthenticationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AuthenticationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
schemesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
credentials: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.alis.open.agent.v1.AuthenticationInfo}
 */
proto.alis.open.agent.v1.AuthenticationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.AuthenticationInfo;
  return proto.alis.open.agent.v1.AuthenticationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.AuthenticationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.AuthenticationInfo}
 */
proto.alis.open.agent.v1.AuthenticationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addSchemes(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCredentials(value);
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
proto.alis.open.agent.v1.AuthenticationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.AuthenticationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.AuthenticationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AuthenticationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getCredentials();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string schemes = 1;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.AuthenticationInfo.prototype.getSchemesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.AuthenticationInfo} returns this
 */
proto.alis.open.agent.v1.AuthenticationInfo.prototype.setSchemesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.AuthenticationInfo} returns this
 */
proto.alis.open.agent.v1.AuthenticationInfo.prototype.addSchemes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AuthenticationInfo} returns this
 */
proto.alis.open.agent.v1.AuthenticationInfo.prototype.clearSchemesList = function() {
  return this.setSchemesList([]);
};


/**
 * optional string credentials = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.AuthenticationInfo.prototype.getCredentials = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AuthenticationInfo} returns this
 */
proto.alis.open.agent.v1.AuthenticationInfo.prototype.setCredentials = function(value) {
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
proto.alis.open.agent.v1.AgentInterface.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.AgentInterface.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.AgentInterface} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentInterface.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
transport: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.alis.open.agent.v1.AgentInterface}
 */
proto.alis.open.agent.v1.AgentInterface.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.AgentInterface;
  return proto.alis.open.agent.v1.AgentInterface.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.AgentInterface} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.AgentInterface}
 */
proto.alis.open.agent.v1.AgentInterface.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTransport(value);
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
proto.alis.open.agent.v1.AgentInterface.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.AgentInterface.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.AgentInterface} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentInterface.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransport();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentInterface.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentInterface} returns this
 */
proto.alis.open.agent.v1.AgentInterface.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transport = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentInterface.prototype.getTransport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentInterface} returns this
 */
proto.alis.open.agent.v1.AgentInterface.prototype.setTransport = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v1.AgentCard.repeatedFields_ = [15,9,10,11,12,17];



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
proto.alis.open.agent.v1.AgentCard.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.AgentCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.AgentCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentCard.toObject = function(includeInstance, msg) {
  var f, obj = {
protocolVersion: jspb.Message.getFieldWithDefault(msg, 16, ""),
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
url: jspb.Message.getFieldWithDefault(msg, 3, ""),
preferredTransport: jspb.Message.getFieldWithDefault(msg, 14, ""),
additionalInterfacesList: jspb.Message.toObjectList(msg.getAdditionalInterfacesList(),
    proto.alis.open.agent.v1.AgentInterface.toObject, includeInstance),
provider: (f = msg.getProvider()) && proto.alis.open.agent.v1.AgentProvider.toObject(includeInstance, f),
version: jspb.Message.getFieldWithDefault(msg, 5, ""),
documentationUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
capabilities: (f = msg.getCapabilities()) && proto.alis.open.agent.v1.AgentCapabilities.toObject(includeInstance, f),
securitySchemesMap: (f = msg.getSecuritySchemesMap()) ? f.toObject(includeInstance, proto.alis.open.agent.v1.SecurityScheme.toObject) : [],
securityList: jspb.Message.toObjectList(msg.getSecurityList(),
    proto.alis.open.agent.v1.Security.toObject, includeInstance),
defaultInputModesList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
defaultOutputModesList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    proto.alis.open.agent.v1.AgentSkill.toObject, includeInstance),
supportsAuthenticatedExtendedCard: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
signaturesList: jspb.Message.toObjectList(msg.getSignaturesList(),
    proto.alis.open.agent.v1.AgentCardSignature.toObject, includeInstance),
iconUrl: jspb.Message.getFieldWithDefault(msg, 18, "")
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
 * @return {!proto.alis.open.agent.v1.AgentCard}
 */
proto.alis.open.agent.v1.AgentCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.AgentCard;
  return proto.alis.open.agent.v1.AgentCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.AgentCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.AgentCard}
 */
proto.alis.open.agent.v1.AgentCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 16:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProtocolVersion(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUrl(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPreferredTransport(value);
      break;
    case 15:
      var value = new proto.alis.open.agent.v1.AgentInterface;
      reader.readMessage(value,proto.alis.open.agent.v1.AgentInterface.deserializeBinaryFromReader);
      msg.addAdditionalInterfaces(value);
      break;
    case 4:
      var value = new proto.alis.open.agent.v1.AgentProvider;
      reader.readMessage(value,proto.alis.open.agent.v1.AgentProvider.deserializeBinaryFromReader);
      msg.setProvider(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setVersion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDocumentationUrl(value);
      break;
    case 7:
      var value = new proto.alis.open.agent.v1.AgentCapabilities;
      reader.readMessage(value,proto.alis.open.agent.v1.AgentCapabilities.deserializeBinaryFromReader);
      msg.setCapabilities(value);
      break;
    case 8:
      var value = msg.getSecuritySchemesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readMessage, proto.alis.open.agent.v1.SecurityScheme.deserializeBinaryFromReader, "", new proto.alis.open.agent.v1.SecurityScheme());
         });
      break;
    case 9:
      var value = new proto.alis.open.agent.v1.Security;
      reader.readMessage(value,proto.alis.open.agent.v1.Security.deserializeBinaryFromReader);
      msg.addSecurity(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addDefaultInputModes(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addDefaultOutputModes(value);
      break;
    case 12:
      var value = new proto.alis.open.agent.v1.AgentSkill;
      reader.readMessage(value,proto.alis.open.agent.v1.AgentSkill.deserializeBinaryFromReader);
      msg.addSkills(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsAuthenticatedExtendedCard(value);
      break;
    case 17:
      var value = new proto.alis.open.agent.v1.AgentCardSignature;
      reader.readMessage(value,proto.alis.open.agent.v1.AgentCardSignature.deserializeBinaryFromReader);
      msg.addSignatures(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setIconUrl(value);
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
proto.alis.open.agent.v1.AgentCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.AgentCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.AgentCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocolVersion();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPreferredTransport();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getAdditionalInterfacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.alis.open.agent.v1.AgentInterface.serializeBinaryToWriter
    );
  }
  f = message.getProvider();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.open.agent.v1.AgentProvider.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDocumentationUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCapabilities();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.alis.open.agent.v1.AgentCapabilities.serializeBinaryToWriter
    );
  }
  f = message.getSecuritySchemesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getSecuritySchemesMap(true),
    8,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.alis.open.agent.v1.SecurityScheme.serializeBinaryToWriter);
  }
  f = message.getSecurityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.alis.open.agent.v1.Security.serializeBinaryToWriter
    );
  }
  f = message.getDefaultInputModesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getDefaultOutputModesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.alis.open.agent.v1.AgentSkill.serializeBinaryToWriter
    );
  }
  f = message.getSupportsAuthenticatedExtendedCard();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.alis.open.agent.v1.AgentCardSignature.serializeBinaryToWriter
    );
  }
  f = message.getIconUrl();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
};


/**
 * optional string protocol_version = 16;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getProtocolVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.setProtocolVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string preferred_transport = 14;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getPreferredTransport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.setPreferredTransport = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * repeated AgentInterface additional_interfaces = 15;
 * @return {!Array<!proto.alis.open.agent.v1.AgentInterface>}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getAdditionalInterfacesList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.AgentInterface>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.AgentInterface, 15));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.AgentInterface>} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
*/
proto.alis.open.agent.v1.AgentCard.prototype.setAdditionalInterfacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.alis.open.agent.v1.AgentInterface=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.AgentInterface}
 */
proto.alis.open.agent.v1.AgentCard.prototype.addAdditionalInterfaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.alis.open.agent.v1.AgentInterface, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.clearAdditionalInterfacesList = function() {
  return this.setAdditionalInterfacesList([]);
};


/**
 * optional AgentProvider provider = 4;
 * @return {?proto.alis.open.agent.v1.AgentProvider}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getProvider = function() {
  return /** @type{?proto.alis.open.agent.v1.AgentProvider} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.AgentProvider, 4));
};


/**
 * @param {?proto.alis.open.agent.v1.AgentProvider|undefined} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
*/
proto.alis.open.agent.v1.AgentCard.prototype.setProvider = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.clearProvider = function() {
  return this.setProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.AgentCard.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string version = 5;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string documentation_url = 6;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getDocumentationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.setDocumentationUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional AgentCapabilities capabilities = 7;
 * @return {?proto.alis.open.agent.v1.AgentCapabilities}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getCapabilities = function() {
  return /** @type{?proto.alis.open.agent.v1.AgentCapabilities} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.AgentCapabilities, 7));
};


/**
 * @param {?proto.alis.open.agent.v1.AgentCapabilities|undefined} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
*/
proto.alis.open.agent.v1.AgentCard.prototype.setCapabilities = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.clearCapabilities = function() {
  return this.setCapabilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.AgentCard.prototype.hasCapabilities = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, SecurityScheme> security_schemes = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.alis.open.agent.v1.SecurityScheme>}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getSecuritySchemesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.alis.open.agent.v1.SecurityScheme>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.alis.open.agent.v1.SecurityScheme));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.clearSecuritySchemesMap = function() {
  this.getSecuritySchemesMap().clear();
  return this;
};


/**
 * repeated Security security = 9;
 * @return {!Array<!proto.alis.open.agent.v1.Security>}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getSecurityList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.Security>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.Security, 9));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.Security>} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
*/
proto.alis.open.agent.v1.AgentCard.prototype.setSecurityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.alis.open.agent.v1.Security=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.Security}
 */
proto.alis.open.agent.v1.AgentCard.prototype.addSecurity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.alis.open.agent.v1.Security, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.clearSecurityList = function() {
  return this.setSecurityList([]);
};


/**
 * repeated string default_input_modes = 10;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getDefaultInputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.setDefaultInputModesList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.addDefaultInputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.clearDefaultInputModesList = function() {
  return this.setDefaultInputModesList([]);
};


/**
 * repeated string default_output_modes = 11;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getDefaultOutputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.setDefaultOutputModesList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.addDefaultOutputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.clearDefaultOutputModesList = function() {
  return this.setDefaultOutputModesList([]);
};


/**
 * repeated AgentSkill skills = 12;
 * @return {!Array<!proto.alis.open.agent.v1.AgentSkill>}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.AgentSkill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.AgentSkill, 12));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.AgentSkill>} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
*/
proto.alis.open.agent.v1.AgentCard.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.alis.open.agent.v1.AgentSkill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.AgentSkill}
 */
proto.alis.open.agent.v1.AgentCard.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.alis.open.agent.v1.AgentSkill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * optional bool supports_authenticated_extended_card = 13;
 * @return {boolean}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getSupportsAuthenticatedExtendedCard = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.setSupportsAuthenticatedExtendedCard = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * repeated AgentCardSignature signatures = 17;
 * @return {!Array<!proto.alis.open.agent.v1.AgentCardSignature>}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getSignaturesList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.AgentCardSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.AgentCardSignature, 17));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.AgentCardSignature>} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
*/
proto.alis.open.agent.v1.AgentCard.prototype.setSignaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.alis.open.agent.v1.AgentCardSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.AgentCardSignature}
 */
proto.alis.open.agent.v1.AgentCard.prototype.addSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.alis.open.agent.v1.AgentCardSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.clearSignaturesList = function() {
  return this.setSignaturesList([]);
};


/**
 * optional string icon_url = 18;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentCard.prototype.getIconUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentCard} returns this
 */
proto.alis.open.agent.v1.AgentCard.prototype.setIconUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
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
proto.alis.open.agent.v1.AgentProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.AgentProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.AgentProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
organization: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.alis.open.agent.v1.AgentProvider}
 */
proto.alis.open.agent.v1.AgentProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.AgentProvider;
  return proto.alis.open.agent.v1.AgentProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.AgentProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.AgentProvider}
 */
proto.alis.open.agent.v1.AgentProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOrganization(value);
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
proto.alis.open.agent.v1.AgentProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.AgentProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.AgentProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentProvider.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentProvider} returns this
 */
proto.alis.open.agent.v1.AgentProvider.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organization = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentProvider.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentProvider} returns this
 */
proto.alis.open.agent.v1.AgentProvider.prototype.setOrganization = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v1.AgentCapabilities.repeatedFields_ = [3];



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
proto.alis.open.agent.v1.AgentCapabilities.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.AgentCapabilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.AgentCapabilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentCapabilities.toObject = function(includeInstance, msg) {
  var f, obj = {
streaming: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
pushNotifications: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
extensionsList: jspb.Message.toObjectList(msg.getExtensionsList(),
    proto.alis.open.agent.v1.AgentExtension.toObject, includeInstance),
stateTransitionHistory: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.alis.open.agent.v1.AgentCapabilities}
 */
proto.alis.open.agent.v1.AgentCapabilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.AgentCapabilities;
  return proto.alis.open.agent.v1.AgentCapabilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.AgentCapabilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.AgentCapabilities}
 */
proto.alis.open.agent.v1.AgentCapabilities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStreaming(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPushNotifications(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v1.AgentExtension;
      reader.readMessage(value,proto.alis.open.agent.v1.AgentExtension.deserializeBinaryFromReader);
      msg.addExtensions(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStateTransitionHistory(value);
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
proto.alis.open.agent.v1.AgentCapabilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.AgentCapabilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.AgentCapabilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentCapabilities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreaming();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPushNotifications();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.alis.open.agent.v1.AgentExtension.serializeBinaryToWriter
    );
  }
  f = message.getStateTransitionHistory();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool streaming = 1;
 * @return {boolean}
 */
proto.alis.open.agent.v1.AgentCapabilities.prototype.getStreaming = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v1.AgentCapabilities} returns this
 */
proto.alis.open.agent.v1.AgentCapabilities.prototype.setStreaming = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool push_notifications = 2;
 * @return {boolean}
 */
proto.alis.open.agent.v1.AgentCapabilities.prototype.getPushNotifications = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v1.AgentCapabilities} returns this
 */
proto.alis.open.agent.v1.AgentCapabilities.prototype.setPushNotifications = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated AgentExtension extensions = 3;
 * @return {!Array<!proto.alis.open.agent.v1.AgentExtension>}
 */
proto.alis.open.agent.v1.AgentCapabilities.prototype.getExtensionsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.AgentExtension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.AgentExtension, 3));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.AgentExtension>} value
 * @return {!proto.alis.open.agent.v1.AgentCapabilities} returns this
*/
proto.alis.open.agent.v1.AgentCapabilities.prototype.setExtensionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.alis.open.agent.v1.AgentExtension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.AgentExtension}
 */
proto.alis.open.agent.v1.AgentCapabilities.prototype.addExtensions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.alis.open.agent.v1.AgentExtension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentCapabilities} returns this
 */
proto.alis.open.agent.v1.AgentCapabilities.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};


/**
 * optional bool state_transition_history = 4;
 * @return {boolean}
 */
proto.alis.open.agent.v1.AgentCapabilities.prototype.getStateTransitionHistory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v1.AgentCapabilities} returns this
 */
proto.alis.open.agent.v1.AgentCapabilities.prototype.setStateTransitionHistory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.alis.open.agent.v1.AgentExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.AgentExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.AgentExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentExtension.toObject = function(includeInstance, msg) {
  var f, obj = {
uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
required: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
params: (f = msg.getParams()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.AgentExtension}
 */
proto.alis.open.agent.v1.AgentExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.AgentExtension;
  return proto.alis.open.agent.v1.AgentExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.AgentExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.AgentExtension}
 */
proto.alis.open.agent.v1.AgentExtension.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequired(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setParams(value);
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
proto.alis.open.agent.v1.AgentExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.AgentExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.AgentExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentExtension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentExtension.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentExtension} returns this
 */
proto.alis.open.agent.v1.AgentExtension.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentExtension.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentExtension} returns this
 */
proto.alis.open.agent.v1.AgentExtension.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool required = 3;
 * @return {boolean}
 */
proto.alis.open.agent.v1.AgentExtension.prototype.getRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v1.AgentExtension} returns this
 */
proto.alis.open.agent.v1.AgentExtension.prototype.setRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.Struct params = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v1.AgentExtension.prototype.getParams = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v1.AgentExtension} returns this
*/
proto.alis.open.agent.v1.AgentExtension.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.AgentExtension} returns this
 */
proto.alis.open.agent.v1.AgentExtension.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.AgentExtension.prototype.hasParams = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v1.AgentSkill.repeatedFields_ = [4,5,6,7,8];



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
proto.alis.open.agent.v1.AgentSkill.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.AgentSkill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.AgentSkill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentSkill.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
examplesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
inputModesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
outputModesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
securityList: jspb.Message.toObjectList(msg.getSecurityList(),
    proto.alis.open.agent.v1.Security.toObject, includeInstance)
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
 * @return {!proto.alis.open.agent.v1.AgentSkill}
 */
proto.alis.open.agent.v1.AgentSkill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.AgentSkill;
  return proto.alis.open.agent.v1.AgentSkill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.AgentSkill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.AgentSkill}
 */
proto.alis.open.agent.v1.AgentSkill.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addExamples(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addInputModes(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addOutputModes(value);
      break;
    case 8:
      var value = new proto.alis.open.agent.v1.Security;
      reader.readMessage(value,proto.alis.open.agent.v1.Security.deserializeBinaryFromReader);
      msg.addSecurity(value);
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
proto.alis.open.agent.v1.AgentSkill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.AgentSkill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.AgentSkill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentSkill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getExamplesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getInputModesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getOutputModesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getSecurityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.alis.open.agent.v1.Security.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentSkill.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentSkill.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentSkill.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.AgentSkill.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * repeated string examples = 5;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.AgentSkill.prototype.getExamplesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.setExamplesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.addExamples = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.clearExamplesList = function() {
  return this.setExamplesList([]);
};


/**
 * repeated string input_modes = 6;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.AgentSkill.prototype.getInputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.setInputModesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.addInputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.clearInputModesList = function() {
  return this.setInputModesList([]);
};


/**
 * repeated string output_modes = 7;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.AgentSkill.prototype.getOutputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.setOutputModesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.addOutputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.clearOutputModesList = function() {
  return this.setOutputModesList([]);
};


/**
 * repeated Security security = 8;
 * @return {!Array<!proto.alis.open.agent.v1.Security>}
 */
proto.alis.open.agent.v1.AgentSkill.prototype.getSecurityList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.Security>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.Security, 8));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.Security>} value
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
*/
proto.alis.open.agent.v1.AgentSkill.prototype.setSecurityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.alis.open.agent.v1.Security=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.Security}
 */
proto.alis.open.agent.v1.AgentSkill.prototype.addSecurity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.alis.open.agent.v1.Security, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.AgentSkill} returns this
 */
proto.alis.open.agent.v1.AgentSkill.prototype.clearSecurityList = function() {
  return this.setSecurityList([]);
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
proto.alis.open.agent.v1.AgentCardSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.AgentCardSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.AgentCardSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentCardSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
pb_protected: jspb.Message.getFieldWithDefault(msg, 1, ""),
signature: jspb.Message.getFieldWithDefault(msg, 2, ""),
header: (f = msg.getHeader()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.AgentCardSignature}
 */
proto.alis.open.agent.v1.AgentCardSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.AgentCardSignature;
  return proto.alis.open.agent.v1.AgentCardSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.AgentCardSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.AgentCardSignature}
 */
proto.alis.open.agent.v1.AgentCardSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProtected(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSignature(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setHeader(value);
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
proto.alis.open.agent.v1.AgentCardSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.AgentCardSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.AgentCardSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AgentCardSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtected();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string protected = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentCardSignature.prototype.getProtected = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentCardSignature} returns this
 */
proto.alis.open.agent.v1.AgentCardSignature.prototype.setProtected = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string signature = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.AgentCardSignature.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AgentCardSignature} returns this
 */
proto.alis.open.agent.v1.AgentCardSignature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct header = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v1.AgentCardSignature.prototype.getHeader = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v1.AgentCardSignature} returns this
*/
proto.alis.open.agent.v1.AgentCardSignature.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.AgentCardSignature} returns this
 */
proto.alis.open.agent.v1.AgentCardSignature.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.AgentCardSignature.prototype.hasHeader = function() {
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
proto.alis.open.agent.v1.TaskPushNotificationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.TaskPushNotificationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.TaskPushNotificationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.TaskPushNotificationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
pushNotificationConfig: (f = msg.getPushNotificationConfig()) && proto.alis.open.agent.v1.PushNotificationConfig.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.TaskPushNotificationConfig}
 */
proto.alis.open.agent.v1.TaskPushNotificationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.TaskPushNotificationConfig;
  return proto.alis.open.agent.v1.TaskPushNotificationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.TaskPushNotificationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.TaskPushNotificationConfig}
 */
proto.alis.open.agent.v1.TaskPushNotificationConfig.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v1.PushNotificationConfig;
      reader.readMessage(value,proto.alis.open.agent.v1.PushNotificationConfig.deserializeBinaryFromReader);
      msg.setPushNotificationConfig(value);
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
proto.alis.open.agent.v1.TaskPushNotificationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.TaskPushNotificationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.TaskPushNotificationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.TaskPushNotificationConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPushNotificationConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v1.PushNotificationConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.TaskPushNotificationConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.TaskPushNotificationConfig} returns this
 */
proto.alis.open.agent.v1.TaskPushNotificationConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PushNotificationConfig push_notification_config = 2;
 * @return {?proto.alis.open.agent.v1.PushNotificationConfig}
 */
proto.alis.open.agent.v1.TaskPushNotificationConfig.prototype.getPushNotificationConfig = function() {
  return /** @type{?proto.alis.open.agent.v1.PushNotificationConfig} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.PushNotificationConfig, 2));
};


/**
 * @param {?proto.alis.open.agent.v1.PushNotificationConfig|undefined} value
 * @return {!proto.alis.open.agent.v1.TaskPushNotificationConfig} returns this
*/
proto.alis.open.agent.v1.TaskPushNotificationConfig.prototype.setPushNotificationConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.TaskPushNotificationConfig} returns this
 */
proto.alis.open.agent.v1.TaskPushNotificationConfig.prototype.clearPushNotificationConfig = function() {
  return this.setPushNotificationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.TaskPushNotificationConfig.prototype.hasPushNotificationConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v1.StringList.repeatedFields_ = [1];



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
proto.alis.open.agent.v1.StringList.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.StringList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.StringList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.StringList.toObject = function(includeInstance, msg) {
  var f, obj = {
listList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.alis.open.agent.v1.StringList}
 */
proto.alis.open.agent.v1.StringList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.StringList;
  return proto.alis.open.agent.v1.StringList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.StringList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.StringList}
 */
proto.alis.open.agent.v1.StringList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addList(value);
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
proto.alis.open.agent.v1.StringList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.StringList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.StringList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.StringList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string list = 1;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v1.StringList.prototype.getListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v1.StringList} returns this
 */
proto.alis.open.agent.v1.StringList.prototype.setListList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.StringList} returns this
 */
proto.alis.open.agent.v1.StringList.prototype.addList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.StringList} returns this
 */
proto.alis.open.agent.v1.StringList.prototype.clearListList = function() {
  return this.setListList([]);
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
proto.alis.open.agent.v1.Security.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.Security.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.Security} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.Security.toObject = function(includeInstance, msg) {
  var f, obj = {
schemesMap: (f = msg.getSchemesMap()) ? f.toObject(includeInstance, proto.alis.open.agent.v1.StringList.toObject) : []
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
 * @return {!proto.alis.open.agent.v1.Security}
 */
proto.alis.open.agent.v1.Security.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.Security;
  return proto.alis.open.agent.v1.Security.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.Security} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.Security}
 */
proto.alis.open.agent.v1.Security.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSchemesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readMessage, proto.alis.open.agent.v1.StringList.deserializeBinaryFromReader, "", new proto.alis.open.agent.v1.StringList());
         });
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
proto.alis.open.agent.v1.Security.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.Security.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.Security} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.Security.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getSchemesMap(true),
    1,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.alis.open.agent.v1.StringList.serializeBinaryToWriter);
  }
};


/**
 * map<string, StringList> schemes = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.alis.open.agent.v1.StringList>}
 */
proto.alis.open.agent.v1.Security.prototype.getSchemesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.alis.open.agent.v1.StringList>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.alis.open.agent.v1.StringList));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v1.Security} returns this
 */
proto.alis.open.agent.v1.Security.prototype.clearSchemesMap = function() {
  this.getSchemesMap().clear();
  return this;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.alis.open.agent.v1.SecurityScheme.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v1.SecurityScheme.SchemeCase = {
  SCHEME_NOT_SET: 0,
  API_KEY_SECURITY_SCHEME: 1,
  HTTP_AUTH_SECURITY_SCHEME: 2,
  OAUTH2_SECURITY_SCHEME: 3,
  OPEN_ID_CONNECT_SECURITY_SCHEME: 4,
  MTLS_SECURITY_SCHEME: 5
};

/**
 * @return {proto.alis.open.agent.v1.SecurityScheme.SchemeCase}
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.getSchemeCase = function() {
  return /** @type {proto.alis.open.agent.v1.SecurityScheme.SchemeCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v1.SecurityScheme.oneofGroups_[0]));
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
proto.alis.open.agent.v1.SecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.SecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.SecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.SecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
apiKeySecurityScheme: (f = msg.getApiKeySecurityScheme()) && proto.alis.open.agent.v1.APIKeySecurityScheme.toObject(includeInstance, f),
httpAuthSecurityScheme: (f = msg.getHttpAuthSecurityScheme()) && proto.alis.open.agent.v1.HTTPAuthSecurityScheme.toObject(includeInstance, f),
oauth2SecurityScheme: (f = msg.getOauth2SecurityScheme()) && proto.alis.open.agent.v1.OAuth2SecurityScheme.toObject(includeInstance, f),
openIdConnectSecurityScheme: (f = msg.getOpenIdConnectSecurityScheme()) && proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.toObject(includeInstance, f),
mtlsSecurityScheme: (f = msg.getMtlsSecurityScheme()) && proto.alis.open.agent.v1.MutualTlsSecurityScheme.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.SecurityScheme}
 */
proto.alis.open.agent.v1.SecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.SecurityScheme;
  return proto.alis.open.agent.v1.SecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.SecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.SecurityScheme}
 */
proto.alis.open.agent.v1.SecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v1.APIKeySecurityScheme;
      reader.readMessage(value,proto.alis.open.agent.v1.APIKeySecurityScheme.deserializeBinaryFromReader);
      msg.setApiKeySecurityScheme(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v1.HTTPAuthSecurityScheme;
      reader.readMessage(value,proto.alis.open.agent.v1.HTTPAuthSecurityScheme.deserializeBinaryFromReader);
      msg.setHttpAuthSecurityScheme(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v1.OAuth2SecurityScheme;
      reader.readMessage(value,proto.alis.open.agent.v1.OAuth2SecurityScheme.deserializeBinaryFromReader);
      msg.setOauth2SecurityScheme(value);
      break;
    case 4:
      var value = new proto.alis.open.agent.v1.OpenIdConnectSecurityScheme;
      reader.readMessage(value,proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.deserializeBinaryFromReader);
      msg.setOpenIdConnectSecurityScheme(value);
      break;
    case 5:
      var value = new proto.alis.open.agent.v1.MutualTlsSecurityScheme;
      reader.readMessage(value,proto.alis.open.agent.v1.MutualTlsSecurityScheme.deserializeBinaryFromReader);
      msg.setMtlsSecurityScheme(value);
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
proto.alis.open.agent.v1.SecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.SecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.SecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.SecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKeySecurityScheme();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.open.agent.v1.APIKeySecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getHttpAuthSecurityScheme();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v1.HTTPAuthSecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getOauth2SecurityScheme();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.open.agent.v1.OAuth2SecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getOpenIdConnectSecurityScheme();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getMtlsSecurityScheme();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.alis.open.agent.v1.MutualTlsSecurityScheme.serializeBinaryToWriter
    );
  }
};


/**
 * optional APIKeySecurityScheme api_key_security_scheme = 1;
 * @return {?proto.alis.open.agent.v1.APIKeySecurityScheme}
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.getApiKeySecurityScheme = function() {
  return /** @type{?proto.alis.open.agent.v1.APIKeySecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.APIKeySecurityScheme, 1));
};


/**
 * @param {?proto.alis.open.agent.v1.APIKeySecurityScheme|undefined} value
 * @return {!proto.alis.open.agent.v1.SecurityScheme} returns this
*/
proto.alis.open.agent.v1.SecurityScheme.prototype.setApiKeySecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.alis.open.agent.v1.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.SecurityScheme} returns this
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.clearApiKeySecurityScheme = function() {
  return this.setApiKeySecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.hasApiKeySecurityScheme = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HTTPAuthSecurityScheme http_auth_security_scheme = 2;
 * @return {?proto.alis.open.agent.v1.HTTPAuthSecurityScheme}
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.getHttpAuthSecurityScheme = function() {
  return /** @type{?proto.alis.open.agent.v1.HTTPAuthSecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.HTTPAuthSecurityScheme, 2));
};


/**
 * @param {?proto.alis.open.agent.v1.HTTPAuthSecurityScheme|undefined} value
 * @return {!proto.alis.open.agent.v1.SecurityScheme} returns this
*/
proto.alis.open.agent.v1.SecurityScheme.prototype.setHttpAuthSecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.open.agent.v1.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.SecurityScheme} returns this
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.clearHttpAuthSecurityScheme = function() {
  return this.setHttpAuthSecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.hasHttpAuthSecurityScheme = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OAuth2SecurityScheme oauth2_security_scheme = 3;
 * @return {?proto.alis.open.agent.v1.OAuth2SecurityScheme}
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.getOauth2SecurityScheme = function() {
  return /** @type{?proto.alis.open.agent.v1.OAuth2SecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.OAuth2SecurityScheme, 3));
};


/**
 * @param {?proto.alis.open.agent.v1.OAuth2SecurityScheme|undefined} value
 * @return {!proto.alis.open.agent.v1.SecurityScheme} returns this
*/
proto.alis.open.agent.v1.SecurityScheme.prototype.setOauth2SecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.alis.open.agent.v1.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.SecurityScheme} returns this
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.clearOauth2SecurityScheme = function() {
  return this.setOauth2SecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.hasOauth2SecurityScheme = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OpenIdConnectSecurityScheme open_id_connect_security_scheme = 4;
 * @return {?proto.alis.open.agent.v1.OpenIdConnectSecurityScheme}
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.getOpenIdConnectSecurityScheme = function() {
  return /** @type{?proto.alis.open.agent.v1.OpenIdConnectSecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.OpenIdConnectSecurityScheme, 4));
};


/**
 * @param {?proto.alis.open.agent.v1.OpenIdConnectSecurityScheme|undefined} value
 * @return {!proto.alis.open.agent.v1.SecurityScheme} returns this
*/
proto.alis.open.agent.v1.SecurityScheme.prototype.setOpenIdConnectSecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.alis.open.agent.v1.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.SecurityScheme} returns this
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.clearOpenIdConnectSecurityScheme = function() {
  return this.setOpenIdConnectSecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.hasOpenIdConnectSecurityScheme = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MutualTlsSecurityScheme mtls_security_scheme = 5;
 * @return {?proto.alis.open.agent.v1.MutualTlsSecurityScheme}
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.getMtlsSecurityScheme = function() {
  return /** @type{?proto.alis.open.agent.v1.MutualTlsSecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.MutualTlsSecurityScheme, 5));
};


/**
 * @param {?proto.alis.open.agent.v1.MutualTlsSecurityScheme|undefined} value
 * @return {!proto.alis.open.agent.v1.SecurityScheme} returns this
*/
proto.alis.open.agent.v1.SecurityScheme.prototype.setMtlsSecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.alis.open.agent.v1.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.SecurityScheme} returns this
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.clearMtlsSecurityScheme = function() {
  return this.setMtlsSecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.SecurityScheme.prototype.hasMtlsSecurityScheme = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.alis.open.agent.v1.APIKeySecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.APIKeySecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.APIKeySecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.APIKeySecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, ""),
location: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.alis.open.agent.v1.APIKeySecurityScheme}
 */
proto.alis.open.agent.v1.APIKeySecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.APIKeySecurityScheme;
  return proto.alis.open.agent.v1.APIKeySecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.APIKeySecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.APIKeySecurityScheme}
 */
proto.alis.open.agent.v1.APIKeySecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLocation(value);
      break;
    case 3:
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
proto.alis.open.agent.v1.APIKeySecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.APIKeySecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.APIKeySecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.APIKeySecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.APIKeySecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.APIKeySecurityScheme} returns this
 */
proto.alis.open.agent.v1.APIKeySecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.APIKeySecurityScheme.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.APIKeySecurityScheme} returns this
 */
proto.alis.open.agent.v1.APIKeySecurityScheme.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.APIKeySecurityScheme.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.APIKeySecurityScheme} returns this
 */
proto.alis.open.agent.v1.APIKeySecurityScheme.prototype.setName = function(value) {
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
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.HTTPAuthSecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.HTTPAuthSecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, ""),
scheme: jspb.Message.getFieldWithDefault(msg, 2, ""),
bearerFormat: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.alis.open.agent.v1.HTTPAuthSecurityScheme}
 */
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.HTTPAuthSecurityScheme;
  return proto.alis.open.agent.v1.HTTPAuthSecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.HTTPAuthSecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.HTTPAuthSecurityScheme}
 */
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setScheme(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setBearerFormat(value);
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
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.HTTPAuthSecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.HTTPAuthSecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScheme();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBearerFormat();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.HTTPAuthSecurityScheme} returns this
 */
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scheme = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.prototype.getScheme = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.HTTPAuthSecurityScheme} returns this
 */
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.prototype.setScheme = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bearer_format = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.prototype.getBearerFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.HTTPAuthSecurityScheme} returns this
 */
proto.alis.open.agent.v1.HTTPAuthSecurityScheme.prototype.setBearerFormat = function(value) {
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
proto.alis.open.agent.v1.OAuth2SecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.OAuth2SecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.OAuth2SecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.OAuth2SecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, ""),
flows: (f = msg.getFlows()) && proto.alis.open.agent.v1.OAuthFlows.toObject(includeInstance, f),
oauth2MetadataUrl: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.alis.open.agent.v1.OAuth2SecurityScheme}
 */
proto.alis.open.agent.v1.OAuth2SecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.OAuth2SecurityScheme;
  return proto.alis.open.agent.v1.OAuth2SecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.OAuth2SecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.OAuth2SecurityScheme}
 */
proto.alis.open.agent.v1.OAuth2SecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v1.OAuthFlows;
      reader.readMessage(value,proto.alis.open.agent.v1.OAuthFlows.deserializeBinaryFromReader);
      msg.setFlows(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOauth2MetadataUrl(value);
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
proto.alis.open.agent.v1.OAuth2SecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.OAuth2SecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.OAuth2SecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.OAuth2SecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFlows();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v1.OAuthFlows.serializeBinaryToWriter
    );
  }
  f = message.getOauth2MetadataUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.OAuth2SecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.OAuth2SecurityScheme} returns this
 */
proto.alis.open.agent.v1.OAuth2SecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OAuthFlows flows = 2;
 * @return {?proto.alis.open.agent.v1.OAuthFlows}
 */
proto.alis.open.agent.v1.OAuth2SecurityScheme.prototype.getFlows = function() {
  return /** @type{?proto.alis.open.agent.v1.OAuthFlows} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.OAuthFlows, 2));
};


/**
 * @param {?proto.alis.open.agent.v1.OAuthFlows|undefined} value
 * @return {!proto.alis.open.agent.v1.OAuth2SecurityScheme} returns this
*/
proto.alis.open.agent.v1.OAuth2SecurityScheme.prototype.setFlows = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.OAuth2SecurityScheme} returns this
 */
proto.alis.open.agent.v1.OAuth2SecurityScheme.prototype.clearFlows = function() {
  return this.setFlows(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.OAuth2SecurityScheme.prototype.hasFlows = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string oauth2_metadata_url = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.OAuth2SecurityScheme.prototype.getOauth2MetadataUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.OAuth2SecurityScheme} returns this
 */
proto.alis.open.agent.v1.OAuth2SecurityScheme.prototype.setOauth2MetadataUrl = function(value) {
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
proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.OpenIdConnectSecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, ""),
openIdConnectUrl: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.alis.open.agent.v1.OpenIdConnectSecurityScheme}
 */
proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.OpenIdConnectSecurityScheme;
  return proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.OpenIdConnectSecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.OpenIdConnectSecurityScheme}
 */
proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOpenIdConnectUrl(value);
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
proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.OpenIdConnectSecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpenIdConnectUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.OpenIdConnectSecurityScheme} returns this
 */
proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string open_id_connect_url = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.prototype.getOpenIdConnectUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.OpenIdConnectSecurityScheme} returns this
 */
proto.alis.open.agent.v1.OpenIdConnectSecurityScheme.prototype.setOpenIdConnectUrl = function(value) {
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
proto.alis.open.agent.v1.MutualTlsSecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.MutualTlsSecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.MutualTlsSecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.MutualTlsSecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.alis.open.agent.v1.MutualTlsSecurityScheme}
 */
proto.alis.open.agent.v1.MutualTlsSecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.MutualTlsSecurityScheme;
  return proto.alis.open.agent.v1.MutualTlsSecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.MutualTlsSecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.MutualTlsSecurityScheme}
 */
proto.alis.open.agent.v1.MutualTlsSecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
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
proto.alis.open.agent.v1.MutualTlsSecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.MutualTlsSecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.MutualTlsSecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.MutualTlsSecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.MutualTlsSecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.MutualTlsSecurityScheme} returns this
 */
proto.alis.open.agent.v1.MutualTlsSecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.alis.open.agent.v1.OAuthFlows.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v1.OAuthFlows.FlowCase = {
  FLOW_NOT_SET: 0,
  AUTHORIZATION_CODE: 1,
  CLIENT_CREDENTIALS: 2,
  IMPLICIT: 3,
  PASSWORD: 4
};

/**
 * @return {proto.alis.open.agent.v1.OAuthFlows.FlowCase}
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.getFlowCase = function() {
  return /** @type {proto.alis.open.agent.v1.OAuthFlows.FlowCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v1.OAuthFlows.oneofGroups_[0]));
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
proto.alis.open.agent.v1.OAuthFlows.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.OAuthFlows.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.OAuthFlows} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.OAuthFlows.toObject = function(includeInstance, msg) {
  var f, obj = {
authorizationCode: (f = msg.getAuthorizationCode()) && proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.toObject(includeInstance, f),
clientCredentials: (f = msg.getClientCredentials()) && proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.toObject(includeInstance, f),
implicit: (f = msg.getImplicit()) && proto.alis.open.agent.v1.ImplicitOAuthFlow.toObject(includeInstance, f),
password: (f = msg.getPassword()) && proto.alis.open.agent.v1.PasswordOAuthFlow.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.OAuthFlows}
 */
proto.alis.open.agent.v1.OAuthFlows.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.OAuthFlows;
  return proto.alis.open.agent.v1.OAuthFlows.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.OAuthFlows} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.OAuthFlows}
 */
proto.alis.open.agent.v1.OAuthFlows.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow;
      reader.readMessage(value,proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.deserializeBinaryFromReader);
      msg.setAuthorizationCode(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v1.ClientCredentialsOAuthFlow;
      reader.readMessage(value,proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.deserializeBinaryFromReader);
      msg.setClientCredentials(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v1.ImplicitOAuthFlow;
      reader.readMessage(value,proto.alis.open.agent.v1.ImplicitOAuthFlow.deserializeBinaryFromReader);
      msg.setImplicit(value);
      break;
    case 4:
      var value = new proto.alis.open.agent.v1.PasswordOAuthFlow;
      reader.readMessage(value,proto.alis.open.agent.v1.PasswordOAuthFlow.deserializeBinaryFromReader);
      msg.setPassword(value);
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
proto.alis.open.agent.v1.OAuthFlows.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.OAuthFlows.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.OAuthFlows} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.OAuthFlows.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizationCode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.serializeBinaryToWriter
    );
  }
  f = message.getClientCredentials();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.serializeBinaryToWriter
    );
  }
  f = message.getImplicit();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.open.agent.v1.ImplicitOAuthFlow.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.open.agent.v1.PasswordOAuthFlow.serializeBinaryToWriter
    );
  }
};


/**
 * optional AuthorizationCodeOAuthFlow authorization_code = 1;
 * @return {?proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow}
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.getAuthorizationCode = function() {
  return /** @type{?proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow, 1));
};


/**
 * @param {?proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow|undefined} value
 * @return {!proto.alis.open.agent.v1.OAuthFlows} returns this
*/
proto.alis.open.agent.v1.OAuthFlows.prototype.setAuthorizationCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.alis.open.agent.v1.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.OAuthFlows} returns this
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.clearAuthorizationCode = function() {
  return this.setAuthorizationCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.hasAuthorizationCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ClientCredentialsOAuthFlow client_credentials = 2;
 * @return {?proto.alis.open.agent.v1.ClientCredentialsOAuthFlow}
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.getClientCredentials = function() {
  return /** @type{?proto.alis.open.agent.v1.ClientCredentialsOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.ClientCredentialsOAuthFlow, 2));
};


/**
 * @param {?proto.alis.open.agent.v1.ClientCredentialsOAuthFlow|undefined} value
 * @return {!proto.alis.open.agent.v1.OAuthFlows} returns this
*/
proto.alis.open.agent.v1.OAuthFlows.prototype.setClientCredentials = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.open.agent.v1.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.OAuthFlows} returns this
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.clearClientCredentials = function() {
  return this.setClientCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.hasClientCredentials = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImplicitOAuthFlow implicit = 3;
 * @return {?proto.alis.open.agent.v1.ImplicitOAuthFlow}
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.getImplicit = function() {
  return /** @type{?proto.alis.open.agent.v1.ImplicitOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.ImplicitOAuthFlow, 3));
};


/**
 * @param {?proto.alis.open.agent.v1.ImplicitOAuthFlow|undefined} value
 * @return {!proto.alis.open.agent.v1.OAuthFlows} returns this
*/
proto.alis.open.agent.v1.OAuthFlows.prototype.setImplicit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.alis.open.agent.v1.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.OAuthFlows} returns this
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.clearImplicit = function() {
  return this.setImplicit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.hasImplicit = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PasswordOAuthFlow password = 4;
 * @return {?proto.alis.open.agent.v1.PasswordOAuthFlow}
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.getPassword = function() {
  return /** @type{?proto.alis.open.agent.v1.PasswordOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.PasswordOAuthFlow, 4));
};


/**
 * @param {?proto.alis.open.agent.v1.PasswordOAuthFlow|undefined} value
 * @return {!proto.alis.open.agent.v1.OAuthFlows} returns this
*/
proto.alis.open.agent.v1.OAuthFlows.prototype.setPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.alis.open.agent.v1.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.OAuthFlows} returns this
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.OAuthFlows.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.toObject = function(includeInstance, msg) {
  var f, obj = {
authorizationUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
tokenUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
refreshUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
scopesMap: (f = msg.getScopesMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow}
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow;
  return proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow}
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAuthorizationUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTokenUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefreshUrl(value);
      break;
    case 4:
      var value = msg.getScopesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readStringRequireUtf8, null, "", "");
         });
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
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizationUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTokenUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRefreshUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScopesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getScopesMap(true),
    4,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string authorization_url = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.prototype.getAuthorizationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow} returns this
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.prototype.setAuthorizationUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token_url = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.prototype.getTokenUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow} returns this
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.prototype.setTokenUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string refresh_url = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow} returns this
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> scopes = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow} returns this
 */
proto.alis.open.agent.v1.AuthorizationCodeOAuthFlow.prototype.clearScopesMap = function() {
  this.getScopesMap().clear();
  return this;
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
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.ClientCredentialsOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.toObject = function(includeInstance, msg) {
  var f, obj = {
tokenUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
refreshUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
scopesMap: (f = msg.getScopesMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.alis.open.agent.v1.ClientCredentialsOAuthFlow}
 */
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.ClientCredentialsOAuthFlow;
  return proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.ClientCredentialsOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.ClientCredentialsOAuthFlow}
 */
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTokenUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefreshUrl(value);
      break;
    case 3:
      var value = msg.getScopesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readStringRequireUtf8, null, "", "");
         });
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
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.ClientCredentialsOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefreshUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScopesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getScopesMap(true),
    3,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string token_url = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.prototype.getTokenUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.ClientCredentialsOAuthFlow} returns this
 */
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.prototype.setTokenUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_url = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.ClientCredentialsOAuthFlow} returns this
 */
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> scopes = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v1.ClientCredentialsOAuthFlow} returns this
 */
proto.alis.open.agent.v1.ClientCredentialsOAuthFlow.prototype.clearScopesMap = function() {
  this.getScopesMap().clear();
  return this;
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
proto.alis.open.agent.v1.ImplicitOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.ImplicitOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.ImplicitOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ImplicitOAuthFlow.toObject = function(includeInstance, msg) {
  var f, obj = {
authorizationUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
refreshUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
scopesMap: (f = msg.getScopesMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.alis.open.agent.v1.ImplicitOAuthFlow}
 */
proto.alis.open.agent.v1.ImplicitOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.ImplicitOAuthFlow;
  return proto.alis.open.agent.v1.ImplicitOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.ImplicitOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.ImplicitOAuthFlow}
 */
proto.alis.open.agent.v1.ImplicitOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAuthorizationUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefreshUrl(value);
      break;
    case 3:
      var value = msg.getScopesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readStringRequireUtf8, null, "", "");
         });
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
proto.alis.open.agent.v1.ImplicitOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.ImplicitOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.ImplicitOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ImplicitOAuthFlow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizationUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefreshUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScopesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getScopesMap(true),
    3,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string authorization_url = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.ImplicitOAuthFlow.prototype.getAuthorizationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.ImplicitOAuthFlow} returns this
 */
proto.alis.open.agent.v1.ImplicitOAuthFlow.prototype.setAuthorizationUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_url = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.ImplicitOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.ImplicitOAuthFlow} returns this
 */
proto.alis.open.agent.v1.ImplicitOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> scopes = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.alis.open.agent.v1.ImplicitOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v1.ImplicitOAuthFlow} returns this
 */
proto.alis.open.agent.v1.ImplicitOAuthFlow.prototype.clearScopesMap = function() {
  this.getScopesMap().clear();
  return this;
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
proto.alis.open.agent.v1.PasswordOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.PasswordOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.PasswordOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.PasswordOAuthFlow.toObject = function(includeInstance, msg) {
  var f, obj = {
tokenUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
refreshUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
scopesMap: (f = msg.getScopesMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.alis.open.agent.v1.PasswordOAuthFlow}
 */
proto.alis.open.agent.v1.PasswordOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.PasswordOAuthFlow;
  return proto.alis.open.agent.v1.PasswordOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.PasswordOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.PasswordOAuthFlow}
 */
proto.alis.open.agent.v1.PasswordOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTokenUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefreshUrl(value);
      break;
    case 3:
      var value = msg.getScopesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readStringRequireUtf8, null, "", "");
         });
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
proto.alis.open.agent.v1.PasswordOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.PasswordOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.PasswordOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.PasswordOAuthFlow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefreshUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScopesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getScopesMap(true),
    3,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string token_url = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.PasswordOAuthFlow.prototype.getTokenUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.PasswordOAuthFlow} returns this
 */
proto.alis.open.agent.v1.PasswordOAuthFlow.prototype.setTokenUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_url = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.PasswordOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.PasswordOAuthFlow} returns this
 */
proto.alis.open.agent.v1.PasswordOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> scopes = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.alis.open.agent.v1.PasswordOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v1.PasswordOAuthFlow} returns this
 */
proto.alis.open.agent.v1.PasswordOAuthFlow.prototype.clearScopesMap = function() {
  this.getScopesMap().clear();
  return this;
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
proto.alis.open.agent.v1.SendMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.SendMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.SendMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.SendMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
request: (f = msg.getRequest()) && proto.alis.open.agent.v1.Message.toObject(includeInstance, f),
configuration: (f = msg.getConfiguration()) && proto.alis.open.agent.v1.SendMessageConfiguration.toObject(includeInstance, f),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.SendMessageRequest}
 */
proto.alis.open.agent.v1.SendMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.SendMessageRequest;
  return proto.alis.open.agent.v1.SendMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.SendMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.SendMessageRequest}
 */
proto.alis.open.agent.v1.SendMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v1.Message;
      reader.readMessage(value,proto.alis.open.agent.v1.Message.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v1.SendMessageConfiguration;
      reader.readMessage(value,proto.alis.open.agent.v1.SendMessageConfiguration.deserializeBinaryFromReader);
      msg.setConfiguration(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
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
proto.alis.open.agent.v1.SendMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.SendMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.SendMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.SendMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.open.agent.v1.Message.serializeBinaryToWriter
    );
  }
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v1.SendMessageConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional Message request = 1;
 * @return {?proto.alis.open.agent.v1.Message}
 */
proto.alis.open.agent.v1.SendMessageRequest.prototype.getRequest = function() {
  return /** @type{?proto.alis.open.agent.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.Message, 1));
};


/**
 * @param {?proto.alis.open.agent.v1.Message|undefined} value
 * @return {!proto.alis.open.agent.v1.SendMessageRequest} returns this
*/
proto.alis.open.agent.v1.SendMessageRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.SendMessageRequest} returns this
 */
proto.alis.open.agent.v1.SendMessageRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.SendMessageRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SendMessageConfiguration configuration = 2;
 * @return {?proto.alis.open.agent.v1.SendMessageConfiguration}
 */
proto.alis.open.agent.v1.SendMessageRequest.prototype.getConfiguration = function() {
  return /** @type{?proto.alis.open.agent.v1.SendMessageConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.SendMessageConfiguration, 2));
};


/**
 * @param {?proto.alis.open.agent.v1.SendMessageConfiguration|undefined} value
 * @return {!proto.alis.open.agent.v1.SendMessageRequest} returns this
*/
proto.alis.open.agent.v1.SendMessageRequest.prototype.setConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.SendMessageRequest} returns this
 */
proto.alis.open.agent.v1.SendMessageRequest.prototype.clearConfiguration = function() {
  return this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.SendMessageRequest.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Struct metadata = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v1.SendMessageRequest.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v1.SendMessageRequest} returns this
*/
proto.alis.open.agent.v1.SendMessageRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.SendMessageRequest} returns this
 */
proto.alis.open.agent.v1.SendMessageRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.SendMessageRequest.prototype.hasMetadata = function() {
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
proto.alis.open.agent.v1.GetTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.GetTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.GetTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.GetTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
historyLength: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.alis.open.agent.v1.GetTaskRequest}
 */
proto.alis.open.agent.v1.GetTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.GetTaskRequest;
  return proto.alis.open.agent.v1.GetTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.GetTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.GetTaskRequest}
 */
proto.alis.open.agent.v1.GetTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHistoryLength(value);
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
proto.alis.open.agent.v1.GetTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.GetTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.GetTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.GetTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHistoryLength();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.GetTaskRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.GetTaskRequest} returns this
 */
proto.alis.open.agent.v1.GetTaskRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 history_length = 2;
 * @return {number}
 */
proto.alis.open.agent.v1.GetTaskRequest.prototype.getHistoryLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v1.GetTaskRequest} returns this
 */
proto.alis.open.agent.v1.GetTaskRequest.prototype.setHistoryLength = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.alis.open.agent.v1.ListTasksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.ListTasksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.ListTasksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ListTasksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
contextId: jspb.Message.getFieldWithDefault(msg, 1, ""),
status: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
historyLength: jspb.Message.getFieldWithDefault(msg, 5, 0),
lastUpdatedTime: (f = msg.getLastUpdatedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
includeArtifacts: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.alis.open.agent.v1.ListTasksRequest}
 */
proto.alis.open.agent.v1.ListTasksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.ListTasksRequest;
  return proto.alis.open.agent.v1.ListTasksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.ListTasksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.ListTasksRequest}
 */
proto.alis.open.agent.v1.ListTasksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContextId(value);
      break;
    case 2:
      var value = /** @type {!proto.alis.open.agent.v1.TaskState} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHistoryLength(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdatedTime(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeArtifacts(value);
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
proto.alis.open.agent.v1.ListTasksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.ListTasksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.ListTasksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ListTasksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContextId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHistoryLength();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLastUpdatedTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIncludeArtifacts();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string context_id = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.ListTasksRequest} returns this
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TaskState status = 2;
 * @return {!proto.alis.open.agent.v1.TaskState}
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.getStatus = function() {
  return /** @type {!proto.alis.open.agent.v1.TaskState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.alis.open.agent.v1.TaskState} value
 * @return {!proto.alis.open.agent.v1.ListTasksRequest} returns this
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v1.ListTasksRequest} returns this
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.ListTasksRequest} returns this
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 history_length = 5;
 * @return {number}
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.getHistoryLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v1.ListTasksRequest} returns this
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.setHistoryLength = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp last_updated_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.getLastUpdatedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.alis.open.agent.v1.ListTasksRequest} returns this
*/
proto.alis.open.agent.v1.ListTasksRequest.prototype.setLastUpdatedTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.ListTasksRequest} returns this
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.clearLastUpdatedTime = function() {
  return this.setLastUpdatedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.hasLastUpdatedTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool include_artifacts = 7;
 * @return {boolean}
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.getIncludeArtifacts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v1.ListTasksRequest} returns this
 */
proto.alis.open.agent.v1.ListTasksRequest.prototype.setIncludeArtifacts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
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
proto.alis.open.agent.v1.CancelTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.CancelTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.CancelTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.CancelTaskRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v1.CancelTaskRequest}
 */
proto.alis.open.agent.v1.CancelTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.CancelTaskRequest;
  return proto.alis.open.agent.v1.CancelTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.CancelTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.CancelTaskRequest}
 */
proto.alis.open.agent.v1.CancelTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v1.CancelTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.CancelTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.CancelTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.CancelTaskRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v1.CancelTaskRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.CancelTaskRequest} returns this
 */
proto.alis.open.agent.v1.CancelTaskRequest.prototype.setName = function(value) {
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
proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest;
  return proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v1.GetTaskPushNotificationConfigRequest.prototype.setName = function(value) {
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
proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest;
  return proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v1.DeleteTaskPushNotificationConfigRequest.prototype.setName = function(value) {
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
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
configId: jspb.Message.getFieldWithDefault(msg, 2, ""),
config: (f = msg.getConfig()) && proto.alis.open.agent.v1.TaskPushNotificationConfig.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest;
  return proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setConfigId(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v1.TaskPushNotificationConfig;
      reader.readMessage(value,proto.alis.open.agent.v1.TaskPushNotificationConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
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
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfigId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.open.agent.v1.TaskPushNotificationConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string config_id = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.prototype.getConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.prototype.setConfigId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TaskPushNotificationConfig config = 3;
 * @return {?proto.alis.open.agent.v1.TaskPushNotificationConfig}
 */
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.prototype.getConfig = function() {
  return /** @type{?proto.alis.open.agent.v1.TaskPushNotificationConfig} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.TaskPushNotificationConfig, 3));
};


/**
 * @param {?proto.alis.open.agent.v1.TaskPushNotificationConfig|undefined} value
 * @return {!proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest} returns this
*/
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.CreateTaskPushNotificationConfigRequest.prototype.hasConfig = function() {
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
proto.alis.open.agent.v1.TaskSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.TaskSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.TaskSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.TaskSubscriptionRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v1.TaskSubscriptionRequest}
 */
proto.alis.open.agent.v1.TaskSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.TaskSubscriptionRequest;
  return proto.alis.open.agent.v1.TaskSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.TaskSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.TaskSubscriptionRequest}
 */
proto.alis.open.agent.v1.TaskSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v1.TaskSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.TaskSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.TaskSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.TaskSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v1.TaskSubscriptionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.TaskSubscriptionRequest} returns this
 */
proto.alis.open.agent.v1.TaskSubscriptionRequest.prototype.setName = function(value) {
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
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest;
  return proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigRequest.prototype.setPageToken = function(value) {
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
proto.alis.open.agent.v1.GetAgentCardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.GetAgentCardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.GetAgentCardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.GetAgentCardRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v1.GetAgentCardRequest}
 */
proto.alis.open.agent.v1.GetAgentCardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.GetAgentCardRequest;
  return proto.alis.open.agent.v1.GetAgentCardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.GetAgentCardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.GetAgentCardRequest}
 */
proto.alis.open.agent.v1.GetAgentCardRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v1.GetAgentCardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.GetAgentCardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.GetAgentCardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.GetAgentCardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.alis.open.agent.v1.SendMessageResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v1.SendMessageResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  TASK: 1,
  MSG: 2
};

/**
 * @return {proto.alis.open.agent.v1.SendMessageResponse.PayloadCase}
 */
proto.alis.open.agent.v1.SendMessageResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.alis.open.agent.v1.SendMessageResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v1.SendMessageResponse.oneofGroups_[0]));
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
proto.alis.open.agent.v1.SendMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.SendMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.SendMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.SendMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
task: (f = msg.getTask()) && proto.alis.open.agent.v1.Task.toObject(includeInstance, f),
msg: (f = msg.getMsg()) && proto.alis.open.agent.v1.Message.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.SendMessageResponse}
 */
proto.alis.open.agent.v1.SendMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.SendMessageResponse;
  return proto.alis.open.agent.v1.SendMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.SendMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.SendMessageResponse}
 */
proto.alis.open.agent.v1.SendMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v1.Task;
      reader.readMessage(value,proto.alis.open.agent.v1.Task.deserializeBinaryFromReader);
      msg.setTask(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v1.Message;
      reader.readMessage(value,proto.alis.open.agent.v1.Message.deserializeBinaryFromReader);
      msg.setMsg(value);
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
proto.alis.open.agent.v1.SendMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.SendMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.SendMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.SendMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.open.agent.v1.Task.serializeBinaryToWriter
    );
  }
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v1.Message.serializeBinaryToWriter
    );
  }
};


/**
 * optional Task task = 1;
 * @return {?proto.alis.open.agent.v1.Task}
 */
proto.alis.open.agent.v1.SendMessageResponse.prototype.getTask = function() {
  return /** @type{?proto.alis.open.agent.v1.Task} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.Task, 1));
};


/**
 * @param {?proto.alis.open.agent.v1.Task|undefined} value
 * @return {!proto.alis.open.agent.v1.SendMessageResponse} returns this
*/
proto.alis.open.agent.v1.SendMessageResponse.prototype.setTask = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.alis.open.agent.v1.SendMessageResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.SendMessageResponse} returns this
 */
proto.alis.open.agent.v1.SendMessageResponse.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.SendMessageResponse.prototype.hasTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message msg = 2;
 * @return {?proto.alis.open.agent.v1.Message}
 */
proto.alis.open.agent.v1.SendMessageResponse.prototype.getMsg = function() {
  return /** @type{?proto.alis.open.agent.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.Message, 2));
};


/**
 * @param {?proto.alis.open.agent.v1.Message|undefined} value
 * @return {!proto.alis.open.agent.v1.SendMessageResponse} returns this
*/
proto.alis.open.agent.v1.SendMessageResponse.prototype.setMsg = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.open.agent.v1.SendMessageResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.SendMessageResponse} returns this
 */
proto.alis.open.agent.v1.SendMessageResponse.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.SendMessageResponse.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.alis.open.agent.v1.StreamResponse.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v1.StreamResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  TASK: 1,
  MSG: 2,
  STATUS_UPDATE: 3,
  ARTIFACT_UPDATE: 4
};

/**
 * @return {proto.alis.open.agent.v1.StreamResponse.PayloadCase}
 */
proto.alis.open.agent.v1.StreamResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.alis.open.agent.v1.StreamResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v1.StreamResponse.oneofGroups_[0]));
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
proto.alis.open.agent.v1.StreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.StreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.StreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.StreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
task: (f = msg.getTask()) && proto.alis.open.agent.v1.Task.toObject(includeInstance, f),
msg: (f = msg.getMsg()) && proto.alis.open.agent.v1.Message.toObject(includeInstance, f),
statusUpdate: (f = msg.getStatusUpdate()) && proto.alis.open.agent.v1.TaskStatusUpdateEvent.toObject(includeInstance, f),
artifactUpdate: (f = msg.getArtifactUpdate()) && proto.alis.open.agent.v1.TaskArtifactUpdateEvent.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v1.StreamResponse}
 */
proto.alis.open.agent.v1.StreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.StreamResponse;
  return proto.alis.open.agent.v1.StreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.StreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.StreamResponse}
 */
proto.alis.open.agent.v1.StreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v1.Task;
      reader.readMessage(value,proto.alis.open.agent.v1.Task.deserializeBinaryFromReader);
      msg.setTask(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v1.Message;
      reader.readMessage(value,proto.alis.open.agent.v1.Message.deserializeBinaryFromReader);
      msg.setMsg(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v1.TaskStatusUpdateEvent;
      reader.readMessage(value,proto.alis.open.agent.v1.TaskStatusUpdateEvent.deserializeBinaryFromReader);
      msg.setStatusUpdate(value);
      break;
    case 4:
      var value = new proto.alis.open.agent.v1.TaskArtifactUpdateEvent;
      reader.readMessage(value,proto.alis.open.agent.v1.TaskArtifactUpdateEvent.deserializeBinaryFromReader);
      msg.setArtifactUpdate(value);
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
proto.alis.open.agent.v1.StreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.StreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.StreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.StreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.open.agent.v1.Task.serializeBinaryToWriter
    );
  }
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v1.Message.serializeBinaryToWriter
    );
  }
  f = message.getStatusUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.open.agent.v1.TaskStatusUpdateEvent.serializeBinaryToWriter
    );
  }
  f = message.getArtifactUpdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.open.agent.v1.TaskArtifactUpdateEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional Task task = 1;
 * @return {?proto.alis.open.agent.v1.Task}
 */
proto.alis.open.agent.v1.StreamResponse.prototype.getTask = function() {
  return /** @type{?proto.alis.open.agent.v1.Task} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.Task, 1));
};


/**
 * @param {?proto.alis.open.agent.v1.Task|undefined} value
 * @return {!proto.alis.open.agent.v1.StreamResponse} returns this
*/
proto.alis.open.agent.v1.StreamResponse.prototype.setTask = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.alis.open.agent.v1.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.StreamResponse} returns this
 */
proto.alis.open.agent.v1.StreamResponse.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.StreamResponse.prototype.hasTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message msg = 2;
 * @return {?proto.alis.open.agent.v1.Message}
 */
proto.alis.open.agent.v1.StreamResponse.prototype.getMsg = function() {
  return /** @type{?proto.alis.open.agent.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.Message, 2));
};


/**
 * @param {?proto.alis.open.agent.v1.Message|undefined} value
 * @return {!proto.alis.open.agent.v1.StreamResponse} returns this
*/
proto.alis.open.agent.v1.StreamResponse.prototype.setMsg = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.open.agent.v1.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.StreamResponse} returns this
 */
proto.alis.open.agent.v1.StreamResponse.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.StreamResponse.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TaskStatusUpdateEvent status_update = 3;
 * @return {?proto.alis.open.agent.v1.TaskStatusUpdateEvent}
 */
proto.alis.open.agent.v1.StreamResponse.prototype.getStatusUpdate = function() {
  return /** @type{?proto.alis.open.agent.v1.TaskStatusUpdateEvent} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.TaskStatusUpdateEvent, 3));
};


/**
 * @param {?proto.alis.open.agent.v1.TaskStatusUpdateEvent|undefined} value
 * @return {!proto.alis.open.agent.v1.StreamResponse} returns this
*/
proto.alis.open.agent.v1.StreamResponse.prototype.setStatusUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.alis.open.agent.v1.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.StreamResponse} returns this
 */
proto.alis.open.agent.v1.StreamResponse.prototype.clearStatusUpdate = function() {
  return this.setStatusUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.StreamResponse.prototype.hasStatusUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TaskArtifactUpdateEvent artifact_update = 4;
 * @return {?proto.alis.open.agent.v1.TaskArtifactUpdateEvent}
 */
proto.alis.open.agent.v1.StreamResponse.prototype.getArtifactUpdate = function() {
  return /** @type{?proto.alis.open.agent.v1.TaskArtifactUpdateEvent} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v1.TaskArtifactUpdateEvent, 4));
};


/**
 * @param {?proto.alis.open.agent.v1.TaskArtifactUpdateEvent|undefined} value
 * @return {!proto.alis.open.agent.v1.StreamResponse} returns this
*/
proto.alis.open.agent.v1.StreamResponse.prototype.setArtifactUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.alis.open.agent.v1.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v1.StreamResponse} returns this
 */
proto.alis.open.agent.v1.StreamResponse.prototype.clearArtifactUpdate = function() {
  return this.setArtifactUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v1.StreamResponse.prototype.hasArtifactUpdate = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v1.ListTasksResponse.repeatedFields_ = [1];



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
proto.alis.open.agent.v1.ListTasksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.ListTasksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.ListTasksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ListTasksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.alis.open.agent.v1.Task.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
totalSize: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.alis.open.agent.v1.ListTasksResponse}
 */
proto.alis.open.agent.v1.ListTasksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.ListTasksResponse;
  return proto.alis.open.agent.v1.ListTasksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.ListTasksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.ListTasksResponse}
 */
proto.alis.open.agent.v1.ListTasksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v1.Task;
      reader.readMessage(value,proto.alis.open.agent.v1.Task.deserializeBinaryFromReader);
      msg.addTasks(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNextPageToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalSize(value);
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
proto.alis.open.agent.v1.ListTasksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.ListTasksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.ListTasksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ListTasksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.alis.open.agent.v1.Task.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated Task tasks = 1;
 * @return {!Array<!proto.alis.open.agent.v1.Task>}
 */
proto.alis.open.agent.v1.ListTasksResponse.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.Task>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.Task, 1));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.Task>} value
 * @return {!proto.alis.open.agent.v1.ListTasksResponse} returns this
*/
proto.alis.open.agent.v1.ListTasksResponse.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.alis.open.agent.v1.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.Task}
 */
proto.alis.open.agent.v1.ListTasksResponse.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.alis.open.agent.v1.Task, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.ListTasksResponse} returns this
 */
proto.alis.open.agent.v1.ListTasksResponse.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.ListTasksResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.ListTasksResponse} returns this
 */
proto.alis.open.agent.v1.ListTasksResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 total_size = 3;
 * @return {number}
 */
proto.alis.open.agent.v1.ListTasksResponse.prototype.getTotalSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v1.ListTasksResponse} returns this
 */
proto.alis.open.agent.v1.ListTasksResponse.prototype.setTotalSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.repeatedFields_ = [1];



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
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
configsList: jspb.Message.toObjectList(msg.getConfigsList(),
    proto.alis.open.agent.v1.TaskPushNotificationConfig.toObject, includeInstance),
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
 * @return {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse}
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse;
  return proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse}
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v1.TaskPushNotificationConfig;
      reader.readMessage(value,proto.alis.open.agent.v1.TaskPushNotificationConfig.deserializeBinaryFromReader);
      msg.addConfigs(value);
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
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.alis.open.agent.v1.TaskPushNotificationConfig.serializeBinaryToWriter
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
 * repeated TaskPushNotificationConfig configs = 1;
 * @return {!Array<!proto.alis.open.agent.v1.TaskPushNotificationConfig>}
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.prototype.getConfigsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v1.TaskPushNotificationConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v1.TaskPushNotificationConfig, 1));
};


/**
 * @param {!Array<!proto.alis.open.agent.v1.TaskPushNotificationConfig>} value
 * @return {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse} returns this
*/
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.prototype.setConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.alis.open.agent.v1.TaskPushNotificationConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v1.TaskPushNotificationConfig}
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.prototype.addConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.alis.open.agent.v1.TaskPushNotificationConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse} returns this
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.prototype.clearConfigsList = function() {
  return this.setConfigsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse} returns this
 */
proto.alis.open.agent.v1.ListTaskPushNotificationConfigResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.alis.open.agent.v1.TaskState = {
  TASK_STATE_UNSPECIFIED: 0,
  TASK_STATE_SUBMITTED: 1,
  TASK_STATE_WORKING: 2,
  TASK_STATE_COMPLETED: 3,
  TASK_STATE_FAILED: 4,
  TASK_STATE_CANCELLED: 5,
  TASK_STATE_INPUT_REQUIRED: 6,
  TASK_STATE_REJECTED: 7,
  TASK_STATE_AUTH_REQUIRED: 8
};

/**
 * @enum {number}
 */
proto.alis.open.agent.v1.Role = {
  ROLE_UNSPECIFIED: 0,
  ROLE_USER: 1,
  ROLE_AGENT: 2
};

goog.object.extend(exports, proto.alis.open.agent.v1);

// Below is base64 encoded GeneratedCodeInfo proto
// CioKAgQAEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8YiTEgoTEKKgoCBAESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjsNyDwNwoqCgIEAhIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGOs9IPU9CioKAgQDEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Y2UMg3UMKKgoCBAQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjVSSDdSQoqCgIEBRIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGOVPIO1PCioKAgQGEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Yy1Ug0lUKKgoCBAcSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjZWyDhWwoqCgIECBIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGOxhIIFiCioKAgQJEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8YhmggnWgKKgoCBAoSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiobiC+bgoqCgIECxIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGMZ0INh0CioKAgQMEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Yi3sgmXsKLAoCBA0SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiJgQEgkoEBCiwKAgQOEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8YoYcBIK6HAQosCgIEDxIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGJuNASCsjQEKLAoCBBASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjbkwEg6ZMBCiwKAgQREh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Y2ZkBIOOZAQosCgIEEhIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGPafASCIoAEKLAoCBBMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiEpgEgnqYBCiwKAgQUEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8YsqwBILysAQosCgIEFRIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGM+yASDXsgEKLAoCBBYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi1uAEgw7gBCiwKAgQXEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Y474BIPe+AQosCgIEGBIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGPnEASCPxQEKLAoCBBkSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiXywEgq8sBCiwKAgQaEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8YrdEBIMjRAQosCgIEGxIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGN/XASD21wEKLAoCBBwSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiB3gEgi94BCiwKAgQdEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Ym+QBILXkAQosCgIEHhIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGMnqASDj6gEKLAoCBB8SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj38AEgiPEBCiwKAgQgEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8YgfcBIJL3AQosCgIEIRIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGIv9ASCd/QEKLAoCBCISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiZgwIgp4MCCiwKAgQjEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Yl4kCIKeJAgosCgIEJBIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGJ2PAiCujwIKLAoCBCUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxinlQIgy5UCCiwKAgQmEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Y/ZsCIKScAgosCgIEJxIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGN+iAiCGowIKLAoCBCgSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjBqQIg2KkCCiwKAgQpEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Y468CIIiwAgosCgIEKhIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGL22AiDQtgIKLAoCBCsSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjPvAIg4rwCCiwKAgQsEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8YlsMCIKTDAgosCgIELRIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGMTJAiDVyQIKLAoCBC4SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiE0AIgqtACCi4KBAQAAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxju/AIgiP0CCi4KBAQAAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxig/wIguv8CCi4KBAQAAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjSgQMg6IEDCi4KBAQAAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiUhAMgsIQDCi4KBAQAAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxivhgMgwoYDCi4KBAQAAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjbiQMg7okDCi4KBAQAAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiBjAMglowDCi4KBAQAAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjYjQMg640DCi4KBAQAAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxivjwMgv48DCi4KBAQAAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjNkQMg3ZEDCi4KBAQAAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiokwMgs5MDCi4KBAQAAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjOlQMg2ZUDCi4KBAQBAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjfxgMg5sYDCi4KBAQBAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjNyAMg1MgDCi4KBAQBAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiJygMgjsoDCi4KBAQBAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj1ywMg+ssDCi4KBAQBAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi3zQMgw80DCi4KBAQBAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiqzwMgts8DCi4KBAQBAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiR0QMgmtEDCi4KBAQBAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjn0wMg8NMDCi4KBAQBAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjb1QMg5tUDCi4KBAQBAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiK1wMgk9cDCi4KBAQBAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjl2AMg9dgDCi4KBAQBAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjK2wMg2tsDCi4KBAQBAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjr3QMg990DCi4KBAQBAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxit4AMgv+ADCi4KBAQBAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiA4gMgjuIDCi4KBAQBAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjg5AMg7uQDCi4KBAQBAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj95gMgh+cDCi4KBAQBAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi86QMgzOkDCi4KBAQBAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiP6wMgmusDCi4KBAQBAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjW7QMg4e0DCi4KBAQBAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjM7wMg2e8DCi4KBAQBAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj/8AMgivEDCi4KBAQCAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjKlQQg0pUECi4KBAQCAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj+lwQghpgECi4KBAQCAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjfmQQg6JkECi4KBAQCAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi4nAQgwZwECi4KBAQCAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi4ngQgw54ECi4KBAQCAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjtnwQg9p8ECi4KBAQCAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjVoQQg4aEECi4KBAQCAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi1pAQgwaQECi4KBAQCAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi4pgQgxqYECi4KBAQCAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjzpwQg/6cECi4KBAQDAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjFrAQgyawECi4KBAQDAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjQrAQg1KwECi4KBAQDAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjbrAQg36wECi4KBAQDAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjmrAQg6awECi4KBAQDAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj+2AQghdkECi4KBAQDAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjs2gQg89oECi4KBAQDAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiD3QQgjN0ECi4KBAQDAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj03gQg+94ECi4KBAQDAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjA4AQgx+AECi4KBAQDAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiO4wQgleMECi4KBAQDAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi05QQgveUECi4KBAQDAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjf5gQg5uYECi4KBAQDAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxir6AQgsugECi4KBAQDAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj56gQggOsECi4KBAQDAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxif7QQgqO0ECi4KBAQDAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjK7gQg0e4ECi4KBAQDAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiZ8AQgn/AECi4KBAQDAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjQ8gQg1vIECi4KBAQDAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj29AQg/vQECi4KBAQDAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxif9gQgpfYECi4KBAQDAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj49wQgg/gECi4KBAQDAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi/+gQgyvoECi4KBAQDAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi1/AQgwvwECi4KBAQDAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjo/QQg8/0ECi4KBAQEAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi8ggUgyYIFCi4KBAQEAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjQggUg34IFCi4KBAQEAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi5qAUgx6gFCi4KBAQEAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi2qgUgxKoFCi4KBAQEAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjgrAUg8KwFCi4KBAQEAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjgrgUg7q4FCi4KBAQEAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxixsAUgwbAFCi4KBAQEAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxieuAUgrrgFCi4KBAQEAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjKugUg3LoFCi4KBAQEAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjMvAUg3LwFCi4KBAQEAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiMvgUgl74FCi4KBAQEAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiGwAUgkcAFCi4KBAQEAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjMwQUg08EFCi4KBAQEAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjCwwUgycMFCi4KBAQFAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjk4QUg6+EFCi4KBAQFAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiv5AUgtuQFCi4KBAQFAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxip5gUgsuYFCi4KBAQFAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjY5wUg3+cFCi4KBAQGAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj4mAYghJkGCi4KBAQGAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjxmgYg/ZoGCi4KBAQGAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi9nAYgyZwGCi4KBAQGAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi2ngYgwp4GCi4KBAQGAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj/nwYgiKAGCi4KBAQGAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj1oQYg/qEGCi4KBAQGAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjOowYg1aMGCi4KBAQGAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjxpQYg+KUGCi4KBAQGAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjPpwYg26cGCi4KBAQGAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiqqgYgtqoGCi4KBAQGAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjCrAYgyqwGCi4KBAQGAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiCrwYgkK8GCi4KBAQGAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjUsAYg37AGCi4KBAQGAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxihswYgrLMGCi4KBAQGAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxidtQYgqrUGCi4KBAQGAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjTtgYg3rYGCi4KBAQGAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiWuAYgp7gGCi4KBAQGAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxidugYgrroGCi4KBAQGAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxikvAYgsbwGCi4KBAQGAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi7vgYgzr4GCi4KBAQGAgcSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiCwAYgmcAGCi4KBAQGAgcSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiPwgYgpsIGCi4KBAQGAgcSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxicxAYgr8QGCi4KBAQGAgcSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi5xgYg0sYGCi4KBAQHAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiA8wYgjfMGCi4KBAQHAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj89AYgifUGCi4KBAQHAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjE9gYgy/YGCi4KBAQHAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi6+AYgwfgGCi4KBAQHAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiD+gYgkfoGCi4KBAQHAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiA/AYgjvwGCi4KBAQHAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjo/QYg9P0GCi4KBAQHAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjFgAcg0YAHCi4KBAQHAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjeggcg5oIHCi4KBAQHAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxighQcgroUHCi4KBAQHAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjzhgcg/oYHCi4KBAQHAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjCiQcgzYkHCi4KBAQHAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjAiwcgzYsHCi4KBAQHAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj3jAcggo0HCi4KBAQHAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi7jgcgzI4HCi4KBAQHAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjEkAcg1ZAHCi4KBAQHAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjNkgcg2pIHCi4KBAQHAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjmlAcg+ZQHCi4KBAQIAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjWvgcg374HCi4KBAQIAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjowAcg8cAHCi4KBAQIAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi/wgcgy8IHCi4KBAQIAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjUxAcg4MQHCi4KBAQIAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjMxgcg1cYHCi4KBAQIAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjEyQcgzckHCi4KBAQIAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjaywcg5csHCi4KBAQIAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiazQcgo80HCi4KBAQIAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjbzgcg484HCi4KBAQIAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj40AcggNEHCi4KBAQIAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj00gcg/9IHCi4KBAQIAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjd1Qcg6NUHCi4KBAQIAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj11wcggtgHCi4KBAQIAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi52QcgxNkHCi4KBAQJAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjhhQgg6oUICi4KBAQJAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj3hwgggIgICi4KBAQJAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjQiQgg3IkICi4KBAQJAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjpiwgg9YsICi4KBAQJAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjhjQgg7I0ICi4KBAQJAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjZkAgg5JAICi4KBAQJAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj1kggggpMICi4KBAQJAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi7lAggxpQICi4KBAQJAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiBlgggipYICi4KBAQJAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxijmAggrJgICi4KBAQJAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj8mQggiJoICi4KBAQJAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxihnAggrZwICi4KBAQJAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxijngggrp4ICi4KBAQJAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiQoQggm6EICi4KBAQJAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxisowgguaMICi4KBAQJAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjypAgg/aQICi4KBAQKAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjJywggzssICi4KBAQKAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjZzQgg3s0ICi4KBAQKAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bximzwggrM8ICi4KBAQKAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi30QggvdEICi4KBAQKAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiH0wggj9MICi4KBAQKAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxia1QggotUICi4KBAQKAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxin1wgguNcICi4KBAQKAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjB2ggg0toICi4KBAQKAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjh3Agg9NwICi4KBAQKAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiy3gggw94ICi4KBAQLAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxihgAkgr4AJCi4KBAQLAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi7ggkgyYIJCi4KBAQLAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjVhAkg34QJCi4KBAQLAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj/hgkgj4cJCi4KBAQLAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi8iAkgyogJCi4KBAQLAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjNigkg24oJCi4KBAQMAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxicqgkgoqoJCi4KBAQMAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxidrAkgo6wJCi4KBAQMAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjprQkg9a0JCi4KBAQMAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjwrwkg/K8JCi4KBAQNAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj0hgoghocKCi4KBAQNAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj4iAogiokKCi4KBAQNAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjHigogzooKCi4KBAQNAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi/jAogxowKCi4KBAQNAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiJjgogl44KCi4KBAQNAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiIkAoglpAKCi4KBAQNAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjRkQog15EKCi4KBAQNAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjIkwogzpMKCi4KBAQNAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxialQogr5UKCi4KBAQNAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxihlwogtpcKCi4KBAQNAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi3mQog0pkKCi4KBAQNAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjEnAog35wKCi4KBAQNAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiCnwogmZ8KCi4KBAQNAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjgoQog/aEKCi4KBAQNAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjTowog3qMKCi4KBAQNAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi+pgogyaYKCi4KBAQNAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi+qAogy6gKCi4KBAQNAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj2qQoggaoKCi4KBAQNAgcSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiwqwoguqsKCi4KBAQNAgcSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxirrQogta0KCi4KBAQNAggSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj+rgogka8KCi4KBAQNAggSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiCsQoglbEKCi4KBAQNAgkSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiJswogmLMKCi4KBAQNAgkSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiEtgogk7YKCi4KBAQNAgkSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiIuAogmbgKCi4KBAQNAgkSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjIuQog17kKCi4KBAQNAgoSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi2vAogy7wKCi4KBAQNAgoSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjcvwog878KCi4KBAQNAgsSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjPwQog3sEKCi4KBAQNAgsSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi9xAogzMQKCi4KBAQNAgsSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjixgog7cYKCi4KBAQNAgsSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxityQogvskKCi4KBAQNAgwSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj0ygogjMsKCi4KBAQNAgwSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiHzQogn80KCi4KBAQNAgwSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiazwogrs8KCi4KBAQNAgwSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi90Qog19EKCi4KBAQNAg0SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiX0wogsNMKCi4KBAQNAg0SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxir1QogxNUKCi4KBAQNAg0SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi/1wog1NcKCi4KBAQNAg0SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjj2Qog/tkKCi4KBAQNAg4SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjT2wog4NsKCi4KBAQNAg4SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjG3gog094KCi4KBAQNAg4SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxju4Aog9+AKCi4KBAQNAg4SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi64wogyeMKCi4KBAQNAg8SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiF5QogqeUKCi4KBAQNAg8SHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxin5wogy+cKCi4KBAQNAhASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjK6Qog2+kKCi4KBAQNAhASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjZ7Aog6uwKCi4KBAQNAhASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiV7wogou8KCi4KBAQNAhASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjt8QoggPIKCi4KBAQNAhESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxil8wogr/MKCi4KBAQNAhESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxih9Qogq/UKCi4KBAQOAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjmlAsg7JQLCi4KBAQOAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjllgsg65YLCi4KBAQOAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxizmAsgwpgLCi4KBAQOAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi7mgsgypoLCi4KBAQPAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjTwgsg38ILCi4KBAQPAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjsxAsg+MQLCi4KBAQPAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjKxgsg3sYLCi4KBAQPAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjryAsg/8gLCi4KBAQPAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj8ygsgjcsLCi4KBAQPAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiOzgsgn84LCi4KBAQPAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjJ0Asg1tALCi4KBAQPAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxis0wsgv9MLCi4KBAQPAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj61Asgk9ULCi4KBAQPAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxig1wsgudcLCi4KBAQQAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjg/Asg5vwLCi4KBAQQAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjh/gsg5/4LCi4KBAQQAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxivgAwgvYAMCi4KBAQQAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi4ggwgxoIMCi4KBAQQAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiKhAwglYQMCi4KBAQQAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxichgwgp4YMCi4KBAQQAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiSiAwgm4gMCi4KBAQQAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjrigwg9IoMCi4KBAQQAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjzjAwg/owMCi4KBAQQAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxisjgwgtY4MCi4KBAQRAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiIvwwgjb8MCi4KBAQRAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiAwQwghcEMCi4KBAQRAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjCwgwgycIMCi4KBAQRAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi8xAwgw8QMCi4KBAQRAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiHxgwglcYMCi4KBAQRAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiIyAwglsgMCi4KBAQRAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjbyQwg5skMCi4KBAQRAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjiywwg7csMCi4KBAQRAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjpzQwg8M0MCi4KBAQRAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiA0AwgjdAMCi4KBAQRAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi00Qwgw9EMCi4KBAQRAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi/0wwgztMMCi4KBAQRAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjK1Qwg1dUMCi4KBAQRAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjl1wwg9tcMCi4KBAQRAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxik2QwgtdkMCi4KBAQRAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxix2wwgwtsMCi4KBAQRAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi+3Qwgy90MCi4KBAQRAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjb3wwg7t8MCi4KBAQRAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxif4QwgseEMCi4KBAQRAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxit4wwgv+MMCi4KBAQRAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi75QwgyeUMCi4KBAQRAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjZ5wwg7ecMCi4KBAQRAgcSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi56QwgyOkMCi4KBAQRAgcSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxip7AwguOwMCi4KBAQRAgcSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjP7gwg2u4MCi4KBAQRAgcSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxic8QwgrfEMCi4KBAQSAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj5lA0ghZUNCi4KBAQSAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiIlw0glJcNCi4KBAQSAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjemA0g6pgNCi4KBAQSAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjtmg0g+ZoNCi4KBAQSAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjnnA0g8JwNCi4KBAQSAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjInw0g0Z8NCi4KBAQSAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjYoQ0g46ENCi4KBAQSAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiVow0gnqMNCi4KBAQTAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi6xg0gwcYNCi4KBAQTAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjUyA0g28gNCi4KBAQTAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj2yg0gj8sNCi4KBAQTAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiszg0gxc4NCi4KBAQTAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjc0A0g99ANCi4KBAQTAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjB0g0g2tINCi4KBAQUAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj78A0ghvENCi4KBAQUAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiC8w0gjfMNCi4KBAQUAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiJ9Q0gkPUNCi4KBAQUAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxig9w0grfcNCi4KBAQVAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxismQ4guZkOCi4KBAQVAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjAnA4gz5wOCi4KBAQWAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxisoQ4gw6EOCi4KBAQWAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjKoQ4g46EOCi4KBAQWAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjqoQ4ggKIOCi4KBAQWAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiHog4gpqIOCi4KBAQWAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxitog4gwaIOCi4KBAQWAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj81g4gk9cOCi4KBAQWAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiS2g4gqdoOCi4KBAQWAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjm3A4g/9wOCi4KBAQWAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi73g4g0t4OCi4KBAQWAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjS4A4g6+AOCi4KBAQWAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjw4w4gieQOCi4KBAQWAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjG5g4g4eYOCi4KBAQWAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxif6A4guOgOCi4KBAQWAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxix6g4gyOoOCi4KBAQWAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjH7Q4g3u0OCi4KBAQWAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxib8A4gtPAOCi4KBAQWAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjw8Q4gh/IOCi4KBAQWAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiX9A4gtfQOCi4KBAQWAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjJ9w4g5/cOCi4KBAQWAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxik+g4gxPoOCi4KBAQWAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiH/A4gpfwOCi4KBAQWAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxii/g4gt/4OCi4KBAQWAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi/gQ8g1IEPCi4KBAQWAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiRhA8gqIQPCi4KBAQWAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjihQ8g94UPCi4KBAQXAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi5qA8gx6gPCi4KBAQXAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjOqg8g3KoPCi4KBAQXAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxinrA8gsqwPCi4KBAQXAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi5rg8gxK4PCi4KBAQXAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiLsA8gkrAPCi4KBAQXAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiZsg8goLIPCi4KBAQYAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxik1Q8gstUPCi4KBAQYAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi91w8gy9cPCi4KBAQYAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiW2Q8gn9kPCi4KBAQYAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiq2w8gs9sPCi4KBAQYAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiF3Q8glN0PCi4KBAQYAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxif3w8grt8PCi4KBAQZAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjdgxAg64MQCi4KBAQZAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjyhRAggIYQCi4KBAQZAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjqhxAg8ocQCi4KBAQZAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjfihAg54oQCi4KBAQZAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjyjBAg/IwQCi4KBAQZAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxivjhAgt44QCi4KBAQZAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj9jxAgkZAQCi4KBAQZAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiYkhAgrJIQCi4KBAQaAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjysxAggLQQCi4KBAQaAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiVthAgo7YQCi4KBAQaAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiAuBAgk7gQCi4KBAQaAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiouhAgu7oQCi4KBAQbAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiJ2RAgl9kQCi4KBAQbAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxik2xAgstsQCi4KBAQcAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiT4BAgpeAQCi4KBAQcAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxis4BAgvuAQCi4KBAQcAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjF4BAgzeAQCi4KBAQcAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjU4BAg3OAQCi4KBAQcAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjijhEg9o4RCi4KBAQcAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj/kREgk5IRCi4KBAQcAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjElBEg2pQRCi4KBAQcAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiPlhEgo5YRCi4KBAQcAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxigmBEgtJgRCi4KBAQcAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi9mxEg0ZsRCi4KBAQcAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiCnhEgmJ4RCi4KBAQcAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjNnxEg4Z8RCi4KBAQcAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjCoREgzaERCi4KBAQcAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi7pBEgxqQRCi4KBAQcAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj3phEghKcRCi4KBAQcAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiwqBEgu6gRCi4KBAQcAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxicqhEgp6oRCi4KBAQcAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiVrREgoK0RCi4KBAQcAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjRrxEg3q8RCi4KBAQcAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiKsREglbERCi4KBAQdAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjt2REggNoRCi4KBAQdAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiT3BEgptwRCi4KBAQdAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj43REgg94RCi4KBAQdAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiW4BEgoeARCi4KBAQdAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj14REgguIRCi4KBAQdAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiV5BEgouQRCi4KBAQdAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxju5hEg+uYRCi4KBAQdAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjo6REg9ukRCi4KBAQeAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiLkBIglpASCi4KBAQeAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxipkhIgtJISCi4KBAQeAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiIlBIglZQSCi4KBAQeAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiolhIgtZYSCi4KBAQeAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiBmRIgjZkSCi4KBAQeAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj7mxIgiZwSCi4KBAQfAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiuwRIgwcESCi4KBAQfAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjCwxIg1cMSCi4KBAQfAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxigxRIgrcUSCi4KBAQfAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiuxxIgu8cSCi4KBAQfAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj+yRIgisoSCi4KBAQfAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjmzBIg9MwSCi4KBAQgAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj58RIghPISCi4KBAQgAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiF9BIgkPQSCi4KBAQgAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjb9RIg6PUSCi4KBAQgAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjp9xIg9vcSCi4KBAQgAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi5+hIgxfoSCi4KBAQgAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxih/RIgr/0SCi4KBAQhAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjfpBMg6aQTCi4KBAQhAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjJpxMg06cTCi4KBAQhAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjaqRMg5qkTCi4KBAQhAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiZqxMgo6sTCi4KBAQhAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxifrRMgr60TCi4KBAQhAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjCsBMg0rATCi4KBAQhAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjZshMg67ITCi4KBAQhAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiktBMgtLQTCi4KBAQhAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiUthMgn7YTCi4KBAQhAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj3uBMggrkTCi4KBAQhAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiJuxMglrsTCi4KBAQhAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjKvBMg1bwTCi4KBAQiAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiD3BMgitwTCi4KBAQiAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiF3hMgjN4TCi4KBAQiAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjW3xMg5t8TCi4KBAQiAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjg4RMg8OETCi4KBAQjAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjnjhQg844UCi4KBAQjAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjykBQg/pAUCi4KBAQjAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjjkhQg7JIUCi4KBAQjAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiklRQgrZUUCi4KBAQjAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjylhQg/ZYUCi4KBAQjAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj7mBQghpkUCi4KBAQjAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjMmhQg2JoUCi4KBAQjAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjXnBQg45wUCi4KBAQjAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxivnhQgv54UCi4KBAQjAgQSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi9oBQgzaAUCi4KBAQjAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjHohQg2aIUCi4KBAQjAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi5pRQgy6UUCi4KBAQjAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjOpxQg4qcUCi4KBAQjAgUSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxibqRQgrakUCi4KBAQjAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjsqhQg/6oUCi4KBAQjAgYSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiKrRQgna0UCi4KBAQkAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjwyhQg98oUCi4KBAQkAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj4zBQg/8wUCi4KBAQlAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiB7RQgiO0UCi4KBAQlAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiv7xQgtu8UCi4KBAQmAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjojxUg748VCi4KBAQmAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxickhUgo5IVCi4KBAQnAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiXuRUgoLkVCi4KBAQnAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjNuxUg1rsVCi4KBAQnAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi1vRUgwL0VCi4KBAQnAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjtvxUg+L8VCi4KBAQnAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiWwhUgn8IVCi4KBAQnAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjixRUg68UVCi4KBAQnAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxicyBUgp8gVCi4KBAQnAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjuyRUg98kVCi4KBAQoAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiZ6BUgoOgVCi4KBAQoAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxit6hUgtOoVCi4KBAQpAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj+jhYgh48WCi4KBAQpAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiwkRYguZEWCi4KBAQpAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiVkxYgoJMWCi4KBAQpAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjIlRYg05UWCi4KBAQpAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiulxYgupcWCi4KBAQpAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjjmRYg75kWCi4KBAQrAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj+uBYggrkWCi4KBAQrAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiJuRYgjLkWCi4KBAQrAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiJ3hYgkN4WCi4KBAQrAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjp4BYg8OAWCi4KBAQrAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi84xYgxeMWCi4KBAQrAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxj25BYg/eQWCi4KBAQrAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjO5hYg1OYWCi4KBAQrAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi26RYgvOkWCi4KBAQrAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiI7BYgkOwWCi4KBAQrAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjA7RYgxu0WCi4KBAQsAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxil8hYgqfIWCi4KBAQsAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiw8hYgs/IWCi4KBAQsAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi68hYgx/IWCi4KBAQsAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjO8hYg3fIWCi4KBAQsAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjCnxcgyZ8XCi4KBAQsAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiYohcgn6IXCi4KBAQsAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjcpBcg5aQXCi4KBAQsAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiRphcgmKYXCi4KBAQsAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjkpxcg6qcXCi4KBAQsAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjCqhcgyKoXCi4KBAQsAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiFrRcgja0XCi4KBAQsAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi4rhcgvq4XCi4KBAQsAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiwsBcgv7AXCi4KBAQsAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjBsxcg0LMXCi4KBAQsAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiNthcgnrYXCi4KBAQsAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjStxcg4bcXCi4KBAQsAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjZuRcg6rkXCi4KBAQsAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjyvBcgg70XCi4KBAQsAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjAvxcg078XCi4KBAQsAgMSHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiJwRcgmsEXCi4KBAQtAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi25hcgwuYXCi4KBAQtAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxil6RcgsekXCi4KBAQtAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjH6xcgz+sXCi4KBAQtAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxib7hcgqe4XCi4KBAQtAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjX7xcg5+8XCi4KBAQtAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjo8Rcg+PEXCi4KBAQtAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjB8xcgzfMXCi4KBAQtAgISHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjN9Rcg2fUXCi4KBAQuAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjlnBgg85wYCi4KBAQuAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjCoBgg0KAYCi4KBAQuAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxinoxggsaMYCi4KBAQuAgASHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxi9phggzaYYCi4KBAQuAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxiSqBggoqgYCi4KBAQuAgESHmFsaXMvb3Blbi9hZ2VudC92MS9hZ2VudC5wcm90bxjNqhgg3aoYCiwKAgUAEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Y5qsYIO+rGAouCgQFAAIAEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Y9qsYIIysGAouCgQFAAIBEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Yk6wYIKesGAouCgQFAAICEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8YrqwYIMCsGAouCgQFAAIDEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Yx6wYINusGAouCgQFAAIEEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Y4qwYIPOsGAouCgQFAAIFEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Y+qwYII6tGAouCgQFAAIGEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Yla0YIK6tGAouCgQFAAIHEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Yta0YIMitGAouCgQFAAIIEh5hbGlzL29wZW4vYWdlbnQvdjEvYWdlbnQucHJvdG8Yz60YIOetGAosCgIFARIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGKKuGCCmrhgKLgoEBQECABIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGK2uGCC9rhgKLgoEBQECARIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGMSuGCDNrhgKLgoEBQECAhIeYWxpcy9vcGVuL2FnZW50L3YxL2FnZW50LnByb3RvGNSuGCDerhg=
