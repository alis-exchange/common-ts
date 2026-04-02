import * as jspb from 'google-protobuf'



export class AddIamBindingsRequest extends jspb.Message {
  getResource(): string;
  setResource(value: string): AddIamBindingsRequest;

  getPrincipalsList(): Array<string>;
  setPrincipalsList(value: Array<string>): AddIamBindingsRequest;
  clearPrincipalsList(): AddIamBindingsRequest;
  addPrincipals(value: string, index?: number): AddIamBindingsRequest;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): AddIamBindingsRequest;
  clearRolesList(): AddIamBindingsRequest;
  addRoles(value: string, index?: number): AddIamBindingsRequest;

  getRemoveFromOtherRoles(): boolean;
  setRemoveFromOtherRoles(value: boolean): AddIamBindingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddIamBindingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddIamBindingsRequest): AddIamBindingsRequest.AsObject;
  static serializeBinaryToWriter(message: AddIamBindingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddIamBindingsRequest;
  static deserializeBinaryFromReader(message: AddIamBindingsRequest, reader: jspb.BinaryReader): AddIamBindingsRequest;
}

export namespace AddIamBindingsRequest {
  export type AsObject = {
    resource: string,
    principalsList: Array<string>,
    rolesList: Array<string>,
    removeFromOtherRoles: boolean,
  }
}

export class RemoveIamBindingsRequest extends jspb.Message {
  getResource(): string;
  setResource(value: string): RemoveIamBindingsRequest;

  getPrincipalsList(): Array<string>;
  setPrincipalsList(value: Array<string>): RemoveIamBindingsRequest;
  clearPrincipalsList(): RemoveIamBindingsRequest;
  addPrincipals(value: string, index?: number): RemoveIamBindingsRequest;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): RemoveIamBindingsRequest;
  clearRolesList(): RemoveIamBindingsRequest;
  addRoles(value: string, index?: number): RemoveIamBindingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveIamBindingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveIamBindingsRequest): RemoveIamBindingsRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveIamBindingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveIamBindingsRequest;
  static deserializeBinaryFromReader(message: RemoveIamBindingsRequest, reader: jspb.BinaryReader): RemoveIamBindingsRequest;
}

export namespace RemoveIamBindingsRequest {
  export type AsObject = {
    resource: string,
    principalsList: Array<string>,
    rolesList: Array<string>,
  }
}

export class BatchTestIamPermissionsRequest extends jspb.Message {
  getResourcesList(): Array<string>;
  setResourcesList(value: Array<string>): BatchTestIamPermissionsRequest;
  clearResourcesList(): BatchTestIamPermissionsRequest;
  addResources(value: string, index?: number): BatchTestIamPermissionsRequest;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): BatchTestIamPermissionsRequest;
  clearPermissionsList(): BatchTestIamPermissionsRequest;
  addPermissions(value: string, index?: number): BatchTestIamPermissionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchTestIamPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchTestIamPermissionsRequest): BatchTestIamPermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: BatchTestIamPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchTestIamPermissionsRequest;
  static deserializeBinaryFromReader(message: BatchTestIamPermissionsRequest, reader: jspb.BinaryReader): BatchTestIamPermissionsRequest;
}

export namespace BatchTestIamPermissionsRequest {
  export type AsObject = {
    resourcesList: Array<string>,
    permissionsList: Array<string>,
  }
}

export class BatchTestIamPermissionsResponse extends jspb.Message {
  getResourcePermissionsList(): Array<BatchTestIamPermissionsResponse.ResourcePermissions>;
  setResourcePermissionsList(value: Array<BatchTestIamPermissionsResponse.ResourcePermissions>): BatchTestIamPermissionsResponse;
  clearResourcePermissionsList(): BatchTestIamPermissionsResponse;
  addResourcePermissions(value?: BatchTestIamPermissionsResponse.ResourcePermissions, index?: number): BatchTestIamPermissionsResponse.ResourcePermissions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchTestIamPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchTestIamPermissionsResponse): BatchTestIamPermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: BatchTestIamPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchTestIamPermissionsResponse;
  static deserializeBinaryFromReader(message: BatchTestIamPermissionsResponse, reader: jspb.BinaryReader): BatchTestIamPermissionsResponse;
}

export namespace BatchTestIamPermissionsResponse {
  export type AsObject = {
    resourcePermissionsList: Array<BatchTestIamPermissionsResponse.ResourcePermissions.AsObject>,
  }

  export class ResourcePermissions extends jspb.Message {
    getResource(): string;
    setResource(value: string): ResourcePermissions;

    getPermissionsList(): Array<string>;
    setPermissionsList(value: Array<string>): ResourcePermissions;
    clearPermissionsList(): ResourcePermissions;
    addPermissions(value: string, index?: number): ResourcePermissions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourcePermissions.AsObject;
    static toObject(includeInstance: boolean, msg: ResourcePermissions): ResourcePermissions.AsObject;
    static serializeBinaryToWriter(message: ResourcePermissions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourcePermissions;
    static deserializeBinaryFromReader(message: ResourcePermissions, reader: jspb.BinaryReader): ResourcePermissions;
  }

  export namespace ResourcePermissions {
    export type AsObject = {
      resource: string,
      permissionsList: Array<string>,
    }
  }

}

