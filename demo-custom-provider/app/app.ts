import * as application from '@nativescript/core/application';
import { configureOAuthProviders } from "./auth-service";

configureOAuthProviders();

application.run({ moduleName: "app-root" });
