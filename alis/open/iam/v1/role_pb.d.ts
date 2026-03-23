import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Role extends jspb.Message {
  getName(): string;
  setName(value: string): Role;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Role;
  hasCreateTime(): boolean;
  clearCreateTime(): Role;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Role;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Role;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): Role;

  getTitle(): string;
  setTitle(value: string): Role;

  getDescription(): string;
  setDescription(value: string): Role;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): Role;
  clearPermissionsList(): Role;
  addPermissions(value: string, index?: number): Role;

  getResourceTypesList(): Array<string>;
  setResourceTypesList(value: Array<string>): Role;
  clearResourceTypesList(): Role;
  addResourceTypes(value: string, index?: number): Role;

  getAllUsers(): boolean;
  setAllUsers(value: boolean): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    etag: Uint8Array | string,
    title: string,
    description: string,
    permissionsList: Array<string>,
    resourceTypesList: Array<string>,
    allUsers: boolean,
  }
}

