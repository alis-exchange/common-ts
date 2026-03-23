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
var google_logging_v2_logging_config_pb = require('../../../google/logging/v2/logging_config_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../google/api/resource_pb.js');
var google_longrunning_operations_pb = require('../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_logging_v2_CmekSettings(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.CmekSettings)) {
    throw new Error('Expected argument of type google.logging.v2.CmekSettings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_CmekSettings(buffer_arg) {
  return google_logging_v2_logging_config_pb.CmekSettings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_CopyLogEntriesRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.CopyLogEntriesRequest)) {
    throw new Error('Expected argument of type google.logging.v2.CopyLogEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_CopyLogEntriesRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.CopyLogEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_CreateBucketRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.CreateBucketRequest)) {
    throw new Error('Expected argument of type google.logging.v2.CreateBucketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_CreateBucketRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.CreateBucketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_CreateExclusionRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.CreateExclusionRequest)) {
    throw new Error('Expected argument of type google.logging.v2.CreateExclusionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_CreateExclusionRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.CreateExclusionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_CreateSinkRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.CreateSinkRequest)) {
    throw new Error('Expected argument of type google.logging.v2.CreateSinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_CreateSinkRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.CreateSinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_CreateViewRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.CreateViewRequest)) {
    throw new Error('Expected argument of type google.logging.v2.CreateViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_CreateViewRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.CreateViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_DeleteBucketRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.DeleteBucketRequest)) {
    throw new Error('Expected argument of type google.logging.v2.DeleteBucketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_DeleteBucketRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.DeleteBucketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_DeleteExclusionRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.DeleteExclusionRequest)) {
    throw new Error('Expected argument of type google.logging.v2.DeleteExclusionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_DeleteExclusionRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.DeleteExclusionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_DeleteSinkRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.DeleteSinkRequest)) {
    throw new Error('Expected argument of type google.logging.v2.DeleteSinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_DeleteSinkRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.DeleteSinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_DeleteViewRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.DeleteViewRequest)) {
    throw new Error('Expected argument of type google.logging.v2.DeleteViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_DeleteViewRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.DeleteViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_GetBucketRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.GetBucketRequest)) {
    throw new Error('Expected argument of type google.logging.v2.GetBucketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_GetBucketRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.GetBucketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_GetCmekSettingsRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.GetCmekSettingsRequest)) {
    throw new Error('Expected argument of type google.logging.v2.GetCmekSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_GetCmekSettingsRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.GetCmekSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_GetExclusionRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.GetExclusionRequest)) {
    throw new Error('Expected argument of type google.logging.v2.GetExclusionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_GetExclusionRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.GetExclusionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_GetSettingsRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.GetSettingsRequest)) {
    throw new Error('Expected argument of type google.logging.v2.GetSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_GetSettingsRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.GetSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_GetSinkRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.GetSinkRequest)) {
    throw new Error('Expected argument of type google.logging.v2.GetSinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_GetSinkRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.GetSinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_GetViewRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.GetViewRequest)) {
    throw new Error('Expected argument of type google.logging.v2.GetViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_GetViewRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.GetViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListBucketsRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListBucketsRequest)) {
    throw new Error('Expected argument of type google.logging.v2.ListBucketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListBucketsRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListBucketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListBucketsResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListBucketsResponse)) {
    throw new Error('Expected argument of type google.logging.v2.ListBucketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListBucketsResponse(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListBucketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListExclusionsRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListExclusionsRequest)) {
    throw new Error('Expected argument of type google.logging.v2.ListExclusionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListExclusionsRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListExclusionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListExclusionsResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListExclusionsResponse)) {
    throw new Error('Expected argument of type google.logging.v2.ListExclusionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListExclusionsResponse(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListExclusionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListSinksRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListSinksRequest)) {
    throw new Error('Expected argument of type google.logging.v2.ListSinksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListSinksRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListSinksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListSinksResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListSinksResponse)) {
    throw new Error('Expected argument of type google.logging.v2.ListSinksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListSinksResponse(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListSinksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListViewsRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListViewsRequest)) {
    throw new Error('Expected argument of type google.logging.v2.ListViewsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListViewsRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListViewsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListViewsResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.ListViewsResponse)) {
    throw new Error('Expected argument of type google.logging.v2.ListViewsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListViewsResponse(buffer_arg) {
  return google_logging_v2_logging_config_pb.ListViewsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_LogBucket(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.LogBucket)) {
    throw new Error('Expected argument of type google.logging.v2.LogBucket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_LogBucket(buffer_arg) {
  return google_logging_v2_logging_config_pb.LogBucket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_LogExclusion(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.LogExclusion)) {
    throw new Error('Expected argument of type google.logging.v2.LogExclusion');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_LogExclusion(buffer_arg) {
  return google_logging_v2_logging_config_pb.LogExclusion.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_LogSink(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.LogSink)) {
    throw new Error('Expected argument of type google.logging.v2.LogSink');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_LogSink(buffer_arg) {
  return google_logging_v2_logging_config_pb.LogSink.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_LogView(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.LogView)) {
    throw new Error('Expected argument of type google.logging.v2.LogView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_LogView(buffer_arg) {
  return google_logging_v2_logging_config_pb.LogView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_Settings(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.Settings)) {
    throw new Error('Expected argument of type google.logging.v2.Settings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_Settings(buffer_arg) {
  return google_logging_v2_logging_config_pb.Settings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_UndeleteBucketRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.UndeleteBucketRequest)) {
    throw new Error('Expected argument of type google.logging.v2.UndeleteBucketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_UndeleteBucketRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.UndeleteBucketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_UpdateBucketRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.UpdateBucketRequest)) {
    throw new Error('Expected argument of type google.logging.v2.UpdateBucketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_UpdateBucketRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.UpdateBucketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_UpdateCmekSettingsRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.UpdateCmekSettingsRequest)) {
    throw new Error('Expected argument of type google.logging.v2.UpdateCmekSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_UpdateCmekSettingsRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.UpdateCmekSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_UpdateExclusionRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.UpdateExclusionRequest)) {
    throw new Error('Expected argument of type google.logging.v2.UpdateExclusionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_UpdateExclusionRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.UpdateExclusionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_UpdateSettingsRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.UpdateSettingsRequest)) {
    throw new Error('Expected argument of type google.logging.v2.UpdateSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_UpdateSettingsRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.UpdateSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_UpdateSinkRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.UpdateSinkRequest)) {
    throw new Error('Expected argument of type google.logging.v2.UpdateSinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_UpdateSinkRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.UpdateSinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_UpdateViewRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_config_pb.UpdateViewRequest)) {
    throw new Error('Expected argument of type google.logging.v2.UpdateViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_UpdateViewRequest(buffer_arg) {
  return google_logging_v2_logging_config_pb.UpdateViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for configuring sinks used to route log entries.
var ConfigServiceV2Service = exports.ConfigServiceV2Service = {
  // Lists log buckets.
listBuckets: {
    path: '/google.logging.v2.ConfigServiceV2/ListBuckets',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.ListBucketsRequest,
    responseType: google_logging_v2_logging_config_pb.ListBucketsResponse,
    requestSerialize: serialize_google_logging_v2_ListBucketsRequest,
    requestDeserialize: deserialize_google_logging_v2_ListBucketsRequest,
    responseSerialize: serialize_google_logging_v2_ListBucketsResponse,
    responseDeserialize: deserialize_google_logging_v2_ListBucketsResponse,
  },
  // Gets a log bucket.
getBucket: {
    path: '/google.logging.v2.ConfigServiceV2/GetBucket',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.GetBucketRequest,
    responseType: google_logging_v2_logging_config_pb.LogBucket,
    requestSerialize: serialize_google_logging_v2_GetBucketRequest,
    requestDeserialize: deserialize_google_logging_v2_GetBucketRequest,
    responseSerialize: serialize_google_logging_v2_LogBucket,
    responseDeserialize: deserialize_google_logging_v2_LogBucket,
  },
  // Creates a log bucket that can be used to store log entries. After a bucket
// has been created, the bucket's location cannot be changed.
createBucket: {
    path: '/google.logging.v2.ConfigServiceV2/CreateBucket',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.CreateBucketRequest,
    responseType: google_logging_v2_logging_config_pb.LogBucket,
    requestSerialize: serialize_google_logging_v2_CreateBucketRequest,
    requestDeserialize: deserialize_google_logging_v2_CreateBucketRequest,
    responseSerialize: serialize_google_logging_v2_LogBucket,
    responseDeserialize: deserialize_google_logging_v2_LogBucket,
  },
  // Updates a log bucket. This method replaces the following fields in the
// existing bucket with values from the new bucket: `retention_period`
//
// If the retention period is decreased and the bucket is locked,
// `FAILED_PRECONDITION` will be returned.
//
// If the bucket has a `lifecycle_state` of `DELETE_REQUESTED`, then
// `FAILED_PRECONDITION` will be returned.
//
// After a bucket has been created, the bucket's location cannot be changed.
updateBucket: {
    path: '/google.logging.v2.ConfigServiceV2/UpdateBucket',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.UpdateBucketRequest,
    responseType: google_logging_v2_logging_config_pb.LogBucket,
    requestSerialize: serialize_google_logging_v2_UpdateBucketRequest,
    requestDeserialize: deserialize_google_logging_v2_UpdateBucketRequest,
    responseSerialize: serialize_google_logging_v2_LogBucket,
    responseDeserialize: deserialize_google_logging_v2_LogBucket,
  },
  // Deletes a log bucket.
//
// Changes the bucket's `lifecycle_state` to the `DELETE_REQUESTED` state.
// After 7 days, the bucket will be purged and all log entries in the bucket
// will be permanently deleted.
deleteBucket: {
    path: '/google.logging.v2.ConfigServiceV2/DeleteBucket',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.DeleteBucketRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_logging_v2_DeleteBucketRequest,
    requestDeserialize: deserialize_google_logging_v2_DeleteBucketRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Undeletes a log bucket. A bucket that has been deleted can be undeleted
// within the grace period of 7 days.
undeleteBucket: {
    path: '/google.logging.v2.ConfigServiceV2/UndeleteBucket',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.UndeleteBucketRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_logging_v2_UndeleteBucketRequest,
    requestDeserialize: deserialize_google_logging_v2_UndeleteBucketRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists views on a log bucket.
listViews: {
    path: '/google.logging.v2.ConfigServiceV2/ListViews',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.ListViewsRequest,
    responseType: google_logging_v2_logging_config_pb.ListViewsResponse,
    requestSerialize: serialize_google_logging_v2_ListViewsRequest,
    requestDeserialize: deserialize_google_logging_v2_ListViewsRequest,
    responseSerialize: serialize_google_logging_v2_ListViewsResponse,
    responseDeserialize: deserialize_google_logging_v2_ListViewsResponse,
  },
  // Gets a view on a log bucket..
getView: {
    path: '/google.logging.v2.ConfigServiceV2/GetView',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.GetViewRequest,
    responseType: google_logging_v2_logging_config_pb.LogView,
    requestSerialize: serialize_google_logging_v2_GetViewRequest,
    requestDeserialize: deserialize_google_logging_v2_GetViewRequest,
    responseSerialize: serialize_google_logging_v2_LogView,
    responseDeserialize: deserialize_google_logging_v2_LogView,
  },
  // Creates a view over log entries in a log bucket. A bucket may contain a
// maximum of 30 views.
createView: {
    path: '/google.logging.v2.ConfigServiceV2/CreateView',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.CreateViewRequest,
    responseType: google_logging_v2_logging_config_pb.LogView,
    requestSerialize: serialize_google_logging_v2_CreateViewRequest,
    requestDeserialize: deserialize_google_logging_v2_CreateViewRequest,
    responseSerialize: serialize_google_logging_v2_LogView,
    responseDeserialize: deserialize_google_logging_v2_LogView,
  },
  // Updates a view on a log bucket. This method replaces the following fields
// in the existing view with values from the new view: `filter`.
// If an `UNAVAILABLE` error is returned, this indicates that system is not in
// a state where it can update the view. If this occurs, please try again in a
// few minutes.
updateView: {
    path: '/google.logging.v2.ConfigServiceV2/UpdateView',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.UpdateViewRequest,
    responseType: google_logging_v2_logging_config_pb.LogView,
    requestSerialize: serialize_google_logging_v2_UpdateViewRequest,
    requestDeserialize: deserialize_google_logging_v2_UpdateViewRequest,
    responseSerialize: serialize_google_logging_v2_LogView,
    responseDeserialize: deserialize_google_logging_v2_LogView,
  },
  // Deletes a view on a log bucket.
// If an `UNAVAILABLE` error is returned, this indicates that system is not in
// a state where it can delete the view. If this occurs, please try again in a
// few minutes.
deleteView: {
    path: '/google.logging.v2.ConfigServiceV2/DeleteView',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.DeleteViewRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_logging_v2_DeleteViewRequest,
    requestDeserialize: deserialize_google_logging_v2_DeleteViewRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists sinks.
listSinks: {
    path: '/google.logging.v2.ConfigServiceV2/ListSinks',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.ListSinksRequest,
    responseType: google_logging_v2_logging_config_pb.ListSinksResponse,
    requestSerialize: serialize_google_logging_v2_ListSinksRequest,
    requestDeserialize: deserialize_google_logging_v2_ListSinksRequest,
    responseSerialize: serialize_google_logging_v2_ListSinksResponse,
    responseDeserialize: deserialize_google_logging_v2_ListSinksResponse,
  },
  // Gets a sink.
getSink: {
    path: '/google.logging.v2.ConfigServiceV2/GetSink',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.GetSinkRequest,
    responseType: google_logging_v2_logging_config_pb.LogSink,
    requestSerialize: serialize_google_logging_v2_GetSinkRequest,
    requestDeserialize: deserialize_google_logging_v2_GetSinkRequest,
    responseSerialize: serialize_google_logging_v2_LogSink,
    responseDeserialize: deserialize_google_logging_v2_LogSink,
  },
  // Creates a sink that exports specified log entries to a destination. The
// export of newly-ingested log entries begins immediately, unless the sink's
// `writer_identity` is not permitted to write to the destination. A sink can
// export log entries only from the resource owning the sink.
createSink: {
    path: '/google.logging.v2.ConfigServiceV2/CreateSink',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.CreateSinkRequest,
    responseType: google_logging_v2_logging_config_pb.LogSink,
    requestSerialize: serialize_google_logging_v2_CreateSinkRequest,
    requestDeserialize: deserialize_google_logging_v2_CreateSinkRequest,
    responseSerialize: serialize_google_logging_v2_LogSink,
    responseDeserialize: deserialize_google_logging_v2_LogSink,
  },
  // Updates a sink. This method replaces the following fields in the existing
// sink with values from the new sink: `destination`, and `filter`.
//
// The updated sink might also have a new `writer_identity`; see the
// `unique_writer_identity` field.
updateSink: {
    path: '/google.logging.v2.ConfigServiceV2/UpdateSink',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.UpdateSinkRequest,
    responseType: google_logging_v2_logging_config_pb.LogSink,
    requestSerialize: serialize_google_logging_v2_UpdateSinkRequest,
    requestDeserialize: deserialize_google_logging_v2_UpdateSinkRequest,
    responseSerialize: serialize_google_logging_v2_LogSink,
    responseDeserialize: deserialize_google_logging_v2_LogSink,
  },
  // Deletes a sink. If the sink has a unique `writer_identity`, then that
// service account is also deleted.
deleteSink: {
    path: '/google.logging.v2.ConfigServiceV2/DeleteSink',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.DeleteSinkRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_logging_v2_DeleteSinkRequest,
    requestDeserialize: deserialize_google_logging_v2_DeleteSinkRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists all the exclusions on the _Default sink in a parent resource.
listExclusions: {
    path: '/google.logging.v2.ConfigServiceV2/ListExclusions',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.ListExclusionsRequest,
    responseType: google_logging_v2_logging_config_pb.ListExclusionsResponse,
    requestSerialize: serialize_google_logging_v2_ListExclusionsRequest,
    requestDeserialize: deserialize_google_logging_v2_ListExclusionsRequest,
    responseSerialize: serialize_google_logging_v2_ListExclusionsResponse,
    responseDeserialize: deserialize_google_logging_v2_ListExclusionsResponse,
  },
  // Gets the description of an exclusion in the _Default sink.
getExclusion: {
    path: '/google.logging.v2.ConfigServiceV2/GetExclusion',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.GetExclusionRequest,
    responseType: google_logging_v2_logging_config_pb.LogExclusion,
    requestSerialize: serialize_google_logging_v2_GetExclusionRequest,
    requestDeserialize: deserialize_google_logging_v2_GetExclusionRequest,
    responseSerialize: serialize_google_logging_v2_LogExclusion,
    responseDeserialize: deserialize_google_logging_v2_LogExclusion,
  },
  // Creates a new exclusion in the _Default sink in a specified parent
// resource. Only log entries belonging to that resource can be excluded. You
// can have up to 10 exclusions in a resource.
createExclusion: {
    path: '/google.logging.v2.ConfigServiceV2/CreateExclusion',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.CreateExclusionRequest,
    responseType: google_logging_v2_logging_config_pb.LogExclusion,
    requestSerialize: serialize_google_logging_v2_CreateExclusionRequest,
    requestDeserialize: deserialize_google_logging_v2_CreateExclusionRequest,
    responseSerialize: serialize_google_logging_v2_LogExclusion,
    responseDeserialize: deserialize_google_logging_v2_LogExclusion,
  },
  // Changes one or more properties of an existing exclusion in the _Default
// sink.
updateExclusion: {
    path: '/google.logging.v2.ConfigServiceV2/UpdateExclusion',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.UpdateExclusionRequest,
    responseType: google_logging_v2_logging_config_pb.LogExclusion,
    requestSerialize: serialize_google_logging_v2_UpdateExclusionRequest,
    requestDeserialize: deserialize_google_logging_v2_UpdateExclusionRequest,
    responseSerialize: serialize_google_logging_v2_LogExclusion,
    responseDeserialize: deserialize_google_logging_v2_LogExclusion,
  },
  // Deletes an exclusion in the _Default sink.
deleteExclusion: {
    path: '/google.logging.v2.ConfigServiceV2/DeleteExclusion',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.DeleteExclusionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_logging_v2_DeleteExclusionRequest,
    requestDeserialize: deserialize_google_logging_v2_DeleteExclusionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets the Logging CMEK settings for the given resource.
//
// Note: CMEK for the Log Router can be configured for Google Cloud projects,
// folders, organizations and billing accounts. Once configured for an
// organization, it applies to all projects and folders in the Google Cloud
// organization.
//
// See [Enabling CMEK for Log
// Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
// for more information.
getCmekSettings: {
    path: '/google.logging.v2.ConfigServiceV2/GetCmekSettings',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.GetCmekSettingsRequest,
    responseType: google_logging_v2_logging_config_pb.CmekSettings,
    requestSerialize: serialize_google_logging_v2_GetCmekSettingsRequest,
    requestDeserialize: deserialize_google_logging_v2_GetCmekSettingsRequest,
    responseSerialize: serialize_google_logging_v2_CmekSettings,
    responseDeserialize: deserialize_google_logging_v2_CmekSettings,
  },
  // Updates the Log Router CMEK settings for the given resource.
//
// Note: CMEK for the Log Router can currently only be configured for Google
// Cloud organizations. Once configured, it applies to all projects and
// folders in the Google Cloud organization.
//
// [UpdateCmekSettings][google.logging.v2.ConfigServiceV2.UpdateCmekSettings]
// will fail if 1) `kms_key_name` is invalid, or 2) the associated service
// account does not have the required
// `roles/cloudkms.cryptoKeyEncrypterDecrypter` role assigned for the key, or
// 3) access to the key is disabled.
//
// See [Enabling CMEK for Log
// Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
// for more information.
updateCmekSettings: {
    path: '/google.logging.v2.ConfigServiceV2/UpdateCmekSettings',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.UpdateCmekSettingsRequest,
    responseType: google_logging_v2_logging_config_pb.CmekSettings,
    requestSerialize: serialize_google_logging_v2_UpdateCmekSettingsRequest,
    requestDeserialize: deserialize_google_logging_v2_UpdateCmekSettingsRequest,
    responseSerialize: serialize_google_logging_v2_CmekSettings,
    responseDeserialize: deserialize_google_logging_v2_CmekSettings,
  },
  // Gets the Log Router settings for the given resource.
//
// Note: Settings for the Log Router can be get for Google Cloud projects,
// folders, organizations and billing accounts. Currently it can only be
// configured for organizations. Once configured for an organization, it
// applies to all projects and folders in the Google Cloud organization.
//
// See [Enabling CMEK for Log
// Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
// for more information.
getSettings: {
    path: '/google.logging.v2.ConfigServiceV2/GetSettings',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.GetSettingsRequest,
    responseType: google_logging_v2_logging_config_pb.Settings,
    requestSerialize: serialize_google_logging_v2_GetSettingsRequest,
    requestDeserialize: deserialize_google_logging_v2_GetSettingsRequest,
    responseSerialize: serialize_google_logging_v2_Settings,
    responseDeserialize: deserialize_google_logging_v2_Settings,
  },
  // Updates the Log Router settings for the given resource.
//
// Note: Settings for the Log Router can currently only be configured for
// Google Cloud organizations. Once configured, it applies to all projects and
// folders in the Google Cloud organization.
//
// [UpdateSettings][google.logging.v2.ConfigServiceV2.UpdateSettings]
// will fail if 1) `kms_key_name` is invalid, or 2) the associated service
// account does not have the required
// `roles/cloudkms.cryptoKeyEncrypterDecrypter` role assigned for the key, or
// 3) access to the key is disabled. 4) `location_id` is not supported by
// Logging. 5) `location_id` violate OrgPolicy.
//
// See [Enabling CMEK for Log
// Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
// for more information.
updateSettings: {
    path: '/google.logging.v2.ConfigServiceV2/UpdateSettings',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.UpdateSettingsRequest,
    responseType: google_logging_v2_logging_config_pb.Settings,
    requestSerialize: serialize_google_logging_v2_UpdateSettingsRequest,
    requestDeserialize: deserialize_google_logging_v2_UpdateSettingsRequest,
    responseSerialize: serialize_google_logging_v2_Settings,
    responseDeserialize: deserialize_google_logging_v2_Settings,
  },
  // Copies a set of log entries from a log bucket to a Cloud Storage bucket.
copyLogEntries: {
    path: '/google.logging.v2.ConfigServiceV2/CopyLogEntries',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_config_pb.CopyLogEntriesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_logging_v2_CopyLogEntriesRequest,
    requestDeserialize: deserialize_google_logging_v2_CopyLogEntriesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.ConfigServiceV2Client = grpc.makeGenericClientConstructor(ConfigServiceV2Service, 'ConfigServiceV2');
