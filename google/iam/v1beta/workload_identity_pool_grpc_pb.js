// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2020 Google LLC
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
var google_iam_v1beta_workload_identity_pool_pb = require('../../../google/iam/v1beta/workload_identity_pool_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../google/api/resource_pb.js');
var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_iam_v1beta_CreateWorkloadIdentityPoolProviderRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.CreateWorkloadIdentityPoolProviderRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.CreateWorkloadIdentityPoolProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_CreateWorkloadIdentityPoolProviderRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.CreateWorkloadIdentityPoolProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_CreateWorkloadIdentityPoolRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.CreateWorkloadIdentityPoolRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.CreateWorkloadIdentityPoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_CreateWorkloadIdentityPoolRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.CreateWorkloadIdentityPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_DeleteWorkloadIdentityPoolProviderRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.DeleteWorkloadIdentityPoolProviderRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.DeleteWorkloadIdentityPoolProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_DeleteWorkloadIdentityPoolProviderRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.DeleteWorkloadIdentityPoolProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_DeleteWorkloadIdentityPoolRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.DeleteWorkloadIdentityPoolRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.DeleteWorkloadIdentityPoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_DeleteWorkloadIdentityPoolRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.DeleteWorkloadIdentityPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_GetWorkloadIdentityPoolProviderRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.GetWorkloadIdentityPoolProviderRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.GetWorkloadIdentityPoolProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_GetWorkloadIdentityPoolProviderRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.GetWorkloadIdentityPoolProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_GetWorkloadIdentityPoolRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.GetWorkloadIdentityPoolRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.GetWorkloadIdentityPoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_GetWorkloadIdentityPoolRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.GetWorkloadIdentityPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_ListWorkloadIdentityPoolProvidersRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolProvidersRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.ListWorkloadIdentityPoolProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_ListWorkloadIdentityPoolProvidersRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_ListWorkloadIdentityPoolProvidersResponse(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolProvidersResponse)) {
    throw new Error('Expected argument of type google.iam.v1beta.ListWorkloadIdentityPoolProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_ListWorkloadIdentityPoolProvidersResponse(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_ListWorkloadIdentityPoolsRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolsRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.ListWorkloadIdentityPoolsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_ListWorkloadIdentityPoolsRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_ListWorkloadIdentityPoolsResponse(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolsResponse)) {
    throw new Error('Expected argument of type google.iam.v1beta.ListWorkloadIdentityPoolsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_ListWorkloadIdentityPoolsResponse(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_UndeleteWorkloadIdentityPoolProviderRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.UndeleteWorkloadIdentityPoolProviderRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.UndeleteWorkloadIdentityPoolProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_UndeleteWorkloadIdentityPoolProviderRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.UndeleteWorkloadIdentityPoolProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_UndeleteWorkloadIdentityPoolRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.UndeleteWorkloadIdentityPoolRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.UndeleteWorkloadIdentityPoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_UndeleteWorkloadIdentityPoolRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.UndeleteWorkloadIdentityPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_UpdateWorkloadIdentityPoolProviderRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.UpdateWorkloadIdentityPoolProviderRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.UpdateWorkloadIdentityPoolProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_UpdateWorkloadIdentityPoolProviderRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.UpdateWorkloadIdentityPoolProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_UpdateWorkloadIdentityPoolRequest(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.UpdateWorkloadIdentityPoolRequest)) {
    throw new Error('Expected argument of type google.iam.v1beta.UpdateWorkloadIdentityPoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_UpdateWorkloadIdentityPoolRequest(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.UpdateWorkloadIdentityPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_WorkloadIdentityPool(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPool)) {
    throw new Error('Expected argument of type google.iam.v1beta.WorkloadIdentityPool');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_WorkloadIdentityPool(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPool.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1beta_WorkloadIdentityPoolProvider(arg) {
  if (!(arg instanceof google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPoolProvider)) {
    throw new Error('Expected argument of type google.iam.v1beta.WorkloadIdentityPoolProvider');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1beta_WorkloadIdentityPoolProvider(buffer_arg) {
  return google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPoolProvider.deserializeBinary(new Uint8Array(buffer_arg));
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


// Manages WorkloadIdentityPools.
var WorkloadIdentityPoolsService = exports.WorkloadIdentityPoolsService = {
  // Lists all non-deleted
// [WorkloadIdentityPool][google.iam.v1beta.WorkloadIdentityPool]s in a
// project. If `show_deleted` is set to `true`, then deleted pools are also
// listed.
listWorkloadIdentityPools: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/ListWorkloadIdentityPools',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolsRequest,
    responseType: google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolsResponse,
    requestSerialize: serialize_google_iam_v1beta_ListWorkloadIdentityPoolsRequest,
    requestDeserialize: deserialize_google_iam_v1beta_ListWorkloadIdentityPoolsRequest,
    responseSerialize: serialize_google_iam_v1beta_ListWorkloadIdentityPoolsResponse,
    responseDeserialize: deserialize_google_iam_v1beta_ListWorkloadIdentityPoolsResponse,
  },
  // Gets an individual
// [WorkloadIdentityPool][google.iam.v1beta.WorkloadIdentityPool].
getWorkloadIdentityPool: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/GetWorkloadIdentityPool',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.GetWorkloadIdentityPoolRequest,
    responseType: google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPool,
    requestSerialize: serialize_google_iam_v1beta_GetWorkloadIdentityPoolRequest,
    requestDeserialize: deserialize_google_iam_v1beta_GetWorkloadIdentityPoolRequest,
    responseSerialize: serialize_google_iam_v1beta_WorkloadIdentityPool,
    responseDeserialize: deserialize_google_iam_v1beta_WorkloadIdentityPool,
  },
  // Creates a new
// [WorkloadIdentityPool][google.iam.v1beta.WorkloadIdentityPool].
//
// You cannot reuse the name of a deleted pool until 30 days after deletion.
createWorkloadIdentityPool: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/CreateWorkloadIdentityPool',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.CreateWorkloadIdentityPoolRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_iam_v1beta_CreateWorkloadIdentityPoolRequest,
    requestDeserialize: deserialize_google_iam_v1beta_CreateWorkloadIdentityPoolRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates an existing
// [WorkloadIdentityPool][google.iam.v1beta.WorkloadIdentityPool].
updateWorkloadIdentityPool: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/UpdateWorkloadIdentityPool',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.UpdateWorkloadIdentityPoolRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_iam_v1beta_UpdateWorkloadIdentityPoolRequest,
    requestDeserialize: deserialize_google_iam_v1beta_UpdateWorkloadIdentityPoolRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a
// [WorkloadIdentityPool][google.iam.v1beta.WorkloadIdentityPool].
//
// You cannot use a deleted pool to exchange external
// credentials for Google Cloud credentials. However, deletion does
// not revoke credentials that have already been issued.
// Credentials issued for a deleted pool do not grant access to resources.
// If the pool is undeleted, and the credentials are not expired, they
// grant access again.
// You can undelete a pool for 30 days. After 30 days, deletion is
// permanent.
// You cannot update deleted pools. However, you can view and list them.
deleteWorkloadIdentityPool: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/DeleteWorkloadIdentityPool',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.DeleteWorkloadIdentityPoolRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_iam_v1beta_DeleteWorkloadIdentityPoolRequest,
    requestDeserialize: deserialize_google_iam_v1beta_DeleteWorkloadIdentityPoolRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Undeletes a [WorkloadIdentityPool][google.iam.v1beta.WorkloadIdentityPool],
// as long as it was deleted fewer than 30 days ago.
undeleteWorkloadIdentityPool: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/UndeleteWorkloadIdentityPool',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.UndeleteWorkloadIdentityPoolRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_iam_v1beta_UndeleteWorkloadIdentityPoolRequest,
    requestDeserialize: deserialize_google_iam_v1beta_UndeleteWorkloadIdentityPoolRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists all non-deleted
// [WorkloadIdentityPoolProvider][google.iam.v1beta.WorkloadIdentityPoolProvider]s
// in a [WorkloadIdentityPool][google.iam.v1beta.WorkloadIdentityPool].
// If `show_deleted` is set to `true`, then deleted providers are also listed.
listWorkloadIdentityPoolProviders: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/ListWorkloadIdentityPoolProviders',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolProvidersRequest,
    responseType: google_iam_v1beta_workload_identity_pool_pb.ListWorkloadIdentityPoolProvidersResponse,
    requestSerialize: serialize_google_iam_v1beta_ListWorkloadIdentityPoolProvidersRequest,
    requestDeserialize: deserialize_google_iam_v1beta_ListWorkloadIdentityPoolProvidersRequest,
    responseSerialize: serialize_google_iam_v1beta_ListWorkloadIdentityPoolProvidersResponse,
    responseDeserialize: deserialize_google_iam_v1beta_ListWorkloadIdentityPoolProvidersResponse,
  },
  // Gets an individual
// [WorkloadIdentityPoolProvider][google.iam.v1beta.WorkloadIdentityPoolProvider].
getWorkloadIdentityPoolProvider: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/GetWorkloadIdentityPoolProvider',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.GetWorkloadIdentityPoolProviderRequest,
    responseType: google_iam_v1beta_workload_identity_pool_pb.WorkloadIdentityPoolProvider,
    requestSerialize: serialize_google_iam_v1beta_GetWorkloadIdentityPoolProviderRequest,
    requestDeserialize: deserialize_google_iam_v1beta_GetWorkloadIdentityPoolProviderRequest,
    responseSerialize: serialize_google_iam_v1beta_WorkloadIdentityPoolProvider,
    responseDeserialize: deserialize_google_iam_v1beta_WorkloadIdentityPoolProvider,
  },
  // Creates a new
// [WorkloadIdentityPoolProvider][google.iam.v1beta.WorkloadIdentityProvider]
// in a [WorkloadIdentityPool][google.iam.v1beta.WorkloadIdentityPool].
//
// You cannot reuse the name of a deleted provider until 30 days after
// deletion.
createWorkloadIdentityPoolProvider: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/CreateWorkloadIdentityPoolProvider',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.CreateWorkloadIdentityPoolProviderRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_iam_v1beta_CreateWorkloadIdentityPoolProviderRequest,
    requestDeserialize: deserialize_google_iam_v1beta_CreateWorkloadIdentityPoolProviderRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates an existing
// [WorkloadIdentityPoolProvider][google.iam.v1beta.WorkloadIdentityProvider].
updateWorkloadIdentityPoolProvider: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/UpdateWorkloadIdentityPoolProvider',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.UpdateWorkloadIdentityPoolProviderRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_iam_v1beta_UpdateWorkloadIdentityPoolProviderRequest,
    requestDeserialize: deserialize_google_iam_v1beta_UpdateWorkloadIdentityPoolProviderRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a
// [WorkloadIdentityPoolProvider][google.iam.v1beta.WorkloadIdentityProvider].
// Deleting a provider does not revoke credentials that have already been
// issued; they continue to grant access.
// You can undelete a provider for 30 days. After 30 days, deletion is
// permanent.
// You cannot update deleted providers. However, you can view and list them.
deleteWorkloadIdentityPoolProvider: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/DeleteWorkloadIdentityPoolProvider',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.DeleteWorkloadIdentityPoolProviderRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_iam_v1beta_DeleteWorkloadIdentityPoolProviderRequest,
    requestDeserialize: deserialize_google_iam_v1beta_DeleteWorkloadIdentityPoolProviderRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Undeletes a
// [WorkloadIdentityPoolProvider][google.iam.v1beta.WorkloadIdentityProvider],
// as long as it was deleted fewer than 30 days ago.
undeleteWorkloadIdentityPoolProvider: {
    path: '/google.iam.v1beta.WorkloadIdentityPools/UndeleteWorkloadIdentityPoolProvider',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1beta_workload_identity_pool_pb.UndeleteWorkloadIdentityPoolProviderRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_iam_v1beta_UndeleteWorkloadIdentityPoolProviderRequest,
    requestDeserialize: deserialize_google_iam_v1beta_UndeleteWorkloadIdentityPoolProviderRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.WorkloadIdentityPoolsClient = grpc.makeGenericClientConstructor(WorkloadIdentityPoolsService, 'WorkloadIdentityPools');
