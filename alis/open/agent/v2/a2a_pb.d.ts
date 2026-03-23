import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_client_pb from '../../../../google/api/client_pb'; // proto import: "google/api/client.proto"
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class SendMessageConfiguration extends jspb.Message {
  getAcceptedOutputModesList(): Array<string>;
  setAcceptedOutputModesList(value: Array<string>): SendMessageConfiguration;
  clearAcceptedOutputModesList(): SendMessageConfiguration;
  addAcceptedOutputModes(value: string, index?: number): SendMessageConfiguration;

  getPushNotification(): PushNotificationConfig | undefined;
  setPushNotification(value?: PushNotificationConfig): SendMessageConfiguration;
  hasPushNotification(): boolean;
  clearPushNotification(): SendMessageConfiguration;

  getHistoryLength(): number;
  setHistoryLength(value: number): SendMessageConfiguration;

  getBlocking(): boolean;
  setBlocking(value: boolean): SendMessageConfiguration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageConfiguration): SendMessageConfiguration.AsObject;
  static serializeBinaryToWriter(message: SendMessageConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageConfiguration;
  static deserializeBinaryFromReader(message: SendMessageConfiguration, reader: jspb.BinaryReader): SendMessageConfiguration;
}

export namespace SendMessageConfiguration {
  export type AsObject = {
    acceptedOutputModesList: Array<string>,
    pushNotification?: PushNotificationConfig.AsObject,
    historyLength: number,
    blocking: boolean,
  }
}

export class Task extends jspb.Message {
  getId(): string;
  setId(value: string): Task;

  getContextId(): string;
  setContextId(value: string): Task;

  getStatus(): TaskStatus | undefined;
  setStatus(value?: TaskStatus): Task;
  hasStatus(): boolean;
  clearStatus(): Task;

  getArtifactsList(): Array<Artifact>;
  setArtifactsList(value: Array<Artifact>): Task;
  clearArtifactsList(): Task;
  addArtifacts(value?: Artifact, index?: number): Artifact;

  getHistoryList(): Array<Message>;
  setHistoryList(value: Array<Message>): Task;
  clearHistoryList(): Task;
  addHistory(value?: Message, index?: number): Message;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): Task;
  hasMetadata(): boolean;
  clearMetadata(): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    id: string,
    contextId: string,
    status?: TaskStatus.AsObject,
    artifactsList: Array<Artifact.AsObject>,
    historyList: Array<Message.AsObject>,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class TaskStatus extends jspb.Message {
  getState(): TaskState;
  setState(value: TaskState): TaskStatus;

  getUpdate(): Message | undefined;
  setUpdate(value?: Message): TaskStatus;
  hasUpdate(): boolean;
  clearUpdate(): TaskStatus;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TaskStatus;
  hasTimestamp(): boolean;
  clearTimestamp(): TaskStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatus.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatus): TaskStatus.AsObject;
  static serializeBinaryToWriter(message: TaskStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatus;
  static deserializeBinaryFromReader(message: TaskStatus, reader: jspb.BinaryReader): TaskStatus;
}

export namespace TaskStatus {
  export type AsObject = {
    state: TaskState,
    update?: Message.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Part extends jspb.Message {
  getText(): string;
  setText(value: string): Part;

  getFile(): FilePart | undefined;
  setFile(value?: FilePart): Part;
  hasFile(): boolean;
  clearFile(): Part;

  getData(): DataPart | undefined;
  setData(value?: DataPart): Part;
  hasData(): boolean;
  clearData(): Part;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): Part;
  hasMetadata(): boolean;
  clearMetadata(): Part;

  getPartCase(): Part.PartCase;

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
    file?: FilePart.AsObject,
    data?: DataPart.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum PartCase { 
    PART_NOT_SET = 0,
    TEXT = 1,
    FILE = 2,
    DATA = 3,
  }
}

export class FilePart extends jspb.Message {
  getFileWithUri(): string;
  setFileWithUri(value: string): FilePart;

  getFileWithBytes(): Uint8Array | string;
  getFileWithBytes_asU8(): Uint8Array;
  getFileWithBytes_asB64(): string;
  setFileWithBytes(value: Uint8Array | string): FilePart;

  getMimeType(): string;
  setMimeType(value: string): FilePart;

  getName(): string;
  setName(value: string): FilePart;

  getFileCase(): FilePart.FileCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilePart.AsObject;
  static toObject(includeInstance: boolean, msg: FilePart): FilePart.AsObject;
  static serializeBinaryToWriter(message: FilePart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilePart;
  static deserializeBinaryFromReader(message: FilePart, reader: jspb.BinaryReader): FilePart;
}

export namespace FilePart {
  export type AsObject = {
    fileWithUri: string,
    fileWithBytes: Uint8Array | string,
    mimeType: string,
    name: string,
  }

  export enum FileCase { 
    FILE_NOT_SET = 0,
    FILE_WITH_URI = 1,
    FILE_WITH_BYTES = 2,
  }
}

export class DataPart extends jspb.Message {
  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): DataPart;
  hasData(): boolean;
  clearData(): DataPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPart.AsObject;
  static toObject(includeInstance: boolean, msg: DataPart): DataPart.AsObject;
  static serializeBinaryToWriter(message: DataPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPart;
  static deserializeBinaryFromReader(message: DataPart, reader: jspb.BinaryReader): DataPart;
}

export namespace DataPart {
  export type AsObject = {
    data?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Message extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): Message;

  getContextId(): string;
  setContextId(value: string): Message;

  getTaskId(): string;
  setTaskId(value: string): Message;

  getRole(): Role;
  setRole(value: Role): Message;

  getPartsList(): Array<Part>;
  setPartsList(value: Array<Part>): Message;
  clearPartsList(): Message;
  addParts(value?: Part, index?: number): Part;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): Message;
  hasMetadata(): boolean;
  clearMetadata(): Message;

  getExtensionsList(): Array<string>;
  setExtensionsList(value: Array<string>): Message;
  clearExtensionsList(): Message;
  addExtensions(value: string, index?: number): Message;

  getReferenceTaskIdsList(): Array<string>;
  setReferenceTaskIdsList(value: Array<string>): Message;
  clearReferenceTaskIdsList(): Message;
  addReferenceTaskIds(value: string, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    messageId: string,
    contextId: string,
    taskId: string,
    role: Role,
    partsList: Array<Part.AsObject>,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    extensionsList: Array<string>,
    referenceTaskIdsList: Array<string>,
  }
}

export class Artifact extends jspb.Message {
  getArtifactId(): string;
  setArtifactId(value: string): Artifact;

  getName(): string;
  setName(value: string): Artifact;

  getDescription(): string;
  setDescription(value: string): Artifact;

  getPartsList(): Array<Part>;
  setPartsList(value: Array<Part>): Artifact;
  clearPartsList(): Artifact;
  addParts(value?: Part, index?: number): Part;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): Artifact;
  hasMetadata(): boolean;
  clearMetadata(): Artifact;

  getExtensionsList(): Array<string>;
  setExtensionsList(value: Array<string>): Artifact;
  clearExtensionsList(): Artifact;
  addExtensions(value: string, index?: number): Artifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifact.AsObject;
  static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
  static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifact;
  static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
  export type AsObject = {
    artifactId: string,
    name: string,
    description: string,
    partsList: Array<Part.AsObject>,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    extensionsList: Array<string>,
  }
}

export class TaskStatusUpdateEvent extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): TaskStatusUpdateEvent;

  getContextId(): string;
  setContextId(value: string): TaskStatusUpdateEvent;

  getStatus(): TaskStatus | undefined;
  setStatus(value?: TaskStatus): TaskStatusUpdateEvent;
  hasStatus(): boolean;
  clearStatus(): TaskStatusUpdateEvent;

  getFinal(): boolean;
  setFinal(value: boolean): TaskStatusUpdateEvent;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): TaskStatusUpdateEvent;
  hasMetadata(): boolean;
  clearMetadata(): TaskStatusUpdateEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusUpdateEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusUpdateEvent): TaskStatusUpdateEvent.AsObject;
  static serializeBinaryToWriter(message: TaskStatusUpdateEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusUpdateEvent;
  static deserializeBinaryFromReader(message: TaskStatusUpdateEvent, reader: jspb.BinaryReader): TaskStatusUpdateEvent;
}

export namespace TaskStatusUpdateEvent {
  export type AsObject = {
    taskId: string,
    contextId: string,
    status?: TaskStatus.AsObject,
    pb_final: boolean,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class TaskArtifactUpdateEvent extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): TaskArtifactUpdateEvent;

  getContextId(): string;
  setContextId(value: string): TaskArtifactUpdateEvent;

  getArtifact(): Artifact | undefined;
  setArtifact(value?: Artifact): TaskArtifactUpdateEvent;
  hasArtifact(): boolean;
  clearArtifact(): TaskArtifactUpdateEvent;

  getAppend(): boolean;
  setAppend(value: boolean): TaskArtifactUpdateEvent;

  getLastChunk(): boolean;
  setLastChunk(value: boolean): TaskArtifactUpdateEvent;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): TaskArtifactUpdateEvent;
  hasMetadata(): boolean;
  clearMetadata(): TaskArtifactUpdateEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskArtifactUpdateEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TaskArtifactUpdateEvent): TaskArtifactUpdateEvent.AsObject;
  static serializeBinaryToWriter(message: TaskArtifactUpdateEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskArtifactUpdateEvent;
  static deserializeBinaryFromReader(message: TaskArtifactUpdateEvent, reader: jspb.BinaryReader): TaskArtifactUpdateEvent;
}

export namespace TaskArtifactUpdateEvent {
  export type AsObject = {
    taskId: string,
    contextId: string,
    artifact?: Artifact.AsObject,
    append: boolean,
    lastChunk: boolean,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PushNotificationConfig extends jspb.Message {
  getId(): string;
  setId(value: string): PushNotificationConfig;

  getUrl(): string;
  setUrl(value: string): PushNotificationConfig;

  getToken(): string;
  setToken(value: string): PushNotificationConfig;

  getAuthentication(): AuthenticationInfo | undefined;
  setAuthentication(value?: AuthenticationInfo): PushNotificationConfig;
  hasAuthentication(): boolean;
  clearAuthentication(): PushNotificationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushNotificationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PushNotificationConfig): PushNotificationConfig.AsObject;
  static serializeBinaryToWriter(message: PushNotificationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushNotificationConfig;
  static deserializeBinaryFromReader(message: PushNotificationConfig, reader: jspb.BinaryReader): PushNotificationConfig;
}

export namespace PushNotificationConfig {
  export type AsObject = {
    id: string,
    url: string,
    token: string,
    authentication?: AuthenticationInfo.AsObject,
  }
}

export class AuthenticationInfo extends jspb.Message {
  getSchemesList(): Array<string>;
  setSchemesList(value: Array<string>): AuthenticationInfo;
  clearSchemesList(): AuthenticationInfo;
  addSchemes(value: string, index?: number): AuthenticationInfo;

  getCredentials(): string;
  setCredentials(value: string): AuthenticationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationInfo): AuthenticationInfo.AsObject;
  static serializeBinaryToWriter(message: AuthenticationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationInfo;
  static deserializeBinaryFromReader(message: AuthenticationInfo, reader: jspb.BinaryReader): AuthenticationInfo;
}

export namespace AuthenticationInfo {
  export type AsObject = {
    schemesList: Array<string>,
    credentials: string,
  }
}

export class AgentInterface extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): AgentInterface;

  getTransport(): string;
  setTransport(value: string): AgentInterface;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentInterface.AsObject;
  static toObject(includeInstance: boolean, msg: AgentInterface): AgentInterface.AsObject;
  static serializeBinaryToWriter(message: AgentInterface, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentInterface;
  static deserializeBinaryFromReader(message: AgentInterface, reader: jspb.BinaryReader): AgentInterface;
}

export namespace AgentInterface {
  export type AsObject = {
    url: string,
    transport: string,
  }
}

export class AgentCard extends jspb.Message {
  getProtocolVersion(): string;
  setProtocolVersion(value: string): AgentCard;

  getName(): string;
  setName(value: string): AgentCard;

  getDescription(): string;
  setDescription(value: string): AgentCard;

  getUrl(): string;
  setUrl(value: string): AgentCard;

  getPreferredTransport(): string;
  setPreferredTransport(value: string): AgentCard;

  getAdditionalInterfacesList(): Array<AgentInterface>;
  setAdditionalInterfacesList(value: Array<AgentInterface>): AgentCard;
  clearAdditionalInterfacesList(): AgentCard;
  addAdditionalInterfaces(value?: AgentInterface, index?: number): AgentInterface;

  getProvider(): AgentProvider | undefined;
  setProvider(value?: AgentProvider): AgentCard;
  hasProvider(): boolean;
  clearProvider(): AgentCard;

  getVersion(): string;
  setVersion(value: string): AgentCard;

  getDocumentationUrl(): string;
  setDocumentationUrl(value: string): AgentCard;

  getCapabilities(): AgentCapabilities | undefined;
  setCapabilities(value?: AgentCapabilities): AgentCard;
  hasCapabilities(): boolean;
  clearCapabilities(): AgentCard;

  getSecuritySchemesMap(): jspb.Map<string, SecurityScheme>;
  clearSecuritySchemesMap(): AgentCard;

  getSecurityList(): Array<Security>;
  setSecurityList(value: Array<Security>): AgentCard;
  clearSecurityList(): AgentCard;
  addSecurity(value?: Security, index?: number): Security;

  getDefaultInputModesList(): Array<string>;
  setDefaultInputModesList(value: Array<string>): AgentCard;
  clearDefaultInputModesList(): AgentCard;
  addDefaultInputModes(value: string, index?: number): AgentCard;

  getDefaultOutputModesList(): Array<string>;
  setDefaultOutputModesList(value: Array<string>): AgentCard;
  clearDefaultOutputModesList(): AgentCard;
  addDefaultOutputModes(value: string, index?: number): AgentCard;

  getSkillsList(): Array<AgentSkill>;
  setSkillsList(value: Array<AgentSkill>): AgentCard;
  clearSkillsList(): AgentCard;
  addSkills(value?: AgentSkill, index?: number): AgentSkill;

  getSupportsAuthenticatedExtendedCard(): boolean;
  setSupportsAuthenticatedExtendedCard(value: boolean): AgentCard;

  getSignaturesList(): Array<AgentCardSignature>;
  setSignaturesList(value: Array<AgentCardSignature>): AgentCard;
  clearSignaturesList(): AgentCard;
  addSignatures(value?: AgentCardSignature, index?: number): AgentCardSignature;

  getIconUrl(): string;
  setIconUrl(value: string): AgentCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCard.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCard): AgentCard.AsObject;
  static serializeBinaryToWriter(message: AgentCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCard;
  static deserializeBinaryFromReader(message: AgentCard, reader: jspb.BinaryReader): AgentCard;
}

export namespace AgentCard {
  export type AsObject = {
    protocolVersion: string,
    name: string,
    description: string,
    url: string,
    preferredTransport: string,
    additionalInterfacesList: Array<AgentInterface.AsObject>,
    provider?: AgentProvider.AsObject,
    version: string,
    documentationUrl: string,
    capabilities?: AgentCapabilities.AsObject,
    securitySchemesMap: Array<[string, SecurityScheme.AsObject]>,
    securityList: Array<Security.AsObject>,
    defaultInputModesList: Array<string>,
    defaultOutputModesList: Array<string>,
    skillsList: Array<AgentSkill.AsObject>,
    supportsAuthenticatedExtendedCard: boolean,
    signaturesList: Array<AgentCardSignature.AsObject>,
    iconUrl: string,
  }
}

export class AgentProvider extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): AgentProvider;

  getOrganization(): string;
  setOrganization(value: string): AgentProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentProvider.AsObject;
  static toObject(includeInstance: boolean, msg: AgentProvider): AgentProvider.AsObject;
  static serializeBinaryToWriter(message: AgentProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentProvider;
  static deserializeBinaryFromReader(message: AgentProvider, reader: jspb.BinaryReader): AgentProvider;
}

export namespace AgentProvider {
  export type AsObject = {
    url: string,
    organization: string,
  }
}

export class AgentCapabilities extends jspb.Message {
  getStreaming(): boolean;
  setStreaming(value: boolean): AgentCapabilities;

  getPushNotifications(): boolean;
  setPushNotifications(value: boolean): AgentCapabilities;

  getExtensionsList(): Array<AgentExtension>;
  setExtensionsList(value: Array<AgentExtension>): AgentCapabilities;
  clearExtensionsList(): AgentCapabilities;
  addExtensions(value?: AgentExtension, index?: number): AgentExtension;

  getStateTransitionHistory(): boolean;
  setStateTransitionHistory(value: boolean): AgentCapabilities;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCapabilities.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCapabilities): AgentCapabilities.AsObject;
  static serializeBinaryToWriter(message: AgentCapabilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCapabilities;
  static deserializeBinaryFromReader(message: AgentCapabilities, reader: jspb.BinaryReader): AgentCapabilities;
}

export namespace AgentCapabilities {
  export type AsObject = {
    streaming: boolean,
    pushNotifications: boolean,
    extensionsList: Array<AgentExtension.AsObject>,
    stateTransitionHistory: boolean,
  }
}

export class AgentExtension extends jspb.Message {
  getUri(): string;
  setUri(value: string): AgentExtension;

  getDescription(): string;
  setDescription(value: string): AgentExtension;

  getRequired(): boolean;
  setRequired(value: boolean): AgentExtension;

  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): AgentExtension;
  hasParams(): boolean;
  clearParams(): AgentExtension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentExtension.AsObject;
  static toObject(includeInstance: boolean, msg: AgentExtension): AgentExtension.AsObject;
  static serializeBinaryToWriter(message: AgentExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentExtension;
  static deserializeBinaryFromReader(message: AgentExtension, reader: jspb.BinaryReader): AgentExtension;
}

export namespace AgentExtension {
  export type AsObject = {
    uri: string,
    description: string,
    required: boolean,
    params?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AgentSkill extends jspb.Message {
  getId(): string;
  setId(value: string): AgentSkill;

  getName(): string;
  setName(value: string): AgentSkill;

  getDescription(): string;
  setDescription(value: string): AgentSkill;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): AgentSkill;
  clearTagsList(): AgentSkill;
  addTags(value: string, index?: number): AgentSkill;

  getExamplesList(): Array<string>;
  setExamplesList(value: Array<string>): AgentSkill;
  clearExamplesList(): AgentSkill;
  addExamples(value: string, index?: number): AgentSkill;

  getInputModesList(): Array<string>;
  setInputModesList(value: Array<string>): AgentSkill;
  clearInputModesList(): AgentSkill;
  addInputModes(value: string, index?: number): AgentSkill;

  getOutputModesList(): Array<string>;
  setOutputModesList(value: Array<string>): AgentSkill;
  clearOutputModesList(): AgentSkill;
  addOutputModes(value: string, index?: number): AgentSkill;

  getSecurityList(): Array<Security>;
  setSecurityList(value: Array<Security>): AgentSkill;
  clearSecurityList(): AgentSkill;
  addSecurity(value?: Security, index?: number): Security;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSkill.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSkill): AgentSkill.AsObject;
  static serializeBinaryToWriter(message: AgentSkill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSkill;
  static deserializeBinaryFromReader(message: AgentSkill, reader: jspb.BinaryReader): AgentSkill;
}

export namespace AgentSkill {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    tagsList: Array<string>,
    examplesList: Array<string>,
    inputModesList: Array<string>,
    outputModesList: Array<string>,
    securityList: Array<Security.AsObject>,
  }
}

export class AgentCardSignature extends jspb.Message {
  getProtected(): string;
  setProtected(value: string): AgentCardSignature;

  getSignature(): string;
  setSignature(value: string): AgentCardSignature;

  getHeader(): google_protobuf_struct_pb.Struct | undefined;
  setHeader(value?: google_protobuf_struct_pb.Struct): AgentCardSignature;
  hasHeader(): boolean;
  clearHeader(): AgentCardSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCardSignature.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCardSignature): AgentCardSignature.AsObject;
  static serializeBinaryToWriter(message: AgentCardSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCardSignature;
  static deserializeBinaryFromReader(message: AgentCardSignature, reader: jspb.BinaryReader): AgentCardSignature;
}

export namespace AgentCardSignature {
  export type AsObject = {
    pb_protected: string,
    signature: string,
    header?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class TaskPushNotificationConfig extends jspb.Message {
  getName(): string;
  setName(value: string): TaskPushNotificationConfig;

  getPushNotificationConfig(): PushNotificationConfig | undefined;
  setPushNotificationConfig(value?: PushNotificationConfig): TaskPushNotificationConfig;
  hasPushNotificationConfig(): boolean;
  clearPushNotificationConfig(): TaskPushNotificationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskPushNotificationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TaskPushNotificationConfig): TaskPushNotificationConfig.AsObject;
  static serializeBinaryToWriter(message: TaskPushNotificationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskPushNotificationConfig;
  static deserializeBinaryFromReader(message: TaskPushNotificationConfig, reader: jspb.BinaryReader): TaskPushNotificationConfig;
}

export namespace TaskPushNotificationConfig {
  export type AsObject = {
    name: string,
    pushNotificationConfig?: PushNotificationConfig.AsObject,
  }
}

export class StringList extends jspb.Message {
  getListList(): Array<string>;
  setListList(value: Array<string>): StringList;
  clearListList(): StringList;
  addList(value: string, index?: number): StringList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringList.AsObject;
  static toObject(includeInstance: boolean, msg: StringList): StringList.AsObject;
  static serializeBinaryToWriter(message: StringList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringList;
  static deserializeBinaryFromReader(message: StringList, reader: jspb.BinaryReader): StringList;
}

export namespace StringList {
  export type AsObject = {
    listList: Array<string>,
  }
}

export class Security extends jspb.Message {
  getSchemesMap(): jspb.Map<string, StringList>;
  clearSchemesMap(): Security;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Security.AsObject;
  static toObject(includeInstance: boolean, msg: Security): Security.AsObject;
  static serializeBinaryToWriter(message: Security, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Security;
  static deserializeBinaryFromReader(message: Security, reader: jspb.BinaryReader): Security;
}

export namespace Security {
  export type AsObject = {
    schemesMap: Array<[string, StringList.AsObject]>,
  }
}

export class SecurityScheme extends jspb.Message {
  getApiKeySecurityScheme(): APIKeySecurityScheme | undefined;
  setApiKeySecurityScheme(value?: APIKeySecurityScheme): SecurityScheme;
  hasApiKeySecurityScheme(): boolean;
  clearApiKeySecurityScheme(): SecurityScheme;

  getHttpAuthSecurityScheme(): HTTPAuthSecurityScheme | undefined;
  setHttpAuthSecurityScheme(value?: HTTPAuthSecurityScheme): SecurityScheme;
  hasHttpAuthSecurityScheme(): boolean;
  clearHttpAuthSecurityScheme(): SecurityScheme;

  getOauth2SecurityScheme(): OAuth2SecurityScheme | undefined;
  setOauth2SecurityScheme(value?: OAuth2SecurityScheme): SecurityScheme;
  hasOauth2SecurityScheme(): boolean;
  clearOauth2SecurityScheme(): SecurityScheme;

  getOpenIdConnectSecurityScheme(): OpenIdConnectSecurityScheme | undefined;
  setOpenIdConnectSecurityScheme(value?: OpenIdConnectSecurityScheme): SecurityScheme;
  hasOpenIdConnectSecurityScheme(): boolean;
  clearOpenIdConnectSecurityScheme(): SecurityScheme;

  getMtlsSecurityScheme(): MutualTlsSecurityScheme | undefined;
  setMtlsSecurityScheme(value?: MutualTlsSecurityScheme): SecurityScheme;
  hasMtlsSecurityScheme(): boolean;
  clearMtlsSecurityScheme(): SecurityScheme;

  getSchemeCase(): SecurityScheme.SchemeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityScheme.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityScheme): SecurityScheme.AsObject;
  static serializeBinaryToWriter(message: SecurityScheme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityScheme;
  static deserializeBinaryFromReader(message: SecurityScheme, reader: jspb.BinaryReader): SecurityScheme;
}

export namespace SecurityScheme {
  export type AsObject = {
    apiKeySecurityScheme?: APIKeySecurityScheme.AsObject,
    httpAuthSecurityScheme?: HTTPAuthSecurityScheme.AsObject,
    oauth2SecurityScheme?: OAuth2SecurityScheme.AsObject,
    openIdConnectSecurityScheme?: OpenIdConnectSecurityScheme.AsObject,
    mtlsSecurityScheme?: MutualTlsSecurityScheme.AsObject,
  }

  export enum SchemeCase { 
    SCHEME_NOT_SET = 0,
    API_KEY_SECURITY_SCHEME = 1,
    HTTP_AUTH_SECURITY_SCHEME = 2,
    OAUTH2_SECURITY_SCHEME = 3,
    OPEN_ID_CONNECT_SECURITY_SCHEME = 4,
    MTLS_SECURITY_SCHEME = 5,
  }
}

export class APIKeySecurityScheme extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): APIKeySecurityScheme;

  getLocation(): string;
  setLocation(value: string): APIKeySecurityScheme;

  getName(): string;
  setName(value: string): APIKeySecurityScheme;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIKeySecurityScheme.AsObject;
  static toObject(includeInstance: boolean, msg: APIKeySecurityScheme): APIKeySecurityScheme.AsObject;
  static serializeBinaryToWriter(message: APIKeySecurityScheme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIKeySecurityScheme;
  static deserializeBinaryFromReader(message: APIKeySecurityScheme, reader: jspb.BinaryReader): APIKeySecurityScheme;
}

export namespace APIKeySecurityScheme {
  export type AsObject = {
    description: string,
    location: string,
    name: string,
  }
}

export class HTTPAuthSecurityScheme extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): HTTPAuthSecurityScheme;

  getScheme(): string;
  setScheme(value: string): HTTPAuthSecurityScheme;

  getBearerFormat(): string;
  setBearerFormat(value: string): HTTPAuthSecurityScheme;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPAuthSecurityScheme.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPAuthSecurityScheme): HTTPAuthSecurityScheme.AsObject;
  static serializeBinaryToWriter(message: HTTPAuthSecurityScheme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPAuthSecurityScheme;
  static deserializeBinaryFromReader(message: HTTPAuthSecurityScheme, reader: jspb.BinaryReader): HTTPAuthSecurityScheme;
}

export namespace HTTPAuthSecurityScheme {
  export type AsObject = {
    description: string,
    scheme: string,
    bearerFormat: string,
  }
}

export class OAuth2SecurityScheme extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): OAuth2SecurityScheme;

  getFlows(): OAuthFlows | undefined;
  setFlows(value?: OAuthFlows): OAuth2SecurityScheme;
  hasFlows(): boolean;
  clearFlows(): OAuth2SecurityScheme;

  getOauth2MetadataUrl(): string;
  setOauth2MetadataUrl(value: string): OAuth2SecurityScheme;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuth2SecurityScheme.AsObject;
  static toObject(includeInstance: boolean, msg: OAuth2SecurityScheme): OAuth2SecurityScheme.AsObject;
  static serializeBinaryToWriter(message: OAuth2SecurityScheme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuth2SecurityScheme;
  static deserializeBinaryFromReader(message: OAuth2SecurityScheme, reader: jspb.BinaryReader): OAuth2SecurityScheme;
}

export namespace OAuth2SecurityScheme {
  export type AsObject = {
    description: string,
    flows?: OAuthFlows.AsObject,
    oauth2MetadataUrl: string,
  }
}

export class OpenIdConnectSecurityScheme extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): OpenIdConnectSecurityScheme;

  getOpenIdConnectUrl(): string;
  setOpenIdConnectUrl(value: string): OpenIdConnectSecurityScheme;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenIdConnectSecurityScheme.AsObject;
  static toObject(includeInstance: boolean, msg: OpenIdConnectSecurityScheme): OpenIdConnectSecurityScheme.AsObject;
  static serializeBinaryToWriter(message: OpenIdConnectSecurityScheme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenIdConnectSecurityScheme;
  static deserializeBinaryFromReader(message: OpenIdConnectSecurityScheme, reader: jspb.BinaryReader): OpenIdConnectSecurityScheme;
}

export namespace OpenIdConnectSecurityScheme {
  export type AsObject = {
    description: string,
    openIdConnectUrl: string,
  }
}

export class MutualTlsSecurityScheme extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): MutualTlsSecurityScheme;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutualTlsSecurityScheme.AsObject;
  static toObject(includeInstance: boolean, msg: MutualTlsSecurityScheme): MutualTlsSecurityScheme.AsObject;
  static serializeBinaryToWriter(message: MutualTlsSecurityScheme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutualTlsSecurityScheme;
  static deserializeBinaryFromReader(message: MutualTlsSecurityScheme, reader: jspb.BinaryReader): MutualTlsSecurityScheme;
}

export namespace MutualTlsSecurityScheme {
  export type AsObject = {
    description: string,
  }
}

export class OAuthFlows extends jspb.Message {
  getAuthorizationCode(): AuthorizationCodeOAuthFlow | undefined;
  setAuthorizationCode(value?: AuthorizationCodeOAuthFlow): OAuthFlows;
  hasAuthorizationCode(): boolean;
  clearAuthorizationCode(): OAuthFlows;

  getClientCredentials(): ClientCredentialsOAuthFlow | undefined;
  setClientCredentials(value?: ClientCredentialsOAuthFlow): OAuthFlows;
  hasClientCredentials(): boolean;
  clearClientCredentials(): OAuthFlows;

  getImplicit(): ImplicitOAuthFlow | undefined;
  setImplicit(value?: ImplicitOAuthFlow): OAuthFlows;
  hasImplicit(): boolean;
  clearImplicit(): OAuthFlows;

  getPassword(): PasswordOAuthFlow | undefined;
  setPassword(value?: PasswordOAuthFlow): OAuthFlows;
  hasPassword(): boolean;
  clearPassword(): OAuthFlows;

  getFlowCase(): OAuthFlows.FlowCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthFlows.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthFlows): OAuthFlows.AsObject;
  static serializeBinaryToWriter(message: OAuthFlows, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthFlows;
  static deserializeBinaryFromReader(message: OAuthFlows, reader: jspb.BinaryReader): OAuthFlows;
}

export namespace OAuthFlows {
  export type AsObject = {
    authorizationCode?: AuthorizationCodeOAuthFlow.AsObject,
    clientCredentials?: ClientCredentialsOAuthFlow.AsObject,
    implicit?: ImplicitOAuthFlow.AsObject,
    password?: PasswordOAuthFlow.AsObject,
  }

  export enum FlowCase { 
    FLOW_NOT_SET = 0,
    AUTHORIZATION_CODE = 1,
    CLIENT_CREDENTIALS = 2,
    IMPLICIT = 3,
    PASSWORD = 4,
  }
}

export class AuthorizationCodeOAuthFlow extends jspb.Message {
  getAuthorizationUrl(): string;
  setAuthorizationUrl(value: string): AuthorizationCodeOAuthFlow;

  getTokenUrl(): string;
  setTokenUrl(value: string): AuthorizationCodeOAuthFlow;

  getRefreshUrl(): string;
  setRefreshUrl(value: string): AuthorizationCodeOAuthFlow;

  getScopesMap(): jspb.Map<string, string>;
  clearScopesMap(): AuthorizationCodeOAuthFlow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationCodeOAuthFlow.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationCodeOAuthFlow): AuthorizationCodeOAuthFlow.AsObject;
  static serializeBinaryToWriter(message: AuthorizationCodeOAuthFlow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationCodeOAuthFlow;
  static deserializeBinaryFromReader(message: AuthorizationCodeOAuthFlow, reader: jspb.BinaryReader): AuthorizationCodeOAuthFlow;
}

export namespace AuthorizationCodeOAuthFlow {
  export type AsObject = {
    authorizationUrl: string,
    tokenUrl: string,
    refreshUrl: string,
    scopesMap: Array<[string, string]>,
  }
}

export class ClientCredentialsOAuthFlow extends jspb.Message {
  getTokenUrl(): string;
  setTokenUrl(value: string): ClientCredentialsOAuthFlow;

  getRefreshUrl(): string;
  setRefreshUrl(value: string): ClientCredentialsOAuthFlow;

  getScopesMap(): jspb.Map<string, string>;
  clearScopesMap(): ClientCredentialsOAuthFlow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientCredentialsOAuthFlow.AsObject;
  static toObject(includeInstance: boolean, msg: ClientCredentialsOAuthFlow): ClientCredentialsOAuthFlow.AsObject;
  static serializeBinaryToWriter(message: ClientCredentialsOAuthFlow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientCredentialsOAuthFlow;
  static deserializeBinaryFromReader(message: ClientCredentialsOAuthFlow, reader: jspb.BinaryReader): ClientCredentialsOAuthFlow;
}

export namespace ClientCredentialsOAuthFlow {
  export type AsObject = {
    tokenUrl: string,
    refreshUrl: string,
    scopesMap: Array<[string, string]>,
  }
}

export class ImplicitOAuthFlow extends jspb.Message {
  getAuthorizationUrl(): string;
  setAuthorizationUrl(value: string): ImplicitOAuthFlow;

  getRefreshUrl(): string;
  setRefreshUrl(value: string): ImplicitOAuthFlow;

  getScopesMap(): jspb.Map<string, string>;
  clearScopesMap(): ImplicitOAuthFlow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImplicitOAuthFlow.AsObject;
  static toObject(includeInstance: boolean, msg: ImplicitOAuthFlow): ImplicitOAuthFlow.AsObject;
  static serializeBinaryToWriter(message: ImplicitOAuthFlow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImplicitOAuthFlow;
  static deserializeBinaryFromReader(message: ImplicitOAuthFlow, reader: jspb.BinaryReader): ImplicitOAuthFlow;
}

export namespace ImplicitOAuthFlow {
  export type AsObject = {
    authorizationUrl: string,
    refreshUrl: string,
    scopesMap: Array<[string, string]>,
  }
}

export class PasswordOAuthFlow extends jspb.Message {
  getTokenUrl(): string;
  setTokenUrl(value: string): PasswordOAuthFlow;

  getRefreshUrl(): string;
  setRefreshUrl(value: string): PasswordOAuthFlow;

  getScopesMap(): jspb.Map<string, string>;
  clearScopesMap(): PasswordOAuthFlow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordOAuthFlow.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordOAuthFlow): PasswordOAuthFlow.AsObject;
  static serializeBinaryToWriter(message: PasswordOAuthFlow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordOAuthFlow;
  static deserializeBinaryFromReader(message: PasswordOAuthFlow, reader: jspb.BinaryReader): PasswordOAuthFlow;
}

export namespace PasswordOAuthFlow {
  export type AsObject = {
    tokenUrl: string,
    refreshUrl: string,
    scopesMap: Array<[string, string]>,
  }
}

export class SendMessageRequest extends jspb.Message {
  getRequest(): Message | undefined;
  setRequest(value?: Message): SendMessageRequest;
  hasRequest(): boolean;
  clearRequest(): SendMessageRequest;

  getConfiguration(): SendMessageConfiguration | undefined;
  setConfiguration(value?: SendMessageConfiguration): SendMessageRequest;
  hasConfiguration(): boolean;
  clearConfiguration(): SendMessageRequest;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): SendMessageRequest;
  hasMetadata(): boolean;
  clearMetadata(): SendMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
  static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    request?: Message.AsObject,
    configuration?: SendMessageConfiguration.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetTaskRequest;

  getHistoryLength(): number;
  setHistoryLength(value: number): GetTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskRequest): GetTaskRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskRequest;
  static deserializeBinaryFromReader(message: GetTaskRequest, reader: jspb.BinaryReader): GetTaskRequest;
}

export namespace GetTaskRequest {
  export type AsObject = {
    name: string,
    historyLength: number,
  }
}

export class ListTasksRequest extends jspb.Message {
  getContextId(): string;
  setContextId(value: string): ListTasksRequest;

  getStatus(): TaskState;
  setStatus(value: TaskState): ListTasksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTasksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTasksRequest;

  getHistoryLength(): number;
  setHistoryLength(value: number): ListTasksRequest;

  getLastUpdatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdatedTime(value?: google_protobuf_timestamp_pb.Timestamp): ListTasksRequest;
  hasLastUpdatedTime(): boolean;
  clearLastUpdatedTime(): ListTasksRequest;

  getIncludeArtifacts(): boolean;
  setIncludeArtifacts(value: boolean): ListTasksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTasksRequest): ListTasksRequest.AsObject;
  static serializeBinaryToWriter(message: ListTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTasksRequest;
  static deserializeBinaryFromReader(message: ListTasksRequest, reader: jspb.BinaryReader): ListTasksRequest;
}

export namespace ListTasksRequest {
  export type AsObject = {
    contextId: string,
    status: TaskState,
    pageSize: number,
    pageToken: string,
    historyLength: number,
    lastUpdatedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    includeArtifacts: boolean,
  }
}

export class ListTasksResponse extends jspb.Message {
  getTasksList(): Array<Task>;
  setTasksList(value: Array<Task>): ListTasksResponse;
  clearTasksList(): ListTasksResponse;
  addTasks(value?: Task, index?: number): Task;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTasksResponse;

  getTotalSize(): number;
  setTotalSize(value: number): ListTasksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTasksResponse): ListTasksResponse.AsObject;
  static serializeBinaryToWriter(message: ListTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTasksResponse;
  static deserializeBinaryFromReader(message: ListTasksResponse, reader: jspb.BinaryReader): ListTasksResponse;
}

export namespace ListTasksResponse {
  export type AsObject = {
    tasksList: Array<Task.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class CancelTaskRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CancelTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTaskRequest): CancelTaskRequest.AsObject;
  static serializeBinaryToWriter(message: CancelTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTaskRequest;
  static deserializeBinaryFromReader(message: CancelTaskRequest, reader: jspb.BinaryReader): CancelTaskRequest;
}

export namespace CancelTaskRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetTaskPushNotificationConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetTaskPushNotificationConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskPushNotificationConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskPushNotificationConfigRequest): GetTaskPushNotificationConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaskPushNotificationConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskPushNotificationConfigRequest;
  static deserializeBinaryFromReader(message: GetTaskPushNotificationConfigRequest, reader: jspb.BinaryReader): GetTaskPushNotificationConfigRequest;
}

export namespace GetTaskPushNotificationConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteTaskPushNotificationConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteTaskPushNotificationConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskPushNotificationConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskPushNotificationConfigRequest): DeleteTaskPushNotificationConfigRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskPushNotificationConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskPushNotificationConfigRequest;
  static deserializeBinaryFromReader(message: DeleteTaskPushNotificationConfigRequest, reader: jspb.BinaryReader): DeleteTaskPushNotificationConfigRequest;
}

export namespace DeleteTaskPushNotificationConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateTaskPushNotificationConfigRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateTaskPushNotificationConfigRequest;

  getConfigId(): string;
  setConfigId(value: string): CreateTaskPushNotificationConfigRequest;

  getConfig(): TaskPushNotificationConfig | undefined;
  setConfig(value?: TaskPushNotificationConfig): CreateTaskPushNotificationConfigRequest;
  hasConfig(): boolean;
  clearConfig(): CreateTaskPushNotificationConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskPushNotificationConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskPushNotificationConfigRequest): CreateTaskPushNotificationConfigRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaskPushNotificationConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskPushNotificationConfigRequest;
  static deserializeBinaryFromReader(message: CreateTaskPushNotificationConfigRequest, reader: jspb.BinaryReader): CreateTaskPushNotificationConfigRequest;
}

export namespace CreateTaskPushNotificationConfigRequest {
  export type AsObject = {
    parent: string,
    configId: string,
    config?: TaskPushNotificationConfig.AsObject,
  }
}

export class TaskSubscriptionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): TaskSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskSubscriptionRequest): TaskSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: TaskSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskSubscriptionRequest;
  static deserializeBinaryFromReader(message: TaskSubscriptionRequest, reader: jspb.BinaryReader): TaskSubscriptionRequest;
}

export namespace TaskSubscriptionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTaskPushNotificationConfigRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListTaskPushNotificationConfigRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTaskPushNotificationConfigRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTaskPushNotificationConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTaskPushNotificationConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTaskPushNotificationConfigRequest): ListTaskPushNotificationConfigRequest.AsObject;
  static serializeBinaryToWriter(message: ListTaskPushNotificationConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTaskPushNotificationConfigRequest;
  static deserializeBinaryFromReader(message: ListTaskPushNotificationConfigRequest, reader: jspb.BinaryReader): ListTaskPushNotificationConfigRequest;
}

export namespace ListTaskPushNotificationConfigRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class GetAgentCardRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentCardRequest): GetAgentCardRequest.AsObject;
  static serializeBinaryToWriter(message: GetAgentCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentCardRequest;
  static deserializeBinaryFromReader(message: GetAgentCardRequest, reader: jspb.BinaryReader): GetAgentCardRequest;
}

export namespace GetAgentCardRequest {
  export type AsObject = {
  }
}

export class SendMessageResponse extends jspb.Message {
  getTask(): Task | undefined;
  setTask(value?: Task): SendMessageResponse;
  hasTask(): boolean;
  clearTask(): SendMessageResponse;

  getMsg(): Message | undefined;
  setMsg(value?: Message): SendMessageResponse;
  hasMsg(): boolean;
  clearMsg(): SendMessageResponse;

  getPayloadCase(): SendMessageResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
  static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
  static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
}

export namespace SendMessageResponse {
  export type AsObject = {
    task?: Task.AsObject,
    msg?: Message.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    TASK = 1,
    MSG = 2,
  }
}

export class StreamResponse extends jspb.Message {
  getTask(): Task | undefined;
  setTask(value?: Task): StreamResponse;
  hasTask(): boolean;
  clearTask(): StreamResponse;

  getMsg(): Message | undefined;
  setMsg(value?: Message): StreamResponse;
  hasMsg(): boolean;
  clearMsg(): StreamResponse;

  getStatusUpdate(): TaskStatusUpdateEvent | undefined;
  setStatusUpdate(value?: TaskStatusUpdateEvent): StreamResponse;
  hasStatusUpdate(): boolean;
  clearStatusUpdate(): StreamResponse;

  getArtifactUpdate(): TaskArtifactUpdateEvent | undefined;
  setArtifactUpdate(value?: TaskArtifactUpdateEvent): StreamResponse;
  hasArtifactUpdate(): boolean;
  clearArtifactUpdate(): StreamResponse;

  getPayloadCase(): StreamResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamResponse): StreamResponse.AsObject;
  static serializeBinaryToWriter(message: StreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamResponse;
  static deserializeBinaryFromReader(message: StreamResponse, reader: jspb.BinaryReader): StreamResponse;
}

export namespace StreamResponse {
  export type AsObject = {
    task?: Task.AsObject,
    msg?: Message.AsObject,
    statusUpdate?: TaskStatusUpdateEvent.AsObject,
    artifactUpdate?: TaskArtifactUpdateEvent.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    TASK = 1,
    MSG = 2,
    STATUS_UPDATE = 3,
    ARTIFACT_UPDATE = 4,
  }
}

export class ListTaskPushNotificationConfigResponse extends jspb.Message {
  getConfigsList(): Array<TaskPushNotificationConfig>;
  setConfigsList(value: Array<TaskPushNotificationConfig>): ListTaskPushNotificationConfigResponse;
  clearConfigsList(): ListTaskPushNotificationConfigResponse;
  addConfigs(value?: TaskPushNotificationConfig, index?: number): TaskPushNotificationConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTaskPushNotificationConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTaskPushNotificationConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTaskPushNotificationConfigResponse): ListTaskPushNotificationConfigResponse.AsObject;
  static serializeBinaryToWriter(message: ListTaskPushNotificationConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTaskPushNotificationConfigResponse;
  static deserializeBinaryFromReader(message: ListTaskPushNotificationConfigResponse, reader: jspb.BinaryReader): ListTaskPushNotificationConfigResponse;
}

export namespace ListTaskPushNotificationConfigResponse {
  export type AsObject = {
    configsList: Array<TaskPushNotificationConfig.AsObject>,
    nextPageToken: string,
  }
}

export enum TaskState { 
  TASK_STATE_UNSPECIFIED = 0,
  TASK_STATE_SUBMITTED = 1,
  TASK_STATE_WORKING = 2,
  TASK_STATE_COMPLETED = 3,
  TASK_STATE_FAILED = 4,
  TASK_STATE_CANCELLED = 5,
  TASK_STATE_INPUT_REQUIRED = 6,
  TASK_STATE_REJECTED = 7,
  TASK_STATE_AUTH_REQUIRED = 8,
}
export enum Role { 
  ROLE_UNSPECIFIED = 0,
  ROLE_USER = 1,
  ROLE_AGENT = 2,
}
