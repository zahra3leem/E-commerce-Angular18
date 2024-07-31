import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, LoginComponent, FormsModule, CommonModule],
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css'],
})
export class RegisterComponent {
  form = {
    name: '',
    email: '',
    password: '',
    conPassword: '',
  };

  registerSubmitForm() {
    console.log(this.form);
    console.log('Username:', this.form.name);
    console.log('Password:', this.form.password);
  }
}
