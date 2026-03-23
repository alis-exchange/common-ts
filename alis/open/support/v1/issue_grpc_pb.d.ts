// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.support.v1
// file: alis/open/support/v1/issue.proto

import * as alis_open_support_v1_issue_pb from "../../../../alis/open/support/v1/issue_pb";
import * as alis_open_iam_v1_iam_pb from "../../../../alis/open/iam/v1/iam_pb";
import * as alis_open_validation_v1_validation_pb from "../../../../alis/open/validation/v1/validation_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IIssuesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  validateMessage: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  addIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  createIssue: grpc.MethodDefinition<alis_open_support_v1_issue_pb.CreateIssueRequest, alis_open_support_v1_issue_pb.Issue>;
  updateIssue: grpc.MethodDefinition<alis_open_support_v1_issue_pb.UpdateIssueRequest, alis_open_support_v1_issue_pb.Issue>;
  getIssue: grpc.MethodDefinition<alis_open_support_v1_issue_pb.GetIssueRequest, alis_open_support_v1_issue_pb.Issue>;
  listIssues: grpc.MethodDefinition<alis_open_support_v1_issue_pb.ListIssuesRequest, alis_open_support_v1_issue_pb.ListIssuesResponse>;
  deleteIssue: grpc.MethodDefinition<alis_open_support_v1_issue_pb.DeleteIssueRequest, google_protobuf_empty_pb.Empty>;
  editNewIssue: grpc.MethodDefinition<alis_open_support_v1_issue_pb.EditNewIssueRequest, alis_open_support_v1_issue_pb.Issue>;
  cancelNewIssue: grpc.MethodDefinition<alis_open_support_v1_issue_pb.CancelNewIssueRequest, google_protobuf_empty_pb.Empty>;
  setIssueAssignee: grpc.MethodDefinition<alis_open_support_v1_issue_pb.SetIssueAssigneeRequest, alis_open_support_v1_issue_pb.Issue>;
  addIssueViewers: grpc.MethodDefinition<alis_open_support_v1_issue_pb.AddIssueViewersRequest, alis_open_support_v1_issue_pb.Issue>;
  removeIssueViewers: grpc.MethodDefinition<alis_open_support_v1_issue_pb.RemoveIssueViewersRequest, alis_open_support_v1_issue_pb.Issue>;
}

export const IssuesServiceService: IIssuesServiceService;

export interface IIssuesServiceServer extends grpc.UntypedServiceImplementation {
  validateMessage: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  getIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  addIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  createIssue: grpc.handleUnaryCall<alis_open_support_v1_issue_pb.CreateIssueRequest, alis_open_support_v1_issue_pb.Issue>;
  updateIssue: grpc.handleUnaryCall<alis_open_support_v1_issue_pb.UpdateIssueRequest, alis_open_support_v1_issue_pb.Issue>;
  getIssue: grpc.handleUnaryCall<alis_open_support_v1_issue_pb.GetIssueRequest, alis_open_support_v1_issue_pb.Issue>;
  listIssues: grpc.handleUnaryCall<alis_open_support_v1_issue_pb.ListIssuesRequest, alis_open_support_v1_issue_pb.ListIssuesResponse>;
  deleteIssue: grpc.handleUnaryCall<alis_open_support_v1_issue_pb.DeleteIssueRequest, google_protobuf_empty_pb.Empty>;
  editNewIssue: grpc.handleUnaryCall<alis_open_support_v1_issue_pb.EditNewIssueRequest, alis_open_support_v1_issue_pb.Issue>;
  cancelNewIssue: grpc.handleUnaryCall<alis_open_support_v1_issue_pb.CancelNewIssueRequest, google_protobuf_empty_pb.Empty>;
  setIssueAssignee: grpc.handleUnaryCall<alis_open_support_v1_issue_pb.SetIssueAssigneeRequest, alis_open_support_v1_issue_pb.Issue>;
  addIssueViewers: grpc.handleUnaryCall<alis_open_support_v1_issue_pb.AddIssueViewersRequest, alis_open_support_v1_issue_pb.Issue>;
  removeIssueViewers: grpc.handleUnaryCall<alis_open_support_v1_issue_pb.RemoveIssueViewersRequest, alis_open_support_v1_issue_pb.Issue>;
}

export class IssuesServiceClient extends grpc.Client {
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
  createIssue(argument: alis_open_support_v1_issue_pb.CreateIssueRequest, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  createIssue(argument: alis_open_support_v1_issue_pb.CreateIssueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  createIssue(argument: alis_open_support_v1_issue_pb.CreateIssueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  updateIssue(argument: alis_open_support_v1_issue_pb.UpdateIssueRequest, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  updateIssue(argument: alis_open_support_v1_issue_pb.UpdateIssueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  updateIssue(argument: alis_open_support_v1_issue_pb.UpdateIssueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  getIssue(argument: alis_open_support_v1_issue_pb.GetIssueRequest, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  getIssue(argument: alis_open_support_v1_issue_pb.GetIssueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  getIssue(argument: alis_open_support_v1_issue_pb.GetIssueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  listIssues(argument: alis_open_support_v1_issue_pb.ListIssuesRequest, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.ListIssuesResponse>): grpc.ClientUnaryCall;
  listIssues(argument: alis_open_support_v1_issue_pb.ListIssuesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.ListIssuesResponse>): grpc.ClientUnaryCall;
  listIssues(argument: alis_open_support_v1_issue_pb.ListIssuesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.ListIssuesResponse>): grpc.ClientUnaryCall;
  deleteIssue(argument: alis_open_support_v1_issue_pb.DeleteIssueRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteIssue(argument: alis_open_support_v1_issue_pb.DeleteIssueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteIssue(argument: alis_open_support_v1_issue_pb.DeleteIssueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  editNewIssue(argument: alis_open_support_v1_issue_pb.EditNewIssueRequest, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  editNewIssue(argument: alis_open_support_v1_issue_pb.EditNewIssueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  editNewIssue(argument: alis_open_support_v1_issue_pb.EditNewIssueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  cancelNewIssue(argument: alis_open_support_v1_issue_pb.CancelNewIssueRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancelNewIssue(argument: alis_open_support_v1_issue_pb.CancelNewIssueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancelNewIssue(argument: alis_open_support_v1_issue_pb.CancelNewIssueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setIssueAssignee(argument: alis_open_support_v1_issue_pb.SetIssueAssigneeRequest, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  setIssueAssignee(argument: alis_open_support_v1_issue_pb.SetIssueAssigneeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  setIssueAssignee(argument: alis_open_support_v1_issue_pb.SetIssueAssigneeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  addIssueViewers(argument: alis_open_support_v1_issue_pb.AddIssueViewersRequest, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  addIssueViewers(argument: alis_open_support_v1_issue_pb.AddIssueViewersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  addIssueViewers(argument: alis_open_support_v1_issue_pb.AddIssueViewersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  removeIssueViewers(argument: alis_open_support_v1_issue_pb.RemoveIssueViewersRequest, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  removeIssueViewers(argument: alis_open_support_v1_issue_pb.RemoveIssueViewersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
  removeIssueViewers(argument: alis_open_support_v1_issue_pb.RemoveIssueViewersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issue_pb.Issue>): grpc.ClientUnaryCall;
}
