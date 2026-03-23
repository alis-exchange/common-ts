import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"
import * as google_type_date_pb from '../../../../google/type/date_pb'; // proto import: "google/type/date.proto"
import * as google_type_timeofday_pb from '../../../../google/type/timeofday_pb'; // proto import: "google/type/timeofday.proto"


export class Instrument extends jspb.Message {
  getName(): string;
  setName(value: string): Instrument;

  getBloombergSourceEnabled(): boolean;
  setBloombergSourceEnabled(value: boolean): Instrument;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): Instrument;

  getPriceProxy(): string;
  setPriceProxy(value: string): Instrument;

  getTotalReturnProxy(): string;
  setTotalReturnProxy(value: string): Instrument;

  getLookthroughMapping(): string;
  setLookthroughMapping(value: string): Instrument;

  getAggregationMapping(): string;
  setAggregationMapping(value: string): Instrument;

  getDisplayName(): string;
  setDisplayName(value: string): Instrument;

  getAssetClassification(): Instrument.AssetClassification | undefined;
  setAssetClassification(value?: Instrument.AssetClassification): Instrument;
  hasAssetClassification(): boolean;
  clearAssetClassification(): Instrument;

  getLookthroughConfig(): Instrument.LookthroughConfig | undefined;
  setLookthroughConfig(value?: Instrument.LookthroughConfig): Instrument;
  hasLookthroughConfig(): boolean;
  clearLookthroughConfig(): Instrument;

  getIsCashPlaceholder(): boolean;
  setIsCashPlaceholder(value: boolean): Instrument;

  getState(): Instrument.State;
  setState(value: Instrument.State): Instrument;

  getPointsMetaMap(): jspb.Map<string, Instrument.PointsMetadata>;
  clearPointsMetaMap(): Instrument;

  getBranchesMetaMap(): jspb.Map<string, Instrument.BranchMetadata>;
  clearBranchesMetaMap(): Instrument;

  getSyncedSourcesList(): Array<Source>;
  setSyncedSourcesList(value: Array<Source>): Instrument;
  clearSyncedSourcesList(): Instrument;
  addSyncedSources(value: Source, index?: number): Instrument;

  getPxBranch(): string;
  setPxBranch(value: string): Instrument;

  getPreferredSourcePriorityList(): Array<Source>;
  setPreferredSourcePriorityList(value: Array<Source>): Instrument;
  clearPreferredSourcePriorityList(): Instrument;
  addPreferredSourcePriority(value: Source, index?: number): Instrument;

  getPointsSyncConfig(): Instrument.PointsSyncConfig | undefined;
  setPointsSyncConfig(value?: Instrument.PointsSyncConfig): Instrument;
  hasPointsSyncConfig(): boolean;
  clearPointsSyncConfig(): Instrument;

  getHealthCheckConfig(): Instrument.HealthCheckConfig | undefined;
  setHealthCheckConfig(value?: Instrument.HealthCheckConfig): Instrument;
  hasHealthCheckConfig(): boolean;
  clearHealthCheckConfig(): Instrument;

  getHealthState(): InstrumentHealthState | undefined;
  setHealthState(value?: InstrumentHealthState): Instrument;
  hasHealthState(): boolean;
  clearHealthState(): Instrument;

  getETag(): string;
  setETag(value: string): Instrument;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Instrument;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Instrument;

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
    bloombergSourceEnabled: boolean,
    currencyCode: string,
    priceProxy: string,
    totalReturnProxy: string,
    lookthroughMapping: string,
    aggregationMapping: string,
    displayName: string,
    assetClassification?: Instrument.AssetClassification.AsObject,
    lookthroughConfig?: Instrument.LookthroughConfig.AsObject,
    isCashPlaceholder: boolean,
    state: Instrument.State,
    pointsMetaMap: Array<[string, Instrument.PointsMetadata.AsObject]>,
    branchesMetaMap: Array<[string, Instrument.BranchMetadata.AsObject]>,
    syncedSourcesList: Array<Source>,
    pxBranch: string,
    preferredSourcePriorityList: Array<Source>,
    pointsSyncConfig?: Instrument.PointsSyncConfig.AsObject,
    healthCheckConfig?: Instrument.HealthCheckConfig.AsObject,
    healthState?: InstrumentHealthState.AsObject,
    eTag: string,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class AssetClassification extends jspb.Message {
    getStateStreet(): Instrument.AssetClassification.StateStreet | undefined;
    setStateStreet(value?: Instrument.AssetClassification.StateStreet): AssetClassification;
    hasStateStreet(): boolean;
    clearStateStreet(): AssetClassification;

    getJtc(): Instrument.AssetClassification.JTC | undefined;
    setJtc(value?: Instrument.AssetClassification.JTC): AssetClassification;
    hasJtc(): boolean;
    clearJtc(): AssetClassification;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetClassification.AsObject;
    static toObject(includeInstance: boolean, msg: AssetClassification): AssetClassification.AsObject;
    static serializeBinaryToWriter(message: AssetClassification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetClassification;
    static deserializeBinaryFromReader(message: AssetClassification, reader: jspb.BinaryReader): AssetClassification;
  }

  export namespace AssetClassification {
    export type AsObject = {
      stateStreet?: Instrument.AssetClassification.StateStreet.AsObject,
      jtc?: Instrument.AssetClassification.JTC.AsObject,
    }

    export class StateStreet extends jspb.Message {
      getAssetCategory(): Instrument.AssetClassification.StateStreet.AssetCategory;
      setAssetCategory(value: Instrument.AssetClassification.StateStreet.AssetCategory): StateStreet;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): StateStreet.AsObject;
      static toObject(includeInstance: boolean, msg: StateStreet): StateStreet.AsObject;
      static serializeBinaryToWriter(message: StateStreet, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): StateStreet;
      static deserializeBinaryFromReader(message: StateStreet, reader: jspb.BinaryReader): StateStreet;
    }

    export namespace StateStreet {
      export type AsObject = {
        assetCategory: Instrument.AssetClassification.StateStreet.AssetCategory,
      }

      export enum AssetCategory { 
        ASSET_CATEGORY_UNSPECIFIED = 0,
        CASH = 1,
        OPTIONS = 2,
        ASSET = 3,
        CASH_EQUIVALENT = 4,
        EQUITY = 5,
        FIXED_INCOME = 6,
        LIABILITIES = 7,
        FUTURE = 8,
        FOREIGN_EXCHANGE = 9,
      }
    }


    export class JTC extends jspb.Message {
      getAssetGroup(): Instrument.AssetClassification.JTC.AssetGroup;
      setAssetGroup(value: Instrument.AssetClassification.JTC.AssetGroup): JTC;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): JTC.AsObject;
      static toObject(includeInstance: boolean, msg: JTC): JTC.AsObject;
      static serializeBinaryToWriter(message: JTC, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): JTC;
      static deserializeBinaryFromReader(message: JTC, reader: jspb.BinaryReader): JTC;
    }

    export namespace JTC {
      export type AsObject = {
        assetGroup: Instrument.AssetClassification.JTC.AssetGroup,
      }

      export enum AssetGroup { 
        ASSET_GROUP_UNSPECIFIED = 0,
        AP = 1,
        B = 2,
        BA = 3,
        BR = 4,
        CA = 5,
        CB = 6,
        CC = 7,
        CD = 8,
        CF = 9,
        CFD = 10,
        CL = 11,
        CM = 12,
        CP = 13,
        CS = 14,
        CT = 15,
        CU = 16,
        CV = 17,
        CW = 18,
        DA = 19,
        DD = 20,
        DE = 21,
        DN = 22,
        DW = 23,
        ED = 24,
        EI = 25,
        EP = 26,
        EQU = 27,
        F = 28,
        FB = 29,
        FC = 30,
        FE = 31,
        FH = 32,
        FL = 33,
        FM = 34,
        FS = 35,
        FT = 36,
        G = 37,
        G1 = 38,
        G2 = 39,
        GI = 40,
        I = 41,
        IB = 42,
        IC = 43,
        IE = 44,
        II = 45,
        IO = 46,
        IR = 47,
        IS = 48,
        IT = 49,
        IV = 50,
        IW = 51,
        JN = 52,
        LOA = 53,
        LPS = 54,
        M = 55,
        MA = 56,
        MB = 57,
        MD = 58,
        ME = 59,
        MF = 60,
        MM = 61,
        MN = 62,
        MR = 63,
        MS = 64,
        O = 65,
        OE = 66,
        P = 67,
        PL = 68,
        PO = 69,
        PRO = 70,
        R = 71,
        RE = 72,
        RL = 73,
        RP = 74,
        RR = 75,
        S = 76,
        SB = 77,
        SM = 78,
        SN = 79,
        TD = 80,
        TI = 81,
        TIP = 82,
        TL = 83,
        TN = 84,
        TO = 85,
        TW = 86,
        UN = 87,
        W = 88,
        WE = 89,
        XX = 90,
        YD = 91,
      }
    }

  }


  export class LookthroughConfig extends jspb.Message {
    getDefaultMap(): string;
    setDefaultMap(value: string): LookthroughConfig;

    getBranchLevelMapsMap(): jspb.Map<string, string>;
    clearBranchLevelMapsMap(): LookthroughConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LookthroughConfig.AsObject;
    static toObject(includeInstance: boolean, msg: LookthroughConfig): LookthroughConfig.AsObject;
    static serializeBinaryToWriter(message: LookthroughConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LookthroughConfig;
    static deserializeBinaryFromReader(message: LookthroughConfig, reader: jspb.BinaryReader): LookthroughConfig;
  }

  export namespace LookthroughConfig {
    export type AsObject = {
      defaultMap: string,
      branchLevelMapsMap: Array<[string, string]>,
    }
  }


  export class BranchMetadata extends jspb.Message {
    getStartDate(): google_type_date_pb.Date | undefined;
    setStartDate(value?: google_type_date_pb.Date): BranchMetadata;
    hasStartDate(): boolean;
    clearStartDate(): BranchMetadata;

    getEndDate(): google_type_date_pb.Date | undefined;
    setEndDate(value?: google_type_date_pb.Date): BranchMetadata;
    hasEndDate(): boolean;
    clearEndDate(): BranchMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BranchMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: BranchMetadata): BranchMetadata.AsObject;
    static serializeBinaryToWriter(message: BranchMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BranchMetadata;
    static deserializeBinaryFromReader(message: BranchMetadata, reader: jspb.BinaryReader): BranchMetadata;
  }

  export namespace BranchMetadata {
    export type AsObject = {
      startDate?: google_type_date_pb.Date.AsObject,
      endDate?: google_type_date_pb.Date.AsObject,
    }
  }


  export class PointsSyncConfig extends jspb.Message {
    getDatastreamConfig(): Instrument.PointsSyncConfig.DatastreamConfig | undefined;
    setDatastreamConfig(value?: Instrument.PointsSyncConfig.DatastreamConfig): PointsSyncConfig;
    hasDatastreamConfig(): boolean;
    clearDatastreamConfig(): PointsSyncConfig;

    getBloombergConfig(): Instrument.PointsSyncConfig.BloombergConfig | undefined;
    setBloombergConfig(value?: Instrument.PointsSyncConfig.BloombergConfig): PointsSyncConfig;
    hasBloombergConfig(): boolean;
    clearBloombergConfig(): PointsSyncConfig;

    getAlisPxConfig(): Instrument.PointsSyncConfig.AlisPxConfig | undefined;
    setAlisPxConfig(value?: Instrument.PointsSyncConfig.AlisPxConfig): PointsSyncConfig;
    hasAlisPxConfig(): boolean;
    clearAlisPxConfig(): PointsSyncConfig;

    getJseConfig(): Instrument.PointsSyncConfig.JseConfig | undefined;
    setJseConfig(value?: Instrument.PointsSyncConfig.JseConfig): PointsSyncConfig;
    hasJseConfig(): boolean;
    clearJseConfig(): PointsSyncConfig;

    getRezcoFaConfig(): Instrument.PointsSyncConfig.RezcoFaConfig | undefined;
    setRezcoFaConfig(value?: Instrument.PointsSyncConfig.RezcoFaConfig): PointsSyncConfig;
    hasRezcoFaConfig(): boolean;
    clearRezcoFaConfig(): PointsSyncConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PointsSyncConfig.AsObject;
    static toObject(includeInstance: boolean, msg: PointsSyncConfig): PointsSyncConfig.AsObject;
    static serializeBinaryToWriter(message: PointsSyncConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PointsSyncConfig;
    static deserializeBinaryFromReader(message: PointsSyncConfig, reader: jspb.BinaryReader): PointsSyncConfig;
  }

  export namespace PointsSyncConfig {
    export type AsObject = {
      datastreamConfig?: Instrument.PointsSyncConfig.DatastreamConfig.AsObject,
      bloombergConfig?: Instrument.PointsSyncConfig.BloombergConfig.AsObject,
      alisPxConfig?: Instrument.PointsSyncConfig.AlisPxConfig.AsObject,
      jseConfig?: Instrument.PointsSyncConfig.JseConfig.AsObject,
      rezcoFaConfig?: Instrument.PointsSyncConfig.RezcoFaConfig.AsObject,
    }

    export class DatastreamConfig extends jspb.Message {
      getEnabled(): boolean;
      setEnabled(value: boolean): DatastreamConfig;

      getPointsMeta(): Instrument.PointsMetadata | undefined;
      setPointsMeta(value?: Instrument.PointsMetadata): DatastreamConfig;
      hasPointsMeta(): boolean;
      clearPointsMeta(): DatastreamConfig;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DatastreamConfig.AsObject;
      static toObject(includeInstance: boolean, msg: DatastreamConfig): DatastreamConfig.AsObject;
      static serializeBinaryToWriter(message: DatastreamConfig, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DatastreamConfig;
      static deserializeBinaryFromReader(message: DatastreamConfig, reader: jspb.BinaryReader): DatastreamConfig;
    }

    export namespace DatastreamConfig {
      export type AsObject = {
        enabled: boolean,
        pointsMeta?: Instrument.PointsMetadata.AsObject,
      }
    }


    export class BloombergConfig extends jspb.Message {
      getEnabled(): boolean;
      setEnabled(value: boolean): BloombergConfig;

      getSyncActivationTime(): google_type_timeofday_pb.TimeOfDay | undefined;
      setSyncActivationTime(value?: google_type_timeofday_pb.TimeOfDay): BloombergConfig;
      hasSyncActivationTime(): boolean;
      clearSyncActivationTime(): BloombergConfig;

      getPointsMeta(): Instrument.PointsMetadata | undefined;
      setPointsMeta(value?: Instrument.PointsMetadata): BloombergConfig;
      hasPointsMeta(): boolean;
      clearPointsMeta(): BloombergConfig;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BloombergConfig.AsObject;
      static toObject(includeInstance: boolean, msg: BloombergConfig): BloombergConfig.AsObject;
      static serializeBinaryToWriter(message: BloombergConfig, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BloombergConfig;
      static deserializeBinaryFromReader(message: BloombergConfig, reader: jspb.BinaryReader): BloombergConfig;
    }

    export namespace BloombergConfig {
      export type AsObject = {
        enabled: boolean,
        syncActivationTime?: google_type_timeofday_pb.TimeOfDay.AsObject,
        pointsMeta?: Instrument.PointsMetadata.AsObject,
      }
    }


    export class AlisPxConfig extends jspb.Message {
      getEnabled(): boolean;
      setEnabled(value: boolean): AlisPxConfig;

      getPointsMeta(): Instrument.PointsMetadata | undefined;
      setPointsMeta(value?: Instrument.PointsMetadata): AlisPxConfig;
      hasPointsMeta(): boolean;
      clearPointsMeta(): AlisPxConfig;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AlisPxConfig.AsObject;
      static toObject(includeInstance: boolean, msg: AlisPxConfig): AlisPxConfig.AsObject;
      static serializeBinaryToWriter(message: AlisPxConfig, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AlisPxConfig;
      static deserializeBinaryFromReader(message: AlisPxConfig, reader: jspb.BinaryReader): AlisPxConfig;
    }

    export namespace AlisPxConfig {
      export type AsObject = {
        enabled: boolean,
        pointsMeta?: Instrument.PointsMetadata.AsObject,
      }
    }


    export class JseConfig extends jspb.Message {
      getEnabled(): boolean;
      setEnabled(value: boolean): JseConfig;

      getPointsMeta(): Instrument.PointsMetadata | undefined;
      setPointsMeta(value?: Instrument.PointsMetadata): JseConfig;
      hasPointsMeta(): boolean;
      clearPointsMeta(): JseConfig;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): JseConfig.AsObject;
      static toObject(includeInstance: boolean, msg: JseConfig): JseConfig.AsObject;
      static serializeBinaryToWriter(message: JseConfig, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): JseConfig;
      static deserializeBinaryFromReader(message: JseConfig, reader: jspb.BinaryReader): JseConfig;
    }

    export namespace JseConfig {
      export type AsObject = {
        enabled: boolean,
        pointsMeta?: Instrument.PointsMetadata.AsObject,
      }
    }


    export class RezcoFaConfig extends jspb.Message {
      getEnabled(): boolean;
      setEnabled(value: boolean): RezcoFaConfig;

      getPointsMeta(): Instrument.PointsMetadata | undefined;
      setPointsMeta(value?: Instrument.PointsMetadata): RezcoFaConfig;
      hasPointsMeta(): boolean;
      clearPointsMeta(): RezcoFaConfig;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RezcoFaConfig.AsObject;
      static toObject(includeInstance: boolean, msg: RezcoFaConfig): RezcoFaConfig.AsObject;
      static serializeBinaryToWriter(message: RezcoFaConfig, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RezcoFaConfig;
      static deserializeBinaryFromReader(message: RezcoFaConfig, reader: jspb.BinaryReader): RezcoFaConfig;
    }

    export namespace RezcoFaConfig {
      export type AsObject = {
        enabled: boolean,
        pointsMeta?: Instrument.PointsMetadata.AsObject,
      }
    }

  }


  export class HealthCheckConfig extends jspb.Message {
    getExcludedPointsFieldsList(): Array<string>;
    setExcludedPointsFieldsList(value: Array<string>): HealthCheckConfig;
    clearExcludedPointsFieldsList(): HealthCheckConfig;
    addExcludedPointsFields(value: string, index?: number): HealthCheckConfig;

    getMaxFillForwardDays(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxFillForwardDays(value?: google_protobuf_wrappers_pb.UInt32Value): HealthCheckConfig;
    hasMaxFillForwardDays(): boolean;
    clearMaxFillForwardDays(): HealthCheckConfig;

    getIncludeWeekends(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIncludeWeekends(value?: google_protobuf_wrappers_pb.BoolValue): HealthCheckConfig;
    hasIncludeWeekends(): boolean;
    clearIncludeWeekends(): HealthCheckConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheckConfig.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheckConfig): HealthCheckConfig.AsObject;
    static serializeBinaryToWriter(message: HealthCheckConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheckConfig;
    static deserializeBinaryFromReader(message: HealthCheckConfig, reader: jspb.BinaryReader): HealthCheckConfig;
  }

  export namespace HealthCheckConfig {
    export type AsObject = {
      excludedPointsFieldsList: Array<string>,
      maxFillForwardDays?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
      includeWeekends?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
  }


  export class PointsMetadata extends jspb.Message {
    getStartDate(): google_type_date_pb.Date | undefined;
    setStartDate(value?: google_type_date_pb.Date): PointsMetadata;
    hasStartDate(): boolean;
    clearStartDate(): PointsMetadata;

    getEndDate(): google_type_date_pb.Date | undefined;
    setEndDate(value?: google_type_date_pb.Date): PointsMetadata;
    hasEndDate(): boolean;
    clearEndDate(): PointsMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PointsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: PointsMetadata): PointsMetadata.AsObject;
    static serializeBinaryToWriter(message: PointsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PointsMetadata;
    static deserializeBinaryFromReader(message: PointsMetadata, reader: jspb.BinaryReader): PointsMetadata;
  }

  export namespace PointsMetadata {
    export type AsObject = {
      startDate?: google_type_date_pb.Date.AsObject,
      endDate?: google_type_date_pb.Date.AsObject,
    }
  }


  export enum State { 
    STATE_UNSPECIFIED = 0,
    ACTIVE = 1,
  }
}

export class InstrumentHealthState extends jspb.Message {
  getResult(): InstrumentHealthState.HealthCheckResult;
  setResult(value: InstrumentHealthState.HealthCheckResult): InstrumentHealthState;

  getReason(): string;
  setReason(value: string): InstrumentHealthState;

  getNotes(): string;
  setNotes(value: string): InstrumentHealthState;

  getReferenceDataCheck(): InstrumentHealthState.ReferenceDataCheck | undefined;
  setReferenceDataCheck(value?: InstrumentHealthState.ReferenceDataCheck): InstrumentHealthState;
  hasReferenceDataCheck(): boolean;
  clearReferenceDataCheck(): InstrumentHealthState;

  getPointsCoverageCheck(): InstrumentHealthState.PointsCoverageCheck | undefined;
  setPointsCoverageCheck(value?: InstrumentHealthState.PointsCoverageCheck): InstrumentHealthState;
  hasPointsCoverageCheck(): boolean;
  clearPointsCoverageCheck(): InstrumentHealthState;

  getPointsQualityCheck(): InstrumentHealthState.PointsQualityCheck | undefined;
  setPointsQualityCheck(value?: InstrumentHealthState.PointsQualityCheck): InstrumentHealthState;
  hasPointsQualityCheck(): boolean;
  clearPointsQualityCheck(): InstrumentHealthState;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): InstrumentHealthState;
  hasUpdateTime(): boolean;
  clearUpdateTime(): InstrumentHealthState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentHealthState.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentHealthState): InstrumentHealthState.AsObject;
  static serializeBinaryToWriter(message: InstrumentHealthState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentHealthState;
  static deserializeBinaryFromReader(message: InstrumentHealthState, reader: jspb.BinaryReader): InstrumentHealthState;
}

export namespace InstrumentHealthState {
  export type AsObject = {
    result: InstrumentHealthState.HealthCheckResult,
    reason: string,
    notes: string,
    referenceDataCheck?: InstrumentHealthState.ReferenceDataCheck.AsObject,
    pointsCoverageCheck?: InstrumentHealthState.PointsCoverageCheck.AsObject,
    pointsQualityCheck?: InstrumentHealthState.PointsQualityCheck.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class ReferenceDataCheck extends jspb.Message {
    getResult(): InstrumentHealthState.HealthCheckResult;
    setResult(value: InstrumentHealthState.HealthCheckResult): ReferenceDataCheck;

    getReason(): string;
    setReason(value: string): ReferenceDataCheck;

    getNotes(): string;
    setNotes(value: string): ReferenceDataCheck;

    getInstrumentExists(): InstrumentHealthState.ReferenceDataCheck.InstrumentExistsCheck | undefined;
    setInstrumentExists(value?: InstrumentHealthState.ReferenceDataCheck.InstrumentExistsCheck): ReferenceDataCheck;
    hasInstrumentExists(): boolean;
    clearInstrumentExists(): ReferenceDataCheck;

    getCurrencyCodeValid(): InstrumentHealthState.ReferenceDataCheck.CurrencyCodeValidCheck | undefined;
    setCurrencyCodeValid(value?: InstrumentHealthState.ReferenceDataCheck.CurrencyCodeValidCheck): ReferenceDataCheck;
    hasCurrencyCodeValid(): boolean;
    clearCurrencyCodeValid(): ReferenceDataCheck;

    getSourcePrerequisites(): InstrumentHealthState.ReferenceDataCheck.SourcePrerequisitesCheck | undefined;
    setSourcePrerequisites(value?: InstrumentHealthState.ReferenceDataCheck.SourcePrerequisitesCheck): ReferenceDataCheck;
    hasSourcePrerequisites(): boolean;
    clearSourcePrerequisites(): ReferenceDataCheck;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferenceDataCheck.AsObject;
    static toObject(includeInstance: boolean, msg: ReferenceDataCheck): ReferenceDataCheck.AsObject;
    static serializeBinaryToWriter(message: ReferenceDataCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferenceDataCheck;
    static deserializeBinaryFromReader(message: ReferenceDataCheck, reader: jspb.BinaryReader): ReferenceDataCheck;
  }

  export namespace ReferenceDataCheck {
    export type AsObject = {
      result: InstrumentHealthState.HealthCheckResult,
      reason: string,
      notes: string,
      instrumentExists?: InstrumentHealthState.ReferenceDataCheck.InstrumentExistsCheck.AsObject,
      currencyCodeValid?: InstrumentHealthState.ReferenceDataCheck.CurrencyCodeValidCheck.AsObject,
      sourcePrerequisites?: InstrumentHealthState.ReferenceDataCheck.SourcePrerequisitesCheck.AsObject,
    }

    export class InstrumentExistsCheck extends jspb.Message {
      getResult(): InstrumentHealthState.HealthCheckResult;
      setResult(value: InstrumentHealthState.HealthCheckResult): InstrumentExistsCheck;

      getReason(): string;
      setReason(value: string): InstrumentExistsCheck;

      getNotes(): string;
      setNotes(value: string): InstrumentExistsCheck;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): InstrumentExistsCheck.AsObject;
      static toObject(includeInstance: boolean, msg: InstrumentExistsCheck): InstrumentExistsCheck.AsObject;
      static serializeBinaryToWriter(message: InstrumentExistsCheck, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): InstrumentExistsCheck;
      static deserializeBinaryFromReader(message: InstrumentExistsCheck, reader: jspb.BinaryReader): InstrumentExistsCheck;
    }

    export namespace InstrumentExistsCheck {
      export type AsObject = {
        result: InstrumentHealthState.HealthCheckResult,
        reason: string,
        notes: string,
      }
    }


    export class CurrencyCodeValidCheck extends jspb.Message {
      getResult(): InstrumentHealthState.HealthCheckResult;
      setResult(value: InstrumentHealthState.HealthCheckResult): CurrencyCodeValidCheck;

      getReason(): string;
      setReason(value: string): CurrencyCodeValidCheck;

      getNotes(): string;
      setNotes(value: string): CurrencyCodeValidCheck;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CurrencyCodeValidCheck.AsObject;
      static toObject(includeInstance: boolean, msg: CurrencyCodeValidCheck): CurrencyCodeValidCheck.AsObject;
      static serializeBinaryToWriter(message: CurrencyCodeValidCheck, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CurrencyCodeValidCheck;
      static deserializeBinaryFromReader(message: CurrencyCodeValidCheck, reader: jspb.BinaryReader): CurrencyCodeValidCheck;
    }

    export namespace CurrencyCodeValidCheck {
      export type AsObject = {
        result: InstrumentHealthState.HealthCheckResult,
        reason: string,
        notes: string,
      }
    }


    export class SourcePrerequisitesCheck extends jspb.Message {
      getResult(): InstrumentHealthState.HealthCheckResult;
      setResult(value: InstrumentHealthState.HealthCheckResult): SourcePrerequisitesCheck;

      getReason(): string;
      setReason(value: string): SourcePrerequisitesCheck;

      getNotes(): string;
      setNotes(value: string): SourcePrerequisitesCheck;

      getSourceChecksList(): Array<InstrumentHealthState.ReferenceDataCheck.SourcePrerequisitesCheck.SourceCheck>;
      setSourceChecksList(value: Array<InstrumentHealthState.ReferenceDataCheck.SourcePrerequisitesCheck.SourceCheck>): SourcePrerequisitesCheck;
      clearSourceChecksList(): SourcePrerequisitesCheck;
      addSourceChecks(value?: InstrumentHealthState.ReferenceDataCheck.SourcePrerequisitesCheck.SourceCheck, index?: number): InstrumentHealthState.ReferenceDataCheck.SourcePrerequisitesCheck.SourceCheck;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SourcePrerequisitesCheck.AsObject;
      static toObject(includeInstance: boolean, msg: SourcePrerequisitesCheck): SourcePrerequisitesCheck.AsObject;
      static serializeBinaryToWriter(message: SourcePrerequisitesCheck, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SourcePrerequisitesCheck;
      static deserializeBinaryFromReader(message: SourcePrerequisitesCheck, reader: jspb.BinaryReader): SourcePrerequisitesCheck;
    }

    export namespace SourcePrerequisitesCheck {
      export type AsObject = {
        result: InstrumentHealthState.HealthCheckResult,
        reason: string,
        notes: string,
        sourceChecksList: Array<InstrumentHealthState.ReferenceDataCheck.SourcePrerequisitesCheck.SourceCheck.AsObject>,
      }

      export class SourceCheck extends jspb.Message {
        getResult(): InstrumentHealthState.HealthCheckResult;
        setResult(value: InstrumentHealthState.HealthCheckResult): SourceCheck;

        getReason(): string;
        setReason(value: string): SourceCheck;

        getNotes(): string;
        setNotes(value: string): SourceCheck;

        getSource(): Source;
        setSource(value: Source): SourceCheck;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SourceCheck.AsObject;
        static toObject(includeInstance: boolean, msg: SourceCheck): SourceCheck.AsObject;
        static serializeBinaryToWriter(message: SourceCheck, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SourceCheck;
        static deserializeBinaryFromReader(message: SourceCheck, reader: jspb.BinaryReader): SourceCheck;
      }

      export namespace SourceCheck {
        export type AsObject = {
          result: InstrumentHealthState.HealthCheckResult,
          reason: string,
          notes: string,
          source: Source,
        }
      }

    }

  }


  export class PointsCoverageCheck extends jspb.Message {
    getResult(): InstrumentHealthState.HealthCheckResult;
    setResult(value: InstrumentHealthState.HealthCheckResult): PointsCoverageCheck;

    getReason(): string;
    setReason(value: string): PointsCoverageCheck;

    getNotes(): string;
    setNotes(value: string): PointsCoverageCheck;

    getMissingPoints(): InstrumentHealthState.PointsCoverageCheck.MissingPointsCheck | undefined;
    setMissingPoints(value?: InstrumentHealthState.PointsCoverageCheck.MissingPointsCheck): PointsCoverageCheck;
    hasMissingPoints(): boolean;
    clearMissingPoints(): PointsCoverageCheck;

    getMissingFields(): InstrumentHealthState.PointsCoverageCheck.MissingFieldsCheck | undefined;
    setMissingFields(value?: InstrumentHealthState.PointsCoverageCheck.MissingFieldsCheck): PointsCoverageCheck;
    hasMissingFields(): boolean;
    clearMissingFields(): PointsCoverageCheck;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PointsCoverageCheck.AsObject;
    static toObject(includeInstance: boolean, msg: PointsCoverageCheck): PointsCoverageCheck.AsObject;
    static serializeBinaryToWriter(message: PointsCoverageCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PointsCoverageCheck;
    static deserializeBinaryFromReader(message: PointsCoverageCheck, reader: jspb.BinaryReader): PointsCoverageCheck;
  }

  export namespace PointsCoverageCheck {
    export type AsObject = {
      result: InstrumentHealthState.HealthCheckResult,
      reason: string,
      notes: string,
      missingPoints?: InstrumentHealthState.PointsCoverageCheck.MissingPointsCheck.AsObject,
      missingFields?: InstrumentHealthState.PointsCoverageCheck.MissingFieldsCheck.AsObject,
    }

    export class MissingPointsCheck extends jspb.Message {
      getResult(): InstrumentHealthState.HealthCheckResult;
      setResult(value: InstrumentHealthState.HealthCheckResult): MissingPointsCheck;

      getReason(): string;
      setReason(value: string): MissingPointsCheck;

      getNotes(): string;
      setNotes(value: string): MissingPointsCheck;

      getMissingPointsList(): Array<string>;
      setMissingPointsList(value: Array<string>): MissingPointsCheck;
      clearMissingPointsList(): MissingPointsCheck;
      addMissingPoints(value: string, index?: number): MissingPointsCheck;

      getTotalPointsCount(): number;
      setTotalPointsCount(value: number): MissingPointsCheck;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MissingPointsCheck.AsObject;
      static toObject(includeInstance: boolean, msg: MissingPointsCheck): MissingPointsCheck.AsObject;
      static serializeBinaryToWriter(message: MissingPointsCheck, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MissingPointsCheck;
      static deserializeBinaryFromReader(message: MissingPointsCheck, reader: jspb.BinaryReader): MissingPointsCheck;
    }

    export namespace MissingPointsCheck {
      export type AsObject = {
        result: InstrumentHealthState.HealthCheckResult,
        reason: string,
        notes: string,
        missingPointsList: Array<string>,
        totalPointsCount: number,
      }
    }


    export class MissingFieldsCheck extends jspb.Message {
      getResult(): InstrumentHealthState.HealthCheckResult;
      setResult(value: InstrumentHealthState.HealthCheckResult): MissingFieldsCheck;

      getReason(): string;
      setReason(value: string): MissingFieldsCheck;

      getNotes(): string;
      setNotes(value: string): MissingFieldsCheck;

      getPointsMissingFieldsList(): Array<InstrumentHealthState.PointsCoverageCheck.MissingFieldsCheck.PointMissingFields>;
      setPointsMissingFieldsList(value: Array<InstrumentHealthState.PointsCoverageCheck.MissingFieldsCheck.PointMissingFields>): MissingFieldsCheck;
      clearPointsMissingFieldsList(): MissingFieldsCheck;
      addPointsMissingFields(value?: InstrumentHealthState.PointsCoverageCheck.MissingFieldsCheck.PointMissingFields, index?: number): InstrumentHealthState.PointsCoverageCheck.MissingFieldsCheck.PointMissingFields;

      getTotalPointsCount(): number;
      setTotalPointsCount(value: number): MissingFieldsCheck;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MissingFieldsCheck.AsObject;
      static toObject(includeInstance: boolean, msg: MissingFieldsCheck): MissingFieldsCheck.AsObject;
      static serializeBinaryToWriter(message: MissingFieldsCheck, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MissingFieldsCheck;
      static deserializeBinaryFromReader(message: MissingFieldsCheck, reader: jspb.BinaryReader): MissingFieldsCheck;
    }

    export namespace MissingFieldsCheck {
      export type AsObject = {
        result: InstrumentHealthState.HealthCheckResult,
        reason: string,
        notes: string,
        pointsMissingFieldsList: Array<InstrumentHealthState.PointsCoverageCheck.MissingFieldsCheck.PointMissingFields.AsObject>,
        totalPointsCount: number,
      }

      export class PointMissingFields extends jspb.Message {
        getPoint(): string;
        setPoint(value: string): PointMissingFields;

        getMissingFieldsList(): Array<string>;
        setMissingFieldsList(value: Array<string>): PointMissingFields;
        clearMissingFieldsList(): PointMissingFields;
        addMissingFields(value: string, index?: number): PointMissingFields;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PointMissingFields.AsObject;
        static toObject(includeInstance: boolean, msg: PointMissingFields): PointMissingFields.AsObject;
        static serializeBinaryToWriter(message: PointMissingFields, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PointMissingFields;
        static deserializeBinaryFromReader(message: PointMissingFields, reader: jspb.BinaryReader): PointMissingFields;
      }

      export namespace PointMissingFields {
        export type AsObject = {
          point: string,
          missingFieldsList: Array<string>,
        }
      }

    }

  }


  export class PointsQualityCheck extends jspb.Message {
    getResult(): InstrumentHealthState.HealthCheckResult;
    setResult(value: InstrumentHealthState.HealthCheckResult): PointsQualityCheck;

    getReason(): string;
    setReason(value: string): PointsQualityCheck;

    getNotes(): string;
    setNotes(value: string): PointsQualityCheck;

    getFillForwardedPoints(): InstrumentHealthState.PointsQualityCheck.FillForwardedPointsCheck | undefined;
    setFillForwardedPoints(value?: InstrumentHealthState.PointsQualityCheck.FillForwardedPointsCheck): PointsQualityCheck;
    hasFillForwardedPoints(): boolean;
    clearFillForwardedPoints(): PointsQualityCheck;

    getZeroReturnsPoints(): InstrumentHealthState.PointsQualityCheck.ZeroReturnsPointsCheck | undefined;
    setZeroReturnsPoints(value?: InstrumentHealthState.PointsQualityCheck.ZeroReturnsPointsCheck): PointsQualityCheck;
    hasZeroReturnsPoints(): boolean;
    clearZeroReturnsPoints(): PointsQualityCheck;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PointsQualityCheck.AsObject;
    static toObject(includeInstance: boolean, msg: PointsQualityCheck): PointsQualityCheck.AsObject;
    static serializeBinaryToWriter(message: PointsQualityCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PointsQualityCheck;
    static deserializeBinaryFromReader(message: PointsQualityCheck, reader: jspb.BinaryReader): PointsQualityCheck;
  }

  export namespace PointsQualityCheck {
    export type AsObject = {
      result: InstrumentHealthState.HealthCheckResult,
      reason: string,
      notes: string,
      fillForwardedPoints?: InstrumentHealthState.PointsQualityCheck.FillForwardedPointsCheck.AsObject,
      zeroReturnsPoints?: InstrumentHealthState.PointsQualityCheck.ZeroReturnsPointsCheck.AsObject,
    }

    export class FillForwardedPointsCheck extends jspb.Message {
      getResult(): InstrumentHealthState.HealthCheckResult;
      setResult(value: InstrumentHealthState.HealthCheckResult): FillForwardedPointsCheck;

      getReason(): string;
      setReason(value: string): FillForwardedPointsCheck;

      getNotes(): string;
      setNotes(value: string): FillForwardedPointsCheck;

      getFillForwardedPointsList(): Array<string>;
      setFillForwardedPointsList(value: Array<string>): FillForwardedPointsCheck;
      clearFillForwardedPointsList(): FillForwardedPointsCheck;
      addFillForwardedPoints(value: string, index?: number): FillForwardedPointsCheck;

      getTotalPointsCount(): number;
      setTotalPointsCount(value: number): FillForwardedPointsCheck;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): FillForwardedPointsCheck.AsObject;
      static toObject(includeInstance: boolean, msg: FillForwardedPointsCheck): FillForwardedPointsCheck.AsObject;
      static serializeBinaryToWriter(message: FillForwardedPointsCheck, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): FillForwardedPointsCheck;
      static deserializeBinaryFromReader(message: FillForwardedPointsCheck, reader: jspb.BinaryReader): FillForwardedPointsCheck;
    }

    export namespace FillForwardedPointsCheck {
      export type AsObject = {
        result: InstrumentHealthState.HealthCheckResult,
        reason: string,
        notes: string,
        fillForwardedPointsList: Array<string>,
        totalPointsCount: number,
      }
    }


    export class ZeroReturnsPointsCheck extends jspb.Message {
      getResult(): InstrumentHealthState.HealthCheckResult;
      setResult(value: InstrumentHealthState.HealthCheckResult): ZeroReturnsPointsCheck;

      getReason(): string;
      setReason(value: string): ZeroReturnsPointsCheck;

      getNotes(): string;
      setNotes(value: string): ZeroReturnsPointsCheck;

      getPointsZeroReturnFieldsList(): Array<InstrumentHealthState.PointsQualityCheck.ZeroReturnsPointsCheck.PointZeroReturnFields>;
      setPointsZeroReturnFieldsList(value: Array<InstrumentHealthState.PointsQualityCheck.ZeroReturnsPointsCheck.PointZeroReturnFields>): ZeroReturnsPointsCheck;
      clearPointsZeroReturnFieldsList(): ZeroReturnsPointsCheck;
      addPointsZeroReturnFields(value?: InstrumentHealthState.PointsQualityCheck.ZeroReturnsPointsCheck.PointZeroReturnFields, index?: number): InstrumentHealthState.PointsQualityCheck.ZeroReturnsPointsCheck.PointZeroReturnFields;

      getTotalPointsCount(): number;
      setTotalPointsCount(value: number): ZeroReturnsPointsCheck;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ZeroReturnsPointsCheck.AsObject;
      static toObject(includeInstance: boolean, msg: ZeroReturnsPointsCheck): ZeroReturnsPointsCheck.AsObject;
      static serializeBinaryToWriter(message: ZeroReturnsPointsCheck, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ZeroReturnsPointsCheck;
      static deserializeBinaryFromReader(message: ZeroReturnsPointsCheck, reader: jspb.BinaryReader): ZeroReturnsPointsCheck;
    }

    export namespace ZeroReturnsPointsCheck {
      export type AsObject = {
        result: InstrumentHealthState.HealthCheckResult,
        reason: string,
        notes: string,
        pointsZeroReturnFieldsList: Array<InstrumentHealthState.PointsQualityCheck.ZeroReturnsPointsCheck.PointZeroReturnFields.AsObject>,
        totalPointsCount: number,
      }

      export class PointZeroReturnFields extends jspb.Message {
        getPoint(): string;
        setPoint(value: string): PointZeroReturnFields;

        getZeroReturnFieldsList(): Array<string>;
        setZeroReturnFieldsList(value: Array<string>): PointZeroReturnFields;
        clearZeroReturnFieldsList(): PointZeroReturnFields;
        addZeroReturnFields(value: string, index?: number): PointZeroReturnFields;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PointZeroReturnFields.AsObject;
        static toObject(includeInstance: boolean, msg: PointZeroReturnFields): PointZeroReturnFields.AsObject;
        static serializeBinaryToWriter(message: PointZeroReturnFields, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PointZeroReturnFields;
        static deserializeBinaryFromReader(message: PointZeroReturnFields, reader: jspb.BinaryReader): PointZeroReturnFields;
      }

      export namespace PointZeroReturnFields {
        export type AsObject = {
          point: string,
          zeroReturnFieldsList: Array<string>,
        }
      }

    }

  }


  export enum HealthCheckResult { 
    HEALTH_CHECK_RESULT_UNSPECIFIED = 0,
    PASS = 1,
    PASS_WITH_WARNINGS = 2,
    FAIL = 3,
  }
}

export enum Source { 
  SOURCE_UNSPECIFIED = 0,
  CUSTOM = 1,
  DATASTREAM = 2,
  BLOOMBERG = 3,
  OPENFIGI = 4,
  JSE = 5,
  ALIS_IN = 6,
  ALIS_PX = 7,
  REZCO_FA = 8,
  MORNINGSTAR = 9,
}
