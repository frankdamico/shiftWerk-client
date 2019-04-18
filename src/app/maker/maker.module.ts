import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MakerPage } from './maker.page';
import { MakerHomeComponent } from './maker-home/maker-home.component';
import { MakerNavBarComponent } from './maker-navbar/maker-navbar.component';
import { MakerPositionsComponent } from './maker-positions/maker-positions.component';
import { MakerProfileComponent } from './maker-profile/maker-profile.component';
import { MakerSettingsComponent} from './maker-settings/maker-settings.component';
import { MakerUnfilledShiftsComponent } from './maker-unfilled-shifts/maker-unfilled-shifts.component';
import { MakerUnfilledShiftCondensedComponent } from './maker-unfilled-shift-condensed/maker-unfilled-shift-condensed.component';
import { MakerPendingShiftsComponent } from './maker-pending-shifts/maker-pending-shifts.component';
import { MakerPendingShiftCondensedComponent } from './maker-pending-shift-condensed/maker-pending-shift-condensed.component';
import { MakerCreateShiftComponent } from './maker-create-shift/maker-create-shift.component';
import { MakerHistoryComponent } from './maker-history/maker-history.component';
import { MakerHistoryShiftsComponent } from './maker-history-shifts/maker-history-shifts.component';
import { MakerHistoryShiftCondensedComponent } from './maker-history-shift-condensed/maker-history-shift-condensed.component';
import { MakerNotificationsComponent } from './maker-notifications/maker-notifications.component';
import { MakerNotificationComponent } from './maker-notification/maker-notification.component';
import { MakerScheduleComponent } from './maker-schedule/maker-schedule.component';
import { MakerSearchComponent } from './maker-search/maker-search.component';
import { MatExpansionModule } from '@angular/material';
import { RatingComponent } from '../rating/rating.component';
import { FavoriteComponent} from '../favorite/favorite.component';
import { InviteComponent } from '../invite/invite.component';


const routes: Routes = [
  {
    path: '',
    component: MakerPage
  }
];

@NgModule({
  imports: [
    MatExpansionModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MakerPage,
    MakerHomeComponent,
    MakerNavBarComponent,
    MakerPositionsComponent,
    MakerProfileComponent,
    MakerSettingsComponent,
    MakerUnfilledShiftsComponent,
    MakerUnfilledShiftCondensedComponent,
    MakerPendingShiftsComponent,
    MakerPendingShiftCondensedComponent,
    MakerCreateShiftComponent,
    MakerHistoryComponent,
    MakerNotificationComponent,
    MakerHistoryShiftsComponent,
    MakerHistoryShiftCondensedComponent,
    MakerNotificationsComponent,
    MakerScheduleComponent,
    MakerSearchComponent,
    RatingComponent,
    FavoriteComponent,
    InviteComponent,
  ]
})
export class MakerPageModule {}
