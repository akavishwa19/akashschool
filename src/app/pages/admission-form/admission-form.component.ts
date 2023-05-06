import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent implements OnInit {

  reactiveform: FormGroup;

  ngOnInit() {
    this.reactiveform=new FormGroup({
      class:new FormControl(null),
      name:new FormControl(null),
      fname:new FormControl(null),
      mname:new FormControl(null),
      dob:new FormControl(null),
      address:new FormControl(null),
      whatsapp:new FormControl(null),
      mobile:new FormControl(null),
      mail:new FormControl(null),
      photo:new FormControl(null),
      tc:new FormControl(null),

    })


  }
  onSubmit(){
    console.log(this.reactiveform)
  }
}
