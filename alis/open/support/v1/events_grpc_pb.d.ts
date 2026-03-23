// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.support.v1
// file: alis/open/support/v1/events.proto

import * as alis_open_support_v1_events_pb from "../../../../alis/open/support/v1/events_pb";
import * as alis_open_pubsub_v1_pubsub_pb from "../../../../alis/open/pubsub/v1/pubsub_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IEventsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  handleEvent: grpc.MethodDefinition<alis_open_pubsub_v1_pubsub_pb.PubSubMessage, google_protobuf_empty_pb.Empty>;
}

export const EventsServiceService: IEventsServiceService;

export interface IEventsServiceServer extends grpc.UntypedServiceImplementation {
  handleEvent: grpc.handleUnaryCall<alis_open_pubsub_v1_pubsub_pb.PubSubMessage, google_protobuf_empty_pb.Empty>;
}

export class EventsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  handleEvent(argument: alis_open_pubsub_v1_pubsub_pb.PubSubMessage, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleEvent(argument: alis_open_pubsub_v1_pubsub_pb.PubSubMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleEvent(argument: alis_open_pubsub_v1_pubsub_pb.PubSubMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
