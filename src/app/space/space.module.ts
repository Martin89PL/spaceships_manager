import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { PilotComponent } from './pilot/pilot.component';
import { PilotRoomComponent } from './pilot-room/pilot-room.component';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { SpaceShipService } from './space-ship.service';
import { HttpClientModule } from '@angular/common/http';
import { PilotService } from './pilot.service';

@NgModule({
  declarations: [HangarComponent, SpaceShipComponent, PilotComponent, PilotRoomComponent, EngineersRoomComponent],
  imports: [
    CommonModule,
    SpaceRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    HangarComponent
  ],
  providers: [
    SpaceShipService,
    PilotService
  ]
})
export class SpaceModule { }
