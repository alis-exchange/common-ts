import * as jspb from 'google-protobuf'

import * as alis_open_pubsub_v1_pubsub_pb from '../../../../alis/open/pubsub/v1/pubsub_pb'; // proto import: "alis/open/pubsub/v1/pubsub.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Flow extends jspb.Message {
  getName(): string;
  setName(value: string): Flow;

  getSource(): string;
  setSource(value: string): Flow;

  getParentId(): string;
  setParentId(value: string): Flow;

  getStepsList(): Array<Flow.Step>;
  setStepsList(value: Array<Flow.Step>): Flow;
  clearStepsList(): Flow;
  addSteps(value?: Flow.Step, index?: number): Flow.Step;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Flow;
  hasCreateTime(): boolean;
  clearCreateTime(): Flow;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Flow;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Flow;

  getPublishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishTime(value?: google_protobuf_timestamp_pb.Timestamp): Flow;
  hasPublishTime(): boolean;
  clearPublishTime(): Flow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Flow.AsObject;
  static toObject(includeInstance: boolean, msg: Flow): Flow.AsObject;
  static serializeBinaryToWriter(message: Flow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Flow;
  static deserializeBinaryFromReader(message: Flow, reader: jspb.BinaryReader): Flow;
}

export namespace Flow {
  export type AsObject = {
    name: string,
    source: string,
    parentId: string,
    stepsList: Array<Flow.Step.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    publishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class Step extends jspb.Message {
    getId(): string;
    setId(value: string): Step;

    getTitle(): string;
    setTitle(value: string): Step;

    getDescription(): string;
    setDescription(value: string): Step;

    getState(): Flow.Step.State;
    setState(value: Flow.Step.State): Step;

    getChildrenList(): Array<Flow>;
    setChildrenList(value: Array<Flow>): Step;
    clearChildrenList(): Step;
    addChildren(value?: Flow, index?: number): Flow;

    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Step;
    hasCreateTime(): boolean;
    clearCreateTime(): Step;

    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Step;
    hasUpdateTime(): boolean;
    clearUpdateTime(): Step;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Step.AsObject;
    static toObject(includeInstance: boolean, msg: Step): Step.AsObject;
    static serializeBinaryToWriter(message: Step, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Step;
    static deserializeBinaryFromReader(message: Step, reader: jspb.BinaryReader): Step;
  }

  export namespace Step {
    export type AsObject = {
      id: string,
      title: string,
      description: string,
      state: Flow.Step.State,
      childrenList: Array<Flow.AsObject>,
      createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum State { 
      STATE_UNSPECIFIED = 0,
      QUEUED = 1,
      IN_PROGRESS = 2,
      CANCELLED = 3,
      COMPLETED = 4,
      FAILED = 5,
      AWAITING_INPUT = 6,
    }
  }

}

export class GetFlowRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetFlowRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetFlowRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetFlowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFlowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFlowRequest): GetFlowRequest.AsObject;
  static serializeBinaryToWriter(message: GetFlowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFlowRequest;
  static deserializeBinaryFromReader(message: GetFlowRequest, reader: jspb.BinaryReader): GetFlowRequest;
}

export namespace GetFlowRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListFlowsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListFlowsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFlowsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFlowsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListFlowsRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListFlowsRequest;

  getFilter(): string;
  setFilter(value: string): ListFlowsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlowsRequest): ListFlowsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFlowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlowsRequest;
  static deserializeBinaryFromReader(message: ListFlowsRequest, reader: jspb.BinaryReader): ListFlowsRequest;
}

export namespace ListFlowsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
  }
}

export class ListFlowsResponse extends jspb.Message {
  getFlowsList(): Array<Flow>;
  setFlowsList(value: Array<Flow>): ListFlowsResponse;
  clearFlowsList(): ListFlowsResponse;
  addFlows(value?: Flow, index?: number): Flow;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFlowsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlowsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlowsResponse): ListFlowsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFlowsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlowsResponse;
  static deserializeBinaryFromReader(message: ListFlowsResponse, reader: jspb.BinaryReader): ListFlowsResponse;
}

export namespace ListFlowsResponse {
  export type AsObject = {
    flowsList: Array<Flow.AsObject>,
    nextPageToken: string,
  }
}

export class StreamFlowsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): StreamFlowsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): StreamFlowsRequest;
  hasReadMask(): boolean;
  clearReadMask(): StreamFlowsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamFlowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamFlowsRequest): StreamFlowsRequest.AsObject;
  static serializeBinaryToWriter(message: StreamFlowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamFlowsRequest;
  static deserializeBinaryFromReader(message: StreamFlowsRequest, reader: jspb.BinaryReader): StreamFlowsRequest;
}

export namespace StreamFlowsRequest {
  export type AsObject = {
    parent: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GenerateFlowTreeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GenerateFlowTreeRequest;

  getMaxDepth(): number;
  setMaxDepth(value: number): GenerateFlowTreeRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GenerateFlowTreeRequest;
  hasReadMask(): boolean;
  clearReadMask(): GenerateFlowTreeRequest;

  getFilter(): string;
  setFilter(value: string): GenerateFlowTreeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateFlowTreeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateFlowTreeRequest): GenerateFlowTreeRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateFlowTreeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateFlowTreeRequest;
  static deserializeBinaryFromReader(message: GenerateFlowTreeRequest, reader: jspb.BinaryReader): GenerateFlowTreeRequest;
}

export namespace GenerateFlowTreeRequest {
  export type AsObject = {
    name: string,
    maxDepth: number,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
  }
}

export class GenerateFlowTreeResponse extends jspb.Message {
  getFlow(): Flow | undefined;
  setFlow(value?: Flow): GenerateFlowTreeResponse;
  hasFlow(): boolean;
  clearFlow(): GenerateFlowTreeResponse;

  getStepChildrenList(): Array<GenerateFlowTreeResponse.StepChildren>;
  setStepChildrenList(value: Array<GenerateFlowTreeResponse.StepChildren>): GenerateFlowTreeResponse;
  clearStepChildrenList(): GenerateFlowTreeResponse;
  addStepChildren(value?: GenerateFlowTreeResponse.StepChildren, index?: number): GenerateFlowTreeResponse.StepChildren;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateFlowTreeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateFlowTreeResponse): GenerateFlowTreeResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateFlowTreeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateFlowTreeResponse;
  static deserializeBinaryFromReader(message: GenerateFlowTreeResponse, reader: jspb.BinaryReader): GenerateFlowTreeResponse;
}

export namespace GenerateFlowTreeResponse {
  export type AsObject = {
    flow?: Flow.AsObject,
    stepChildrenList: Array<GenerateFlowTreeResponse.StepChildren.AsObject>,
  }

  export class StepChildren extends jspb.Message {
    getId(): string;
    setId(value: string): StepChildren;

    getChildrenList(): Array<string>;
    setChildrenList(value: Array<string>): StepChildren;
    clearChildrenList(): StepChildren;
    addChildren(value: string, index?: number): StepChildren;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepChildren.AsObject;
    static toObject(includeInstance: boolean, msg: StepChildren): StepChildren.AsObject;
    static serializeBinaryToWriter(message: StepChildren, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepChildren;
    static deserializeBinaryFromReader(message: StepChildren, reader: jspb.BinaryReader): StepChildren;
  }

  export namespace StepChildren {
    export type AsObject = {
      id: string,
      childrenList: Array<string>,
    }
  }

}

