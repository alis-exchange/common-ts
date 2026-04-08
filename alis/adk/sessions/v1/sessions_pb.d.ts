import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_type_date_pb from '../../../../google/type/date_pb'; // proto import: "google/type/date.proto"


export class Session extends jspb.Message {
  getId(): string;
  setId(value: string): Session;

  getAppName(): string;
  setAppName(value: string): Session;

  getUserId(): string;
  setUserId(value: string): Session;

  getDisplayName(): string;
  setDisplayName(value: string): Session;
  hasDisplayName(): boolean;
  clearDisplayName(): Session;

  getState(): google_protobuf_struct_pb.Struct | undefined;
  setState(value?: google_protobuf_struct_pb.Struct): Session;
  hasState(): boolean;
  clearState(): Session;

  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): Session;
  hasExpireTime(): boolean;
  clearExpireTime(): Session;

  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): Session;
  hasTtl(): boolean;
  clearTtl(): Session;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Session;
  hasCreateTime(): boolean;
  clearCreateTime(): Session;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Session;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Session;

  getExpirationCase(): Session.ExpirationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    id: string,
    appName: string,
    userId: string,
    displayName?: string,
    state?: google_protobuf_struct_pb.Struct.AsObject,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ExpirationCase { 
    EXPIRATION_NOT_SET = 0,
    EXPIRE_TIME = 96,
    TTL = 97,
  }

  export enum DisplayNameCase { 
    _DISPLAY_NAME_NOT_SET = 0,
    DISPLAY_NAME = 4,
  }
}

export class AppState extends jspb.Message {
  getAppName(): string;
  setAppName(value: string): AppState;

  getState(): google_protobuf_struct_pb.Struct | undefined;
  setState(value?: google_protobuf_struct_pb.Struct): AppState;
  hasState(): boolean;
  clearState(): AppState;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): AppState;
  hasUpdateTime(): boolean;
  clearUpdateTime(): AppState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppState.AsObject;
  static toObject(includeInstance: boolean, msg: AppState): AppState.AsObject;
  static serializeBinaryToWriter(message: AppState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppState;
  static deserializeBinaryFromReader(message: AppState, reader: jspb.BinaryReader): AppState;
}

export namespace AppState {
  export type AsObject = {
    appName: string,
    state?: google_protobuf_struct_pb.Struct.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UserState extends jspb.Message {
  getAppName(): string;
  setAppName(value: string): UserState;

  getUserId(): string;
  setUserId(value: string): UserState;

  getState(): google_protobuf_struct_pb.Struct | undefined;
  setState(value?: google_protobuf_struct_pb.Struct): UserState;
  hasState(): boolean;
  clearState(): UserState;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): UserState;
  hasUpdateTime(): boolean;
  clearUpdateTime(): UserState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserState.AsObject;
  static toObject(includeInstance: boolean, msg: UserState): UserState.AsObject;
  static serializeBinaryToWriter(message: UserState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserState;
  static deserializeBinaryFromReader(message: UserState, reader: jspb.BinaryReader): UserState;
}

export namespace UserState {
  export type AsObject = {
    appName: string,
    userId: string,
    state?: google_protobuf_struct_pb.Struct.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SessionEvent extends jspb.Message {
  getId(): string;
  setId(value: string): SessionEvent;

  getAppName(): string;
  setAppName(value: string): SessionEvent;

  getUserId(): string;
  setUserId(value: string): SessionEvent;

  getSessionId(): string;
  setSessionId(value: string): SessionEvent;

  getInvocationId(): string;
  setInvocationId(value: string): SessionEvent;

  getAuthor(): string;
  setAuthor(value: string): SessionEvent;

  getActions(): EventActions | undefined;
  setActions(value?: EventActions): SessionEvent;
  hasActions(): boolean;
  clearActions(): SessionEvent;

  getLongRunningToolIdsList(): Array<string>;
  setLongRunningToolIdsList(value: Array<string>): SessionEvent;
  clearLongRunningToolIdsList(): SessionEvent;
  addLongRunningToolIds(value: string, index?: number): SessionEvent;

  getBranch(): string;
  setBranch(value: string): SessionEvent;
  hasBranch(): boolean;
  clearBranch(): SessionEvent;

  getContent(): Content | undefined;
  setContent(value?: Content): SessionEvent;
  hasContent(): boolean;
  clearContent(): SessionEvent;

  getGroundingMetadata(): GroundingMetadata | undefined;
  setGroundingMetadata(value?: GroundingMetadata): SessionEvent;
  hasGroundingMetadata(): boolean;
  clearGroundingMetadata(): SessionEvent;

  getCustomMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setCustomMetadata(value?: google_protobuf_struct_pb.Struct): SessionEvent;
  hasCustomMetadata(): boolean;
  clearCustomMetadata(): SessionEvent;

  getUsageMetadata(): UsageMetadata | undefined;
  setUsageMetadata(value?: UsageMetadata): SessionEvent;
  hasUsageMetadata(): boolean;
  clearUsageMetadata(): SessionEvent;

  getCitationMetadata(): CitationMetadata | undefined;
  setCitationMetadata(value?: CitationMetadata): SessionEvent;
  hasCitationMetadata(): boolean;
  clearCitationMetadata(): SessionEvent;

  getPartial(): boolean;
  setPartial(value: boolean): SessionEvent;
  hasPartial(): boolean;
  clearPartial(): SessionEvent;

  getTurnComplete(): boolean;
  setTurnComplete(value: boolean): SessionEvent;
  hasTurnComplete(): boolean;
  clearTurnComplete(): SessionEvent;

  getErrorCode(): string;
  setErrorCode(value: string): SessionEvent;
  hasErrorCode(): boolean;
  clearErrorCode(): SessionEvent;

  getErrorMessage(): string;
  setErrorMessage(value: string): SessionEvent;
  hasErrorMessage(): boolean;
  clearErrorMessage(): SessionEvent;

  getInterrupted(): boolean;
  setInterrupted(value: boolean): SessionEvent;
  hasInterrupted(): boolean;
  clearInterrupted(): SessionEvent;

  getFinishReason(): FinishReason;
  setFinishReason(value: FinishReason): SessionEvent;

  getAvgLogprobs(): number;
  setAvgLogprobs(value: number): SessionEvent;
  hasAvgLogprobs(): boolean;
  clearAvgLogprobs(): SessionEvent;

  getModelVersion(): string;
  setModelVersion(value: string): SessionEvent;
  hasModelVersion(): boolean;
  clearModelVersion(): SessionEvent;

  getLogprobsResult(): LogprobsResult | undefined;
  setLogprobsResult(value?: LogprobsResult): SessionEvent;
  hasLogprobsResult(): boolean;
  clearLogprobsResult(): SessionEvent;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SessionEvent;
  hasTimestamp(): boolean;
  clearTimestamp(): SessionEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SessionEvent): SessionEvent.AsObject;
  static serializeBinaryToWriter(message: SessionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionEvent;
  static deserializeBinaryFromReader(message: SessionEvent, reader: jspb.BinaryReader): SessionEvent;
}

export namespace SessionEvent {
  export type AsObject = {
    id: string,
    appName: string,
    userId: string,
    sessionId: string,
    invocationId: string,
    author: string,
    actions?: EventActions.AsObject,
    longRunningToolIdsList: Array<string>,
    branch?: string,
    content?: Content.AsObject,
    groundingMetadata?: GroundingMetadata.AsObject,
    customMetadata?: google_protobuf_struct_pb.Struct.AsObject,
    usageMetadata?: UsageMetadata.AsObject,
    citationMetadata?: CitationMetadata.AsObject,
    partial?: boolean,
    turnComplete?: boolean,
    errorCode?: string,
    errorMessage?: string,
    interrupted?: boolean,
    finishReason: FinishReason,
    avgLogprobs?: number,
    modelVersion?: string,
    logprobsResult?: LogprobsResult.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum BranchCase { 
    _BRANCH_NOT_SET = 0,
    BRANCH = 9,
  }

  export enum PartialCase { 
    _PARTIAL_NOT_SET = 0,
    PARTIAL = 15,
  }

  export enum TurnCompleteCase { 
    _TURN_COMPLETE_NOT_SET = 0,
    TURN_COMPLETE = 16,
  }

  export enum ErrorCodeCase { 
    _ERROR_CODE_NOT_SET = 0,
    ERROR_CODE = 17,
  }

  export enum ErrorMessageCase { 
    _ERROR_MESSAGE_NOT_SET = 0,
    ERROR_MESSAGE = 18,
  }

  export enum InterruptedCase { 
    _INTERRUPTED_NOT_SET = 0,
    INTERRUPTED = 19,
  }

  export enum AvgLogprobsCase { 
    _AVG_LOGPROBS_NOT_SET = 0,
    AVG_LOGPROBS = 21,
  }

  export enum ModelVersionCase { 
    _MODEL_VERSION_NOT_SET = 0,
    MODEL_VERSION = 22,
  }
}

export class EventMetadata extends jspb.Message {
  getGroundingMetadata(): GroundingMetadata | undefined;
  setGroundingMetadata(value?: GroundingMetadata): EventMetadata;
  hasGroundingMetadata(): boolean;
  clearGroundingMetadata(): EventMetadata;

  getPartial(): boolean;
  setPartial(value: boolean): EventMetadata;

  getTurnComplete(): boolean;
  setTurnComplete(value: boolean): EventMetadata;

  getInterrupted(): boolean;
  setInterrupted(value: boolean): EventMetadata;

  getLongRunningToolIdsList(): Array<string>;
  setLongRunningToolIdsList(value: Array<string>): EventMetadata;
  clearLongRunningToolIdsList(): EventMetadata;
  addLongRunningToolIds(value: string, index?: number): EventMetadata;

  getBranch(): string;
  setBranch(value: string): EventMetadata;

  getCustomMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setCustomMetadata(value?: google_protobuf_struct_pb.Struct): EventMetadata;
  hasCustomMetadata(): boolean;
  clearCustomMetadata(): EventMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: EventMetadata): EventMetadata.AsObject;
  static serializeBinaryToWriter(message: EventMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventMetadata;
  static deserializeBinaryFromReader(message: EventMetadata, reader: jspb.BinaryReader): EventMetadata;
}

export namespace EventMetadata {
  export type AsObject = {
    groundingMetadata?: GroundingMetadata.AsObject,
    partial: boolean,
    turnComplete: boolean,
    interrupted: boolean,
    longRunningToolIdsList: Array<string>,
    branch: string,
    customMetadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class EventActions extends jspb.Message {
  getSkipSummarization(): boolean;
  setSkipSummarization(value: boolean): EventActions;

  getStateDelta(): google_protobuf_struct_pb.Struct | undefined;
  setStateDelta(value?: google_protobuf_struct_pb.Struct): EventActions;
  hasStateDelta(): boolean;
  clearStateDelta(): EventActions;

  getArtifactDeltaMap(): jspb.Map<string, number>;
  clearArtifactDeltaMap(): EventActions;

  getEscalate(): boolean;
  setEscalate(value: boolean): EventActions;

  getRequestedToolConfirmationsMap(): jspb.Map<string, ToolConfirmation>;
  clearRequestedToolConfirmationsMap(): EventActions;

  getTransferAgent(): string;
  setTransferAgent(value: string): EventActions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventActions.AsObject;
  static toObject(includeInstance: boolean, msg: EventActions): EventActions.AsObject;
  static serializeBinaryToWriter(message: EventActions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventActions;
  static deserializeBinaryFromReader(message: EventActions, reader: jspb.BinaryReader): EventActions;
}

export namespace EventActions {
  export type AsObject = {
    skipSummarization: boolean,
    stateDelta?: google_protobuf_struct_pb.Struct.AsObject,
    artifactDeltaMap: Array<[string, number]>,
    escalate: boolean,
    requestedToolConfirmationsMap: Array<[string, ToolConfirmation.AsObject]>,
    transferAgent: string,
  }
}

export class Content extends jspb.Message {
  getRole(): string;
  setRole(value: string): Content;

  getPartsList(): Array<Part>;
  setPartsList(value: Array<Part>): Content;
  clearPartsList(): Content;
  addParts(value?: Part, index?: number): Part;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Content.AsObject;
  static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
  static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Content;
  static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
}

export namespace Content {
  export type AsObject = {
    role: string,
    partsList: Array<Part.AsObject>,
  }
}

export class Part extends jspb.Message {
  getText(): string;
  setText(value: string): Part;

  getInlineData(): Blob | undefined;
  setInlineData(value?: Blob): Part;
  hasInlineData(): boolean;
  clearInlineData(): Part;

  getFileData(): FileData | undefined;
  setFileData(value?: FileData): Part;
  hasFileData(): boolean;
  clearFileData(): Part;

  getFunctionCall(): FunctionCall | undefined;
  setFunctionCall(value?: FunctionCall): Part;
  hasFunctionCall(): boolean;
  clearFunctionCall(): Part;

  getFunctionResponse(): FunctionResponse | undefined;
  setFunctionResponse(value?: FunctionResponse): Part;
  hasFunctionResponse(): boolean;
  clearFunctionResponse(): Part;

  getExecutableCode(): ExecutableCode | undefined;
  setExecutableCode(value?: ExecutableCode): Part;
  hasExecutableCode(): boolean;
  clearExecutableCode(): Part;

  getCodeExecutionResult(): CodeExecutionResult | undefined;
  setCodeExecutionResult(value?: CodeExecutionResult): Part;
  hasCodeExecutionResult(): boolean;
  clearCodeExecutionResult(): Part;

  getVideoMetadata(): VideoMetadata | undefined;
  setVideoMetadata(value?: VideoMetadata): Part;
  hasVideoMetadata(): boolean;
  clearVideoMetadata(): Part;

  getThought(): boolean;
  setThought(value: boolean): Part;

  getThoughtSignature(): Uint8Array | string;
  getThoughtSignature_asU8(): Uint8Array;
  getThoughtSignature_asB64(): string;
  setThoughtSignature(value: Uint8Array | string): Part;

  getDataCase(): Part.DataCase;

  getMetadataCase(): Part.MetadataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Part.AsObject;
  static toObject(includeInstance: boolean, msg: Part): Part.AsObject;
  static serializeBinaryToWriter(message: Part, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Part;
  static deserializeBinaryFromReader(message: Part, reader: jspb.BinaryReader): Part;
}

export namespace Part {
  export type AsObject = {
    text: string,
    inlineData?: Blob.AsObject,
    fileData?: FileData.AsObject,
    functionCall?: FunctionCall.AsObject,
    functionResponse?: FunctionResponse.AsObject,
    executableCode?: ExecutableCode.AsObject,
    codeExecutionResult?: CodeExecutionResult.AsObject,
    videoMetadata?: VideoMetadata.AsObject,
    thought: boolean,
    thoughtSignature: Uint8Array | string,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    TEXT = 1,
    INLINE_DATA = 2,
    FILE_DATA = 3,
    FUNCTION_CALL = 5,
    FUNCTION_RESPONSE = 6,
    EXECUTABLE_CODE = 8,
    CODE_EXECUTION_RESULT = 9,
  }

  export enum MetadataCase { 
    METADATA_NOT_SET = 0,
    VIDEO_METADATA = 4,
  }
}

export class Blob extends jspb.Message {
  getMimeType(): string;
  setMimeType(value: string): Blob;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Blob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blob.AsObject;
  static toObject(includeInstance: boolean, msg: Blob): Blob.AsObject;
  static serializeBinaryToWriter(message: Blob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blob;
  static deserializeBinaryFromReader(message: Blob, reader: jspb.BinaryReader): Blob;
}

export namespace Blob {
  export type AsObject = {
    mimeType: string,
    data: Uint8Array | string,
  }
}

export class FileData extends jspb.Message {
  getMimeType(): string;
  setMimeType(value: string): FileData;

  getFileUri(): string;
  setFileUri(value: string): FileData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileData.AsObject;
  static toObject(includeInstance: boolean, msg: FileData): FileData.AsObject;
  static serializeBinaryToWriter(message: FileData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileData;
  static deserializeBinaryFromReader(message: FileData, reader: jspb.BinaryReader): FileData;
}

export namespace FileData {
  export type AsObject = {
    mimeType: string,
    fileUri: string,
  }
}

export class VideoMetadata extends jspb.Message {
  getStartOffset(): google_protobuf_duration_pb.Duration | undefined;
  setStartOffset(value?: google_protobuf_duration_pb.Duration): VideoMetadata;
  hasStartOffset(): boolean;
  clearStartOffset(): VideoMetadata;

  getEndOffset(): google_protobuf_duration_pb.Duration | undefined;
  setEndOffset(value?: google_protobuf_duration_pb.Duration): VideoMetadata;
  hasEndOffset(): boolean;
  clearEndOffset(): VideoMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: VideoMetadata): VideoMetadata.AsObject;
  static serializeBinaryToWriter(message: VideoMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoMetadata;
  static deserializeBinaryFromReader(message: VideoMetadata, reader: jspb.BinaryReader): VideoMetadata;
}

export namespace VideoMetadata {
  export type AsObject = {
    startOffset?: google_protobuf_duration_pb.Duration.AsObject,
    endOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class FunctionCall extends jspb.Message {
  getName(): string;
  setName(value: string): FunctionCall;

  getArgs(): google_protobuf_struct_pb.Struct | undefined;
  setArgs(value?: google_protobuf_struct_pb.Struct): FunctionCall;
  hasArgs(): boolean;
  clearArgs(): FunctionCall;

  getId(): string;
  setId(value: string): FunctionCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionCall.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionCall): FunctionCall.AsObject;
  static serializeBinaryToWriter(message: FunctionCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionCall;
  static deserializeBinaryFromReader(message: FunctionCall, reader: jspb.BinaryReader): FunctionCall;
}

export namespace FunctionCall {
  export type AsObject = {
    name: string,
    args?: google_protobuf_struct_pb.Struct.AsObject,
    id: string,
  }
}

export class FunctionResponse extends jspb.Message {
  getName(): string;
  setName(value: string): FunctionResponse;

  getResponse(): google_protobuf_struct_pb.Struct | undefined;
  setResponse(value?: google_protobuf_struct_pb.Struct): FunctionResponse;
  hasResponse(): boolean;
  clearResponse(): FunctionResponse;

  getId(): string;
  setId(value: string): FunctionResponse;

  getPartsList(): Array<FunctionResponsePart>;
  setPartsList(value: Array<FunctionResponsePart>): FunctionResponse;
  clearPartsList(): FunctionResponse;
  addParts(value?: FunctionResponsePart, index?: number): FunctionResponsePart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionResponse): FunctionResponse.AsObject;
  static serializeBinaryToWriter(message: FunctionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionResponse;
  static deserializeBinaryFromReader(message: FunctionResponse, reader: jspb.BinaryReader): FunctionResponse;
}

export namespace FunctionResponse {
  export type AsObject = {
    name: string,
    response?: google_protobuf_struct_pb.Struct.AsObject,
    id: string,
    partsList: Array<FunctionResponsePart.AsObject>,
  }
}

export class FunctionResponsePart extends jspb.Message {
  getInlineData(): FunctionResponseBlob | undefined;
  setInlineData(value?: FunctionResponseBlob): FunctionResponsePart;
  hasInlineData(): boolean;
  clearInlineData(): FunctionResponsePart;

  getFileData(): FunctionResponseFileData | undefined;
  setFileData(value?: FunctionResponseFileData): FunctionResponsePart;
  hasFileData(): boolean;
  clearFileData(): FunctionResponsePart;

  getDataCase(): FunctionResponsePart.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionResponsePart.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionResponsePart): FunctionResponsePart.AsObject;
  static serializeBinaryToWriter(message: FunctionResponsePart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionResponsePart;
  static deserializeBinaryFromReader(message: FunctionResponsePart, reader: jspb.BinaryReader): FunctionResponsePart;
}

export namespace FunctionResponsePart {
  export type AsObject = {
    inlineData?: FunctionResponseBlob.AsObject,
    fileData?: FunctionResponseFileData.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    INLINE_DATA = 1,
    FILE_DATA = 2,
  }
}

export class FunctionResponseBlob extends jspb.Message {
  getMimeType(): string;
  setMimeType(value: string): FunctionResponseBlob;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): FunctionResponseBlob;

  getDisplayName(): string;
  setDisplayName(value: string): FunctionResponseBlob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionResponseBlob.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionResponseBlob): FunctionResponseBlob.AsObject;
  static serializeBinaryToWriter(message: FunctionResponseBlob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionResponseBlob;
  static deserializeBinaryFromReader(message: FunctionResponseBlob, reader: jspb.BinaryReader): FunctionResponseBlob;
}

export namespace FunctionResponseBlob {
  export type AsObject = {
    mimeType: string,
    data: Uint8Array | string,
    displayName: string,
  }
}

export class FunctionResponseFileData extends jspb.Message {
  getMimeType(): string;
  setMimeType(value: string): FunctionResponseFileData;

  getFileUri(): string;
  setFileUri(value: string): FunctionResponseFileData;

  getDisplayName(): string;
  setDisplayName(value: string): FunctionResponseFileData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionResponseFileData.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionResponseFileData): FunctionResponseFileData.AsObject;
  static serializeBinaryToWriter(message: FunctionResponseFileData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionResponseFileData;
  static deserializeBinaryFromReader(message: FunctionResponseFileData, reader: jspb.BinaryReader): FunctionResponseFileData;
}

export namespace FunctionResponseFileData {
  export type AsObject = {
    mimeType: string,
    fileUri: string,
    displayName: string,
  }
}

export class ExecutableCode extends jspb.Message {
  getLanguage(): ExecutableCode.Language;
  setLanguage(value: ExecutableCode.Language): ExecutableCode;

  getCode(): string;
  setCode(value: string): ExecutableCode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutableCode.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutableCode): ExecutableCode.AsObject;
  static serializeBinaryToWriter(message: ExecutableCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutableCode;
  static deserializeBinaryFromReader(message: ExecutableCode, reader: jspb.BinaryReader): ExecutableCode;
}

export namespace ExecutableCode {
  export type AsObject = {
    language: ExecutableCode.Language,
    code: string,
  }

  export enum Language { 
    LANGUAGE_UNSPECIFIED = 0,
    PYTHON = 1,
  }
}

export class CodeExecutionResult extends jspb.Message {
  getOutcome(): CodeExecutionResult.Outcome;
  setOutcome(value: CodeExecutionResult.Outcome): CodeExecutionResult;

  getOutput(): string;
  setOutput(value: string): CodeExecutionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeExecutionResult.AsObject;
  static toObject(includeInstance: boolean, msg: CodeExecutionResult): CodeExecutionResult.AsObject;
  static serializeBinaryToWriter(message: CodeExecutionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeExecutionResult;
  static deserializeBinaryFromReader(message: CodeExecutionResult, reader: jspb.BinaryReader): CodeExecutionResult;
}

export namespace CodeExecutionResult {
  export type AsObject = {
    outcome: CodeExecutionResult.Outcome,
    output: string,
  }

  export enum Outcome { 
    OUTCOME_UNSPECIFIED = 0,
    OUTCOME_OK = 1,
    OUTCOME_FAILED = 2,
    OUTCOME_DEADLINE_EXCEEDED = 3,
  }
}

export class GroundingMetadata extends jspb.Message {
  getWebSearchQueriesList(): Array<string>;
  setWebSearchQueriesList(value: Array<string>): GroundingMetadata;
  clearWebSearchQueriesList(): GroundingMetadata;
  addWebSearchQueries(value: string, index?: number): GroundingMetadata;

  getRetrievalQueriesList(): Array<string>;
  setRetrievalQueriesList(value: Array<string>): GroundingMetadata;
  clearRetrievalQueriesList(): GroundingMetadata;
  addRetrievalQueries(value: string, index?: number): GroundingMetadata;

  getSearchEntryPoint(): SearchEntryPoint | undefined;
  setSearchEntryPoint(value?: SearchEntryPoint): GroundingMetadata;
  hasSearchEntryPoint(): boolean;
  clearSearchEntryPoint(): GroundingMetadata;

  getGroundingChunksList(): Array<GroundingChunk>;
  setGroundingChunksList(value: Array<GroundingChunk>): GroundingMetadata;
  clearGroundingChunksList(): GroundingMetadata;
  addGroundingChunks(value?: GroundingChunk, index?: number): GroundingChunk;

  getGroundingSupportsList(): Array<GroundingSupport>;
  setGroundingSupportsList(value: Array<GroundingSupport>): GroundingMetadata;
  clearGroundingSupportsList(): GroundingMetadata;
  addGroundingSupports(value?: GroundingSupport, index?: number): GroundingSupport;

  getRetrievalMetadata(): RetrievalMetadata | undefined;
  setRetrievalMetadata(value?: RetrievalMetadata): GroundingMetadata;
  hasRetrievalMetadata(): boolean;
  clearRetrievalMetadata(): GroundingMetadata;

  getGoogleMapsWidgetContextToken(): string;
  setGoogleMapsWidgetContextToken(value: string): GroundingMetadata;

  getSourceFlaggingUrisList(): Array<GroundingMetadata.SourceFlaggingUri>;
  setSourceFlaggingUrisList(value: Array<GroundingMetadata.SourceFlaggingUri>): GroundingMetadata;
  clearSourceFlaggingUrisList(): GroundingMetadata;
  addSourceFlaggingUris(value?: GroundingMetadata.SourceFlaggingUri, index?: number): GroundingMetadata.SourceFlaggingUri;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroundingMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: GroundingMetadata): GroundingMetadata.AsObject;
  static serializeBinaryToWriter(message: GroundingMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroundingMetadata;
  static deserializeBinaryFromReader(message: GroundingMetadata, reader: jspb.BinaryReader): GroundingMetadata;
}

export namespace GroundingMetadata {
  export type AsObject = {
    webSearchQueriesList: Array<string>,
    retrievalQueriesList: Array<string>,
    searchEntryPoint?: SearchEntryPoint.AsObject,
    groundingChunksList: Array<GroundingChunk.AsObject>,
    groundingSupportsList: Array<GroundingSupport.AsObject>,
    retrievalMetadata?: RetrievalMetadata.AsObject,
    googleMapsWidgetContextToken: string,
    sourceFlaggingUrisList: Array<GroundingMetadata.SourceFlaggingUri.AsObject>,
  }

  export class SourceFlaggingUri extends jspb.Message {
    getSourceId(): string;
    setSourceId(value: string): SourceFlaggingUri;

    getFlagContentUri(): string;
    setFlagContentUri(value: string): SourceFlaggingUri;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceFlaggingUri.AsObject;
    static toObject(includeInstance: boolean, msg: SourceFlaggingUri): SourceFlaggingUri.AsObject;
    static serializeBinaryToWriter(message: SourceFlaggingUri, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceFlaggingUri;
    static deserializeBinaryFromReader(message: SourceFlaggingUri, reader: jspb.BinaryReader): SourceFlaggingUri;
  }

  export namespace SourceFlaggingUri {
    export type AsObject = {
      sourceId: string,
      flagContentUri: string,
    }
  }

}

export class GroundingChunk extends jspb.Message {
  getWeb(): GroundingChunk.Web | undefined;
  setWeb(value?: GroundingChunk.Web): GroundingChunk;
  hasWeb(): boolean;
  clearWeb(): GroundingChunk;

  getRetrievedContext(): GroundingChunk.RetrievedContext | undefined;
  setRetrievedContext(value?: GroundingChunk.RetrievedContext): GroundingChunk;
  hasRetrievedContext(): boolean;
  clearRetrievedContext(): GroundingChunk;

  getMaps(): GroundingChunk.Maps | undefined;
  setMaps(value?: GroundingChunk.Maps): GroundingChunk;
  hasMaps(): boolean;
  clearMaps(): GroundingChunk;

  getChunkTypeCase(): GroundingChunk.ChunkTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroundingChunk.AsObject;
  static toObject(includeInstance: boolean, msg: GroundingChunk): GroundingChunk.AsObject;
  static serializeBinaryToWriter(message: GroundingChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroundingChunk;
  static deserializeBinaryFromReader(message: GroundingChunk, reader: jspb.BinaryReader): GroundingChunk;
}

export namespace GroundingChunk {
  export type AsObject = {
    web?: GroundingChunk.Web.AsObject,
    retrievedContext?: GroundingChunk.RetrievedContext.AsObject,
    maps?: GroundingChunk.Maps.AsObject,
  }

  export class Web extends jspb.Message {
    getDomain(): string;
    setDomain(value: string): Web;

    getUri(): string;
    setUri(value: string): Web;

    getTitle(): string;
    setTitle(value: string): Web;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Web.AsObject;
    static toObject(includeInstance: boolean, msg: Web): Web.AsObject;
    static serializeBinaryToWriter(message: Web, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Web;
    static deserializeBinaryFromReader(message: Web, reader: jspb.BinaryReader): Web;
  }

  export namespace Web {
    export type AsObject = {
      domain: string,
      uri: string,
      title: string,
    }
  }


  export class RetrievedContext extends jspb.Message {
    getUri(): string;
    setUri(value: string): RetrievedContext;

    getTitle(): string;
    setTitle(value: string): RetrievedContext;

    getText(): string;
    setText(value: string): RetrievedContext;

    getRagChunk(): RagChunk | undefined;
    setRagChunk(value?: RagChunk): RetrievedContext;
    hasRagChunk(): boolean;
    clearRagChunk(): RetrievedContext;

    getDocumentName(): string;
    setDocumentName(value: string): RetrievedContext;

    getContextDetailsCase(): RetrievedContext.ContextDetailsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetrievedContext.AsObject;
    static toObject(includeInstance: boolean, msg: RetrievedContext): RetrievedContext.AsObject;
    static serializeBinaryToWriter(message: RetrievedContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetrievedContext;
    static deserializeBinaryFromReader(message: RetrievedContext, reader: jspb.BinaryReader): RetrievedContext;
  }

  export namespace RetrievedContext {
    export type AsObject = {
      uri: string,
      title: string,
      text: string,
      ragChunk?: RagChunk.AsObject,
      documentName: string,
    }

    export enum ContextDetailsCase { 
      CONTEXT_DETAILS_NOT_SET = 0,
      RAG_CHUNK = 4,
    }
  }


  export class Maps extends jspb.Message {
    getUri(): string;
    setUri(value: string): Maps;

    getTitle(): string;
    setTitle(value: string): Maps;

    getText(): string;
    setText(value: string): Maps;

    getPlaceId(): string;
    setPlaceId(value: string): Maps;

    getPlaceAnswerSources(): GroundingChunk.Maps.PlaceAnswerSources | undefined;
    setPlaceAnswerSources(value?: GroundingChunk.Maps.PlaceAnswerSources): Maps;
    hasPlaceAnswerSources(): boolean;
    clearPlaceAnswerSources(): Maps;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Maps.AsObject;
    static toObject(includeInstance: boolean, msg: Maps): Maps.AsObject;
    static serializeBinaryToWriter(message: Maps, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Maps;
    static deserializeBinaryFromReader(message: Maps, reader: jspb.BinaryReader): Maps;
  }

  export namespace Maps {
    export type AsObject = {
      uri: string,
      title: string,
      text: string,
      placeId: string,
      placeAnswerSources?: GroundingChunk.Maps.PlaceAnswerSources.AsObject,
    }

    export class PlaceAnswerSources extends jspb.Message {
      getReviewSnippetsList(): Array<GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet>;
      setReviewSnippetsList(value: Array<GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet>): PlaceAnswerSources;
      clearReviewSnippetsList(): PlaceAnswerSources;
      addReviewSnippets(value?: GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet, index?: number): GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet;

      getFlagContentUri(): string;
      setFlagContentUri(value: string): PlaceAnswerSources;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PlaceAnswerSources.AsObject;
      static toObject(includeInstance: boolean, msg: PlaceAnswerSources): PlaceAnswerSources.AsObject;
      static serializeBinaryToWriter(message: PlaceAnswerSources, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PlaceAnswerSources;
      static deserializeBinaryFromReader(message: PlaceAnswerSources, reader: jspb.BinaryReader): PlaceAnswerSources;
    }

    export namespace PlaceAnswerSources {
      export type AsObject = {
        reviewSnippetsList: Array<GroundingChunk.Maps.PlaceAnswerSources.ReviewSnippet.AsObject>,
        flagContentUri: string,
      }

      export class ReviewSnippet extends jspb.Message {
        getReviewId(): string;
        setReviewId(value: string): ReviewSnippet;

        getGoogleMapsUri(): string;
        setGoogleMapsUri(value: string): ReviewSnippet;

        getTitle(): string;
        setTitle(value: string): ReviewSnippet;

        getReview(): string;
        setReview(value: string): ReviewSnippet;

        getFlagContentUri(): string;
        setFlagContentUri(value: string): ReviewSnippet;

        getRelativePublishTimeDescription(): string;
        setRelativePublishTimeDescription(value: string): ReviewSnippet;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ReviewSnippet.AsObject;
        static toObject(includeInstance: boolean, msg: ReviewSnippet): ReviewSnippet.AsObject;
        static serializeBinaryToWriter(message: ReviewSnippet, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ReviewSnippet;
        static deserializeBinaryFromReader(message: ReviewSnippet, reader: jspb.BinaryReader): ReviewSnippet;
      }

      export namespace ReviewSnippet {
        export type AsObject = {
          reviewId: string,
          googleMapsUri: string,
          title: string,
          review: string,
          flagContentUri: string,
          relativePublishTimeDescription: string,
        }
      }

    }

  }


  export enum ChunkTypeCase { 
    CHUNK_TYPE_NOT_SET = 0,
    WEB = 1,
    RETRIEVED_CONTEXT = 2,
    MAPS = 3,
  }
}

export class GroundingSupport extends jspb.Message {
  getSegment(): Segment | undefined;
  setSegment(value?: Segment): GroundingSupport;
  hasSegment(): boolean;
  clearSegment(): GroundingSupport;

  getGroundingChunkIndicesList(): Array<number>;
  setGroundingChunkIndicesList(value: Array<number>): GroundingSupport;
  clearGroundingChunkIndicesList(): GroundingSupport;
  addGroundingChunkIndices(value: number, index?: number): GroundingSupport;

  getConfidenceScoresList(): Array<number>;
  setConfidenceScoresList(value: Array<number>): GroundingSupport;
  clearConfidenceScoresList(): GroundingSupport;
  addConfidenceScores(value: number, index?: number): GroundingSupport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroundingSupport.AsObject;
  static toObject(includeInstance: boolean, msg: GroundingSupport): GroundingSupport.AsObject;
  static serializeBinaryToWriter(message: GroundingSupport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroundingSupport;
  static deserializeBinaryFromReader(message: GroundingSupport, reader: jspb.BinaryReader): GroundingSupport;
}

export namespace GroundingSupport {
  export type AsObject = {
    segment?: Segment.AsObject,
    groundingChunkIndicesList: Array<number>,
    confidenceScoresList: Array<number>,
  }
}

export class Segment extends jspb.Message {
  getPartIndex(): number;
  setPartIndex(value: number): Segment;

  getStartIndex(): number;
  setStartIndex(value: number): Segment;

  getEndIndex(): number;
  setEndIndex(value: number): Segment;

  getText(): string;
  setText(value: string): Segment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Segment.AsObject;
  static toObject(includeInstance: boolean, msg: Segment): Segment.AsObject;
  static serializeBinaryToWriter(message: Segment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Segment;
  static deserializeBinaryFromReader(message: Segment, reader: jspb.BinaryReader): Segment;
}

export namespace Segment {
  export type AsObject = {
    partIndex: number,
    startIndex: number,
    endIndex: number,
    text: string,
  }
}

export class SearchEntryPoint extends jspb.Message {
  getRenderedContent(): string;
  setRenderedContent(value: string): SearchEntryPoint;

  getSdkBlob(): Uint8Array | string;
  getSdkBlob_asU8(): Uint8Array;
  getSdkBlob_asB64(): string;
  setSdkBlob(value: Uint8Array | string): SearchEntryPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchEntryPoint.AsObject;
  static toObject(includeInstance: boolean, msg: SearchEntryPoint): SearchEntryPoint.AsObject;
  static serializeBinaryToWriter(message: SearchEntryPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchEntryPoint;
  static deserializeBinaryFromReader(message: SearchEntryPoint, reader: jspb.BinaryReader): SearchEntryPoint;
}

export namespace SearchEntryPoint {
  export type AsObject = {
    renderedContent: string,
    sdkBlob: Uint8Array | string,
  }
}

export class RetrievalMetadata extends jspb.Message {
  getGoogleSearchDynamicRetrievalScore(): number;
  setGoogleSearchDynamicRetrievalScore(value: number): RetrievalMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievalMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievalMetadata): RetrievalMetadata.AsObject;
  static serializeBinaryToWriter(message: RetrievalMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievalMetadata;
  static deserializeBinaryFromReader(message: RetrievalMetadata, reader: jspb.BinaryReader): RetrievalMetadata;
}

export namespace RetrievalMetadata {
  export type AsObject = {
    googleSearchDynamicRetrievalScore: number,
  }
}

export class RagChunk extends jspb.Message {
  getText(): string;
  setText(value: string): RagChunk;

  getPageSpan(): RagChunk.PageSpan | undefined;
  setPageSpan(value?: RagChunk.PageSpan): RagChunk;
  hasPageSpan(): boolean;
  clearPageSpan(): RagChunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RagChunk): RagChunk.AsObject;
  static serializeBinaryToWriter(message: RagChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChunk;
  static deserializeBinaryFromReader(message: RagChunk, reader: jspb.BinaryReader): RagChunk;
}

export namespace RagChunk {
  export type AsObject = {
    text: string,
    pageSpan?: RagChunk.PageSpan.AsObject,
  }

  export class PageSpan extends jspb.Message {
    getFirstPage(): number;
    setFirstPage(value: number): PageSpan;

    getLastPage(): number;
    setLastPage(value: number): PageSpan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageSpan.AsObject;
    static toObject(includeInstance: boolean, msg: PageSpan): PageSpan.AsObject;
    static serializeBinaryToWriter(message: PageSpan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageSpan;
    static deserializeBinaryFromReader(message: PageSpan, reader: jspb.BinaryReader): PageSpan;
  }

  export namespace PageSpan {
    export type AsObject = {
      firstPage: number,
      lastPage: number,
    }
  }

}

export class UsageMetadata extends jspb.Message {
  getCacheTokensDetailsList(): Array<ModalityTokenCount>;
  setCacheTokensDetailsList(value: Array<ModalityTokenCount>): UsageMetadata;
  clearCacheTokensDetailsList(): UsageMetadata;
  addCacheTokensDetails(value?: ModalityTokenCount, index?: number): ModalityTokenCount;

  getCachedContentTokenCount(): number;
  setCachedContentTokenCount(value: number): UsageMetadata;

  getCandidatesTokenCount(): number;
  setCandidatesTokenCount(value: number): UsageMetadata;

  getCandidatesTokensDetailsList(): Array<ModalityTokenCount>;
  setCandidatesTokensDetailsList(value: Array<ModalityTokenCount>): UsageMetadata;
  clearCandidatesTokensDetailsList(): UsageMetadata;
  addCandidatesTokensDetails(value?: ModalityTokenCount, index?: number): ModalityTokenCount;

  getPromptTokenCount(): number;
  setPromptTokenCount(value: number): UsageMetadata;

  getPromptTokensDetailsList(): Array<ModalityTokenCount>;
  setPromptTokensDetailsList(value: Array<ModalityTokenCount>): UsageMetadata;
  clearPromptTokensDetailsList(): UsageMetadata;
  addPromptTokensDetails(value?: ModalityTokenCount, index?: number): ModalityTokenCount;

  getThoughtsTokenCount(): number;
  setThoughtsTokenCount(value: number): UsageMetadata;

  getToolUsePromptTokenCount(): number;
  setToolUsePromptTokenCount(value: number): UsageMetadata;

  getToolUsePromptTokensDetailsList(): Array<ModalityTokenCount>;
  setToolUsePromptTokensDetailsList(value: Array<ModalityTokenCount>): UsageMetadata;
  clearToolUsePromptTokensDetailsList(): UsageMetadata;
  addToolUsePromptTokensDetails(value?: ModalityTokenCount, index?: number): ModalityTokenCount;

  getTotalTokenCount(): number;
  setTotalTokenCount(value: number): UsageMetadata;

  getTrafficType(): TrafficType;
  setTrafficType(value: TrafficType): UsageMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UsageMetadata): UsageMetadata.AsObject;
  static serializeBinaryToWriter(message: UsageMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageMetadata;
  static deserializeBinaryFromReader(message: UsageMetadata, reader: jspb.BinaryReader): UsageMetadata;
}

export namespace UsageMetadata {
  export type AsObject = {
    cacheTokensDetailsList: Array<ModalityTokenCount.AsObject>,
    cachedContentTokenCount: number,
    candidatesTokenCount: number,
    candidatesTokensDetailsList: Array<ModalityTokenCount.AsObject>,
    promptTokenCount: number,
    promptTokensDetailsList: Array<ModalityTokenCount.AsObject>,
    thoughtsTokenCount: number,
    toolUsePromptTokenCount: number,
    toolUsePromptTokensDetailsList: Array<ModalityTokenCount.AsObject>,
    totalTokenCount: number,
    trafficType: TrafficType,
  }
}

export class ModalityTokenCount extends jspb.Message {
  getModality(): MediaModality;
  setModality(value: MediaModality): ModalityTokenCount;

  getTokenCount(): number;
  setTokenCount(value: number): ModalityTokenCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModalityTokenCount.AsObject;
  static toObject(includeInstance: boolean, msg: ModalityTokenCount): ModalityTokenCount.AsObject;
  static serializeBinaryToWriter(message: ModalityTokenCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModalityTokenCount;
  static deserializeBinaryFromReader(message: ModalityTokenCount, reader: jspb.BinaryReader): ModalityTokenCount;
}

export namespace ModalityTokenCount {
  export type AsObject = {
    modality: MediaModality,
    tokenCount: number,
  }
}

export class CitationMetadata extends jspb.Message {
  getCitationsList(): Array<CitationMetadata.Citation>;
  setCitationsList(value: Array<CitationMetadata.Citation>): CitationMetadata;
  clearCitationsList(): CitationMetadata;
  addCitations(value?: CitationMetadata.Citation, index?: number): CitationMetadata.Citation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CitationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CitationMetadata): CitationMetadata.AsObject;
  static serializeBinaryToWriter(message: CitationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CitationMetadata;
  static deserializeBinaryFromReader(message: CitationMetadata, reader: jspb.BinaryReader): CitationMetadata;
}

export namespace CitationMetadata {
  export type AsObject = {
    citationsList: Array<CitationMetadata.Citation.AsObject>,
  }

  export class Citation extends jspb.Message {
    getEndIndex(): number;
    setEndIndex(value: number): Citation;

    getLicense(): string;
    setLicense(value: string): Citation;

    getPublicationDate(): google_type_date_pb.Date | undefined;
    setPublicationDate(value?: google_type_date_pb.Date): Citation;
    hasPublicationDate(): boolean;
    clearPublicationDate(): Citation;

    getStartIndex(): number;
    setStartIndex(value: number): Citation;

    getTitle(): string;
    setTitle(value: string): Citation;

    getUri(): string;
    setUri(value: string): Citation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Citation.AsObject;
    static toObject(includeInstance: boolean, msg: Citation): Citation.AsObject;
    static serializeBinaryToWriter(message: Citation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Citation;
    static deserializeBinaryFromReader(message: Citation, reader: jspb.BinaryReader): Citation;
  }

  export namespace Citation {
    export type AsObject = {
      endIndex: number,
      license: string,
      publicationDate?: google_type_date_pb.Date.AsObject,
      startIndex: number,
      title: string,
      uri: string,
    }
  }

}

export class ToolConfirmation extends jspb.Message {
  getHint(): string;
  setHint(value: string): ToolConfirmation;

  getConfirmed(): boolean;
  setConfirmed(value: boolean): ToolConfirmation;

  getPayload(): google_protobuf_struct_pb.Value | undefined;
  setPayload(value?: google_protobuf_struct_pb.Value): ToolConfirmation;
  hasPayload(): boolean;
  clearPayload(): ToolConfirmation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolConfirmation.AsObject;
  static toObject(includeInstance: boolean, msg: ToolConfirmation): ToolConfirmation.AsObject;
  static serializeBinaryToWriter(message: ToolConfirmation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolConfirmation;
  static deserializeBinaryFromReader(message: ToolConfirmation, reader: jspb.BinaryReader): ToolConfirmation;
}

export namespace ToolConfirmation {
  export type AsObject = {
    hint: string,
    confirmed: boolean,
    payload?: google_protobuf_struct_pb.Value.AsObject,
  }
}

export class LogprobsResultCandidate extends jspb.Message {
  getLogProbability(): number;
  setLogProbability(value: number): LogprobsResultCandidate;

  getToken(): string;
  setToken(value: string): LogprobsResultCandidate;

  getTokenId(): number;
  setTokenId(value: number): LogprobsResultCandidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogprobsResultCandidate.AsObject;
  static toObject(includeInstance: boolean, msg: LogprobsResultCandidate): LogprobsResultCandidate.AsObject;
  static serializeBinaryToWriter(message: LogprobsResultCandidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogprobsResultCandidate;
  static deserializeBinaryFromReader(message: LogprobsResultCandidate, reader: jspb.BinaryReader): LogprobsResultCandidate;
}

export namespace LogprobsResultCandidate {
  export type AsObject = {
    logProbability: number,
    token: string,
    tokenId: number,
  }
}

export class LogprobsResultTopCandidates extends jspb.Message {
  getCandidatesList(): Array<LogprobsResultCandidate>;
  setCandidatesList(value: Array<LogprobsResultCandidate>): LogprobsResultTopCandidates;
  clearCandidatesList(): LogprobsResultTopCandidates;
  addCandidates(value?: LogprobsResultCandidate, index?: number): LogprobsResultCandidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogprobsResultTopCandidates.AsObject;
  static toObject(includeInstance: boolean, msg: LogprobsResultTopCandidates): LogprobsResultTopCandidates.AsObject;
  static serializeBinaryToWriter(message: LogprobsResultTopCandidates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogprobsResultTopCandidates;
  static deserializeBinaryFromReader(message: LogprobsResultTopCandidates, reader: jspb.BinaryReader): LogprobsResultTopCandidates;
}

export namespace LogprobsResultTopCandidates {
  export type AsObject = {
    candidatesList: Array<LogprobsResultCandidate.AsObject>,
  }
}

export class LogprobsResult extends jspb.Message {
  getChosenCandidatesList(): Array<LogprobsResultCandidate>;
  setChosenCandidatesList(value: Array<LogprobsResultCandidate>): LogprobsResult;
  clearChosenCandidatesList(): LogprobsResult;
  addChosenCandidates(value?: LogprobsResultCandidate, index?: number): LogprobsResultCandidate;

  getTopCandidatesList(): Array<LogprobsResultTopCandidates>;
  setTopCandidatesList(value: Array<LogprobsResultTopCandidates>): LogprobsResult;
  clearTopCandidatesList(): LogprobsResult;
  addTopCandidates(value?: LogprobsResultTopCandidates, index?: number): LogprobsResultTopCandidates;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogprobsResult.AsObject;
  static toObject(includeInstance: boolean, msg: LogprobsResult): LogprobsResult.AsObject;
  static serializeBinaryToWriter(message: LogprobsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogprobsResult;
  static deserializeBinaryFromReader(message: LogprobsResult, reader: jspb.BinaryReader): LogprobsResult;
}

export namespace LogprobsResult {
  export type AsObject = {
    chosenCandidatesList: Array<LogprobsResultCandidate.AsObject>,
    topCandidatesList: Array<LogprobsResultTopCandidates.AsObject>,
  }
}

export enum MediaModality { 
  MEDIA_MODALITY_UNSPECIFIED = 0,
  MEDIA_MODALITY_TEXT = 1,
  MEDIA_MODALITY_IMAGE = 2,
  MEDIA_MODALITY_VIDEO = 3,
  MEDIA_MODALITY_AUDIO = 4,
  MEDIA_MODALITY_DOCUMENT = 5,
}
export enum TrafficType { 
  TRAFFIC_TYPE_UNSPECIFIED = 0,
  TRAFFIC_TYPE_ON_DEMAND = 1,
  TRAFFIC_TYPE_PROVISIONED_THROUGHPUT = 2,
}
export enum FinishReason { 
  FINISH_REASON_UNSPECIFIED = 0,
  FINISH_REASON_STOP = 1,
  FINISH_REASON_MAX_TOKENS = 2,
  FINISH_REASON_SAFETY = 3,
  FINISH_REASON_RECITATION = 4,
  FINISH_REASON_LANGUAGE = 5,
  FINISH_REASON_OTHER = 6,
  FINISH_REASON_BLOCKLIST = 7,
  FINISH_REASON_PROHIBITED_CONTENT = 8,
  FINISH_REASON_SPII = 9,
  FINISH_REASON_MALFORMED_FUNCTION_CALL = 10,
  FINISH_REASON_IMAGE_SAFETY = 11,
  FINISH_REASON_UNEXPECTED_TOOL_CALL = 12,
  FINISH_REASON_IMAGE_PROHIBITED_CONTENT = 13,
  FINISH_REASON_NO_IMAGE = 14,
  FINISH_REASON_IMAGE_RECITATION = 15,
  FINISH_REASON_IMAGE_OTHER = 16,
}
