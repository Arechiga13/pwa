import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

// @Injectable({
//     providedIn: "root"
// })
@Injectable()
export class PwaService {
    promptEvent;
    constructor() {
        // alert("Here");
        window.addEventListener('beforeinstallprompt', event => {
            console.log(this.promptEvent);
            alert("Here2");
            this.promptEvent = event;
            console.log(this.promptEvent);
        });
        window.addEventListener('appinstalled', (event) => {
            console.log('installed');
           });
    }
}