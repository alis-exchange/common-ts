// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_adk_sessions_v1_sessions_pb = require('../../../../alis/adk/sessions/v1/sessions_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('../../../../google/type/date_pb.js');

function serialize_alis_adk_sessions_v1_AppendEventRequest(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.AppendEventRequest)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.AppendEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_AppendEventRequest(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.AppendEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_AppendEventResponse(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.AppendEventResponse)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.AppendEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_AppendEventResponse(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.AppendEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_CreateSessionRequest(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.CreateSessionRequest)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.CreateSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_CreateSessionRequest(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.CreateSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_DeleteSessionRequest(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.DeleteSessionRequest)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.DeleteSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_DeleteSessionRequest(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.DeleteSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_GetEventRequest(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.GetEventRequest)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.GetEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_GetEventRequest(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.GetEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_GetSessionRequest(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.GetSessionRequest)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.GetSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_GetSessionRequest(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.GetSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_ListEventsRequest(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.ListEventsRequest)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.ListEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_ListEventsRequest(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.ListEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_ListEventsResponse(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.ListEventsResponse)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.ListEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_ListEventsResponse(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.ListEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_ListSessionsRequest(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.ListSessionsRequest)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.ListSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_ListSessionsRequest(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.ListSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_ListSessionsResponse(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.ListSessionsResponse)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.ListSessionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_ListSessionsResponse(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.ListSessionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_Session(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.Session)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.Session');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_Session(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.Session.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_SessionEvent(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.SessionEvent)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.SessionEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_SessionEvent(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.SessionEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_adk_sessions_v1_UpdateSessionRequest(arg) {
  if (!(arg instanceof alis_adk_sessions_v1_sessions_pb.UpdateSessionRequest)) {
    throw new Error('Expected argument of type alis.adk.sessions.v1.UpdateSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_adk_sessions_v1_UpdateSessionRequest(buffer_arg) {
  return alis_adk_sessions_v1_sessions_pb.UpdateSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// SessionService manages agent sessions and session events.
var SessionServiceService = exports.SessionServiceService = {
  // Creates a new session.
createSession: {
    path: '/alis.adk.sessions.v1.SessionService/CreateSession',
    requestStream: false,
    responseStream: false,
    requestType: alis_adk_sessions_v1_sessions_pb.CreateSessionRequest,
    responseType: alis_adk_sessions_v1_sessions_pb.Session,
    requestSerialize: serialize_alis_adk_sessions_v1_CreateSessionRequest,
    requestDeserialize: deserialize_alis_adk_sessions_v1_CreateSessionRequest,
    responseSerialize: serialize_alis_adk_sessions_v1_Session,
    responseDeserialize: deserialize_alis_adk_sessions_v1_Session,
  },
  // Gets details of a specific session.
getSession: {
    path: '/alis.adk.sessions.v1.SessionService/GetSession',
    requestStream: false,
    responseStream: false,
    requestType: alis_adk_sessions_v1_sessions_pb.GetSessionRequest,
    responseType: alis_adk_sessions_v1_sessions_pb.Session,
    requestSerialize: serialize_alis_adk_sessions_v1_GetSessionRequest,
    requestDeserialize: deserialize_alis_adk_sessions_v1_GetSessionRequest,
    responseSerialize: serialize_alis_adk_sessions_v1_Session,
    responseDeserialize: deserialize_alis_adk_sessions_v1_Session,
  },
  // Lists sessions with optional filtering and ordering.
listSessions: {
    path: '/alis.adk.sessions.v1.SessionService/ListSessions',
    requestStream: false,
    responseStream: false,
    requestType: alis_adk_sessions_v1_sessions_pb.ListSessionsRequest,
    responseType: alis_adk_sessions_v1_sessions_pb.ListSessionsResponse,
    requestSerialize: serialize_alis_adk_sessions_v1_ListSessionsRequest,
    requestDeserialize: deserialize_alis_adk_sessions_v1_ListSessionsRequest,
    responseSerialize: serialize_alis_adk_sessions_v1_ListSessionsResponse,
    responseDeserialize: deserialize_alis_adk_sessions_v1_ListSessionsResponse,
  },
  // Updates a specific session.
updateSession: {
    path: '/alis.adk.sessions.v1.SessionService/UpdateSession',
    requestStream: false,
    responseStream: false,
    requestType: alis_adk_sessions_v1_sessions_pb.UpdateSessionRequest,
    responseType: alis_adk_sessions_v1_sessions_pb.Session,
    requestSerialize: serialize_alis_adk_sessions_v1_UpdateSessionRequest,
    requestDeserialize: deserialize_alis_adk_sessions_v1_UpdateSessionRequest,
    responseSerialize: serialize_alis_adk_sessions_v1_Session,
    responseDeserialize: deserialize_alis_adk_sessions_v1_Session,
  },
  // Deletes a specific session.
deleteSession: {
    path: '/alis.adk.sessions.v1.SessionService/DeleteSession',
    requestStream: false,
    responseStream: false,
    requestType: alis_adk_sessions_v1_sessions_pb.DeleteSessionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_adk_sessions_v1_DeleteSessionRequest,
    requestDeserialize: deserialize_alis_adk_sessions_v1_DeleteSessionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets a specific event from a session.
getEvent: {
    path: '/alis.adk.sessions.v1.SessionService/GetEvent',
    requestStream: false,
    responseStream: false,
    requestType: alis_adk_sessions_v1_sessions_pb.GetEventRequest,
    responseType: alis_adk_sessions_v1_sessions_pb.SessionEvent,
    requestSerialize: serialize_alis_adk_sessions_v1_GetEventRequest,
    requestDeserialize: deserialize_alis_adk_sessions_v1_GetEventRequest,
    responseSerialize: serialize_alis_adk_sessions_v1_SessionEvent,
    responseDeserialize: deserialize_alis_adk_sessions_v1_SessionEvent,
  },
  // Lists events in a given session with optional filtering and ordering.
listEvents: {
    path: '/alis.adk.sessions.v1.SessionService/ListEvents',
    requestStream: false,
    responseStream: false,
    requestType: alis_adk_sessions_v1_sessions_pb.ListEventsRequest,
    responseType: alis_adk_sessions_v1_sessions_pb.ListEventsResponse,
    requestSerialize: serialize_alis_adk_sessions_v1_ListEventsRequest,
    requestDeserialize: deserialize_alis_adk_sessions_v1_ListEventsRequest,
    responseSerialize: serialize_alis_adk_sessions_v1_ListEventsResponse,
    responseDeserialize: deserialize_alis_adk_sessions_v1_ListEventsResponse,
  },
  // Appends an event to a given session.
appendEvent: {
    path: '/alis.adk.sessions.v1.SessionService/AppendEvent',
    requestStream: false,
    responseStream: false,
    requestType: alis_adk_sessions_v1_sessions_pb.AppendEventRequest,
    responseType: alis_adk_sessions_v1_sessions_pb.AppendEventResponse,
    requestSerialize: serialize_alis_adk_sessions_v1_AppendEventRequest,
    requestDeserialize: deserialize_alis_adk_sessions_v1_AppendEventRequest,
    responseSerialize: serialize_alis_adk_sessions_v1_AppendEventResponse,
    responseDeserialize: deserialize_alis_adk_sessions_v1_AppendEventResponse,
  },
};

exports.SessionServiceClient = grpc.makeGenericClientConstructor(SessionServiceService, 'SessionService');
