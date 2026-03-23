import * as grpcWeb from 'grpc-web';

import * as alis_open_pubsub_v1_pubsub_pb from '../../../../alis/open/pubsub/v1/pubsub_pb'; // proto import: "alis/open/pubsub/v1/pubsub.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class EventsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  handleEvent(
    request: alis_open_pubsub_v1_pubsub_pb.PubSubMessage,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class EventsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  handleEvent(
    request: alis_open_pubsub_v1_pubsub_pb.PubSubMessage,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

