import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginModalComponent} from './login/loginmodal.component';
import { HttpClientModule } from '@angular/common/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ShareModule } from './share.module';
import { enableProdMode } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

enableProdMode();
@NgModule({
    imports: [BrowserAnimationsModule,  BrowserModule, Ng4LoadingSpinnerModule.forRoot(),
        
        HttpModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,         
        NgIdleKeepaliveModule.forRoot(),  ShareModule,
         MatDialogModule
        ],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [AppComponent, LoginComponent, LoginModalComponent],
    providers: [MatDialogModule],
    bootstrap: [AppComponent],
    entryComponents: [LoginModalComponent]

})
export class AppModule {
}