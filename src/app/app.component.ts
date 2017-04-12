import { Component } from '@angular/core';
import { IUser } from './i-user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {
    host1: IUser = {
        name: 'Raúl Jiménez',
        photo: 'https://developers.google.com/experts/img/user/113891565824690600532.png'
    };

    host2: IUser = {
        name: 'Jorge Cano',
        photo: 'https://developers.google.com/experts/img/user/113358190243424333291.jpg'
    };

    guest: IUser = {
        name: 'Gerard Sans',
        photo: 'https://developers.google.com/experts/img/user/117176235968324959535.jpg'
    };
}
