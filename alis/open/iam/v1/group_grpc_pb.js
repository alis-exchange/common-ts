// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_iam_v1_group_pb = require('../../../../alis/open/iam/v1/group_pb.js');
var alis_open_iam_v1_iam_pb = require('../../../../alis/open/iam/v1/iam_pb.js');
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

function serialize_alis_open_iam_v1_CreateGroupRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_group_pb.CreateGroupRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.CreateGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_CreateGroupRequest(buffer_arg) {
  return alis_open_iam_v1_group_pb.CreateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_DeleteGroupRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_group_pb.DeleteGroupRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.DeleteGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_DeleteGroupRequest(buffer_arg) {
  return alis_open_iam_v1_group_pb.DeleteGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_GetGroupRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_group_pb.GetGroupRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.GetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_GetGroupRequest(buffer_arg) {
  return alis_open_iam_v1_group_pb.GetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_Group(arg) {
  if (!(arg instanceof alis_open_iam_v1_group_pb.Group)) {
    throw new Error('Expected argument of type alis.open.iam.v1.Group');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_Group(buffer_arg) {
  return alis_open_iam_v1_group_pb.Group.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_ListGroupsRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_group_pb.ListGroupsRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.ListGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_ListGroupsRequest(buffer_arg) {
  return alis_open_iam_v1_group_pb.ListGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_ListGroupsResponse(arg) {
  if (!(arg instanceof alis_open_iam_v1_group_pb.ListGroupsResponse)) {
    throw new Error('Expected argument of type alis.open.iam.v1.ListGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_ListGroupsResponse(buffer_arg) {
  return alis_open_iam_v1_group_pb.ListGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_alis_open_iam_v1_SyncGroupRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_group_pb.SyncGroupRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.SyncGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_SyncGroupRequest(buffer_arg) {
  return alis_open_iam_v1_group_pb.SyncGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_SyncGroupResponse(arg) {
  if (!(arg instanceof alis_open_iam_v1_group_pb.SyncGroupResponse)) {
    throw new Error('Expected argument of type alis.open.iam.v1.SyncGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_SyncGroupResponse(buffer_arg) {
  return alis_open_iam_v1_group_pb.SyncGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_UpdateGroupRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_group_pb.UpdateGroupRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.UpdateGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_UpdateGroupRequest(buffer_arg) {
  return alis_open_iam_v1_group_pb.UpdateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// GroupsService provides RPCs for managing group resources.
var GroupsServiceService = exports.GroupsServiceService = {
  // Gets the IAM policy for a resource implemented in this service.
getIamPolicy: {
    path: '/alis.open.iam.v1.GroupsService/GetIamPolicy',
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
    path: '/alis.open.iam.v1.GroupsService/SetIamPolicy',
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
    path: '/alis.open.iam.v1.GroupsService/TestIamPermissions',
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
    path: '/alis.open.iam.v1.GroupsService/AddIamBindings',
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
    path: '/alis.open.iam.v1.GroupsService/RemoveIamBindings',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Gets information about a Group.
getGroup: {
    path: '/alis.open.iam.v1.GroupsService/GetGroup',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_group_pb.GetGroupRequest,
    responseType: alis_open_iam_v1_group_pb.Group,
    requestSerialize: serialize_alis_open_iam_v1_GetGroupRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_GetGroupRequest,
    responseSerialize: serialize_alis_open_iam_v1_Group,
    responseDeserialize: deserialize_alis_open_iam_v1_Group,
  },
  // Creates a new Group.
createGroup: {
    path: '/alis.open.iam.v1.GroupsService/CreateGroup',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_group_pb.CreateGroupRequest,
    responseType: alis_open_iam_v1_group_pb.Group,
    requestSerialize: serialize_alis_open_iam_v1_CreateGroupRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_CreateGroupRequest,
    responseSerialize: serialize_alis_open_iam_v1_Group,
    responseDeserialize: deserialize_alis_open_iam_v1_Group,
  },
  // Updates a Group.
updateGroup: {
    path: '/alis.open.iam.v1.GroupsService/UpdateGroup',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_group_pb.UpdateGroupRequest,
    responseType: alis_open_iam_v1_group_pb.Group,
    requestSerialize: serialize_alis_open_iam_v1_UpdateGroupRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_UpdateGroupRequest,
    responseSerialize: serialize_alis_open_iam_v1_Group,
    responseDeserialize: deserialize_alis_open_iam_v1_Group,
  },
  // Deletes a Group.
deleteGroup: {
    path: '/alis.open.iam.v1.GroupsService/DeleteGroup',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_group_pb.DeleteGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_open_iam_v1_DeleteGroupRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_DeleteGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists Groups. Results are sorted by name, ascending.
listGroups: {
    path: '/alis.open.iam.v1.GroupsService/ListGroups',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_group_pb.ListGroupsRequest,
    responseType: alis_open_iam_v1_group_pb.ListGroupsResponse,
    requestSerialize: serialize_alis_open_iam_v1_ListGroupsRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_ListGroupsRequest,
    responseSerialize: serialize_alis_open_iam_v1_ListGroupsResponse,
    responseDeserialize: deserialize_alis_open_iam_v1_ListGroupsResponse,
  },
  // Syncs the specified group to its list of users
syncGroup: {
    path: '/alis.open.iam.v1.GroupsService/SyncGroup',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_group_pb.SyncGroupRequest,
    responseType: alis_open_iam_v1_group_pb.SyncGroupResponse,
    requestSerialize: serialize_alis_open_iam_v1_SyncGroupRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_SyncGroupRequest,
    responseSerialize: serialize_alis_open_iam_v1_SyncGroupResponse,
    responseDeserialize: deserialize_alis_open_iam_v1_SyncGroupResponse,
  },
};

exports.GroupsServiceClient = grpc.makeGenericClientConstructor(GroupsServiceService, 'GroupsService');
