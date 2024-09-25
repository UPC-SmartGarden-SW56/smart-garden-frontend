import {Component, EventEmitter, Input, OnInit, Output, ViewChild, viewChild} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatOption} from "@angular/material/core";
import {MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatSelect} from "@angular/material/select";
import {Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {Course} from "../../model/course.entity";
import {NgForm} from "@angular/forms";
import {NgForOf, NgStyle} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {CourseService} from "../../services/course.service";



@Component({
  selector: 'app-course-create',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardHeader,
    MatCard,
    MatOption,
    MatLabel,
    MatFormField,
    MatSelect,
    FormsModule,
    MatInput,
    MatPrefix,
    MatSuffix,
    NgStyle,
    MatCardFooter,
    MatButton,
    NgForOf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './course-create.component.html',
  styleUrl: './course-create.component.css'
})
export class CourseCreateComponent{
  courseForm!:FormGroup;
  levels: string[] = ['Basic', 'Intermediate', 'Advance'];
  constructor(private fb: FormBuilder, private courseService: CourseService) {
    this.courseForm = this.fb.group({
      id:['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      level: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]]
    });
  }


  protected onSubmit(): void {
    if (this.courseForm.valid) {
      const courseData: Course = this.courseForm.value;
      this.courseService.create(courseData).subscribe(response => {
        console.log('course published successfully!', response);
      }, error =>{
        console.error('Error publishing course', error);
      });
    }
  }



}
