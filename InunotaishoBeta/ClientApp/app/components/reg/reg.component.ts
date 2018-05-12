import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {IUserRegistration } from '../../models/reg.model';
//var regComponent = require('./reg.component.html');


@Component({
    templateUrl:'./reg.component.html' //template: regComponent
})

export class RegComponent implements OnDestroy{
    @Input() user: IUserRegistration;
    errorMessage = '';

    constructor(private http:HttpClient){
        this.user = new IUserRegistration();
    }

    registeration: {

    }
    reg :Subscription

    // ngOnInit(): void {
    //     this.registeration = new FormGroup({
    //         'username': new FormControl(this.user.username, [
    //             Validators.required,

    //         ])
    //     })
    // }

    onSubmit(form:NgForm){
        this.reg = this.http.post('/users/register', this.user).subscribe((res) => {
            // success status code 2xx
            console.log(res);
            this.errorMessage = '';
            form.reset();
        }, (error) => {
            // non success status code
            console.log(error);
            this.errorMessage = error.json().message;
        });

    }
    ngOnDestroy(){
        if(this.reg != undefined){
            this.reg.unsubscribe()
        }
    }

}
