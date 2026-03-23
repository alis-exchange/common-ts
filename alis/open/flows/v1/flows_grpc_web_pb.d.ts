import * as grpcWeb from 'grpc-web';

import * as alis_open_flows_v1_flows_pb from '../../../../alis/open/flows/v1/flows_pb'; // proto import: "alis/open/flows/v1/flows.proto"
import * as alis_open_pubsub_v1_pubsub_pb from '../../../../alis/open/pubsub/v1/pubsub_pb'; // proto import: "alis/open/pubsub/v1/pubsub.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class FlowsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getFlow(
    request: alis_open_flows_v1_flows_pb.GetFlowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_flows_v1_flows_pb.Flow) => void
  ): grpcWeb.ClientReadableStream<alis_open_flows_v1_flows_pb.Flow>;

  listFlows(
    request: alis_open_flows_v1_flows_pb.ListFlowsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_flows_v1_flows_pb.ListFlowsResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_flows_v1_flows_pb.ListFlowsResponse>;

  streamFlows(
    request: alis_open_flows_v1_flows_pb.StreamFlowsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alis_open_flows_v1_flows_pb.Flow>;

  generateFlowTree(
    request: alis_open_flows_v1_flows_pb.GenerateFlowTreeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_flows_v1_flows_pb.GenerateFlowTreeResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_flows_v1_flows_pb.GenerateFlowTreeResponse>;

  handleEvent(
    request: alis_open_pubsub_v1_pubsub_pb.PubSubMessage,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  handleDeadLetter(
    request: alis_open_pubsub_v1_pubsub_pb.PubSubMessage,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class FlowsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getFlow(
    request: alis_open_flows_v1_flows_pb.GetFlowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_flows_v1_flows_pb.Flow>;

  listFlows(
    request: alis_open_flows_v1_flows_pb.ListFlowsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_flows_v1_flows_pb.ListFlowsResponse>;

  streamFlows(
    request: alis_open_flows_v1_flows_pb.StreamFlowsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alis_open_flows_v1_flows_pb.Flow>;

  generateFlowTree(
    request: alis_open_flows_v1_flows_pb.GenerateFlowTreeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_flows_v1_flows_pb.GenerateFlowTreeResponse>;

  handleEvent(
    request: alis_open_pubsub_v1_pubsub_pb.PubSubMessage,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  handleDeadLetter(
    request: alis_open_pubsub_v1_pubsub_pb.PubSubMessage,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

