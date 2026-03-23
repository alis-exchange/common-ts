import * as jspb from 'google-protobuf'

import * as alis_open_iam_v1_iam_pb from '../../../../alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Issue extends jspb.Message {
  getName(): string;
  setName(value: string): Issue;

  getDisplayName(): string;
  setDisplayName(value: string): Issue;

  getDescriptionList(): Array<Issue.ContentBlock>;
  setDescriptionList(value: Array<Issue.ContentBlock>): Issue;
  clearDescriptionList(): Issue;
  addDescription(value?: Issue.ContentBlock, index?: number): Issue.ContentBlock;

  getCategory(): Issue.Category;
  setCategory(value: Issue.Category): Issue;

  getType(): Issue.Type;
  setType(value: Issue.Type): Issue;

  getState(): Issue.State;
  setState(value: Issue.State): Issue;

  getReporter(): Issue.User | undefined;
  setReporter(value?: Issue.User): Issue;
  hasReporter(): boolean;
  clearReporter(): Issue;

  getAssignee(): Issue.User | undefined;
  setAssignee(value?: Issue.User): Issue;
  hasAssignee(): boolean;
  clearAssignee(): Issue;

  getVisibility(): Issue.IssueVisibility;
  setVisibility(value: Issue.IssueVisibility): Issue;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Issue;
  hasCreateTime(): boolean;
  clearCreateTime(): Issue;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Issue;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Issue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Issue.AsObject;
  static toObject(includeInstance: boolean, msg: Issue): Issue.AsObject;
  static serializeBinaryToWriter(message: Issue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Issue;
  static deserializeBinaryFromReader(message: Issue, reader: jspb.BinaryReader): Issue;
}

export namespace Issue {
  export type AsObject = {
    name: string,
    displayName: string,
    descriptionList: Array<Issue.ContentBlock.AsObject>,
    category: Issue.Category,
    type: Issue.Type,
    state: Issue.State,
    reporter?: Issue.User.AsObject,
    assignee?: Issue.User.AsObject,
    visibility: Issue.IssueVisibility,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class ContentBlock extends jspb.Message {
    getType(): Issue.ContentBlock.Type;
    setType(value: Issue.ContentBlock.Type): ContentBlock;

    getTextBody(): Issue.ContentBlock.TextBody | undefined;
    setTextBody(value?: Issue.ContentBlock.TextBody): ContentBlock;
    hasTextBody(): boolean;
    clearTextBody(): ContentBlock;

    getImage(): Issue.ContentBlock.Image | undefined;
    setImage(value?: Issue.ContentBlock.Image): ContentBlock;
    hasImage(): boolean;
    clearImage(): ContentBlock;

    getVideo(): Issue.ContentBlock.Video | undefined;
    setVideo(value?: Issue.ContentBlock.Video): ContentBlock;
    hasVideo(): boolean;
    clearVideo(): ContentBlock;

    getBlockCase(): ContentBlock.BlockCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentBlock.AsObject;
    static toObject(includeInstance: boolean, msg: ContentBlock): ContentBlock.AsObject;
    static serializeBinaryToWriter(message: ContentBlock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentBlock;
    static deserializeBinaryFromReader(message: ContentBlock, reader: jspb.BinaryReader): ContentBlock;
  }

  export namespace ContentBlock {
    export type AsObject = {
      type: Issue.ContentBlock.Type,
      textBody?: Issue.ContentBlock.TextBody.AsObject,
      image?: Issue.ContentBlock.Image.AsObject,
      video?: Issue.ContentBlock.Video.AsObject,
    }

    export class TextBody extends jspb.Message {
      getText(): string;
      setText(value: string): TextBody;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TextBody.AsObject;
      static toObject(includeInstance: boolean, msg: TextBody): TextBody.AsObject;
      static serializeBinaryToWriter(message: TextBody, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TextBody;
      static deserializeBinaryFromReader(message: TextBody, reader: jspb.BinaryReader): TextBody;
    }

    export namespace TextBody {
      export type AsObject = {
        text: string,
      }
    }


    export class Image extends jspb.Message {
      getSourceUri(): string;
      setSourceUri(value: string): Image;

      getCaption(): string;
      setCaption(value: string): Image;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Image.AsObject;
      static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
      static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Image;
      static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
    }

    export namespace Image {
      export type AsObject = {
        sourceUri: string,
        caption: string,
      }
    }


    export class Video extends jspb.Message {
      getSourceUri(): string;
      setSourceUri(value: string): Video;

      getCaption(): string;
      setCaption(value: string): Video;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Video.AsObject;
      static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
      static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Video;
      static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
    }

    export namespace Video {
      export type AsObject = {
        sourceUri: string,
        caption: string,
      }
    }


    export enum Type { 
      TYPE_UNSPECIFIED = 0,
      TEXT_BODY = 1,
      IMAGE = 2,
      VIDEO = 3,
    }

    export enum BlockCase { 
      BLOCK_NOT_SET = 0,
      TEXT_BODY = 2,
      IMAGE = 3,
      VIDEO = 4,
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
    }
  }


  export enum Category { 
    CATEGORY_UNSPECIFIED = 0,
    BUG = 1,
    QUESTION = 2,
    REQUEST = 3,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    UNREACHABLE_SERVICE = 2,
    GA_BUG = 4,
    URGENT_SUPPORT = 6,
    WORKAROUNDABLE_GA_BUG = 8,
    PREVIEW_BUG = 10,
    WORKAROUNDABLE_PREVIEW_BUG = 12,
    SUPPORT = 14,
    TRAINING = 16,
    GENERAL = 18,
    FEATURE_REQUEST = 20,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    OPEN = 1,
    ON_HOLD = 2,
    CLOSED = 3,
  }

  export enum IssueVisibility { 
    ISSUE_VISIBILITY_UNSPECIFIED = 0,
    ISSUE_VISIBILITY_PRIVATE = 1,
    ISSUE_VISIBILITY_PUBLIC = 2,
  }
}

export class CreateIssueRequest extends jspb.Message {
  getIssue(): Issue | undefined;
  setIssue(value?: Issue): CreateIssueRequest;
  hasIssue(): boolean;
  clearIssue(): CreateIssueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIssueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIssueRequest): CreateIssueRequest.AsObject;
  static serializeBinaryToWriter(message: CreateIssueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIssueRequest;
  static deserializeBinaryFromReader(message: CreateIssueRequest, reader: jspb.BinaryReader): CreateIssueRequest;
}

export namespace CreateIssueRequest {
  export type AsObject = {
    issue?: Issue.AsObject,
  }
}

export class UpdateIssueRequest extends jspb.Message {
  getIssue(): Issue | undefined;
  setIssue(value?: Issue): UpdateIssueRequest;
  hasIssue(): boolean;
  clearIssue(): UpdateIssueRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateIssueRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateIssueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateIssueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateIssueRequest): UpdateIssueRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateIssueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateIssueRequest;
  static deserializeBinaryFromReader(message: UpdateIssueRequest, reader: jspb.BinaryReader): UpdateIssueRequest;
}

export namespace UpdateIssueRequest {
  export type AsObject = {
    issue?: Issue.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetIssueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetIssueRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetIssueRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetIssueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIssueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIssueRequest): GetIssueRequest.AsObject;
  static serializeBinaryToWriter(message: GetIssueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIssueRequest;
  static deserializeBinaryFromReader(message: GetIssueRequest, reader: jspb.BinaryReader): GetIssueRequest;
}

export namespace GetIssueRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListIssuesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListIssuesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListIssuesRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListIssuesRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListIssuesRequest;

  getFilter(): string;
  setFilter(value: string): ListIssuesRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListIssuesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIssuesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIssuesRequest): ListIssuesRequest.AsObject;
  static serializeBinaryToWriter(message: ListIssuesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIssuesRequest;
  static deserializeBinaryFromReader(message: ListIssuesRequest, reader: jspb.BinaryReader): ListIssuesRequest;
}

export namespace ListIssuesRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
    orderBy: string,
  }
}

export class ListIssuesResponse extends jspb.Message {
  getIssuesList(): Array<Issue>;
  setIssuesList(value: Array<Issue>): ListIssuesResponse;
  clearIssuesList(): ListIssuesResponse;
  addIssues(value?: Issue, index?: number): Issue;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListIssuesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIssuesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIssuesResponse): ListIssuesResponse.AsObject;
  static serializeBinaryToWriter(message: ListIssuesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIssuesResponse;
  static deserializeBinaryFromReader(message: ListIssuesResponse, reader: jspb.BinaryReader): ListIssuesResponse;
}

export namespace ListIssuesResponse {
  export type AsObject = {
    issuesList: Array<Issue.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteIssueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteIssueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIssueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIssueRequest): DeleteIssueRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteIssueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIssueRequest;
  static deserializeBinaryFromReader(message: DeleteIssueRequest, reader: jspb.BinaryReader): DeleteIssueRequest;
}

export namespace DeleteIssueRequest {
  export type AsObject = {
    name: string,
  }
}

export class EditNewIssueRequest extends jspb.Message {
  getIssue(): Issue | undefined;
  setIssue(value?: Issue): EditNewIssueRequest;
  hasIssue(): boolean;
  clearIssue(): EditNewIssueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditNewIssueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditNewIssueRequest): EditNewIssueRequest.AsObject;
  static serializeBinaryToWriter(message: EditNewIssueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditNewIssueRequest;
  static deserializeBinaryFromReader(message: EditNewIssueRequest, reader: jspb.BinaryReader): EditNewIssueRequest;
}

export namespace EditNewIssueRequest {
  export type AsObject = {
    issue?: Issue.AsObject,
  }
}

export class CancelNewIssueRequest extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): CancelNewIssueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelNewIssueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelNewIssueRequest): CancelNewIssueRequest.AsObject;
  static serializeBinaryToWriter(message: CancelNewIssueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelNewIssueRequest;
  static deserializeBinaryFromReader(message: CancelNewIssueRequest, reader: jspb.BinaryReader): CancelNewIssueRequest;
}

export namespace CancelNewIssueRequest {
  export type AsObject = {
    issue: string,
  }
}

export class SetIssueAssigneeRequest extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): SetIssueAssigneeRequest;

  getAssignee(): Issue.User | undefined;
  setAssignee(value?: Issue.User): SetIssueAssigneeRequest;
  hasAssignee(): boolean;
  clearAssignee(): SetIssueAssigneeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetIssueAssigneeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetIssueAssigneeRequest): SetIssueAssigneeRequest.AsObject;
  static serializeBinaryToWriter(message: SetIssueAssigneeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetIssueAssigneeRequest;
  static deserializeBinaryFromReader(message: SetIssueAssigneeRequest, reader: jspb.BinaryReader): SetIssueAssigneeRequest;
}

export namespace SetIssueAssigneeRequest {
  export type AsObject = {
    issue: string,
    assignee?: Issue.User.AsObject,
  }
}

export class AddIssueViewersRequest extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): AddIssueViewersRequest;

  getViewersList(): Array<string>;
  setViewersList(value: Array<string>): AddIssueViewersRequest;
  clearViewersList(): AddIssueViewersRequest;
  addViewers(value: string, index?: number): AddIssueViewersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddIssueViewersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddIssueViewersRequest): AddIssueViewersRequest.AsObject;
  static serializeBinaryToWriter(message: AddIssueViewersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddIssueViewersRequest;
  static deserializeBinaryFromReader(message: AddIssueViewersRequest, reader: jspb.BinaryReader): AddIssueViewersRequest;
}

export namespace AddIssueViewersRequest {
  export type AsObject = {
    issue: string,
    viewersList: Array<string>,
  }
}

export class RemoveIssueViewersRequest extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): RemoveIssueViewersRequest;

  getViewersList(): Array<string>;
  setViewersList(value: Array<string>): RemoveIssueViewersRequest;
  clearViewersList(): RemoveIssueViewersRequest;
  addViewers(value: string, index?: number): RemoveIssueViewersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveIssueViewersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveIssueViewersRequest): RemoveIssueViewersRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveIssueViewersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveIssueViewersRequest;
  static deserializeBinaryFromReader(message: RemoveIssueViewersRequest, reader: jspb.BinaryReader): RemoveIssueViewersRequest;
}

export namespace RemoveIssueViewersRequest {
  export type AsObject = {
    issue: string,
    viewersList: Array<string>,
  }
}

