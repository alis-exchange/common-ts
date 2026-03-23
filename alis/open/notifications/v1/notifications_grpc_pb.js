// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_notifications_v1_notifications_pb = require('../../../../alis/open/notifications/v1/notifications_pb.js');
var alis_open_validation_v1_validation_pb = require('../../../../alis/open/validation/v1/validation_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');

function serialize_alis_open_notifications_v1_BatchSendFcmMessagesRequest(arg) {
  if (!(arg instanceof alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesRequest)) {
    throw new Error('Expected argument of type alis.open.notifications.v1.BatchSendFcmMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_notifications_v1_BatchSendFcmMessagesRequest(buffer_arg) {
  return alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_notifications_v1_BatchSendFcmMessagesResponse(arg) {
  if (!(arg instanceof alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesResponse)) {
    throw new Error('Expected argument of type alis.open.notifications.v1.BatchSendFcmMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_notifications_v1_BatchSendFcmMessagesResponse(buffer_arg) {
  return alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_notifications_v1_SendFcmMessageRequest(arg) {
  if (!(arg instanceof alis_open_notifications_v1_notifications_pb.SendFcmMessageRequest)) {
    throw new Error('Expected argument of type alis.open.notifications.v1.SendFcmMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_notifications_v1_SendFcmMessageRequest(buffer_arg) {
  return alis_open_notifications_v1_notifications_pb.SendFcmMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_notifications_v1_SendFcmMessageResponse(arg) {
  if (!(arg instanceof alis_open_notifications_v1_notifications_pb.SendFcmMessageResponse)) {
    throw new Error('Expected argument of type alis.open.notifications.v1.SendFcmMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_notifications_v1_SendFcmMessageResponse(buffer_arg) {
  return alis_open_notifications_v1_notifications_pb.SendFcmMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_RetrieveRulesRequest(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.RetrieveRulesRequest)) {
    throw new Error('Expected argument of type alis.open.validation.v1.RetrieveRulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_RetrieveRulesRequest(buffer_arg) {
  return alis_open_validation_v1_validation_pb.RetrieveRulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_RetrieveRulesResponse(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.RetrieveRulesResponse)) {
    throw new Error('Expected argument of type alis.open.validation.v1.RetrieveRulesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_RetrieveRulesResponse(buffer_arg) {
  return alis_open_validation_v1_validation_pb.RetrieveRulesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_ValidateMessageRequest(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.ValidateMessageRequest)) {
    throw new Error('Expected argument of type alis.open.validation.v1.ValidateMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_ValidateMessageRequest(buffer_arg) {
  return alis_open_validation_v1_validation_pb.ValidateMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_ValidateMessageResponse(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.ValidateMessageResponse)) {
    throw new Error('Expected argument of type alis.open.validation.v1.ValidateMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_ValidateMessageResponse(buffer_arg) {
  return alis_open_validation_v1_validation_pb.ValidateMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsRequest)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsResponse(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsResponse)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsResponse(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// NotificationsService provides RPCs for sending notifications to users or topics.
var NotificationsServiceService = exports.NotificationsServiceService = {
  // Validates any proto message that is used directly or indirectly by this service.
// Most common use issue is to validate request messages from a client-side application.
validateMessage: {
    path: '/alis.open.notifications.v1.NotificationsService/ValidateMessage',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_validation_pb.ValidateMessageRequest,
    responseType: alis_open_validation_v1_validation_pb.ValidateMessageResponse,
    requestSerialize: serialize_alis_open_validation_v1_ValidateMessageRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_ValidateMessageRequest,
    responseSerialize: serialize_alis_open_validation_v1_ValidateMessageResponse,
    responseDeserialize: deserialize_alis_open_validation_v1_ValidateMessageResponse,
  },
  // Retrieves the validation rules for any proto message that is used directly or indirectly by this service.
// Serves as live auto-documentation of the validation rules in this service.
retrieveRules: {
    path: '/alis.open.notifications.v1.NotificationsService/RetrieveRules',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_validation_pb.RetrieveRulesRequest,
    responseType: alis_open_validation_v1_validation_pb.RetrieveRulesResponse,
    requestSerialize: serialize_alis_open_validation_v1_RetrieveRulesRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_RetrieveRulesRequest,
    responseSerialize: serialize_alis_open_validation_v1_RetrieveRulesResponse,
    responseDeserialize: deserialize_alis_open_validation_v1_RetrieveRulesResponse,
  },
  // Returns permissions that a caller has on the specified resource.
testIamPermissions: {
    path: '/alis.open.notifications.v1.NotificationsService/TestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    requestSerialize: serialize_google_iam_v1_TestIamPermissionsRequest,
    requestDeserialize: deserialize_google_iam_v1_TestIamPermissionsRequest,
    responseSerialize: serialize_google_iam_v1_TestIamPermissionsResponse,
    responseDeserialize: deserialize_google_iam_v1_TestIamPermissionsResponse,
  },
  // Sends a Firebase Cloud Messaging(FCM) message to a user or topic.
sendFcmMessage: {
    path: '/alis.open.notifications.v1.NotificationsService/SendFcmMessage',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_notifications_v1_notifications_pb.SendFcmMessageRequest,
    responseType: alis_open_notifications_v1_notifications_pb.SendFcmMessageResponse,
    requestSerialize: serialize_alis_open_notifications_v1_SendFcmMessageRequest,
    requestDeserialize: deserialize_alis_open_notifications_v1_SendFcmMessageRequest,
    responseSerialize: serialize_alis_open_notifications_v1_SendFcmMessageResponse,
    responseDeserialize: deserialize_alis_open_notifications_v1_SendFcmMessageResponse,
  },
  // Sends a batch of Firebase Cloud Messaging(FCM) messages to users or topics.
batchSendFcmMessages: {
    path: '/alis.open.notifications.v1.NotificationsService/BatchSendFcmMessages',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesRequest,
    responseType: alis_open_notifications_v1_notifications_pb.BatchSendFcmMessagesResponse,
    requestSerialize: serialize_alis_open_notifications_v1_BatchSendFcmMessagesRequest,
    requestDeserialize: deserialize_alis_open_notifications_v1_BatchSendFcmMessagesRequest,
    responseSerialize: serialize_alis_open_notifications_v1_BatchSendFcmMessagesResponse,
    responseDeserialize: deserialize_alis_open_notifications_v1_BatchSendFcmMessagesResponse,
  },
};

exports.NotificationsServiceClient = grpc.makeGenericClientConstructor(NotificationsServiceService, 'NotificationsService');
