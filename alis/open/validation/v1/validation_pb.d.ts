import * as jspb from 'google-protobuf'



export class RetrieveRulesRequest extends jspb.Message {
  getMsgType(): string;
  setMsgType(value: string): RetrieveRulesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveRulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveRulesRequest): RetrieveRulesRequest.AsObject;
  static serializeBinaryToWriter(message: RetrieveRulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveRulesRequest;
  static deserializeBinaryFromReader(message: RetrieveRulesRequest, reader: jspb.BinaryReader): RetrieveRulesRequest;
}

export namespace RetrieveRulesRequest {
  export type AsObject = {
    msgType: string,
  }
}

export class RetrieveRulesResponse extends jspb.Message {
  getRulesList(): Array<Rule>;
  setRulesList(value: Array<Rule>): RetrieveRulesResponse;
  clearRulesList(): RetrieveRulesResponse;
  addRules(value?: Rule, index?: number): Rule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveRulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveRulesResponse): RetrieveRulesResponse.AsObject;
  static serializeBinaryToWriter(message: RetrieveRulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveRulesResponse;
  static deserializeBinaryFromReader(message: RetrieveRulesResponse, reader: jspb.BinaryReader): RetrieveRulesResponse;
}

export namespace RetrieveRulesResponse {
  export type AsObject = {
    rulesList: Array<Rule.AsObject>,
  }
}

export class ValidateMessageRequest extends jspb.Message {
  getMsgType(): string;
  setMsgType(value: string): ValidateMessageRequest;

  getMsg(): Uint8Array | string;
  getMsg_asU8(): Uint8Array;
  getMsg_asB64(): string;
  setMsg(value: Uint8Array | string): ValidateMessageRequest;

  getFieldPathsList(): Array<string>;
  setFieldPathsList(value: Array<string>): ValidateMessageRequest;
  clearFieldPathsList(): ValidateMessageRequest;
  addFieldPaths(value: string, index?: number): ValidateMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateMessageRequest): ValidateMessageRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateMessageRequest;
  static deserializeBinaryFromReader(message: ValidateMessageRequest, reader: jspb.BinaryReader): ValidateMessageRequest;
}

export namespace ValidateMessageRequest {
  export type AsObject = {
    msgType: string,
    msg: Uint8Array | string,
    fieldPathsList: Array<string>,
  }
}

export class ValidateMessageResponse extends jspb.Message {
  getViolatedRulesList(): Array<Rule>;
  setViolatedRulesList(value: Array<Rule>): ValidateMessageResponse;
  clearViolatedRulesList(): ValidateMessageResponse;
  addViolatedRules(value?: Rule, index?: number): Rule;

  getViolatedFieldsList(): Array<FieldViolation>;
  setViolatedFieldsList(value: Array<FieldViolation>): ValidateMessageResponse;
  clearViolatedFieldsList(): ValidateMessageResponse;
  addViolatedFields(value?: FieldViolation, index?: number): FieldViolation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateMessageResponse): ValidateMessageResponse.AsObject;
  static serializeBinaryToWriter(message: ValidateMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateMessageResponse;
  static deserializeBinaryFromReader(message: ValidateMessageResponse, reader: jspb.BinaryReader): ValidateMessageResponse;
}

export namespace ValidateMessageResponse {
  export type AsObject = {
    violatedRulesList: Array<Rule.AsObject>,
    violatedFieldsList: Array<FieldViolation.AsObject>,
  }
}

export class Rule extends jspb.Message {
  getId(): string;
  setId(value: string): Rule;

  getDescription(): string;
  setDescription(value: string): Rule;

  getFieldPathsList(): Array<string>;
  setFieldPathsList(value: Array<string>): Rule;
  clearFieldPathsList(): Rule;
  addFieldPaths(value: string, index?: number): Rule;

  getNestedRulesList(): Array<Rule>;
  setNestedRulesList(value: Array<Rule>): Rule;
  clearNestedRulesList(): Rule;
  addNestedRules(value?: Rule, index?: number): Rule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rule.AsObject;
  static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
  static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rule;
  static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
}

export namespace Rule {
  export type AsObject = {
    id: string,
    description: string,
    fieldPathsList: Array<string>,
    nestedRulesList: Array<Rule.AsObject>,
  }
}

export class FieldViolation extends jspb.Message {
  getFieldPath(): string;
  setFieldPath(value: string): FieldViolation;

  getViolatedRulesList(): Array<Rule>;
  setViolatedRulesList(value: Array<Rule>): FieldViolation;
  clearViolatedRulesList(): FieldViolation;
  addViolatedRules(value?: Rule, index?: number): Rule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldViolation.AsObject;
  static toObject(includeInstance: boolean, msg: FieldViolation): FieldViolation.AsObject;
  static serializeBinaryToWriter(message: FieldViolation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldViolation;
  static deserializeBinaryFromReader(message: FieldViolation, reader: jspb.BinaryReader): FieldViolation;
}

export namespace FieldViolation {
  export type AsObject = {
    fieldPath: string,
    violatedRulesList: Array<Rule.AsObject>,
  }
}

