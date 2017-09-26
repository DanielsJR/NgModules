import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TitleComponent } from './title.component';
import { UserService, UserServiceConfig } from './user.service';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        TitleComponent
    ],
    exports: [
        TitleComponent
    ],
    providers: [
        UserService
    ]
})
export class CoreModule {

    // Prevent reimport of the CoreModule
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    // Configure core services with CoreModule.forRoot
    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: UserServiceConfig, useValue: config }
            ]
        };
    }
}
