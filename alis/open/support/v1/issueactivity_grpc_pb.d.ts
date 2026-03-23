// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.support.v1
// file: alis/open/support/v1/issueactivity.proto

import * as alis_open_support_v1_issueactivity_pb from "../../../../alis/open/support/v1/issueactivity_pb";
import * as alis_open_validation_v1_validation_pb from "../../../../alis/open/validation/v1/validation_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IIssueActivitiesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  validateMessage: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  createIssueActivity: grpc.MethodDefinition<alis_open_support_v1_issueactivity_pb.CreateIssueActivityRequest, alis_open_support_v1_issueactivity_pb.IssueActivity>;
  getIssueActivity: grpc.MethodDefinition<alis_open_support_v1_issueactivity_pb.GetIssueActivityRequest, alis_open_support_v1_issueactivity_pb.IssueActivity>;
  updateIssueActivity: grpc.MethodDefinition<alis_open_support_v1_issueactivity_pb.UpdateIssueActivityRequest, alis_open_support_v1_issueactivity_pb.IssueActivity>;
  deleteIssueActivity: grpc.MethodDefinition<alis_open_support_v1_issueactivity_pb.DeleteIssueActivityRequest, google_protobuf_empty_pb.Empty>;
  listIssueActivities: grpc.MethodDefinition<alis_open_support_v1_issueactivity_pb.ListIssueActivitiesRequest, alis_open_support_v1_issueactivity_pb.ListIssueActivitiesResponse>;
  createComment: grpc.MethodDefinition<alis_open_support_v1_issueactivity_pb.CreateCommentRequest, alis_open_support_v1_issueactivity_pb.IssueActivity>;
  updateComment: grpc.MethodDefinition<alis_open_support_v1_issueactivity_pb.UpdateCommentRequest, alis_open_support_v1_issueactivity_pb.IssueActivity>;
  deleteComment: grpc.MethodDefinition<alis_open_support_v1_issueactivity_pb.DeleteCommentRequest, google_protobuf_empty_pb.Empty>;
}

export const IssueActivitiesServiceService: IIssueActivitiesServiceService;

export interface IIssueActivitiesServiceServer extends grpc.UntypedServiceImplementation {
  validateMessage: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  createIssueActivity: grpc.handleUnaryCall<alis_open_support_v1_issueactivity_pb.CreateIssueActivityRequest, alis_open_support_v1_issueactivity_pb.IssueActivity>;
  getIssueActivity: grpc.handleUnaryCall<alis_open_support_v1_issueactivity_pb.GetIssueActivityRequest, alis_open_support_v1_issueactivity_pb.IssueActivity>;
  updateIssueActivity: grpc.handleUnaryCall<alis_open_support_v1_issueactivity_pb.UpdateIssueActivityRequest, alis_open_support_v1_issueactivity_pb.IssueActivity>;
  deleteIssueActivity: grpc.handleUnaryCall<alis_open_support_v1_issueactivity_pb.DeleteIssueActivityRequest, google_protobuf_empty_pb.Empty>;
  listIssueActivities: grpc.handleUnaryCall<alis_open_support_v1_issueactivity_pb.ListIssueActivitiesRequest, alis_open_support_v1_issueactivity_pb.ListIssueActivitiesResponse>;
  createComment: grpc.handleUnaryCall<alis_open_support_v1_issueactivity_pb.CreateCommentRequest, alis_open_support_v1_issueactivity_pb.IssueActivity>;
  updateComment: grpc.handleUnaryCall<alis_open_support_v1_issueactivity_pb.UpdateCommentRequest, alis_open_support_v1_issueactivity_pb.IssueActivity>;
  deleteComment: grpc.handleUnaryCall<alis_open_support_v1_issueactivity_pb.DeleteCommentRequest, google_protobuf_empty_pb.Empty>;
}

export class IssueActivitiesServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  createIssueActivity(argument: alis_open_support_v1_issueactivity_pb.CreateIssueActivityRequest, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  createIssueActivity(argument: alis_open_support_v1_issueactivity_pb.CreateIssueActivityRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  createIssueActivity(argument: alis_open_support_v1_issueactivity_pb.CreateIssueActivityRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  getIssueActivity(argument: alis_open_support_v1_issueactivity_pb.GetIssueActivityRequest, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  getIssueActivity(argument: alis_open_support_v1_issueactivity_pb.GetIssueActivityRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  getIssueActivity(argument: alis_open_support_v1_issueactivity_pb.GetIssueActivityRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  updateIssueActivity(argument: alis_open_support_v1_issueactivity_pb.UpdateIssueActivityRequest, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  updateIssueActivity(argument: alis_open_support_v1_issueactivity_pb.UpdateIssueActivityRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  updateIssueActivity(argument: alis_open_support_v1_issueactivity_pb.UpdateIssueActivityRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  deleteIssueActivity(argument: alis_open_support_v1_issueactivity_pb.DeleteIssueActivityRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteIssueActivity(argument: alis_open_support_v1_issueactivity_pb.DeleteIssueActivityRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteIssueActivity(argument: alis_open_support_v1_issueactivity_pb.DeleteIssueActivityRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listIssueActivities(argument: alis_open_support_v1_issueactivity_pb.ListIssueActivitiesRequest, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.ListIssueActivitiesResponse>): grpc.ClientUnaryCall;
  listIssueActivities(argument: alis_open_support_v1_issueactivity_pb.ListIssueActivitiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.ListIssueActivitiesResponse>): grpc.ClientUnaryCall;
  listIssueActivities(argument: alis_open_support_v1_issueactivity_pb.ListIssueActivitiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.ListIssueActivitiesResponse>): grpc.ClientUnaryCall;
  createComment(argument: alis_open_support_v1_issueactivity_pb.CreateCommentRequest, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  createComment(argument: alis_open_support_v1_issueactivity_pb.CreateCommentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  createComment(argument: alis_open_support_v1_issueactivity_pb.CreateCommentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  updateComment(argument: alis_open_support_v1_issueactivity_pb.UpdateCommentRequest, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  updateComment(argument: alis_open_support_v1_issueactivity_pb.UpdateCommentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  updateComment(argument: alis_open_support_v1_issueactivity_pb.UpdateCommentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_issueactivity_pb.IssueActivity>): grpc.ClientUnaryCall;
  deleteComment(argument: alis_open_support_v1_issueactivity_pb.DeleteCommentRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteComment(argument: alis_open_support_v1_issueactivity_pb.DeleteCommentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteComment(argument: alis_open_support_v1_issueactivity_pb.DeleteCommentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
