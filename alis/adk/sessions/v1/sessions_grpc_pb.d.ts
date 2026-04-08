// GENERATED CODE -- DO NOT EDIT!

// package: alis.adk.sessions.v1
// file: alis/adk/sessions/v1/sessions.proto

import * as alis_adk_sessions_v1_sessions_pb from "../../../../alis/adk/sessions/v1/sessions_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ISessionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createSession: grpc.MethodDefinition<alis_adk_sessions_v1_sessions_pb.CreateSessionRequest, alis_adk_sessions_v1_sessions_pb.Session>;
  getSession: grpc.MethodDefinition<alis_adk_sessions_v1_sessions_pb.GetSessionRequest, alis_adk_sessions_v1_sessions_pb.Session>;
  listSessions: grpc.MethodDefinition<alis_adk_sessions_v1_sessions_pb.ListSessionsRequest, alis_adk_sessions_v1_sessions_pb.ListSessionsResponse>;
  updateSession: grpc.MethodDefinition<alis_adk_sessions_v1_sessions_pb.UpdateSessionRequest, alis_adk_sessions_v1_sessions_pb.Session>;
  deleteSession: grpc.MethodDefinition<alis_adk_sessions_v1_sessions_pb.DeleteSessionRequest, google_protobuf_empty_pb.Empty>;
  getEvent: grpc.MethodDefinition<alis_adk_sessions_v1_sessions_pb.GetEventRequest, alis_adk_sessions_v1_sessions_pb.SessionEvent>;
  listEvents: grpc.MethodDefinition<alis_adk_sessions_v1_sessions_pb.ListEventsRequest, alis_adk_sessions_v1_sessions_pb.ListEventsResponse>;
  appendEvent: grpc.MethodDefinition<alis_adk_sessions_v1_sessions_pb.AppendEventRequest, alis_adk_sessions_v1_sessions_pb.AppendEventResponse>;
}

export const SessionServiceService: ISessionServiceService;

export interface ISessionServiceServer extends grpc.UntypedServiceImplementation {
  createSession: grpc.handleUnaryCall<alis_adk_sessions_v1_sessions_pb.CreateSessionRequest, alis_adk_sessions_v1_sessions_pb.Session>;
  getSession: grpc.handleUnaryCall<alis_adk_sessions_v1_sessions_pb.GetSessionRequest, alis_adk_sessions_v1_sessions_pb.Session>;
  listSessions: grpc.handleUnaryCall<alis_adk_sessions_v1_sessions_pb.ListSessionsRequest, alis_adk_sessions_v1_sessions_pb.ListSessionsResponse>;
  updateSession: grpc.handleUnaryCall<alis_adk_sessions_v1_sessions_pb.UpdateSessionRequest, alis_adk_sessions_v1_sessions_pb.Session>;
  deleteSession: grpc.handleUnaryCall<alis_adk_sessions_v1_sessions_pb.DeleteSessionRequest, google_protobuf_empty_pb.Empty>;
  getEvent: grpc.handleUnaryCall<alis_adk_sessions_v1_sessions_pb.GetEventRequest, alis_adk_sessions_v1_sessions_pb.SessionEvent>;
  listEvents: grpc.handleUnaryCall<alis_adk_sessions_v1_sessions_pb.ListEventsRequest, alis_adk_sessions_v1_sessions_pb.ListEventsResponse>;
  appendEvent: grpc.handleUnaryCall<alis_adk_sessions_v1_sessions_pb.AppendEventRequest, alis_adk_sessions_v1_sessions_pb.AppendEventResponse>;
}

export class SessionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createSession(argument: alis_adk_sessions_v1_sessions_pb.CreateSessionRequest, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.Session>): grpc.ClientUnaryCall;
  createSession(argument: alis_adk_sessions_v1_sessions_pb.CreateSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.Session>): grpc.ClientUnaryCall;
  createSession(argument: alis_adk_sessions_v1_sessions_pb.CreateSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.Session>): grpc.ClientUnaryCall;
  getSession(argument: alis_adk_sessions_v1_sessions_pb.GetSessionRequest, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.Session>): grpc.ClientUnaryCall;
  getSession(argument: alis_adk_sessions_v1_sessions_pb.GetSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.Session>): grpc.ClientUnaryCall;
  getSession(argument: alis_adk_sessions_v1_sessions_pb.GetSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.Session>): grpc.ClientUnaryCall;
  listSessions(argument: alis_adk_sessions_v1_sessions_pb.ListSessionsRequest, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.ListSessionsResponse>): grpc.ClientUnaryCall;
  listSessions(argument: alis_adk_sessions_v1_sessions_pb.ListSessionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.ListSessionsResponse>): grpc.ClientUnaryCall;
  listSessions(argument: alis_adk_sessions_v1_sessions_pb.ListSessionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.ListSessionsResponse>): grpc.ClientUnaryCall;
  updateSession(argument: alis_adk_sessions_v1_sessions_pb.UpdateSessionRequest, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.Session>): grpc.ClientUnaryCall;
  updateSession(argument: alis_adk_sessions_v1_sessions_pb.UpdateSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.Session>): grpc.ClientUnaryCall;
  updateSession(argument: alis_adk_sessions_v1_sessions_pb.UpdateSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.Session>): grpc.ClientUnaryCall;
  deleteSession(argument: alis_adk_sessions_v1_sessions_pb.DeleteSessionRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSession(argument: alis_adk_sessions_v1_sessions_pb.DeleteSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSession(argument: alis_adk_sessions_v1_sessions_pb.DeleteSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getEvent(argument: alis_adk_sessions_v1_sessions_pb.GetEventRequest, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.SessionEvent>): grpc.ClientUnaryCall;
  getEvent(argument: alis_adk_sessions_v1_sessions_pb.GetEventRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.SessionEvent>): grpc.ClientUnaryCall;
  getEvent(argument: alis_adk_sessions_v1_sessions_pb.GetEventRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.SessionEvent>): grpc.ClientUnaryCall;
  listEvents(argument: alis_adk_sessions_v1_sessions_pb.ListEventsRequest, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  listEvents(argument: alis_adk_sessions_v1_sessions_pb.ListEventsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  listEvents(argument: alis_adk_sessions_v1_sessions_pb.ListEventsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  appendEvent(argument: alis_adk_sessions_v1_sessions_pb.AppendEventRequest, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.AppendEventResponse>): grpc.ClientUnaryCall;
  appendEvent(argument: alis_adk_sessions_v1_sessions_pb.AppendEventRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.AppendEventResponse>): grpc.ClientUnaryCall;
  appendEvent(argument: alis_adk_sessions_v1_sessions_pb.AppendEventRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_adk_sessions_v1_sessions_pb.AppendEventResponse>): grpc.ClientUnaryCall;
}
