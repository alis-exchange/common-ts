import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb'; // proto import: "google/rpc/status.proto"


export class Operation extends jspb.Message {
  getName(): string;
  setName(value: string): Operation;

  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): Operation;
  hasMetadata(): boolean;
  clearMetadata(): Operation;

  getDone(): boolean;
  setDone(value: boolean): Operation;

  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): Operation;
  hasError(): boolean;
  clearError(): Operation;

  getResponse(): google_protobuf_any_pb.Any | undefined;
  setResponse(value?: google_protobuf_any_pb.Any): Operation;
  hasResponse(): boolean;
  clearResponse(): Operation;

  getMethod(): string;
  setMethod(value: string): Operation;

  getCheckpoint(): string;
  setCheckpoint(value: string): Operation;

  getInternalState(): Uint8Array | string;
  getInternalState_asU8(): Uint8Array;
  getInternalState_asB64(): string;
  setInternalState(value: Uint8Array | string): Operation;

  getCloudTask(): Operation.CloudTask | undefined;
  setCloudTask(value?: Operation.CloudTask): Operation;
  hasCloudTask(): boolean;
  clearCloudTask(): Operation;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Operation;
  hasCreateTime(): boolean;
  clearCreateTime(): Operation;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Operation;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Operation;

  getResultCase(): Operation.ResultCase;

  getRunnerCase(): Operation.RunnerCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    name: string,
    metadata?: google_protobuf_any_pb.Any.AsObject,
    done: boolean,
    error?: google_rpc_status_pb.Status.AsObject,
    response?: google_protobuf_any_pb.Any.AsObject,
    method: string,
    checkpoint: string,
    internalState: Uint8Array | string,
    cloudTask?: Operation.CloudTask.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class CloudTask extends jspb.Message {
    getName(): string;
    setName(value: string): CloudTask;

    getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): CloudTask;
    hasScheduleTime(): boolean;
    clearScheduleTime(): CloudTask;

    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): CloudTask;
    hasCreateTime(): boolean;
    clearCreateTime(): CloudTask;

    getRunning(): boolean;
    setRunning(value: boolean): CloudTask;

    getTargetHost(): string;
    setTargetHost(value: string): CloudTask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudTask.AsObject;
    static toObject(includeInstance: boolean, msg: CloudTask): CloudTask.AsObject;
    static serializeBinaryToWriter(message: CloudTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudTask;
    static deserializeBinaryFromReader(message: CloudTask, reader: jspb.BinaryReader): CloudTask;
  }

  export namespace CloudTask {
    export type AsObject = {
      name: string,
      scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      running: boolean,
      targetHost: string,
    }
  }


  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    ERROR = 4,
    RESPONSE = 5,
  }

  export enum RunnerCase { 
    RUNNER_NOT_SET = 0,
    CLOUD_TASK = 11,
  }
}

