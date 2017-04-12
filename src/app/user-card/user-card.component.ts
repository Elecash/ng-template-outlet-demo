import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { IUser } from '../i-user';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: [ './user-card.component.css' ]
})
export class UserCardComponent implements OnInit {

    @Input() user: IUser;

    @ContentChild(TemplateRef) renderer;

    constructor() {
    }

    ngOnInit() {
    }

}
