import * as jspb from 'google-protobuf'

import * as alis_open_iam_v1_user_pb from '../../../../alis/open/iam/v1/user_pb'; // proto import: "alis/open/iam/v1/user.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"


export class IamConfig extends jspb.Message {
  getAuthProviders(): IamConfig.AuthProviders | undefined;
  setAuthProviders(value?: IamConfig.AuthProviders): IamConfig;
  hasAuthProviders(): boolean;
  clearAuthProviders(): IamConfig;

  getSelfSignupSpec(): IamConfig.SelfSignupSpec | undefined;
  setSelfSignupSpec(value?: IamConfig.SelfSignupSpec): IamConfig;
  hasSelfSignupSpec(): boolean;
  clearSelfSignupSpec(): IamConfig;

  getLogoUri(): string;
  setLogoUri(value: string): IamConfig;

  getCookieDomainsList(): Array<IamConfig.CookieDomain>;
  setCookieDomainsList(value: Array<IamConfig.CookieDomain>): IamConfig;
  clearCookieDomainsList(): IamConfig;
  addCookieDomains(value?: IamConfig.CookieDomain, index?: number): IamConfig.CookieDomain;

  getGoogleGroup(): string;
  setGoogleGroup(value: string): IamConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IamConfig.AsObject;
  static toObject(includeInstance: boolean, msg: IamConfig): IamConfig.AsObject;
  static serializeBinaryToWriter(message: IamConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IamConfig;
  static deserializeBinaryFromReader(message: IamConfig, reader: jspb.BinaryReader): IamConfig;
}

export namespace IamConfig {
  export type AsObject = {
    authProviders?: IamConfig.AuthProviders.AsObject,
    selfSignupSpec?: IamConfig.SelfSignupSpec.AsObject,
    logoUri: string,
    cookieDomainsList: Array<IamConfig.CookieDomain.AsObject>,
    googleGroup: string,
  }

  export class AuthProviders extends jspb.Message {
    getGoogle(): OauthProvider | undefined;
    setGoogle(value?: OauthProvider): AuthProviders;
    hasGoogle(): boolean;
    clearGoogle(): AuthProviders;

    getMicrosoft(): OauthProvider | undefined;
    setMicrosoft(value?: OauthProvider): AuthProviders;
    hasMicrosoft(): boolean;
    clearMicrosoft(): AuthProviders;

    getEmail(): EmailAuthProvider | undefined;
    setEmail(value?: EmailAuthProvider): AuthProviders;
    hasEmail(): boolean;
    clearEmail(): AuthProviders;

    getLinkedin(): OauthProvider | undefined;
    setLinkedin(value?: OauthProvider): AuthProviders;
    hasLinkedin(): boolean;
    clearLinkedin(): AuthProviders;

    getApple(): AppleAuthProvider | undefined;
    setApple(value?: AppleAuthProvider): AuthProviders;
    hasApple(): boolean;
    clearApple(): AuthProviders;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthProviders.AsObject;
    static toObject(includeInstance: boolean, msg: AuthProviders): AuthProviders.AsObject;
    static serializeBinaryToWriter(message: AuthProviders, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthProviders;
    static deserializeBinaryFromReader(message: AuthProviders, reader: jspb.BinaryReader): AuthProviders;
  }

  export namespace AuthProviders {
    export type AsObject = {
      google?: OauthProvider.AsObject,
      microsoft?: OauthProvider.AsObject,
      email?: EmailAuthProvider.AsObject,
      linkedin?: OauthProvider.AsObject,
      apple?: AppleAuthProvider.AsObject,
    }
  }


  export class SelfSignupSpec extends jspb.Message {
    getDomainProvidersList(): Array<IamConfig.SelfSignupSpec.DomainProvider>;
    setDomainProvidersList(value: Array<IamConfig.SelfSignupSpec.DomainProvider>): SelfSignupSpec;
    clearDomainProvidersList(): SelfSignupSpec;
    addDomainProviders(value?: IamConfig.SelfSignupSpec.DomainProvider, index?: number): IamConfig.SelfSignupSpec.DomainProvider;

    getDefaultRolesList(): Array<string>;
    setDefaultRolesList(value: Array<string>): SelfSignupSpec;
    clearDefaultRolesList(): SelfSignupSpec;
    addDefaultRoles(value: string, index?: number): SelfSignupSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelfSignupSpec.AsObject;
    static toObject(includeInstance: boolean, msg: SelfSignupSpec): SelfSignupSpec.AsObject;
    static serializeBinaryToWriter(message: SelfSignupSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelfSignupSpec;
    static deserializeBinaryFromReader(message: SelfSignupSpec, reader: jspb.BinaryReader): SelfSignupSpec;
  }

  export namespace SelfSignupSpec {
    export type AsObject = {
      domainProvidersList: Array<IamConfig.SelfSignupSpec.DomainProvider.AsObject>,
      defaultRolesList: Array<string>,
    }

    export class DomainProvider extends jspb.Message {
      getDomain(): string;
      setDomain(value: string): DomainProvider;

      getIdentityProvider(): alis_open_iam_v1_user_pb.IdentityProvider;
      setIdentityProvider(value: alis_open_iam_v1_user_pb.IdentityProvider): DomainProvider;

      getForceLogin(): boolean;
      setForceLogin(value: boolean): DomainProvider;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DomainProvider.AsObject;
      static toObject(includeInstance: boolean, msg: DomainProvider): DomainProvider.AsObject;
      static serializeBinaryToWriter(message: DomainProvider, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DomainProvider;
      static deserializeBinaryFromReader(message: DomainProvider, reader: jspb.BinaryReader): DomainProvider;
    }

    export namespace DomainProvider {
      export type AsObject = {
        domain: string,
        identityProvider: alis_open_iam_v1_user_pb.IdentityProvider,
        forceLogin: boolean,
      }
    }

  }


  export class CookieDomain extends jspb.Message {
    getHost(): string;
    setHost(value: string): CookieDomain;

    getDomain(): string;
    setDomain(value: string): CookieDomain;

    getSameSite(): IamConfig.CookieDomain.SameSite;
    setSameSite(value: IamConfig.CookieDomain.SameSite): CookieDomain;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CookieDomain.AsObject;
    static toObject(includeInstance: boolean, msg: CookieDomain): CookieDomain.AsObject;
    static serializeBinaryToWriter(message: CookieDomain, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CookieDomain;
    static deserializeBinaryFromReader(message: CookieDomain, reader: jspb.BinaryReader): CookieDomain;
  }

  export namespace CookieDomain {
    export type AsObject = {
      host: string,
      domain: string,
      sameSite: IamConfig.CookieDomain.SameSite,
    }

    export enum SameSite { 
      SAME_SITE_UNSPECIFIED = 0,
      SAME_SITE_STRICT = 1,
      SAME_SITE_LAX = 2,
      SAME_SITE_NONE = 3,
    }
  }

}

export class UiConfig extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UiConfig.AsObject;
  static toObject(includeInstance: boolean, msg: UiConfig): UiConfig.AsObject;
  static serializeBinaryToWriter(message: UiConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UiConfig;
  static deserializeBinaryFromReader(message: UiConfig, reader: jspb.BinaryReader): UiConfig;
}

export namespace UiConfig {
  export type AsObject = {
  }
}

export class OauthProvider extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): OauthProvider;

  getClientSecret(): string;
  setClientSecret(value: string): OauthProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OauthProvider.AsObject;
  static toObject(includeInstance: boolean, msg: OauthProvider): OauthProvider.AsObject;
  static serializeBinaryToWriter(message: OauthProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OauthProvider;
  static deserializeBinaryFromReader(message: OauthProvider, reader: jspb.BinaryReader): OauthProvider;
}

export namespace OauthProvider {
  export type AsObject = {
    clientId: string,
    clientSecret: string,
  }
}

export class EmailAuthProvider extends jspb.Message {
  getFromEmail(): string;
  setFromEmail(value: string): EmailAuthProvider;

  getServer(): EmailAuthProvider.Server | undefined;
  setServer(value?: EmailAuthProvider.Server): EmailAuthProvider;
  hasServer(): boolean;
  clearServer(): EmailAuthProvider;

  getThrottleDuration(): google_protobuf_duration_pb.Duration | undefined;
  setThrottleDuration(value?: google_protobuf_duration_pb.Duration): EmailAuthProvider;
  hasThrottleDuration(): boolean;
  clearThrottleDuration(): EmailAuthProvider;

  getSignedInDuration(): google_protobuf_duration_pb.Duration | undefined;
  setSignedInDuration(value?: google_protobuf_duration_pb.Duration): EmailAuthProvider;
  hasSignedInDuration(): boolean;
  clearSignedInDuration(): EmailAuthProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailAuthProvider.AsObject;
  static toObject(includeInstance: boolean, msg: EmailAuthProvider): EmailAuthProvider.AsObject;
  static serializeBinaryToWriter(message: EmailAuthProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailAuthProvider;
  static deserializeBinaryFromReader(message: EmailAuthProvider, reader: jspb.BinaryReader): EmailAuthProvider;
}

export namespace EmailAuthProvider {
  export type AsObject = {
    fromEmail: string,
    server?: EmailAuthProvider.Server.AsObject,
    throttleDuration?: google_protobuf_duration_pb.Duration.AsObject,
    signedInDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export class Server extends jspb.Message {
    getSendgrid(): EmailAuthProvider.Sendgrid | undefined;
    setSendgrid(value?: EmailAuthProvider.Sendgrid): Server;
    hasSendgrid(): boolean;
    clearSendgrid(): Server;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Server.AsObject;
    static toObject(includeInstance: boolean, msg: Server): Server.AsObject;
    static serializeBinaryToWriter(message: Server, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Server;
    static deserializeBinaryFromReader(message: Server, reader: jspb.BinaryReader): Server;
  }

  export namespace Server {
    export type AsObject = {
      sendgrid?: EmailAuthProvider.Sendgrid.AsObject,
    }
  }


  export class Sendgrid extends jspb.Message {
    getApiKey(): string;
    setApiKey(value: string): Sendgrid;

    getDynamicTemplateId(): string;
    setDynamicTemplateId(value: string): Sendgrid;

    getTemplateCase(): Sendgrid.TemplateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sendgrid.AsObject;
    static toObject(includeInstance: boolean, msg: Sendgrid): Sendgrid.AsObject;
    static serializeBinaryToWriter(message: Sendgrid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sendgrid;
    static deserializeBinaryFromReader(message: Sendgrid, reader: jspb.BinaryReader): Sendgrid;
  }

  export namespace Sendgrid {
    export type AsObject = {
      apiKey: string,
      dynamicTemplateId: string,
    }

    export enum TemplateCase { 
      TEMPLATE_NOT_SET = 0,
      DYNAMIC_TEMPLATE_ID = 2,
    }
  }

}

export class AppleAuthProvider extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): AppleAuthProvider;

  getClientId(): string;
  setClientId(value: string): AppleAuthProvider;

  getClientSecret(): string;
  setClientSecret(value: string): AppleAuthProvider;

  getKeyId(): string;
  setKeyId(value: string): AppleAuthProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppleAuthProvider.AsObject;
  static toObject(includeInstance: boolean, msg: AppleAuthProvider): AppleAuthProvider.AsObject;
  static serializeBinaryToWriter(message: AppleAuthProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppleAuthProvider;
  static deserializeBinaryFromReader(message: AppleAuthProvider, reader: jspb.BinaryReader): AppleAuthProvider;
}

export namespace AppleAuthProvider {
  export type AsObject = {
    teamId: string,
    clientId: string,
    clientSecret: string,
    keyId: string,
  }
}

export class RefreshToken extends jspb.Message {
  getToken(): string;
  setToken(value: string): RefreshToken;

  getProvider(): alis_open_iam_v1_user_pb.IdentityProvider;
  setProvider(value: alis_open_iam_v1_user_pb.IdentityProvider): RefreshToken;

  getRedirectUri(): string;
  setRedirectUri(value: string): RefreshToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshToken.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshToken): RefreshToken.AsObject;
  static serializeBinaryToWriter(message: RefreshToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshToken;
  static deserializeBinaryFromReader(message: RefreshToken, reader: jspb.BinaryReader): RefreshToken;
}

export namespace RefreshToken {
  export type AsObject = {
    token: string,
    provider: alis_open_iam_v1_user_pb.IdentityProvider,
    redirectUri: string,
  }
}

