import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProfileModel} from '../../models/profile.model';
//var profileComponent = require('./profile.component.html');

@Component({
    templateUrl:'./profile.component.html' //template: profileComponent
})

export class ProfileComponent {

    profile:IProfileModel;

    constructor() {
        this.profile = new IProfileModel();
    }
}
