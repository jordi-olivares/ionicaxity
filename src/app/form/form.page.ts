import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  radio:string='biff';
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form=this.fb.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(8)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(8)])]
    });
  }

  ngOnInit() {
  }
  login(){
    console.log(this.form.value);
  }

}
