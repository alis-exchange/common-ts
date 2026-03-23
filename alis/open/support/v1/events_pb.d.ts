import * as jspb from 'google-protobuf'

import * as alis_open_pubsub_v1_pubsub_pb from '../../../../alis/open/pubsub/v1/pubsub_pb'; // proto import: "alis/open/pubsub/v1/pubsub.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class IssueCreatedEvent extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): IssueCreatedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueCreatedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: IssueCreatedEvent): IssueCreatedEvent.AsObject;
  static serializeBinaryToWriter(message: IssueCreatedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueCreatedEvent;
  static deserializeBinaryFromReader(message: IssueCreatedEvent, reader: jspb.BinaryReader): IssueCreatedEvent;
}

export namespace IssueCreatedEvent {
  export type AsObject = {
    issue: string,
  }
}

export class IssueRequestersChangedEvent extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): IssueRequestersChangedEvent;

  getPreviousRequestersList(): Array<string>;
  setPreviousRequestersList(value: Array<string>): IssueRequestersChangedEvent;
  clearPreviousRequestersList(): IssueRequestersChangedEvent;
  addPreviousRequesters(value: string, index?: number): IssueRequestersChangedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueRequestersChangedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: IssueRequestersChangedEvent): IssueRequestersChangedEvent.AsObject;
  static serializeBinaryToWriter(message: IssueRequestersChangedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueRequestersChangedEvent;
  static deserializeBinaryFromReader(message: IssueRequestersChangedEvent, reader: jspb.BinaryReader): IssueRequestersChangedEvent;
}

export namespace IssueRequestersChangedEvent {
  export type AsObject = {
    issue: string,
    previousRequestersList: Array<string>,
  }
}

export class IssueAssigneesChangedEvent extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): IssueAssigneesChangedEvent;

  getPreviousAssigneesList(): Array<string>;
  setPreviousAssigneesList(value: Array<string>): IssueAssigneesChangedEvent;
  clearPreviousAssigneesList(): IssueAssigneesChangedEvent;
  addPreviousAssignees(value: string, index?: number): IssueAssigneesChangedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueAssigneesChangedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: IssueAssigneesChangedEvent): IssueAssigneesChangedEvent.AsObject;
  static serializeBinaryToWriter(message: IssueAssigneesChangedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueAssigneesChangedEvent;
  static deserializeBinaryFromReader(message: IssueAssigneesChangedEvent, reader: jspb.BinaryReader): IssueAssigneesChangedEvent;
}

export namespace IssueAssigneesChangedEvent {
  export type AsObject = {
    issue: string,
    previousAssigneesList: Array<string>,
  }
}

export class IssueTypeChangedEvent extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): IssueTypeChangedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueTypeChangedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: IssueTypeChangedEvent): IssueTypeChangedEvent.AsObject;
  static serializeBinaryToWriter(message: IssueTypeChangedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueTypeChangedEvent;
  static deserializeBinaryFromReader(message: IssueTypeChangedEvent, reader: jspb.BinaryReader): IssueTypeChangedEvent;
}

export namespace IssueTypeChangedEvent {
  export type AsObject = {
    issue: string,
  }
}

export class IssueClosedEvent extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): IssueClosedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueClosedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: IssueClosedEvent): IssueClosedEvent.AsObject;
  static serializeBinaryToWriter(message: IssueClosedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueClosedEvent;
  static deserializeBinaryFromReader(message: IssueClosedEvent, reader: jspb.BinaryReader): IssueClosedEvent;
}

export namespace IssueClosedEvent {
  export type AsObject = {
    issue: string,
  }
}

export class IssueReopenedEvent extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): IssueReopenedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueReopenedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: IssueReopenedEvent): IssueReopenedEvent.AsObject;
  static serializeBinaryToWriter(message: IssueReopenedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueReopenedEvent;
  static deserializeBinaryFromReader(message: IssueReopenedEvent, reader: jspb.BinaryReader): IssueReopenedEvent;
}

export namespace IssueReopenedEvent {
  export type AsObject = {
    issue: string,
  }
}

export class IssueOnHoldEvent extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): IssueOnHoldEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueOnHoldEvent.AsObject;
  static toObject(includeInstance: boolean, msg: IssueOnHoldEvent): IssueOnHoldEvent.AsObject;
  static serializeBinaryToWriter(message: IssueOnHoldEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueOnHoldEvent;
  static deserializeBinaryFromReader(message: IssueOnHoldEvent, reader: jspb.BinaryReader): IssueOnHoldEvent;
}

export namespace IssueOnHoldEvent {
  export type AsObject = {
    issue: string,
  }
}

export class IssueResumedEvent extends jspb.Message {
  getIssue(): string;
  setIssue(value: string): IssueResumedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueResumedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: IssueResumedEvent): IssueResumedEvent.AsObject;
  static serializeBinaryToWriter(message: IssueResumedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueResumedEvent;
  static deserializeBinaryFromReader(message: IssueResumedEvent, reader: jspb.BinaryReader): IssueResumedEvent;
}

export namespace IssueResumedEvent {
  export type AsObject = {
    issue: string,
  }
}

export class IssueCommentAddedEvent extends jspb.Message {
  getIssueActivity(): string;
  setIssueActivity(value: string): IssueCommentAddedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueCommentAddedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: IssueCommentAddedEvent): IssueCommentAddedEvent.AsObject;
  static serializeBinaryToWriter(message: IssueCommentAddedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueCommentAddedEvent;
  static deserializeBinaryFromReader(message: IssueCommentAddedEvent, reader: jspb.BinaryReader): IssueCommentAddedEvent;
}

export namespace IssueCommentAddedEvent {
  export type AsObject = {
    issueActivity: string,
  }
}

