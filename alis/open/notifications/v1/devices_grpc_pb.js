// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_notifications_v1_devices_pb = require('../../../../alis/open/notifications/v1/devices_pb.js');
var alis_open_iam_v1_iam_pb = require('../../../../alis/open/iam/v1/iam_pb.js');
var alis_open_validation_v1_validation_pb = require('../../../../alis/open/validation/v1/validation_pb.js');
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

function serialize_alis_open_iam_v1_RemoveIamBindingsRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.RemoveIamBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_RemoveIamBindingsRequest(buffer_arg) {
  return alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_notifications_v1_DeleteDeviceRequest(arg) {
  if (!(arg instanceof alis_open_notifications_v1_devices_pb.DeleteDeviceRequest)) {
    throw new Error('Expected argument of type alis.open.notifications.v1.DeleteDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_notifications_v1_DeleteDeviceRequest(buffer_arg) {
  return alis_open_notifications_v1_devices_pb.DeleteDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_notifications_v1_Device(arg) {
  if (!(arg instanceof alis_open_notifications_v1_devices_pb.Device)) {
    throw new Error('Expected argument of type alis.open.notifications.v1.Device');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_notifications_v1_Device(buffer_arg) {
  return alis_open_notifications_v1_devices_pb.Device.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_notifications_v1_GetDeviceRequest(arg) {
  if (!(arg instanceof alis_open_notifications_v1_devices_pb.GetDeviceRequest)) {
    throw new Error('Expected argument of type alis.open.notifications.v1.GetDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_notifications_v1_GetDeviceRequest(buffer_arg) {
  return alis_open_notifications_v1_devices_pb.GetDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_notifications_v1_ListDevicesRequest(arg) {
  if (!(arg instanceof alis_open_notifications_v1_devices_pb.ListDevicesRequest)) {
    throw new Error('Expected argument of type alis.open.notifications.v1.ListDevicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_notifications_v1_ListDevicesRequest(buffer_arg) {
  return alis_open_notifications_v1_devices_pb.ListDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_notifications_v1_ListDevicesResponse(arg) {
  if (!(arg instanceof alis_open_notifications_v1_devices_pb.ListDevicesResponse)) {
    throw new Error('Expected argument of type alis.open.notifications.v1.ListDevicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_notifications_v1_ListDevicesResponse(buffer_arg) {
  return alis_open_notifications_v1_devices_pb.ListDevicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_notifications_v1_RegisterDeviceRequest(arg) {
  if (!(arg instanceof alis_open_notifications_v1_devices_pb.RegisterDeviceRequest)) {
    throw new Error('Expected argument of type alis.open.notifications.v1.RegisterDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_notifications_v1_RegisterDeviceRequest(buffer_arg) {
  return alis_open_notifications_v1_devices_pb.RegisterDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_notifications_v1_RegisterDeviceResponse(arg) {
  if (!(arg instanceof alis_open_notifications_v1_devices_pb.RegisterDeviceResponse)) {
    throw new Error('Expected argument of type alis.open.notifications.v1.RegisterDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_notifications_v1_RegisterDeviceResponse(buffer_arg) {
  return alis_open_notifications_v1_devices_pb.RegisterDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_RetrieveRulesRequest(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.RetrieveRulesRequest)) {
    throw new Error('Expected argument of type alis.open.validation.v1.RetrieveRulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_RetrieveRulesRequest(buffer_arg) {
  return alis_open_validation_v1_validation_pb.RetrieveRulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_RetrieveRulesResponse(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.RetrieveRulesResponse)) {
    throw new Error('Expected argument of type alis.open.validation.v1.RetrieveRulesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_RetrieveRulesResponse(buffer_arg) {
  return alis_open_validation_v1_validation_pb.RetrieveRulesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_ValidateMessageRequest(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.ValidateMessageRequest)) {
    throw new Error('Expected argument of type alis.open.validation.v1.ValidateMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_ValidateMessageRequest(buffer_arg) {
  return alis_open_validation_v1_validation_pb.ValidateMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_ValidateMessageResponse(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.ValidateMessageResponse)) {
    throw new Error('Expected argument of type alis.open.validation.v1.ValidateMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_ValidateMessageResponse(buffer_arg) {
  return alis_open_validation_v1_validation_pb.ValidateMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// DevicesService provides RPCs for managing Device resources.
var DevicesServiceService = exports.DevicesServiceService = {
  // Validates any proto message that is used directly or indirectly by this service.
// Most common use issue is to validate request messages from a client-side application.
validateMessage: {
    path: '/alis.open.notifications.v1.DevicesService/ValidateMessage',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_validation_pb.ValidateMessageRequest,
    responseType: alis_open_validation_v1_validation_pb.ValidateMessageResponse,
    requestSerialize: serialize_alis_open_validation_v1_ValidateMessageRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_ValidateMessageRequest,
    responseSerialize: serialize_alis_open_validation_v1_ValidateMessageResponse,
    responseDeserialize: deserialize_alis_open_validation_v1_ValidateMessageResponse,
  },
  // Retrieves the validation rules for any proto message that is used directly or indirectly by this service.
// Serves as live auto-documentation of the validation rules in this service.
retrieveRules: {
    path: '/alis.open.notifications.v1.DevicesService/RetrieveRules',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_validation_pb.RetrieveRulesRequest,
    responseType: alis_open_validation_v1_validation_pb.RetrieveRulesResponse,
    requestSerialize: serialize_alis_open_validation_v1_RetrieveRulesRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_RetrieveRulesRequest,
    responseSerialize: serialize_alis_open_validation_v1_RetrieveRulesResponse,
    responseDeserialize: deserialize_alis_open_validation_v1_RetrieveRulesResponse,
  },
  // Gets the IAM policy for a resource implemented in this service.
//
// Resource should be the fully qualified name of the device.
// Format: users/([a-z0-9-]{2,50})/devices/([a-zA-Z0-9-_]{2,50})
getIamPolicy: {
    path: '/alis.open.notifications.v1.DevicesService/GetIamPolicy',
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
//
// Resource should be the fully qualified name of the device.
// Format: users/([a-z0-9-]{2,50})/devices/([a-zA-Z0-9-_]{2,50})
setIamPolicy: {
    path: '/alis.open.notifications.v1.DevicesService/SetIamPolicy',
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
//
// Resource should be the fully qualified name of the device.
// Format: users/([a-z0-9-]{2,50})/devices/([a-zA-Z0-9-_]{2,50})
testIamPermissions: {
    path: '/alis.open.notifications.v1.DevicesService/TestIamPermissions',
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
//
// Resource should be the fully qualified name of the device.
// Format: users/([a-z0-9-]{2,50})/devices/([a-zA-Z0-9-_]{2,50})
addIamBindings: {
    path: '/alis.open.notifications.v1.DevicesService/AddIamBindings',
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
//
// Resource should be the fully qualified name of the device.
// Format: users/([a-z0-9-]{2,50})/devices/([a-zA-Z0-9-_]{2,50})
removeIamBindings: {
    path: '/alis.open.notifications.v1.DevicesService/RemoveIamBindings',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Registers a user's device.
registerDevice: {
    path: '/alis.open.notifications.v1.DevicesService/RegisterDevice',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_notifications_v1_devices_pb.RegisterDeviceRequest,
    responseType: alis_open_notifications_v1_devices_pb.RegisterDeviceResponse,
    requestSerialize: serialize_alis_open_notifications_v1_RegisterDeviceRequest,
    requestDeserialize: deserialize_alis_open_notifications_v1_RegisterDeviceRequest,
    responseSerialize: serialize_alis_open_notifications_v1_RegisterDeviceResponse,
    responseDeserialize: deserialize_alis_open_notifications_v1_RegisterDeviceResponse,
  },
  // Gets a device.
getDevice: {
    path: '/alis.open.notifications.v1.DevicesService/GetDevice',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_notifications_v1_devices_pb.GetDeviceRequest,
    responseType: alis_open_notifications_v1_devices_pb.Device,
    requestSerialize: serialize_alis_open_notifications_v1_GetDeviceRequest,
    requestDeserialize: deserialize_alis_open_notifications_v1_GetDeviceRequest,
    responseSerialize: serialize_alis_open_notifications_v1_Device,
    responseDeserialize: deserialize_alis_open_notifications_v1_Device,
  },
  // Lists devices.
listDevices: {
    path: '/alis.open.notifications.v1.DevicesService/ListDevices',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_notifications_v1_devices_pb.ListDevicesRequest,
    responseType: alis_open_notifications_v1_devices_pb.ListDevicesResponse,
    requestSerialize: serialize_alis_open_notifications_v1_ListDevicesRequest,
    requestDeserialize: deserialize_alis_open_notifications_v1_ListDevicesRequest,
    responseSerialize: serialize_alis_open_notifications_v1_ListDevicesResponse,
    responseDeserialize: deserialize_alis_open_notifications_v1_ListDevicesResponse,
  },
  // Deletes a device.
deleteDevice: {
    path: '/alis.open.notifications.v1.DevicesService/DeleteDevice',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_notifications_v1_devices_pb.DeleteDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_open_notifications_v1_DeleteDeviceRequest,
    requestDeserialize: deserialize_alis_open_notifications_v1_DeleteDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.DevicesServiceClient = grpc.makeGenericClientConstructor(DevicesServiceService, 'DevicesService');
