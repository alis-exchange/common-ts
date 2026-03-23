import * as jspb from 'google-protobuf'

import * as alis_open_validation_v1_validation_pb from '../../../../alis/open/validation/v1/validation_pb'; // proto import: "alis/open/validation/v1/validation.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Guide extends jspb.Message {
  getName(): string;
  setName(value: string): Guide;

  getTitle(): string;
  setTitle(value: string): Guide;

  getSubtitle(): string;
  setSubtitle(value: string): Guide;

  getContentsList(): Array<Guide.ContentBlock>;
  setContentsList(value: Array<Guide.ContentBlock>): Guide;
  clearContentsList(): Guide;
  addContents(value?: Guide.ContentBlock, index?: number): Guide.ContentBlock;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Guide;
  hasCreateTime(): boolean;
  clearCreateTime(): Guide;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Guide;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Guide;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Guide.AsObject;
  static toObject(includeInstance: boolean, msg: Guide): Guide.AsObject;
  static serializeBinaryToWriter(message: Guide, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Guide;
  static deserializeBinaryFromReader(message: Guide, reader: jspb.BinaryReader): Guide;
}

export namespace Guide {
  export type AsObject = {
    name: string,
    title: string,
    subtitle: string,
    contentsList: Array<Guide.ContentBlock.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class ContentBlock extends jspb.Message {
    getType(): Guide.ContentBlock.Type;
    setType(value: Guide.ContentBlock.Type): ContentBlock;

    getTitle(): Guide.ContentBlock.Title | undefined;
    setTitle(value?: Guide.ContentBlock.Title): ContentBlock;
    hasTitle(): boolean;
    clearTitle(): ContentBlock;

    getSubtitle(): Guide.ContentBlock.Subtitle | undefined;
    setSubtitle(value?: Guide.ContentBlock.Subtitle): ContentBlock;
    hasSubtitle(): boolean;
    clearSubtitle(): ContentBlock;

    getHeading(): Guide.ContentBlock.Heading | undefined;
    setHeading(value?: Guide.ContentBlock.Heading): ContentBlock;
    hasHeading(): boolean;
    clearHeading(): ContentBlock;

    getTextBody(): Guide.ContentBlock.TextBody | undefined;
    setTextBody(value?: Guide.ContentBlock.TextBody): ContentBlock;
    hasTextBody(): boolean;
    clearTextBody(): ContentBlock;

    getImage(): Guide.ContentBlock.Image | undefined;
    setImage(value?: Guide.ContentBlock.Image): ContentBlock;
    hasImage(): boolean;
    clearImage(): ContentBlock;

    getVideo(): Guide.ContentBlock.Video | undefined;
    setVideo(value?: Guide.ContentBlock.Video): ContentBlock;
    hasVideo(): boolean;
    clearVideo(): ContentBlock;

    getDivider(): Guide.ContentBlock.Divider | undefined;
    setDivider(value?: Guide.ContentBlock.Divider): ContentBlock;
    hasDivider(): boolean;
    clearDivider(): ContentBlock;

    getLinkPreview(): Guide.ContentBlock.LinkPreview | undefined;
    setLinkPreview(value?: Guide.ContentBlock.LinkPreview): ContentBlock;
    hasLinkPreview(): boolean;
    clearLinkPreview(): ContentBlock;

    getFootnote(): Guide.ContentBlock.Footnote | undefined;
    setFootnote(value?: Guide.ContentBlock.Footnote): ContentBlock;
    hasFootnote(): boolean;
    clearFootnote(): ContentBlock;

    getDiagram(): Guide.ContentBlock.Diagram | undefined;
    setDiagram(value?: Guide.ContentBlock.Diagram): ContentBlock;
    hasDiagram(): boolean;
    clearDiagram(): ContentBlock;

    getCodeBlock(): Guide.ContentBlock.CodeBlock | undefined;
    setCodeBlock(value?: Guide.ContentBlock.CodeBlock): ContentBlock;
    hasCodeBlock(): boolean;
    clearCodeBlock(): ContentBlock;

    getBlockCase(): ContentBlock.BlockCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentBlock.AsObject;
    static toObject(includeInstance: boolean, msg: ContentBlock): ContentBlock.AsObject;
    static serializeBinaryToWriter(message: ContentBlock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentBlock;
    static deserializeBinaryFromReader(message: ContentBlock, reader: jspb.BinaryReader): ContentBlock;
  }

  export namespace ContentBlock {
    export type AsObject = {
      type: Guide.ContentBlock.Type,
      title?: Guide.ContentBlock.Title.AsObject,
      subtitle?: Guide.ContentBlock.Subtitle.AsObject,
      heading?: Guide.ContentBlock.Heading.AsObject,
      textBody?: Guide.ContentBlock.TextBody.AsObject,
      image?: Guide.ContentBlock.Image.AsObject,
      video?: Guide.ContentBlock.Video.AsObject,
      divider?: Guide.ContentBlock.Divider.AsObject,
      linkPreview?: Guide.ContentBlock.LinkPreview.AsObject,
      footnote?: Guide.ContentBlock.Footnote.AsObject,
      diagram?: Guide.ContentBlock.Diagram.AsObject,
      codeBlock?: Guide.ContentBlock.CodeBlock.AsObject,
    }

    export class Title extends jspb.Message {
      getText(): string;
      setText(value: string): Title;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Title.AsObject;
      static toObject(includeInstance: boolean, msg: Title): Title.AsObject;
      static serializeBinaryToWriter(message: Title, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Title;
      static deserializeBinaryFromReader(message: Title, reader: jspb.BinaryReader): Title;
    }

    export namespace Title {
      export type AsObject = {
        text: string,
      }
    }


    export class Subtitle extends jspb.Message {
      getText(): string;
      setText(value: string): Subtitle;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Subtitle.AsObject;
      static toObject(includeInstance: boolean, msg: Subtitle): Subtitle.AsObject;
      static serializeBinaryToWriter(message: Subtitle, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Subtitle;
      static deserializeBinaryFromReader(message: Subtitle, reader: jspb.BinaryReader): Subtitle;
    }

    export namespace Subtitle {
      export type AsObject = {
        text: string,
      }
    }


    export class Heading extends jspb.Message {
      getText(): string;
      setText(value: string): Heading;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Heading.AsObject;
      static toObject(includeInstance: boolean, msg: Heading): Heading.AsObject;
      static serializeBinaryToWriter(message: Heading, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Heading;
      static deserializeBinaryFromReader(message: Heading, reader: jspb.BinaryReader): Heading;
    }

    export namespace Heading {
      export type AsObject = {
        text: string,
      }
    }


    export class TextBody extends jspb.Message {
      getText(): string;
      setText(value: string): TextBody;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TextBody.AsObject;
      static toObject(includeInstance: boolean, msg: TextBody): TextBody.AsObject;
      static serializeBinaryToWriter(message: TextBody, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TextBody;
      static deserializeBinaryFromReader(message: TextBody, reader: jspb.BinaryReader): TextBody;
    }

    export namespace TextBody {
      export type AsObject = {
        text: string,
      }
    }


    export class Image extends jspb.Message {
      getSourceUri(): string;
      setSourceUri(value: string): Image;

      getCaption(): string;
      setCaption(value: string): Image;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Image.AsObject;
      static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
      static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Image;
      static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
    }

    export namespace Image {
      export type AsObject = {
        sourceUri: string,
        caption: string,
      }
    }


    export class Video extends jspb.Message {
      getSourceUri(): string;
      setSourceUri(value: string): Video;

      getCaption(): string;
      setCaption(value: string): Video;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Video.AsObject;
      static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
      static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Video;
      static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
    }

    export namespace Video {
      export type AsObject = {
        sourceUri: string,
        caption: string,
      }
    }


    export class Divider extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Divider.AsObject;
      static toObject(includeInstance: boolean, msg: Divider): Divider.AsObject;
      static serializeBinaryToWriter(message: Divider, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Divider;
      static deserializeBinaryFromReader(message: Divider, reader: jspb.BinaryReader): Divider;
    }

    export namespace Divider {
      export type AsObject = {
      }
    }


    export class LinkPreview extends jspb.Message {
      getUri(): string;
      setUri(value: string): LinkPreview;

      getAvatarUri(): string;
      setAvatarUri(value: string): LinkPreview;

      getTitle(): string;
      setTitle(value: string): LinkPreview;

      getBody(): string;
      setBody(value: string): LinkPreview;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LinkPreview.AsObject;
      static toObject(includeInstance: boolean, msg: LinkPreview): LinkPreview.AsObject;
      static serializeBinaryToWriter(message: LinkPreview, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LinkPreview;
      static deserializeBinaryFromReader(message: LinkPreview, reader: jspb.BinaryReader): LinkPreview;
    }

    export namespace LinkPreview {
      export type AsObject = {
        uri: string,
        avatarUri: string,
        title: string,
        body: string,
      }
    }


    export class Footnote extends jspb.Message {
      getText(): string;
      setText(value: string): Footnote;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Footnote.AsObject;
      static toObject(includeInstance: boolean, msg: Footnote): Footnote.AsObject;
      static serializeBinaryToWriter(message: Footnote, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Footnote;
      static deserializeBinaryFromReader(message: Footnote, reader: jspb.BinaryReader): Footnote;
    }

    export namespace Footnote {
      export type AsObject = {
        text: string,
      }
    }


    export class Diagram extends jspb.Message {
      getMermaidDiagramCode(): string;
      setMermaidDiagramCode(value: string): Diagram;

      getMermaidRenderedDiagram(): string;
      setMermaidRenderedDiagram(value: string): Diagram;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Diagram.AsObject;
      static toObject(includeInstance: boolean, msg: Diagram): Diagram.AsObject;
      static serializeBinaryToWriter(message: Diagram, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Diagram;
      static deserializeBinaryFromReader(message: Diagram, reader: jspb.BinaryReader): Diagram;
    }

    export namespace Diagram {
      export type AsObject = {
        mermaidDiagramCode: string,
        mermaidRenderedDiagram: string,
      }
    }


    export class CodeBlock extends jspb.Message {
      getLanguage(): Guide.ContentBlock.CodeBlock.Language;
      setLanguage(value: Guide.ContentBlock.CodeBlock.Language): CodeBlock;

      getCode(): string;
      setCode(value: string): CodeBlock;

      getSyntaxHighlightedCode(): string;
      setSyntaxHighlightedCode(value: string): CodeBlock;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CodeBlock.AsObject;
      static toObject(includeInstance: boolean, msg: CodeBlock): CodeBlock.AsObject;
      static serializeBinaryToWriter(message: CodeBlock, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CodeBlock;
      static deserializeBinaryFromReader(message: CodeBlock, reader: jspb.BinaryReader): CodeBlock;
    }

    export namespace CodeBlock {
      export type AsObject = {
        language: Guide.ContentBlock.CodeBlock.Language,
        code: string,
        syntaxHighlightedCode: string,
      }

      export enum Language { 
        LANGUAGE_UNSPECIFIED = 0,
        GO = 1,
        PROTO = 2,
        PYTHON = 3,
        VUE = 4,
        TYPESCRIPT = 5,
        LATEX = 6,
        HCL = 7,
        JSON = 8,
        YAML = 9,
        TEXT = 10,
      }
    }


    export enum Type { 
      TYPE_UNSPECIFIED = 0,
      TITLE = 1,
      SUBTITLE = 2,
      HEADING = 3,
      TEXT_BODY = 4,
      IMAGE = 5,
      VIDEO = 6,
      DIVIDER = 7,
      LINK_PREVIEW = 8,
      FOOTNOTE = 9,
      DIAGRAM = 10,
      CODE_BLOCK = 11,
    }

    export enum BlockCase { 
      BLOCK_NOT_SET = 0,
      TITLE = 2,
      SUBTITLE = 3,
      HEADING = 4,
      TEXT_BODY = 5,
      IMAGE = 6,
      VIDEO = 7,
      DIVIDER = 8,
      LINK_PREVIEW = 9,
      FOOTNOTE = 10,
      DIAGRAM = 11,
      CODE_BLOCK = 12,
    }
  }

}

export class GetGuideRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetGuideRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetGuideRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetGuideRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuideRequest): GetGuideRequest.AsObject;
  static serializeBinaryToWriter(message: GetGuideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuideRequest;
  static deserializeBinaryFromReader(message: GetGuideRequest, reader: jspb.BinaryReader): GetGuideRequest;
}

export namespace GetGuideRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListGuidesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListGuidesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListGuidesRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListGuidesRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListGuidesRequest;

  getFilter(): string;
  setFilter(value: string): ListGuidesRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListGuidesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGuidesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGuidesRequest): ListGuidesRequest.AsObject;
  static serializeBinaryToWriter(message: ListGuidesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGuidesRequest;
  static deserializeBinaryFromReader(message: ListGuidesRequest, reader: jspb.BinaryReader): ListGuidesRequest;
}

export namespace ListGuidesRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
    orderBy: string,
  }
}

export class ListGuidesResponse extends jspb.Message {
  getGuidesList(): Array<Guide>;
  setGuidesList(value: Array<Guide>): ListGuidesResponse;
  clearGuidesList(): ListGuidesResponse;
  addGuides(value?: Guide, index?: number): Guide;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListGuidesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGuidesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGuidesResponse): ListGuidesResponse.AsObject;
  static serializeBinaryToWriter(message: ListGuidesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGuidesResponse;
  static deserializeBinaryFromReader(message: ListGuidesResponse, reader: jspb.BinaryReader): ListGuidesResponse;
}

export namespace ListGuidesResponse {
  export type AsObject = {
    guidesList: Array<Guide.AsObject>,
    nextPageToken: string,
  }
}

export class SyncGuideRequest extends jspb.Message {
  getName(): string;
  setName(value: string): SyncGuideRequest;

  getGuide(): Guide | undefined;
  setGuide(value?: Guide): SyncGuideRequest;
  hasGuide(): boolean;
  clearGuide(): SyncGuideRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncGuideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncGuideRequest): SyncGuideRequest.AsObject;
  static serializeBinaryToWriter(message: SyncGuideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncGuideRequest;
  static deserializeBinaryFromReader(message: SyncGuideRequest, reader: jspb.BinaryReader): SyncGuideRequest;
}

export namespace SyncGuideRequest {
  export type AsObject = {
    name: string,
    guide?: Guide.AsObject,
  }
}

