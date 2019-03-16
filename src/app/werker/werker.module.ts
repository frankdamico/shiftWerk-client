import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WerkerPage } from './werker.page';
import { WerkerHomeComponent } from './werker-home/werker-home.component';
import { WerkerNotificationsComponent } from './werker-notifications/werker-notifications.component';
import { WerkerProfileComponent } from './werker-profile/werker-profile.component';
import { WerkerHistoryComponent } from './werker-history/werker-history.component';
import { WerkerSearchComponent } from './werker-search/werker-search.component';
import { WerkerSettingsComponent } from './werker-settings/werker-settings.component';
import { WerkerScheduleComponent } from './werker-schedule/werker-schedule.component';
import { WerkerShiftSmallComponent } from './werker-shift-small/werker-shift-small.component';
import { WerkerShiftExpandedComponent } from './werker-shift-expanded/werker-shift-expanded.component';
import { WerkerNavbarComponent } from './werker-navbar/werker-navbar.component';

const routes: Routes = [
  {
    path: '',
    component: WerkerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WerkerPage,
    WerkerHomeComponent,
    WerkerNotificationsComponent,
    WerkerProfileComponent,
    WerkerHistoryComponent,
    WerkerSearchComponent,
    WerkerSettingsComponent,
    WerkerScheduleComponent,
    WerkerShiftSmallComponent,
    WerkerShiftExpandedComponent,
    WerkerNavbarComponent
  ]
})
export class WerkerPageModule {}
