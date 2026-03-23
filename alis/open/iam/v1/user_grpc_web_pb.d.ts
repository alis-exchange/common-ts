import * as grpcWeb from 'grpc-web';

import * as alis_open_iam_v1_iam_pb from '../../../../alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as alis_open_iam_v1_user_pb from '../../../../alis/open/iam/v1/user_pb'; // proto import: "alis/open/iam/v1/user.proto"
import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class UsersServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  validateMessage(
    request: alis_open_validation_v1_validation_pb.ValidateMessageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_validation_v1_validation_pb.ValidateMessageResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_validation_v1_validation_pb.ValidateMessageResponse>;

  retrieveRules(
    request: alis_open_validation_v1_validation_pb.RetrieveRulesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_validation_v1_validation_pb.RetrieveRulesResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;

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

  getUser(
    request: alis_open_iam_v1_user_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.User) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.User>;

  createUser(
    request: alis_open_iam_v1_user_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.User) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.User>;

  updateUser(
    request: alis_open_iam_v1_user_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.User) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.User>;

  deleteUser(
    request: alis_open_iam_v1_user_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listUsers(
    request: alis_open_iam_v1_user_pb.ListUsersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.ListUsersResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.ListUsersResponse>;

  retrieveUserByEmail(
    request: alis_open_iam_v1_user_pb.RetrieveUserByEmailRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.User) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.User>;

  lookupUser(
    request: alis_open_iam_v1_user_pb.LookupUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.LookupUserResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.LookupUserResponse>;

  batchRetrieveMaskedUsers(
    request: alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersResponse>;

  retrieveMaskedUsers(
    request: alis_open_iam_v1_user_pb.RetrieveMaskedUsersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.RetrieveMaskedUsersResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.RetrieveMaskedUsersResponse>;

  retrieveMaskedUser(
    request: alis_open_iam_v1_user_pb.RetrieveMaskedUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.MaskedUser) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.MaskedUser>;

  editUserInfo(
    request: alis_open_iam_v1_user_pb.EditUserInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.User) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.User>;

  editUserMetadata(
    request: alis_open_iam_v1_user_pb.EditUserMetadataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.User) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.User>;

  retrieveMyUser(
    request: alis_open_iam_v1_user_pb.RetrieveMyUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.User) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.User>;

  editMyInfo(
    request: alis_open_iam_v1_user_pb.EditMyInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.User) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.User>;

  editMyMetadata(
    request: alis_open_iam_v1_user_pb.EditMyMetadataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.User) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.User>;

  removeMyUser(
    request: alis_open_iam_v1_user_pb.RemoveMyUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  syncToGoogleGroup(
    request: alis_open_iam_v1_user_pb.SyncToGoogleGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.SyncToGoogleGroupResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.SyncToGoogleGroupResponse>;

  setUserPicture(
    request: alis_open_iam_v1_user_pb.SetUserPictureRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_user_pb.SetUserPictureResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_user_pb.SetUserPictureResponse>;

}

export class UsersServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  validateMessage(
    request: alis_open_validation_v1_validation_pb.ValidateMessageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_validation_v1_validation_pb.ValidateMessageResponse>;

  retrieveRules(
    request: alis_open_validation_v1_validation_pb.RetrieveRulesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;

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

  getUser(
    request: alis_open_iam_v1_user_pb.GetUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.User>;

  createUser(
    request: alis_open_iam_v1_user_pb.CreateUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.User>;

  updateUser(
    request: alis_open_iam_v1_user_pb.UpdateUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.User>;

  deleteUser(
    request: alis_open_iam_v1_user_pb.DeleteUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listUsers(
    request: alis_open_iam_v1_user_pb.ListUsersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.ListUsersResponse>;

  retrieveUserByEmail(
    request: alis_open_iam_v1_user_pb.RetrieveUserByEmailRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.User>;

  lookupUser(
    request: alis_open_iam_v1_user_pb.LookupUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.LookupUserResponse>;

  batchRetrieveMaskedUsers(
    request: alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersResponse>;

  retrieveMaskedUsers(
    request: alis_open_iam_v1_user_pb.RetrieveMaskedUsersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.RetrieveMaskedUsersResponse>;

  retrieveMaskedUser(
    request: alis_open_iam_v1_user_pb.RetrieveMaskedUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.MaskedUser>;

  editUserInfo(
    request: alis_open_iam_v1_user_pb.EditUserInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.User>;

  editUserMetadata(
    request: alis_open_iam_v1_user_pb.EditUserMetadataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.User>;

  retrieveMyUser(
    request: alis_open_iam_v1_user_pb.RetrieveMyUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.User>;

  editMyInfo(
    request: alis_open_iam_v1_user_pb.EditMyInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.User>;

  editMyMetadata(
    request: alis_open_iam_v1_user_pb.EditMyMetadataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.User>;

  removeMyUser(
    request: alis_open_iam_v1_user_pb.RemoveMyUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  syncToGoogleGroup(
    request: alis_open_iam_v1_user_pb.SyncToGoogleGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.SyncToGoogleGroupResponse>;

  setUserPicture(
    request: alis_open_iam_v1_user_pb.SetUserPictureRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_user_pb.SetUserPictureResponse>;

}

