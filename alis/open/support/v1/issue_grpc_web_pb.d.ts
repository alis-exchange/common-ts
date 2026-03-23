import * as grpcWeb from 'grpc-web';

import * as alis_open_iam_v1_iam_pb from '../../../../alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as alis_open_support_v1_issue_pb from '../../../../alis/open/support/v1/issue_pb'; // proto import: "alis/open/support/v1/issue.proto"
import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class IssuesServiceClient {
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

  createIssue(
    request: alis_open_support_v1_issue_pb.CreateIssueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issue_pb.Issue) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issue_pb.Issue>;

  updateIssue(
    request: alis_open_support_v1_issue_pb.UpdateIssueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issue_pb.Issue) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issue_pb.Issue>;

  getIssue(
    request: alis_open_support_v1_issue_pb.GetIssueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issue_pb.Issue) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issue_pb.Issue>;

  listIssues(
    request: alis_open_support_v1_issue_pb.ListIssuesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issue_pb.ListIssuesResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issue_pb.ListIssuesResponse>;

  deleteIssue(
    request: alis_open_support_v1_issue_pb.DeleteIssueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  editNewIssue(
    request: alis_open_support_v1_issue_pb.EditNewIssueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issue_pb.Issue) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issue_pb.Issue>;

  cancelNewIssue(
    request: alis_open_support_v1_issue_pb.CancelNewIssueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setIssueAssignee(
    request: alis_open_support_v1_issue_pb.SetIssueAssigneeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issue_pb.Issue) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issue_pb.Issue>;

  addIssueViewers(
    request: alis_open_support_v1_issue_pb.AddIssueViewersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issue_pb.Issue) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issue_pb.Issue>;

  removeIssueViewers(
    request: alis_open_support_v1_issue_pb.RemoveIssueViewersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issue_pb.Issue) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issue_pb.Issue>;

}

export class IssuesServicePromiseClient {
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

  createIssue(
    request: alis_open_support_v1_issue_pb.CreateIssueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issue_pb.Issue>;

  updateIssue(
    request: alis_open_support_v1_issue_pb.UpdateIssueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issue_pb.Issue>;

  getIssue(
    request: alis_open_support_v1_issue_pb.GetIssueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issue_pb.Issue>;

  listIssues(
    request: alis_open_support_v1_issue_pb.ListIssuesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issue_pb.ListIssuesResponse>;

  deleteIssue(
    request: alis_open_support_v1_issue_pb.DeleteIssueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  editNewIssue(
    request: alis_open_support_v1_issue_pb.EditNewIssueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issue_pb.Issue>;

  cancelNewIssue(
    request: alis_open_support_v1_issue_pb.CancelNewIssueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setIssueAssignee(
    request: alis_open_support_v1_issue_pb.SetIssueAssigneeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issue_pb.Issue>;

  addIssueViewers(
    request: alis_open_support_v1_issue_pb.AddIssueViewersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issue_pb.Issue>;

  removeIssueViewers(
    request: alis_open_support_v1_issue_pb.RemoveIssueViewersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issue_pb.Issue>;

}

