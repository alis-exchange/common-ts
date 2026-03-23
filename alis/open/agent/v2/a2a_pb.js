// source: alis/open/agent/v2/a2a.proto
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
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.alis.open.agent.v2.APIKeySecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.AgentCapabilities', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.AgentCard', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.AgentCardSignature', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.AgentExtension', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.AgentInterface', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.AgentProvider', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.AgentSkill', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.Artifact', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.AuthenticationInfo', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.CancelTaskRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.ClientCredentialsOAuthFlow', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.DataPart', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.FilePart', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.FilePart.FileCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.GetAgentCardRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.GetTaskRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.HTTPAuthSecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.ImplicitOAuthFlow', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.ListTasksRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.ListTasksResponse', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.Message', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.MutualTlsSecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.OAuth2SecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.OAuthFlows', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.OAuthFlows.FlowCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.OpenIdConnectSecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.Part', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.Part.PartCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.PasswordOAuthFlow', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.PushNotificationConfig', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.Role', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.Security', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.SecurityScheme', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.SecurityScheme.SchemeCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.SendMessageConfiguration', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.SendMessageRequest', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.SendMessageResponse', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.SendMessageResponse.PayloadCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.StreamResponse', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.StreamResponse.PayloadCase', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.StringList', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.Task', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.TaskArtifactUpdateEvent', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.TaskPushNotificationConfig', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.TaskState', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.TaskStatus', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.TaskStatusUpdateEvent', null, global);
goog.exportSymbol('proto.alis.open.agent.v2.TaskSubscriptionRequest', null, global);
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
proto.alis.open.agent.v2.SendMessageConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v2.SendMessageConfiguration.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v2.SendMessageConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.SendMessageConfiguration.displayName = 'proto.alis.open.agent.v2.SendMessageConfiguration';
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
proto.alis.open.agent.v2.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v2.Task.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v2.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.Task.displayName = 'proto.alis.open.agent.v2.Task';
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
proto.alis.open.agent.v2.TaskStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.TaskStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.TaskStatus.displayName = 'proto.alis.open.agent.v2.TaskStatus';
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
proto.alis.open.agent.v2.Part = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v2.Part.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v2.Part, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.Part.displayName = 'proto.alis.open.agent.v2.Part';
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
proto.alis.open.agent.v2.FilePart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v2.FilePart.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v2.FilePart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.FilePart.displayName = 'proto.alis.open.agent.v2.FilePart';
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
proto.alis.open.agent.v2.DataPart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.DataPart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.DataPart.displayName = 'proto.alis.open.agent.v2.DataPart';
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
proto.alis.open.agent.v2.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v2.Message.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v2.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.Message.displayName = 'proto.alis.open.agent.v2.Message';
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
proto.alis.open.agent.v2.Artifact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v2.Artifact.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v2.Artifact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.Artifact.displayName = 'proto.alis.open.agent.v2.Artifact';
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
proto.alis.open.agent.v2.TaskStatusUpdateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.TaskStatusUpdateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.TaskStatusUpdateEvent.displayName = 'proto.alis.open.agent.v2.TaskStatusUpdateEvent';
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
proto.alis.open.agent.v2.TaskArtifactUpdateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.TaskArtifactUpdateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.TaskArtifactUpdateEvent.displayName = 'proto.alis.open.agent.v2.TaskArtifactUpdateEvent';
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
proto.alis.open.agent.v2.PushNotificationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.PushNotificationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.PushNotificationConfig.displayName = 'proto.alis.open.agent.v2.PushNotificationConfig';
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
proto.alis.open.agent.v2.AuthenticationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v2.AuthenticationInfo.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v2.AuthenticationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.AuthenticationInfo.displayName = 'proto.alis.open.agent.v2.AuthenticationInfo';
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
proto.alis.open.agent.v2.AgentInterface = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.AgentInterface, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.AgentInterface.displayName = 'proto.alis.open.agent.v2.AgentInterface';
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
proto.alis.open.agent.v2.AgentCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v2.AgentCard.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v2.AgentCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.AgentCard.displayName = 'proto.alis.open.agent.v2.AgentCard';
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
proto.alis.open.agent.v2.AgentProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.AgentProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.AgentProvider.displayName = 'proto.alis.open.agent.v2.AgentProvider';
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
proto.alis.open.agent.v2.AgentCapabilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v2.AgentCapabilities.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v2.AgentCapabilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.AgentCapabilities.displayName = 'proto.alis.open.agent.v2.AgentCapabilities';
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
proto.alis.open.agent.v2.AgentExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.AgentExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.AgentExtension.displayName = 'proto.alis.open.agent.v2.AgentExtension';
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
proto.alis.open.agent.v2.AgentSkill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v2.AgentSkill.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v2.AgentSkill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.AgentSkill.displayName = 'proto.alis.open.agent.v2.AgentSkill';
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
proto.alis.open.agent.v2.AgentCardSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.AgentCardSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.AgentCardSignature.displayName = 'proto.alis.open.agent.v2.AgentCardSignature';
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
proto.alis.open.agent.v2.TaskPushNotificationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.TaskPushNotificationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.TaskPushNotificationConfig.displayName = 'proto.alis.open.agent.v2.TaskPushNotificationConfig';
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
proto.alis.open.agent.v2.StringList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v2.StringList.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v2.StringList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.StringList.displayName = 'proto.alis.open.agent.v2.StringList';
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
proto.alis.open.agent.v2.Security = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.Security, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.Security.displayName = 'proto.alis.open.agent.v2.Security';
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
proto.alis.open.agent.v2.SecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v2.SecurityScheme.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v2.SecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.SecurityScheme.displayName = 'proto.alis.open.agent.v2.SecurityScheme';
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
proto.alis.open.agent.v2.APIKeySecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.APIKeySecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.APIKeySecurityScheme.displayName = 'proto.alis.open.agent.v2.APIKeySecurityScheme';
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
proto.alis.open.agent.v2.HTTPAuthSecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.HTTPAuthSecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.HTTPAuthSecurityScheme.displayName = 'proto.alis.open.agent.v2.HTTPAuthSecurityScheme';
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
proto.alis.open.agent.v2.OAuth2SecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.OAuth2SecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.OAuth2SecurityScheme.displayName = 'proto.alis.open.agent.v2.OAuth2SecurityScheme';
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
proto.alis.open.agent.v2.OpenIdConnectSecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.OpenIdConnectSecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.displayName = 'proto.alis.open.agent.v2.OpenIdConnectSecurityScheme';
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
proto.alis.open.agent.v2.MutualTlsSecurityScheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.MutualTlsSecurityScheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.MutualTlsSecurityScheme.displayName = 'proto.alis.open.agent.v2.MutualTlsSecurityScheme';
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
proto.alis.open.agent.v2.OAuthFlows = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v2.OAuthFlows.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v2.OAuthFlows, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.OAuthFlows.displayName = 'proto.alis.open.agent.v2.OAuthFlows';
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
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.displayName = 'proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow';
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
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.ClientCredentialsOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.displayName = 'proto.alis.open.agent.v2.ClientCredentialsOAuthFlow';
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
proto.alis.open.agent.v2.ImplicitOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.ImplicitOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.ImplicitOAuthFlow.displayName = 'proto.alis.open.agent.v2.ImplicitOAuthFlow';
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
proto.alis.open.agent.v2.PasswordOAuthFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.PasswordOAuthFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.PasswordOAuthFlow.displayName = 'proto.alis.open.agent.v2.PasswordOAuthFlow';
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
proto.alis.open.agent.v2.SendMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.SendMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.SendMessageRequest.displayName = 'proto.alis.open.agent.v2.SendMessageRequest';
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
proto.alis.open.agent.v2.GetTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.GetTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.GetTaskRequest.displayName = 'proto.alis.open.agent.v2.GetTaskRequest';
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
proto.alis.open.agent.v2.ListTasksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.ListTasksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.ListTasksRequest.displayName = 'proto.alis.open.agent.v2.ListTasksRequest';
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
proto.alis.open.agent.v2.ListTasksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v2.ListTasksResponse.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v2.ListTasksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.ListTasksResponse.displayName = 'proto.alis.open.agent.v2.ListTasksResponse';
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
proto.alis.open.agent.v2.CancelTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.CancelTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.CancelTaskRequest.displayName = 'proto.alis.open.agent.v2.CancelTaskRequest';
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
proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.displayName = 'proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest';
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
proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.displayName = 'proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest';
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
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.displayName = 'proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest';
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
proto.alis.open.agent.v2.TaskSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.TaskSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.TaskSubscriptionRequest.displayName = 'proto.alis.open.agent.v2.TaskSubscriptionRequest';
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
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.displayName = 'proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest';
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
proto.alis.open.agent.v2.GetAgentCardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.alis.open.agent.v2.GetAgentCardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.GetAgentCardRequest.displayName = 'proto.alis.open.agent.v2.GetAgentCardRequest';
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
proto.alis.open.agent.v2.SendMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v2.SendMessageResponse.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v2.SendMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.SendMessageResponse.displayName = 'proto.alis.open.agent.v2.SendMessageResponse';
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
proto.alis.open.agent.v2.StreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.alis.open.agent.v2.StreamResponse.oneofGroups_);
};
goog.inherits(proto.alis.open.agent.v2.StreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.StreamResponse.displayName = 'proto.alis.open.agent.v2.StreamResponse';
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
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.repeatedFields_, null);
};
goog.inherits(proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.displayName = 'proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v2.SendMessageConfiguration.repeatedFields_ = [1];



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
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.SendMessageConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.SendMessageConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.SendMessageConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
acceptedOutputModesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
pushNotification: (f = msg.getPushNotification()) && proto.alis.open.agent.v2.PushNotificationConfig.toObject(includeInstance, f),
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
 * @return {!proto.alis.open.agent.v2.SendMessageConfiguration}
 */
proto.alis.open.agent.v2.SendMessageConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.SendMessageConfiguration;
  return proto.alis.open.agent.v2.SendMessageConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.SendMessageConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.SendMessageConfiguration}
 */
proto.alis.open.agent.v2.SendMessageConfiguration.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.PushNotificationConfig;
      reader.readMessage(value,proto.alis.open.agent.v2.PushNotificationConfig.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.SendMessageConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.SendMessageConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.SendMessageConfiguration.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.PushNotificationConfig.serializeBinaryToWriter
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
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.getAcceptedOutputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.setAcceptedOutputModesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.addAcceptedOutputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.clearAcceptedOutputModesList = function() {
  return this.setAcceptedOutputModesList([]);
};


/**
 * optional PushNotificationConfig push_notification = 2;
 * @return {?proto.alis.open.agent.v2.PushNotificationConfig}
 */
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.getPushNotification = function() {
  return /** @type{?proto.alis.open.agent.v2.PushNotificationConfig} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.PushNotificationConfig, 2));
};


/**
 * @param {?proto.alis.open.agent.v2.PushNotificationConfig|undefined} value
 * @return {!proto.alis.open.agent.v2.SendMessageConfiguration} returns this
*/
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.setPushNotification = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.clearPushNotification = function() {
  return this.setPushNotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.hasPushNotification = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 history_length = 3;
 * @return {number}
 */
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.getHistoryLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v2.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.setHistoryLength = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool blocking = 4;
 * @return {boolean}
 */
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.getBlocking = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v2.SendMessageConfiguration} returns this
 */
proto.alis.open.agent.v2.SendMessageConfiguration.prototype.setBlocking = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v2.Task.repeatedFields_ = [4,5];



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
proto.alis.open.agent.v2.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
status: (f = msg.getStatus()) && proto.alis.open.agent.v2.TaskStatus.toObject(includeInstance, f),
artifactsList: jspb.Message.toObjectList(msg.getArtifactsList(),
    proto.alis.open.agent.v2.Artifact.toObject, includeInstance),
historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.alis.open.agent.v2.Message.toObject, includeInstance),
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
 * @return {!proto.alis.open.agent.v2.Task}
 */
proto.alis.open.agent.v2.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.Task;
  return proto.alis.open.agent.v2.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.Task}
 */
proto.alis.open.agent.v2.Task.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setContextId(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v2.TaskStatus;
      reader.readMessage(value,proto.alis.open.agent.v2.TaskStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 4:
      var value = new proto.alis.open.agent.v2.Artifact;
      reader.readMessage(value,proto.alis.open.agent.v2.Artifact.deserializeBinaryFromReader);
      msg.addArtifacts(value);
      break;
    case 5:
      var value = new proto.alis.open.agent.v2.Message;
      reader.readMessage(value,proto.alis.open.agent.v2.Message.deserializeBinaryFromReader);
      msg.addHistory(value);
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
proto.alis.open.agent.v2.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
      proto.alis.open.agent.v2.TaskStatus.serializeBinaryToWriter
    );
  }
  f = message.getArtifactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.alis.open.agent.v2.Artifact.serializeBinaryToWriter
    );
  }
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.alis.open.agent.v2.Message.serializeBinaryToWriter
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
 * optional string id = 1;
 * @return {string}
 */
proto.alis.open.agent.v2.Task.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.Task} returns this
 */
proto.alis.open.agent.v2.Task.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.Task.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.Task} returns this
 */
proto.alis.open.agent.v2.Task.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TaskStatus status = 3;
 * @return {?proto.alis.open.agent.v2.TaskStatus}
 */
proto.alis.open.agent.v2.Task.prototype.getStatus = function() {
  return /** @type{?proto.alis.open.agent.v2.TaskStatus} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.TaskStatus, 3));
};


/**
 * @param {?proto.alis.open.agent.v2.TaskStatus|undefined} value
 * @return {!proto.alis.open.agent.v2.Task} returns this
*/
proto.alis.open.agent.v2.Task.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.Task} returns this
 */
proto.alis.open.agent.v2.Task.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.Task.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Artifact artifacts = 4;
 * @return {!Array<!proto.alis.open.agent.v2.Artifact>}
 */
proto.alis.open.agent.v2.Task.prototype.getArtifactsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.Artifact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.Artifact, 4));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.Artifact>} value
 * @return {!proto.alis.open.agent.v2.Task} returns this
*/
proto.alis.open.agent.v2.Task.prototype.setArtifactsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.alis.open.agent.v2.Artifact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.Artifact}
 */
proto.alis.open.agent.v2.Task.prototype.addArtifacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.alis.open.agent.v2.Artifact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.Task} returns this
 */
proto.alis.open.agent.v2.Task.prototype.clearArtifactsList = function() {
  return this.setArtifactsList([]);
};


/**
 * repeated Message history = 5;
 * @return {!Array<!proto.alis.open.agent.v2.Message>}
 */
proto.alis.open.agent.v2.Task.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.Message, 5));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.Message>} value
 * @return {!proto.alis.open.agent.v2.Task} returns this
*/
proto.alis.open.agent.v2.Task.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.alis.open.agent.v2.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.Message}
 */
proto.alis.open.agent.v2.Task.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.alis.open.agent.v2.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.Task} returns this
 */
proto.alis.open.agent.v2.Task.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};


/**
 * optional google.protobuf.Struct metadata = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v2.Task.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v2.Task} returns this
*/
proto.alis.open.agent.v2.Task.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.Task} returns this
 */
proto.alis.open.agent.v2.Task.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.Task.prototype.hasMetadata = function() {
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
proto.alis.open.agent.v2.TaskStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.TaskStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.TaskStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.TaskStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0),
update: (f = msg.getUpdate()) && proto.alis.open.agent.v2.Message.toObject(includeInstance, f),
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
 * @return {!proto.alis.open.agent.v2.TaskStatus}
 */
proto.alis.open.agent.v2.TaskStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.TaskStatus;
  return proto.alis.open.agent.v2.TaskStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.TaskStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.TaskStatus}
 */
proto.alis.open.agent.v2.TaskStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.alis.open.agent.v2.TaskState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v2.Message;
      reader.readMessage(value,proto.alis.open.agent.v2.Message.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.TaskStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.TaskStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.TaskStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.TaskStatus.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.Message.serializeBinaryToWriter
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
 * @return {!proto.alis.open.agent.v2.TaskState}
 */
proto.alis.open.agent.v2.TaskStatus.prototype.getState = function() {
  return /** @type {!proto.alis.open.agent.v2.TaskState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.alis.open.agent.v2.TaskState} value
 * @return {!proto.alis.open.agent.v2.TaskStatus} returns this
 */
proto.alis.open.agent.v2.TaskStatus.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Message update = 2;
 * @return {?proto.alis.open.agent.v2.Message}
 */
proto.alis.open.agent.v2.TaskStatus.prototype.getUpdate = function() {
  return /** @type{?proto.alis.open.agent.v2.Message} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.Message, 2));
};


/**
 * @param {?proto.alis.open.agent.v2.Message|undefined} value
 * @return {!proto.alis.open.agent.v2.TaskStatus} returns this
*/
proto.alis.open.agent.v2.TaskStatus.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.TaskStatus} returns this
 */
proto.alis.open.agent.v2.TaskStatus.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.TaskStatus.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.alis.open.agent.v2.TaskStatus.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.alis.open.agent.v2.TaskStatus} returns this
*/
proto.alis.open.agent.v2.TaskStatus.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.TaskStatus} returns this
 */
proto.alis.open.agent.v2.TaskStatus.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.TaskStatus.prototype.hasTimestamp = function() {
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
proto.alis.open.agent.v2.Part.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v2.Part.PartCase = {
  PART_NOT_SET: 0,
  TEXT: 1,
  FILE: 2,
  DATA: 3
};

/**
 * @return {proto.alis.open.agent.v2.Part.PartCase}
 */
proto.alis.open.agent.v2.Part.prototype.getPartCase = function() {
  return /** @type {proto.alis.open.agent.v2.Part.PartCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v2.Part.oneofGroups_[0]));
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
proto.alis.open.agent.v2.Part.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.Part.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.Part} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.Part.toObject = function(includeInstance, msg) {
  var f, obj = {
text: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
file: (f = msg.getFile()) && proto.alis.open.agent.v2.FilePart.toObject(includeInstance, f),
data: (f = msg.getData()) && proto.alis.open.agent.v2.DataPart.toObject(includeInstance, f),
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
 * @return {!proto.alis.open.agent.v2.Part}
 */
proto.alis.open.agent.v2.Part.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.Part;
  return proto.alis.open.agent.v2.Part.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.Part} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.Part}
 */
proto.alis.open.agent.v2.Part.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.FilePart;
      reader.readMessage(value,proto.alis.open.agent.v2.FilePart.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v2.DataPart;
      reader.readMessage(value,proto.alis.open.agent.v2.DataPart.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.alis.open.agent.v2.Part.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.Part.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.Part} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.Part.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.FilePart.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.open.agent.v2.DataPart.serializeBinaryToWriter
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
proto.alis.open.agent.v2.Part.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.Part} returns this
 */
proto.alis.open.agent.v2.Part.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.alis.open.agent.v2.Part.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.open.agent.v2.Part} returns this
 */
proto.alis.open.agent.v2.Part.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 1, proto.alis.open.agent.v2.Part.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.Part.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FilePart file = 2;
 * @return {?proto.alis.open.agent.v2.FilePart}
 */
proto.alis.open.agent.v2.Part.prototype.getFile = function() {
  return /** @type{?proto.alis.open.agent.v2.FilePart} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.FilePart, 2));
};


/**
 * @param {?proto.alis.open.agent.v2.FilePart|undefined} value
 * @return {!proto.alis.open.agent.v2.Part} returns this
*/
proto.alis.open.agent.v2.Part.prototype.setFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.open.agent.v2.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.Part} returns this
 */
proto.alis.open.agent.v2.Part.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.Part.prototype.hasFile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DataPart data = 3;
 * @return {?proto.alis.open.agent.v2.DataPart}
 */
proto.alis.open.agent.v2.Part.prototype.getData = function() {
  return /** @type{?proto.alis.open.agent.v2.DataPart} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.DataPart, 3));
};


/**
 * @param {?proto.alis.open.agent.v2.DataPart|undefined} value
 * @return {!proto.alis.open.agent.v2.Part} returns this
*/
proto.alis.open.agent.v2.Part.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.alis.open.agent.v2.Part.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.Part} returns this
 */
proto.alis.open.agent.v2.Part.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.Part.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct metadata = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v2.Part.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v2.Part} returns this
*/
proto.alis.open.agent.v2.Part.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.Part} returns this
 */
proto.alis.open.agent.v2.Part.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.Part.prototype.hasMetadata = function() {
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
proto.alis.open.agent.v2.FilePart.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v2.FilePart.FileCase = {
  FILE_NOT_SET: 0,
  FILE_WITH_URI: 1,
  FILE_WITH_BYTES: 2
};

/**
 * @return {proto.alis.open.agent.v2.FilePart.FileCase}
 */
proto.alis.open.agent.v2.FilePart.prototype.getFileCase = function() {
  return /** @type {proto.alis.open.agent.v2.FilePart.FileCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v2.FilePart.oneofGroups_[0]));
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
proto.alis.open.agent.v2.FilePart.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.FilePart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.FilePart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.FilePart.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.FilePart}
 */
proto.alis.open.agent.v2.FilePart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.FilePart;
  return proto.alis.open.agent.v2.FilePart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.FilePart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.FilePart}
 */
proto.alis.open.agent.v2.FilePart.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.FilePart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.FilePart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.FilePart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.FilePart.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.FilePart.prototype.getFileWithUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.FilePart} returns this
 */
proto.alis.open.agent.v2.FilePart.prototype.setFileWithUri = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.alis.open.agent.v2.FilePart.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.open.agent.v2.FilePart} returns this
 */
proto.alis.open.agent.v2.FilePart.prototype.clearFileWithUri = function() {
  return jspb.Message.setOneofField(this, 1, proto.alis.open.agent.v2.FilePart.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.FilePart.prototype.hasFileWithUri = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes file_with_bytes = 2;
 * @return {!(string|Uint8Array)}
 */
proto.alis.open.agent.v2.FilePart.prototype.getFileWithBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes file_with_bytes = 2;
 * This is a type-conversion wrapper around `getFileWithBytes()`
 * @return {string}
 */
proto.alis.open.agent.v2.FilePart.prototype.getFileWithBytes_asB64 = function() {
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
proto.alis.open.agent.v2.FilePart.prototype.getFileWithBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileWithBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.alis.open.agent.v2.FilePart} returns this
 */
proto.alis.open.agent.v2.FilePart.prototype.setFileWithBytes = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.alis.open.agent.v2.FilePart.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.alis.open.agent.v2.FilePart} returns this
 */
proto.alis.open.agent.v2.FilePart.prototype.clearFileWithBytes = function() {
  return jspb.Message.setOneofField(this, 2, proto.alis.open.agent.v2.FilePart.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.FilePart.prototype.hasFileWithBytes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string mime_type = 3;
 * @return {string}
 */
proto.alis.open.agent.v2.FilePart.prototype.getMimeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.FilePart} returns this
 */
proto.alis.open.agent.v2.FilePart.prototype.setMimeType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.alis.open.agent.v2.FilePart.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.FilePart} returns this
 */
proto.alis.open.agent.v2.FilePart.prototype.setName = function(value) {
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
proto.alis.open.agent.v2.DataPart.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.DataPart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.DataPart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.DataPart.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.DataPart}
 */
proto.alis.open.agent.v2.DataPart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.DataPart;
  return proto.alis.open.agent.v2.DataPart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.DataPart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.DataPart}
 */
proto.alis.open.agent.v2.DataPart.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.DataPart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.DataPart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.DataPart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.DataPart.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.DataPart.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v2.DataPart} returns this
*/
proto.alis.open.agent.v2.DataPart.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.DataPart} returns this
 */
proto.alis.open.agent.v2.DataPart.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.DataPart.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v2.Message.repeatedFields_ = [5,7,8];



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
proto.alis.open.agent.v2.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
messageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
taskId: jspb.Message.getFieldWithDefault(msg, 3, ""),
role: jspb.Message.getFieldWithDefault(msg, 4, 0),
partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.alis.open.agent.v2.Part.toObject, includeInstance),
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
 * @return {!proto.alis.open.agent.v2.Message}
 */
proto.alis.open.agent.v2.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.Message;
  return proto.alis.open.agent.v2.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.Message}
 */
proto.alis.open.agent.v2.Message.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.alis.open.agent.v2.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 5:
      var value = new proto.alis.open.agent.v2.Part;
      reader.readMessage(value,proto.alis.open.agent.v2.Part.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.Message.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.Part.serializeBinaryToWriter
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
proto.alis.open.agent.v2.Message.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.Message.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string task_id = 3;
 * @return {string}
 */
proto.alis.open.agent.v2.Message.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Role role = 4;
 * @return {!proto.alis.open.agent.v2.Role}
 */
proto.alis.open.agent.v2.Message.prototype.getRole = function() {
  return /** @type {!proto.alis.open.agent.v2.Role} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.alis.open.agent.v2.Role} value
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated Part parts = 5;
 * @return {!Array<!proto.alis.open.agent.v2.Part>}
 */
proto.alis.open.agent.v2.Message.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.Part>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.Part, 5));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.Part>} value
 * @return {!proto.alis.open.agent.v2.Message} returns this
*/
proto.alis.open.agent.v2.Message.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.alis.open.agent.v2.Part=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.Part}
 */
proto.alis.open.agent.v2.Message.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.alis.open.agent.v2.Part, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};


/**
 * optional google.protobuf.Struct metadata = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v2.Message.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v2.Message} returns this
*/
proto.alis.open.agent.v2.Message.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.Message.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string extensions = 7;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v2.Message.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};


/**
 * repeated string reference_task_ids = 8;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v2.Message.prototype.getReferenceTaskIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.setReferenceTaskIdsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.addReferenceTaskIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.Message} returns this
 */
proto.alis.open.agent.v2.Message.prototype.clearReferenceTaskIdsList = function() {
  return this.setReferenceTaskIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v2.Artifact.repeatedFields_ = [5,7];



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
proto.alis.open.agent.v2.Artifact.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.Artifact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.Artifact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.Artifact.toObject = function(includeInstance, msg) {
  var f, obj = {
artifactId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.alis.open.agent.v2.Part.toObject, includeInstance),
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
 * @return {!proto.alis.open.agent.v2.Artifact}
 */
proto.alis.open.agent.v2.Artifact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.Artifact;
  return proto.alis.open.agent.v2.Artifact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.Artifact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.Artifact}
 */
proto.alis.open.agent.v2.Artifact.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.Part;
      reader.readMessage(value,proto.alis.open.agent.v2.Part.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.Artifact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.Artifact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.Artifact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.Artifact.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.Part.serializeBinaryToWriter
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
proto.alis.open.agent.v2.Artifact.prototype.getArtifactId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.Artifact} returns this
 */
proto.alis.open.agent.v2.Artifact.prototype.setArtifactId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.alis.open.agent.v2.Artifact.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.Artifact} returns this
 */
proto.alis.open.agent.v2.Artifact.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.alis.open.agent.v2.Artifact.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.Artifact} returns this
 */
proto.alis.open.agent.v2.Artifact.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Part parts = 5;
 * @return {!Array<!proto.alis.open.agent.v2.Part>}
 */
proto.alis.open.agent.v2.Artifact.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.Part>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.Part, 5));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.Part>} value
 * @return {!proto.alis.open.agent.v2.Artifact} returns this
*/
proto.alis.open.agent.v2.Artifact.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.alis.open.agent.v2.Part=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.Part}
 */
proto.alis.open.agent.v2.Artifact.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.alis.open.agent.v2.Part, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.Artifact} returns this
 */
proto.alis.open.agent.v2.Artifact.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};


/**
 * optional google.protobuf.Struct metadata = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v2.Artifact.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v2.Artifact} returns this
*/
proto.alis.open.agent.v2.Artifact.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.Artifact} returns this
 */
proto.alis.open.agent.v2.Artifact.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.Artifact.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string extensions = 7;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v2.Artifact.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.Artifact} returns this
 */
proto.alis.open.agent.v2.Artifact.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.Artifact} returns this
 */
proto.alis.open.agent.v2.Artifact.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.Artifact} returns this
 */
proto.alis.open.agent.v2.Artifact.prototype.clearExtensionsList = function() {
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
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.TaskStatusUpdateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.TaskStatusUpdateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
taskId: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
status: (f = msg.getStatus()) && proto.alis.open.agent.v2.TaskStatus.toObject(includeInstance, f),
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
 * @return {!proto.alis.open.agent.v2.TaskStatusUpdateEvent}
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.TaskStatusUpdateEvent;
  return proto.alis.open.agent.v2.TaskStatusUpdateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.TaskStatusUpdateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.TaskStatusUpdateEvent}
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.TaskStatus;
      reader.readMessage(value,proto.alis.open.agent.v2.TaskStatus.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.TaskStatusUpdateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.TaskStatusUpdateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.TaskStatus.serializeBinaryToWriter
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
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.TaskStatusUpdateEvent} returns this
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.TaskStatusUpdateEvent} returns this
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TaskStatus status = 3;
 * @return {?proto.alis.open.agent.v2.TaskStatus}
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.getStatus = function() {
  return /** @type{?proto.alis.open.agent.v2.TaskStatus} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.TaskStatus, 3));
};


/**
 * @param {?proto.alis.open.agent.v2.TaskStatus|undefined} value
 * @return {!proto.alis.open.agent.v2.TaskStatusUpdateEvent} returns this
*/
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.TaskStatusUpdateEvent} returns this
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool final = 4;
 * @return {boolean}
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.getFinal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v2.TaskStatusUpdateEvent} returns this
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.setFinal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Struct metadata = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v2.TaskStatusUpdateEvent} returns this
*/
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.TaskStatusUpdateEvent} returns this
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.TaskStatusUpdateEvent.prototype.hasMetadata = function() {
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
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.TaskArtifactUpdateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
taskId: jspb.Message.getFieldWithDefault(msg, 1, ""),
contextId: jspb.Message.getFieldWithDefault(msg, 2, ""),
artifact: (f = msg.getArtifact()) && proto.alis.open.agent.v2.Artifact.toObject(includeInstance, f),
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
 * @return {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent}
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.TaskArtifactUpdateEvent;
  return proto.alis.open.agent.v2.TaskArtifactUpdateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent}
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.Artifact;
      reader.readMessage(value,proto.alis.open.agent.v2.Artifact.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.TaskArtifactUpdateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.Artifact.serializeBinaryToWriter
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
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context_id = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Artifact artifact = 3;
 * @return {?proto.alis.open.agent.v2.Artifact}
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.getArtifact = function() {
  return /** @type{?proto.alis.open.agent.v2.Artifact} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.Artifact, 3));
};


/**
 * @param {?proto.alis.open.agent.v2.Artifact|undefined} value
 * @return {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent} returns this
*/
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.setArtifact = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.clearArtifact = function() {
  return this.setArtifact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.hasArtifact = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool append = 4;
 * @return {boolean}
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.getAppend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.setAppend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool last_chunk = 5;
 * @return {boolean}
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.getLastChunk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.setLastChunk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional google.protobuf.Struct metadata = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent} returns this
*/
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.TaskArtifactUpdateEvent} returns this
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.TaskArtifactUpdateEvent.prototype.hasMetadata = function() {
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
proto.alis.open.agent.v2.PushNotificationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.PushNotificationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.PushNotificationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.PushNotificationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
url: jspb.Message.getFieldWithDefault(msg, 2, ""),
token: jspb.Message.getFieldWithDefault(msg, 3, ""),
authentication: (f = msg.getAuthentication()) && proto.alis.open.agent.v2.AuthenticationInfo.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v2.PushNotificationConfig}
 */
proto.alis.open.agent.v2.PushNotificationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.PushNotificationConfig;
  return proto.alis.open.agent.v2.PushNotificationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.PushNotificationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.PushNotificationConfig}
 */
proto.alis.open.agent.v2.PushNotificationConfig.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.AuthenticationInfo;
      reader.readMessage(value,proto.alis.open.agent.v2.AuthenticationInfo.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.PushNotificationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.PushNotificationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.PushNotificationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.PushNotificationConfig.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.AuthenticationInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.alis.open.agent.v2.PushNotificationConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.PushNotificationConfig} returns this
 */
proto.alis.open.agent.v2.PushNotificationConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.PushNotificationConfig.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.PushNotificationConfig} returns this
 */
proto.alis.open.agent.v2.PushNotificationConfig.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.alis.open.agent.v2.PushNotificationConfig.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.PushNotificationConfig} returns this
 */
proto.alis.open.agent.v2.PushNotificationConfig.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AuthenticationInfo authentication = 4;
 * @return {?proto.alis.open.agent.v2.AuthenticationInfo}
 */
proto.alis.open.agent.v2.PushNotificationConfig.prototype.getAuthentication = function() {
  return /** @type{?proto.alis.open.agent.v2.AuthenticationInfo} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.AuthenticationInfo, 4));
};


/**
 * @param {?proto.alis.open.agent.v2.AuthenticationInfo|undefined} value
 * @return {!proto.alis.open.agent.v2.PushNotificationConfig} returns this
*/
proto.alis.open.agent.v2.PushNotificationConfig.prototype.setAuthentication = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.PushNotificationConfig} returns this
 */
proto.alis.open.agent.v2.PushNotificationConfig.prototype.clearAuthentication = function() {
  return this.setAuthentication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.PushNotificationConfig.prototype.hasAuthentication = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v2.AuthenticationInfo.repeatedFields_ = [1];



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
proto.alis.open.agent.v2.AuthenticationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.AuthenticationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.AuthenticationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AuthenticationInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.AuthenticationInfo}
 */
proto.alis.open.agent.v2.AuthenticationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.AuthenticationInfo;
  return proto.alis.open.agent.v2.AuthenticationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.AuthenticationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.AuthenticationInfo}
 */
proto.alis.open.agent.v2.AuthenticationInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.AuthenticationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.AuthenticationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.AuthenticationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AuthenticationInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.AuthenticationInfo.prototype.getSchemesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.AuthenticationInfo} returns this
 */
proto.alis.open.agent.v2.AuthenticationInfo.prototype.setSchemesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.AuthenticationInfo} returns this
 */
proto.alis.open.agent.v2.AuthenticationInfo.prototype.addSchemes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AuthenticationInfo} returns this
 */
proto.alis.open.agent.v2.AuthenticationInfo.prototype.clearSchemesList = function() {
  return this.setSchemesList([]);
};


/**
 * optional string credentials = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.AuthenticationInfo.prototype.getCredentials = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AuthenticationInfo} returns this
 */
proto.alis.open.agent.v2.AuthenticationInfo.prototype.setCredentials = function(value) {
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
proto.alis.open.agent.v2.AgentInterface.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.AgentInterface.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.AgentInterface} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentInterface.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.AgentInterface}
 */
proto.alis.open.agent.v2.AgentInterface.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.AgentInterface;
  return proto.alis.open.agent.v2.AgentInterface.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.AgentInterface} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.AgentInterface}
 */
proto.alis.open.agent.v2.AgentInterface.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.AgentInterface.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.AgentInterface.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.AgentInterface} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentInterface.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.AgentInterface.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentInterface} returns this
 */
proto.alis.open.agent.v2.AgentInterface.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transport = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentInterface.prototype.getTransport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentInterface} returns this
 */
proto.alis.open.agent.v2.AgentInterface.prototype.setTransport = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v2.AgentCard.repeatedFields_ = [15,9,10,11,12,17];



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
proto.alis.open.agent.v2.AgentCard.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.AgentCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.AgentCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentCard.toObject = function(includeInstance, msg) {
  var f, obj = {
protocolVersion: jspb.Message.getFieldWithDefault(msg, 16, ""),
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
url: jspb.Message.getFieldWithDefault(msg, 3, ""),
preferredTransport: jspb.Message.getFieldWithDefault(msg, 14, ""),
additionalInterfacesList: jspb.Message.toObjectList(msg.getAdditionalInterfacesList(),
    proto.alis.open.agent.v2.AgentInterface.toObject, includeInstance),
provider: (f = msg.getProvider()) && proto.alis.open.agent.v2.AgentProvider.toObject(includeInstance, f),
version: jspb.Message.getFieldWithDefault(msg, 5, ""),
documentationUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
capabilities: (f = msg.getCapabilities()) && proto.alis.open.agent.v2.AgentCapabilities.toObject(includeInstance, f),
securitySchemesMap: (f = msg.getSecuritySchemesMap()) ? f.toObject(includeInstance, proto.alis.open.agent.v2.SecurityScheme.toObject) : [],
securityList: jspb.Message.toObjectList(msg.getSecurityList(),
    proto.alis.open.agent.v2.Security.toObject, includeInstance),
defaultInputModesList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
defaultOutputModesList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    proto.alis.open.agent.v2.AgentSkill.toObject, includeInstance),
supportsAuthenticatedExtendedCard: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
signaturesList: jspb.Message.toObjectList(msg.getSignaturesList(),
    proto.alis.open.agent.v2.AgentCardSignature.toObject, includeInstance),
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
 * @return {!proto.alis.open.agent.v2.AgentCard}
 */
proto.alis.open.agent.v2.AgentCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.AgentCard;
  return proto.alis.open.agent.v2.AgentCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.AgentCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.AgentCard}
 */
proto.alis.open.agent.v2.AgentCard.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.AgentInterface;
      reader.readMessage(value,proto.alis.open.agent.v2.AgentInterface.deserializeBinaryFromReader);
      msg.addAdditionalInterfaces(value);
      break;
    case 4:
      var value = new proto.alis.open.agent.v2.AgentProvider;
      reader.readMessage(value,proto.alis.open.agent.v2.AgentProvider.deserializeBinaryFromReader);
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
      var value = new proto.alis.open.agent.v2.AgentCapabilities;
      reader.readMessage(value,proto.alis.open.agent.v2.AgentCapabilities.deserializeBinaryFromReader);
      msg.setCapabilities(value);
      break;
    case 8:
      var value = msg.getSecuritySchemesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readMessage, proto.alis.open.agent.v2.SecurityScheme.deserializeBinaryFromReader, "", new proto.alis.open.agent.v2.SecurityScheme());
         });
      break;
    case 9:
      var value = new proto.alis.open.agent.v2.Security;
      reader.readMessage(value,proto.alis.open.agent.v2.Security.deserializeBinaryFromReader);
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
      var value = new proto.alis.open.agent.v2.AgentSkill;
      reader.readMessage(value,proto.alis.open.agent.v2.AgentSkill.deserializeBinaryFromReader);
      msg.addSkills(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsAuthenticatedExtendedCard(value);
      break;
    case 17:
      var value = new proto.alis.open.agent.v2.AgentCardSignature;
      reader.readMessage(value,proto.alis.open.agent.v2.AgentCardSignature.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.AgentCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.AgentCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.AgentCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentCard.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.AgentInterface.serializeBinaryToWriter
    );
  }
  f = message.getProvider();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.open.agent.v2.AgentProvider.serializeBinaryToWriter
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
      proto.alis.open.agent.v2.AgentCapabilities.serializeBinaryToWriter
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
    proto.alis.open.agent.v2.SecurityScheme.serializeBinaryToWriter);
  }
  f = message.getSecurityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.alis.open.agent.v2.Security.serializeBinaryToWriter
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
      proto.alis.open.agent.v2.AgentSkill.serializeBinaryToWriter
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
      proto.alis.open.agent.v2.AgentCardSignature.serializeBinaryToWriter
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
proto.alis.open.agent.v2.AgentCard.prototype.getProtocolVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.setProtocolVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string preferred_transport = 14;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getPreferredTransport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.setPreferredTransport = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * repeated AgentInterface additional_interfaces = 15;
 * @return {!Array<!proto.alis.open.agent.v2.AgentInterface>}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getAdditionalInterfacesList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.AgentInterface>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.AgentInterface, 15));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.AgentInterface>} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
*/
proto.alis.open.agent.v2.AgentCard.prototype.setAdditionalInterfacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.alis.open.agent.v2.AgentInterface=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.AgentInterface}
 */
proto.alis.open.agent.v2.AgentCard.prototype.addAdditionalInterfaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.alis.open.agent.v2.AgentInterface, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.clearAdditionalInterfacesList = function() {
  return this.setAdditionalInterfacesList([]);
};


/**
 * optional AgentProvider provider = 4;
 * @return {?proto.alis.open.agent.v2.AgentProvider}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getProvider = function() {
  return /** @type{?proto.alis.open.agent.v2.AgentProvider} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.AgentProvider, 4));
};


/**
 * @param {?proto.alis.open.agent.v2.AgentProvider|undefined} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
*/
proto.alis.open.agent.v2.AgentCard.prototype.setProvider = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.clearProvider = function() {
  return this.setProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.AgentCard.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string version = 5;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string documentation_url = 6;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getDocumentationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.setDocumentationUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional AgentCapabilities capabilities = 7;
 * @return {?proto.alis.open.agent.v2.AgentCapabilities}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getCapabilities = function() {
  return /** @type{?proto.alis.open.agent.v2.AgentCapabilities} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.AgentCapabilities, 7));
};


/**
 * @param {?proto.alis.open.agent.v2.AgentCapabilities|undefined} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
*/
proto.alis.open.agent.v2.AgentCard.prototype.setCapabilities = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.clearCapabilities = function() {
  return this.setCapabilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.AgentCard.prototype.hasCapabilities = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, SecurityScheme> security_schemes = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.alis.open.agent.v2.SecurityScheme>}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getSecuritySchemesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.alis.open.agent.v2.SecurityScheme>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.alis.open.agent.v2.SecurityScheme));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.clearSecuritySchemesMap = function() {
  this.getSecuritySchemesMap().clear();
  return this;
};


/**
 * repeated Security security = 9;
 * @return {!Array<!proto.alis.open.agent.v2.Security>}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getSecurityList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.Security>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.Security, 9));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.Security>} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
*/
proto.alis.open.agent.v2.AgentCard.prototype.setSecurityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.alis.open.agent.v2.Security=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.Security}
 */
proto.alis.open.agent.v2.AgentCard.prototype.addSecurity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.alis.open.agent.v2.Security, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.clearSecurityList = function() {
  return this.setSecurityList([]);
};


/**
 * repeated string default_input_modes = 10;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getDefaultInputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.setDefaultInputModesList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.addDefaultInputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.clearDefaultInputModesList = function() {
  return this.setDefaultInputModesList([]);
};


/**
 * repeated string default_output_modes = 11;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getDefaultOutputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.setDefaultOutputModesList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.addDefaultOutputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.clearDefaultOutputModesList = function() {
  return this.setDefaultOutputModesList([]);
};


/**
 * repeated AgentSkill skills = 12;
 * @return {!Array<!proto.alis.open.agent.v2.AgentSkill>}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.AgentSkill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.AgentSkill, 12));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.AgentSkill>} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
*/
proto.alis.open.agent.v2.AgentCard.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.alis.open.agent.v2.AgentSkill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.AgentSkill}
 */
proto.alis.open.agent.v2.AgentCard.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.alis.open.agent.v2.AgentSkill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * optional bool supports_authenticated_extended_card = 13;
 * @return {boolean}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getSupportsAuthenticatedExtendedCard = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.setSupportsAuthenticatedExtendedCard = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * repeated AgentCardSignature signatures = 17;
 * @return {!Array<!proto.alis.open.agent.v2.AgentCardSignature>}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getSignaturesList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.AgentCardSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.AgentCardSignature, 17));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.AgentCardSignature>} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
*/
proto.alis.open.agent.v2.AgentCard.prototype.setSignaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.alis.open.agent.v2.AgentCardSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.AgentCardSignature}
 */
proto.alis.open.agent.v2.AgentCard.prototype.addSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.alis.open.agent.v2.AgentCardSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.clearSignaturesList = function() {
  return this.setSignaturesList([]);
};


/**
 * optional string icon_url = 18;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentCard.prototype.getIconUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentCard} returns this
 */
proto.alis.open.agent.v2.AgentCard.prototype.setIconUrl = function(value) {
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
proto.alis.open.agent.v2.AgentProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.AgentProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.AgentProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentProvider.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.AgentProvider}
 */
proto.alis.open.agent.v2.AgentProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.AgentProvider;
  return proto.alis.open.agent.v2.AgentProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.AgentProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.AgentProvider}
 */
proto.alis.open.agent.v2.AgentProvider.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.AgentProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.AgentProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.AgentProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentProvider.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.AgentProvider.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentProvider} returns this
 */
proto.alis.open.agent.v2.AgentProvider.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organization = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentProvider.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentProvider} returns this
 */
proto.alis.open.agent.v2.AgentProvider.prototype.setOrganization = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v2.AgentCapabilities.repeatedFields_ = [3];



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
proto.alis.open.agent.v2.AgentCapabilities.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.AgentCapabilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.AgentCapabilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentCapabilities.toObject = function(includeInstance, msg) {
  var f, obj = {
streaming: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
pushNotifications: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
extensionsList: jspb.Message.toObjectList(msg.getExtensionsList(),
    proto.alis.open.agent.v2.AgentExtension.toObject, includeInstance),
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
 * @return {!proto.alis.open.agent.v2.AgentCapabilities}
 */
proto.alis.open.agent.v2.AgentCapabilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.AgentCapabilities;
  return proto.alis.open.agent.v2.AgentCapabilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.AgentCapabilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.AgentCapabilities}
 */
proto.alis.open.agent.v2.AgentCapabilities.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.AgentExtension;
      reader.readMessage(value,proto.alis.open.agent.v2.AgentExtension.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.AgentCapabilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.AgentCapabilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.AgentCapabilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentCapabilities.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.AgentExtension.serializeBinaryToWriter
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
proto.alis.open.agent.v2.AgentCapabilities.prototype.getStreaming = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v2.AgentCapabilities} returns this
 */
proto.alis.open.agent.v2.AgentCapabilities.prototype.setStreaming = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool push_notifications = 2;
 * @return {boolean}
 */
proto.alis.open.agent.v2.AgentCapabilities.prototype.getPushNotifications = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v2.AgentCapabilities} returns this
 */
proto.alis.open.agent.v2.AgentCapabilities.prototype.setPushNotifications = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated AgentExtension extensions = 3;
 * @return {!Array<!proto.alis.open.agent.v2.AgentExtension>}
 */
proto.alis.open.agent.v2.AgentCapabilities.prototype.getExtensionsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.AgentExtension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.AgentExtension, 3));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.AgentExtension>} value
 * @return {!proto.alis.open.agent.v2.AgentCapabilities} returns this
*/
proto.alis.open.agent.v2.AgentCapabilities.prototype.setExtensionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.alis.open.agent.v2.AgentExtension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.AgentExtension}
 */
proto.alis.open.agent.v2.AgentCapabilities.prototype.addExtensions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.alis.open.agent.v2.AgentExtension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentCapabilities} returns this
 */
proto.alis.open.agent.v2.AgentCapabilities.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};


/**
 * optional bool state_transition_history = 4;
 * @return {boolean}
 */
proto.alis.open.agent.v2.AgentCapabilities.prototype.getStateTransitionHistory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v2.AgentCapabilities} returns this
 */
proto.alis.open.agent.v2.AgentCapabilities.prototype.setStateTransitionHistory = function(value) {
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
proto.alis.open.agent.v2.AgentExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.AgentExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.AgentExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentExtension.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.AgentExtension}
 */
proto.alis.open.agent.v2.AgentExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.AgentExtension;
  return proto.alis.open.agent.v2.AgentExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.AgentExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.AgentExtension}
 */
proto.alis.open.agent.v2.AgentExtension.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.AgentExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.AgentExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.AgentExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentExtension.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.AgentExtension.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentExtension} returns this
 */
proto.alis.open.agent.v2.AgentExtension.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentExtension.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentExtension} returns this
 */
proto.alis.open.agent.v2.AgentExtension.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool required = 3;
 * @return {boolean}
 */
proto.alis.open.agent.v2.AgentExtension.prototype.getRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v2.AgentExtension} returns this
 */
proto.alis.open.agent.v2.AgentExtension.prototype.setRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.Struct params = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v2.AgentExtension.prototype.getParams = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v2.AgentExtension} returns this
*/
proto.alis.open.agent.v2.AgentExtension.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.AgentExtension} returns this
 */
proto.alis.open.agent.v2.AgentExtension.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.AgentExtension.prototype.hasParams = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v2.AgentSkill.repeatedFields_ = [4,5,6,7,8];



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
proto.alis.open.agent.v2.AgentSkill.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.AgentSkill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.AgentSkill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentSkill.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
examplesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
inputModesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
outputModesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
securityList: jspb.Message.toObjectList(msg.getSecurityList(),
    proto.alis.open.agent.v2.Security.toObject, includeInstance)
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
 * @return {!proto.alis.open.agent.v2.AgentSkill}
 */
proto.alis.open.agent.v2.AgentSkill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.AgentSkill;
  return proto.alis.open.agent.v2.AgentSkill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.AgentSkill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.AgentSkill}
 */
proto.alis.open.agent.v2.AgentSkill.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.Security;
      reader.readMessage(value,proto.alis.open.agent.v2.Security.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.AgentSkill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.AgentSkill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.AgentSkill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentSkill.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.Security.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentSkill.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentSkill.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentSkill.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v2.AgentSkill.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * repeated string examples = 5;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v2.AgentSkill.prototype.getExamplesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.setExamplesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.addExamples = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.clearExamplesList = function() {
  return this.setExamplesList([]);
};


/**
 * repeated string input_modes = 6;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v2.AgentSkill.prototype.getInputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.setInputModesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.addInputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.clearInputModesList = function() {
  return this.setInputModesList([]);
};


/**
 * repeated string output_modes = 7;
 * @return {!Array<string>}
 */
proto.alis.open.agent.v2.AgentSkill.prototype.getOutputModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.setOutputModesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.addOutputModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.clearOutputModesList = function() {
  return this.setOutputModesList([]);
};


/**
 * repeated Security security = 8;
 * @return {!Array<!proto.alis.open.agent.v2.Security>}
 */
proto.alis.open.agent.v2.AgentSkill.prototype.getSecurityList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.Security>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.Security, 8));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.Security>} value
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
*/
proto.alis.open.agent.v2.AgentSkill.prototype.setSecurityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.alis.open.agent.v2.Security=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.Security}
 */
proto.alis.open.agent.v2.AgentSkill.prototype.addSecurity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.alis.open.agent.v2.Security, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.AgentSkill} returns this
 */
proto.alis.open.agent.v2.AgentSkill.prototype.clearSecurityList = function() {
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
proto.alis.open.agent.v2.AgentCardSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.AgentCardSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.AgentCardSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentCardSignature.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.AgentCardSignature}
 */
proto.alis.open.agent.v2.AgentCardSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.AgentCardSignature;
  return proto.alis.open.agent.v2.AgentCardSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.AgentCardSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.AgentCardSignature}
 */
proto.alis.open.agent.v2.AgentCardSignature.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.AgentCardSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.AgentCardSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.AgentCardSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AgentCardSignature.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.AgentCardSignature.prototype.getProtected = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentCardSignature} returns this
 */
proto.alis.open.agent.v2.AgentCardSignature.prototype.setProtected = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string signature = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.AgentCardSignature.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AgentCardSignature} returns this
 */
proto.alis.open.agent.v2.AgentCardSignature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct header = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v2.AgentCardSignature.prototype.getHeader = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v2.AgentCardSignature} returns this
*/
proto.alis.open.agent.v2.AgentCardSignature.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.AgentCardSignature} returns this
 */
proto.alis.open.agent.v2.AgentCardSignature.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.AgentCardSignature.prototype.hasHeader = function() {
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
proto.alis.open.agent.v2.TaskPushNotificationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.TaskPushNotificationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.TaskPushNotificationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.TaskPushNotificationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
pushNotificationConfig: (f = msg.getPushNotificationConfig()) && proto.alis.open.agent.v2.PushNotificationConfig.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v2.TaskPushNotificationConfig}
 */
proto.alis.open.agent.v2.TaskPushNotificationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.TaskPushNotificationConfig;
  return proto.alis.open.agent.v2.TaskPushNotificationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.TaskPushNotificationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.TaskPushNotificationConfig}
 */
proto.alis.open.agent.v2.TaskPushNotificationConfig.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.PushNotificationConfig;
      reader.readMessage(value,proto.alis.open.agent.v2.PushNotificationConfig.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.TaskPushNotificationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.TaskPushNotificationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.TaskPushNotificationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.TaskPushNotificationConfig.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.PushNotificationConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.alis.open.agent.v2.TaskPushNotificationConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.TaskPushNotificationConfig} returns this
 */
proto.alis.open.agent.v2.TaskPushNotificationConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PushNotificationConfig push_notification_config = 2;
 * @return {?proto.alis.open.agent.v2.PushNotificationConfig}
 */
proto.alis.open.agent.v2.TaskPushNotificationConfig.prototype.getPushNotificationConfig = function() {
  return /** @type{?proto.alis.open.agent.v2.PushNotificationConfig} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.PushNotificationConfig, 2));
};


/**
 * @param {?proto.alis.open.agent.v2.PushNotificationConfig|undefined} value
 * @return {!proto.alis.open.agent.v2.TaskPushNotificationConfig} returns this
*/
proto.alis.open.agent.v2.TaskPushNotificationConfig.prototype.setPushNotificationConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.TaskPushNotificationConfig} returns this
 */
proto.alis.open.agent.v2.TaskPushNotificationConfig.prototype.clearPushNotificationConfig = function() {
  return this.setPushNotificationConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.TaskPushNotificationConfig.prototype.hasPushNotificationConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v2.StringList.repeatedFields_ = [1];



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
proto.alis.open.agent.v2.StringList.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.StringList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.StringList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.StringList.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.StringList}
 */
proto.alis.open.agent.v2.StringList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.StringList;
  return proto.alis.open.agent.v2.StringList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.StringList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.StringList}
 */
proto.alis.open.agent.v2.StringList.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.StringList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.StringList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.StringList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.StringList.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.StringList.prototype.getListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.alis.open.agent.v2.StringList} returns this
 */
proto.alis.open.agent.v2.StringList.prototype.setListList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.StringList} returns this
 */
proto.alis.open.agent.v2.StringList.prototype.addList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.StringList} returns this
 */
proto.alis.open.agent.v2.StringList.prototype.clearListList = function() {
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
proto.alis.open.agent.v2.Security.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.Security.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.Security} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.Security.toObject = function(includeInstance, msg) {
  var f, obj = {
schemesMap: (f = msg.getSchemesMap()) ? f.toObject(includeInstance, proto.alis.open.agent.v2.StringList.toObject) : []
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
 * @return {!proto.alis.open.agent.v2.Security}
 */
proto.alis.open.agent.v2.Security.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.Security;
  return proto.alis.open.agent.v2.Security.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.Security} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.Security}
 */
proto.alis.open.agent.v2.Security.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSchemesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readMessage, proto.alis.open.agent.v2.StringList.deserializeBinaryFromReader, "", new proto.alis.open.agent.v2.StringList());
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
proto.alis.open.agent.v2.Security.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.Security.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.Security} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.Security.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemesMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getSchemesMap(true),
    1,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.alis.open.agent.v2.StringList.serializeBinaryToWriter);
  }
};


/**
 * map<string, StringList> schemes = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.alis.open.agent.v2.StringList>}
 */
proto.alis.open.agent.v2.Security.prototype.getSchemesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.alis.open.agent.v2.StringList>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.alis.open.agent.v2.StringList));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v2.Security} returns this
 */
proto.alis.open.agent.v2.Security.prototype.clearSchemesMap = function() {
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
proto.alis.open.agent.v2.SecurityScheme.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v2.SecurityScheme.SchemeCase = {
  SCHEME_NOT_SET: 0,
  API_KEY_SECURITY_SCHEME: 1,
  HTTP_AUTH_SECURITY_SCHEME: 2,
  OAUTH2_SECURITY_SCHEME: 3,
  OPEN_ID_CONNECT_SECURITY_SCHEME: 4,
  MTLS_SECURITY_SCHEME: 5
};

/**
 * @return {proto.alis.open.agent.v2.SecurityScheme.SchemeCase}
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.getSchemeCase = function() {
  return /** @type {proto.alis.open.agent.v2.SecurityScheme.SchemeCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v2.SecurityScheme.oneofGroups_[0]));
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
proto.alis.open.agent.v2.SecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.SecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.SecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.SecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
apiKeySecurityScheme: (f = msg.getApiKeySecurityScheme()) && proto.alis.open.agent.v2.APIKeySecurityScheme.toObject(includeInstance, f),
httpAuthSecurityScheme: (f = msg.getHttpAuthSecurityScheme()) && proto.alis.open.agent.v2.HTTPAuthSecurityScheme.toObject(includeInstance, f),
oauth2SecurityScheme: (f = msg.getOauth2SecurityScheme()) && proto.alis.open.agent.v2.OAuth2SecurityScheme.toObject(includeInstance, f),
openIdConnectSecurityScheme: (f = msg.getOpenIdConnectSecurityScheme()) && proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.toObject(includeInstance, f),
mtlsSecurityScheme: (f = msg.getMtlsSecurityScheme()) && proto.alis.open.agent.v2.MutualTlsSecurityScheme.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v2.SecurityScheme}
 */
proto.alis.open.agent.v2.SecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.SecurityScheme;
  return proto.alis.open.agent.v2.SecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.SecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.SecurityScheme}
 */
proto.alis.open.agent.v2.SecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v2.APIKeySecurityScheme;
      reader.readMessage(value,proto.alis.open.agent.v2.APIKeySecurityScheme.deserializeBinaryFromReader);
      msg.setApiKeySecurityScheme(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v2.HTTPAuthSecurityScheme;
      reader.readMessage(value,proto.alis.open.agent.v2.HTTPAuthSecurityScheme.deserializeBinaryFromReader);
      msg.setHttpAuthSecurityScheme(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v2.OAuth2SecurityScheme;
      reader.readMessage(value,proto.alis.open.agent.v2.OAuth2SecurityScheme.deserializeBinaryFromReader);
      msg.setOauth2SecurityScheme(value);
      break;
    case 4:
      var value = new proto.alis.open.agent.v2.OpenIdConnectSecurityScheme;
      reader.readMessage(value,proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.deserializeBinaryFromReader);
      msg.setOpenIdConnectSecurityScheme(value);
      break;
    case 5:
      var value = new proto.alis.open.agent.v2.MutualTlsSecurityScheme;
      reader.readMessage(value,proto.alis.open.agent.v2.MutualTlsSecurityScheme.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.SecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.SecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.SecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.SecurityScheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKeySecurityScheme();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.open.agent.v2.APIKeySecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getHttpAuthSecurityScheme();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v2.HTTPAuthSecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getOauth2SecurityScheme();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.open.agent.v2.OAuth2SecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getOpenIdConnectSecurityScheme();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.serializeBinaryToWriter
    );
  }
  f = message.getMtlsSecurityScheme();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.alis.open.agent.v2.MutualTlsSecurityScheme.serializeBinaryToWriter
    );
  }
};


/**
 * optional APIKeySecurityScheme api_key_security_scheme = 1;
 * @return {?proto.alis.open.agent.v2.APIKeySecurityScheme}
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.getApiKeySecurityScheme = function() {
  return /** @type{?proto.alis.open.agent.v2.APIKeySecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.APIKeySecurityScheme, 1));
};


/**
 * @param {?proto.alis.open.agent.v2.APIKeySecurityScheme|undefined} value
 * @return {!proto.alis.open.agent.v2.SecurityScheme} returns this
*/
proto.alis.open.agent.v2.SecurityScheme.prototype.setApiKeySecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.alis.open.agent.v2.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.SecurityScheme} returns this
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.clearApiKeySecurityScheme = function() {
  return this.setApiKeySecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.hasApiKeySecurityScheme = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HTTPAuthSecurityScheme http_auth_security_scheme = 2;
 * @return {?proto.alis.open.agent.v2.HTTPAuthSecurityScheme}
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.getHttpAuthSecurityScheme = function() {
  return /** @type{?proto.alis.open.agent.v2.HTTPAuthSecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.HTTPAuthSecurityScheme, 2));
};


/**
 * @param {?proto.alis.open.agent.v2.HTTPAuthSecurityScheme|undefined} value
 * @return {!proto.alis.open.agent.v2.SecurityScheme} returns this
*/
proto.alis.open.agent.v2.SecurityScheme.prototype.setHttpAuthSecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.open.agent.v2.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.SecurityScheme} returns this
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.clearHttpAuthSecurityScheme = function() {
  return this.setHttpAuthSecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.hasHttpAuthSecurityScheme = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OAuth2SecurityScheme oauth2_security_scheme = 3;
 * @return {?proto.alis.open.agent.v2.OAuth2SecurityScheme}
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.getOauth2SecurityScheme = function() {
  return /** @type{?proto.alis.open.agent.v2.OAuth2SecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.OAuth2SecurityScheme, 3));
};


/**
 * @param {?proto.alis.open.agent.v2.OAuth2SecurityScheme|undefined} value
 * @return {!proto.alis.open.agent.v2.SecurityScheme} returns this
*/
proto.alis.open.agent.v2.SecurityScheme.prototype.setOauth2SecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.alis.open.agent.v2.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.SecurityScheme} returns this
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.clearOauth2SecurityScheme = function() {
  return this.setOauth2SecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.hasOauth2SecurityScheme = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OpenIdConnectSecurityScheme open_id_connect_security_scheme = 4;
 * @return {?proto.alis.open.agent.v2.OpenIdConnectSecurityScheme}
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.getOpenIdConnectSecurityScheme = function() {
  return /** @type{?proto.alis.open.agent.v2.OpenIdConnectSecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.OpenIdConnectSecurityScheme, 4));
};


/**
 * @param {?proto.alis.open.agent.v2.OpenIdConnectSecurityScheme|undefined} value
 * @return {!proto.alis.open.agent.v2.SecurityScheme} returns this
*/
proto.alis.open.agent.v2.SecurityScheme.prototype.setOpenIdConnectSecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.alis.open.agent.v2.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.SecurityScheme} returns this
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.clearOpenIdConnectSecurityScheme = function() {
  return this.setOpenIdConnectSecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.hasOpenIdConnectSecurityScheme = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MutualTlsSecurityScheme mtls_security_scheme = 5;
 * @return {?proto.alis.open.agent.v2.MutualTlsSecurityScheme}
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.getMtlsSecurityScheme = function() {
  return /** @type{?proto.alis.open.agent.v2.MutualTlsSecurityScheme} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.MutualTlsSecurityScheme, 5));
};


/**
 * @param {?proto.alis.open.agent.v2.MutualTlsSecurityScheme|undefined} value
 * @return {!proto.alis.open.agent.v2.SecurityScheme} returns this
*/
proto.alis.open.agent.v2.SecurityScheme.prototype.setMtlsSecurityScheme = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.alis.open.agent.v2.SecurityScheme.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.SecurityScheme} returns this
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.clearMtlsSecurityScheme = function() {
  return this.setMtlsSecurityScheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.SecurityScheme.prototype.hasMtlsSecurityScheme = function() {
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
proto.alis.open.agent.v2.APIKeySecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.APIKeySecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.APIKeySecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.APIKeySecurityScheme.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.APIKeySecurityScheme}
 */
proto.alis.open.agent.v2.APIKeySecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.APIKeySecurityScheme;
  return proto.alis.open.agent.v2.APIKeySecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.APIKeySecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.APIKeySecurityScheme}
 */
proto.alis.open.agent.v2.APIKeySecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.APIKeySecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.APIKeySecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.APIKeySecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.APIKeySecurityScheme.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.APIKeySecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.APIKeySecurityScheme} returns this
 */
proto.alis.open.agent.v2.APIKeySecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.APIKeySecurityScheme.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.APIKeySecurityScheme} returns this
 */
proto.alis.open.agent.v2.APIKeySecurityScheme.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.alis.open.agent.v2.APIKeySecurityScheme.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.APIKeySecurityScheme} returns this
 */
proto.alis.open.agent.v2.APIKeySecurityScheme.prototype.setName = function(value) {
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
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.HTTPAuthSecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.HTTPAuthSecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.HTTPAuthSecurityScheme}
 */
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.HTTPAuthSecurityScheme;
  return proto.alis.open.agent.v2.HTTPAuthSecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.HTTPAuthSecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.HTTPAuthSecurityScheme}
 */
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.HTTPAuthSecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.HTTPAuthSecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.HTTPAuthSecurityScheme} returns this
 */
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scheme = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.prototype.getScheme = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.HTTPAuthSecurityScheme} returns this
 */
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.prototype.setScheme = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bearer_format = 3;
 * @return {string}
 */
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.prototype.getBearerFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.HTTPAuthSecurityScheme} returns this
 */
proto.alis.open.agent.v2.HTTPAuthSecurityScheme.prototype.setBearerFormat = function(value) {
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
proto.alis.open.agent.v2.OAuth2SecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.OAuth2SecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.OAuth2SecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.OAuth2SecurityScheme.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, ""),
flows: (f = msg.getFlows()) && proto.alis.open.agent.v2.OAuthFlows.toObject(includeInstance, f),
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
 * @return {!proto.alis.open.agent.v2.OAuth2SecurityScheme}
 */
proto.alis.open.agent.v2.OAuth2SecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.OAuth2SecurityScheme;
  return proto.alis.open.agent.v2.OAuth2SecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.OAuth2SecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.OAuth2SecurityScheme}
 */
proto.alis.open.agent.v2.OAuth2SecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.OAuthFlows;
      reader.readMessage(value,proto.alis.open.agent.v2.OAuthFlows.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.OAuth2SecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.OAuth2SecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.OAuth2SecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.OAuth2SecurityScheme.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.OAuthFlows.serializeBinaryToWriter
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
proto.alis.open.agent.v2.OAuth2SecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.OAuth2SecurityScheme} returns this
 */
proto.alis.open.agent.v2.OAuth2SecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OAuthFlows flows = 2;
 * @return {?proto.alis.open.agent.v2.OAuthFlows}
 */
proto.alis.open.agent.v2.OAuth2SecurityScheme.prototype.getFlows = function() {
  return /** @type{?proto.alis.open.agent.v2.OAuthFlows} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.OAuthFlows, 2));
};


/**
 * @param {?proto.alis.open.agent.v2.OAuthFlows|undefined} value
 * @return {!proto.alis.open.agent.v2.OAuth2SecurityScheme} returns this
*/
proto.alis.open.agent.v2.OAuth2SecurityScheme.prototype.setFlows = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.OAuth2SecurityScheme} returns this
 */
proto.alis.open.agent.v2.OAuth2SecurityScheme.prototype.clearFlows = function() {
  return this.setFlows(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.OAuth2SecurityScheme.prototype.hasFlows = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string oauth2_metadata_url = 3;
 * @return {string}
 */
proto.alis.open.agent.v2.OAuth2SecurityScheme.prototype.getOauth2MetadataUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.OAuth2SecurityScheme} returns this
 */
proto.alis.open.agent.v2.OAuth2SecurityScheme.prototype.setOauth2MetadataUrl = function(value) {
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
proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.OpenIdConnectSecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.OpenIdConnectSecurityScheme}
 */
proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.OpenIdConnectSecurityScheme;
  return proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.OpenIdConnectSecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.OpenIdConnectSecurityScheme}
 */
proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.OpenIdConnectSecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.OpenIdConnectSecurityScheme} returns this
 */
proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string open_id_connect_url = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.prototype.getOpenIdConnectUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.OpenIdConnectSecurityScheme} returns this
 */
proto.alis.open.agent.v2.OpenIdConnectSecurityScheme.prototype.setOpenIdConnectUrl = function(value) {
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
proto.alis.open.agent.v2.MutualTlsSecurityScheme.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.MutualTlsSecurityScheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.MutualTlsSecurityScheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.MutualTlsSecurityScheme.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.MutualTlsSecurityScheme}
 */
proto.alis.open.agent.v2.MutualTlsSecurityScheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.MutualTlsSecurityScheme;
  return proto.alis.open.agent.v2.MutualTlsSecurityScheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.MutualTlsSecurityScheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.MutualTlsSecurityScheme}
 */
proto.alis.open.agent.v2.MutualTlsSecurityScheme.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.MutualTlsSecurityScheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.MutualTlsSecurityScheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.MutualTlsSecurityScheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.MutualTlsSecurityScheme.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.MutualTlsSecurityScheme.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.MutualTlsSecurityScheme} returns this
 */
proto.alis.open.agent.v2.MutualTlsSecurityScheme.prototype.setDescription = function(value) {
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
proto.alis.open.agent.v2.OAuthFlows.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v2.OAuthFlows.FlowCase = {
  FLOW_NOT_SET: 0,
  AUTHORIZATION_CODE: 1,
  CLIENT_CREDENTIALS: 2,
  IMPLICIT: 3,
  PASSWORD: 4
};

/**
 * @return {proto.alis.open.agent.v2.OAuthFlows.FlowCase}
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.getFlowCase = function() {
  return /** @type {proto.alis.open.agent.v2.OAuthFlows.FlowCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v2.OAuthFlows.oneofGroups_[0]));
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
proto.alis.open.agent.v2.OAuthFlows.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.OAuthFlows.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.OAuthFlows} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.OAuthFlows.toObject = function(includeInstance, msg) {
  var f, obj = {
authorizationCode: (f = msg.getAuthorizationCode()) && proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.toObject(includeInstance, f),
clientCredentials: (f = msg.getClientCredentials()) && proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.toObject(includeInstance, f),
implicit: (f = msg.getImplicit()) && proto.alis.open.agent.v2.ImplicitOAuthFlow.toObject(includeInstance, f),
password: (f = msg.getPassword()) && proto.alis.open.agent.v2.PasswordOAuthFlow.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v2.OAuthFlows}
 */
proto.alis.open.agent.v2.OAuthFlows.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.OAuthFlows;
  return proto.alis.open.agent.v2.OAuthFlows.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.OAuthFlows} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.OAuthFlows}
 */
proto.alis.open.agent.v2.OAuthFlows.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow;
      reader.readMessage(value,proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.deserializeBinaryFromReader);
      msg.setAuthorizationCode(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v2.ClientCredentialsOAuthFlow;
      reader.readMessage(value,proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.deserializeBinaryFromReader);
      msg.setClientCredentials(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v2.ImplicitOAuthFlow;
      reader.readMessage(value,proto.alis.open.agent.v2.ImplicitOAuthFlow.deserializeBinaryFromReader);
      msg.setImplicit(value);
      break;
    case 4:
      var value = new proto.alis.open.agent.v2.PasswordOAuthFlow;
      reader.readMessage(value,proto.alis.open.agent.v2.PasswordOAuthFlow.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.OAuthFlows.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.OAuthFlows.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.OAuthFlows} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.OAuthFlows.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizationCode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.serializeBinaryToWriter
    );
  }
  f = message.getClientCredentials();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.serializeBinaryToWriter
    );
  }
  f = message.getImplicit();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.open.agent.v2.ImplicitOAuthFlow.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.open.agent.v2.PasswordOAuthFlow.serializeBinaryToWriter
    );
  }
};


/**
 * optional AuthorizationCodeOAuthFlow authorization_code = 1;
 * @return {?proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow}
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.getAuthorizationCode = function() {
  return /** @type{?proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow, 1));
};


/**
 * @param {?proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow|undefined} value
 * @return {!proto.alis.open.agent.v2.OAuthFlows} returns this
*/
proto.alis.open.agent.v2.OAuthFlows.prototype.setAuthorizationCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.alis.open.agent.v2.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.OAuthFlows} returns this
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.clearAuthorizationCode = function() {
  return this.setAuthorizationCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.hasAuthorizationCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ClientCredentialsOAuthFlow client_credentials = 2;
 * @return {?proto.alis.open.agent.v2.ClientCredentialsOAuthFlow}
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.getClientCredentials = function() {
  return /** @type{?proto.alis.open.agent.v2.ClientCredentialsOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.ClientCredentialsOAuthFlow, 2));
};


/**
 * @param {?proto.alis.open.agent.v2.ClientCredentialsOAuthFlow|undefined} value
 * @return {!proto.alis.open.agent.v2.OAuthFlows} returns this
*/
proto.alis.open.agent.v2.OAuthFlows.prototype.setClientCredentials = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.open.agent.v2.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.OAuthFlows} returns this
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.clearClientCredentials = function() {
  return this.setClientCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.hasClientCredentials = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImplicitOAuthFlow implicit = 3;
 * @return {?proto.alis.open.agent.v2.ImplicitOAuthFlow}
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.getImplicit = function() {
  return /** @type{?proto.alis.open.agent.v2.ImplicitOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.ImplicitOAuthFlow, 3));
};


/**
 * @param {?proto.alis.open.agent.v2.ImplicitOAuthFlow|undefined} value
 * @return {!proto.alis.open.agent.v2.OAuthFlows} returns this
*/
proto.alis.open.agent.v2.OAuthFlows.prototype.setImplicit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.alis.open.agent.v2.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.OAuthFlows} returns this
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.clearImplicit = function() {
  return this.setImplicit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.hasImplicit = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PasswordOAuthFlow password = 4;
 * @return {?proto.alis.open.agent.v2.PasswordOAuthFlow}
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.getPassword = function() {
  return /** @type{?proto.alis.open.agent.v2.PasswordOAuthFlow} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.PasswordOAuthFlow, 4));
};


/**
 * @param {?proto.alis.open.agent.v2.PasswordOAuthFlow|undefined} value
 * @return {!proto.alis.open.agent.v2.OAuthFlows} returns this
*/
proto.alis.open.agent.v2.OAuthFlows.prototype.setPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.alis.open.agent.v2.OAuthFlows.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.OAuthFlows} returns this
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.OAuthFlows.prototype.hasPassword = function() {
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
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow}
 */
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow;
  return proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow}
 */
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.prototype.getAuthorizationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow} returns this
 */
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.prototype.setAuthorizationUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token_url = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.prototype.getTokenUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow} returns this
 */
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.prototype.setTokenUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string refresh_url = 3;
 * @return {string}
 */
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow} returns this
 */
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> scopes = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow} returns this
 */
proto.alis.open.agent.v2.AuthorizationCodeOAuthFlow.prototype.clearScopesMap = function() {
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
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.ClientCredentialsOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.ClientCredentialsOAuthFlow}
 */
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.ClientCredentialsOAuthFlow;
  return proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.ClientCredentialsOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.ClientCredentialsOAuthFlow}
 */
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.ClientCredentialsOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.prototype.getTokenUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.ClientCredentialsOAuthFlow} returns this
 */
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.prototype.setTokenUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_url = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.ClientCredentialsOAuthFlow} returns this
 */
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> scopes = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v2.ClientCredentialsOAuthFlow} returns this
 */
proto.alis.open.agent.v2.ClientCredentialsOAuthFlow.prototype.clearScopesMap = function() {
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
proto.alis.open.agent.v2.ImplicitOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.ImplicitOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.ImplicitOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ImplicitOAuthFlow.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.ImplicitOAuthFlow}
 */
proto.alis.open.agent.v2.ImplicitOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.ImplicitOAuthFlow;
  return proto.alis.open.agent.v2.ImplicitOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.ImplicitOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.ImplicitOAuthFlow}
 */
proto.alis.open.agent.v2.ImplicitOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.ImplicitOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.ImplicitOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.ImplicitOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ImplicitOAuthFlow.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.ImplicitOAuthFlow.prototype.getAuthorizationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.ImplicitOAuthFlow} returns this
 */
proto.alis.open.agent.v2.ImplicitOAuthFlow.prototype.setAuthorizationUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_url = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.ImplicitOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.ImplicitOAuthFlow} returns this
 */
proto.alis.open.agent.v2.ImplicitOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> scopes = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.alis.open.agent.v2.ImplicitOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v2.ImplicitOAuthFlow} returns this
 */
proto.alis.open.agent.v2.ImplicitOAuthFlow.prototype.clearScopesMap = function() {
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
proto.alis.open.agent.v2.PasswordOAuthFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.PasswordOAuthFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.PasswordOAuthFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.PasswordOAuthFlow.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.PasswordOAuthFlow}
 */
proto.alis.open.agent.v2.PasswordOAuthFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.PasswordOAuthFlow;
  return proto.alis.open.agent.v2.PasswordOAuthFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.PasswordOAuthFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.PasswordOAuthFlow}
 */
proto.alis.open.agent.v2.PasswordOAuthFlow.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.PasswordOAuthFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.PasswordOAuthFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.PasswordOAuthFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.PasswordOAuthFlow.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.PasswordOAuthFlow.prototype.getTokenUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.PasswordOAuthFlow} returns this
 */
proto.alis.open.agent.v2.PasswordOAuthFlow.prototype.setTokenUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_url = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.PasswordOAuthFlow.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.PasswordOAuthFlow} returns this
 */
proto.alis.open.agent.v2.PasswordOAuthFlow.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> scopes = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.alis.open.agent.v2.PasswordOAuthFlow.prototype.getScopesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.alis.open.agent.v2.PasswordOAuthFlow} returns this
 */
proto.alis.open.agent.v2.PasswordOAuthFlow.prototype.clearScopesMap = function() {
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
proto.alis.open.agent.v2.SendMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.SendMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.SendMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.SendMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
request: (f = msg.getRequest()) && proto.alis.open.agent.v2.Message.toObject(includeInstance, f),
configuration: (f = msg.getConfiguration()) && proto.alis.open.agent.v2.SendMessageConfiguration.toObject(includeInstance, f),
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
 * @return {!proto.alis.open.agent.v2.SendMessageRequest}
 */
proto.alis.open.agent.v2.SendMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.SendMessageRequest;
  return proto.alis.open.agent.v2.SendMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.SendMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.SendMessageRequest}
 */
proto.alis.open.agent.v2.SendMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v2.Message;
      reader.readMessage(value,proto.alis.open.agent.v2.Message.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v2.SendMessageConfiguration;
      reader.readMessage(value,proto.alis.open.agent.v2.SendMessageConfiguration.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.SendMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.SendMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.SendMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.SendMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.open.agent.v2.Message.serializeBinaryToWriter
    );
  }
  f = message.getConfiguration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v2.SendMessageConfiguration.serializeBinaryToWriter
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
 * @return {?proto.alis.open.agent.v2.Message}
 */
proto.alis.open.agent.v2.SendMessageRequest.prototype.getRequest = function() {
  return /** @type{?proto.alis.open.agent.v2.Message} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.Message, 1));
};


/**
 * @param {?proto.alis.open.agent.v2.Message|undefined} value
 * @return {!proto.alis.open.agent.v2.SendMessageRequest} returns this
*/
proto.alis.open.agent.v2.SendMessageRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.SendMessageRequest} returns this
 */
proto.alis.open.agent.v2.SendMessageRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.SendMessageRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SendMessageConfiguration configuration = 2;
 * @return {?proto.alis.open.agent.v2.SendMessageConfiguration}
 */
proto.alis.open.agent.v2.SendMessageRequest.prototype.getConfiguration = function() {
  return /** @type{?proto.alis.open.agent.v2.SendMessageConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.SendMessageConfiguration, 2));
};


/**
 * @param {?proto.alis.open.agent.v2.SendMessageConfiguration|undefined} value
 * @return {!proto.alis.open.agent.v2.SendMessageRequest} returns this
*/
proto.alis.open.agent.v2.SendMessageRequest.prototype.setConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.SendMessageRequest} returns this
 */
proto.alis.open.agent.v2.SendMessageRequest.prototype.clearConfiguration = function() {
  return this.setConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.SendMessageRequest.prototype.hasConfiguration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Struct metadata = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.alis.open.agent.v2.SendMessageRequest.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.alis.open.agent.v2.SendMessageRequest} returns this
*/
proto.alis.open.agent.v2.SendMessageRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.SendMessageRequest} returns this
 */
proto.alis.open.agent.v2.SendMessageRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.SendMessageRequest.prototype.hasMetadata = function() {
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
proto.alis.open.agent.v2.GetTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.GetTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.GetTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.GetTaskRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.GetTaskRequest}
 */
proto.alis.open.agent.v2.GetTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.GetTaskRequest;
  return proto.alis.open.agent.v2.GetTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.GetTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.GetTaskRequest}
 */
proto.alis.open.agent.v2.GetTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.GetTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.GetTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.GetTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.GetTaskRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.GetTaskRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.GetTaskRequest} returns this
 */
proto.alis.open.agent.v2.GetTaskRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 history_length = 2;
 * @return {number}
 */
proto.alis.open.agent.v2.GetTaskRequest.prototype.getHistoryLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v2.GetTaskRequest} returns this
 */
proto.alis.open.agent.v2.GetTaskRequest.prototype.setHistoryLength = function(value) {
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
proto.alis.open.agent.v2.ListTasksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.ListTasksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.ListTasksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ListTasksRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.ListTasksRequest}
 */
proto.alis.open.agent.v2.ListTasksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.ListTasksRequest;
  return proto.alis.open.agent.v2.ListTasksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.ListTasksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.ListTasksRequest}
 */
proto.alis.open.agent.v2.ListTasksRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.alis.open.agent.v2.TaskState} */ (reader.readEnum());
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
proto.alis.open.agent.v2.ListTasksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.ListTasksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.ListTasksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ListTasksRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.ListTasksRequest.prototype.getContextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.ListTasksRequest} returns this
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.setContextId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TaskState status = 2;
 * @return {!proto.alis.open.agent.v2.TaskState}
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.getStatus = function() {
  return /** @type {!proto.alis.open.agent.v2.TaskState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.alis.open.agent.v2.TaskState} value
 * @return {!proto.alis.open.agent.v2.ListTasksRequest} returns this
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v2.ListTasksRequest} returns this
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.ListTasksRequest} returns this
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 history_length = 5;
 * @return {number}
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.getHistoryLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v2.ListTasksRequest} returns this
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.setHistoryLength = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp last_updated_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.getLastUpdatedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.alis.open.agent.v2.ListTasksRequest} returns this
*/
proto.alis.open.agent.v2.ListTasksRequest.prototype.setLastUpdatedTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.ListTasksRequest} returns this
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.clearLastUpdatedTime = function() {
  return this.setLastUpdatedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.hasLastUpdatedTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool include_artifacts = 7;
 * @return {boolean}
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.getIncludeArtifacts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.alis.open.agent.v2.ListTasksRequest} returns this
 */
proto.alis.open.agent.v2.ListTasksRequest.prototype.setIncludeArtifacts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v2.ListTasksResponse.repeatedFields_ = [1];



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
proto.alis.open.agent.v2.ListTasksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.ListTasksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.ListTasksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ListTasksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    proto.alis.open.agent.v2.Task.toObject, includeInstance),
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
 * @return {!proto.alis.open.agent.v2.ListTasksResponse}
 */
proto.alis.open.agent.v2.ListTasksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.ListTasksResponse;
  return proto.alis.open.agent.v2.ListTasksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.ListTasksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.ListTasksResponse}
 */
proto.alis.open.agent.v2.ListTasksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v2.Task;
      reader.readMessage(value,proto.alis.open.agent.v2.Task.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.ListTasksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.ListTasksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.ListTasksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ListTasksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.alis.open.agent.v2.Task.serializeBinaryToWriter
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
 * @return {!Array<!proto.alis.open.agent.v2.Task>}
 */
proto.alis.open.agent.v2.ListTasksResponse.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.Task>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.Task, 1));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.Task>} value
 * @return {!proto.alis.open.agent.v2.ListTasksResponse} returns this
*/
proto.alis.open.agent.v2.ListTasksResponse.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.alis.open.agent.v2.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.Task}
 */
proto.alis.open.agent.v2.ListTasksResponse.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.alis.open.agent.v2.Task, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.ListTasksResponse} returns this
 */
proto.alis.open.agent.v2.ListTasksResponse.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.ListTasksResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.ListTasksResponse} returns this
 */
proto.alis.open.agent.v2.ListTasksResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 total_size = 3;
 * @return {number}
 */
proto.alis.open.agent.v2.ListTasksResponse.prototype.getTotalSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v2.ListTasksResponse} returns this
 */
proto.alis.open.agent.v2.ListTasksResponse.prototype.setTotalSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.alis.open.agent.v2.CancelTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.CancelTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.CancelTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.CancelTaskRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.CancelTaskRequest}
 */
proto.alis.open.agent.v2.CancelTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.CancelTaskRequest;
  return proto.alis.open.agent.v2.CancelTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.CancelTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.CancelTaskRequest}
 */
proto.alis.open.agent.v2.CancelTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.CancelTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.CancelTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.CancelTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.CancelTaskRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.CancelTaskRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.CancelTaskRequest} returns this
 */
proto.alis.open.agent.v2.CancelTaskRequest.prototype.setName = function(value) {
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
proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest;
  return proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v2.GetTaskPushNotificationConfigRequest.prototype.setName = function(value) {
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
proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest;
  return proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v2.DeleteTaskPushNotificationConfigRequest.prototype.setName = function(value) {
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
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
configId: jspb.Message.getFieldWithDefault(msg, 2, ""),
config: (f = msg.getConfig()) && proto.alis.open.agent.v2.TaskPushNotificationConfig.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest;
  return proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.alis.open.agent.v2.TaskPushNotificationConfig;
      reader.readMessage(value,proto.alis.open.agent.v2.TaskPushNotificationConfig.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.alis.open.agent.v2.TaskPushNotificationConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string config_id = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.prototype.getConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.prototype.setConfigId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TaskPushNotificationConfig config = 3;
 * @return {?proto.alis.open.agent.v2.TaskPushNotificationConfig}
 */
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.prototype.getConfig = function() {
  return /** @type{?proto.alis.open.agent.v2.TaskPushNotificationConfig} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.TaskPushNotificationConfig, 3));
};


/**
 * @param {?proto.alis.open.agent.v2.TaskPushNotificationConfig|undefined} value
 * @return {!proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest} returns this
*/
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.CreateTaskPushNotificationConfigRequest.prototype.hasConfig = function() {
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
proto.alis.open.agent.v2.TaskSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.TaskSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.TaskSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.TaskSubscriptionRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.TaskSubscriptionRequest}
 */
proto.alis.open.agent.v2.TaskSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.TaskSubscriptionRequest;
  return proto.alis.open.agent.v2.TaskSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.TaskSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.TaskSubscriptionRequest}
 */
proto.alis.open.agent.v2.TaskSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.TaskSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.TaskSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.TaskSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.TaskSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.TaskSubscriptionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.TaskSubscriptionRequest} returns this
 */
proto.alis.open.agent.v2.TaskSubscriptionRequest.prototype.setName = function(value) {
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
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest;
  return proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest}
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest} returns this
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigRequest.prototype.setPageToken = function(value) {
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
proto.alis.open.agent.v2.GetAgentCardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.GetAgentCardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.GetAgentCardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.GetAgentCardRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.alis.open.agent.v2.GetAgentCardRequest}
 */
proto.alis.open.agent.v2.GetAgentCardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.GetAgentCardRequest;
  return proto.alis.open.agent.v2.GetAgentCardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.GetAgentCardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.GetAgentCardRequest}
 */
proto.alis.open.agent.v2.GetAgentCardRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.alis.open.agent.v2.GetAgentCardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.GetAgentCardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.GetAgentCardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.GetAgentCardRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.alis.open.agent.v2.SendMessageResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v2.SendMessageResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  TASK: 1,
  MSG: 2
};

/**
 * @return {proto.alis.open.agent.v2.SendMessageResponse.PayloadCase}
 */
proto.alis.open.agent.v2.SendMessageResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.alis.open.agent.v2.SendMessageResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v2.SendMessageResponse.oneofGroups_[0]));
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
proto.alis.open.agent.v2.SendMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.SendMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.SendMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.SendMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
task: (f = msg.getTask()) && proto.alis.open.agent.v2.Task.toObject(includeInstance, f),
msg: (f = msg.getMsg()) && proto.alis.open.agent.v2.Message.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v2.SendMessageResponse}
 */
proto.alis.open.agent.v2.SendMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.SendMessageResponse;
  return proto.alis.open.agent.v2.SendMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.SendMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.SendMessageResponse}
 */
proto.alis.open.agent.v2.SendMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v2.Task;
      reader.readMessage(value,proto.alis.open.agent.v2.Task.deserializeBinaryFromReader);
      msg.setTask(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v2.Message;
      reader.readMessage(value,proto.alis.open.agent.v2.Message.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.SendMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.SendMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.SendMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.SendMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.open.agent.v2.Task.serializeBinaryToWriter
    );
  }
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v2.Message.serializeBinaryToWriter
    );
  }
};


/**
 * optional Task task = 1;
 * @return {?proto.alis.open.agent.v2.Task}
 */
proto.alis.open.agent.v2.SendMessageResponse.prototype.getTask = function() {
  return /** @type{?proto.alis.open.agent.v2.Task} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.Task, 1));
};


/**
 * @param {?proto.alis.open.agent.v2.Task|undefined} value
 * @return {!proto.alis.open.agent.v2.SendMessageResponse} returns this
*/
proto.alis.open.agent.v2.SendMessageResponse.prototype.setTask = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.alis.open.agent.v2.SendMessageResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.SendMessageResponse} returns this
 */
proto.alis.open.agent.v2.SendMessageResponse.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.SendMessageResponse.prototype.hasTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message msg = 2;
 * @return {?proto.alis.open.agent.v2.Message}
 */
proto.alis.open.agent.v2.SendMessageResponse.prototype.getMsg = function() {
  return /** @type{?proto.alis.open.agent.v2.Message} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.Message, 2));
};


/**
 * @param {?proto.alis.open.agent.v2.Message|undefined} value
 * @return {!proto.alis.open.agent.v2.SendMessageResponse} returns this
*/
proto.alis.open.agent.v2.SendMessageResponse.prototype.setMsg = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.open.agent.v2.SendMessageResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.SendMessageResponse} returns this
 */
proto.alis.open.agent.v2.SendMessageResponse.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.SendMessageResponse.prototype.hasMsg = function() {
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
proto.alis.open.agent.v2.StreamResponse.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.alis.open.agent.v2.StreamResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  TASK: 1,
  MSG: 2,
  STATUS_UPDATE: 3,
  ARTIFACT_UPDATE: 4
};

/**
 * @return {proto.alis.open.agent.v2.StreamResponse.PayloadCase}
 */
proto.alis.open.agent.v2.StreamResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.alis.open.agent.v2.StreamResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.alis.open.agent.v2.StreamResponse.oneofGroups_[0]));
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
proto.alis.open.agent.v2.StreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.StreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.StreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.StreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
task: (f = msg.getTask()) && proto.alis.open.agent.v2.Task.toObject(includeInstance, f),
msg: (f = msg.getMsg()) && proto.alis.open.agent.v2.Message.toObject(includeInstance, f),
statusUpdate: (f = msg.getStatusUpdate()) && proto.alis.open.agent.v2.TaskStatusUpdateEvent.toObject(includeInstance, f),
artifactUpdate: (f = msg.getArtifactUpdate()) && proto.alis.open.agent.v2.TaskArtifactUpdateEvent.toObject(includeInstance, f)
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
 * @return {!proto.alis.open.agent.v2.StreamResponse}
 */
proto.alis.open.agent.v2.StreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.StreamResponse;
  return proto.alis.open.agent.v2.StreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.StreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.StreamResponse}
 */
proto.alis.open.agent.v2.StreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v2.Task;
      reader.readMessage(value,proto.alis.open.agent.v2.Task.deserializeBinaryFromReader);
      msg.setTask(value);
      break;
    case 2:
      var value = new proto.alis.open.agent.v2.Message;
      reader.readMessage(value,proto.alis.open.agent.v2.Message.deserializeBinaryFromReader);
      msg.setMsg(value);
      break;
    case 3:
      var value = new proto.alis.open.agent.v2.TaskStatusUpdateEvent;
      reader.readMessage(value,proto.alis.open.agent.v2.TaskStatusUpdateEvent.deserializeBinaryFromReader);
      msg.setStatusUpdate(value);
      break;
    case 4:
      var value = new proto.alis.open.agent.v2.TaskArtifactUpdateEvent;
      reader.readMessage(value,proto.alis.open.agent.v2.TaskArtifactUpdateEvent.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.StreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.StreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.StreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.StreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.alis.open.agent.v2.Task.serializeBinaryToWriter
    );
  }
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.alis.open.agent.v2.Message.serializeBinaryToWriter
    );
  }
  f = message.getStatusUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.alis.open.agent.v2.TaskStatusUpdateEvent.serializeBinaryToWriter
    );
  }
  f = message.getArtifactUpdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.alis.open.agent.v2.TaskArtifactUpdateEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional Task task = 1;
 * @return {?proto.alis.open.agent.v2.Task}
 */
proto.alis.open.agent.v2.StreamResponse.prototype.getTask = function() {
  return /** @type{?proto.alis.open.agent.v2.Task} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.Task, 1));
};


/**
 * @param {?proto.alis.open.agent.v2.Task|undefined} value
 * @return {!proto.alis.open.agent.v2.StreamResponse} returns this
*/
proto.alis.open.agent.v2.StreamResponse.prototype.setTask = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.alis.open.agent.v2.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.StreamResponse} returns this
 */
proto.alis.open.agent.v2.StreamResponse.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.StreamResponse.prototype.hasTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message msg = 2;
 * @return {?proto.alis.open.agent.v2.Message}
 */
proto.alis.open.agent.v2.StreamResponse.prototype.getMsg = function() {
  return /** @type{?proto.alis.open.agent.v2.Message} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.Message, 2));
};


/**
 * @param {?proto.alis.open.agent.v2.Message|undefined} value
 * @return {!proto.alis.open.agent.v2.StreamResponse} returns this
*/
proto.alis.open.agent.v2.StreamResponse.prototype.setMsg = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.alis.open.agent.v2.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.StreamResponse} returns this
 */
proto.alis.open.agent.v2.StreamResponse.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.StreamResponse.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TaskStatusUpdateEvent status_update = 3;
 * @return {?proto.alis.open.agent.v2.TaskStatusUpdateEvent}
 */
proto.alis.open.agent.v2.StreamResponse.prototype.getStatusUpdate = function() {
  return /** @type{?proto.alis.open.agent.v2.TaskStatusUpdateEvent} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.TaskStatusUpdateEvent, 3));
};


/**
 * @param {?proto.alis.open.agent.v2.TaskStatusUpdateEvent|undefined} value
 * @return {!proto.alis.open.agent.v2.StreamResponse} returns this
*/
proto.alis.open.agent.v2.StreamResponse.prototype.setStatusUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.alis.open.agent.v2.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.StreamResponse} returns this
 */
proto.alis.open.agent.v2.StreamResponse.prototype.clearStatusUpdate = function() {
  return this.setStatusUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.StreamResponse.prototype.hasStatusUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TaskArtifactUpdateEvent artifact_update = 4;
 * @return {?proto.alis.open.agent.v2.TaskArtifactUpdateEvent}
 */
proto.alis.open.agent.v2.StreamResponse.prototype.getArtifactUpdate = function() {
  return /** @type{?proto.alis.open.agent.v2.TaskArtifactUpdateEvent} */ (
    jspb.Message.getWrapperField(this, proto.alis.open.agent.v2.TaskArtifactUpdateEvent, 4));
};


/**
 * @param {?proto.alis.open.agent.v2.TaskArtifactUpdateEvent|undefined} value
 * @return {!proto.alis.open.agent.v2.StreamResponse} returns this
*/
proto.alis.open.agent.v2.StreamResponse.prototype.setArtifactUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.alis.open.agent.v2.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.alis.open.agent.v2.StreamResponse} returns this
 */
proto.alis.open.agent.v2.StreamResponse.prototype.clearArtifactUpdate = function() {
  return this.setArtifactUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.alis.open.agent.v2.StreamResponse.prototype.hasArtifactUpdate = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.repeatedFields_ = [1];



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
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
configsList: jspb.Message.toObjectList(msg.getConfigsList(),
    proto.alis.open.agent.v2.TaskPushNotificationConfig.toObject, includeInstance),
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
 * @return {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse}
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse;
  return proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse}
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.alis.open.agent.v2.TaskPushNotificationConfig;
      reader.readMessage(value,proto.alis.open.agent.v2.TaskPushNotificationConfig.deserializeBinaryFromReader);
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
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.alis.open.agent.v2.TaskPushNotificationConfig.serializeBinaryToWriter
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
 * @return {!Array<!proto.alis.open.agent.v2.TaskPushNotificationConfig>}
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.prototype.getConfigsList = function() {
  return /** @type{!Array<!proto.alis.open.agent.v2.TaskPushNotificationConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.alis.open.agent.v2.TaskPushNotificationConfig, 1));
};


/**
 * @param {!Array<!proto.alis.open.agent.v2.TaskPushNotificationConfig>} value
 * @return {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse} returns this
*/
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.prototype.setConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.alis.open.agent.v2.TaskPushNotificationConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.alis.open.agent.v2.TaskPushNotificationConfig}
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.prototype.addConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.alis.open.agent.v2.TaskPushNotificationConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse} returns this
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.prototype.clearConfigsList = function() {
  return this.setConfigsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse} returns this
 */
proto.alis.open.agent.v2.ListTaskPushNotificationConfigResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.alis.open.agent.v2.TaskState = {
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
proto.alis.open.agent.v2.Role = {
  ROLE_UNSPECIFIED: 0,
  ROLE_USER: 1,
  ROLE_AGENT: 2
};

goog.object.extend(exports, proto.alis.open.agent.v2);

// Below is base64 encoded GeneratedCodeInfo proto
// CigKAgQAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIEwIJkwCigKAgQBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOQ2IOg2CigKAgQCEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOM8IO08CigKAgQDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNFCINVCCigKAgQEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGM1IINVICigKAgQFEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGN1OIOVOCigKAgQGEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMNUIMpUCigKAgQHEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNFaINlaCigKAgQIEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGORgIPlgCigKAgQJEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGP5mIJVnCigKAgQKEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKBtILZtCigKAgQLEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGL5zINBzCigKAgQMEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIN6IJF6CioKAgQNEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIGAASCKgAEKKgoCBA4SHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YmYYBIKaGAQoqCgIEDxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiTjAEgpIwBCioKAgQQEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNOSASDhkgEKKgoCBBESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y0ZgBINuYAQoqCgIEEhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjungEggJ8BCioKAgQTEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPykASCWpQEKKgoCBBQSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YqqsBILSrAQoqCgIEFRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjHsQEgz7EBCioKAgQWEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGK23ASC7twEKKgoCBBcSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y270BIO+9AQoqCgIEGBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjxwwEgh8QBCioKAgQZEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGI/KASCjygEKKgoCBBoSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YpdABIMDQAQoqCgIEGxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjX1gEg7tYBCioKAgQcEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPncASCD3QEKKgoCBB0SHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yk+MBIK3jAQoqCgIEHhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjB6QEg2+kBCioKAgQfEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGO/vASCA8AEKKgoCBCASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y+fUBIIr2AQoqCgIEIRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiD/AEglfwBCioKAgQiEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJGCAiCfggIKKgoCBCMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yj4gCIJ+IAgoqCgIEJBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiVjgIgpo4CCioKAgQlEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNWUAiDmlAIKKgoCBCYSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y35oCIIObAgoqCgIEJxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi1oQIg3KECCioKAgQoEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJeoAiC+qAIKKgoCBCkSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y+a4CIJCvAgoqCgIEKhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxibtQIgwLUCCioKAgQrEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPW7AiCIvAIKKgoCBCwSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yh8ICIJrCAgoqCgIELRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjOyAIg3MgCCioKAgQuEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPzOAiCizwIKLAoEBAACABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjm+wIggPwCCiwKBAQAAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YmP4CILL+AgosCgQEAAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMqAAyDggAMKLAoEBAACABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiMgwMgqIMDCiwKBAQAAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yp4UDILqFAwosCgQEAAIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNOIAyDmiAMKLAoEBAACARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxj5igMgjosDCiwKBAQAAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y0IwDIOOMAwosCgQEAAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKeOAyC3jgMKLAoEBAACAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjFkAMg1ZADCiwKBAQAAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YoJIDIKuSAwosCgQEAAIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMaUAyDRlAMKLAoEBAECABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjBwwMgxsMDCiwKBAQBAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YrcUDILLFAwosCgQEAQIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGO/GAyD7xgMKLAoEBAECARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjiyAMg7sgDCiwKBAQBAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YycoDINLKAwosCgQEAQICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJ/NAyCozQMKLAoEBAECAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiTzwMgns8DCiwKBAQBAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YwtADIMvQAwosCgQEAQIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJ3SAyCt0gMKLAoEBAECAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiC1QMgktUDCiwKBAQBAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yo9cDIK/XAwosCgQEAQIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOXZAyD32QMKLAoEBAECBBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi42wMgxtsDCiwKBAQBAgQSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YmN4DIKbeAwosCgQEAQIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLXgAyC/4AMKLAoEBAECBBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxj04gMghOMDCiwKBAQBAgUSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yx+QDINLkAwosCgQEAQIFEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGI7nAyCZ5wMKLAoEBAECBRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiE6QMgkekDCiwKBAQBAgUSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yt+oDIMLqAwosCgQEAgIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIKPBCCKjwQKLAoEBAICABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi2kQQgvpEECiwKBAQCAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yl5MEIKCTBAosCgQEAgIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPCVBCD5lQQKLAoEBAICARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjwlwQg+5cECiwKBAQCAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YpZkEIK6ZBAosCgQEAgICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGI2bBCCZmwQKLAoEBAICAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjtnQQg+Z0ECiwKBAQCAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y8J8EIP6fBAosCgQEAgICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKuhBCC3oQQKLAoEBAMCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxj6pQQg/qUECiwKBAQDAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YhaYEIImmBAosCgQEAwICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJCmBCCUpgQKLAoEBAMCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxj8zgQgg88ECiwKBAQDAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y6tAEIPHQBAosCgQEAwIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIHTBCCK0wQKLAoEBAMCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjy1AQg+dQECiwKBAQDAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YvtYEIMXWBAosCgQEAwIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIzZBCCT2QQKLAoEBAMCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiy2wQgu9sECiwKBAQDAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y3dwEIOTcBAosCgQEAwICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKneBCCw3gQKLAoEBAMCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxj34AQg/uAECiwKBAQDAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YneMEIKbjBAosCgQEAwICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMjkBCDP5AQKLAoEBAMCAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxih5gQgrOYECiwKBAQDAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y6OgEIPPoBAosCgQEAwIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGN7qBCDr6gQKLAoEBAMCAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiR7AQgnOwECiwKBAQEAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y5fAEIPLwBAosCgQEBAIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPnwBCCI8QQKLAoEBAQCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjilgUg8JYFCiwKBAQEAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y35gFIO2YBQosCgQEBAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGImbBSCZmwUKLAoEBAQCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiJnQUgl50FCiwKBAQEAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y2p4FIOqeBQosCgQEBAIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMemBSDXpgUKLAoEBAQCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjzqAUghakFCiwKBAQEAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y9aoFIIWrBQosCgQEBAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLWsBSDArAUKLAoEBAQCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxivrgUguq4FCiwKBAQEAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y9a8FIPyvBQosCgQEBAIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOuxBSDysQUKLAoEBAUCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiN0AUglNAFCiwKBAQFAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y2NIFIN/SBQosCgQEBQIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNLUBSDb1AUKLAoEBAUCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiB1gUgiNYFCiwKBAQGAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YoYcGIK2HBgosCgQEBgIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJqJBiCmiQYKLAoEBAYCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjmigYg8ooGCiwKBAQGAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y34wGIOuMBgosCgQEBgICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKiOBiCxjgYKLAoEBAYCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiekAYgp5AGCiwKBAQGAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y95EGIP6RBgosCgQEBgIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJqUBiChlAYKLAoEBAYCBBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxj4lQYghJYGCiwKBAQGAgQSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y05gGIN+YBgosCgQEBgIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOuaBiDzmgYKLAoEBAYCBBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxirnQYguZ0GCiwKBAQGAgUSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y/Z4GIIifBgosCgQEBgIFEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMqhBiDVoQYKLAoEBAYCBRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjGowYg06MGCiwKBAQGAgUSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y/KQGIIelBgosCgQEBgIGEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGL+mBiDQpgYKLAoEBAYCBhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjGqAYg16gGCiwKBAQGAgYSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YzaoGINqqBgosCgQEBgIGEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOSsBiD3rAYKLAoEBAYCBxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxirrgYgwq4GCiwKBAQGAgcSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YuLAGIM+wBgosCgQEBgIHEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMWyBiDYsgYKLAoEBAYCBxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjitAYg+7QGCiwKBAQHAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YqeEGILbhBgosCgQEBwIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKXjBiCy4wYKLAoEBAcCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjt5AYg9OQGCiwKBAQHAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y4+YGIOrmBgosCgQEBwICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKzoBiC66AYKLAoEBAcCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxip6gYgt+oGCiwKBAQHAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YkewGIJ3sBgosCgQEBwIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGO7uBiD67gYKLAoEBAcCAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiH8QYgj/EGCiwKBAQHAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YyfMGINfzBgosCgQEBwIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJz1BiCn9QYKLAoEBAcCBBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjr9wYg9vcGCiwKBAQHAgQSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y6fkGIPb5BgosCgQEBwIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKD7BiCr+wYKLAoEBAcCBRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjk/AYg9fwGCiwKBAQHAgUSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y7f4GIP7+BgosCgQEBwIFEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPaAByCDgQcKLAoEBAcCBRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiPgwcgooMHCiwKBAQIAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y/6wHIIitBwosCgQECAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJGvByCarwcKLAoEBAgCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjosAcg9LAHCiwKBAQIAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y/bIHIImzBwosCgQECAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPW0ByD+tAcKLAoEBAgCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjttwcg9rcHCiwKBAQIAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yg7oHII66BwosCgQECAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMO7ByDMuwcKLAoEBAgCAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiEvQcgjL0HCiwKBAQIAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yob8HIKm/BwosCgQECAIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJ3BByCowQcKLAoEBAgCBBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiGxAcgkcQHCiwKBAQIAgQSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YnsYHIKvGBwosCgQECAIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOLHByDtxwcKLAoEBAkCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiK9Acgk/QHCiwKBAQJAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YoPYHIKn2BwosCgQECQIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPn3ByCF+AcKLAoEBAkCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiS+gcgnvoHCiwKBAQJAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YivwHIJX8BwosCgQECQICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIL/ByCN/wcKLAoEBAkCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiegQggq4EICiwKBAQJAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y5IIIIO+CCAosCgQECQIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKqECCCzhAgKLAoEBAkCAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjMhggg1YYICiwKBAQJAgQSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YpYgIILGICAosCgQECQIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMqKCCDWiggKLAoEBAkCBRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjMjAgg14wICiwKBAQJAgUSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YuY8IIMSPCAosCgQECQIFEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNWRCCDikQgKLAoEBAkCBRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxibkwggppMICiwKBAQKAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y8rkIIPe5CAosCgQECgIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIK8CCCHvAgKLAoEBAoCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjPvQgg1b0ICiwKBAQKAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y4L8IIOa/CAosCgQECgICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLDBCCC4wQgKLAoEBAoCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjDwwggy8MICiwKBAQKAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y0MUIIOHFCAosCgQECgIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOrICCD7yAgKLAoEBAoCAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiKywggncsICiwKBAQKAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y28wIIOzMCAosCgQECwIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMruCCDY7ggKLAoEBAsCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjk8Agg8vAICiwKBAQLAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y/vIIIIjzCAosCgQECwIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKj1CCC49QgKLAoEBAsCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjl9ggg8/YICiwKBAQLAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y9vgIIIT5CAosCgQEDAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMWYCSDLmAkKLAoEBAwCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjGmgkgzJoJCiwKBAQMAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YkpwJIJ6cCQosCgQEDAIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJmeCSClngkKLAoEBA0CABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxid9Qkgr/UJCiwKBAQNAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YofcJILP3CQosCgQEDQIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPD4CSD3+AkKLAoEBA0CARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjo+gkg7/oJCiwKBAQNAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YsvwJIMD8CQosCgQEDQICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLH+CSC//gkKLAoEBA0CAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxj6/wkggIAKCiwKBAQNAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y8YEKIPeBCgosCgQEDQIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMODCiDYgwoKLAoEBA0CBBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjKhQog34UKCiwKBAQNAgUSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y4IcKIPuHCgosCgQEDQIFEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGO2KCiCIiwoKLAoEBA0CBRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxirjQogwo0KCiwKBAQNAgUSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YiZAKIKaQCgosCgQEDQIGEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPyRCiCHkgoKLAoEBA0CBhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjnlAog8pQKCiwKBAQNAgYSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y55YKIPSWCgosCgQEDQIGEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJ+YCiCqmAoKLAoEBA0CBxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjZmQog45kKCiwKBAQNAgcSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y1JsKIN6bCgosCgQEDQIIEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKedCiC6nQoKLAoEBA0CCBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxirnwogvp8KCiwKBAQNAgkSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YsqEKIMGhCgosCgQEDQIJEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGK2kCiC8pAoKLAoEBA0CCRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxixpgogwqYKCiwKBAQNAgkSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y8acKIICoCgosCgQEDQIKEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGN+qCiD0qgoKLAoEBA0CChIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiFrgognK4KCiwKBAQNAgsSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y+K8KIIewCgosCgQEDQILEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOayCiD1sgoKLAoEBA0CCxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiLtQoglrUKCiwKBAQNAgsSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y1rcKIOe3CgosCgQEDQIMEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJ25CiC1uQoKLAoEBA0CDBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiwuwogyLsKCiwKBAQNAgwSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yw70KINe9CgosCgQEDQIMEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOa/CiCAwAoKLAoEBA0CDRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjAwQog2cEKCiwKBAQNAg0SHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y1MMKIO3DCgosCgQEDQINEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOjFCiD9xQoKLAoEBA0CDRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiMyAogp8gKCiwKBAQNAg4SHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y/MkKIInKCgosCgQEDQIOEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGO/MCiD8zAoKLAoEBA0CDhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiXzwogoM8KCiwKBAQNAg4SHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y49EKIPLRCgosCgQEDQIPEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGK7TCiDS0woKLAoEBA0CDxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjQ1Qog9NUKCiwKBAQNAhASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y89cKIITYCgosCgQEDQIQEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGILbCiCT2woKLAoEBA0CEBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi+3Qogy90KCiwKBAQNAhASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YluAKIKngCgosCgQEDQIREhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGM7hCiDY4QoKLAoEBA0CERIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjK4wog1OMKCiwKBAQOAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yj4MLIJWDCwosCgQEDgIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGI6FCyCUhQsKLAoEBA4CARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjchgsg64YLCiwKBAQOAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y5IgLIPOICwosCgQEDwIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPywCyCIsQsKLAoEBA8CABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiVswsgobMLCiwKBAQPAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y87QLIIe1CwosCgQEDwIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJS3CyCotwsKLAoEBA8CAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiluQsgtrkLCiwKBAQPAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yt7wLIMi8CwosCgQEDwICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPK+CyD/vgsKLAoEBA8CAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjVwQsg6MELCiwKBAQPAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yo8MLILzDCwosCgQEDwIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMnFCyDixQsKLAoEBBACABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiJ6wsgj+sLCiwKBAQQAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yiu0LIJDtCwosCgQEEAIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNjuCyDm7gsKLAoEBBACARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjh8Asg7/ALCiwKBAQQAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Ys/ILIL7yCwosCgQEEAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMX0CyDQ9AsKLAoEBBACAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi79gsgxPYLCiwKBAQQAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YlPkLIJ35CwosCgQEEAIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJz7CyCn+wsKLAoEBBACAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjV/Asg3vwLCiwKBAQRAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Ysa0MILatDAosCgQEEQIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKmvDCCurwwKLAoEBBECARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjrsAwg8rAMCiwKBAQRAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y5bIMIOyyDAosCgQEEQICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLC0DCC+tAwKLAoEBBECAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxixtgwgv7YMCiwKBAQRAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YhLgMII+4DAosCgQEEQIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIu6DCCWugwKLAoEBBECAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiSvAwgmbwMCiwKBAQRAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yqb4MILa+DAosCgQEEQIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGN2/DCDsvwwKLAoEBBECBBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjowQwg98EMCiwKBAQRAgQSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y88MMIP7DDAosCgQEEQIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGI7GDCCfxgwKLAoEBBECBRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjNxwwg3scMCiwKBAQRAgUSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y2skMIOvJDAosCgQEEQIFEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOfLDCD0ywwKLAoEBBECBRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiEzgwgl84MCiwKBAQRAgYSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YyM8MINrPDAosCgQEEQIGEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNbRDCDo0QwKLAoEBBECBhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjk0wwg8tMMCiwKBAQRAgYSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YgtYMIJbWDAosCgQEEQIHEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOLXDCDx1wwKLAoEBBECBxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjS2gwg4doMCiwKBAQRAgcSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y+NwMIIPdDAosCgQEEQIHEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMXfDCDW3wwKLAoEBBICABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiigw0groMNCiwKBAQSAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YsYUNIL2FDQosCgQEEgIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIeHDSCThw0KLAoEBBICARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiWiQ0gookNCiwKBAQSAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YkIsNIJmLDQosCgQEEgICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPGNDSD6jQ0KLAoEBBICAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiBkA0gjJANCiwKBAQSAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YvpENIMeRDQosCgQEEwIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOO0DSDqtA0KLAoEBBMCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxj9tg0ghLcNCiwKBAQTAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yn7kNILi5DQosCgQEEwIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNW8DSDuvA0KLAoEBBMCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiFvw0goL8NCiwKBAQTAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y6sANIIPBDQosCgQEFAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKTfDSCv3w0KLAoEBBQCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxir4Q0gtuENCiwKBAQUAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YsuMNILnjDQosCgQEFAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMnlDSDW5Q0KLAoEBBUCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjVhw4g4ocOCiwKBAQVAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y6YoOIPiKDgosCgQEFgIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNWPDiDsjw4KLAoEBBYCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjzjw4gjJAOCiwKBAQWAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yk5AOIKmQDgosCgQEFgIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLCQDiDPkA4KLAoEBBYCBBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjWkA4g6pAOCiwKBAQWAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YpcUOILzFDgosCgQEFgIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLvIDiDSyA4KLAoEBBYCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiPyw4gqMsOCiwKBAQWAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y5MwOIPvMDgosCgQEFgIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPvODiCUzw4KLAoEBBYCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiZ0g4gstIOCiwKBAQWAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y79QOIIrVDgosCgQEFgIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMjWDiDh1g4KLAoEBBYCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxja2A4g8dgOCiwKBAQWAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y8NsOIIfcDgosCgQEFgICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMTeDiDd3g4KLAoEBBYCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiZ4A4gsOAOCiwKBAQWAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YwOIOIN7iDgosCgQEFgIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPLlDiCQ5g4KLAoEBBYCAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjN6A4g7egOCiwKBAQWAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YsOoOIM7qDgosCgQEFgIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMvsDiDg7A4KLAoEBBYCBBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjo7w4g/e8OCiwKBAQWAgQSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YuvIOINHyDgosCgQEFgIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIv0DiCg9A4KLAoEBBcCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjilg8g8JYPCiwKBAQXAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y95gPIIWZDwosCgQEFwIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNCaDyDbmg8KLAoEBBcCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjinA8g7ZwPCiwKBAQXAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YtJ4PILueDwosCgQEFwICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMKgDyDJoA8KLAoEBBgCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjNww8g28MPCiwKBAQYAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y5sUPIPTFDwosCgQEGAIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGL/HDyDIxw8KLAoEBBgCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjTyQ8g3MkPCiwKBAQYAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YrssPIL3LDwosCgQEGAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMjNDyDXzQ8KLAoEBBkCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiG8g8glPIPCiwKBAQZAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Ym/QPIKn0DwosCgQEGQIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJP2DyCb9g8KLAoEBBkCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiI+Q8gkPkPCiwKBAQZAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Ym/sPIKX7DwosCgQEGQIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNj8DyDg/A8KLAoEBBkCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxim/g8guv4PCiwKBAQZAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YwYAQINWAEAosCgQEGgIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJuiECCpohAKLAoEBBoCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi+pBAgzKQQCiwKBAQaAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YqaYQILymEAosCgQEGgIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNGoECDkqBAKLAoEBBsCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiyxxAgwMcQCiwKBAQbAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YzckQINvJEAosCgQEHAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLzOECDOzhAKLAoEBBwCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjVzhAg584QCiwKBAQcAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y7s4QIPbOEAosCgQEHAIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGP3OECCFzxAKLAoEBBwCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiL/RAgn/0QCiwKBAQcAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YqIARILyAEQosCgQEHAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGO2CESCDgxEKLAoEBBwCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi4hBEgzIQRCiwKBAQcAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YyYYRIN2GEQosCgQEHAIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOaJESD6iREKLAoEBBwCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxirjBEgwYwRCiwKBAQcAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y9o0RIIqOEQosCgQEHAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOuPESD2jxEKLAoEBBwCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjkkhEg75IRCiwKBAQcAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YoJURIK2VEQosCgQEHAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNmWESDklhEKLAoEBBwCAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjFmBEg0JgRCiwKBAQcAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YvpsRIMmbEQosCgQEHAIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPqdESCHnhEKLAoEBBwCAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiznxEgvp8RCiwKBAQdAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YlsgRIKnIEQosCgQEHQIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLzKESDPyhEKLAoEBB0CARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxihzBEgrMwRCiwKBAQdAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yv84RIMrOEQosCgQEHQICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJ7QESCr0BEKLAoEBB0CAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi+0hEgy9IRCiwKBAQdAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yl9URIKPVEQosCgQEHQIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJHYESCf2BEKLAoEBB4CABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi0/hEgv/4RCiwKBAQeAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y0oASIN2AEgosCgQEHgIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLGCEiC+ghIKLAoEBB4CARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjRhBIg3oQSCiwKBAQeAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YqocSILaHEgosCgQEHgICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGKSKEiCyihIKLAoEBB8CABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjXrxIg6q8SCiwKBAQfAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y67ESIP6xEgosCgQEHwIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMmzEiDWsxIKLAoEBB8CARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjXtRIg5LUSCiwKBAQfAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yp7gSILO4EgosCgQEHwICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGI+7EiCduxIKLAoEBCACABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxii4BIgreASCiwKBAQgAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YruISILniEgosCgQEIAIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGITkEiCR5BIKLAoEBCACARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiS5hIgn+YSCiwKBAQgAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y4ugSIO7oEgosCgQEIAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMrrEiDY6xIKLAoEBCECABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiIkxMgkpMTCiwKBAQhAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y8pUTIPyVEwosCgQEIQIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIOYEyCPmBMKLAoEBCECABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjCmRMgzJkTCiwKBAQhAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YyJsTINibEwosCgQEIQIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOueEyD7nhMKLAoEBCECARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiCoRMglKETCiwKBAQhAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YzaITIN2iEwosCgQEIQICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGL2kEyDIpBMKLAoEBCECAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxigpxMgq6cTCiwKBAQhAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YsqkTIL+pEwosCgQEIQICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPOqEyD+qhMKLAoEBCICABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxisyhMgs8oTCiwKBAQiAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YrswTILXMEwosCgQEIgIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGP/NEyCPzhMKLAoEBCICARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiJ0BMgmdATCiwKBAQjAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YkP0TIJz9EwosCgQEIwIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJv/EyCn/xMKLAoEBCMCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiMgRQglYEUCiwKBAQjAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YzYMUINaDFAosCgQEIwICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGJuFFCCmhRQKLAoEBCMCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxikhxQgr4cUCiwKBAQjAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y9YgUIIGJFAosCgQEIwIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGICLFCCMixQKLAoEBCMCBBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjYjBQg6IwUCiwKBAQjAgQSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y5o4UIPaOFAosCgQEIwIFEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPCQFCCCkRQKLAoEBCMCBRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjikxQg9JMUCiwKBAQjAgUSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y95UUIIuWFAosCgQEIwIFEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMSXFCDWlxQKLAoEBCMCBhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiVmRQgqJkUCiwKBAQjAgYSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Ys5sUIMabFAosCgQEJAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPPAFCD/wBQKLAoEBCQCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjiwxQg7sMUCiwKBAQkAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YhMYUIIzGFAosCgQEJAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNjIFCDmyBQKLAoEBCQCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiUyhQgpMoUCiwKBAQkAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YpcwUILXMFAosCgQEJAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGP7NFCCKzhQKLAoEBCQCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiK0BQgltAUCiwKBAQlAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y5e0UIOztFAosCgQEJQIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGO3vFCD07xQKLAoEBCYCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxj2jxUg/Y8VCiwKBAQmAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YpJIVIKuSFQosCgQEJwIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGN2yFSDkshUKLAoEBCcCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiRtRUgmLUVCiwKBAQoAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YjNwVIJXcFQosCgQEKAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMLeFSDL3hUKLAoEBCgCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiq4BUgteAVCiwKBAQoAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y4uIVIO3iFQosCgQEKAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIvlFSCU5RUKLAoEBCgCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjX6BUg4OgVCiwKBAQoAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YkesVIJzrFQosCgQEKAICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOPsFSDs7BUKLAoEBCkCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiOixYglYsWCiwKBAQpAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yoo0WIKmNFgosCgQEKgIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPOxFiD8sRYKLAoEBCoCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiltBYgrrQWCiwKBAQqAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YirYWIJW2FgosCgQEKgIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGL24FiDIuBYKLAoEBCoCAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxijuhYgr7oWCiwKBAQqAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y2LwWIOS8FgosCgQELAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGPPbFiD32xYKLAoEBCwCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxj+2xYggdwWCiwKBAQsAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y/oAXIIWBFwosCgQELAIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGN6DFyDlgxcKLAoEBCwCABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxixhhcguoYXCiwKBAQsAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y64cXIPKHFwosCgQELAIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMOJFyDJiRcKLAoEBCwCARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxirjBcgsYwXCiwKBAQsAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y/Y4XIIWPFwosCgQELAIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLWQFyC7kBcKLAoEBC0CABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxialRcgnpUXCiwKBAQtAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YpZUXIKiVFwosCgQELQICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGK+VFyC8lRcKLAoEBC0CAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjDlRcg0pUXCiwKBAQtAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yt8IXIL7CFwosCgQELQIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGI3FFyCUxRcKLAoEBC0CABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjRxxcg2scXCiwKBAQtAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YhskXII3JFwosCgQELQIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGNnKFyDfyhcKLAoEBC0CARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi3zRcgvc0XCiwKBAQtAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y+s8XIILQFwosCgQELQIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGK3RFyCz0RcKLAoEBC0CAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxil0xcgtNMXCiwKBAQtAgISHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YttYXIMXWFwosCgQELQICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGILZFyCT2RcKLAoEBC0CAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjH2hcg1toXCiwKBAQtAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YztwXIN/cFwosCgQELQIDEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOffFyD43xcKLAoEBC0CAxIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi14hcgyOIXCiwKBAQtAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y/uMXII/kFwosCgQELgIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGI6LGCCcixgKLAoEBC4CABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjrjhgg+Y4YCiwKBAQuAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y0JEYINqRGAosCgQELgIAEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGOaUGCD2lBgKLAoEBC4CARIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxi7lhggy5YYCiwKBAQuAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y9pgYIIaZGAoqCgIFABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxiPmhggmJoYCiwKBAUAAgASHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Yn5oYILWaGAosCgQFAAIBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGLyaGCDQmhgKLAoEBQACAhIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjXmhgg6ZoYCiwKBAUAAgMSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y8JoYIISbGAosCgQFAAIEEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGIubGCCcmxgKLAoEBQACBRIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxijmxggt5sYCiwKBAUAAgYSHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8YvpsYINebGAosCgQFAAIHEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGN6bGCDxmxgKLAoEBQACCBIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxj4mxggkJwYCioKAgUBEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGMucGCDPnBgKLAoEBQECABIcYWxpcy9vcGVuL2FnZW50L3YyL2EyYS5wcm90bxjWnBgg5pwYCiwKBAUBAgESHGFsaXMvb3Blbi9hZ2VudC92Mi9hMmEucHJvdG8Y7ZwYIPacGAosCgQFAQICEhxhbGlzL29wZW4vYWdlbnQvdjIvYTJhLnByb3RvGP2cGCCHnRg=
