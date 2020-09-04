import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import { from } from 'rxjs';
import {EnrollmentService} from '../enrollment.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private _enrollmentService:EnrollmentService) { }

  ngOnInit(): void {
  }
  persons =['1 person','2 persons','3 persons','4 persons','5 persons','More than 5 persons'];
  personHasError=true;
  submitted=false;


userModel = new User('Name','abc123@xyz.com',1234567890,'default','dd/mm/yyyy','morning');
validatePerson(value){
  if(value === "default"){
    this.personHasError=true;
  }
  else{
    this.personHasError=false;
  }
  
}
onSubmit(){
  this.submitted=true;
  this._enrollmentService.enroll(this.userModel)
  .subscribe(
    data => console.log('success!',data),
    error => console.log('Error!',error),
  )
}



}
