// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.notifications.v1
// file: alis/open/notifications/v1/devices.proto

import * as alis_open_notifications_v1_devices_pb from "../../../../alis/open/notifications/v1/devices_pb";
import * as alis_open_iam_v1_iam_pb from "../../../../alis/open/iam/v1/iam_pb";
import * as alis_open_validation_v1_validation_pb from "../../../../alis/open/validation/v1/validation_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IDevicesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  validateMessage: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  addIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  registerDevice: grpc.MethodDefinition<alis_open_notifications_v1_devices_pb.RegisterDeviceRequest, alis_open_notifications_v1_devices_pb.RegisterDeviceResponse>;
  getDevice: grpc.MethodDefinition<alis_open_notifications_v1_devices_pb.GetDeviceRequest, alis_open_notifications_v1_devices_pb.Device>;
  listDevices: grpc.MethodDefinition<alis_open_notifications_v1_devices_pb.ListDevicesRequest, alis_open_notifications_v1_devices_pb.ListDevicesResponse>;
  deleteDevice: grpc.MethodDefinition<alis_open_notifications_v1_devices_pb.DeleteDeviceRequest, google_protobuf_empty_pb.Empty>;
}

export const DevicesServiceService: IDevicesServiceService;

export interface IDevicesServiceServer extends grpc.UntypedServiceImplementation {
  validateMessage: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  getIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  addIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  registerDevice: grpc.handleUnaryCall<alis_open_notifications_v1_devices_pb.RegisterDeviceRequest, alis_open_notifications_v1_devices_pb.RegisterDeviceResponse>;
  getDevice: grpc.handleUnaryCall<alis_open_notifications_v1_devices_pb.GetDeviceRequest, alis_open_notifications_v1_devices_pb.Device>;
  listDevices: grpc.handleUnaryCall<alis_open_notifications_v1_devices_pb.ListDevicesRequest, alis_open_notifications_v1_devices_pb.ListDevicesResponse>;
  deleteDevice: grpc.handleUnaryCall<alis_open_notifications_v1_devices_pb.DeleteDeviceRequest, google_protobuf_empty_pb.Empty>;
}

export class DevicesServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  addIamBindings(argument: alis_open_iam_v1_iam_pb.AddIamBindingsRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  addIamBindings(argument: alis_open_iam_v1_iam_pb.AddIamBindingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  addIamBindings(argument: alis_open_iam_v1_iam_pb.AddIamBindingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  removeIamBindings(argument: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  removeIamBindings(argument: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  removeIamBindings(argument: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  registerDevice(argument: alis_open_notifications_v1_devices_pb.RegisterDeviceRequest, callback: grpc.requestCallback<alis_open_notifications_v1_devices_pb.RegisterDeviceResponse>): grpc.ClientUnaryCall;
  registerDevice(argument: alis_open_notifications_v1_devices_pb.RegisterDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_notifications_v1_devices_pb.RegisterDeviceResponse>): grpc.ClientUnaryCall;
  registerDevice(argument: alis_open_notifications_v1_devices_pb.RegisterDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_notifications_v1_devices_pb.RegisterDeviceResponse>): grpc.ClientUnaryCall;
  getDevice(argument: alis_open_notifications_v1_devices_pb.GetDeviceRequest, callback: grpc.requestCallback<alis_open_notifications_v1_devices_pb.Device>): grpc.ClientUnaryCall;
  getDevice(argument: alis_open_notifications_v1_devices_pb.GetDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_notifications_v1_devices_pb.Device>): grpc.ClientUnaryCall;
  getDevice(argument: alis_open_notifications_v1_devices_pb.GetDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_notifications_v1_devices_pb.Device>): grpc.ClientUnaryCall;
  listDevices(argument: alis_open_notifications_v1_devices_pb.ListDevicesRequest, callback: grpc.requestCallback<alis_open_notifications_v1_devices_pb.ListDevicesResponse>): grpc.ClientUnaryCall;
  listDevices(argument: alis_open_notifications_v1_devices_pb.ListDevicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_notifications_v1_devices_pb.ListDevicesResponse>): grpc.ClientUnaryCall;
  listDevices(argument: alis_open_notifications_v1_devices_pb.ListDevicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_notifications_v1_devices_pb.ListDevicesResponse>): grpc.ClientUnaryCall;
  deleteDevice(argument: alis_open_notifications_v1_devices_pb.DeleteDeviceRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDevice(argument: alis_open_notifications_v1_devices_pb.DeleteDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDevice(argument: alis_open_notifications_v1_devices_pb.DeleteDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
