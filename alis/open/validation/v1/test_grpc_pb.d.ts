// GENERATED CODE -- DO NOT EDIT!

// package: alis.open.validation.v1
// file: alis/open/validation/v1/test.proto

import * as alis_open_validation_v1_test_pb from "../../../../alis/open/validation/v1/test_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IBookServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBook: grpc.MethodDefinition<alis_open_validation_v1_test_pb.GetBookRequest, alis_open_validation_v1_test_pb.Book>;
  createBook: grpc.MethodDefinition<alis_open_validation_v1_test_pb.CreateBookRequest, alis_open_validation_v1_test_pb.Book>;
  updateBook: grpc.MethodDefinition<alis_open_validation_v1_test_pb.UpdateBookRequest, alis_open_validation_v1_test_pb.Book>;
  deleteBook: grpc.MethodDefinition<alis_open_validation_v1_test_pb.DeleteBookRequest, google_protobuf_empty_pb.Empty>;
  listBooks: grpc.MethodDefinition<alis_open_validation_v1_test_pb.ListBooksRequest, alis_open_validation_v1_test_pb.ListBooksResponse>;
}

export const BookServiceService: IBookServiceService;

export interface IBookServiceServer extends grpc.UntypedServiceImplementation {
  getBook: grpc.handleUnaryCall<alis_open_validation_v1_test_pb.GetBookRequest, alis_open_validation_v1_test_pb.Book>;
  createBook: grpc.handleUnaryCall<alis_open_validation_v1_test_pb.CreateBookRequest, alis_open_validation_v1_test_pb.Book>;
  updateBook: grpc.handleUnaryCall<alis_open_validation_v1_test_pb.UpdateBookRequest, alis_open_validation_v1_test_pb.Book>;
  deleteBook: grpc.handleUnaryCall<alis_open_validation_v1_test_pb.DeleteBookRequest, google_protobuf_empty_pb.Empty>;
  listBooks: grpc.handleUnaryCall<alis_open_validation_v1_test_pb.ListBooksRequest, alis_open_validation_v1_test_pb.ListBooksResponse>;
}

export class BookServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getBook(argument: alis_open_validation_v1_test_pb.GetBookRequest, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.Book>): grpc.ClientUnaryCall;
  getBook(argument: alis_open_validation_v1_test_pb.GetBookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.Book>): grpc.ClientUnaryCall;
  getBook(argument: alis_open_validation_v1_test_pb.GetBookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.Book>): grpc.ClientUnaryCall;
  createBook(argument: alis_open_validation_v1_test_pb.CreateBookRequest, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.Book>): grpc.ClientUnaryCall;
  createBook(argument: alis_open_validation_v1_test_pb.CreateBookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.Book>): grpc.ClientUnaryCall;
  createBook(argument: alis_open_validation_v1_test_pb.CreateBookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.Book>): grpc.ClientUnaryCall;
  updateBook(argument: alis_open_validation_v1_test_pb.UpdateBookRequest, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.Book>): grpc.ClientUnaryCall;
  updateBook(argument: alis_open_validation_v1_test_pb.UpdateBookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.Book>): grpc.ClientUnaryCall;
  updateBook(argument: alis_open_validation_v1_test_pb.UpdateBookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.Book>): grpc.ClientUnaryCall;
  deleteBook(argument: alis_open_validation_v1_test_pb.DeleteBookRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBook(argument: alis_open_validation_v1_test_pb.DeleteBookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBook(argument: alis_open_validation_v1_test_pb.DeleteBookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listBooks(argument: alis_open_validation_v1_test_pb.ListBooksRequest, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.ListBooksResponse>): grpc.ClientUnaryCall;
  listBooks(argument: alis_open_validation_v1_test_pb.ListBooksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.ListBooksResponse>): grpc.ClientUnaryCall;
  listBooks(argument: alis_open_validation_v1_test_pb.ListBooksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_validation_v1_test_pb.ListBooksResponse>): grpc.ClientUnaryCall;
}
