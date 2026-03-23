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
var google_logging_v2_logging_pb = require('../../../google/logging/v2/logging_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
var google_api_monitored_resource_pb = require('../../../google/api/monitored_resource_pb.js');
var google_api_resource_pb = require('../../../google/api/resource_pb.js');
var google_logging_v2_log_entry_pb = require('../../../google/logging/v2/log_entry_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_rpc_status_pb = require('../../../google/rpc/status_pb.js');

function serialize_google_logging_v2_DeleteLogRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_pb.DeleteLogRequest)) {
    throw new Error('Expected argument of type google.logging.v2.DeleteLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_DeleteLogRequest(buffer_arg) {
  return google_logging_v2_logging_pb.DeleteLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListLogEntriesRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_pb.ListLogEntriesRequest)) {
    throw new Error('Expected argument of type google.logging.v2.ListLogEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListLogEntriesRequest(buffer_arg) {
  return google_logging_v2_logging_pb.ListLogEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListLogEntriesResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_pb.ListLogEntriesResponse)) {
    throw new Error('Expected argument of type google.logging.v2.ListLogEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListLogEntriesResponse(buffer_arg) {
  return google_logging_v2_logging_pb.ListLogEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListLogsRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_pb.ListLogsRequest)) {
    throw new Error('Expected argument of type google.logging.v2.ListLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListLogsRequest(buffer_arg) {
  return google_logging_v2_logging_pb.ListLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListLogsResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_pb.ListLogsResponse)) {
    throw new Error('Expected argument of type google.logging.v2.ListLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListLogsResponse(buffer_arg) {
  return google_logging_v2_logging_pb.ListLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListMonitoredResourceDescriptorsRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest)) {
    throw new Error('Expected argument of type google.logging.v2.ListMonitoredResourceDescriptorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListMonitoredResourceDescriptorsRequest(buffer_arg) {
  return google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_ListMonitoredResourceDescriptorsResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse)) {
    throw new Error('Expected argument of type google.logging.v2.ListMonitoredResourceDescriptorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_ListMonitoredResourceDescriptorsResponse(buffer_arg) {
  return google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_TailLogEntriesRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_pb.TailLogEntriesRequest)) {
    throw new Error('Expected argument of type google.logging.v2.TailLogEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_TailLogEntriesRequest(buffer_arg) {
  return google_logging_v2_logging_pb.TailLogEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_TailLogEntriesResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_pb.TailLogEntriesResponse)) {
    throw new Error('Expected argument of type google.logging.v2.TailLogEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_TailLogEntriesResponse(buffer_arg) {
  return google_logging_v2_logging_pb.TailLogEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_WriteLogEntriesRequest(arg) {
  if (!(arg instanceof google_logging_v2_logging_pb.WriteLogEntriesRequest)) {
    throw new Error('Expected argument of type google.logging.v2.WriteLogEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_WriteLogEntriesRequest(buffer_arg) {
  return google_logging_v2_logging_pb.WriteLogEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_logging_v2_WriteLogEntriesResponse(arg) {
  if (!(arg instanceof google_logging_v2_logging_pb.WriteLogEntriesResponse)) {
    throw new Error('Expected argument of type google.logging.v2.WriteLogEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_logging_v2_WriteLogEntriesResponse(buffer_arg) {
  return google_logging_v2_logging_pb.WriteLogEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service for ingesting and querying logs.
var LoggingServiceV2Service = exports.LoggingServiceV2Service = {
  // Deletes all the log entries in a log for the _Default Log Bucket. The log
// reappears if it receives new entries. Log entries written shortly before
// the delete operation might not be deleted. Entries received after the
// delete operation with a timestamp before the operation will be deleted.
deleteLog: {
    path: '/google.logging.v2.LoggingServiceV2/DeleteLog',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_pb.DeleteLogRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_logging_v2_DeleteLogRequest,
    requestDeserialize: deserialize_google_logging_v2_DeleteLogRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Writes log entries to Logging. This API method is the
// only way to send log entries to Logging. This method
// is used, directly or indirectly, by the Logging agent
// (fluentd) and all logging libraries configured to use Logging.
// A single request may contain log entries for a maximum of 1000
// different resources (projects, organizations, billing accounts or
// folders)
writeLogEntries: {
    path: '/google.logging.v2.LoggingServiceV2/WriteLogEntries',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_pb.WriteLogEntriesRequest,
    responseType: google_logging_v2_logging_pb.WriteLogEntriesResponse,
    requestSerialize: serialize_google_logging_v2_WriteLogEntriesRequest,
    requestDeserialize: deserialize_google_logging_v2_WriteLogEntriesRequest,
    responseSerialize: serialize_google_logging_v2_WriteLogEntriesResponse,
    responseDeserialize: deserialize_google_logging_v2_WriteLogEntriesResponse,
  },
  // Lists log entries.  Use this method to retrieve log entries that originated
// from a project/folder/organization/billing account.  For ways to export log
// entries, see [Exporting
// Logs](https://cloud.google.com/logging/docs/export).
listLogEntries: {
    path: '/google.logging.v2.LoggingServiceV2/ListLogEntries',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_pb.ListLogEntriesRequest,
    responseType: google_logging_v2_logging_pb.ListLogEntriesResponse,
    requestSerialize: serialize_google_logging_v2_ListLogEntriesRequest,
    requestDeserialize: deserialize_google_logging_v2_ListLogEntriesRequest,
    responseSerialize: serialize_google_logging_v2_ListLogEntriesResponse,
    responseDeserialize: deserialize_google_logging_v2_ListLogEntriesResponse,
  },
  // Lists the descriptors for monitored resource types used by Logging.
listMonitoredResourceDescriptors: {
    path: '/google.logging.v2.LoggingServiceV2/ListMonitoredResourceDescriptors',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest,
    responseType: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse,
    requestSerialize: serialize_google_logging_v2_ListMonitoredResourceDescriptorsRequest,
    requestDeserialize: deserialize_google_logging_v2_ListMonitoredResourceDescriptorsRequest,
    responseSerialize: serialize_google_logging_v2_ListMonitoredResourceDescriptorsResponse,
    responseDeserialize: deserialize_google_logging_v2_ListMonitoredResourceDescriptorsResponse,
  },
  // Lists the logs in projects, organizations, folders, or billing accounts.
// Only logs that have entries are listed.
listLogs: {
    path: '/google.logging.v2.LoggingServiceV2/ListLogs',
    requestStream: false,
    responseStream: false,
    requestType: google_logging_v2_logging_pb.ListLogsRequest,
    responseType: google_logging_v2_logging_pb.ListLogsResponse,
    requestSerialize: serialize_google_logging_v2_ListLogsRequest,
    requestDeserialize: deserialize_google_logging_v2_ListLogsRequest,
    responseSerialize: serialize_google_logging_v2_ListLogsResponse,
    responseDeserialize: deserialize_google_logging_v2_ListLogsResponse,
  },
  // Streaming read of log entries as they are ingested. Until the stream is
// terminated, it will continue reading logs.
tailLogEntries: {
    path: '/google.logging.v2.LoggingServiceV2/TailLogEntries',
    requestStream: true,
    responseStream: true,
    requestType: google_logging_v2_logging_pb.TailLogEntriesRequest,
    responseType: google_logging_v2_logging_pb.TailLogEntriesResponse,
    requestSerialize: serialize_google_logging_v2_TailLogEntriesRequest,
    requestDeserialize: deserialize_google_logging_v2_TailLogEntriesRequest,
    responseSerialize: serialize_google_logging_v2_TailLogEntriesResponse,
    responseDeserialize: deserialize_google_logging_v2_TailLogEntriesResponse,
  },
};

exports.LoggingServiceV2Client = grpc.makeGenericClientConstructor(LoggingServiceV2Service, 'LoggingServiceV2');
