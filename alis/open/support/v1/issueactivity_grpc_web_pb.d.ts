import * as grpcWeb from 'grpc-web';

import * as alis_open_support_v1_issueactivity_pb from '../../../../alis/open/support/v1/issueactivity_pb'; // proto import: "alis/open/support/v1/issueactivity.proto"
import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class IssueActivitiesServiceClient {
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

  createIssueActivity(
    request: alis_open_support_v1_issueactivity_pb.CreateIssueActivityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issueactivity_pb.IssueActivity) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issueactivity_pb.IssueActivity>;

  getIssueActivity(
    request: alis_open_support_v1_issueactivity_pb.GetIssueActivityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issueactivity_pb.IssueActivity) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issueactivity_pb.IssueActivity>;

  updateIssueActivity(
    request: alis_open_support_v1_issueactivity_pb.UpdateIssueActivityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issueactivity_pb.IssueActivity) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issueactivity_pb.IssueActivity>;

  deleteIssueActivity(
    request: alis_open_support_v1_issueactivity_pb.DeleteIssueActivityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listIssueActivities(
    request: alis_open_support_v1_issueactivity_pb.ListIssueActivitiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issueactivity_pb.ListIssueActivitiesResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issueactivity_pb.ListIssueActivitiesResponse>;

  createComment(
    request: alis_open_support_v1_issueactivity_pb.CreateCommentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issueactivity_pb.IssueActivity) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issueactivity_pb.IssueActivity>;

  updateComment(
    request: alis_open_support_v1_issueactivity_pb.UpdateCommentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_support_v1_issueactivity_pb.IssueActivity) => void
  ): grpcWeb.ClientReadableStream<alis_open_support_v1_issueactivity_pb.IssueActivity>;

  deleteComment(
    request: alis_open_support_v1_issueactivity_pb.DeleteCommentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class IssueActivitiesServicePromiseClient {
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

  createIssueActivity(
    request: alis_open_support_v1_issueactivity_pb.CreateIssueActivityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issueactivity_pb.IssueActivity>;

  getIssueActivity(
    request: alis_open_support_v1_issueactivity_pb.GetIssueActivityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issueactivity_pb.IssueActivity>;

  updateIssueActivity(
    request: alis_open_support_v1_issueactivity_pb.UpdateIssueActivityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issueactivity_pb.IssueActivity>;

  deleteIssueActivity(
    request: alis_open_support_v1_issueactivity_pb.DeleteIssueActivityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listIssueActivities(
    request: alis_open_support_v1_issueactivity_pb.ListIssueActivitiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issueactivity_pb.ListIssueActivitiesResponse>;

  createComment(
    request: alis_open_support_v1_issueactivity_pb.CreateCommentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issueactivity_pb.IssueActivity>;

  updateComment(
    request: alis_open_support_v1_issueactivity_pb.UpdateCommentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_support_v1_issueactivity_pb.IssueActivity>;

  deleteComment(
    request: alis_open_support_v1_issueactivity_pb.DeleteCommentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

