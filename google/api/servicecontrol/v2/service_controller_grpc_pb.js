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
var google_api_servicecontrol_v2_service_controller_pb = require('../../../../google/api/servicecontrol/v2/service_controller_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_rpc_context_attribute_context_pb = require('../../../../google/rpc/context/attribute_context_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');

function serialize_google_api_servicecontrol_v2_CheckRequest(arg) {
  if (!(arg instanceof google_api_servicecontrol_v2_service_controller_pb.CheckRequest)) {
    throw new Error('Expected argument of type google.api.servicecontrol.v2.CheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_servicecontrol_v2_CheckRequest(buffer_arg) {
  return google_api_servicecontrol_v2_service_controller_pb.CheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicecontrol_v2_CheckResponse(arg) {
  if (!(arg instanceof google_api_servicecontrol_v2_service_controller_pb.CheckResponse)) {
    throw new Error('Expected argument of type google.api.servicecontrol.v2.CheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_servicecontrol_v2_CheckResponse(buffer_arg) {
  return google_api_servicecontrol_v2_service_controller_pb.CheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicecontrol_v2_ReportRequest(arg) {
  if (!(arg instanceof google_api_servicecontrol_v2_service_controller_pb.ReportRequest)) {
    throw new Error('Expected argument of type google.api.servicecontrol.v2.ReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_servicecontrol_v2_ReportRequest(buffer_arg) {
  return google_api_servicecontrol_v2_service_controller_pb.ReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_api_servicecontrol_v2_ReportResponse(arg) {
  if (!(arg instanceof google_api_servicecontrol_v2_service_controller_pb.ReportResponse)) {
    throw new Error('Expected argument of type google.api.servicecontrol.v2.ReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_api_servicecontrol_v2_ReportResponse(buffer_arg) {
  return google_api_servicecontrol_v2_service_controller_pb.ReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// [Service Control API
// v2](https://cloud.google.com/service-infrastructure/docs/service-control/access-control)
//
// Private Preview. This feature is only available for approved services.
//
// This API provides admission control and telemetry reporting for services
// that are integrated with [Service
// Infrastructure](https://cloud.google.com/service-infrastructure).
var ServiceControllerService = exports.ServiceControllerService = {
  // Private Preview. This feature is only available for approved services.
//
// This method provides admission control for services that are integrated
// with [Service
// Infrastructure](https://cloud.google.com/service-infrastructure). It checks
// whether an operation should be allowed based on the service configuration
// and relevant policies. It must be called before the operation is executed.
// For more information, see
// [Admission
// Control](https://cloud.google.com/service-infrastructure/docs/admission-control).
//
// NOTE: The admission control has an expected policy propagation delay of
// 60s. The caller **must** not depend on the most recent policy changes.
//
// NOTE: The admission control has a hard limit of 1 referenced resources
// per call. If an operation refers to more than 1 resources, the caller
// must call the Check method multiple times.
//
// This method requires the `servicemanagement.services.check` permission
// on the specified service. For more information, see
// [Service Control API Access
// Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
check: {
    path: '/google.api.servicecontrol.v2.ServiceController/Check',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicecontrol_v2_service_controller_pb.CheckRequest,
    responseType: google_api_servicecontrol_v2_service_controller_pb.CheckResponse,
    requestSerialize: serialize_google_api_servicecontrol_v2_CheckRequest,
    requestDeserialize: deserialize_google_api_servicecontrol_v2_CheckRequest,
    responseSerialize: serialize_google_api_servicecontrol_v2_CheckResponse,
    responseDeserialize: deserialize_google_api_servicecontrol_v2_CheckResponse,
  },
  // Private Preview. This feature is only available for approved services.
//
// This method provides telemetry reporting for services that are integrated
// with [Service
// Infrastructure](https://cloud.google.com/service-infrastructure). It
// reports a list of operations that have occurred on a service. It must be
// called after the operations have been executed. For more information, see
// [Telemetry
// Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting).
//
// NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB
// per Report call. It is recommended to have no more than 100 operations per
// call.
//
// This method requires the `servicemanagement.services.report` permission
// on the specified service. For more information, see
// [Service Control API Access
// Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
report: {
    path: '/google.api.servicecontrol.v2.ServiceController/Report',
    requestStream: false,
    responseStream: false,
    requestType: google_api_servicecontrol_v2_service_controller_pb.ReportRequest,
    responseType: google_api_servicecontrol_v2_service_controller_pb.ReportResponse,
    requestSerialize: serialize_google_api_servicecontrol_v2_ReportRequest,
    requestDeserialize: deserialize_google_api_servicecontrol_v2_ReportRequest,
    responseSerialize: serialize_google_api_servicecontrol_v2_ReportResponse,
    responseDeserialize: deserialize_google_api_servicecontrol_v2_ReportResponse,
  },
};

exports.ServiceControllerClient = grpc.makeGenericClientConstructor(ServiceControllerService, 'ServiceController');
