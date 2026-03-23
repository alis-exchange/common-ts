import * as jspb from 'google-protobuf'

import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"


export class SendFcmMessageRequest extends jspb.Message {
  getUser(): string;
  setUser(value: string): SendFcmMessageRequest;

  getTitle(): string;
  setTitle(value: string): SendFcmMessageRequest;

  getBody(): string;
  setBody(value: string): SendFcmMessageRequest;

  getImage(): string;
  setImage(value: string): SendFcmMessageRequest;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): SendFcmMessageRequest;

  getUri(): string;
  setUri(value: string): SendFcmMessageRequest;

  getTargetCase(): SendFcmMessageRequest.TargetCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendFcmMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendFcmMessageRequest): SendFcmMessageRequest.AsObject;
  static serializeBinaryToWriter(message: SendFcmMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendFcmMessageRequest;
  static deserializeBinaryFromReader(message: SendFcmMessageRequest, reader: jspb.BinaryReader): SendFcmMessageRequest;
}

export namespace SendFcmMessageRequest {
  export type AsObject = {
    user: string,
    title: string,
    body: string,
    image: string,
    dataMap: Array<[string, string]>,
    uri: string,
  }

  export enum TargetCase { 
    TARGET_NOT_SET = 0,
    USER = 1,
  }
}

export class SendFcmMessageResponse extends jspb.Message {
  getMessageIdsList(): Array<string>;
  setMessageIdsList(value: Array<string>): SendFcmMessageResponse;
  clearMessageIdsList(): SendFcmMessageResponse;
  addMessageIds(value: string, index?: number): SendFcmMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendFcmMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendFcmMessageResponse): SendFcmMessageResponse.AsObject;
  static serializeBinaryToWriter(message: SendFcmMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendFcmMessageResponse;
  static deserializeBinaryFromReader(message: SendFcmMessageResponse, reader: jspb.BinaryReader): SendFcmMessageResponse;
}

export namespace SendFcmMessageResponse {
  export type AsObject = {
    messageIdsList: Array<string>,
  }
}

export class BatchSendFcmMessagesRequest extends jspb.Message {
  getRequestsList(): Array<SendFcmMessageRequest>;
  setRequestsList(value: Array<SendFcmMessageRequest>): BatchSendFcmMessagesRequest;
  clearRequestsList(): BatchSendFcmMessagesRequest;
  addRequests(value?: SendFcmMessageRequest, index?: number): SendFcmMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchSendFcmMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchSendFcmMessagesRequest): BatchSendFcmMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchSendFcmMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchSendFcmMessagesRequest;
  static deserializeBinaryFromReader(message: BatchSendFcmMessagesRequest, reader: jspb.BinaryReader): BatchSendFcmMessagesRequest;
}

export namespace BatchSendFcmMessagesRequest {
  export type AsObject = {
    requestsList: Array<SendFcmMessageRequest.AsObject>,
  }
}

export class BatchSendFcmMessagesResponse extends jspb.Message {
  getMessageIdsList(): Array<string>;
  setMessageIdsList(value: Array<string>): BatchSendFcmMessagesResponse;
  clearMessageIdsList(): BatchSendFcmMessagesResponse;
  addMessageIds(value: string, index?: number): BatchSendFcmMessagesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchSendFcmMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchSendFcmMessagesResponse): BatchSendFcmMessagesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchSendFcmMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchSendFcmMessagesResponse;
  static deserializeBinaryFromReader(message: BatchSendFcmMessagesResponse, reader: jspb.BinaryReader): BatchSendFcmMessagesResponse;
}

export namespace BatchSendFcmMessagesResponse {
  export type AsObject = {
    messageIdsList: Array<string>,
  }
}

