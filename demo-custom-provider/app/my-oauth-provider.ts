import { ITnsOAuthTokenResult} from "nativescript-oauth2";

import {
  TnsOaProvider,
  TnsOaProviderOptions,
  OpenIdSupportFull,
} from "nativescript-oauth2/providers";

export interface TnsOaProviderOptionsAmazon extends TnsOaProviderOptions {clientSecret: string};

export class TnsOaProviderAmazon implements TnsOaProvider {
  public options: TnsOaProviderOptionsAmazon;
  public openIdSupport: OpenIdSupportFull;

  public authority = "https://ldcmobile.auth.us-east-1.amazoncognito.com";
  public tokenEndpointBase = "https://ldcmobile.auth.us-east-1.amazoncognito.com";
  public authorizeEndpoint = "/oauth2/authorize";
  public tokenEndpoint = "/oauth2/token";
  public cookieDomains = [ "amazoncognito.com" ];
  public providerType:  "amazon";

  constructor(options: TnsOaProviderOptionsAmazon) {
    this.options = options;
  }

  public parseTokenResult(jsonData): ITnsOAuthTokenResult {
    return jsonData;
  }
}
