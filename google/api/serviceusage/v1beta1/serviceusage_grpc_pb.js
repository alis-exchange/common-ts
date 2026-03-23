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
var google_api_serviceusage_v1beta1_serviceusage_pb = require('../../../../google/api/serviceusage/v1beta1/serviceusage_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_serviceusage_v1beta1_resources_pb = require('../../../../google/api/serviceusage/v1beta1/resources_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_api_serviceusage_v1beta1_BatchEnableServicesRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.BatchEnableServicesRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.BatchEnableServicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_BatchEnableServicesRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.BatchEnableServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ConsumerQuotaLimit(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaLimit)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ConsumerQuotaLimit');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ConsumerQuotaLimit(buffer_arg) {
  return google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaLimit.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ConsumerQuotaMetric(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaMetric)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ConsumerQuotaMetric');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ConsumerQuotaMetric(buffer_arg) {
  return google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaMetric.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_CreateAdminOverrideRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.CreateAdminOverrideRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.CreateAdminOverrideRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_CreateAdminOverrideRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.CreateAdminOverrideRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_CreateConsumerOverrideRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.CreateConsumerOverrideRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.CreateConsumerOverrideRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_CreateConsumerOverrideRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.CreateConsumerOverrideRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_DeleteAdminOverrideRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.DeleteAdminOverrideRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.DeleteAdminOverrideRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_DeleteAdminOverrideRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.DeleteAdminOverrideRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_DeleteConsumerOverrideRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.DeleteConsumerOverrideRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.DeleteConsumerOverrideRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_DeleteConsumerOverrideRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.DeleteConsumerOverrideRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_DisableServiceRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.DisableServiceRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.DisableServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_DisableServiceRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.DisableServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_EnableServiceRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.EnableServiceRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.EnableServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_EnableServiceRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.EnableServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_GenerateServiceIdentityRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.GenerateServiceIdentityRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.GenerateServiceIdentityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_GenerateServiceIdentityRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.GenerateServiceIdentityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_GetConsumerQuotaLimitRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaLimitRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.GetConsumerQuotaLimitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_GetConsumerQuotaLimitRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaLimitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_GetConsumerQuotaMetricRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaMetricRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.GetConsumerQuotaMetricRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_GetConsumerQuotaMetricRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaMetricRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_GetServiceRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.GetServiceRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.GetServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_GetServiceRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.GetServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ImportAdminOverridesRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.ImportAdminOverridesRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ImportAdminOverridesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ImportAdminOverridesRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.ImportAdminOverridesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ImportConsumerOverridesRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.ImportConsumerOverridesRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ImportConsumerOverridesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ImportConsumerOverridesRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.ImportConsumerOverridesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ListAdminOverridesRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ListAdminOverridesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ListAdminOverridesRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ListAdminOverridesResponse(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesResponse)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ListAdminOverridesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ListAdminOverridesResponse(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ListConsumerOverridesRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ListConsumerOverridesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ListConsumerOverridesRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ListConsumerOverridesResponse(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesResponse)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ListConsumerOverridesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ListConsumerOverridesResponse(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ListConsumerQuotaMetricsRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ListConsumerQuotaMetricsRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ListConsumerQuotaMetricsResponse(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsResponse)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ListConsumerQuotaMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ListConsumerQuotaMetricsResponse(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ListServicesRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ListServicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ListServicesRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_ListServicesResponse(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesResponse)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.ListServicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_ListServicesResponse(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_Service(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_resources_pb.Service)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.Service');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_Service(buffer_arg) {
  return google_api_serviceusage_v1beta1_resources_pb.Service.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_UpdateAdminOverrideRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.UpdateAdminOverrideRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.UpdateAdminOverrideRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_UpdateAdminOverrideRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.UpdateAdminOverrideRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_serviceusage_v1beta1_UpdateConsumerOverrideRequest(arg) {
  if (!(arg instanceof google_api_serviceusage_v1beta1_serviceusage_pb.UpdateConsumerOverrideRequest)) {
    throw new Error('Expected argument of type google.api.serviceusage.v1beta1.UpdateConsumerOverrideRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_serviceusage_v1beta1_UpdateConsumerOverrideRequest(buffer_arg) {
  return google_api_serviceusage_v1beta1_serviceusage_pb.UpdateConsumerOverrideRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// [Service Usage API](https://cloud.google.com/service-usage/docs/overview)
var ServiceUsageService = exports.ServiceUsageService = {
  // Enables a service so that it can be used with a project.
//
// Operation response type: `google.protobuf.Empty`
enableService: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/EnableService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.EnableServiceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_EnableServiceRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_EnableServiceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Disables a service so that it can no longer be used with a project.
// This prevents unintended usage that may cause unexpected billing
// charges or security leaks.
//
// It is not valid to call the disable method on a service that is not
// currently enabled. Callers will receive a `FAILED_PRECONDITION` status if
// the target service is not currently enabled.
//
// Operation response type: `google.protobuf.Empty`
disableService: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/DisableService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.DisableServiceRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_DisableServiceRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_DisableServiceRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Returns the service configuration and enabled state for a given service.
getService: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/GetService',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.GetServiceRequest,
    responseType: google_api_serviceusage_v1beta1_resources_pb.Service,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_GetServiceRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_GetServiceRequest,
    responseSerialize: serialize_google_api_serviceusage_v1beta1_Service,
    responseDeserialize: deserialize_google_api_serviceusage_v1beta1_Service,
  },
  // Lists all services available to the specified project, and the current
// state of those services with respect to the project. The list includes
// all public services, all services for which the calling user has the
// `servicemanagement.services.bind` permission, and all services that have
// already been enabled on the project. The list can be filtered to
// only include services in a specific state, for example to only include
// services enabled on the project.
listServices: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/ListServices',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesRequest,
    responseType: google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesResponse,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_ListServicesRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_ListServicesRequest,
    responseSerialize: serialize_google_api_serviceusage_v1beta1_ListServicesResponse,
    responseDeserialize: deserialize_google_api_serviceusage_v1beta1_ListServicesResponse,
  },
  // Enables multiple services on a project. The operation is atomic: if
// enabling any service fails, then the entire batch fails, and no state
// changes occur.
//
// Operation response type: `google.protobuf.Empty`
batchEnableServices: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/BatchEnableServices',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.BatchEnableServicesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_BatchEnableServicesRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_BatchEnableServicesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Retrieves a summary of all quota information visible to the service
// consumer, organized by service metric. Each metric includes information
// about all of its defined limits. Each limit includes the limit
// configuration (quota unit, preciseness, default value), the current
// effective limit value, and all of the overrides applied to the limit.
listConsumerQuotaMetrics: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/ListConsumerQuotaMetrics',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsRequest,
    responseType: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsResponse,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_ListConsumerQuotaMetricsRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_ListConsumerQuotaMetricsRequest,
    responseSerialize: serialize_google_api_serviceusage_v1beta1_ListConsumerQuotaMetricsResponse,
    responseDeserialize: deserialize_google_api_serviceusage_v1beta1_ListConsumerQuotaMetricsResponse,
  },
  // Retrieves a summary of quota information for a specific quota metric
getConsumerQuotaMetric: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/GetConsumerQuotaMetric',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaMetricRequest,
    responseType: google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaMetric,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_GetConsumerQuotaMetricRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_GetConsumerQuotaMetricRequest,
    responseSerialize: serialize_google_api_serviceusage_v1beta1_ConsumerQuotaMetric,
    responseDeserialize: deserialize_google_api_serviceusage_v1beta1_ConsumerQuotaMetric,
  },
  // Retrieves a summary of quota information for a specific quota limit.
getConsumerQuotaLimit: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/GetConsumerQuotaLimit',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaLimitRequest,
    responseType: google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaLimit,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_GetConsumerQuotaLimitRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_GetConsumerQuotaLimitRequest,
    responseSerialize: serialize_google_api_serviceusage_v1beta1_ConsumerQuotaLimit,
    responseDeserialize: deserialize_google_api_serviceusage_v1beta1_ConsumerQuotaLimit,
  },
  // Creates an admin override.
// An admin override is applied by an administrator of a parent folder or
// parent organization of the consumer receiving the override. An admin
// override is intended to limit the amount of quota the consumer can use out
// of the total quota pool allocated to all children of the folder or
// organization.
createAdminOverride: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/CreateAdminOverride',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.CreateAdminOverrideRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_CreateAdminOverrideRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_CreateAdminOverrideRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates an admin override.
updateAdminOverride: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/UpdateAdminOverride',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateAdminOverrideRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_UpdateAdminOverrideRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_UpdateAdminOverrideRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes an admin override.
deleteAdminOverride: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/DeleteAdminOverride',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteAdminOverrideRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_DeleteAdminOverrideRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_DeleteAdminOverrideRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists all admin overrides on this limit.
listAdminOverrides: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/ListAdminOverrides',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesRequest,
    responseType: google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesResponse,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_ListAdminOverridesRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_ListAdminOverridesRequest,
    responseSerialize: serialize_google_api_serviceusage_v1beta1_ListAdminOverridesResponse,
    responseDeserialize: deserialize_google_api_serviceusage_v1beta1_ListAdminOverridesResponse,
  },
  // Creates or updates multiple admin overrides atomically, all on the
// same consumer, but on many different metrics or limits.
// The name field in the quota override message should not be set.
importAdminOverrides: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/ImportAdminOverrides',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.ImportAdminOverridesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_ImportAdminOverridesRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_ImportAdminOverridesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Creates a consumer override.
// A consumer override is applied to the consumer on its own authority to
// limit its own quota usage. Consumer overrides cannot be used to grant more
// quota than would be allowed by admin overrides, producer overrides, or the
// default limit of the service.
createConsumerOverride: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/CreateConsumerOverride',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.CreateConsumerOverrideRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_CreateConsumerOverrideRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_CreateConsumerOverrideRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates a consumer override.
updateConsumerOverride: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/UpdateConsumerOverride',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateConsumerOverrideRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_UpdateConsumerOverrideRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_UpdateConsumerOverrideRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes a consumer override.
deleteConsumerOverride: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/DeleteConsumerOverride',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteConsumerOverrideRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_DeleteConsumerOverrideRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_DeleteConsumerOverrideRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists all consumer overrides on this limit.
listConsumerOverrides: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/ListConsumerOverrides',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesRequest,
    responseType: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesResponse,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_ListConsumerOverridesRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_ListConsumerOverridesRequest,
    responseSerialize: serialize_google_api_serviceusage_v1beta1_ListConsumerOverridesResponse,
    responseDeserialize: deserialize_google_api_serviceusage_v1beta1_ListConsumerOverridesResponse,
  },
  // Creates or updates multiple consumer overrides atomically, all on the
// same consumer, but on many different metrics or limits.
// The name field in the quota override message should not be set.
importConsumerOverrides: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/ImportConsumerOverrides',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.ImportConsumerOverridesRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_ImportConsumerOverridesRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_ImportConsumerOverridesRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Generates service identity for service.
generateServiceIdentity: {
    path: '/google.api.serviceusage.v1beta1.ServiceUsage/GenerateServiceIdentity',
    requestStream: false,
    responseStream: false,
    requestType: google_api_serviceusage_v1beta1_serviceusage_pb.GenerateServiceIdentityRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_api_serviceusage_v1beta1_GenerateServiceIdentityRequest,
    requestDeserialize: deserialize_google_api_serviceusage_v1beta1_GenerateServiceIdentityRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.ServiceUsageClient = grpc.makeGenericClientConstructor(ServiceUsageService, 'ServiceUsage');
