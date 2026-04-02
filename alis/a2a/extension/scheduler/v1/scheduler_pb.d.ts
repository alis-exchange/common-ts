import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class Cron extends jspb.Message {
  getName(): string;
  setName(value: string): Cron;

  getPrompt(): string;
  setPrompt(value: string): Cron;

  getExpr(): string;
  setExpr(value: string): Cron;

  getTimezone(): string;
  setTimezone(value: string): Cron;

  getAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAt(value?: google_protobuf_timestamp_pb.Timestamp): Cron;
  hasAt(): boolean;
  clearAt(): Cron;

  getType(): Cron.Type;
  setType(value: Cron.Type): Cron;

  getOwner(): string;
  setOwner(value: string): Cron;

  getEmail(): string;
  setEmail(value: string): Cron;

  getContextId(): string;
  setContextId(value: string): Cron;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Cron;
  hasCreateTime(): boolean;
  clearCreateTime(): Cron;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Cron;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Cron;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cron.AsObject;
  static toObject(includeInstance: boolean, msg: Cron): Cron.AsObject;
  static serializeBinaryToWriter(message: Cron, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cron;
  static deserializeBinaryFromReader(message: Cron, reader: jspb.BinaryReader): Cron;
}

export namespace Cron {
  export type AsObject = {
    name: string,
    prompt: string,
    expr: string,
    timezone: string,
    at?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: Cron.Type,
    owner: string,
    email: string,
    contextId: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    TYPE_CRON = 1,
    TYPE_AT = 2,
  }
}

export class CreateCronRequest extends jspb.Message {
  getCron(): Cron | undefined;
  setCron(value?: Cron): CreateCronRequest;
  hasCron(): boolean;
  clearCron(): CreateCronRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronRequest): CreateCronRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCronRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronRequest;
  static deserializeBinaryFromReader(message: CreateCronRequest, reader: jspb.BinaryReader): CreateCronRequest;
}

export namespace CreateCronRequest {
  export type AsObject = {
    cron?: Cron.AsObject,
  }
}

export class UpdateCronRequest extends jspb.Message {
  getCron(): Cron | undefined;
  setCron(value?: Cron): UpdateCronRequest;
  hasCron(): boolean;
  clearCron(): UpdateCronRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCronRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateCronRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronRequest): UpdateCronRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCronRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronRequest;
  static deserializeBinaryFromReader(message: UpdateCronRequest, reader: jspb.BinaryReader): UpdateCronRequest;
}

export namespace UpdateCronRequest {
  export type AsObject = {
    cron?: Cron.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetCronRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetCronRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetCronRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetCronRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronRequest): GetCronRequest.AsObject;
  static serializeBinaryToWriter(message: GetCronRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronRequest;
  static deserializeBinaryFromReader(message: GetCronRequest, reader: jspb.BinaryReader): GetCronRequest;
}

export namespace GetCronRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteCronRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteCronRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronRequest): DeleteCronRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCronRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronRequest;
  static deserializeBinaryFromReader(message: DeleteCronRequest, reader: jspb.BinaryReader): DeleteCronRequest;
}

export namespace DeleteCronRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListCronsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListCronsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCronsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListCronsRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListCronsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronsRequest): ListCronsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCronsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronsRequest;
  static deserializeBinaryFromReader(message: ListCronsRequest, reader: jspb.BinaryReader): ListCronsRequest;
}

export namespace ListCronsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListCronsResponse extends jspb.Message {
  getCronsList(): Array<Cron>;
  setCronsList(value: Array<Cron>): ListCronsResponse;
  clearCronsList(): ListCronsResponse;
  addCrons(value?: Cron, index?: number): Cron;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCronsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronsResponse): ListCronsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCronsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronsResponse;
  static deserializeBinaryFromReader(message: ListCronsResponse, reader: jspb.BinaryReader): ListCronsResponse;
}

export namespace ListCronsResponse {
  export type AsObject = {
    cronsList: Array<Cron.AsObject>,
    nextPageToken: string,
  }
}

export class RunCronRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RunCronRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronRequest): RunCronRequest.AsObject;
  static serializeBinaryToWriter(message: RunCronRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronRequest;
  static deserializeBinaryFromReader(message: RunCronRequest, reader: jspb.BinaryReader): RunCronRequest;
}

export namespace RunCronRequest {
  export type AsObject = {
    id: string,
  }
}

export class RunCronResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronResponse): RunCronResponse.AsObject;
  static serializeBinaryToWriter(message: RunCronResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronResponse;
  static deserializeBinaryFromReader(message: RunCronResponse, reader: jspb.BinaryReader): RunCronResponse;
}

export namespace RunCronResponse {
  export type AsObject = {
  }
}

