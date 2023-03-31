import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  public personalDetails!: FormGroup;
  public submitted :boolean = false;

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.personalDetails = this.fb.group({
      firstName : ['',[Validators.required, Validators.maxLength(40)]],
      lastName  : ['',Validators.required,Validators.maxLength(40)],
      city  : ['',Validators.required,Validators.maxLength(40)],
      postalCode  : ['',Validators.required,Validators.maxLength(40)],
      state  : ['',Validators.required,Validators.maxLength(40)],
      country  : ['',Validators.required,Validators.maxLength(40)]
    })
    this.personalDetails.valid?this.submitted = false:this.submitted = true;
  }
  submitFun(){
    console.log(this.personalDetails.valid);
    this.router.navigateByUrl('/employee-onboarding/document-details')
  }
}
