import * as jspb from 'google-protobuf'

import * as alis_open_cx_v1_cx_pb from '../../../../alis/open/cx/v1/cx_pb'; // proto import: "alis/open/cx/v1/cx.proto"
import * as alis_open_px_v1_px_pb from '../../../../alis/open/px/v1/px_pb'; // proto import: "alis/open/px/v1/px.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Instrument extends jspb.Message {
  getName(): string;
  setName(value: string): Instrument;

  getFigiType(): FigiType;
  setFigiType(value: FigiType): Instrument;

  getDisplayName(): string;
  setDisplayName(value: string): Instrument;

  getDescription(): string;
  setDescription(value: string): Instrument;

  getMarketSector(): Instrument.MarketSector;
  setMarketSector(value: Instrument.MarketSector): Instrument;

  getSecurityType(): string;
  setSecurityType(value: string): Instrument;

  getClassifications(): Instrument.Classifications | undefined;
  setClassifications(value?: Instrument.Classifications): Instrument;
  hasClassifications(): boolean;
  clearClassifications(): Instrument;

  getExternalIds(): Instrument.ExternalIDs | undefined;
  setExternalIds(value?: Instrument.ExternalIDs): Instrument;
  hasExternalIds(): boolean;
  clearExternalIds(): Instrument;

  getExchCode(): string;
  setExchCode(value: string): Instrument;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): Instrument;

  getCountryCode(): string;
  setCountryCode(value: string): Instrument;

  getIssuer(): string;
  setIssuer(value: string): Instrument;

  getTicker(): string;
  setTicker(value: string): Instrument;

  getWebsiteUri(): string;
  setWebsiteUri(value: string): Instrument;

  getIsCompositeFigi(): boolean;
  setIsCompositeFigi(value: boolean): Instrument;

  getIsShareClassFigi(): boolean;
  setIsShareClassFigi(value: boolean): Instrument;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Instrument;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Instrument;

  getExchangeIdentifiers(): Instrument.ExchangeIdentifiers | undefined;
  setExchangeIdentifiers(value?: Instrument.ExchangeIdentifiers): Instrument;
  hasExchangeIdentifiers(): boolean;
  clearExchangeIdentifiers(): Instrument;

  getEngines(): Instrument.Engines | undefined;
  setEngines(value?: Instrument.Engines): Instrument;
  hasEngines(): boolean;
  clearEngines(): Instrument;

  getCustomAttributesMap(): jspb.Map<string, string>;
  clearCustomAttributesMap(): Instrument;

  getSourceMetaMap(): jspb.Map<string, Instrument.SourceMetaData>;
  clearSourceMetaMap(): Instrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instrument.AsObject;
  static toObject(includeInstance: boolean, msg: Instrument): Instrument.AsObject;
  static serializeBinaryToWriter(message: Instrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instrument;
  static deserializeBinaryFromReader(message: Instrument, reader: jspb.BinaryReader): Instrument;
}

export namespace Instrument {
  export type AsObject = {
    name: string,
    figiType: FigiType,
    displayName: string,
    description: string,
    marketSector: Instrument.MarketSector,
    securityType: string,
    classifications?: Instrument.Classifications.AsObject,
    externalIds?: Instrument.ExternalIDs.AsObject,
    exchCode: string,
    currencyCode: string,
    countryCode: string,
    issuer: string,
    ticker: string,
    websiteUri: string,
    isCompositeFigi: boolean,
    isShareClassFigi: boolean,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    exchangeIdentifiers?: Instrument.ExchangeIdentifiers.AsObject,
    engines?: Instrument.Engines.AsObject,
    customAttributesMap: Array<[string, string]>,
    sourceMetaMap: Array<[string, Instrument.SourceMetaData.AsObject]>,
  }

  export class Classifications extends jspb.Message {
    getBloombergIndustrySector(): string;
    setBloombergIndustrySector(value: string): Classifications;

    getBloombergIndustryGroup(): string;
    setBloombergIndustryGroup(value: string): Classifications;

    getBloombergIndustrySubgroup(): string;
    setBloombergIndustrySubgroup(value: string): Classifications;

    getGicsSector(): string;
    setGicsSector(value: string): Classifications;

    getGicsIndustry(): string;
    setGicsIndustry(value: string): Classifications;

    getGicsSubindustry(): string;
    setGicsSubindustry(value: string): Classifications;

    getTheme(): string;
    setTheme(value: string): Classifications;

    getSector(): string;
    setSector(value: string): Classifications;

    getIndustry(): string;
    setIndustry(value: string): Classifications;

    getMorningstarSector(): string;
    setMorningstarSector(value: string): Classifications;

    getMorningstarIndustryGroup(): string;
    setMorningstarIndustryGroup(value: string): Classifications;

    getMorningstarIndustry(): string;
    setMorningstarIndustry(value: string): Classifications;

    getIcbIndustry(): string;
    setIcbIndustry(value: string): Classifications;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Classifications.AsObject;
    static toObject(includeInstance: boolean, msg: Classifications): Classifications.AsObject;
    static serializeBinaryToWriter(message: Classifications, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Classifications;
    static deserializeBinaryFromReader(message: Classifications, reader: jspb.BinaryReader): Classifications;
  }

  export namespace Classifications {
    export type AsObject = {
      bloombergIndustrySector: string,
      bloombergIndustryGroup: string,
      bloombergIndustrySubgroup: string,
      gicsSector: string,
      gicsIndustry: string,
      gicsSubindustry: string,
      theme: string,
      sector: string,
      industry: string,
      morningstarSector: string,
      morningstarIndustryGroup: string,
      morningstarIndustry: string,
      icbIndustry: string,
    }
  }


  export class ExternalIDs extends jspb.Message {
    getFigi(): string;
    setFigi(value: string): ExternalIDs;

    getCompositeFigi(): string;
    setCompositeFigi(value: string): ExternalIDs;

    getShareClassFigi(): string;
    setShareClassFigi(value: string): ExternalIDs;

    getIsin(): string;
    setIsin(value: string): ExternalIDs;

    getSedol(): string;
    setSedol(value: string): ExternalIDs;

    getCusip(): string;
    setCusip(value: string): ExternalIDs;

    getRic(): string;
    setRic(value: string): ExternalIDs;

    getPrimaryRic(): string;
    setPrimaryRic(value: string): ExternalIDs;

    getBloombergTicker(): string;
    setBloombergTicker(value: string): ExternalIDs;

    getMsciSecCode(): string;
    setMsciSecCode(value: string): ExternalIDs;

    getCik(): string;
    setCik(value: string): ExternalIDs;

    getInvestOne(): string;
    setInvestOne(value: string): ExternalIDs;

    getMorningstarSecId(): string;
    setMorningstarSecId(value: string): ExternalIDs;

    getMorningstarCompanyId(): string;
    setMorningstarCompanyId(value: string): ExternalIDs;

    getMch(): string;
    setMch(value: string): ExternalIDs;

    getMultifonds(): string;
    setMultifonds(value: string): ExternalIDs;

    getFundamental(): string;
    setFundamental(value: string): ExternalIDs;

    getMorganStanley(): string;
    setMorganStanley(value: string): ExternalIDs;

    getJseAlphaCode(): string;
    setJseAlphaCode(value: string): ExternalIDs;

    getPermId(): string;
    setPermId(value: string): ExternalIDs;

    getDatastreamSymbol(): string;
    setDatastreamSymbol(value: string): ExternalIDs;

    getIexId(): string;
    setIexId(value: string): ExternalIDs;

    getPortfolioExchangeBranch(): string;
    setPortfolioExchangeBranch(value: string): ExternalIDs;

    getResearchFigi(): string;
    setResearchFigi(value: string): ExternalIDs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExternalIDs.AsObject;
    static toObject(includeInstance: boolean, msg: ExternalIDs): ExternalIDs.AsObject;
    static serializeBinaryToWriter(message: ExternalIDs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExternalIDs;
    static deserializeBinaryFromReader(message: ExternalIDs, reader: jspb.BinaryReader): ExternalIDs;
  }

  export namespace ExternalIDs {
    export type AsObject = {
      figi: string,
      compositeFigi: string,
      shareClassFigi: string,
      isin: string,
      sedol: string,
      cusip: string,
      ric: string,
      primaryRic: string,
      bloombergTicker: string,
      msciSecCode: string,
      cik: string,
      investOne: string,
      morningstarSecId: string,
      morningstarCompanyId: string,
      mch: string,
      multifonds: string,
      fundamental: string,
      morganStanley: string,
      jseAlphaCode: string,
      permId: string,
      datastreamSymbol: string,
      iexId: string,
      portfolioExchangeBranch: string,
      researchFigi: string,
    }
  }


  export class ExchangeIdentifiers extends jspb.Message {
    getMic(): string;
    setMic(value: string): ExchangeIdentifiers;

    getOperatingMic(): string;
    setOperatingMic(value: string): ExchangeIdentifiers;

    getBloombergExchangeCode(): string;
    setBloombergExchangeCode(value: string): ExchangeIdentifiers;

    getMorningstarExchangeCode(): string;
    setMorningstarExchangeCode(value: string): ExchangeIdentifiers;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExchangeIdentifiers.AsObject;
    static toObject(includeInstance: boolean, msg: ExchangeIdentifiers): ExchangeIdentifiers.AsObject;
    static serializeBinaryToWriter(message: ExchangeIdentifiers, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExchangeIdentifiers;
    static deserializeBinaryFromReader(message: ExchangeIdentifiers, reader: jspb.BinaryReader): ExchangeIdentifiers;
  }

  export namespace ExchangeIdentifiers {
    export type AsObject = {
      mic: string,
      operatingMic: string,
      bloombergExchangeCode: string,
      morningstarExchangeCode: string,
    }
  }


  export class Engines extends jspb.Message {
    getPx(): alis_open_px_v1_px_pb.Instrument | undefined;
    setPx(value?: alis_open_px_v1_px_pb.Instrument): Engines;
    hasPx(): boolean;
    clearPx(): Engines;

    getCx(): alis_open_cx_v1_cx_pb.Instrument | undefined;
    setCx(value?: alis_open_cx_v1_cx_pb.Instrument): Engines;
    hasCx(): boolean;
    clearCx(): Engines;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Engines.AsObject;
    static toObject(includeInstance: boolean, msg: Engines): Engines.AsObject;
    static serializeBinaryToWriter(message: Engines, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Engines;
    static deserializeBinaryFromReader(message: Engines, reader: jspb.BinaryReader): Engines;
  }

  export namespace Engines {
    export type AsObject = {
      px?: alis_open_px_v1_px_pb.Instrument.AsObject,
      cx?: alis_open_cx_v1_cx_pb.Instrument.AsObject,
    }
  }


  export class SourceMetaData extends jspb.Message {
    getSource(): Source;
    setSource(value: Source): SourceMetaData;

    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): SourceMetaData;
    hasUpdateTime(): boolean;
    clearUpdateTime(): SourceMetaData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceMetaData.AsObject;
    static toObject(includeInstance: boolean, msg: SourceMetaData): SourceMetaData.AsObject;
    static serializeBinaryToWriter(message: SourceMetaData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceMetaData;
    static deserializeBinaryFromReader(message: SourceMetaData, reader: jspb.BinaryReader): SourceMetaData;
  }

  export namespace SourceMetaData {
    export type AsObject = {
      source: Source,
      updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }


  export enum MarketSector { 
    MARKET_SECTOR_UNSPECIFIED = 0,
    COMMODITY = 1,
    CORPORATE = 2,
    CURRENCY = 3,
    EQUITY = 4,
    INDEX = 5,
    MONEY_MARKET = 6,
    GOVERNMENT = 7,
    MTGE = 8,
    MUNI = 9,
    PFD = 10,
  }
}

export enum FigiType { 
  FIGI_TYPE_UNSPECIFIED = 0,
  GLOBAL = 1,
  CUSTOM = 2,
}
export enum Source { 
  SOURCE_UNSPECIFIED = 0,
  USER = 1,
  OPENFIGI = 2,
  PERMID = 3,
  DATASTREAM = 4,
  BLOOMBERG = 5,
  ORIGINATOR = 6,
  IEX = 7,
  MORNINGSTAR = 8,
  AI = 9,
}
export enum State { 
  STATE_UNSPECIFIED = 0,
  ACTIVE = 1,
  ARCHIVED = 2,
  STALE = 3,
}
