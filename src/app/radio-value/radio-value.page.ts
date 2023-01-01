import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-radio-value',
  templateUrl: './radio-value.page.html',
  styleUrls: ['./radio-value.page.scss'],
})
export class RadioValuePage implements OnInit {

  constructor() { }


  ngOnInit() {
  }
  form = new FormGroup({
    gender: new FormControl('', Validators.required)
  });
    
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
  }
  
  changeGender(e) {
    console.log(e.target.value);
  }

}
