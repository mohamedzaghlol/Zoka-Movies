import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string = '';
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(80)]),
    password: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]{3,10}$")])

    /*  At least one upper case English letter, (?=.*?[A-Z])
        At least one lower case English letter, (?=.*?[a-z])
        At least one digit, (?=.*?[0-9])
        At least one special character, (?=.*?[#?!@$%^&*-])
        Minimum eight in length .{8,} (with the anchors)
    */
  });
  constructor(public _AuthService: AuthService, public _Router: Router) { }


  ngOnInit(): void {
  }

  submitRegisterForm(registerForm: FormGroup) {
    if (this.registerForm.valid) {
      this._AuthService.register(registerForm.value).subscribe((response) => {

        if (response.message == 'success') {

          this._Router.navigate(['login'])

        }
        else {
          this.error = response.errors.email.message;
        }

      })
    }
  }


}
