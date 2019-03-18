import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MakerPage } from './maker.page';
import { MakerHomeComponent } from './maker-home/maker-home.component';
import { MakerProfileComponent } from './maker-profile/maker-profile.component'
import { MakerUnfilledShiftsComponent } from './maker-unfilled-shifts/maker-unfilled-shifts.component';
import { MakerPendingShiftsComponent } from './maker-pending-shifts/maker-pending-shifts.component';

import { MakerNavbarComponent } from './maker-navbar/maker-navbar.component';

const routes: Routes = [
  {
    path: '',
    component: MakerPage
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
    MakerPage,
    MakerHomeComponent,
    MakerProfileComponent,

    MakerUnfilledShiftsComponent,
    MakerPendingShiftsComponent,

    MakerNavbarComponent
  ]
})
export class MakerPageModule {}
