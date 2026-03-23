import * as jspb from 'google-protobuf'

import * as alis_open_iam_v1_iam_pb from '../../../../alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Group extends jspb.Message {
  getName(): string;
  setName(value: string): Group;

  getDisplayName(): string;
  setDisplayName(value: string): Group;

  getDescription(): string;
  setDescription(value: string): Group;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Group;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Group;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Group;
  hasCreateTime(): boolean;
  clearCreateTime(): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetGroupRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetGroupRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupRequest): GetGroupRequest.AsObject;
  static serializeBinaryToWriter(message: GetGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupRequest;
  static deserializeBinaryFromReader(message: GetGroupRequest, reader: jspb.BinaryReader): GetGroupRequest;
}

export namespace GetGroupRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateGroupRequest extends jspb.Message {
  getGroup(): Group | undefined;
  setGroup(value?: Group): CreateGroupRequest;
  hasGroup(): boolean;
  clearGroup(): CreateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    group?: Group.AsObject,
  }
}

export class UpdateGroupRequest extends jspb.Message {
  getGroup(): Group | undefined;
  setGroup(value?: Group): UpdateGroupRequest;
  hasGroup(): boolean;
  clearGroup(): UpdateGroupRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateGroupRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupRequest): UpdateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupRequest;
  static deserializeBinaryFromReader(message: UpdateGroupRequest, reader: jspb.BinaryReader): UpdateGroupRequest;
}

export namespace UpdateGroupRequest {
  export type AsObject = {
    group?: Group.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupRequest): DeleteGroupRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupRequest;
  static deserializeBinaryFromReader(message: DeleteGroupRequest, reader: jspb.BinaryReader): DeleteGroupRequest;
}

export namespace DeleteGroupRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListGroupsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListGroupsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListGroupsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListGroupsRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListGroupsRequest;

  getFilter(): string;
  setFilter(value: string): ListGroupsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupsRequest): ListGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: ListGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupsRequest;
  static deserializeBinaryFromReader(message: ListGroupsRequest, reader: jspb.BinaryReader): ListGroupsRequest;
}

export namespace ListGroupsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
  }
}

export class ListGroupsResponse extends jspb.Message {
  getGroupsList(): Array<Group>;
  setGroupsList(value: Array<Group>): ListGroupsResponse;
  clearGroupsList(): ListGroupsResponse;
  addGroups(value?: Group, index?: number): Group;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListGroupsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupsResponse): ListGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: ListGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupsResponse;
  static deserializeBinaryFromReader(message: ListGroupsResponse, reader: jspb.BinaryReader): ListGroupsResponse;
}

export namespace ListGroupsResponse {
  export type AsObject = {
    groupsList: Array<Group.AsObject>,
    nextPageToken: string,
  }
}

export class SyncGroupRequest extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): SyncGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncGroupRequest): SyncGroupRequest.AsObject;
  static serializeBinaryToWriter(message: SyncGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncGroupRequest;
  static deserializeBinaryFromReader(message: SyncGroupRequest, reader: jspb.BinaryReader): SyncGroupRequest;
}

export namespace SyncGroupRequest {
  export type AsObject = {
    group: string,
  }
}

export class SyncGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncGroupResponse): SyncGroupResponse.AsObject;
  static serializeBinaryToWriter(message: SyncGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncGroupResponse;
  static deserializeBinaryFromReader(message: SyncGroupResponse, reader: jspb.BinaryReader): SyncGroupResponse;
}

export namespace SyncGroupResponse {
  export type AsObject = {
  }
}

