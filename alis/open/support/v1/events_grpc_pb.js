// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_support_v1_events_pb = require('../../../../alis/open/support/v1/events_pb.js');
var alis_open_pubsub_v1_pubsub_pb = require('../../../../alis/open/pubsub/v1/pubsub_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

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


// Service for handling events.
var EventsServiceService = exports.EventsServiceService = {
  // Handles an event from pubsub.
handleEvent: {
    path: '/alis.open.support.v1.EventsService/HandleEvent',
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

exports.EventsServiceClient = grpc.makeGenericClientConstructor(EventsServiceService, 'EventsService');
