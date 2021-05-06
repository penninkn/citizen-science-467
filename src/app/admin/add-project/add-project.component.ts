import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  projForm = this.fb.group({
    title: [''],
    type: [''],
    description:[''],
  });

  async onSubmit() {
    let formData = {
      title: this.projForm.get('title').value,
      type: this.projForm.get('type').value,
      description: this.projForm.get('description').value,
      observations: [],
    };

    try {
      const res = await this.http
        .post('http://localhost:3000/project/create', formData)
        .toPromise();

      this.router.navigateByUrl('projects');
    } catch (err) {
      window.alert(err.message);
    }
  }
}



