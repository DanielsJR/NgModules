import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-title',
    templateUrl: './title.component.html',
})
export class TitleComponent {
    @Input() subtitle = '';
    title = 'NgModules';
    user = '';

    constructor(userService: UserService) {
        this.user = userService.userName;
    }
}
