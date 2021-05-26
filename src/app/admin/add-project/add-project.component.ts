import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  backUrl: string = '/admin-dashboard';
  buttonText: string = 'Back to Dashboard';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  projForm = this.fb.group({
    title: [''],
    type: [''],
    description: [''],
  });

  async onSubmit() {
    let formData = {
      title: this.projForm.get('title').value,
      type: this.projForm.get('type').value,
      description: this.projForm.get('description').value,
    };

    try {
      const res = await this.http
        .post(environment.backendUrl + 'project/create', formData)
        .toPromise();

      this.router.navigateByUrl('projects');
    } catch (err) {
      window.alert(err.message);
    }
  }
}
