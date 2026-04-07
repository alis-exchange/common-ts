import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_iam_v1_policy_pb from '../../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as alis_iam_v1_iam_pb from '../../../../../alis/iam/v1/iam_pb'; // proto import: "alis/iam/v1/iam.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as lf_a2a_v1_a2a_pb from '../../../../../lf/a2a/v1/a2a_pb'; // proto import: "lf/a2a/v1/a2a.proto"


export class Thread extends jspb.Message {
  getName(): string;
  setName(value: string): Thread;

  getDisplayName(): string;
  setDisplayName(value: string): Thread;

  getAgentId(): string;
  setAgentId(value: string): Thread;

  getAgentDisplayName(): string;
  setAgentDisplayName(value: string): Thread;

  getNextSequence(): number;
  setNextSequence(value: number): Thread;

  getLatestSequence(): number;
  setLatestSequence(value: number): Thread;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Thread;
  hasCreateTime(): boolean;
  clearCreateTime(): Thread;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Thread.AsObject;
  static toObject(includeInstance: boolean, msg: Thread): Thread.AsObject;
  static serializeBinaryToWriter(message: Thread, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Thread;
  static deserializeBinaryFromReader(message: Thread, reader: jspb.BinaryReader): Thread;
}

export namespace Thread {
  export type AsObject = {
    name: string,
    displayName: string,
    agentId: string,
    agentDisplayName: string,
    nextSequence: number,
    latestSequence: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ThreadEvent extends jspb.Message {
  getName(): string;
  setName(value: string): ThreadEvent;

  getTask(): lf_a2a_v1_a2a_pb.Task | undefined;
  setTask(value?: lf_a2a_v1_a2a_pb.Task): ThreadEvent;
  hasTask(): boolean;
  clearTask(): ThreadEvent;

  getMessage(): lf_a2a_v1_a2a_pb.Message | undefined;
  setMessage(value?: lf_a2a_v1_a2a_pb.Message): ThreadEvent;
  hasMessage(): boolean;
  clearMessage(): ThreadEvent;

  getStatusUpdate(): lf_a2a_v1_a2a_pb.TaskStatusUpdateEvent | undefined;
  setStatusUpdate(value?: lf_a2a_v1_a2a_pb.TaskStatusUpdateEvent): ThreadEvent;
  hasStatusUpdate(): boolean;
  clearStatusUpdate(): ThreadEvent;

  getArtifactUpdate(): lf_a2a_v1_a2a_pb.TaskArtifactUpdateEvent | undefined;
  setArtifactUpdate(value?: lf_a2a_v1_a2a_pb.TaskArtifactUpdateEvent): ThreadEvent;
  hasArtifactUpdate(): boolean;
  clearArtifactUpdate(): ThreadEvent;

  getSequence(): number;
  setSequence(value: number): ThreadEvent;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): ThreadEvent;
  hasCreateTime(): boolean;
  clearCreateTime(): ThreadEvent;

  getPayloadCase(): ThreadEvent.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreadEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ThreadEvent): ThreadEvent.AsObject;
  static serializeBinaryToWriter(message: ThreadEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreadEvent;
  static deserializeBinaryFromReader(message: ThreadEvent, reader: jspb.BinaryReader): ThreadEvent;
}

export namespace ThreadEvent {
  export type AsObject = {
    name: string,
    task?: lf_a2a_v1_a2a_pb.Task.AsObject,
    message?: lf_a2a_v1_a2a_pb.Message.AsObject,
    statusUpdate?: lf_a2a_v1_a2a_pb.TaskStatusUpdateEvent.AsObject,
    artifactUpdate?: lf_a2a_v1_a2a_pb.TaskArtifactUpdateEvent.AsObject,
    sequence: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    TASK = 2,
    MESSAGE = 3,
    STATUS_UPDATE = 4,
    ARTIFACT_UPDATE = 5,
  }
}

export class UserThreadState extends jspb.Message {
  getName(): string;
  setName(value: string): UserThreadState;

  getThread(): string;
  setThread(value: string): UserThreadState;

  getUser(): string;
  setUser(value: string): UserThreadState;

  getReadSequence(): number;
  setReadSequence(value: number): UserThreadState;

  getPinned(): boolean;
  setPinned(value: boolean): UserThreadState;

  getPinnedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPinnedTime(value?: google_protobuf_timestamp_pb.Timestamp): UserThreadState;
  hasPinnedTime(): boolean;
  clearPinnedTime(): UserThreadState;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): UserThreadState;
  hasUpdateTime(): boolean;
  clearUpdateTime(): UserThreadState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserThreadState.AsObject;
  static toObject(includeInstance: boolean, msg: UserThreadState): UserThreadState.AsObject;
  static serializeBinaryToWriter(message: UserThreadState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserThreadState;
  static deserializeBinaryFromReader(message: UserThreadState, reader: jspb.BinaryReader): UserThreadState;
}

export namespace UserThreadState {
  export type AsObject = {
    name: string,
    thread: string,
    user: string,
    readSequence: number,
    pinned: boolean,
    pinnedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetThreadRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetThreadRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetThreadRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetThreadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetThreadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetThreadRequest): GetThreadRequest.AsObject;
  static serializeBinaryToWriter(message: GetThreadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetThreadRequest;
  static deserializeBinaryFromReader(message: GetThreadRequest, reader: jspb.BinaryReader): GetThreadRequest;
}

export namespace GetThreadRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetUserThreadStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetUserThreadStateRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetUserThreadStateRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetUserThreadStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserThreadStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserThreadStateRequest): GetUserThreadStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserThreadStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserThreadStateRequest;
  static deserializeBinaryFromReader(message: GetUserThreadStateRequest, reader: jspb.BinaryReader): GetUserThreadStateRequest;
}

export namespace GetUserThreadStateRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteThreadRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteThreadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteThreadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteThreadRequest): DeleteThreadRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteThreadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteThreadRequest;
  static deserializeBinaryFromReader(message: DeleteThreadRequest, reader: jspb.BinaryReader): DeleteThreadRequest;
}

export namespace DeleteThreadRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListThreadsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListThreadsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListThreadsRequest;

  getAgentId(): string;
  setAgentId(value: string): ListThreadsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListThreadsRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListThreadsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListThreadsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListThreadsRequest): ListThreadsRequest.AsObject;
  static serializeBinaryToWriter(message: ListThreadsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListThreadsRequest;
  static deserializeBinaryFromReader(message: ListThreadsRequest, reader: jspb.BinaryReader): ListThreadsRequest;
}

export namespace ListThreadsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    agentId: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ThreadView extends jspb.Message {
  getThread(): Thread | undefined;
  setThread(value?: Thread): ThreadView;
  hasThread(): boolean;
  clearThread(): ThreadView;

  getReadSequence(): number;
  setReadSequence(value: number): ThreadView;

  getHasUnread(): boolean;
  setHasUnread(value: boolean): ThreadView;

  getPinned(): boolean;
  setPinned(value: boolean): ThreadView;

  getPinnedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPinnedTime(value?: google_protobuf_timestamp_pb.Timestamp): ThreadView;
  hasPinnedTime(): boolean;
  clearPinnedTime(): ThreadView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreadView.AsObject;
  static toObject(includeInstance: boolean, msg: ThreadView): ThreadView.AsObject;
  static serializeBinaryToWriter(message: ThreadView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreadView;
  static deserializeBinaryFromReader(message: ThreadView, reader: jspb.BinaryReader): ThreadView;
}

export namespace ThreadView {
  export type AsObject = {
    thread?: Thread.AsObject,
    readSequence: number,
    hasUnread: boolean,
    pinned: boolean,
    pinnedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListThreadsResponse extends jspb.Message {
  getThreadsList(): Array<ThreadView>;
  setThreadsList(value: Array<ThreadView>): ListThreadsResponse;
  clearThreadsList(): ListThreadsResponse;
  addThreads(value?: ThreadView, index?: number): ThreadView;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListThreadsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListThreadsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListThreadsResponse): ListThreadsResponse.AsObject;
  static serializeBinaryToWriter(message: ListThreadsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListThreadsResponse;
  static deserializeBinaryFromReader(message: ListThreadsResponse, reader: jspb.BinaryReader): ListThreadsResponse;
}

export namespace ListThreadsResponse {
  export type AsObject = {
    threadsList: Array<ThreadView.AsObject>,
    nextPageToken: string,
  }
}

export class GetThreadEventRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetThreadEventRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetThreadEventRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetThreadEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetThreadEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetThreadEventRequest): GetThreadEventRequest.AsObject;
  static serializeBinaryToWriter(message: GetThreadEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetThreadEventRequest;
  static deserializeBinaryFromReader(message: GetThreadEventRequest, reader: jspb.BinaryReader): GetThreadEventRequest;
}

export namespace GetThreadEventRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListThreadEventsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListThreadEventsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListThreadEventsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListThreadEventsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListThreadEventsRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListThreadEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListThreadEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListThreadEventsRequest): ListThreadEventsRequest.AsObject;
  static serializeBinaryToWriter(message: ListThreadEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListThreadEventsRequest;
  static deserializeBinaryFromReader(message: ListThreadEventsRequest, reader: jspb.BinaryReader): ListThreadEventsRequest;
}

export namespace ListThreadEventsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListThreadEventsResponse extends jspb.Message {
  getEventsList(): Array<ThreadEvent>;
  setEventsList(value: Array<ThreadEvent>): ListThreadEventsResponse;
  clearEventsList(): ListThreadEventsResponse;
  addEvents(value?: ThreadEvent, index?: number): ThreadEvent;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListThreadEventsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListThreadEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListThreadEventsResponse): ListThreadEventsResponse.AsObject;
  static serializeBinaryToWriter(message: ListThreadEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListThreadEventsResponse;
  static deserializeBinaryFromReader(message: ListThreadEventsResponse, reader: jspb.BinaryReader): ListThreadEventsResponse;
}

export namespace ListThreadEventsResponse {
  export type AsObject = {
    eventsList: Array<ThreadEvent.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateUserThreadStateRequest extends jspb.Message {
  getUserThreadState(): UserThreadState | undefined;
  setUserThreadState(value?: UserThreadState): UpdateUserThreadStateRequest;
  hasUserThreadState(): boolean;
  clearUserThreadState(): UpdateUserThreadStateRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateUserThreadStateRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateUserThreadStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserThreadStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserThreadStateRequest): UpdateUserThreadStateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserThreadStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserThreadStateRequest;
  static deserializeBinaryFromReader(message: UpdateUserThreadStateRequest, reader: jspb.BinaryReader): UpdateUserThreadStateRequest;
}

export namespace UpdateUserThreadStateRequest {
  export type AsObject = {
    userThreadState?: UserThreadState.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class StreamThreadEventsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): StreamThreadEventsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): StreamThreadEventsRequest;
  hasReadMask(): boolean;
  clearReadMask(): StreamThreadEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamThreadEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamThreadEventsRequest): StreamThreadEventsRequest.AsObject;
  static serializeBinaryToWriter(message: StreamThreadEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamThreadEventsRequest;
  static deserializeBinaryFromReader(message: StreamThreadEventsRequest, reader: jspb.BinaryReader): StreamThreadEventsRequest;
}

export namespace StreamThreadEventsRequest {
  export type AsObject = {
    parent: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class AppendThreadEventRequest extends jspb.Message {
  getEvent(): ThreadEvent | undefined;
  setEvent(value?: ThreadEvent): AppendThreadEventRequest;
  hasEvent(): boolean;
  clearEvent(): AppendThreadEventRequest;

  getAgentId(): string;
  setAgentId(value: string): AppendThreadEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppendThreadEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppendThreadEventRequest): AppendThreadEventRequest.AsObject;
  static serializeBinaryToWriter(message: AppendThreadEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppendThreadEventRequest;
  static deserializeBinaryFromReader(message: AppendThreadEventRequest, reader: jspb.BinaryReader): AppendThreadEventRequest;
}

export namespace AppendThreadEventRequest {
  export type AsObject = {
    event?: ThreadEvent.AsObject,
    agentId: string,
  }
}

export class AppendThreadEventResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppendThreadEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AppendThreadEventResponse): AppendThreadEventResponse.AsObject;
  static serializeBinaryToWriter(message: AppendThreadEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppendThreadEventResponse;
  static deserializeBinaryFromReader(message: AppendThreadEventResponse, reader: jspb.BinaryReader): AppendThreadEventResponse;
}

export namespace AppendThreadEventResponse {
  export type AsObject = {
  }
}

