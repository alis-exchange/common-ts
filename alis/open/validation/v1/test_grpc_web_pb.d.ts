import * as grpcWeb from 'grpc-web';

import * as alis_open_validation_v1_test_pb from '../../../../alis/open/validation/v1/test_pb'; // proto import: "alis/open/validation/v1/test.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class BookServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getBook(
    request: alis_open_validation_v1_test_pb.GetBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_validation_v1_test_pb.Book) => void
  ): grpcWeb.ClientReadableStream<alis_open_validation_v1_test_pb.Book>;

  createBook(
    request: alis_open_validation_v1_test_pb.CreateBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_validation_v1_test_pb.Book) => void
  ): grpcWeb.ClientReadableStream<alis_open_validation_v1_test_pb.Book>;

  updateBook(
    request: alis_open_validation_v1_test_pb.UpdateBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_validation_v1_test_pb.Book) => void
  ): grpcWeb.ClientReadableStream<alis_open_validation_v1_test_pb.Book>;

  deleteBook(
    request: alis_open_validation_v1_test_pb.DeleteBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listBooks(
    request: alis_open_validation_v1_test_pb.ListBooksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_validation_v1_test_pb.ListBooksResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_validation_v1_test_pb.ListBooksResponse>;

}

export class BookServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getBook(
    request: alis_open_validation_v1_test_pb.GetBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_validation_v1_test_pb.Book>;

  createBook(
    request: alis_open_validation_v1_test_pb.CreateBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_validation_v1_test_pb.Book>;

  updateBook(
    request: alis_open_validation_v1_test_pb.UpdateBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_validation_v1_test_pb.Book>;

  deleteBook(
    request: alis_open_validation_v1_test_pb.DeleteBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listBooks(
    request: alis_open_validation_v1_test_pb.ListBooksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_validation_v1_test_pb.ListBooksResponse>;

}

