import * as grpcWeb from 'grpc-web';

import * as alis_open_iam_v1_iam_pb from '../../../../alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as alis_open_iam_v1_group_pb from '../../../../alis/open/iam/v1/group_pb'; // proto import: "alis/open/iam/v1/group.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class GroupsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

  addIamBindings(
    request: alis_open_iam_v1_iam_pb.AddIamBindingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  removeIamBindings(
    request: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  getGroup(
    request: alis_open_iam_v1_group_pb.GetGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_group_pb.Group) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_group_pb.Group>;

  createGroup(
    request: alis_open_iam_v1_group_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_group_pb.Group) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_group_pb.Group>;

  updateGroup(
    request: alis_open_iam_v1_group_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_group_pb.Group) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_group_pb.Group>;

  deleteGroup(
    request: alis_open_iam_v1_group_pb.DeleteGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listGroups(
    request: alis_open_iam_v1_group_pb.ListGroupsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_group_pb.ListGroupsResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_group_pb.ListGroupsResponse>;

  syncGroup(
    request: alis_open_iam_v1_group_pb.SyncGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_group_pb.SyncGroupResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_group_pb.SyncGroupResponse>;

}

export class GroupsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

  addIamBindings(
    request: alis_open_iam_v1_iam_pb.AddIamBindingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  removeIamBindings(
    request: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  getGroup(
    request: alis_open_iam_v1_group_pb.GetGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_group_pb.Group>;

  createGroup(
    request: alis_open_iam_v1_group_pb.CreateGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_group_pb.Group>;

  updateGroup(
    request: alis_open_iam_v1_group_pb.UpdateGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_group_pb.Group>;

  deleteGroup(
    request: alis_open_iam_v1_group_pb.DeleteGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listGroups(
    request: alis_open_iam_v1_group_pb.ListGroupsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_group_pb.ListGroupsResponse>;

  syncGroup(
    request: alis_open_iam_v1_group_pb.SyncGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_group_pb.SyncGroupResponse>;

}

