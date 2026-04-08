import * as grpcWeb from 'grpc-web';

import * as alis_adk_sessions_v1_sessions_pb from '../../../../alis/adk/sessions/v1/sessions_pb'; // proto import: "alis/adk/sessions/v1/sessions.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class SessionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSession(
    request: alis_adk_sessions_v1_sessions_pb.CreateSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_adk_sessions_v1_sessions_pb.Session) => void
  ): grpcWeb.ClientReadableStream<alis_adk_sessions_v1_sessions_pb.Session>;

  getSession(
    request: alis_adk_sessions_v1_sessions_pb.GetSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_adk_sessions_v1_sessions_pb.Session) => void
  ): grpcWeb.ClientReadableStream<alis_adk_sessions_v1_sessions_pb.Session>;

  listSessions(
    request: alis_adk_sessions_v1_sessions_pb.ListSessionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_adk_sessions_v1_sessions_pb.ListSessionsResponse) => void
  ): grpcWeb.ClientReadableStream<alis_adk_sessions_v1_sessions_pb.ListSessionsResponse>;

  updateSession(
    request: alis_adk_sessions_v1_sessions_pb.UpdateSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_adk_sessions_v1_sessions_pb.Session) => void
  ): grpcWeb.ClientReadableStream<alis_adk_sessions_v1_sessions_pb.Session>;

  deleteSession(
    request: alis_adk_sessions_v1_sessions_pb.DeleteSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getEvent(
    request: alis_adk_sessions_v1_sessions_pb.GetEventRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_adk_sessions_v1_sessions_pb.SessionEvent) => void
  ): grpcWeb.ClientReadableStream<alis_adk_sessions_v1_sessions_pb.SessionEvent>;

  listEvents(
    request: alis_adk_sessions_v1_sessions_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_adk_sessions_v1_sessions_pb.ListEventsResponse) => void
  ): grpcWeb.ClientReadableStream<alis_adk_sessions_v1_sessions_pb.ListEventsResponse>;

  appendEvent(
    request: alis_adk_sessions_v1_sessions_pb.AppendEventRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_adk_sessions_v1_sessions_pb.AppendEventResponse) => void
  ): grpcWeb.ClientReadableStream<alis_adk_sessions_v1_sessions_pb.AppendEventResponse>;

}

export class SessionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSession(
    request: alis_adk_sessions_v1_sessions_pb.CreateSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_adk_sessions_v1_sessions_pb.Session>;

  getSession(
    request: alis_adk_sessions_v1_sessions_pb.GetSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_adk_sessions_v1_sessions_pb.Session>;

  listSessions(
    request: alis_adk_sessions_v1_sessions_pb.ListSessionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_adk_sessions_v1_sessions_pb.ListSessionsResponse>;

  updateSession(
    request: alis_adk_sessions_v1_sessions_pb.UpdateSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_adk_sessions_v1_sessions_pb.Session>;

  deleteSession(
    request: alis_adk_sessions_v1_sessions_pb.DeleteSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getEvent(
    request: alis_adk_sessions_v1_sessions_pb.GetEventRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_adk_sessions_v1_sessions_pb.SessionEvent>;

  listEvents(
    request: alis_adk_sessions_v1_sessions_pb.ListEventsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_adk_sessions_v1_sessions_pb.ListEventsResponse>;

  appendEvent(
    request: alis_adk_sessions_v1_sessions_pb.AppendEventRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_adk_sessions_v1_sessions_pb.AppendEventResponse>;

}

