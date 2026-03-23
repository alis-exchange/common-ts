import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"


export class Instrument extends jspb.Message {
  getName(): string;
  setName(value: string): Instrument;

  getFigiType(): Instrument.FigiType;
  setFigiType(value: Instrument.FigiType): Instrument;

  getDisplayName(): string;
  setDisplayName(value: string): Instrument;

  getDescription(): string;
  setDescription(value: string): Instrument;

  getMarketSector(): Instrument.MarketSector;
  setMarketSector(value: Instrument.MarketSector): Instrument;

  getExchCode(): string;
  setExchCode(value: string): Instrument;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): Instrument;

  getCountryCode(): string;
  setCountryCode(value: string): Instrument;

  getIssuer(): string;
  setIssuer(value: string): Instrument;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Instrument;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Instrument;

  getAsisa(): Instrument.Asisa | undefined;
  setAsisa(value?: Instrument.Asisa): Instrument;
  hasAsisa(): boolean;
  clearAsisa(): Instrument;

  getMifid(): Instrument.Mifid | undefined;
  setMifid(value?: Instrument.Mifid): Instrument;
  hasMifid(): boolean;
  clearMifid(): Instrument;

  getUcits(): Instrument.Ucits | undefined;
  setUcits(value?: Instrument.Ucits): Instrument;
  hasUcits(): boolean;
  clearUcits(): Instrument;

  getReg28(): Instrument.Reg28 | undefined;
  setReg28(value?: Instrument.Reg28): Instrument;
  hasReg28(): boolean;
  clearReg28(): Instrument;

  getCisca(): Instrument.Cisca | undefined;
  setCisca(value?: Instrument.Cisca): Instrument;
  hasCisca(): boolean;
  clearCisca(): Instrument;

  getReg30(): Instrument.Reg30 | undefined;
  setReg30(value?: Instrument.Reg30): Instrument;
  hasReg30(): boolean;
  clearReg30(): Instrument;

  getSarbc23(): Instrument.SarbC23 | undefined;
  setSarbc23(value?: Instrument.SarbC23): Instrument;
  hasSarbc23(): boolean;
  clearSarbc23(): Instrument;

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
    figiType: Instrument.FigiType,
    displayName: string,
    description: string,
    marketSector: Instrument.MarketSector,
    exchCode: string,
    currencyCode: string,
    countryCode: string,
    issuer: string,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    asisa?: Instrument.Asisa.AsObject,
    mifid?: Instrument.Mifid.AsObject,
    ucits?: Instrument.Ucits.AsObject,
    reg28?: Instrument.Reg28.AsObject,
    cisca?: Instrument.Cisca.AsObject,
    reg30?: Instrument.Reg30.AsObject,
    sarbc23?: Instrument.SarbC23.AsObject,
  }

  export class Asisa extends jspb.Message {
    getAssetClass(): Instrument.Asisa.AssetClass;
    setAssetClass(value: Instrument.Asisa.AssetClass): Asisa;

    getSecurityType(): string;
    setSecurityType(value: string): Asisa;

    getIssuer(): string;
    setIssuer(value: string): Asisa;

    getIssuerZarMarketCapitalisation(): number;
    setIssuerZarMarketCapitalisation(value: number): Asisa;

    getShortTermCreditRating(): Instrument.CreditRating | undefined;
    setShortTermCreditRating(value?: Instrument.CreditRating): Asisa;
    hasShortTermCreditRating(): boolean;
    clearShortTermCreditRating(): Asisa;

    getLongTermCreditRating(): Instrument.CreditRating | undefined;
    setLongTermCreditRating(value?: Instrument.CreditRating): Asisa;
    hasLongTermCreditRating(): boolean;
    clearLongTermCreditRating(): Asisa;

    getShortTermCreditRatingIssuer(): Instrument.CreditRating | undefined;
    setShortTermCreditRatingIssuer(value?: Instrument.CreditRating): Asisa;
    hasShortTermCreditRatingIssuer(): boolean;
    clearShortTermCreditRatingIssuer(): Asisa;

    getLongTermCreditRatingIssuer(): Instrument.CreditRating | undefined;
    setLongTermCreditRatingIssuer(value?: Instrument.CreditRating): Asisa;
    hasLongTermCreditRatingIssuer(): boolean;
    clearLongTermCreditRatingIssuer(): Asisa;

    getAfricaAllowance(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAfricaAllowance(value?: google_protobuf_wrappers_pb.BoolValue): Asisa;
    hasAfricaAllowance(): boolean;
    clearAfricaAllowance(): Asisa;

    getCcdClassified(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setCcdClassified(value?: google_protobuf_wrappers_pb.BoolValue): Asisa;
    hasCcdClassified(): boolean;
    clearCcdClassified(): Asisa;

    getCurrencyCode(): string;
    setCurrencyCode(value: string): Asisa;

    getCategory(): Instrument.Asisa.Category;
    setCategory(value: Instrument.Asisa.Category): Asisa;

    getValidation(): Instrument.Validation | undefined;
    setValidation(value?: Instrument.Validation): Asisa;
    hasValidation(): boolean;
    clearValidation(): Asisa;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Asisa.AsObject;
    static toObject(includeInstance: boolean, msg: Asisa): Asisa.AsObject;
    static serializeBinaryToWriter(message: Asisa, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Asisa;
    static deserializeBinaryFromReader(message: Asisa, reader: jspb.BinaryReader): Asisa;
  }

  export namespace Asisa {
    export type AsObject = {
      assetClass: Instrument.Asisa.AssetClass,
      securityType: string,
      issuer: string,
      issuerZarMarketCapitalisation: number,
      shortTermCreditRating?: Instrument.CreditRating.AsObject,
      longTermCreditRating?: Instrument.CreditRating.AsObject,
      shortTermCreditRatingIssuer?: Instrument.CreditRating.AsObject,
      longTermCreditRatingIssuer?: Instrument.CreditRating.AsObject,
      africaAllowance?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      ccdClassified?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      currencyCode: string,
      category: Instrument.Asisa.Category,
      validation?: Instrument.Validation.AsObject,
    }

    export enum AssetClass { 
      ASSET_CLASS_UNSPECIFIED = 0,
      DB = 1,
      DBU = 2,
      DC = 3,
      DCO = 4,
      DD = 5,
      DEP = 6,
      DES = 7,
      DEU = 8,
      DFI = 9,
      DFO = 10,
      DFT = 11,
      DLN = 12,
      DM = 13,
      DO = 14,
      DS = 15,
      DT = 16,
      FB = 17,
      FBU = 18,
      FC = 19,
      FCO = 20,
      FE = 21,
      FEU = 22,
      FLN = 23,
      FM = 24,
      FO = 25,
      FS = 26,
      FUT = 27,
      LUT = 28,
      DFF = 29,
    }

    export enum Category { 
      CATEGORY_UNSPECIFIED = 0,
      CASH_INSIDE_THE_REPUBLIC = 1,
      CASH_FOREIGN_ASSETS = 2,
      DEBT_GUARANTEED_BY_THE_REPUBLIC = 3,
      DEBT_GUARANTEED_BY_FOREIGN_COUNTRY = 4,
      DEBT_GUARANTEED_BY_SOUTH_AFRICAN_BANK = 5,
      DEBT_GUARANTEED_BY_LISTED_OR_PFMA_ENTITY = 6,
      DEBT_OTHER = 7,
      EQUITIES = 8,
      IMMOVABLE_PROPERTY = 10,
      COMMODITIES_GOLD = 12,
      COMMODITIES_OTHER = 13,
      PARTICIPATING_EMPLOYER_BUSINESS_PFA_SECTION_19_4 = 14,
      PARTICIPATING_EMPLOYER_BUSINESS_PFA_SECTION_19_4A_EXEMPT = 15,
      HOUSING_LOANS = 16,
      OTHER_ASSETS_FUNDS_OF_HEDGE_FUNDS = 17,
      OTHER_ASSETS_HEDGE_FUNDS = 18,
      OTHER_ASSETS_FUNDS_OF_PRIVATE_EQUITY_FUNDS = 19,
      OTHER_ASSETS_PRIVATE_EQUITY_FUNDS = 20,
      OTHER_ASSETS_NOT_REFERRED_TO_IN_SCHEDULE = 21,
      EXCLUDED_ASSETS = 22,
    }
  }


  export class Mifid extends jspb.Message {
    getAssetClass(): Instrument.Mifid.AssetClass;
    setAssetClass(value: Instrument.Mifid.AssetClass): Mifid;

    getValidation(): Instrument.Validation | undefined;
    setValidation(value?: Instrument.Validation): Mifid;
    hasValidation(): boolean;
    clearValidation(): Mifid;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mifid.AsObject;
    static toObject(includeInstance: boolean, msg: Mifid): Mifid.AsObject;
    static serializeBinaryToWriter(message: Mifid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mifid;
    static deserializeBinaryFromReader(message: Mifid, reader: jspb.BinaryReader): Mifid;
  }

  export namespace Mifid {
    export type AsObject = {
      assetClass: Instrument.Mifid.AssetClass,
      validation?: Instrument.Validation.AsObject,
    }

    export enum AssetClass { 
      ASSET_CLASS_UNSPECIFIED = 0,
      CTDV = 1,
      EALL = 2,
      IRDV = 3,
      SFPS = 4,
      CDRV = 5,
      EDRV = 6,
      SDRV = 7,
      CRDV = 8,
      FXDV = 9,
      EQUI = 10,
      EADV = 11,
      FCFD = 12,
      BOND = 13,
    }
  }


  export class Ucits extends jspb.Message {
    getMarketSector(): Instrument.Ucits.MarketSector;
    setMarketSector(value: Instrument.Ucits.MarketSector): Ucits;

    getSecurityType(): string;
    setSecurityType(value: string): Ucits;

    getIssuer(): string;
    setIssuer(value: string): Ucits;

    getEuBankIssuer(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEuBankIssuer(value?: google_protobuf_wrappers_pb.BoolValue): Ucits;
    hasEuBankIssuer(): boolean;
    clearEuBankIssuer(): Ucits;

    getEuCreditInstitutionIssuer(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEuCreditInstitutionIssuer(value?: google_protobuf_wrappers_pb.BoolValue): Ucits;
    hasEuCreditInstitutionIssuer(): boolean;
    clearEuCreditInstitutionIssuer(): Ucits;

    getUcitsCompatible(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUcitsCompatible(value?: google_protobuf_wrappers_pb.BoolValue): Ucits;
    hasUcitsCompatible(): boolean;
    clearUcitsCompatible(): Ucits;

    getTradedOnExchange(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTradedOnExchange(value?: google_protobuf_wrappers_pb.BoolValue): Ucits;
    hasTradedOnExchange(): boolean;
    clearTradedOnExchange(): Ucits;

    getUcitsUciFund(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUcitsUciFund(value?: google_protobuf_wrappers_pb.BoolValue): Ucits;
    hasUcitsUciFund(): boolean;
    clearUcitsUciFund(): Ucits;

    getValidation(): Instrument.Validation | undefined;
    setValidation(value?: Instrument.Validation): Ucits;
    hasValidation(): boolean;
    clearValidation(): Ucits;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ucits.AsObject;
    static toObject(includeInstance: boolean, msg: Ucits): Ucits.AsObject;
    static serializeBinaryToWriter(message: Ucits, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ucits;
    static deserializeBinaryFromReader(message: Ucits, reader: jspb.BinaryReader): Ucits;
  }

  export namespace Ucits {
    export type AsObject = {
      marketSector: Instrument.Ucits.MarketSector,
      securityType: string,
      issuer: string,
      euBankIssuer?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      euCreditInstitutionIssuer?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      ucitsCompatible?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      tradedOnExchange?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      ucitsUciFund?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      validation?: Instrument.Validation.AsObject,
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


  export class Reg28 extends jspb.Message {
    getCategory(): Instrument.Reg28.Category;
    setCategory(value: Instrument.Reg28.Category): Reg28;

    getExchangeListedIssuer(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setExchangeListedIssuer(value?: google_protobuf_wrappers_pb.BoolValue): Reg28;
    hasExchangeListedIssuer(): boolean;
    clearExchangeListedIssuer(): Reg28;

    getSecurityType(): string;
    setSecurityType(value: string): Reg28;

    getIssuer(): string;
    setIssuer(value: string): Reg28;

    getIssuerZarMarketCapitalisation(): number;
    setIssuerZarMarketCapitalisation(value: number): Reg28;

    getCurrencyCode(): string;
    setCurrencyCode(value: string): Reg28;

    getValidation(): Instrument.Validation | undefined;
    setValidation(value?: Instrument.Validation): Reg28;
    hasValidation(): boolean;
    clearValidation(): Reg28;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reg28.AsObject;
    static toObject(includeInstance: boolean, msg: Reg28): Reg28.AsObject;
    static serializeBinaryToWriter(message: Reg28, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reg28;
    static deserializeBinaryFromReader(message: Reg28, reader: jspb.BinaryReader): Reg28;
  }

  export namespace Reg28 {
    export type AsObject = {
      category: Instrument.Reg28.Category,
      exchangeListedIssuer?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      securityType: string,
      issuer: string,
      issuerZarMarketCapitalisation: number,
      currencyCode: string,
      validation?: Instrument.Validation.AsObject,
    }

    export enum Category { 
      CATEGORY_UNSPECIFIED = 0,
      CASH_INSIDE_THE_REPUBLIC = 1,
      CASH_FOREIGN_ASSETS = 2,
      DEBT_GUARANTEED_BY_THE_REPUBLIC = 3,
      DEBT_GUARANTEED_BY_FOREIGN_COUNTRY = 4,
      DEBT_GUARANTEED_BY_SOUTH_AFRICAN_BANK = 5,
      DEBT_GUARANTEED_BY_LISTED_OR_PFMA_ENTITY = 6,
      DEBT_OTHER = 7,
      EQUITIES = 8,
      IMMOVABLE_PROPERTY = 10,
      COMMODITIES_GOLD = 12,
      COMMODITIES_OTHER = 13,
      PARTICIPATING_EMPLOYER_BUSINESS_PFA_SECTION_19_4 = 14,
      PARTICIPATING_EMPLOYER_BUSINESS_PFA_SECTION_19_4A_EXEMPT = 15,
      HOUSING_LOANS = 16,
      OTHER_ASSETS_FUNDS_OF_HEDGE_FUNDS = 17,
      OTHER_ASSETS_HEDGE_FUNDS = 18,
      OTHER_ASSETS_FUNDS_OF_PRIVATE_EQUITY_FUNDS = 19,
      OTHER_ASSETS_PRIVATE_EQUITY_FUNDS = 20,
      OTHER_ASSETS_NOT_REFERRED_TO_IN_SCHEDULE = 21,
      EXCLUDED_ASSETS = 22,
    }
  }


  export class Cisca extends jspb.Message {
    getCategory(): Instrument.Cisca.Category;
    setCategory(value: Instrument.Cisca.Category): Cisca;

    getSecurityType(): string;
    setSecurityType(value: string): Cisca;

    getIssuer(): string;
    setIssuer(value: string): Cisca;

    getHasEmbeddedLeverage(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setHasEmbeddedLeverage(value?: google_protobuf_wrappers_pb.BoolValue): Cisca;
    hasHasEmbeddedLeverage(): boolean;
    clearHasEmbeddedLeverage(): Cisca;

    getIndexWeight(): number;
    setIndexWeight(value: number): Cisca;

    getIssuerMarketCapitalisation(): number;
    setIssuerMarketCapitalisation(value: number): Cisca;

    getValidation(): Instrument.Validation | undefined;
    setValidation(value?: Instrument.Validation): Cisca;
    hasValidation(): boolean;
    clearValidation(): Cisca;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cisca.AsObject;
    static toObject(includeInstance: boolean, msg: Cisca): Cisca.AsObject;
    static serializeBinaryToWriter(message: Cisca, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cisca;
    static deserializeBinaryFromReader(message: Cisca, reader: jspb.BinaryReader): Cisca;
  }

  export namespace Cisca {
    export type AsObject = {
      category: Instrument.Cisca.Category,
      securityType: string,
      issuer: string,
      hasEmbeddedLeverage?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      indexWeight: number,
      issuerMarketCapitalisation: number,
      validation?: Instrument.Validation.AsObject,
    }

    export enum Category { 
      CATEGORY_UNSPECIFIED = 0,
      NON_EQUITY_ISSUED_OR_GUARANTEED_BY_REPUBLIC_OF_SOUTH_AFRICA = 1,
      NON_EQUITY_ISSUED_OR_GUARANTEED_BY_FOREIGN_GOVERNMENT_WITH_SOVEREIGN_CURRENCY_RATING_NOT_LOWER_SOUTH_AFRICA = 2,
      NON_EQUITY_ISSUED_OR_GUARANTEED_BY_FOREIGN_GOVERNMENT_WITH_SOVEREIGN_CURRENCY_RATING_LOWER_THAN_SOUTH_AFRICA = 3,
      NON_EQUITY_ISSUED_OR_GUARANTEED_BY_SARB = 4,
      NON_EQUITY_ISSUED_OR_GUARANTEED_BY_AFRICAN_DEVELOPMENT_BANK = 5,
      NON_EQUITY_ISSUED_OR_GUARANTEED_BY_BANK_WITH_LISTED_HOLDING_COMPANY = 6,
      NON_EQUITY_ISSUED_OR_GUARANTEED_BY_PUBLIC_ENTITY_UNDER_PFMA = 9,
      NON_EQUITY_ISSUED_OR_GUARANTEED_BY_MUNICIPALITY_UNDER_LGMFMA = 10,
      NON_EQUITY_ISSUED_OR_GUARANTEED_BY_LOCAL_OR_FOREIGN_LISTED_ENTITY = 11,
      NON_EQUITY_PREFERENCE_SHARES_NOT_PART_OF_ISSUER_SHARE_CAPITAL = 12,
      NON_EQUITY_EXCHANGE_TRADED_NON_DELIVERABLE_PRECIOUS_METAL_DEBENTURE = 13,
      NON_EQUITY_CISCA_COMPLIANT_ETN = 14,
      NON_EQUITY_ISSUED_OR_GUARANTEED_BY_LISTED_AND_EXCHANGE_TRADED_ENTITY_NOT_DESCRIBED_OTHERWISE = 15,
      NON_EQUITY_ISSUED_OR_GUARANTEED_BY_UNLISTED_ENTITY_NOT_DESCRIBED_OTHERWISE_INCLUDING_PARTICIPATION_BONDS = 16,
      EQUITY_LISTED = 17,
      EQUITY_UNLISTED = 18,
      EQUITY_INVESTMENT_COMPANY = 19,
      EQUITY_PREFERENCE_SHARES_PART_OF_ISSUER_SHARE_CAPITAL = 20,
      EQUITY_EXCHANGE_TRADED_NON_DELIVERABLE_PRECIOUS_METAL_ETF = 21,
      EQUITY_CISCA_COMPLIANT_ETF = 22,
      MONEY_MARKET_ISSUED_OR_GUARANTEED_BY_REPUBLIC_OF_SOUTH_AFRICA = 23,
      MONEY_MARKET_ISSUED_OR_GUARANTEED_BY_FOREIGN_GOVERNMENT_WITH_SOVEREIGN_CURRENCY_RATING_NOT_LOWER_SOUTH_AFRICA = 24,
      MONEY_MARKET_ISSUED_OR_GUARANTEED_BY_SARB = 25,
      MONEY_MARKET_ISSUED_OR_GUARANTEED_BY_BANK_WITH_LISTED_HOLDING_COMPANY = 26,
      MONEY_MARKET_ISSUED_OR_GUARANTEED_BY_PUBLIC_ENTITY_UNDER_PFMA = 28,
      MONEY_MARKET_ISSUED_OR_GUARANTEED_BY_LOCAL_OR_FOREIGN_LISTED_ENTITY = 29,
      MONEY_MARKET_ISSUED_OR_GUARANTEED_BY_LISTED_AND_EXCHANGE_TRADED_ENTITY_NOT_DESCRIBED_OTHERWISE = 30,
      MONEY_MARKET_ISSUED_OR_GUARANTEED_BY_UNLISTED_ENTITY = 31,
      ASSETS_IN_LIQUID_FORM = 32,
    }
  }


  export class Reg30 extends jspb.Message {
    getCategory(): string;
    setCategory(value: string): Reg30;

    getInstitution(): string;
    setInstitution(value: string): Reg30;

    getValidation(): Instrument.Validation | undefined;
    setValidation(value?: Instrument.Validation): Reg30;
    hasValidation(): boolean;
    clearValidation(): Reg30;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reg30.AsObject;
    static toObject(includeInstance: boolean, msg: Reg30): Reg30.AsObject;
    static serializeBinaryToWriter(message: Reg30, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reg30;
    static deserializeBinaryFromReader(message: Reg30, reader: jspb.BinaryReader): Reg30;
  }

  export namespace Reg30 {
    export type AsObject = {
      category: string,
      institution: string,
      validation?: Instrument.Validation.AsObject,
    }
  }


  export class SarbC23 extends jspb.Message {
    getCategoryIdsList(): Array<number>;
    setCategoryIdsList(value: Array<number>): SarbC23;
    clearCategoryIdsList(): SarbC23;
    addCategoryIds(value: number, index?: number): SarbC23;

    getValidation(): Instrument.Validation | undefined;
    setValidation(value?: Instrument.Validation): SarbC23;
    hasValidation(): boolean;
    clearValidation(): SarbC23;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SarbC23.AsObject;
    static toObject(includeInstance: boolean, msg: SarbC23): SarbC23.AsObject;
    static serializeBinaryToWriter(message: SarbC23, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SarbC23;
    static deserializeBinaryFromReader(message: SarbC23, reader: jspb.BinaryReader): SarbC23;
  }

  export namespace SarbC23 {
    export type AsObject = {
      categoryIdsList: Array<number>,
      validation?: Instrument.Validation.AsObject,
    }
  }


  export class CreditRating extends jspb.Message {
    getRatingAgency(): Instrument.RatingAgency;
    setRatingAgency(value: Instrument.RatingAgency): CreditRating;

    getCreditRatingScale(): Instrument.CreditRatingScale;
    setCreditRatingScale(value: Instrument.CreditRatingScale): CreditRating;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreditRating.AsObject;
    static toObject(includeInstance: boolean, msg: CreditRating): CreditRating.AsObject;
    static serializeBinaryToWriter(message: CreditRating, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreditRating;
    static deserializeBinaryFromReader(message: CreditRating, reader: jspb.BinaryReader): CreditRating;
  }

  export namespace CreditRating {
    export type AsObject = {
      ratingAgency: Instrument.RatingAgency,
      creditRatingScale: Instrument.CreditRatingScale,
    }
  }


  export class Validation extends jspb.Message {
    getIsValid(): boolean;
    setIsValid(value: boolean): Validation;

    getInvalidFieldsList(): Array<Instrument.Validation.Field>;
    setInvalidFieldsList(value: Array<Instrument.Validation.Field>): Validation;
    clearInvalidFieldsList(): Validation;
    addInvalidFields(value?: Instrument.Validation.Field, index?: number): Instrument.Validation.Field;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Validation.AsObject;
    static toObject(includeInstance: boolean, msg: Validation): Validation.AsObject;
    static serializeBinaryToWriter(message: Validation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Validation;
    static deserializeBinaryFromReader(message: Validation, reader: jspb.BinaryReader): Validation;
  }

  export namespace Validation {
    export type AsObject = {
      isValid: boolean,
      invalidFieldsList: Array<Instrument.Validation.Field.AsObject>,
    }

    export class Field extends jspb.Message {
      getName(): string;
      setName(value: string): Field;

      getNotes(): string;
      setNotes(value: string): Field;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Field.AsObject;
      static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
      static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Field;
      static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
    }

    export namespace Field {
      export type AsObject = {
        name: string,
        notes: string,
      }
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

  export enum CreditRatingScale { 
    CREDIT_RATING_SCALE_UNSPECIFIED = 0,
    AAA = 1,
    AA1 = 2,
    AA2 = 3,
    AA3 = 4,
    A1 = 5,
    A2 = 6,
    A3 = 7,
    BAA1 = 8,
    BAA2 = 9,
    BAA3 = 10,
    BA1 = 11,
    BA2 = 12,
    BA3 = 13,
    B1 = 14,
    B2 = 15,
    B3 = 16,
    CAA1 = 17,
    CAA2 = 18,
    CAA3 = 19,
    CA = 20,
    C = 21,
    AA_PLUS = 23,
    AA = 24,
    AA_MINUS = 25,
    A_PLUS = 26,
    A = 27,
    A_MINUS = 28,
    BBB_PLUS = 29,
    BBB = 30,
    BBB_MINUS = 31,
    BB_PLUS = 32,
    BB = 33,
    BB_MINUS = 34,
    B_PLUS = 35,
    B = 36,
    B_MINUS = 37,
    CCC_PLUS = 38,
    CCC = 39,
    CCC_MINUS = 40,
    CC = 41,
    DDD = 42,
    DD = 43,
    D = 44,
  }

  export enum RatingAgency { 
    RATING_AGENCY_UNSPECIFIED = 0,
    S_AND_P = 1,
    FITCH = 2,
    MOODYS = 3,
  }

  export enum FigiType { 
    FIGI_TYPE_UNSPECIFIED = 0,
    GLOBAL = 1,
    CUSTOM = 2,
  }
}

