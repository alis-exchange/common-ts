import * as jspb from 'google-protobuf'

import * as alis_open_iam_v1_role_pb from '../../../../alis/open/iam/v1/role_pb'; // proto import: "alis/open/iam/v1/role.proto"


export class ProductConfig extends jspb.Message {
  getName(): string;
  setName(value: string): ProductConfig;

  getId(): string;
  setId(value: string): ProductConfig;

  getProjectId(): string;
  setProjectId(value: string): ProductConfig;

  getProjectNumber(): string;
  setProjectNumber(value: string): ProductConfig;

  getRolesList(): Array<alis_open_iam_v1_role_pb.Role>;
  setRolesList(value: Array<alis_open_iam_v1_role_pb.Role>): ProductConfig;
  clearRolesList(): ProductConfig;
  addRoles(value?: alis_open_iam_v1_role_pb.Role, index?: number): alis_open_iam_v1_role_pb.Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ProductConfig): ProductConfig.AsObject;
  static serializeBinaryToWriter(message: ProductConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductConfig;
  static deserializeBinaryFromReader(message: ProductConfig, reader: jspb.BinaryReader): ProductConfig;
}

export namespace ProductConfig {
  export type AsObject = {
    name: string,
    id: string,
    projectId: string,
    projectNumber: string,
    rolesList: Array<alis_open_iam_v1_role_pb.Role.AsObject>,
  }
}

