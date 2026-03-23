// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.iam.v1
// file: alis/open/iam/v1/user.proto

import * as alis_open_iam_v1_user_pb from "../../../../alis/open/iam/v1/user_pb";
import * as alis_open_iam_v1_iam_pb from "../../../../alis/open/iam/v1/iam_pb";
import * as alis_open_validation_v1_validation_pb from "../../../../alis/open/validation/v1/validation_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IUsersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  validateMessage: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  addIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  getUser: grpc.MethodDefinition<alis_open_iam_v1_user_pb.GetUserRequest, alis_open_iam_v1_user_pb.User>;
  createUser: grpc.MethodDefinition<alis_open_iam_v1_user_pb.CreateUserRequest, alis_open_iam_v1_user_pb.User>;
  updateUser: grpc.MethodDefinition<alis_open_iam_v1_user_pb.UpdateUserRequest, alis_open_iam_v1_user_pb.User>;
  deleteUser: grpc.MethodDefinition<alis_open_iam_v1_user_pb.DeleteUserRequest, google_protobuf_empty_pb.Empty>;
  listUsers: grpc.MethodDefinition<alis_open_iam_v1_user_pb.ListUsersRequest, alis_open_iam_v1_user_pb.ListUsersResponse>;
  retrieveUserByEmail: grpc.MethodDefinition<alis_open_iam_v1_user_pb.RetrieveUserByEmailRequest, alis_open_iam_v1_user_pb.User>;
  lookupUser: grpc.MethodDefinition<alis_open_iam_v1_user_pb.LookupUserRequest, alis_open_iam_v1_user_pb.LookupUserResponse>;
  batchRetrieveMaskedUsers: grpc.MethodDefinition<alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersRequest, alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersResponse>;
  retrieveMaskedUsers: grpc.MethodDefinition<alis_open_iam_v1_user_pb.RetrieveMaskedUsersRequest, alis_open_iam_v1_user_pb.RetrieveMaskedUsersResponse>;
  retrieveMaskedUser: grpc.MethodDefinition<alis_open_iam_v1_user_pb.RetrieveMaskedUserRequest, alis_open_iam_v1_user_pb.MaskedUser>;
  editUserInfo: grpc.MethodDefinition<alis_open_iam_v1_user_pb.EditUserInfoRequest, alis_open_iam_v1_user_pb.User>;
  editUserMetadata: grpc.MethodDefinition<alis_open_iam_v1_user_pb.EditUserMetadataRequest, alis_open_iam_v1_user_pb.User>;
  retrieveMyUser: grpc.MethodDefinition<alis_open_iam_v1_user_pb.RetrieveMyUserRequest, alis_open_iam_v1_user_pb.User>;
  editMyInfo: grpc.MethodDefinition<alis_open_iam_v1_user_pb.EditMyInfoRequest, alis_open_iam_v1_user_pb.User>;
  editMyMetadata: grpc.MethodDefinition<alis_open_iam_v1_user_pb.EditMyMetadataRequest, alis_open_iam_v1_user_pb.User>;
  removeMyUser: grpc.MethodDefinition<alis_open_iam_v1_user_pb.RemoveMyUserRequest, google_protobuf_empty_pb.Empty>;
  syncToGoogleGroup: grpc.MethodDefinition<alis_open_iam_v1_user_pb.SyncToGoogleGroupRequest, alis_open_iam_v1_user_pb.SyncToGoogleGroupResponse>;
  setUserPicture: grpc.MethodDefinition<alis_open_iam_v1_user_pb.SetUserPictureRequest, alis_open_iam_v1_user_pb.SetUserPictureResponse>;
}

export const UsersServiceService: IUsersServiceService;

export interface IUsersServiceServer extends grpc.UntypedServiceImplementation {
  validateMessage: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  getIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  addIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  getUser: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.GetUserRequest, alis_open_iam_v1_user_pb.User>;
  createUser: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.CreateUserRequest, alis_open_iam_v1_user_pb.User>;
  updateUser: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.UpdateUserRequest, alis_open_iam_v1_user_pb.User>;
  deleteUser: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.DeleteUserRequest, google_protobuf_empty_pb.Empty>;
  listUsers: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.ListUsersRequest, alis_open_iam_v1_user_pb.ListUsersResponse>;
  retrieveUserByEmail: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.RetrieveUserByEmailRequest, alis_open_iam_v1_user_pb.User>;
  lookupUser: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.LookupUserRequest, alis_open_iam_v1_user_pb.LookupUserResponse>;
  batchRetrieveMaskedUsers: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersRequest, alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersResponse>;
  retrieveMaskedUsers: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.RetrieveMaskedUsersRequest, alis_open_iam_v1_user_pb.RetrieveMaskedUsersResponse>;
  retrieveMaskedUser: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.RetrieveMaskedUserRequest, alis_open_iam_v1_user_pb.MaskedUser>;
  editUserInfo: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.EditUserInfoRequest, alis_open_iam_v1_user_pb.User>;
  editUserMetadata: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.EditUserMetadataRequest, alis_open_iam_v1_user_pb.User>;
  retrieveMyUser: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.RetrieveMyUserRequest, alis_open_iam_v1_user_pb.User>;
  editMyInfo: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.EditMyInfoRequest, alis_open_iam_v1_user_pb.User>;
  editMyMetadata: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.EditMyMetadataRequest, alis_open_iam_v1_user_pb.User>;
  removeMyUser: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.RemoveMyUserRequest, google_protobuf_empty_pb.Empty>;
  syncToGoogleGroup: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.SyncToGoogleGroupRequest, alis_open_iam_v1_user_pb.SyncToGoogleGroupResponse>;
  setUserPicture: grpc.handleUnaryCall<alis_open_iam_v1_user_pb.SetUserPictureRequest, alis_open_iam_v1_user_pb.SetUserPictureResponse>;
}

export class UsersServiceClient extends grpc.Client {
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
  getUser(argument: alis_open_iam_v1_user_pb.GetUserRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  getUser(argument: alis_open_iam_v1_user_pb.GetUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  getUser(argument: alis_open_iam_v1_user_pb.GetUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  createUser(argument: alis_open_iam_v1_user_pb.CreateUserRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  createUser(argument: alis_open_iam_v1_user_pb.CreateUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  createUser(argument: alis_open_iam_v1_user_pb.CreateUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  updateUser(argument: alis_open_iam_v1_user_pb.UpdateUserRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  updateUser(argument: alis_open_iam_v1_user_pb.UpdateUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  updateUser(argument: alis_open_iam_v1_user_pb.UpdateUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  deleteUser(argument: alis_open_iam_v1_user_pb.DeleteUserRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteUser(argument: alis_open_iam_v1_user_pb.DeleteUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteUser(argument: alis_open_iam_v1_user_pb.DeleteUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listUsers(argument: alis_open_iam_v1_user_pb.ListUsersRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.ListUsersResponse>): grpc.ClientUnaryCall;
  listUsers(argument: alis_open_iam_v1_user_pb.ListUsersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.ListUsersResponse>): grpc.ClientUnaryCall;
  listUsers(argument: alis_open_iam_v1_user_pb.ListUsersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.ListUsersResponse>): grpc.ClientUnaryCall;
  retrieveUserByEmail(argument: alis_open_iam_v1_user_pb.RetrieveUserByEmailRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  retrieveUserByEmail(argument: alis_open_iam_v1_user_pb.RetrieveUserByEmailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  retrieveUserByEmail(argument: alis_open_iam_v1_user_pb.RetrieveUserByEmailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  lookupUser(argument: alis_open_iam_v1_user_pb.LookupUserRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.LookupUserResponse>): grpc.ClientUnaryCall;
  lookupUser(argument: alis_open_iam_v1_user_pb.LookupUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.LookupUserResponse>): grpc.ClientUnaryCall;
  lookupUser(argument: alis_open_iam_v1_user_pb.LookupUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.LookupUserResponse>): grpc.ClientUnaryCall;
  batchRetrieveMaskedUsers(argument: alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersResponse>): grpc.ClientUnaryCall;
  batchRetrieveMaskedUsers(argument: alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersResponse>): grpc.ClientUnaryCall;
  batchRetrieveMaskedUsers(argument: alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.BatchRetrieveMaskedUsersResponse>): grpc.ClientUnaryCall;
  retrieveMaskedUsers(argument: alis_open_iam_v1_user_pb.RetrieveMaskedUsersRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.RetrieveMaskedUsersResponse>): grpc.ClientUnaryCall;
  retrieveMaskedUsers(argument: alis_open_iam_v1_user_pb.RetrieveMaskedUsersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.RetrieveMaskedUsersResponse>): grpc.ClientUnaryCall;
  retrieveMaskedUsers(argument: alis_open_iam_v1_user_pb.RetrieveMaskedUsersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.RetrieveMaskedUsersResponse>): grpc.ClientUnaryCall;
  retrieveMaskedUser(argument: alis_open_iam_v1_user_pb.RetrieveMaskedUserRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.MaskedUser>): grpc.ClientUnaryCall;
  retrieveMaskedUser(argument: alis_open_iam_v1_user_pb.RetrieveMaskedUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.MaskedUser>): grpc.ClientUnaryCall;
  retrieveMaskedUser(argument: alis_open_iam_v1_user_pb.RetrieveMaskedUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.MaskedUser>): grpc.ClientUnaryCall;
  editUserInfo(argument: alis_open_iam_v1_user_pb.EditUserInfoRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  editUserInfo(argument: alis_open_iam_v1_user_pb.EditUserInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  editUserInfo(argument: alis_open_iam_v1_user_pb.EditUserInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  editUserMetadata(argument: alis_open_iam_v1_user_pb.EditUserMetadataRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  editUserMetadata(argument: alis_open_iam_v1_user_pb.EditUserMetadataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  editUserMetadata(argument: alis_open_iam_v1_user_pb.EditUserMetadataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  retrieveMyUser(argument: alis_open_iam_v1_user_pb.RetrieveMyUserRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  retrieveMyUser(argument: alis_open_iam_v1_user_pb.RetrieveMyUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  retrieveMyUser(argument: alis_open_iam_v1_user_pb.RetrieveMyUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  editMyInfo(argument: alis_open_iam_v1_user_pb.EditMyInfoRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  editMyInfo(argument: alis_open_iam_v1_user_pb.EditMyInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  editMyInfo(argument: alis_open_iam_v1_user_pb.EditMyInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  editMyMetadata(argument: alis_open_iam_v1_user_pb.EditMyMetadataRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  editMyMetadata(argument: alis_open_iam_v1_user_pb.EditMyMetadataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  editMyMetadata(argument: alis_open_iam_v1_user_pb.EditMyMetadataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.User>): grpc.ClientUnaryCall;
  removeMyUser(argument: alis_open_iam_v1_user_pb.RemoveMyUserRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  removeMyUser(argument: alis_open_iam_v1_user_pb.RemoveMyUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  removeMyUser(argument: alis_open_iam_v1_user_pb.RemoveMyUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  syncToGoogleGroup(argument: alis_open_iam_v1_user_pb.SyncToGoogleGroupRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.SyncToGoogleGroupResponse>): grpc.ClientUnaryCall;
  syncToGoogleGroup(argument: alis_open_iam_v1_user_pb.SyncToGoogleGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.SyncToGoogleGroupResponse>): grpc.ClientUnaryCall;
  syncToGoogleGroup(argument: alis_open_iam_v1_user_pb.SyncToGoogleGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.SyncToGoogleGroupResponse>): grpc.ClientUnaryCall;
  setUserPicture(argument: alis_open_iam_v1_user_pb.SetUserPictureRequest, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.SetUserPictureResponse>): grpc.ClientUnaryCall;
  setUserPicture(argument: alis_open_iam_v1_user_pb.SetUserPictureRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.SetUserPictureResponse>): grpc.ClientUnaryCall;
  setUserPicture(argument: alis_open_iam_v1_user_pb.SetUserPictureRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_user_pb.SetUserPictureResponse>): grpc.ClientUnaryCall;
}
