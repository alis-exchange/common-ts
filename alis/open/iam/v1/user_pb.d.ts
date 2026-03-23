import * as jspb from 'google-protobuf'

import * as alis_open_iam_v1_iam_pb from '../../../../alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class SetUserPictureRequest extends jspb.Message {
  getUser(): string;
  setUser(value: string): SetUserPictureRequest;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): SetUserPictureRequest;

  getMimeType(): string;
  setMimeType(value: string): SetUserPictureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUserPictureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetUserPictureRequest): SetUserPictureRequest.AsObject;
  static serializeBinaryToWriter(message: SetUserPictureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUserPictureRequest;
  static deserializeBinaryFromReader(message: SetUserPictureRequest, reader: jspb.BinaryReader): SetUserPictureRequest;
}

export namespace SetUserPictureRequest {
  export type AsObject = {
    user: string,
    data: Uint8Array | string,
    mimeType: string,
  }
}

export class SetUserPictureResponse extends jspb.Message {
  getPublicUri(): string;
  setPublicUri(value: string): SetUserPictureResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUserPictureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetUserPictureResponse): SetUserPictureResponse.AsObject;
  static serializeBinaryToWriter(message: SetUserPictureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUserPictureResponse;
  static deserializeBinaryFromReader(message: SetUserPictureResponse, reader: jspb.BinaryReader): SetUserPictureResponse;
}

export namespace SetUserPictureResponse {
  export type AsObject = {
    publicUri: string,
  }
}

export class User extends jspb.Message {
  getName(): string;
  setName(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getGivenName(): string;
  setGivenName(value: string): User;

  getFamilyName(): string;
  setFamilyName(value: string): User;

  getPicture(): string;
  setPicture(value: string): User;

  getContactNumber(): string;
  setContactNumber(value: string): User;

  getPosition(): string;
  setPosition(value: string): User;

  getEducation(): string;
  setEducation(value: string): User;

  getLinkedinUri(): string;
  setLinkedinUri(value: string): User;

  getVerifiedEmail(): boolean;
  setVerifiedEmail(value: boolean): User;

  getIdentityProvider(): IdentityProvider;
  setIdentityProvider(value: IdentityProvider): User;

  getGoogleGroup(): string;
  setGoogleGroup(value: string): User;

  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): User;
  hasMetadata(): boolean;
  clearMetadata(): User;

  getInternalMetadata(): google_protobuf_any_pb.Any | undefined;
  setInternalMetadata(value?: google_protobuf_any_pb.Any): User;
  hasInternalMetadata(): boolean;
  clearInternalMetadata(): User;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasCreateTime(): boolean;
  clearCreateTime(): User;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasUpdateTime(): boolean;
  clearUpdateTime(): User;

  getLastSignInTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSignInTime(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasLastSignInTime(): boolean;
  clearLastSignInTime(): User;

  getLastRefreshTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastRefreshTime(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasLastRefreshTime(): boolean;
  clearLastRefreshTime(): User;

  getGoogleIdentity(): User.GoogleIdentity | undefined;
  setGoogleIdentity(value?: User.GoogleIdentity): User;
  hasGoogleIdentity(): boolean;
  clearGoogleIdentity(): User;

  getMicrosoftIdentity(): User.MicrosoftIdentity | undefined;
  setMicrosoftIdentity(value?: User.MicrosoftIdentity): User;
  hasMicrosoftIdentity(): boolean;
  clearMicrosoftIdentity(): User;

  getLinkedinIdentity(): User.LinkedinIdentity | undefined;
  setLinkedinIdentity(value?: User.LinkedinIdentity): User;
  hasLinkedinIdentity(): boolean;
  clearLinkedinIdentity(): User;

  getSubscriptionsList(): Array<User.Subscription>;
  setSubscriptionsList(value: Array<User.Subscription>): User;
  clearSubscriptionsList(): User;
  addSubscriptions(value?: User.Subscription, index?: number): User.Subscription;

  getGroupIdsList(): Array<string>;
  setGroupIdsList(value: Array<string>): User;
  clearGroupIdsList(): User;
  addGroupIds(value: string, index?: number): User;

  getAppleIdentity(): User.AppleIdentity | undefined;
  setAppleIdentity(value?: User.AppleIdentity): User;
  hasAppleIdentity(): boolean;
  clearAppleIdentity(): User;

  getAccountsMap(): jspb.Map<string, User.Account>;
  clearAccountsMap(): User;

  getEtag(): string;
  setEtag(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    name: string,
    email: string,
    givenName: string,
    familyName: string,
    picture: string,
    contactNumber: string,
    position: string,
    education: string,
    linkedinUri: string,
    verifiedEmail: boolean,
    identityProvider: IdentityProvider,
    googleGroup: string,
    metadata?: google_protobuf_any_pb.Any.AsObject,
    internalMetadata?: google_protobuf_any_pb.Any.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastSignInTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastRefreshTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    googleIdentity?: User.GoogleIdentity.AsObject,
    microsoftIdentity?: User.MicrosoftIdentity.AsObject,
    linkedinIdentity?: User.LinkedinIdentity.AsObject,
    subscriptionsList: Array<User.Subscription.AsObject>,
    groupIdsList: Array<string>,
    appleIdentity?: User.AppleIdentity.AsObject,
    accountsMap: Array<[string, User.Account.AsObject]>,
    etag: string,
  }

  export class GoogleIdentity extends jspb.Message {
    getId(): string;
    setId(value: string): GoogleIdentity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GoogleIdentity.AsObject;
    static toObject(includeInstance: boolean, msg: GoogleIdentity): GoogleIdentity.AsObject;
    static serializeBinaryToWriter(message: GoogleIdentity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GoogleIdentity;
    static deserializeBinaryFromReader(message: GoogleIdentity, reader: jspb.BinaryReader): GoogleIdentity;
  }

  export namespace GoogleIdentity {
    export type AsObject = {
      id: string,
    }
  }


  export class MicrosoftIdentity extends jspb.Message {
    getId(): string;
    setId(value: string): MicrosoftIdentity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MicrosoftIdentity.AsObject;
    static toObject(includeInstance: boolean, msg: MicrosoftIdentity): MicrosoftIdentity.AsObject;
    static serializeBinaryToWriter(message: MicrosoftIdentity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MicrosoftIdentity;
    static deserializeBinaryFromReader(message: MicrosoftIdentity, reader: jspb.BinaryReader): MicrosoftIdentity;
  }

  export namespace MicrosoftIdentity {
    export type AsObject = {
      id: string,
    }
  }


  export class LinkedinIdentity extends jspb.Message {
    getId(): string;
    setId(value: string): LinkedinIdentity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LinkedinIdentity.AsObject;
    static toObject(includeInstance: boolean, msg: LinkedinIdentity): LinkedinIdentity.AsObject;
    static serializeBinaryToWriter(message: LinkedinIdentity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LinkedinIdentity;
    static deserializeBinaryFromReader(message: LinkedinIdentity, reader: jspb.BinaryReader): LinkedinIdentity;
  }

  export namespace LinkedinIdentity {
    export type AsObject = {
      id: string,
    }
  }


  export class Subscription extends jspb.Message {
    getName(): string;
    setName(value: string): Subscription;

    getPlan(): string;
    setPlan(value: string): Subscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subscription.AsObject;
    static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
    static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subscription;
    static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
  }

  export namespace Subscription {
    export type AsObject = {
      name: string,
      plan: string,
    }
  }


  export class AppleIdentity extends jspb.Message {
    getId(): string;
    setId(value: string): AppleIdentity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppleIdentity.AsObject;
    static toObject(includeInstance: boolean, msg: AppleIdentity): AppleIdentity.AsObject;
    static serializeBinaryToWriter(message: AppleIdentity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppleIdentity;
    static deserializeBinaryFromReader(message: AppleIdentity, reader: jspb.BinaryReader): AppleIdentity;
  }

  export namespace AppleIdentity {
    export type AsObject = {
      id: string,
    }
  }


  export class Account extends jspb.Message {
    getSeatsMap(): jspb.Map<number, User.Account.Seat>;
    clearSeatsMap(): Account;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Account.AsObject;
    static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
    static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Account;
    static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
  }

  export namespace Account {
    export type AsObject = {
      seatsMap: Array<[number, User.Account.Seat.AsObject]>,
    }

    export class Seat extends jspb.Message {
      getPlan(): number;
      setPlan(value: number): Seat;

      getSeat(): number;
      setSeat(value: number): Seat;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Seat.AsObject;
      static toObject(includeInstance: boolean, msg: Seat): Seat.AsObject;
      static serializeBinaryToWriter(message: Seat, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Seat;
      static deserializeBinaryFromReader(message: Seat, reader: jspb.BinaryReader): Seat;
    }

    export namespace Seat {
      export type AsObject = {
        plan: number,
        seat: number,
      }
    }

  }

}

export class GetUserRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetUserRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetUserRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateUserRequest extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): CreateUserRequest;
  hasUser(): boolean;
  clearUser(): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UpdateUserRequest;
  hasUser(): boolean;
  clearUser(): UpdateUserRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateUserRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    user?: User.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListUsersRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListUsersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListUsersRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListUsersRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListUsersRequest;

  getFilter(): string;
  setFilter(value: string): ListUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
  static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
  static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
  }
}

export class ListUsersResponse extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): ListUsersResponse;
  clearUsersList(): ListUsersResponse;
  addUsers(value?: User, index?: number): User;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersResponse): ListUsersResponse.AsObject;
  static serializeBinaryToWriter(message: ListUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
  static deserializeBinaryFromReader(message: ListUsersResponse, reader: jspb.BinaryReader): ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
    nextPageToken: string,
  }
}

export class RetrieveUserByEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RetrieveUserByEmailRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): RetrieveUserByEmailRequest;
  hasReadMask(): boolean;
  clearReadMask(): RetrieveUserByEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveUserByEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveUserByEmailRequest): RetrieveUserByEmailRequest.AsObject;
  static serializeBinaryToWriter(message: RetrieveUserByEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveUserByEmailRequest;
  static deserializeBinaryFromReader(message: RetrieveUserByEmailRequest, reader: jspb.BinaryReader): RetrieveUserByEmailRequest;
}

export namespace RetrieveUserByEmailRequest {
  export type AsObject = {
    email: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class BatchRetrieveMaskedUsersRequest extends jspb.Message {
  getUsersList(): Array<string>;
  setUsersList(value: Array<string>): BatchRetrieveMaskedUsersRequest;
  clearUsersList(): BatchRetrieveMaskedUsersRequest;
  addUsers(value: string, index?: number): BatchRetrieveMaskedUsersRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): BatchRetrieveMaskedUsersRequest;
  hasReadMask(): boolean;
  clearReadMask(): BatchRetrieveMaskedUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchRetrieveMaskedUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchRetrieveMaskedUsersRequest): BatchRetrieveMaskedUsersRequest.AsObject;
  static serializeBinaryToWriter(message: BatchRetrieveMaskedUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchRetrieveMaskedUsersRequest;
  static deserializeBinaryFromReader(message: BatchRetrieveMaskedUsersRequest, reader: jspb.BinaryReader): BatchRetrieveMaskedUsersRequest;
}

export namespace BatchRetrieveMaskedUsersRequest {
  export type AsObject = {
    usersList: Array<string>,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class BatchRetrieveMaskedUsersResponse extends jspb.Message {
  getMaskedUsersList(): Array<MaskedUser>;
  setMaskedUsersList(value: Array<MaskedUser>): BatchRetrieveMaskedUsersResponse;
  clearMaskedUsersList(): BatchRetrieveMaskedUsersResponse;
  addMaskedUsers(value?: MaskedUser, index?: number): MaskedUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchRetrieveMaskedUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchRetrieveMaskedUsersResponse): BatchRetrieveMaskedUsersResponse.AsObject;
  static serializeBinaryToWriter(message: BatchRetrieveMaskedUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchRetrieveMaskedUsersResponse;
  static deserializeBinaryFromReader(message: BatchRetrieveMaskedUsersResponse, reader: jspb.BinaryReader): BatchRetrieveMaskedUsersResponse;
}

export namespace BatchRetrieveMaskedUsersResponse {
  export type AsObject = {
    maskedUsersList: Array<MaskedUser.AsObject>,
  }
}

export class LookupUserRequest extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): LookupUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LookupUserRequest): LookupUserRequest.AsObject;
  static serializeBinaryToWriter(message: LookupUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupUserRequest;
  static deserializeBinaryFromReader(message: LookupUserRequest, reader: jspb.BinaryReader): LookupUserRequest;
}

export namespace LookupUserRequest {
  export type AsObject = {
    searchText: string,
  }
}

export class LookupUserResponse extends jspb.Message {
  getResultsList(): Array<LookupUserResponse.Result>;
  setResultsList(value: Array<LookupUserResponse.Result>): LookupUserResponse;
  clearResultsList(): LookupUserResponse;
  addResults(value?: LookupUserResponse.Result, index?: number): LookupUserResponse.Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LookupUserResponse): LookupUserResponse.AsObject;
  static serializeBinaryToWriter(message: LookupUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupUserResponse;
  static deserializeBinaryFromReader(message: LookupUserResponse, reader: jspb.BinaryReader): LookupUserResponse;
}

export namespace LookupUserResponse {
  export type AsObject = {
    resultsList: Array<LookupUserResponse.Result.AsObject>,
  }

  export class Result extends jspb.Message {
    getUser(): string;
    setUser(value: string): Result;

    getDisplayName(): string;
    setDisplayName(value: string): Result;

    getMaskedEmail(): string;
    setMaskedEmail(value: string): Result;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
  }

  export namespace Result {
    export type AsObject = {
      user: string,
      displayName: string,
      maskedEmail: string,
    }
  }

}

export class RetrieveMaskedUsersRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): RetrieveMaskedUsersRequest;

  getPageToken(): string;
  setPageToken(value: string): RetrieveMaskedUsersRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): RetrieveMaskedUsersRequest;
  hasReadMask(): boolean;
  clearReadMask(): RetrieveMaskedUsersRequest;

  getFilter(): string;
  setFilter(value: string): RetrieveMaskedUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMaskedUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMaskedUsersRequest): RetrieveMaskedUsersRequest.AsObject;
  static serializeBinaryToWriter(message: RetrieveMaskedUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMaskedUsersRequest;
  static deserializeBinaryFromReader(message: RetrieveMaskedUsersRequest, reader: jspb.BinaryReader): RetrieveMaskedUsersRequest;
}

export namespace RetrieveMaskedUsersRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
  }
}

export class RetrieveMaskedUsersResponse extends jspb.Message {
  getUsersList(): Array<MaskedUser>;
  setUsersList(value: Array<MaskedUser>): RetrieveMaskedUsersResponse;
  clearUsersList(): RetrieveMaskedUsersResponse;
  addUsers(value?: MaskedUser, index?: number): MaskedUser;

  getNextPageToken(): string;
  setNextPageToken(value: string): RetrieveMaskedUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMaskedUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMaskedUsersResponse): RetrieveMaskedUsersResponse.AsObject;
  static serializeBinaryToWriter(message: RetrieveMaskedUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMaskedUsersResponse;
  static deserializeBinaryFromReader(message: RetrieveMaskedUsersResponse, reader: jspb.BinaryReader): RetrieveMaskedUsersResponse;
}

export namespace RetrieveMaskedUsersResponse {
  export type AsObject = {
    usersList: Array<MaskedUser.AsObject>,
    nextPageToken: string,
  }
}

export class RetrieveMaskedUserRequest extends jspb.Message {
  getUser(): string;
  setUser(value: string): RetrieveMaskedUserRequest;

  getEmail(): string;
  setEmail(value: string): RetrieveMaskedUserRequest;

  getIdentifierCase(): RetrieveMaskedUserRequest.IdentifierCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMaskedUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMaskedUserRequest): RetrieveMaskedUserRequest.AsObject;
  static serializeBinaryToWriter(message: RetrieveMaskedUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMaskedUserRequest;
  static deserializeBinaryFromReader(message: RetrieveMaskedUserRequest, reader: jspb.BinaryReader): RetrieveMaskedUserRequest;
}

export namespace RetrieveMaskedUserRequest {
  export type AsObject = {
    user: string,
    email: string,
  }

  export enum IdentifierCase { 
    IDENTIFIER_NOT_SET = 0,
    USER = 1,
    EMAIL = 2,
  }
}

export class MaskedUser extends jspb.Message {
  getName(): string;
  setName(value: string): MaskedUser;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): MaskedUser;
  hasCreateTime(): boolean;
  clearCreateTime(): MaskedUser;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): MaskedUser;
  hasUpdateTime(): boolean;
  clearUpdateTime(): MaskedUser;

  getMaskedEmail(): string;
  setMaskedEmail(value: string): MaskedUser;

  getIdentityProvider(): IdentityProvider;
  setIdentityProvider(value: IdentityProvider): MaskedUser;

  getGivenName(): string;
  setGivenName(value: string): MaskedUser;

  getFamilyName(): string;
  setFamilyName(value: string): MaskedUser;

  getPicture(): string;
  setPicture(value: string): MaskedUser;

  getPosition(): string;
  setPosition(value: string): MaskedUser;

  getEducation(): string;
  setEducation(value: string): MaskedUser;

  getLinkedinUri(): string;
  setLinkedinUri(value: string): MaskedUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaskedUser.AsObject;
  static toObject(includeInstance: boolean, msg: MaskedUser): MaskedUser.AsObject;
  static serializeBinaryToWriter(message: MaskedUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaskedUser;
  static deserializeBinaryFromReader(message: MaskedUser, reader: jspb.BinaryReader): MaskedUser;
}

export namespace MaskedUser {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    maskedEmail: string,
    identityProvider: IdentityProvider,
    givenName: string,
    familyName: string,
    picture: string,
    position: string,
    education: string,
    linkedinUri: string,
  }
}

export class EditUserInfoRequest extends jspb.Message {
  getUser(): string;
  setUser(value: string): EditUserInfoRequest;

  getGivenName(): string;
  setGivenName(value: string): EditUserInfoRequest;

  getFamilyName(): string;
  setFamilyName(value: string): EditUserInfoRequest;

  getPicture(): string;
  setPicture(value: string): EditUserInfoRequest;

  getContactNumber(): string;
  setContactNumber(value: string): EditUserInfoRequest;

  getPosition(): string;
  setPosition(value: string): EditUserInfoRequest;

  getEducation(): string;
  setEducation(value: string): EditUserInfoRequest;

  getLinkedinUri(): string;
  setLinkedinUri(value: string): EditUserInfoRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): EditUserInfoRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): EditUserInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditUserInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditUserInfoRequest): EditUserInfoRequest.AsObject;
  static serializeBinaryToWriter(message: EditUserInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditUserInfoRequest;
  static deserializeBinaryFromReader(message: EditUserInfoRequest, reader: jspb.BinaryReader): EditUserInfoRequest;
}

export namespace EditUserInfoRequest {
  export type AsObject = {
    user: string,
    givenName: string,
    familyName: string,
    picture: string,
    contactNumber: string,
    position: string,
    education: string,
    linkedinUri: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class EditUserMetadataRequest extends jspb.Message {
  getUser(): string;
  setUser(value: string): EditUserMetadataRequest;

  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): EditUserMetadataRequest;
  hasMetadata(): boolean;
  clearMetadata(): EditUserMetadataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditUserMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditUserMetadataRequest): EditUserMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: EditUserMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditUserMetadataRequest;
  static deserializeBinaryFromReader(message: EditUserMetadataRequest, reader: jspb.BinaryReader): EditUserMetadataRequest;
}

export namespace EditUserMetadataRequest {
  export type AsObject = {
    user: string,
    metadata?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class RetrieveMyUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMyUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMyUserRequest): RetrieveMyUserRequest.AsObject;
  static serializeBinaryToWriter(message: RetrieveMyUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMyUserRequest;
  static deserializeBinaryFromReader(message: RetrieveMyUserRequest, reader: jspb.BinaryReader): RetrieveMyUserRequest;
}

export namespace RetrieveMyUserRequest {
  export type AsObject = {
  }
}

export class EditMyInfoRequest extends jspb.Message {
  getGivenName(): string;
  setGivenName(value: string): EditMyInfoRequest;

  getFamilyName(): string;
  setFamilyName(value: string): EditMyInfoRequest;

  getPicture(): string;
  setPicture(value: string): EditMyInfoRequest;

  getContactNumber(): string;
  setContactNumber(value: string): EditMyInfoRequest;

  getPosition(): string;
  setPosition(value: string): EditMyInfoRequest;

  getEducation(): string;
  setEducation(value: string): EditMyInfoRequest;

  getLinkedinUri(): string;
  setLinkedinUri(value: string): EditMyInfoRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): EditMyInfoRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): EditMyInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditMyInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditMyInfoRequest): EditMyInfoRequest.AsObject;
  static serializeBinaryToWriter(message: EditMyInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditMyInfoRequest;
  static deserializeBinaryFromReader(message: EditMyInfoRequest, reader: jspb.BinaryReader): EditMyInfoRequest;
}

export namespace EditMyInfoRequest {
  export type AsObject = {
    givenName: string,
    familyName: string,
    picture: string,
    contactNumber: string,
    position: string,
    education: string,
    linkedinUri: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class EditMyMetadataRequest extends jspb.Message {
  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): EditMyMetadataRequest;
  hasMetadata(): boolean;
  clearMetadata(): EditMyMetadataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditMyMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditMyMetadataRequest): EditMyMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: EditMyMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditMyMetadataRequest;
  static deserializeBinaryFromReader(message: EditMyMetadataRequest, reader: jspb.BinaryReader): EditMyMetadataRequest;
}

export namespace EditMyMetadataRequest {
  export type AsObject = {
    metadata?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class RemoveMyUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMyUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMyUserRequest): RemoveMyUserRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveMyUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMyUserRequest;
  static deserializeBinaryFromReader(message: RemoveMyUserRequest, reader: jspb.BinaryReader): RemoveMyUserRequest;
}

export namespace RemoveMyUserRequest {
  export type AsObject = {
  }
}

export class SyncToGoogleGroupRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncToGoogleGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncToGoogleGroupRequest): SyncToGoogleGroupRequest.AsObject;
  static serializeBinaryToWriter(message: SyncToGoogleGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncToGoogleGroupRequest;
  static deserializeBinaryFromReader(message: SyncToGoogleGroupRequest, reader: jspb.BinaryReader): SyncToGoogleGroupRequest;
}

export namespace SyncToGoogleGroupRequest {
  export type AsObject = {
  }
}

export class SyncToGoogleGroupResponse extends jspb.Message {
  getNrAdded(): number;
  setNrAdded(value: number): SyncToGoogleGroupResponse;

  getNrRemoved(): number;
  setNrRemoved(value: number): SyncToGoogleGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncToGoogleGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncToGoogleGroupResponse): SyncToGoogleGroupResponse.AsObject;
  static serializeBinaryToWriter(message: SyncToGoogleGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncToGoogleGroupResponse;
  static deserializeBinaryFromReader(message: SyncToGoogleGroupResponse, reader: jspb.BinaryReader): SyncToGoogleGroupResponse;
}

export namespace SyncToGoogleGroupResponse {
  export type AsObject = {
    nrAdded: number,
    nrRemoved: number,
  }
}

export enum IdentityProvider { 
  IDENTITY_PROVIDER_UNSPECIFIED = 0,
  GOOGLE = 1,
  MICROSOFT = 2,
  EMAIL = 3,
  LINKEDIN = 4,
  APPLE = 5,
}
