import { Component, OnInit, InjectionToken } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../../partials/title/title.component';
import { NgFor, NgIf } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrConfig, ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, TitleComponent, NgIf, NgFor, RouterLink, ToastrModule,BrowserAnimationsModule],
  providers: [
    ToastrService,
    { provide: ToastrService, useValue: {} as ToastrService },
    UserService
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log('LoginPageComponent initialized');
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
    console.log('returnUrl:', this.returnUrl);
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    console.log('Form submitted:', this.loginForm.value);

    this.userService.login({
      email: this.fc.email.value,
      password: this.fc.password.value
    }).subscribe(
      () => {
        console.log('Login successful, navigating to:', this.returnUrl);
        this.router.navigateByUrl(this.returnUrl);
      },
      error => {
        console.log('Login failed:', error);
        this.toastr.error('Login failed');
      }
    );
  }
}