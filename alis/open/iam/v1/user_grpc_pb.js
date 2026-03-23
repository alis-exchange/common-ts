// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_iam_v1_user_pb = require('../../../../alis/open/iam/v1/user_pb.js');
var alis_open_iam_v1_iam_pb = require('../../../../alis/open/iam/v1/iam_pb.js');
var alis_open_validation_v1_validation_pb = require('../../../../alis/open/validation/v1/validation_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
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

function serialize_alis_open_iam_v1_BatchRetrieveMaskedUsersRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.BatchRetrieveMaskedUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_BatchRetrieveMaskedUsersRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_BatchRetrieveMaskedUsersResponse(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersResponse)) {
    throw new Error('Expected argument of type alis.open.iam.v1.BatchRetrieveMaskedUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_BatchRetrieveMaskedUsersResponse(buffer_arg) {
  return alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_CreateUserRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_CreateUserRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_DeleteUserRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_DeleteUserRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_EditMyInfoRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.EditMyInfoRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.EditMyInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_EditMyInfoRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.EditMyInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_EditMyMetadataRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.EditMyMetadataRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.EditMyMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_EditMyMetadataRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.EditMyMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_EditUserInfoRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.EditUserInfoRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.EditUserInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_EditUserInfoRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.EditUserInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_EditUserMetadataRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.EditUserMetadataRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.EditUserMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_EditUserMetadataRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.EditUserMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_GetUserRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_GetUserRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_ListUsersRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_ListUsersRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_ListUsersResponse(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type alis.open.iam.v1.ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_ListUsersResponse(buffer_arg) {
  return alis_open_iam_v1_user_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_LookupUserRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.LookupUserRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.LookupUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_LookupUserRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.LookupUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_LookupUserResponse(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.LookupUserResponse)) {
    throw new Error('Expected argument of type alis.open.iam.v1.LookupUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_LookupUserResponse(buffer_arg) {
  return alis_open_iam_v1_user_pb.LookupUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_MaskedUser(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.MaskedUser)) {
    throw new Error('Expected argument of type alis.open.iam.v1.MaskedUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_MaskedUser(buffer_arg) {
  return alis_open_iam_v1_user_pb.MaskedUser.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_alis_open_iam_v1_RemoveMyUserRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.RemoveMyUserRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.RemoveMyUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_RemoveMyUserRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.RemoveMyUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_RetrieveMaskedUserRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.RetrieveMaskedUserRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.RetrieveMaskedUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_RetrieveMaskedUserRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.RetrieveMaskedUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_RetrieveMaskedUsersRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.RetrieveMaskedUsersRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.RetrieveMaskedUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_RetrieveMaskedUsersRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.RetrieveMaskedUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_RetrieveMaskedUsersResponse(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.RetrieveMaskedUsersResponse)) {
    throw new Error('Expected argument of type alis.open.iam.v1.RetrieveMaskedUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_RetrieveMaskedUsersResponse(buffer_arg) {
  return alis_open_iam_v1_user_pb.RetrieveMaskedUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_RetrieveMyUserRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.RetrieveMyUserRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.RetrieveMyUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_RetrieveMyUserRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.RetrieveMyUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_RetrieveUserByEmailRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.RetrieveUserByEmailRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.RetrieveUserByEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_RetrieveUserByEmailRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.RetrieveUserByEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_SetUserPictureRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.SetUserPictureRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.SetUserPictureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_SetUserPictureRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.SetUserPictureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_SetUserPictureResponse(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.SetUserPictureResponse)) {
    throw new Error('Expected argument of type alis.open.iam.v1.SetUserPictureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_SetUserPictureResponse(buffer_arg) {
  return alis_open_iam_v1_user_pb.SetUserPictureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_SyncToGoogleGroupRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.SyncToGoogleGroupRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.SyncToGoogleGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_SyncToGoogleGroupRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.SyncToGoogleGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_SyncToGoogleGroupResponse(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.SyncToGoogleGroupResponse)) {
    throw new Error('Expected argument of type alis.open.iam.v1.SyncToGoogleGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_SyncToGoogleGroupResponse(buffer_arg) {
  return alis_open_iam_v1_user_pb.SyncToGoogleGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_UpdateUserRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_UpdateUserRequest(buffer_arg) {
  return alis_open_iam_v1_user_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_User(arg) {
  if (!(arg instanceof alis_open_iam_v1_user_pb.User)) {
    throw new Error('Expected argument of type alis.open.iam.v1.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_User(buffer_arg) {
  return alis_open_iam_v1_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
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


// UsersService provides RPCs for managing User resources.
var UsersServiceService = exports.UsersServiceService = {
  // Validates any proto message that is used directly or indirectly by this service.
// Most common use case is to validate request messages from a client-side application.
validateMessage: {
    path: '/alis.open.iam.v1.UsersService/ValidateMessage',
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
    path: '/alis.open.iam.v1.UsersService/RetrieveRules',
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
    path: '/alis.open.iam.v1.UsersService/GetIamPolicy',
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
    path: '/alis.open.iam.v1.UsersService/SetIamPolicy',
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
    path: '/alis.open.iam.v1.UsersService/TestIamPermissions',
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
    path: '/alis.open.iam.v1.UsersService/AddIamBindings',
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
    path: '/alis.open.iam.v1.UsersService/RemoveIamBindings',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Gets information about a User.
getUser: {
    path: '/alis.open.iam.v1.UsersService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.GetUserRequest,
    responseType: alis_open_iam_v1_user_pb.User,
    requestSerialize: serialize_alis_open_iam_v1_GetUserRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_GetUserRequest,
    responseSerialize: serialize_alis_open_iam_v1_User,
    responseDeserialize: deserialize_alis_open_iam_v1_User,
  },
  // Creates a new User.
createUser: {
    path: '/alis.open.iam.v1.UsersService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.CreateUserRequest,
    responseType: alis_open_iam_v1_user_pb.User,
    requestSerialize: serialize_alis_open_iam_v1_CreateUserRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_CreateUserRequest,
    responseSerialize: serialize_alis_open_iam_v1_User,
    responseDeserialize: deserialize_alis_open_iam_v1_User,
  },
  // Updates a User.
updateUser: {
    path: '/alis.open.iam.v1.UsersService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.UpdateUserRequest,
    responseType: alis_open_iam_v1_user_pb.User,
    requestSerialize: serialize_alis_open_iam_v1_UpdateUserRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_UpdateUserRequest,
    responseSerialize: serialize_alis_open_iam_v1_User,
    responseDeserialize: deserialize_alis_open_iam_v1_User,
  },
  // Deletes a User.
deleteUser: {
    path: '/alis.open.iam.v1.UsersService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.DeleteUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_open_iam_v1_DeleteUserRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_DeleteUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists Users. Results are sorted by name, ascending.
listUsers: {
    path: '/alis.open.iam.v1.UsersService/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.ListUsersRequest,
    responseType: alis_open_iam_v1_user_pb.ListUsersResponse,
    requestSerialize: serialize_alis_open_iam_v1_ListUsersRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_ListUsersRequest,
    responseSerialize: serialize_alis_open_iam_v1_ListUsersResponse,
    responseDeserialize: deserialize_alis_open_iam_v1_ListUsersResponse,
  },
  // Retrieve a User by their email.
retrieveUserByEmail: {
    path: '/alis.open.iam.v1.UsersService/RetrieveUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.RetrieveUserByEmailRequest,
    responseType: alis_open_iam_v1_user_pb.User,
    requestSerialize: serialize_alis_open_iam_v1_RetrieveUserByEmailRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RetrieveUserByEmailRequest,
    responseSerialize: serialize_alis_open_iam_v1_User,
    responseDeserialize: deserialize_alis_open_iam_v1_User,
  },
  // Look up a User based on a search text.
//
// This method retrieves a set of results, which are Users, based on the request.
// The lookup for these Users are done across the given_name, family_name, email and contact number.
lookupUser: {
    path: '/alis.open.iam.v1.UsersService/LookupUser',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.LookupUserRequest,
    responseType: alis_open_iam_v1_user_pb.LookupUserResponse,
    requestSerialize: serialize_alis_open_iam_v1_LookupUserRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_LookupUserRequest,
    responseSerialize: serialize_alis_open_iam_v1_LookupUserResponse,
    responseDeserialize: deserialize_alis_open_iam_v1_LookupUserResponse,
  },
  // Retrieves the set of Users requested, with only a
// subset of the User information returned.
//
// This is equivalent to a BatchGet method, but only a subset of the User information,
// which does not contain any sensitive information such as email or group configurations.
//
// Differs from the RetrieveMaskedUsers method in that it returns only
// the Users that were specified in the request.
batchRetrieveMaskedUsers: {
    path: '/alis.open.iam.v1.UsersService/BatchRetrieveMaskedUsers',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersRequest,
    responseType: alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersResponse,
    requestSerialize: serialize_alis_open_iam_v1_BatchRetrieveMaskedUsersRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_BatchRetrieveMaskedUsersRequest,
    responseSerialize: serialize_alis_open_iam_v1_BatchRetrieveMaskedUsersResponse,
    responseDeserialize: deserialize_alis_open_iam_v1_BatchRetrieveMaskedUsersResponse,
  },
  // Retrieves all Users that match the filter criteria, if specified,
// with only a subset of the User information.
//
// This is equivalent to a List method, but only a subset of the User information,
// which does not contain any sensitive information such as email or group configurations.
//
// Differs from the BatchRetrieveMaskedUsers method in that it returns all
// the Users that match the filter, if the filter is specified.
//
// This is useful for displaying a list of Users without revealing sensitive information like email.
retrieveMaskedUsers: {
    path: '/alis.open.iam.v1.UsersService/RetrieveMaskedUsers',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.RetrieveMaskedUsersRequest,
    responseType: alis_open_iam_v1_user_pb.RetrieveMaskedUsersResponse,
    requestSerialize: serialize_alis_open_iam_v1_RetrieveMaskedUsersRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RetrieveMaskedUsersRequest,
    responseSerialize: serialize_alis_open_iam_v1_RetrieveMaskedUsersResponse,
    responseDeserialize: deserialize_alis_open_iam_v1_RetrieveMaskedUsersResponse,
  },
  // Retrieves a User with some of their details hidden.
// This is useful for displaying a User without revealing sensitive information like email.
// Both name and email can be used to retrieve the User.
retrieveMaskedUser: {
    path: '/alis.open.iam.v1.UsersService/RetrieveMaskedUser',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.RetrieveMaskedUserRequest,
    responseType: alis_open_iam_v1_user_pb.MaskedUser,
    requestSerialize: serialize_alis_open_iam_v1_RetrieveMaskedUserRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RetrieveMaskedUserRequest,
    responseSerialize: serialize_alis_open_iam_v1_MaskedUser,
    responseDeserialize: deserialize_alis_open_iam_v1_MaskedUser,
  },
  // Edits a User's non-auth related information like family name and picture.
editUserInfo: {
    path: '/alis.open.iam.v1.UsersService/EditUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.EditUserInfoRequest,
    responseType: alis_open_iam_v1_user_pb.User,
    requestSerialize: serialize_alis_open_iam_v1_EditUserInfoRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_EditUserInfoRequest,
    responseSerialize: serialize_alis_open_iam_v1_User,
    responseDeserialize: deserialize_alis_open_iam_v1_User,
  },
  // Edits a User's metadata
editUserMetadata: {
    path: '/alis.open.iam.v1.UsersService/EditUserMetadata',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.EditUserMetadataRequest,
    responseType: alis_open_iam_v1_user_pb.User,
    requestSerialize: serialize_alis_open_iam_v1_EditUserMetadataRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_EditUserMetadataRequest,
    responseSerialize: serialize_alis_open_iam_v1_User,
    responseDeserialize: deserialize_alis_open_iam_v1_User,
  },
  // Retrieves the currently signed in user.
// This is useful for client-side applications to get the signed in user's information.
retrieveMyUser: {
    path: '/alis.open.iam.v1.UsersService/RetrieveMyUser',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.RetrieveMyUserRequest,
    responseType: alis_open_iam_v1_user_pb.User,
    requestSerialize: serialize_alis_open_iam_v1_RetrieveMyUserRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RetrieveMyUserRequest,
    responseSerialize: serialize_alis_open_iam_v1_User,
    responseDeserialize: deserialize_alis_open_iam_v1_User,
  },
  // Edits the info of the currently signed in user.
// This is useful for client-side applications to edit the signed in user's information.
// Allows the user to edit their given_name, family_name, picture, contact_number, position, education, linkedin_uri and metadata.
editMyInfo: {
    path: '/alis.open.iam.v1.UsersService/EditMyInfo',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.EditMyInfoRequest,
    responseType: alis_open_iam_v1_user_pb.User,
    requestSerialize: serialize_alis_open_iam_v1_EditMyInfoRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_EditMyInfoRequest,
    responseSerialize: serialize_alis_open_iam_v1_User,
    responseDeserialize: deserialize_alis_open_iam_v1_User,
  },
  // Edits the metadata of the currently signed in user.
// This is useful for client-side applications to edit the signed in user's metadata.
editMyMetadata: {
    path: '/alis.open.iam.v1.UsersService/EditMyMetadata',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.EditMyMetadataRequest,
    responseType: alis_open_iam_v1_user_pb.User,
    requestSerialize: serialize_alis_open_iam_v1_EditMyMetadataRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_EditMyMetadataRequest,
    responseSerialize: serialize_alis_open_iam_v1_User,
    responseDeserialize: deserialize_alis_open_iam_v1_User,
  },
  // Removes the currently signed in user.
// This is useful if a user wants to delete their account.
removeMyUser: {
    path: '/alis.open.iam.v1.UsersService/RemoveMyUser',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.RemoveMyUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_open_iam_v1_RemoveMyUserRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RemoveMyUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Syncs all google User's to the google group configured in the IamConfig.
// Will not delete service accounts.
syncToGoogleGroup: {
    path: '/alis.open.iam.v1.UsersService/SyncToGoogleGroup',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.SyncToGoogleGroupRequest,
    responseType: alis_open_iam_v1_user_pb.SyncToGoogleGroupResponse,
    requestSerialize: serialize_alis_open_iam_v1_SyncToGoogleGroupRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_SyncToGoogleGroupRequest,
    responseSerialize: serialize_alis_open_iam_v1_SyncToGoogleGroupResponse,
    responseDeserialize: deserialize_alis_open_iam_v1_SyncToGoogleGroupResponse,
  },
  // Sets the user's profile picture
setUserPicture: {
    path: '/alis.open.iam.v1.UsersService/SetUserPicture',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_user_pb.SetUserPictureRequest,
    responseType: alis_open_iam_v1_user_pb.SetUserPictureResponse,
    requestSerialize: serialize_alis_open_iam_v1_SetUserPictureRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_SetUserPictureRequest,
    responseSerialize: serialize_alis_open_iam_v1_SetUserPictureResponse,
    responseDeserialize: deserialize_alis_open_iam_v1_SetUserPictureResponse,
  },
};

exports.UsersServiceClient = grpc.makeGenericClientConstructor(UsersServiceService, 'UsersService');
