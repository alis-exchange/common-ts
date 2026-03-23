import * as grpcWeb from 'grpc-web';

import * as alis_open_iam_v1_iam_pb from '../../../../alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as alis_open_support_v1_issuesubscriber_pb from '../../../../alis/open/support/v1/issuesubscriber_pb'; // proto import: "alis/open/support/v1/issuesubscriber.proto"
import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class IssueSubscribersServiceClient {
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

  createIssueSubscriber(
    request: alis_open_support_v1_issuesubscriber_pb.CreateIssueSubscriberRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issuesubscriber_pb.IssueSubscriber) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issuesubscriber_pb.IssueSubscriber>;

  getIssueSubscriber(
    request: alis_open_support_v1_issuesubscriber_pb.GetIssueSubscriberRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issuesubscriber_pb.IssueSubscriber) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issuesubscriber_pb.IssueSubscriber>;

  listIssueSubscribers(
    request: alis_open_support_v1_issuesubscriber_pb.ListIssueSubscribersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issuesubscriber_pb.ListIssueSubscribersResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issuesubscriber_pb.ListIssueSubscribersResponse>;

  deleteIssueSubscriber(
    request: alis_open_support_v1_issuesubscriber_pb.DeleteIssueSubscriberRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class IssueSubscribersServicePromiseClient {
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

  createIssueSubscriber(
    request: alis_open_support_v1_issuesubscriber_pb.CreateIssueSubscriberRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issuesubscriber_pb.IssueSubscriber>;

  getIssueSubscriber(
    request: alis_open_support_v1_issuesubscriber_pb.GetIssueSubscriberRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issuesubscriber_pb.IssueSubscriber>;

  listIssueSubscribers(
    request: alis_open_support_v1_issuesubscriber_pb.ListIssueSubscribersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issuesubscriber_pb.ListIssueSubscribersResponse>;

  deleteIssueSubscriber(
    request: alis_open_support_v1_issuesubscriber_pb.DeleteIssueSubscriberRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

