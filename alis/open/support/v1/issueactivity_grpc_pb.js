// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_support_v1_issueactivity_pb = require('../../../../alis/open/support/v1/issueactivity_pb.js');
var alis_open_support_v1_issue_pb = require('../../../../alis/open/support/v1/issue_pb.js');
var alis_open_validation_v1_validation_pb = require('../../../../alis/open/validation/v1/validation_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_alis_open_support_v1_CreateCommentRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issueactivity_pb.CreateCommentRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.CreateCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_CreateCommentRequest(buffer_arg) {
  return alis_open_support_v1_issueactivity_pb.CreateCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_CreateIssueActivityRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issueactivity_pb.CreateIssueActivityRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.CreateIssueActivityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_CreateIssueActivityRequest(buffer_arg) {
  return alis_open_support_v1_issueactivity_pb.CreateIssueActivityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_DeleteCommentRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issueactivity_pb.DeleteCommentRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.DeleteCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_DeleteCommentRequest(buffer_arg) {
  return alis_open_support_v1_issueactivity_pb.DeleteCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_DeleteIssueActivityRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issueactivity_pb.DeleteIssueActivityRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.DeleteIssueActivityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_DeleteIssueActivityRequest(buffer_arg) {
  return alis_open_support_v1_issueactivity_pb.DeleteIssueActivityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_GetIssueActivityRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issueactivity_pb.GetIssueActivityRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.GetIssueActivityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_GetIssueActivityRequest(buffer_arg) {
  return alis_open_support_v1_issueactivity_pb.GetIssueActivityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_IssueActivity(arg) {
  if (!(arg instanceof alis_open_support_v1_issueactivity_pb.IssueActivity)) {
    throw new Error('Expected argument of type alis.open.support.v1.IssueActivity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_IssueActivity(buffer_arg) {
  return alis_open_support_v1_issueactivity_pb.IssueActivity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_ListIssueActivitiesRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issueactivity_pb.ListIssueActivitiesRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.ListIssueActivitiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_ListIssueActivitiesRequest(buffer_arg) {
  return alis_open_support_v1_issueactivity_pb.ListIssueActivitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_ListIssueActivitiesResponse(arg) {
  if (!(arg instanceof alis_open_support_v1_issueactivity_pb.ListIssueActivitiesResponse)) {
    throw new Error('Expected argument of type alis.open.support.v1.ListIssueActivitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_ListIssueActivitiesResponse(buffer_arg) {
  return alis_open_support_v1_issueactivity_pb.ListIssueActivitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_UpdateCommentRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issueactivity_pb.UpdateCommentRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.UpdateCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_UpdateCommentRequest(buffer_arg) {
  return alis_open_support_v1_issueactivity_pb.UpdateCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_UpdateIssueActivityRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_issueactivity_pb.UpdateIssueActivityRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.UpdateIssueActivityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_UpdateIssueActivityRequest(buffer_arg) {
  return alis_open_support_v1_issueactivity_pb.UpdateIssueActivityRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// IssueActivitiesService provides RPCs for managing IssueActivity resources.
var IssueActivitiesServiceService = exports.IssueActivitiesServiceService = {
  // Validates any proto message that is used directly or indirectly by this service.
// Most common use issue is to validate request messages from a client-side application.
validateMessage: {
    path: '/alis.open.support.v1.IssueActivitiesService/ValidateMessage',
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
    path: '/alis.open.support.v1.IssueActivitiesService/RetrieveRules',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_validation_pb.RetrieveRulesRequest,
    responseType: alis_open_validation_v1_validation_pb.RetrieveRulesResponse,
    requestSerialize: serialize_alis_open_validation_v1_RetrieveRulesRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_RetrieveRulesRequest,
    responseSerialize: serialize_alis_open_validation_v1_RetrieveRulesResponse,
    responseDeserialize: deserialize_alis_open_validation_v1_RetrieveRulesResponse,
  },
  // Creates a IssueActivity.
// Only called from alis-build
createIssueActivity: {
    path: '/alis.open.support.v1.IssueActivitiesService/CreateIssueActivity',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issueactivity_pb.CreateIssueActivityRequest,
    responseType: alis_open_support_v1_issueactivity_pb.IssueActivity,
    requestSerialize: serialize_alis_open_support_v1_CreateIssueActivityRequest,
    requestDeserialize: deserialize_alis_open_support_v1_CreateIssueActivityRequest,
    responseSerialize: serialize_alis_open_support_v1_IssueActivity,
    responseDeserialize: deserialize_alis_open_support_v1_IssueActivity,
  },
  // Gets information about a IssueActivity.
getIssueActivity: {
    path: '/alis.open.support.v1.IssueActivitiesService/GetIssueActivity',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issueactivity_pb.GetIssueActivityRequest,
    responseType: alis_open_support_v1_issueactivity_pb.IssueActivity,
    requestSerialize: serialize_alis_open_support_v1_GetIssueActivityRequest,
    requestDeserialize: deserialize_alis_open_support_v1_GetIssueActivityRequest,
    responseSerialize: serialize_alis_open_support_v1_IssueActivity,
    responseDeserialize: deserialize_alis_open_support_v1_IssueActivity,
  },
  // Updates a issue activity.
// Only called from alis-build.
updateIssueActivity: {
    path: '/alis.open.support.v1.IssueActivitiesService/UpdateIssueActivity',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issueactivity_pb.UpdateIssueActivityRequest,
    responseType: alis_open_support_v1_issueactivity_pb.IssueActivity,
    requestSerialize: serialize_alis_open_support_v1_UpdateIssueActivityRequest,
    requestDeserialize: deserialize_alis_open_support_v1_UpdateIssueActivityRequest,
    responseSerialize: serialize_alis_open_support_v1_IssueActivity,
    responseDeserialize: deserialize_alis_open_support_v1_IssueActivity,
  },
  // Deletes a IssueActivity.
// Only called from alis-build.
deleteIssueActivity: {
    path: '/alis.open.support.v1.IssueActivitiesService/DeleteIssueActivity',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issueactivity_pb.DeleteIssueActivityRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_open_support_v1_DeleteIssueActivityRequest,
    requestDeserialize: deserialize_alis_open_support_v1_DeleteIssueActivityRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists IssueActivities. Results are sorted by name, ascending.
listIssueActivities: {
    path: '/alis.open.support.v1.IssueActivitiesService/ListIssueActivities',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issueactivity_pb.ListIssueActivitiesRequest,
    responseType: alis_open_support_v1_issueactivity_pb.ListIssueActivitiesResponse,
    requestSerialize: serialize_alis_open_support_v1_ListIssueActivitiesRequest,
    requestDeserialize: deserialize_alis_open_support_v1_ListIssueActivitiesRequest,
    responseSerialize: serialize_alis_open_support_v1_ListIssueActivitiesResponse,
    responseDeserialize: deserialize_alis_open_support_v1_ListIssueActivitiesResponse,
  },
  // Adds a comment to the issue.
// If the Issue is private, only the reporter and assignees can comment.
// If the Issue is public, other users in the deployment can comment.
createComment: {
    path: '/alis.open.support.v1.IssueActivitiesService/CreateComment',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issueactivity_pb.CreateCommentRequest,
    responseType: alis_open_support_v1_issueactivity_pb.IssueActivity,
    requestSerialize: serialize_alis_open_support_v1_CreateCommentRequest,
    requestDeserialize: deserialize_alis_open_support_v1_CreateCommentRequest,
    responseSerialize: serialize_alis_open_support_v1_IssueActivity,
    responseDeserialize: deserialize_alis_open_support_v1_IssueActivity,
  },
  // Update an existing comment.
// Only the creator of the comment can update it.
updateComment: {
    path: '/alis.open.support.v1.IssueActivitiesService/UpdateComment',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issueactivity_pb.UpdateCommentRequest,
    responseType: alis_open_support_v1_issueactivity_pb.IssueActivity,
    requestSerialize: serialize_alis_open_support_v1_UpdateCommentRequest,
    requestDeserialize: deserialize_alis_open_support_v1_UpdateCommentRequest,
    responseSerialize: serialize_alis_open_support_v1_IssueActivity,
    responseDeserialize: deserialize_alis_open_support_v1_IssueActivity,
  },
  // Deletes an existing comment.
// Only the creator of the comment can delete it.
deleteComment: {
    path: '/alis.open.support.v1.IssueActivitiesService/DeleteComment',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_issueactivity_pb.DeleteCommentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_open_support_v1_DeleteCommentRequest,
    requestDeserialize: deserialize_alis_open_support_v1_DeleteCommentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.IssueActivitiesServiceClient = grpc.makeGenericClientConstructor(IssueActivitiesServiceService, 'IssueActivitiesService');
