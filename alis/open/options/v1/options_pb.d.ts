import * as jspb from 'google-protobuf'

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb'; // proto import: "google/protobuf/descriptor.proto"


export class FileOptions extends jspb.Message {
  getJsonSchema(): FileOptions.JsonSchema | undefined;
  setJsonSchema(value?: FileOptions.JsonSchema): FileOptions;
  hasJsonSchema(): boolean;
  clearJsonSchema(): FileOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileOptions.AsObject;
  static toObject(includeInstance: boolean, msg: FileOptions): FileOptions.AsObject;
  static serializeBinaryToWriter(message: FileOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileOptions;
  static deserializeBinaryFromReader(message: FileOptions, reader: jspb.BinaryReader): FileOptions;
}

export namespace FileOptions {
  export type AsObject = {
    jsonSchema?: FileOptions.JsonSchema.AsObject,
  }

  export class JsonSchema extends jspb.Message {
    getGenerate(): boolean;
    setGenerate(value: boolean): JsonSchema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JsonSchema.AsObject;
    static toObject(includeInstance: boolean, msg: JsonSchema): JsonSchema.AsObject;
    static serializeBinaryToWriter(message: JsonSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JsonSchema;
    static deserializeBinaryFromReader(message: JsonSchema, reader: jspb.BinaryReader): JsonSchema;
  }

  export namespace JsonSchema {
    export type AsObject = {
      generate: boolean,
    }
  }

}

export class MessageOptions extends jspb.Message {
  getJsonSchema(): MessageOptions.JsonSchema | undefined;
  setJsonSchema(value?: MessageOptions.JsonSchema): MessageOptions;
  hasJsonSchema(): boolean;
  clearJsonSchema(): MessageOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageOptions.AsObject;
  static toObject(includeInstance: boolean, msg: MessageOptions): MessageOptions.AsObject;
  static serializeBinaryToWriter(message: MessageOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageOptions;
  static deserializeBinaryFromReader(message: MessageOptions, reader: jspb.BinaryReader): MessageOptions;
}

export namespace MessageOptions {
  export type AsObject = {
    jsonSchema?: MessageOptions.JsonSchema.AsObject,
  }

  export class JsonSchema extends jspb.Message {
    getGenerate(): boolean;
    setGenerate(value: boolean): JsonSchema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JsonSchema.AsObject;
    static toObject(includeInstance: boolean, msg: JsonSchema): JsonSchema.AsObject;
    static serializeBinaryToWriter(message: JsonSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JsonSchema;
    static deserializeBinaryFromReader(message: JsonSchema, reader: jspb.BinaryReader): JsonSchema;
  }

  export namespace JsonSchema {
    export type AsObject = {
      generate: boolean,
    }
  }

}

export class FieldOptions extends jspb.Message {
  getJsonSchema(): FieldOptions.JsonSchema | undefined;
  setJsonSchema(value?: FieldOptions.JsonSchema): FieldOptions;
  hasJsonSchema(): boolean;
  clearJsonSchema(): FieldOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldOptions.AsObject;
  static toObject(includeInstance: boolean, msg: FieldOptions): FieldOptions.AsObject;
  static serializeBinaryToWriter(message: FieldOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldOptions;
  static deserializeBinaryFromReader(message: FieldOptions, reader: jspb.BinaryReader): FieldOptions;
}

export namespace FieldOptions {
  export type AsObject = {
    jsonSchema?: FieldOptions.JsonSchema.AsObject,
  }

  export class JsonSchema extends jspb.Message {
    getTitle(): string;
    setTitle(value: string): JsonSchema;
    hasTitle(): boolean;
    clearTitle(): JsonSchema;

    getDescription(): string;
    setDescription(value: string): JsonSchema;
    hasDescription(): boolean;
    clearDescription(): JsonSchema;

    getIgnore(): boolean;
    setIgnore(value: boolean): JsonSchema;
    hasIgnore(): boolean;
    clearIgnore(): JsonSchema;

    getPattern(): string;
    setPattern(value: string): JsonSchema;
    hasPattern(): boolean;
    clearPattern(): JsonSchema;

    getFormat(): string;
    setFormat(value: string): JsonSchema;
    hasFormat(): boolean;
    clearFormat(): JsonSchema;

    getContentEncoding(): string;
    setContentEncoding(value: string): JsonSchema;
    hasContentEncoding(): boolean;
    clearContentEncoding(): JsonSchema;

    getContentMediaType(): string;
    setContentMediaType(value: string): JsonSchema;
    hasContentMediaType(): boolean;
    clearContentMediaType(): JsonSchema;

    getMinLength(): number;
    setMinLength(value: number): JsonSchema;
    hasMinLength(): boolean;
    clearMinLength(): JsonSchema;

    getMaxLength(): number;
    setMaxLength(value: number): JsonSchema;
    hasMaxLength(): boolean;
    clearMaxLength(): JsonSchema;

    getMinimum(): number;
    setMinimum(value: number): JsonSchema;
    hasMinimum(): boolean;
    clearMinimum(): JsonSchema;

    getMaximum(): number;
    setMaximum(value: number): JsonSchema;
    hasMaximum(): boolean;
    clearMaximum(): JsonSchema;

    getExclusiveMinimum(): boolean;
    setExclusiveMinimum(value: boolean): JsonSchema;
    hasExclusiveMinimum(): boolean;
    clearExclusiveMinimum(): JsonSchema;

    getExclusiveMaximum(): boolean;
    setExclusiveMaximum(value: boolean): JsonSchema;
    hasExclusiveMaximum(): boolean;
    clearExclusiveMaximum(): JsonSchema;

    getMinItems(): number;
    setMinItems(value: number): JsonSchema;
    hasMinItems(): boolean;
    clearMinItems(): JsonSchema;

    getMaxItems(): number;
    setMaxItems(value: number): JsonSchema;
    hasMaxItems(): boolean;
    clearMaxItems(): JsonSchema;

    getUniqueItems(): boolean;
    setUniqueItems(value: boolean): JsonSchema;
    hasUniqueItems(): boolean;
    clearUniqueItems(): JsonSchema;

    getMinProperties(): number;
    setMinProperties(value: number): JsonSchema;
    hasMinProperties(): boolean;
    clearMinProperties(): JsonSchema;

    getMaxProperties(): number;
    setMaxProperties(value: number): JsonSchema;
    hasMaxProperties(): boolean;
    clearMaxProperties(): JsonSchema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JsonSchema.AsObject;
    static toObject(includeInstance: boolean, msg: JsonSchema): JsonSchema.AsObject;
    static serializeBinaryToWriter(message: JsonSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JsonSchema;
    static deserializeBinaryFromReader(message: JsonSchema, reader: jspb.BinaryReader): JsonSchema;
  }

  export namespace JsonSchema {
    export type AsObject = {
      title?: string,
      description?: string,
      ignore?: boolean,
      pattern?: string,
      format?: string,
      contentEncoding?: string,
      contentMediaType?: string,
      minLength?: number,
      maxLength?: number,
      minimum?: number,
      maximum?: number,
      exclusiveMinimum?: boolean,
      exclusiveMaximum?: boolean,
      minItems?: number,
      maxItems?: number,
      uniqueItems?: boolean,
      minProperties?: number,
      maxProperties?: number,
    }

    export enum TitleCase { 
      _TITLE_NOT_SET = 0,
      TITLE = 1,
    }

    export enum DescriptionCase { 
      _DESCRIPTION_NOT_SET = 0,
      DESCRIPTION = 2,
    }

    export enum IgnoreCase { 
      _IGNORE_NOT_SET = 0,
      IGNORE = 3,
    }

    export enum PatternCase { 
      _PATTERN_NOT_SET = 0,
      PATTERN = 4,
    }

    export enum FormatCase { 
      _FORMAT_NOT_SET = 0,
      FORMAT = 5,
    }

    export enum ContentEncodingCase { 
      _CONTENT_ENCODING_NOT_SET = 0,
      CONTENT_ENCODING = 6,
    }

    export enum ContentMediaTypeCase { 
      _CONTENT_MEDIA_TYPE_NOT_SET = 0,
      CONTENT_MEDIA_TYPE = 7,
    }

    export enum MinLengthCase { 
      _MIN_LENGTH_NOT_SET = 0,
      MIN_LENGTH = 8,
    }

    export enum MaxLengthCase { 
      _MAX_LENGTH_NOT_SET = 0,
      MAX_LENGTH = 9,
    }

    export enum MinimumCase { 
      _MINIMUM_NOT_SET = 0,
      MINIMUM = 10,
    }

    export enum MaximumCase { 
      _MAXIMUM_NOT_SET = 0,
      MAXIMUM = 11,
    }

    export enum ExclusiveMinimumCase { 
      _EXCLUSIVE_MINIMUM_NOT_SET = 0,
      EXCLUSIVE_MINIMUM = 12,
    }

    export enum ExclusiveMaximumCase { 
      _EXCLUSIVE_MAXIMUM_NOT_SET = 0,
      EXCLUSIVE_MAXIMUM = 13,
    }

    export enum MinItemsCase { 
      _MIN_ITEMS_NOT_SET = 0,
      MIN_ITEMS = 14,
    }

    export enum MaxItemsCase { 
      _MAX_ITEMS_NOT_SET = 0,
      MAX_ITEMS = 15,
    }

    export enum UniqueItemsCase { 
      _UNIQUE_ITEMS_NOT_SET = 0,
      UNIQUE_ITEMS = 16,
    }

    export enum MinPropertiesCase { 
      _MIN_PROPERTIES_NOT_SET = 0,
      MIN_PROPERTIES = 17,
    }

    export enum MaxPropertiesCase { 
      _MAX_PROPERTIES_NOT_SET = 0,
      MAX_PROPERTIES = 18,
    }
  }

}

