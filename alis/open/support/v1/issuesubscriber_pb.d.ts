import * as jspb from 'google-protobuf'

import * as alis_open_iam_v1_iam_pb from '../../../../alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class IssueSubscriber extends jspb.Message {
  getName(): string;
  setName(value: string): IssueSubscriber;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): IssueSubscriber;
  hasCreateTime(): boolean;
  clearCreateTime(): IssueSubscriber;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): IssueSubscriber;
  hasUpdateTime(): boolean;
  clearUpdateTime(): IssueSubscriber;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueSubscriber.AsObject;
  static toObject(includeInstance: boolean, msg: IssueSubscriber): IssueSubscriber.AsObject;
  static serializeBinaryToWriter(message: IssueSubscriber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueSubscriber;
  static deserializeBinaryFromReader(message: IssueSubscriber, reader: jspb.BinaryReader): IssueSubscriber;
}

export namespace IssueSubscriber {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateIssueSubscriberRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateIssueSubscriberRequest;

  getIssueSubscriber(): IssueSubscriber | undefined;
  setIssueSubscriber(value?: IssueSubscriber): CreateIssueSubscriberRequest;
  hasIssueSubscriber(): boolean;
  clearIssueSubscriber(): CreateIssueSubscriberRequest;

  getSubscriberId(): string;
  setSubscriberId(value: string): CreateIssueSubscriberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIssueSubscriberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIssueSubscriberRequest): CreateIssueSubscriberRequest.AsObject;
  static serializeBinaryToWriter(message: CreateIssueSubscriberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIssueSubscriberRequest;
  static deserializeBinaryFromReader(message: CreateIssueSubscriberRequest, reader: jspb.BinaryReader): CreateIssueSubscriberRequest;
}

export namespace CreateIssueSubscriberRequest {
  export type AsObject = {
    parent: string,
    issueSubscriber?: IssueSubscriber.AsObject,
    subscriberId: string,
  }
}

export class DeleteIssueSubscriberRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteIssueSubscriberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIssueSubscriberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIssueSubscriberRequest): DeleteIssueSubscriberRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteIssueSubscriberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIssueSubscriberRequest;
  static deserializeBinaryFromReader(message: DeleteIssueSubscriberRequest, reader: jspb.BinaryReader): DeleteIssueSubscriberRequest;
}

export namespace DeleteIssueSubscriberRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetIssueSubscriberRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetIssueSubscriberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIssueSubscriberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIssueSubscriberRequest): GetIssueSubscriberRequest.AsObject;
  static serializeBinaryToWriter(message: GetIssueSubscriberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIssueSubscriberRequest;
  static deserializeBinaryFromReader(message: GetIssueSubscriberRequest, reader: jspb.BinaryReader): GetIssueSubscriberRequest;
}

export namespace GetIssueSubscriberRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListIssueSubscribersRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListIssueSubscribersRequest;

  getPageSize(): number;
  setPageSize(value: number): ListIssueSubscribersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListIssueSubscribersRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListIssueSubscribersRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListIssueSubscribersRequest;

  getFilter(): string;
  setFilter(value: string): ListIssueSubscribersRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListIssueSubscribersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIssueSubscribersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIssueSubscribersRequest): ListIssueSubscribersRequest.AsObject;
  static serializeBinaryToWriter(message: ListIssueSubscribersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIssueSubscribersRequest;
  static deserializeBinaryFromReader(message: ListIssueSubscribersRequest, reader: jspb.BinaryReader): ListIssueSubscribersRequest;
}

export namespace ListIssueSubscribersRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
    orderBy: string,
  }
}

export class ListIssueSubscribersResponse extends jspb.Message {
  getSubscribersList(): Array<IssueSubscriber>;
  setSubscribersList(value: Array<IssueSubscriber>): ListIssueSubscribersResponse;
  clearSubscribersList(): ListIssueSubscribersResponse;
  addSubscribers(value?: IssueSubscriber, index?: number): IssueSubscriber;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListIssueSubscribersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIssueSubscribersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIssueSubscribersResponse): ListIssueSubscribersResponse.AsObject;
  static serializeBinaryToWriter(message: ListIssueSubscribersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIssueSubscribersResponse;
  static deserializeBinaryFromReader(message: ListIssueSubscribersResponse, reader: jspb.BinaryReader): ListIssueSubscribersResponse;
}

export namespace ListIssueSubscribersResponse {
  export type AsObject = {
    subscribersList: Array<IssueSubscriber.AsObject>,
    nextPageToken: string,
  }
}

