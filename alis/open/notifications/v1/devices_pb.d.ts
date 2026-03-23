import * as jspb from 'google-protobuf'

import * as alis_open_iam_v1_iam_pb from '../../../../alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Device extends jspb.Message {
  getName(): string;
  setName(value: string): Device;

  getToken(): string;
  setToken(value: string): Device;

  getEtag(): string;
  setEtag(value: string): Device;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Device;
  hasCreateTime(): boolean;
  clearCreateTime(): Device;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Device;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Device;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    name: string,
    token: string,
    etag: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetDeviceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetDeviceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceRequest): GetDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: GetDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceRequest;
  static deserializeBinaryFromReader(message: GetDeviceRequest, reader: jspb.BinaryReader): GetDeviceRequest;
}

export namespace GetDeviceRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDevicesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListDevicesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDevicesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDevicesRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListDevicesRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListDevicesRequest;

  getFilter(): string;
  setFilter(value: string): ListDevicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDevicesRequest): ListDevicesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDevicesRequest;
  static deserializeBinaryFromReader(message: ListDevicesRequest, reader: jspb.BinaryReader): ListDevicesRequest;
}

export namespace ListDevicesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
  }
}

export class ListDevicesResponse extends jspb.Message {
  getDevicesList(): Array<Device>;
  setDevicesList(value: Array<Device>): ListDevicesResponse;
  clearDevicesList(): ListDevicesResponse;
  addDevices(value?: Device, index?: number): Device;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDevicesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDevicesResponse): ListDevicesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDevicesResponse;
  static deserializeBinaryFromReader(message: ListDevicesResponse, reader: jspb.BinaryReader): ListDevicesResponse;
}

export namespace ListDevicesResponse {
  export type AsObject = {
    devicesList: Array<Device.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteDeviceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteDeviceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceRequest): DeleteDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceRequest;
  static deserializeBinaryFromReader(message: DeleteDeviceRequest, reader: jspb.BinaryReader): DeleteDeviceRequest;
}

export namespace DeleteDeviceRequest {
  export type AsObject = {
    name: string,
  }
}

export class RegisterDeviceRequest extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): RegisterDeviceRequest;

  getDeviceToken(): string;
  setDeviceToken(value: string): RegisterDeviceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterDeviceRequest): RegisterDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterDeviceRequest;
  static deserializeBinaryFromReader(message: RegisterDeviceRequest, reader: jspb.BinaryReader): RegisterDeviceRequest;
}

export namespace RegisterDeviceRequest {
  export type AsObject = {
    deviceId: string,
    deviceToken: string,
  }
}

export class RegisterDeviceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterDeviceResponse): RegisterDeviceResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterDeviceResponse;
  static deserializeBinaryFromReader(message: RegisterDeviceResponse, reader: jspb.BinaryReader): RegisterDeviceResponse;
}

export namespace RegisterDeviceResponse {
  export type AsObject = {
  }
}

