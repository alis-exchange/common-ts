// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_support_v1_guide_pb = require('../../../../alis/open/support/v1/guide_pb.js');
var alis_open_validation_v1_validation_pb = require('../../../../alis/open/validation/v1/validation_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_alis_open_support_v1_GetGuideRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_guide_pb.GetGuideRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.GetGuideRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_GetGuideRequest(buffer_arg) {
  return alis_open_support_v1_guide_pb.GetGuideRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_Guide(arg) {
  if (!(arg instanceof alis_open_support_v1_guide_pb.Guide)) {
    throw new Error('Expected argument of type alis.open.support.v1.Guide');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_Guide(buffer_arg) {
  return alis_open_support_v1_guide_pb.Guide.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_ListGuidesRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_guide_pb.ListGuidesRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.ListGuidesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_ListGuidesRequest(buffer_arg) {
  return alis_open_support_v1_guide_pb.ListGuidesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_ListGuidesResponse(arg) {
  if (!(arg instanceof alis_open_support_v1_guide_pb.ListGuidesResponse)) {
    throw new Error('Expected argument of type alis.open.support.v1.ListGuidesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_ListGuidesResponse(buffer_arg) {
  return alis_open_support_v1_guide_pb.ListGuidesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_SyncGuideRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_guide_pb.SyncGuideRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.SyncGuideRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_SyncGuideRequest(buffer_arg) {
  return alis_open_support_v1_guide_pb.SyncGuideRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_RetrieveRulesRequest(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.RetrieveRulesRequest)) {
    throw new Error('Expected argument of type alis.open.validation.v1.RetrieveRulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_RetrieveRulesRequest(buffer_arg) {
  return alis_open_validation_v1_validation_pb.RetrieveRulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_RetrieveRulesResponse(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.RetrieveRulesResponse)) {
    throw new Error('Expected argument of type alis.open.validation.v1.RetrieveRulesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_RetrieveRulesResponse(buffer_arg) {
  return alis_open_validation_v1_validation_pb.RetrieveRulesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_ValidateMessageRequest(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.ValidateMessageRequest)) {
    throw new Error('Expected argument of type alis.open.validation.v1.ValidateMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_ValidateMessageRequest(buffer_arg) {
  return alis_open_validation_v1_validation_pb.ValidateMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_ValidateMessageResponse(arg) {
  if (!(arg instanceof alis_open_validation_v1_validation_pb.ValidateMessageResponse)) {
    throw new Error('Expected argument of type alis.open.validation.v1.ValidateMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_ValidateMessageResponse(buffer_arg) {
  return alis_open_validation_v1_validation_pb.ValidateMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// GuidesService provides RPCs for managing Guide resources.
var GuidesServiceService = exports.GuidesServiceService = {
  // Validates any proto message that is used directly or indirectly by this service.
// Most common use case is to validate request messages from a client-side application.
validateMessage: {
    path: '/alis.open.support.v1.GuidesService/ValidateMessage',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_validation_pb.ValidateMessageRequest,
    responseType: alis_open_validation_v1_validation_pb.ValidateMessageResponse,
    requestSerialize: serialize_alis_open_validation_v1_ValidateMessageRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_ValidateMessageRequest,
    responseSerialize: serialize_alis_open_validation_v1_ValidateMessageResponse,
    responseDeserialize: deserialize_alis_open_validation_v1_ValidateMessageResponse,
  },
  // Retrieves the validation rules for any proto message that is used directly or indirectly by this service.
// Serves as live auto-documentation of the validation rules in this service.
retrieveRules: {
    path: '/alis.open.support.v1.GuidesService/RetrieveRules',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_validation_pb.RetrieveRulesRequest,
    responseType: alis_open_validation_v1_validation_pb.RetrieveRulesResponse,
    requestSerialize: serialize_alis_open_validation_v1_RetrieveRulesRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_RetrieveRulesRequest,
    responseSerialize: serialize_alis_open_validation_v1_RetrieveRulesResponse,
    responseDeserialize: deserialize_alis_open_validation_v1_RetrieveRulesResponse,
  },
  // Gets information about a Guide.
getGuide: {
    path: '/alis.open.support.v1.GuidesService/GetGuide',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_guide_pb.GetGuideRequest,
    responseType: alis_open_support_v1_guide_pb.Guide,
    requestSerialize: serialize_alis_open_support_v1_GetGuideRequest,
    requestDeserialize: deserialize_alis_open_support_v1_GetGuideRequest,
    responseSerialize: serialize_alis_open_support_v1_Guide,
    responseDeserialize: deserialize_alis_open_support_v1_Guide,
  },
  // Lists Guides. Results are sorted by name, ascending.
listGuides: {
    path: '/alis.open.support.v1.GuidesService/ListGuides',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_guide_pb.ListGuidesRequest,
    responseType: alis_open_support_v1_guide_pb.ListGuidesResponse,
    requestSerialize: serialize_alis_open_support_v1_ListGuidesRequest,
    requestDeserialize: deserialize_alis_open_support_v1_ListGuidesRequest,
    responseSerialize: serialize_alis_open_support_v1_ListGuidesResponse,
    responseDeserialize: deserialize_alis_open_support_v1_ListGuidesResponse,
  },
  // SyncGuide synchronizes the published guide from alis-build so its available in this deployment.
syncGuide: {
    path: '/alis.open.support.v1.GuidesService/SyncGuide',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_guide_pb.SyncGuideRequest,
    responseType: alis_open_support_v1_guide_pb.Guide,
    requestSerialize: serialize_alis_open_support_v1_SyncGuideRequest,
    requestDeserialize: deserialize_alis_open_support_v1_SyncGuideRequest,
    responseSerialize: serialize_alis_open_support_v1_Guide,
    responseDeserialize: deserialize_alis_open_support_v1_Guide,
  },
};

exports.GuidesServiceClient = grpc.makeGenericClientConstructor(GuidesServiceService, 'GuidesService');
