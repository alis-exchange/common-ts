import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_type_date_pb from '../../../../google/type/date_pb'; // proto import: "google/type/date.proto"


export class Book extends jspb.Message {
  getName(): string;
  setName(value: string): Book;

  getDisplayName(): string;
  setDisplayName(value: string): Book;

  getAuthor(): string;
  setAuthor(value: string): Book;

  getPublicationDate(): google_type_date_pb.Date | undefined;
  setPublicationDate(value?: google_type_date_pb.Date): Book;
  hasPublicationDate(): boolean;
  clearPublicationDate(): Book;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Book;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Book;

  getPageCount(): number;
  setPageCount(value: number): Book;

  getType(): Type;
  setType(value: Type): Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    name: string,
    displayName: string,
    author: string,
    publicationDate?: google_type_date_pb.Date.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    pageCount: number,
    type: Type,
  }
}

export class GetBookRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetBookRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetBookRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookRequest): GetBookRequest.AsObject;
  static serializeBinaryToWriter(message: GetBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookRequest;
  static deserializeBinaryFromReader(message: GetBookRequest, reader: jspb.BinaryReader): GetBookRequest;
}

export namespace GetBookRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateBookRequest extends jspb.Message {
  getBook(): Book | undefined;
  setBook(value?: Book): CreateBookRequest;
  hasBook(): boolean;
  clearBook(): CreateBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBookRequest): CreateBookRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBookRequest;
  static deserializeBinaryFromReader(message: CreateBookRequest, reader: jspb.BinaryReader): CreateBookRequest;
}

export namespace CreateBookRequest {
  export type AsObject = {
    book?: Book.AsObject,
  }
}

export class UpdateBookRequest extends jspb.Message {
  getBook(): Book | undefined;
  setBook(value?: Book): UpdateBookRequest;
  hasBook(): boolean;
  clearBook(): UpdateBookRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateBookRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBookRequest): UpdateBookRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBookRequest;
  static deserializeBinaryFromReader(message: UpdateBookRequest, reader: jspb.BinaryReader): UpdateBookRequest;
}

export namespace UpdateBookRequest {
  export type AsObject = {
    book?: Book.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteBookRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBookRequest): DeleteBookRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBookRequest;
  static deserializeBinaryFromReader(message: DeleteBookRequest, reader: jspb.BinaryReader): DeleteBookRequest;
}

export namespace DeleteBookRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListBooksRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListBooksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBooksRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListBooksRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListBooksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBooksRequest): ListBooksRequest.AsObject;
  static serializeBinaryToWriter(message: ListBooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksRequest;
  static deserializeBinaryFromReader(message: ListBooksRequest, reader: jspb.BinaryReader): ListBooksRequest;
}

export namespace ListBooksRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListBooksResponse extends jspb.Message {
  getBooksList(): Array<Book>;
  setBooksList(value: Array<Book>): ListBooksResponse;
  clearBooksList(): ListBooksResponse;
  addBooks(value?: Book, index?: number): Book;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBooksResponse;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListBooksResponse;
  hasReadMask(): boolean;
  clearReadMask(): ListBooksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBooksResponse): ListBooksResponse.AsObject;
  static serializeBinaryToWriter(message: ListBooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksResponse;
  static deserializeBinaryFromReader(message: ListBooksResponse, reader: jspb.BinaryReader): ListBooksResponse;
}

export namespace ListBooksResponse {
  export type AsObject = {
    booksList: Array<Book.AsObject>,
    nextPageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export enum Type { 
  TYPE_UNSPECIFIED = 0,
  ANONYMOUS = 1,
  CHILDREN = 2,
  ADULT = 3,
}
