import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { CustomValidators } from '../../validations/custom-validators';
import { MatCheckbox } from '@angular/material';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  selectedCountry;
  countries = [];

  languages = [];
  user = {
    user_first: '',
    user_last: '',
    user_pwd: '',
    user_gender: '',
    user_email: ''
  };
  userForm: FormGroup;
  @ViewChild('boy') private boy: MatCheckbox;
  @ViewChild('girl') private girl: MatCheckbox;
  @ViewChild('male') private male: MatCheckbox;
  @ViewChild('female') private female: MatCheckbox;
  constructor(private dataService: DataService, ) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [CustomValidators.firstName]),
      lastName: new FormControl('', [CustomValidators.lastName]),
      password: new FormControl('', [CustomValidators.password]),
      email: new FormControl('', [CustomValidators.email]),
      language: new FormControl('', [CustomValidators.language]),
      country: new FormControl('', [CustomValidators.country]),
      gender: new FormGroup({
        boy: new FormControl(''),
        girl: new FormControl('')
      })
    })
    this.dataService.getCountriesInfo().subscribe(countryInfo => {
      console.log(countryInfo);
      let temp = [];
      temp = countryInfo;
      console.log(temp.length);
      temp.forEach(element => {
        this.countries.push(element['name']);
        // this.languages.push([] = element['laguages'])
        // console.log(element['languages'].length);
        let linfo = [];
        linfo = element['languages'];
        // console.log(linfo.length);
        linfo.forEach(lelement => { 
        this.languages.push(lelement['name']);
        })
      });
    });

  }
  userDetails(): void {
    if (this.male.checked) {
      this.user['user_gender'] = 'Male';
    } else if (this.female.checked) {
      this.user['user_gender'] = 'Female';
    }
    const userDetails = {
      firstname: this.userForm.value['firstName'],
      lastname: this.userForm.value['lastName'],
      email: this.userForm.value['email'],
      gender: this.userForm['user_gender'],
      password: this.userForm.value['password']
    };
  }
  handleCheckBox(event): void {
    switch (event['source']['id']) {
      case 'male': {
        this.female.checked = false;
        break;
      }
      case 'female': {
        this.male.checked = false;
        break;
      }
      case 'boy': {
        this.girl.checked = false;
        break;
      }
      case 'girl': {
        this.boy.checked = false;
        break;
      }
      default: {
        break;
      }
    }
  }
}
