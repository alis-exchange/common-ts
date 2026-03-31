// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_a2a_extension_scheduler_v1_scheduler_pb = require('../../../../../alis/a2a/extension/scheduler/v1/scheduler_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_alis_a2a_extension_scheduler_v1_CreateCronRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_scheduler_v1_scheduler_pb.CreateCronRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.scheduler.v1.CreateCronRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_scheduler_v1_CreateCronRequest(buffer_arg) {
  return alis_a2a_extension_scheduler_v1_scheduler_pb.CreateCronRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_scheduler_v1_Cron(arg) {
  if (!(arg instanceof alis_a2a_extension_scheduler_v1_scheduler_pb.Cron)) {
    throw new Error('Expected argument of type alis.a2a.extension.scheduler.v1.Cron');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_scheduler_v1_Cron(buffer_arg) {
  return alis_a2a_extension_scheduler_v1_scheduler_pb.Cron.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_scheduler_v1_DeleteCronRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_scheduler_v1_scheduler_pb.DeleteCronRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.scheduler.v1.DeleteCronRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_scheduler_v1_DeleteCronRequest(buffer_arg) {
  return alis_a2a_extension_scheduler_v1_scheduler_pb.DeleteCronRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_scheduler_v1_GetCronRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_scheduler_v1_scheduler_pb.GetCronRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.scheduler.v1.GetCronRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_scheduler_v1_GetCronRequest(buffer_arg) {
  return alis_a2a_extension_scheduler_v1_scheduler_pb.GetCronRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_scheduler_v1_ListCronsRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.scheduler.v1.ListCronsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_scheduler_v1_ListCronsRequest(buffer_arg) {
  return alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_scheduler_v1_ListCronsResponse(arg) {
  if (!(arg instanceof alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsResponse)) {
    throw new Error('Expected argument of type alis.a2a.extension.scheduler.v1.ListCronsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_scheduler_v1_ListCronsResponse(buffer_arg) {
  return alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_scheduler_v1_RunCronRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.scheduler.v1.RunCronRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_scheduler_v1_RunCronRequest(buffer_arg) {
  return alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_scheduler_v1_RunCronResponse(arg) {
  if (!(arg instanceof alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronResponse)) {
    throw new Error('Expected argument of type alis.a2a.extension.scheduler.v1.RunCronResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_scheduler_v1_RunCronResponse(buffer_arg) {
  return alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_scheduler_v1_UpdateCronRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_scheduler_v1_scheduler_pb.UpdateCronRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.scheduler.v1.UpdateCronRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_scheduler_v1_UpdateCronRequest(buffer_arg) {
  return alis_a2a_extension_scheduler_v1_scheduler_pb.UpdateCronRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Manages scheduled invocations of an A2A agent via Cron Jobs
var SchedulerServiceService = exports.SchedulerServiceService = {
  // Creates a Cron.
createCron: {
    path: '/alis.a2a.extension.scheduler.v1.SchedulerService/CreateCron',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_scheduler_v1_scheduler_pb.CreateCronRequest,
    responseType: alis_a2a_extension_scheduler_v1_scheduler_pb.Cron,
    requestSerialize: serialize_alis_a2a_extension_scheduler_v1_CreateCronRequest,
    requestDeserialize: deserialize_alis_a2a_extension_scheduler_v1_CreateCronRequest,
    responseSerialize: serialize_alis_a2a_extension_scheduler_v1_Cron,
    responseDeserialize: deserialize_alis_a2a_extension_scheduler_v1_Cron,
  },
  // Lists all Crons.
listCrons: {
    path: '/alis.a2a.extension.scheduler.v1.SchedulerService/ListCrons',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsRequest,
    responseType: alis_a2a_extension_scheduler_v1_scheduler_pb.ListCronsResponse,
    requestSerialize: serialize_alis_a2a_extension_scheduler_v1_ListCronsRequest,
    requestDeserialize: deserialize_alis_a2a_extension_scheduler_v1_ListCronsRequest,
    responseSerialize: serialize_alis_a2a_extension_scheduler_v1_ListCronsResponse,
    responseDeserialize: deserialize_alis_a2a_extension_scheduler_v1_ListCronsResponse,
  },
  // Gets a Cron.
getCron: {
    path: '/alis.a2a.extension.scheduler.v1.SchedulerService/GetCron',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_scheduler_v1_scheduler_pb.GetCronRequest,
    responseType: alis_a2a_extension_scheduler_v1_scheduler_pb.Cron,
    requestSerialize: serialize_alis_a2a_extension_scheduler_v1_GetCronRequest,
    requestDeserialize: deserialize_alis_a2a_extension_scheduler_v1_GetCronRequest,
    responseSerialize: serialize_alis_a2a_extension_scheduler_v1_Cron,
    responseDeserialize: deserialize_alis_a2a_extension_scheduler_v1_Cron,
  },
  // Updates a Cron.
updateCron: {
    path: '/alis.a2a.extension.scheduler.v1.SchedulerService/UpdateCron',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_scheduler_v1_scheduler_pb.UpdateCronRequest,
    responseType: alis_a2a_extension_scheduler_v1_scheduler_pb.Cron,
    requestSerialize: serialize_alis_a2a_extension_scheduler_v1_UpdateCronRequest,
    requestDeserialize: deserialize_alis_a2a_extension_scheduler_v1_UpdateCronRequest,
    responseSerialize: serialize_alis_a2a_extension_scheduler_v1_Cron,
    responseDeserialize: deserialize_alis_a2a_extension_scheduler_v1_Cron,
  },
  // Deletes a Cron.
deleteCron: {
    path: '/alis.a2a.extension.scheduler.v1.SchedulerService/DeleteCron',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_scheduler_v1_scheduler_pb.DeleteCronRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_a2a_extension_scheduler_v1_DeleteCronRequest,
    requestDeserialize: deserialize_alis_a2a_extension_scheduler_v1_DeleteCronRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Runs a Cron. This ignores any schedule details and runs the Cron immediately.
runCron: {
    path: '/alis.a2a.extension.scheduler.v1.SchedulerService/RunCron',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronRequest,
    responseType: alis_a2a_extension_scheduler_v1_scheduler_pb.RunCronResponse,
    requestSerialize: serialize_alis_a2a_extension_scheduler_v1_RunCronRequest,
    requestDeserialize: deserialize_alis_a2a_extension_scheduler_v1_RunCronRequest,
    responseSerialize: serialize_alis_a2a_extension_scheduler_v1_RunCronResponse,
    responseDeserialize: deserialize_alis_a2a_extension_scheduler_v1_RunCronResponse,
  },
};

exports.SchedulerServiceClient = grpc.makeGenericClientConstructor(SchedulerServiceService, 'SchedulerService');
