// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_flows_v1_flows_pb = require('../../../../alis/open/flows/v1/flows_pb.js');
var alis_open_pubsub_v1_pubsub_pb = require('../../../../alis/open/pubsub/v1/pubsub_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_alis_open_flows_v1_Flow(arg) {
  if (!(arg instanceof alis_open_flows_v1_flows_pb.Flow)) {
    throw new Error('Expected argument of type alis.open.flows.v1.Flow');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_flows_v1_Flow(buffer_arg) {
  return alis_open_flows_v1_flows_pb.Flow.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_flows_v1_GenerateFlowTreeRequest(arg) {
  if (!(arg instanceof alis_open_flows_v1_flows_pb.GenerateFlowTreeRequest)) {
    throw new Error('Expected argument of type alis.open.flows.v1.GenerateFlowTreeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_flows_v1_GenerateFlowTreeRequest(buffer_arg) {
  return alis_open_flows_v1_flows_pb.GenerateFlowTreeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_flows_v1_GenerateFlowTreeResponse(arg) {
  if (!(arg instanceof alis_open_flows_v1_flows_pb.GenerateFlowTreeResponse)) {
    throw new Error('Expected argument of type alis.open.flows.v1.GenerateFlowTreeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_flows_v1_GenerateFlowTreeResponse(buffer_arg) {
  return alis_open_flows_v1_flows_pb.GenerateFlowTreeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_flows_v1_GetFlowRequest(arg) {
  if (!(arg instanceof alis_open_flows_v1_flows_pb.GetFlowRequest)) {
    throw new Error('Expected argument of type alis.open.flows.v1.GetFlowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_flows_v1_GetFlowRequest(buffer_arg) {
  return alis_open_flows_v1_flows_pb.GetFlowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_flows_v1_ListFlowsRequest(arg) {
  if (!(arg instanceof alis_open_flows_v1_flows_pb.ListFlowsRequest)) {
    throw new Error('Expected argument of type alis.open.flows.v1.ListFlowsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_flows_v1_ListFlowsRequest(buffer_arg) {
  return alis_open_flows_v1_flows_pb.ListFlowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_flows_v1_ListFlowsResponse(arg) {
  if (!(arg instanceof alis_open_flows_v1_flows_pb.ListFlowsResponse)) {
    throw new Error('Expected argument of type alis.open.flows.v1.ListFlowsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_flows_v1_ListFlowsResponse(buffer_arg) {
  return alis_open_flows_v1_flows_pb.ListFlowsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_flows_v1_StreamFlowsRequest(arg) {
  if (!(arg instanceof alis_open_flows_v1_flows_pb.StreamFlowsRequest)) {
    throw new Error('Expected argument of type alis.open.flows.v1.StreamFlowsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_flows_v1_StreamFlowsRequest(buffer_arg) {
  return alis_open_flows_v1_flows_pb.StreamFlowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_pubsub_v1_PubSubMessage(arg) {
  if (!(arg instanceof alis_open_pubsub_v1_pubsub_pb.PubSubMessage)) {
    throw new Error('Expected argument of type alis.open.pubsub.v1.PubSubMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_pubsub_v1_PubSubMessage(buffer_arg) {
  return alis_open_pubsub_v1_pubsub_pb.PubSubMessage.deserializeBinary(new Uint8Array(buffer_arg));
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


// Manages Flow resources with an API service.
//
// When an API wants to communicate more details on the progress or steps while running,
// this service would be used by clients to retrieve the Flow resources which will provide
// additional details on the underlying business logic.
var FlowsServiceService = exports.FlowsServiceService = {
  // Get a Flow resource
getFlow: {
    path: '/alis.open.flows.v1.FlowsService/GetFlow',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_flows_v1_flows_pb.GetFlowRequest,
    responseType: alis_open_flows_v1_flows_pb.Flow,
    requestSerialize: serialize_alis_open_flows_v1_GetFlowRequest,
    requestDeserialize: deserialize_alis_open_flows_v1_GetFlowRequest,
    responseSerialize: serialize_alis_open_flows_v1_Flow,
    responseDeserialize: deserialize_alis_open_flows_v1_Flow,
  },
  // Lists Flows.
listFlows: {
    path: '/alis.open.flows.v1.FlowsService/ListFlows',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_flows_v1_flows_pb.ListFlowsRequest,
    responseType: alis_open_flows_v1_flows_pb.ListFlowsResponse,
    requestSerialize: serialize_alis_open_flows_v1_ListFlowsRequest,
    requestDeserialize: deserialize_alis_open_flows_v1_ListFlowsRequest,
    responseSerialize: serialize_alis_open_flows_v1_ListFlowsResponse,
    responseDeserialize: deserialize_alis_open_flows_v1_ListFlowsResponse,
  },
  // Streams Flows.
streamFlows: {
    path: '/alis.open.flows.v1.FlowsService/StreamFlows',
    requestStream: false,
    responseStream: true,
    requestType: alis_open_flows_v1_flows_pb.StreamFlowsRequest,
    responseType: alis_open_flows_v1_flows_pb.Flow,
    requestSerialize: serialize_alis_open_flows_v1_StreamFlowsRequest,
    requestDeserialize: deserialize_alis_open_flows_v1_StreamFlowsRequest,
    responseSerialize: serialize_alis_open_flows_v1_Flow,
    responseDeserialize: deserialize_alis_open_flows_v1_Flow,
  },
  // Generate a tree of Flows and Steps.
// This method returns a single Flow resource but with the Flow children populated.
//
// The response also includes the next immediate children of the leaf nodes(steps at the max depth).
// This can be used to generate the next level of the tree on demand.
generateFlowTree: {
    path: '/alis.open.flows.v1.FlowsService/GenerateFlowTree',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_flows_v1_flows_pb.GenerateFlowTreeRequest,
    responseType: alis_open_flows_v1_flows_pb.GenerateFlowTreeResponse,
    requestSerialize: serialize_alis_open_flows_v1_GenerateFlowTreeRequest,
    requestDeserialize: deserialize_alis_open_flows_v1_GenerateFlowTreeRequest,
    responseSerialize: serialize_alis_open_flows_v1_GenerateFlowTreeResponse,
    responseDeserialize: deserialize_alis_open_flows_v1_GenerateFlowTreeResponse,
  },
  // Handles an event from Pub/Sub
handleEvent: {
    path: '/alis.open.flows.v1.FlowsService/HandleEvent',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_pubsub_v1_pubsub_pb.PubSubMessage,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_open_pubsub_v1_PubSubMessage,
    requestDeserialize: deserialize_alis_open_pubsub_v1_PubSubMessage,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Handles a dead letter event from Pub/Sub
handleDeadLetter: {
    path: '/alis.open.flows.v1.FlowsService/HandleDeadLetter',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_pubsub_v1_pubsub_pb.PubSubMessage,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_open_pubsub_v1_PubSubMessage,
    requestDeserialize: deserialize_alis_open_pubsub_v1_PubSubMessage,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.FlowsServiceClient = grpc.makeGenericClientConstructor(FlowsServiceService, 'FlowsService');
