import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-configure-github',
  templateUrl: './configure-github.component.html',
  styleUrls: ['./configure-github.component.css']
})
export class ConfigureGithubComponent implements OnInit {
  configureGitHubForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configureGitHubForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      url: ['', Validators.required],
      repositoryName: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.configureGitHubForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.configureGitHubForm.invalid) {
        return;
    }

    this.loading = true;
  }
}