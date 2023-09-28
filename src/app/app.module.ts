import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DexComponent } from './pages/dex/dex.component';
import { SubmitIpComponent } from './pages/submit-ip/submit-ip.component';
import { SwapComponent } from './components/swap/swap.component';
import { ListTokensComponent } from './components/list-tokens/list-tokens.component';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';
import { HuddleCallComponent } from './components/huddle-call/huddle-call.component';
import { TokenDetailsComponent } from './components/token-details/token-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DexComponent,
    SubmitIpComponent,
    SwapComponent,
    ListTokensComponent,
    SubmitFormComponent,
    HuddleCallComponent,
    TokenDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
