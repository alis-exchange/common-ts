// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2021 Google LLC
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
var google_api_serviceusage_v1_serviceusage_pb = require('../../../../google/api/serviceusage/v1/serviceusage_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_serviceusage_v1_resources_pb = require('../../../../google/api/serviceusage/v1/resources_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_api_serviceusage_v1_BatchEnableServicesRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1_serviceusage_pb.BatchEnableServicesRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1.BatchEnableServicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1_BatchEnableServicesRequest(buffer_arg) {
  return google_api_serviceusage_v1_serviceusage_pb.BatchEnableServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1_BatchGetServicesRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1.BatchGetServicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1_BatchGetServicesRequest(buffer_arg) {
  return google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1_BatchGetServicesResponse(arg) {
  if (!(arg instanceof google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesResponse)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1.BatchGetServicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1_BatchGetServicesResponse(buffer_arg) {
  return google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1_DisableServiceRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1_serviceusage_pb.DisableServiceRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1.DisableServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1_DisableServiceRequest(buffer_arg) {
  return google_api_serviceusage_v1_serviceusage_pb.DisableServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1_EnableServiceRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1_serviceusage_pb.EnableServiceRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1.EnableServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1_EnableServiceRequest(buffer_arg) {
  return google_api_serviceusage_v1_serviceusage_pb.EnableServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1_GetServiceRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1_serviceusage_pb.GetServiceRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1.GetServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1_GetServiceRequest(buffer_arg) {
  return google_api_serviceusage_v1_serviceusage_pb.GetServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1_ListServicesRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1_serviceusage_pb.ListServicesRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1.ListServicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1_ListServicesRequest(buffer_arg) {
  return google_api_serviceusage_v1_serviceusage_pb.ListServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1_ListServicesResponse(arg) {
  if (!(arg instanceof google_api_serviceusage_v1_serviceusage_pb.ListServicesResponse)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1.ListServicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1_ListServicesResponse(buffer_arg) {
  return google_api_serviceusage_v1_serviceusage_pb.ListServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1_Service(arg) {
  if (!(arg instanceof google_api_serviceusage_v1_resources_pb.Service)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1.Service');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1_Service(buffer_arg) {
  return google_api_serviceusage_v1_resources_pb.Service.deserializeBinary(new Uint8Array(buffer_arg));
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


// Enables services that service consumers want to use on Google Cloud Platform,
// lists the available or enabled services, or disables services that service
// consumers no longer use.
//
// See [Service Usage API](https://cloud.google.com/service-usage/docs/overview)
var ServiceUsageService = exports.ServiceUsageService = {
  // Enable a service so that it can be used with a project.
enableService: {
    path: '/google.api.serviceusage.v1.ServiceUsage/EnableService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1_serviceusage_pb.EnableServiceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1_EnableServiceRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1_EnableServiceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Disable a service so that it can no longer be used with a project.
// This prevents unintended usage that may cause unexpected billing
// charges or security leaks.
//
// It is not valid to call the disable method on a service that is not
// currently enabled. Callers will receive a `FAILED_PRECONDITION` status if
// the target service is not currently enabled.
disableService: {
    path: '/google.api.serviceusage.v1.ServiceUsage/DisableService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1_serviceusage_pb.DisableServiceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1_DisableServiceRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1_DisableServiceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Returns the service configuration and enabled state for a given service.
getService: {
    path: '/google.api.serviceusage.v1.ServiceUsage/GetService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1_serviceusage_pb.GetServiceRequest,
    responseType: google_api_serviceusage_v1_resources_pb.Service,
    requestSerialize: serialize_google_api_serviceusage_v1_GetServiceRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1_GetServiceRequest,
    responseSerialize: serialize_google_api_serviceusage_v1_Service,
    responseDeserialize: deserialize_google_api_serviceusage_v1_Service,
  },
  // List all services available to the specified project, and the current
// state of those services with respect to the project. The list includes
// all public services, all services for which the calling user has the
// `servicemanagement.services.bind` permission, and all services that have
// already been enabled on the project. The list can be filtered to
// only include services in a specific state, for example to only include
// services enabled on the project.
//
// WARNING: If you need to query enabled services frequently or across
// an organization, you should use
// [Cloud Asset Inventory
// API](https://cloud.google.com/asset-inventory/docs/apis), which provides
// higher throughput and richer filtering capability.
listServices: {
    path: '/google.api.serviceusage.v1.ServiceUsage/ListServices',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1_serviceusage_pb.ListServicesRequest,
    responseType: google_api_serviceusage_v1_serviceusage_pb.ListServicesResponse,
    requestSerialize: serialize_google_api_serviceusage_v1_ListServicesRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1_ListServicesRequest,
    responseSerialize: serialize_google_api_serviceusage_v1_ListServicesResponse,
    responseDeserialize: deserialize_google_api_serviceusage_v1_ListServicesResponse,
  },
  // Enable multiple services on a project. The operation is atomic: if enabling
// any service fails, then the entire batch fails, and no state changes occur.
// To enable a single service, use the `EnableService` method instead.
batchEnableServices: {
    path: '/google.api.serviceusage.v1.ServiceUsage/BatchEnableServices',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1_serviceusage_pb.BatchEnableServicesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1_BatchEnableServicesRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1_BatchEnableServicesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Returns the service configurations and enabled states for a given list of
// services.
batchGetServices: {
    path: '/google.api.serviceusage.v1.ServiceUsage/BatchGetServices',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesRequest,
    responseType: google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesResponse,
    requestSerialize: serialize_google_api_serviceusage_v1_BatchGetServicesRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1_BatchGetServicesRequest,
    responseSerialize: serialize_google_api_serviceusage_v1_BatchGetServicesResponse,
    responseDeserialize: deserialize_google_api_serviceusage_v1_BatchGetServicesResponse,
  },
};

exports.ServiceUsageClient = grpc.makeGenericClientConstructor(ServiceUsageService, 'ServiceUsage');
