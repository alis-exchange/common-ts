import * as jspb from 'google-protobuf'

import * as alis_open_support_v1_issue_pb from '../../../../alis/open/support/v1/issue_pb'; // proto import: "alis/open/support/v1/issue.proto"
import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class IssueActivity extends jspb.Message {
  getName(): string;
  setName(value: string): IssueActivity;

  getCreator(): alis_open_support_v1_issue_pb.Issue.User | undefined;
  setCreator(value?: alis_open_support_v1_issue_pb.Issue.User): IssueActivity;
  hasCreator(): boolean;
  clearCreator(): IssueActivity;

  getBodyList(): Array<alis_open_support_v1_issue_pb.Issue.ContentBlock>;
  setBodyList(value: Array<alis_open_support_v1_issue_pb.Issue.ContentBlock>): IssueActivity;
  clearBodyList(): IssueActivity;
  addBody(value?: alis_open_support_v1_issue_pb.Issue.ContentBlock, index?: number): alis_open_support_v1_issue_pb.Issue.ContentBlock;

  getType(): IssueActivity.Type;
  setType(value: IssueActivity.Type): IssueActivity;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): IssueActivity;
  hasCreateTime(): boolean;
  clearCreateTime(): IssueActivity;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): IssueActivity;
  hasUpdateTime(): boolean;
  clearUpdateTime(): IssueActivity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueActivity.AsObject;
  static toObject(includeInstance: boolean, msg: IssueActivity): IssueActivity.AsObject;
  static serializeBinaryToWriter(message: IssueActivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueActivity;
  static deserializeBinaryFromReader(message: IssueActivity, reader: jspb.BinaryReader): IssueActivity;
}

export namespace IssueActivity {
  export type AsObject = {
    name: string,
    creator?: alis_open_support_v1_issue_pb.Issue.User.AsObject,
    bodyList: Array<alis_open_support_v1_issue_pb.Issue.ContentBlock.AsObject>,
    type: IssueActivity.Type,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    REQUESTERS_CHANGE = 1,
    ASSIGNEES_CHANGE = 2,
    TYPE_CHANGE = 3,
    CLOSED = 7,
    REOPENED = 8,
    ON_HOLD = 9,
    RESUMED = 10,
    REQUESTER_COMMENT = 13,
    SUPPORT_COMMENT = 14,
    INTERNAL_COMMENT = 15,
  }
}

export class CreateIssueActivityRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateIssueActivityRequest;

  getIssueActivity(): IssueActivity | undefined;
  setIssueActivity(value?: IssueActivity): CreateIssueActivityRequest;
  hasIssueActivity(): boolean;
  clearIssueActivity(): CreateIssueActivityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIssueActivityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIssueActivityRequest): CreateIssueActivityRequest.AsObject;
  static serializeBinaryToWriter(message: CreateIssueActivityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIssueActivityRequest;
  static deserializeBinaryFromReader(message: CreateIssueActivityRequest, reader: jspb.BinaryReader): CreateIssueActivityRequest;
}

export namespace CreateIssueActivityRequest {
  export type AsObject = {
    parent: string,
    issueActivity?: IssueActivity.AsObject,
  }
}

export class GetIssueActivityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetIssueActivityRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetIssueActivityRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetIssueActivityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIssueActivityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIssueActivityRequest): GetIssueActivityRequest.AsObject;
  static serializeBinaryToWriter(message: GetIssueActivityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIssueActivityRequest;
  static deserializeBinaryFromReader(message: GetIssueActivityRequest, reader: jspb.BinaryReader): GetIssueActivityRequest;
}

export namespace GetIssueActivityRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateIssueActivityRequest extends jspb.Message {
  getIssueActivity(): IssueActivity | undefined;
  setIssueActivity(value?: IssueActivity): UpdateIssueActivityRequest;
  hasIssueActivity(): boolean;
  clearIssueActivity(): UpdateIssueActivityRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateIssueActivityRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateIssueActivityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateIssueActivityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateIssueActivityRequest): UpdateIssueActivityRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateIssueActivityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateIssueActivityRequest;
  static deserializeBinaryFromReader(message: UpdateIssueActivityRequest, reader: jspb.BinaryReader): UpdateIssueActivityRequest;
}

export namespace UpdateIssueActivityRequest {
  export type AsObject = {
    issueActivity?: IssueActivity.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteIssueActivityRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteIssueActivityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIssueActivityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIssueActivityRequest): DeleteIssueActivityRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteIssueActivityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIssueActivityRequest;
  static deserializeBinaryFromReader(message: DeleteIssueActivityRequest, reader: jspb.BinaryReader): DeleteIssueActivityRequest;
}

export namespace DeleteIssueActivityRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListIssueActivitiesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListIssueActivitiesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListIssueActivitiesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListIssueActivitiesRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListIssueActivitiesRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListIssueActivitiesRequest;

  getFilter(): string;
  setFilter(value: string): ListIssueActivitiesRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListIssueActivitiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIssueActivitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIssueActivitiesRequest): ListIssueActivitiesRequest.AsObject;
  static serializeBinaryToWriter(message: ListIssueActivitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIssueActivitiesRequest;
  static deserializeBinaryFromReader(message: ListIssueActivitiesRequest, reader: jspb.BinaryReader): ListIssueActivitiesRequest;
}

export namespace ListIssueActivitiesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
    orderBy: string,
  }
}

export class ListIssueActivitiesResponse extends jspb.Message {
  getIssueActivitiesList(): Array<IssueActivity>;
  setIssueActivitiesList(value: Array<IssueActivity>): ListIssueActivitiesResponse;
  clearIssueActivitiesList(): ListIssueActivitiesResponse;
  addIssueActivities(value?: IssueActivity, index?: number): IssueActivity;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListIssueActivitiesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIssueActivitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIssueActivitiesResponse): ListIssueActivitiesResponse.AsObject;
  static serializeBinaryToWriter(message: ListIssueActivitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIssueActivitiesResponse;
  static deserializeBinaryFromReader(message: ListIssueActivitiesResponse, reader: jspb.BinaryReader): ListIssueActivitiesResponse;
}

export namespace ListIssueActivitiesResponse {
  export type AsObject = {
    issueActivitiesList: Array<IssueActivity.AsObject>,
    nextPageToken: string,
  }
}

export class CreateCommentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateCommentRequest;

  getBodyList(): Array<alis_open_support_v1_issue_pb.Issue.ContentBlock>;
  setBodyList(value: Array<alis_open_support_v1_issue_pb.Issue.ContentBlock>): CreateCommentRequest;
  clearBodyList(): CreateCommentRequest;
  addBody(value?: alis_open_support_v1_issue_pb.Issue.ContentBlock, index?: number): alis_open_support_v1_issue_pb.Issue.ContentBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentRequest): CreateCommentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentRequest;
  static deserializeBinaryFromReader(message: CreateCommentRequest, reader: jspb.BinaryReader): CreateCommentRequest;
}

export namespace CreateCommentRequest {
  export type AsObject = {
    parent: string,
    bodyList: Array<alis_open_support_v1_issue_pb.Issue.ContentBlock.AsObject>,
  }
}

export class UpdateCommentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateCommentRequest;

  getBodyList(): Array<alis_open_support_v1_issue_pb.Issue.ContentBlock>;
  setBodyList(value: Array<alis_open_support_v1_issue_pb.Issue.ContentBlock>): UpdateCommentRequest;
  clearBodyList(): UpdateCommentRequest;
  addBody(value?: alis_open_support_v1_issue_pb.Issue.ContentBlock, index?: number): alis_open_support_v1_issue_pb.Issue.ContentBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCommentRequest): UpdateCommentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCommentRequest;
  static deserializeBinaryFromReader(message: UpdateCommentRequest, reader: jspb.BinaryReader): UpdateCommentRequest;
}

export namespace UpdateCommentRequest {
  export type AsObject = {
    name: string,
    bodyList: Array<alis_open_support_v1_issue_pb.Issue.ContentBlock.AsObject>,
  }
}

export class DeleteCommentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommentRequest): DeleteCommentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommentRequest;
  static deserializeBinaryFromReader(message: DeleteCommentRequest, reader: jspb.BinaryReader): DeleteCommentRequest;
}

export namespace DeleteCommentRequest {
  export type AsObject = {
    name: string,
  }
}

