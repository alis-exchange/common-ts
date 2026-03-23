// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_support_v1_issuesubscriber_pb = require('../../../../alis/open/support/v1/issuesubscriber_pb.js');
var alis_open_iam_v1_iam_pb = require('../../../../alis/open/iam/v1/iam_pb.js');
var alis_open_validation_v1_validation_pb = require('../../../../alis/open/validation/v1/validation_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_alis_open_iam_v1_AddIamBindingsRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_iam_pb.AddIamBindingsRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.AddIamBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_AddIamBindingsRequest(buffer_arg) {
  return alis_open_iam_v1_iam_pb.AddIamBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_RemoveIamBindingsRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.RemoveIamBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_RemoveIamBindingsRequest(buffer_arg) {
  return alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_CreateIssueSubscriberRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issuesubscriber_pb.CreateIssueSubscriberRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.CreateIssueSubscriberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_CreateIssueSubscriberRequest(buffer_arg) {
  return alis_open_support_v1_issuesubscriber_pb.CreateIssueSubscriberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_DeleteIssueSubscriberRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issuesubscriber_pb.DeleteIssueSubscriberRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.DeleteIssueSubscriberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_DeleteIssueSubscriberRequest(buffer_arg) {
  return alis_open_support_v1_issuesubscriber_pb.DeleteIssueSubscriberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_GetIssueSubscriberRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issuesubscriber_pb.GetIssueSubscriberRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.GetIssueSubscriberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_GetIssueSubscriberRequest(buffer_arg) {
  return alis_open_support_v1_issuesubscriber_pb.GetIssueSubscriberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_IssueSubscriber(arg) {
  if (!(arg instanceof alis_open_support_v1_issuesubscriber_pb.IssueSubscriber)) {
    throw new Error('Expected argument of type alis.open.support.v1.IssueSubscriber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_IssueSubscriber(buffer_arg) {
  return alis_open_support_v1_issuesubscriber_pb.IssueSubscriber.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_ListIssueSubscribersRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issuesubscriber_pb.ListIssueSubscribersRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.ListIssueSubscribersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_ListIssueSubscribersRequest(buffer_arg) {
  return alis_open_support_v1_issuesubscriber_pb.ListIssueSubscribersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_ListIssueSubscribersResponse(arg) {
  if (!(arg instanceof alis_open_support_v1_issuesubscriber_pb.ListIssueSubscribersResponse)) {
    throw new Error('Expected argument of type alis.open.support.v1.ListIssueSubscribersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_ListIssueSubscribersResponse(buffer_arg) {
  return alis_open_support_v1_issuesubscriber_pb.ListIssueSubscribersResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_iam_v1_GetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.GetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.GetIamPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_GetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.GetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_Policy(arg) {
  if (!(arg instanceof google_iam_v1_policy_pb.Policy)) {
    throw new Error('Expected argument of type google.iam.v1.Policy');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_Policy(buffer_arg) {
  return google_iam_v1_policy_pb.Policy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_SetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.SetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.SetIamPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_SetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.SetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// IssueSubscribersService provides RPCs for managing IssueSubscriber resources.
var IssueSubscribersServiceService = exports.IssueSubscribersServiceService = {
  // Validates any proto message that is used directly or indirectly by this service.
// Most common use issue is to validate request messages from a client-side application.
validateMessage: {
    path: '/alis.open.support.v1.IssueSubscribersService/ValidateMessage',
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
    path: '/alis.open.support.v1.IssueSubscribersService/RetrieveRules',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_validation_pb.RetrieveRulesRequest,
    responseType: alis_open_validation_v1_validation_pb.RetrieveRulesResponse,
    requestSerialize: serialize_alis_open_validation_v1_RetrieveRulesRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_RetrieveRulesRequest,
    responseSerialize: serialize_alis_open_validation_v1_RetrieveRulesResponse,
    responseDeserialize: deserialize_alis_open_validation_v1_RetrieveRulesResponse,
  },
  // Gets the IAM policy for a resource implemented in this service.
getIamPolicy: {
    path: '/alis.open.support.v1.IssueSubscribersService/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Sets the IAM policy for a resource implemented in this service.
setIamPolicy: {
    path: '/alis.open.support.v1.IssueSubscribersService/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns permissions that a caller has on the specified resource.
testIamPermissions: {
    path: '/alis.open.support.v1.IssueSubscribersService/TestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    requestSerialize: serialize_google_iam_v1_TestIamPermissionsRequest,
    requestDeserialize: deserialize_google_iam_v1_TestIamPermissionsRequest,
    responseSerialize: serialize_google_iam_v1_TestIamPermissionsResponse,
    responseDeserialize: deserialize_google_iam_v1_TestIamPermissionsResponse,
  },
  // Adds principals or updates the roles existing principals have on an IAM Policy protected resource.
addIamBindings: {
    path: '/alis.open.support.v1.IssueSubscribersService/AddIamBindings',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_iam_pb.AddIamBindingsRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_alis_open_iam_v1_AddIamBindingsRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_AddIamBindingsRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Removes principals or some of the roles they have on an IAM Policy protected resource.
removeIamBindings: {
    path: '/alis.open.support.v1.IssueSubscribersService/RemoveIamBindings',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Subscribes a user to an issue.
createIssueSubscriber: {
    path: '/alis.open.support.v1.IssueSubscribersService/CreateIssueSubscriber',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issuesubscriber_pb.CreateIssueSubscriberRequest,
    responseType: alis_open_support_v1_issuesubscriber_pb.IssueSubscriber,
    requestSerialize: serialize_alis_open_support_v1_CreateIssueSubscriberRequest,
    requestDeserialize: deserialize_alis_open_support_v1_CreateIssueSubscriberRequest,
    responseSerialize: serialize_alis_open_support_v1_IssueSubscriber,
    responseDeserialize: deserialize_alis_open_support_v1_IssueSubscriber,
  },
  // Gets a user's subscription to an issue.
getIssueSubscriber: {
    path: '/alis.open.support.v1.IssueSubscribersService/GetIssueSubscriber',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issuesubscriber_pb.GetIssueSubscriberRequest,
    responseType: alis_open_support_v1_issuesubscriber_pb.IssueSubscriber,
    requestSerialize: serialize_alis_open_support_v1_GetIssueSubscriberRequest,
    requestDeserialize: deserialize_alis_open_support_v1_GetIssueSubscriberRequest,
    responseSerialize: serialize_alis_open_support_v1_IssueSubscriber,
    responseDeserialize: deserialize_alis_open_support_v1_IssueSubscriber,
  },
  // Gets a list of subscribers for an issue.
listIssueSubscribers: {
    path: '/alis.open.support.v1.IssueSubscribersService/ListIssueSubscribers',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issuesubscriber_pb.ListIssueSubscribersRequest,
    responseType: alis_open_support_v1_issuesubscriber_pb.ListIssueSubscribersResponse,
    requestSerialize: serialize_alis_open_support_v1_ListIssueSubscribersRequest,
    requestDeserialize: deserialize_alis_open_support_v1_ListIssueSubscribersRequest,
    responseSerialize: serialize_alis_open_support_v1_ListIssueSubscribersResponse,
    responseDeserialize: deserialize_alis_open_support_v1_ListIssueSubscribersResponse,
  },
  // Deletes an issue subscription.
deleteIssueSubscriber: {
    path: '/alis.open.support.v1.IssueSubscribersService/DeleteIssueSubscriber',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issuesubscriber_pb.DeleteIssueSubscriberRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_open_support_v1_DeleteIssueSubscriberRequest,
    requestDeserialize: deserialize_alis_open_support_v1_DeleteIssueSubscriberRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.IssueSubscribersServiceClient = grpc.makeGenericClientConstructor(IssueSubscribersServiceService, 'IssueSubscribersService');
