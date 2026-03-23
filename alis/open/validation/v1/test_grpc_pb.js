// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_open_validation_v1_test_pb = require('../../../../alis/open/validation/v1/test_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_date_pb = require('../../../../google/type/date_pb.js');

function serialize_alis_open_validation_v1_Book(arg) {
  if (!(arg instanceof alis_open_validation_v1_test_pb.Book)) {
    throw new Error('Expected argument of type alis.open.validation.v1.Book');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_Book(buffer_arg) {
  return alis_open_validation_v1_test_pb.Book.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_CreateBookRequest(arg) {
  if (!(arg instanceof alis_open_validation_v1_test_pb.CreateBookRequest)) {
    throw new Error('Expected argument of type alis.open.validation.v1.CreateBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_CreateBookRequest(buffer_arg) {
  return alis_open_validation_v1_test_pb.CreateBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_DeleteBookRequest(arg) {
  if (!(arg instanceof alis_open_validation_v1_test_pb.DeleteBookRequest)) {
    throw new Error('Expected argument of type alis.open.validation.v1.DeleteBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_DeleteBookRequest(buffer_arg) {
  return alis_open_validation_v1_test_pb.DeleteBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_GetBookRequest(arg) {
  if (!(arg instanceof alis_open_validation_v1_test_pb.GetBookRequest)) {
    throw new Error('Expected argument of type alis.open.validation.v1.GetBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_GetBookRequest(buffer_arg) {
  return alis_open_validation_v1_test_pb.GetBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_ListBooksRequest(arg) {
  if (!(arg instanceof alis_open_validation_v1_test_pb.ListBooksRequest)) {
    throw new Error('Expected argument of type alis.open.validation.v1.ListBooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_ListBooksRequest(buffer_arg) {
  return alis_open_validation_v1_test_pb.ListBooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_ListBooksResponse(arg) {
  if (!(arg instanceof alis_open_validation_v1_test_pb.ListBooksResponse)) {
    throw new Error('Expected argument of type alis.open.validation.v1.ListBooksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_ListBooksResponse(buffer_arg) {
  return alis_open_validation_v1_test_pb.ListBooksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_validation_v1_UpdateBookRequest(arg) {
  if (!(arg instanceof alis_open_validation_v1_test_pb.UpdateBookRequest)) {
    throw new Error('Expected argument of type alis.open.validation.v1.UpdateBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_validation_v1_UpdateBookRequest(buffer_arg) {
  return alis_open_validation_v1_test_pb.UpdateBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// TODO: Add service description
var BookServiceService = exports.BookServiceService = {
  // Get a Book resource
getBook: {
    path: '/alis.open.validation.v1.BookService/GetBook',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_test_pb.GetBookRequest,
    responseType: alis_open_validation_v1_test_pb.Book,
    requestSerialize: serialize_alis_open_validation_v1_GetBookRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_GetBookRequest,
    responseSerialize: serialize_alis_open_validation_v1_Book,
    responseDeserialize: deserialize_alis_open_validation_v1_Book,
  },
  // Create a new Book resource
createBook: {
    path: '/alis.open.validation.v1.BookService/CreateBook',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_test_pb.CreateBookRequest,
    responseType: alis_open_validation_v1_test_pb.Book,
    requestSerialize: serialize_alis_open_validation_v1_CreateBookRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_CreateBookRequest,
    responseSerialize: serialize_alis_open_validation_v1_Book,
    responseDeserialize: deserialize_alis_open_validation_v1_Book,
  },
  // Update a Book resource
updateBook: {
    path: '/alis.open.validation.v1.BookService/UpdateBook',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_test_pb.UpdateBookRequest,
    responseType: alis_open_validation_v1_test_pb.Book,
    requestSerialize: serialize_alis_open_validation_v1_UpdateBookRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_UpdateBookRequest,
    responseSerialize: serialize_alis_open_validation_v1_Book,
    responseDeserialize: deserialize_alis_open_validation_v1_Book,
  },
  // Delete a Book
deleteBook: {
    path: '/alis.open.validation.v1.BookService/DeleteBook',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_test_pb.DeleteBookRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_open_validation_v1_DeleteBookRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_DeleteBookRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists Book resources
listBooks: {
    path: '/alis.open.validation.v1.BookService/ListBooks',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_validation_v1_test_pb.ListBooksRequest,
    responseType: alis_open_validation_v1_test_pb.ListBooksResponse,
    requestSerialize: serialize_alis_open_validation_v1_ListBooksRequest,
    requestDeserialize: deserialize_alis_open_validation_v1_ListBooksRequest,
    responseSerialize: serialize_alis_open_validation_v1_ListBooksResponse,
    responseDeserialize: deserialize_alis_open_validation_v1_ListBooksResponse,
  },
};

exports.BookServiceClient = grpc.makeGenericClientConstructor(BookServiceService, 'BookService');
