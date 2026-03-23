// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var google_iam_v2beta_policy_pb = require('../../../google/iam/v2beta/policy_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
var google_iam_v2beta_deny_pb = require('../../../google/iam/v2beta/deny_pb.js');
var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_iam_v2beta_CreatePolicyRequest(arg) {
  if (!(arg instanceof google_iam_v2beta_policy_pb.CreatePolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v2beta.CreatePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v2beta_CreatePolicyRequest(buffer_arg) {
  return google_iam_v2beta_policy_pb.CreatePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v2beta_DeletePolicyRequest(arg) {
  if (!(arg instanceof google_iam_v2beta_policy_pb.DeletePolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v2beta.DeletePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v2beta_DeletePolicyRequest(buffer_arg) {
  return google_iam_v2beta_policy_pb.DeletePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v2beta_GetPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v2beta_policy_pb.GetPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v2beta.GetPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v2beta_GetPolicyRequest(buffer_arg) {
  return google_iam_v2beta_policy_pb.GetPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v2beta_ListPoliciesRequest(arg) {
  if (!(arg instanceof google_iam_v2beta_policy_pb.ListPoliciesRequest)) {
    throw new Error('Expected argument of type google.iam.v2beta.ListPoliciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v2beta_ListPoliciesRequest(buffer_arg) {
  return google_iam_v2beta_policy_pb.ListPoliciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v2beta_ListPoliciesResponse(arg) {
  if (!(arg instanceof google_iam_v2beta_policy_pb.ListPoliciesResponse)) {
    throw new Error('Expected argument of type google.iam.v2beta.ListPoliciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v2beta_ListPoliciesResponse(buffer_arg) {
  return google_iam_v2beta_policy_pb.ListPoliciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v2beta_Policy(arg) {
  if (!(arg instanceof google_iam_v2beta_policy_pb.Policy)) {
    throw new Error('Expected argument of type google.iam.v2beta.Policy');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v2beta_Policy(buffer_arg) {
  return google_iam_v2beta_policy_pb.Policy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v2beta_UpdatePolicyRequest(arg) {
  if (!(arg instanceof google_iam_v2beta_policy_pb.UpdatePolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v2beta.UpdatePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v2beta_UpdatePolicyRequest(buffer_arg) {
  return google_iam_v2beta_policy_pb.UpdatePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// An interface for managing Identity and Access Management (IAM) policies.
var PoliciesService = exports.PoliciesService = {
  // Retrieves the policies of the specified kind that are attached to a
// resource.
//
// The response lists only policy metadata. In particular, policy rules are
// omitted.
listPolicies: {
    path: '/google.iam.v2beta.Policies/ListPolicies',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v2beta_policy_pb.ListPoliciesRequest,
    responseType: google_iam_v2beta_policy_pb.ListPoliciesResponse,
    requestSerialize: serialize_google_iam_v2beta_ListPoliciesRequest,
    requestDeserialize: deserialize_google_iam_v2beta_ListPoliciesRequest,
    responseSerialize: serialize_google_iam_v2beta_ListPoliciesResponse,
    responseDeserialize: deserialize_google_iam_v2beta_ListPoliciesResponse,
  },
  // Gets a policy.
getPolicy: {
    path: '/google.iam.v2beta.Policies/GetPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v2beta_policy_pb.GetPolicyRequest,
    responseType: google_iam_v2beta_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v2beta_GetPolicyRequest,
    requestDeserialize: deserialize_google_iam_v2beta_GetPolicyRequest,
    responseSerialize: serialize_google_iam_v2beta_Policy,
    responseDeserialize: deserialize_google_iam_v2beta_Policy,
  },
  // Creates a policy.
createPolicy: {
    path: '/google.iam.v2beta.Policies/CreatePolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v2beta_policy_pb.CreatePolicyRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_iam_v2beta_CreatePolicyRequest,
    requestDeserialize: deserialize_google_iam_v2beta_CreatePolicyRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates the specified policy.
//
// You can update only the rules and the display name for the policy.
//
// To update a policy, you should use a read-modify-write loop:
//
// 1. Use [GetPolicy][google.iam.v2beta.Policies.GetPolicy] to read the current version of the policy.
// 2. Modify the policy as needed.
// 3. Use `UpdatePolicy` to write the updated policy.
//
// This pattern helps prevent conflicts between concurrent updates.
updatePolicy: {
    path: '/google.iam.v2beta.Policies/UpdatePolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v2beta_policy_pb.UpdatePolicyRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_iam_v2beta_UpdatePolicyRequest,
    requestDeserialize: deserialize_google_iam_v2beta_UpdatePolicyRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a policy. This action is permanent.
deletePolicy: {
    path: '/google.iam.v2beta.Policies/DeletePolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v2beta_policy_pb.DeletePolicyRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_iam_v2beta_DeletePolicyRequest,
    requestDeserialize: deserialize_google_iam_v2beta_DeletePolicyRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.PoliciesClient = grpc.makeGenericClientConstructor(PoliciesService, 'Policies');
