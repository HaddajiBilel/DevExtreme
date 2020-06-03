import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService, ApiCommService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { ChartComponent } from './pages/chart/chart.component';
import { DxChartModule, DxRangeSelectorModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    DxChartModule,
    DxRangeSelectorModule
  ],
  providers: [AuthService, ScreenService, AppInfoService, ApiCommService],
  bootstrap: [AppComponent]
})
export class AppModule { }
