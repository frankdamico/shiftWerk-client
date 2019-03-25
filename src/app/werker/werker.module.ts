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
import { WerkerPastShiftsComponent } from './werker-past-shifts/werker-past-shifts.component';
import { WerkerPastShiftComponent} from './werker-past-shift/werker-past-shift.component';
import { WerkerInvitedShiftsComponent } from './werker-invited-shifts/werker-invited-shifts.component';
import { WerkerInvitedShiftComponent } from './werker-invited-shift/werker-invited-shift.component';
import { WerkerUpcomingShiftsComponent } from './werker-upcoming-shifts/werker-upcoming-shifts.component';
import { WerkerUpcomingShiftComponent } from './werker-upcoming-shift/werker-upcoming-shift.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: WerkerPage
  }
];

@NgModule({
  imports: [
    MatExpansionModule,
    // BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
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
    WerkerNavbarComponent,
    WerkerPastShiftsComponent,
    WerkerPastShiftComponent,
    WerkerInvitedShiftsComponent,
    WerkerInvitedShiftComponent,
    WerkerUpcomingShiftsComponent,
    WerkerUpcomingShiftComponent,
  ]
})
export class WerkerPageModule {}
