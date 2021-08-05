import { EventData, Page } from '@nativescript/core';
import { HelloWorldModel } from "./main-view-model";
import { tnsOauthLogin, tnsOauthLogout } from "./auth-service";

let page: Page;

export function navigatingTo(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onLoginTap() {
    tnsOauthLogin("myCustomProvider");
}

export function onLogoutTap() {
    tnsOauthLogout();
}
