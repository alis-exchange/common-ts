// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_a2a_extension_scheduler_v1_scheduler_pb = require('../../../../../alis/a2a/extension/scheduler/v1/scheduler_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_iam_v1_policy_pb = require('../../../../../google/iam/v1/policy_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../../google/iam/v1/iam_policy_pb.js');
var alis_open_iam_v1_iam_pb = require('../../../../../alis/open/iam/v1/iam_pb.js');
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

function serialize_alis_open_iam_v1_AddIamBindingsRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_iam_pb.AddIamBindingsRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.AddIamBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_AddIamBindingsRequest(buffer_arg) {
  return alis_open_iam_v1_iam_pb.AddIamBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Gets the IAM policy for a resource implemented in this service.
getIamPolicy: {
    path: '/alis.a2a.extension.scheduler.v1.SchedulerService/GetIamPolicy',
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
    path: '/alis.a2a.extension.scheduler.v1.SchedulerService/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Adds principals or updates the roles existing principals have on an IAM Policy protected resource.
addIamBindings: {
    path: '/alis.a2a.extension.scheduler.v1.SchedulerService/AddIamBindings',
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
    path: '/alis.a2a.extension.scheduler.v1.SchedulerService/RemoveIamBindings',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
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
