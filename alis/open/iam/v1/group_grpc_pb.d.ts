// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.iam.v1
// file: alis/open/iam/v1/group.proto

import * as alis_open_iam_v1_group_pb from "../../../../alis/open/iam/v1/group_pb";
import * as alis_open_iam_v1_iam_pb from "../../../../alis/open/iam/v1/iam_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IGroupsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  addIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  getGroup: grpc.MethodDefinition<alis_open_iam_v1_group_pb.GetGroupRequest, alis_open_iam_v1_group_pb.Group>;
  createGroup: grpc.MethodDefinition<alis_open_iam_v1_group_pb.CreateGroupRequest, alis_open_iam_v1_group_pb.Group>;
  updateGroup: grpc.MethodDefinition<alis_open_iam_v1_group_pb.UpdateGroupRequest, alis_open_iam_v1_group_pb.Group>;
  deleteGroup: grpc.MethodDefinition<alis_open_iam_v1_group_pb.DeleteGroupRequest, google_protobuf_empty_pb.Empty>;
  listGroups: grpc.MethodDefinition<alis_open_iam_v1_group_pb.ListGroupsRequest, alis_open_iam_v1_group_pb.ListGroupsResponse>;
  syncGroup: grpc.MethodDefinition<alis_open_iam_v1_group_pb.SyncGroupRequest, alis_open_iam_v1_group_pb.SyncGroupResponse>;
}

export const GroupsServiceService: IGroupsServiceService;

export interface IGroupsServiceServer extends grpc.UntypedServiceImplementation {
  getIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  addIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  getGroup: grpc.handleUnaryCall<alis_open_iam_v1_group_pb.GetGroupRequest, alis_open_iam_v1_group_pb.Group>;
  createGroup: grpc.handleUnaryCall<alis_open_iam_v1_group_pb.CreateGroupRequest, alis_open_iam_v1_group_pb.Group>;
  updateGroup: grpc.handleUnaryCall<alis_open_iam_v1_group_pb.UpdateGroupRequest, alis_open_iam_v1_group_pb.Group>;
  deleteGroup: grpc.handleUnaryCall<alis_open_iam_v1_group_pb.DeleteGroupRequest, google_protobuf_empty_pb.Empty>;
  listGroups: grpc.handleUnaryCall<alis_open_iam_v1_group_pb.ListGroupsRequest, alis_open_iam_v1_group_pb.ListGroupsResponse>;
  syncGroup: grpc.handleUnaryCall<alis_open_iam_v1_group_pb.SyncGroupRequest, alis_open_iam_v1_group_pb.SyncGroupResponse>;
}

export class GroupsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
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
  getGroup(argument: alis_open_iam_v1_group_pb.GetGroupRequest, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.Group>): grpc.ClientUnaryCall;
  getGroup(argument: alis_open_iam_v1_group_pb.GetGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.Group>): grpc.ClientUnaryCall;
  getGroup(argument: alis_open_iam_v1_group_pb.GetGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.Group>): grpc.ClientUnaryCall;
  createGroup(argument: alis_open_iam_v1_group_pb.CreateGroupRequest, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.Group>): grpc.ClientUnaryCall;
  createGroup(argument: alis_open_iam_v1_group_pb.CreateGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.Group>): grpc.ClientUnaryCall;
  createGroup(argument: alis_open_iam_v1_group_pb.CreateGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.Group>): grpc.ClientUnaryCall;
  updateGroup(argument: alis_open_iam_v1_group_pb.UpdateGroupRequest, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.Group>): grpc.ClientUnaryCall;
  updateGroup(argument: alis_open_iam_v1_group_pb.UpdateGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.Group>): grpc.ClientUnaryCall;
  updateGroup(argument: alis_open_iam_v1_group_pb.UpdateGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.Group>): grpc.ClientUnaryCall;
  deleteGroup(argument: alis_open_iam_v1_group_pb.DeleteGroupRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteGroup(argument: alis_open_iam_v1_group_pb.DeleteGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteGroup(argument: alis_open_iam_v1_group_pb.DeleteGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listGroups(argument: alis_open_iam_v1_group_pb.ListGroupsRequest, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: alis_open_iam_v1_group_pb.ListGroupsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: alis_open_iam_v1_group_pb.ListGroupsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.ListGroupsResponse>): grpc.ClientUnaryCall;
  syncGroup(argument: alis_open_iam_v1_group_pb.SyncGroupRequest, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.SyncGroupResponse>): grpc.ClientUnaryCall;
  syncGroup(argument: alis_open_iam_v1_group_pb.SyncGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.SyncGroupResponse>): grpc.ClientUnaryCall;
  syncGroup(argument: alis_open_iam_v1_group_pb.SyncGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_group_pb.SyncGroupResponse>): grpc.ClientUnaryCall;
}
