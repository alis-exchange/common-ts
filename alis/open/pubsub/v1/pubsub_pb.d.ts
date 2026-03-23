import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class PubSubMessage extends jspb.Message {
  getMessage(): PubSubMessage.Message | undefined;
  setMessage(value?: PubSubMessage.Message): PubSubMessage;
  hasMessage(): boolean;
  clearMessage(): PubSubMessage;

  getSubscription(): string;
  setSubscription(value: string): PubSubMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubSubMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PubSubMessage): PubSubMessage.AsObject;
  static serializeBinaryToWriter(message: PubSubMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubSubMessage;
  static deserializeBinaryFromReader(message: PubSubMessage, reader: jspb.BinaryReader): PubSubMessage;
}

export namespace PubSubMessage {
  export type AsObject = {
    message?: PubSubMessage.Message.AsObject,
    subscription: string,
  }

  export class Message extends jspb.Message {
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Message;

    getAttributesMap(): jspb.Map<string, string>;
    clearAttributesMap(): Message;

    getMessageId(): string;
    setMessageId(value: string): Message;

    getPublishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishTime(value?: google_protobuf_timestamp_pb.Timestamp): Message;
    hasPublishTime(): boolean;
    clearPublishTime(): Message;

    getOrderingKey(): string;
    setOrderingKey(value: string): Message;

    getMessageId1(): string;
    setMessageId1(value: string): Message;

    getPublishTime1(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishTime1(value?: google_protobuf_timestamp_pb.Timestamp): Message;
    hasPublishTime1(): boolean;
    clearPublishTime1(): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
  }

  export namespace Message {
    export type AsObject = {
      data: Uint8Array | string,
      attributesMap: Array<[string, string]>,
      messageId: string,
      publishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      orderingKey: string,
      messageId1: string,
      publishTime1?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

