// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.flows.v1
// file: alis/open/flows/v1/flows.proto

import * as alis_open_flows_v1_flows_pb from "../../../../alis/open/flows/v1/flows_pb";
import * as alis_open_pubsub_v1_pubsub_pb from "../../../../alis/open/pubsub/v1/pubsub_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IFlowsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getFlow: grpc.MethodDefinition<alis_open_flows_v1_flows_pb.GetFlowRequest, alis_open_flows_v1_flows_pb.Flow>;
  listFlows: grpc.MethodDefinition<alis_open_flows_v1_flows_pb.ListFlowsRequest, alis_open_flows_v1_flows_pb.ListFlowsResponse>;
  streamFlows: grpc.MethodDefinition<alis_open_flows_v1_flows_pb.StreamFlowsRequest, alis_open_flows_v1_flows_pb.Flow>;
  generateFlowTree: grpc.MethodDefinition<alis_open_flows_v1_flows_pb.GenerateFlowTreeRequest, alis_open_flows_v1_flows_pb.GenerateFlowTreeResponse>;
  handleEvent: grpc.MethodDefinition<alis_open_pubsub_v1_pubsub_pb.PubSubMessage, google_protobuf_empty_pb.Empty>;
  handleDeadLetter: grpc.MethodDefinition<alis_open_pubsub_v1_pubsub_pb.PubSubMessage, google_protobuf_empty_pb.Empty>;
}

export const FlowsServiceService: IFlowsServiceService;

export interface IFlowsServiceServer extends grpc.UntypedServiceImplementation {
  getFlow: grpc.handleUnaryCall<alis_open_flows_v1_flows_pb.GetFlowRequest, alis_open_flows_v1_flows_pb.Flow>;
  listFlows: grpc.handleUnaryCall<alis_open_flows_v1_flows_pb.ListFlowsRequest, alis_open_flows_v1_flows_pb.ListFlowsResponse>;
  streamFlows: grpc.handleServerStreamingCall<alis_open_flows_v1_flows_pb.StreamFlowsRequest, alis_open_flows_v1_flows_pb.Flow>;
  generateFlowTree: grpc.handleUnaryCall<alis_open_flows_v1_flows_pb.GenerateFlowTreeRequest, alis_open_flows_v1_flows_pb.GenerateFlowTreeResponse>;
  handleEvent: grpc.handleUnaryCall<alis_open_pubsub_v1_pubsub_pb.PubSubMessage, google_protobuf_empty_pb.Empty>;
  handleDeadLetter: grpc.handleUnaryCall<alis_open_pubsub_v1_pubsub_pb.PubSubMessage, google_protobuf_empty_pb.Empty>;
}

export class FlowsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getFlow(argument: alis_open_flows_v1_flows_pb.GetFlowRequest, callback: grpc.requestCallback<alis_open_flows_v1_flows_pb.Flow>): grpc.ClientUnaryCall;
  getFlow(argument: alis_open_flows_v1_flows_pb.GetFlowRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_flows_v1_flows_pb.Flow>): grpc.ClientUnaryCall;
  getFlow(argument: alis_open_flows_v1_flows_pb.GetFlowRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_flows_v1_flows_pb.Flow>): grpc.ClientUnaryCall;
  listFlows(argument: alis_open_flows_v1_flows_pb.ListFlowsRequest, callback: grpc.requestCallback<alis_open_flows_v1_flows_pb.ListFlowsResponse>): grpc.ClientUnaryCall;
  listFlows(argument: alis_open_flows_v1_flows_pb.ListFlowsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_flows_v1_flows_pb.ListFlowsResponse>): grpc.ClientUnaryCall;
  listFlows(argument: alis_open_flows_v1_flows_pb.ListFlowsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_flows_v1_flows_pb.ListFlowsResponse>): grpc.ClientUnaryCall;
  streamFlows(argument: alis_open_flows_v1_flows_pb.StreamFlowsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<alis_open_flows_v1_flows_pb.Flow>;
  streamFlows(argument: alis_open_flows_v1_flows_pb.StreamFlowsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<alis_open_flows_v1_flows_pb.Flow>;
  generateFlowTree(argument: alis_open_flows_v1_flows_pb.GenerateFlowTreeRequest, callback: grpc.requestCallback<alis_open_flows_v1_flows_pb.GenerateFlowTreeResponse>): grpc.ClientUnaryCall;
  generateFlowTree(argument: alis_open_flows_v1_flows_pb.GenerateFlowTreeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_flows_v1_flows_pb.GenerateFlowTreeResponse>): grpc.ClientUnaryCall;
  generateFlowTree(argument: alis_open_flows_v1_flows_pb.GenerateFlowTreeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_flows_v1_flows_pb.GenerateFlowTreeResponse>): grpc.ClientUnaryCall;
  handleEvent(argument: alis_open_pubsub_v1_pubsub_pb.PubSubMessage, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleEvent(argument: alis_open_pubsub_v1_pubsub_pb.PubSubMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleEvent(argument: alis_open_pubsub_v1_pubsub_pb.PubSubMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleDeadLetter(argument: alis_open_pubsub_v1_pubsub_pb.PubSubMessage, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleDeadLetter(argument: alis_open_pubsub_v1_pubsub_pb.PubSubMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleDeadLetter(argument: alis_open_pubsub_v1_pubsub_pb.PubSubMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
