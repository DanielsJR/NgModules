import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisService } from './crisis.service';
import { CrisisRoutingModule } from './crisis-routing.module';

@NgModule({
    imports: [
        SharedModule,
        CrisisRoutingModule
    ],
    declarations: [
        CrisisDetailComponent,
        CrisisListComponent
    ],
    providers: [
        CrisisService
    ]
})
export class CrisisModule { }
