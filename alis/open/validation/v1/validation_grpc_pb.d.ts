// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.validation.v1
// file: alis/open/validation/v1/validation.proto

import * as alis_open_validation_v1_validation_pb from "../../../../alis/open/validation/v1/validation_pb";
import * as grpc from "grpc";

interface IValidationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  retrieveRules: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  validateMessage: grpc.MethodDefinition<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
}

export const ValidationServiceService: IValidationServiceService;

export interface IValidationServiceServer extends grpc.UntypedServiceImplementation {
  retrieveRules: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.RetrieveRulesRequest, alis_open_validation_v1_validation_pb.RetrieveRulesResponse>;
  validateMessage: grpc.handleUnaryCall<alis_open_validation_v1_validation_pb.ValidateMessageRequest, alis_open_validation_v1_validation_pb.ValidateMessageResponse>;
}

export class ValidationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  retrieveRules(argument: alis_open_validation_v1_validation_pb.RetrieveRulesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.RetrieveRulesResponse>): grpc.ClientUnaryCall;
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
  validateMessage(argument: alis_open_validation_v1_validation_pb.ValidateMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_validation_pb.ValidateMessageResponse>): grpc.ClientUnaryCall;
}
