// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_support_v1_attachments_pb = require('../../../../alis/open/support/v1/attachments_pb.js');

function serialize_alis_open_support_v1_UploadImageRequest(arg) {
  if (!(arg instanceof alis_open_support_v1_attachments_pb.UploadImageRequest)) {
    throw new Error('Expected argument of type alis.open.support.v1.UploadImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_UploadImageRequest(buffer_arg) {
  return alis_open_support_v1_attachments_pb.UploadImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_support_v1_UploadImageResponse(arg) {
  if (!(arg instanceof alis_open_support_v1_attachments_pb.UploadImageResponse)) {
    throw new Error('Expected argument of type alis.open.support.v1.UploadImageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_support_v1_UploadImageResponse(buffer_arg) {
  return alis_open_support_v1_attachments_pb.UploadImageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The service that manages uploading public attachments for use
// in the context of Support resources.
var PublicAttachmentsServiceService = exports.PublicAttachmentsServiceService = {
  // Upload an image attachment of a maximum 4mb.
uploadImage: {
    path: '/alis.open.support.v1.PublicAttachmentsService/UploadImage',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_support_v1_attachments_pb.UploadImageRequest,
    responseType: alis_open_support_v1_attachments_pb.UploadImageResponse,
    requestSerialize: serialize_alis_open_support_v1_UploadImageRequest,
    requestDeserialize: deserialize_alis_open_support_v1_UploadImageRequest,
    responseSerialize: serialize_alis_open_support_v1_UploadImageResponse,
    responseDeserialize: deserialize_alis_open_support_v1_UploadImageResponse,
  },
};

exports.PublicAttachmentsServiceClient = grpc.makeGenericClientConstructor(PublicAttachmentsServiceService, 'PublicAttachmentsService');
