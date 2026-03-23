// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.support.v1
// file: alis/open/support/v1/guide.proto

import * as alis_open_support_v1_guide_pb from "../../../../alis/open/support/v1/guide_pb";
import * as alis_open_validation_v1_validation_pb from "../../../../alis/open/validation/v1/validation_pb";
import * as grpc from "grpc";

interface IGuidesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  validateMessage: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  getGuide: grpc.MethodDefinition<alis_open_support_v1_guide_pb.GetGuideRequest, alis_open_support_v1_guide_pb.Guide>;
  listGuides: grpc.MethodDefinition<alis_open_support_v1_guide_pb.ListGuidesRequest, alis_open_support_v1_guide_pb.ListGuidesResponse>;
  syncGuide: grpc.MethodDefinition<alis_open_support_v1_guide_pb.SyncGuideRequest, alis_open_support_v1_guide_pb.Guide>;
}

export const GuidesServiceService: IGuidesServiceService;

export interface IGuidesServiceServer extends grpc.UntypedServiceImplementation {
  validateMessage: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
  retrieveRules: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  getGuide: grpc.handleUnaryCall<alis_open_support_v1_guide_pb.GetGuideRequest, alis_open_support_v1_guide_pb.Guide>;
  listGuides: grpc.handleUnaryCall<alis_open_support_v1_guide_pb.ListGuidesRequest, alis_open_support_v1_guide_pb.ListGuidesResponse>;
  syncGuide: grpc.handleUnaryCall<alis_open_support_v1_guide_pb.SyncGuideRequest, alis_open_support_v1_guide_pb.Guide>;
}

export class GuidesServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  getGuide(argument: alis_open_support_v1_guide_pb.GetGuideRequest, callback: grpc.requestCallback<alis_open_support_v1_guide_pb.Guide>): grpc.ClientUnaryCall;
  getGuide(argument: alis_open_support_v1_guide_pb.GetGuideRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_guide_pb.Guide>): grpc.ClientUnaryCall;
  getGuide(argument: alis_open_support_v1_guide_pb.GetGuideRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_guide_pb.Guide>): grpc.ClientUnaryCall;
  listGuides(argument: alis_open_support_v1_guide_pb.ListGuidesRequest, callback: grpc.requestCallback<alis_open_support_v1_guide_pb.ListGuidesResponse>): grpc.ClientUnaryCall;
  listGuides(argument: alis_open_support_v1_guide_pb.ListGuidesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_guide_pb.ListGuidesResponse>): grpc.ClientUnaryCall;
  listGuides(argument: alis_open_support_v1_guide_pb.ListGuidesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_guide_pb.ListGuidesResponse>): grpc.ClientUnaryCall;
  syncGuide(argument: alis_open_support_v1_guide_pb.SyncGuideRequest, callback: grpc.requestCallback<alis_open_support_v1_guide_pb.Guide>): grpc.ClientUnaryCall;
  syncGuide(argument: alis_open_support_v1_guide_pb.SyncGuideRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_guide_pb.Guide>): grpc.ClientUnaryCall;
  syncGuide(argument: alis_open_support_v1_guide_pb.SyncGuideRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_support_v1_guide_pb.Guide>): grpc.ClientUnaryCall;
}
