import { NgModule, Inject } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { Ng2BootstrapModule } from 'ngx-bootstrap';

// i18n support
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { routes } from "./routes/routes.module";

import { Navbar} from '../app/components/navbar/navbar.component';
import { HomeComponent } from '../app/components/home/home.component';
import { EdComponent } from '../app/components/education/ed.component';
import { PortfolioComponent } from '../app/components/portfolio/portfolio.component';
import { BlogComponent } from '../app/components/blog/blog.component';
import { BlogPostComponent } from '../app/components/blogpost/blogpost.component';
import { LoginComponent }from '../app/components/login/login.component';
import { ProfileComponent } from '../app/components/profile/profile.component';
import { WriteComponent } from '../app/components/write/write.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { RegComponent } from '../app/components/reg/reg.component';
import { ErrorComponent } from '../app/components/errors/error.component';
import portImgContainer from '../app/components/portfolio/images/portfolio.image.component';
import FroalaEditor from '../app/components/write/froala-editor/froala.component';

import { AuthGuard } from "../app/services/authguard/authguard.service";



import { LinkService } from './shared/link.service';
import { UserService } from './shared/user.service';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';

export function createTranslateLoader(http: HttpClient, baseHref) {
    // Temporary Azure hack
    if (baseHref === null && typeof window !== 'undefined') {
        baseHref = window.location.origin;
    }
    // i18n files are in `wwwroot/assets/`
    return new TranslateHttpLoader(http, `${baseHref}/assets/i18n/`, '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        BlogPostComponent,
        ContactComponent,
        EdComponent,
        FroalaEditor,
        HomeComponent,
        LoginComponent,
        Navbar,
        ProfileComponent,
        PortfolioComponent,
        portImgContainer,
        RegComponent,
        WriteComponent,
        ErrorComponent
    ],
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({
          appId: 'my-app-id' // make sure this matches with your Server NgModule
        }),
        HttpClientModule,
        TransferHttpCacheModule,
        BrowserTransferStateModule,


        FormsModule,
        Ng2BootstrapModule.forRoot(), // You could also split this up if you don't want the Entire Module imported

        // i18n support
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient, [ORIGIN_URL]]
            }
        }),

        // App Routing
        RouterModule.forRoot(
          routes,
          {
            // Router options
            useHash: false,
            preloadingStrategy: PreloadAllModules,
            initialNavigation: 'enabled'
          })
    ],
    providers: [
        LinkService,
        UserService,
        TranslateModule
    ],
    bootstrap: [AppComponent]
})
export class AppModuleShared {
}
