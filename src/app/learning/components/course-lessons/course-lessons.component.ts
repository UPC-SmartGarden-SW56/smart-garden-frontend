import {Component, inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {MatDivider} from "@angular/material/divider";

/**
 * @title Stepper vertical
 */
@Component({
  selector: 'course-lesson-component',
  templateUrl: 'course-lessons.component.html',
  styleUrl: 'course-lessons.component.css',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgOptimizedImage,
    MatDivider,
    NgStyle,
  ],
})
export class CourseLessonsComponent {
  private _formBuilder = inject(FormBuilder);
  videoUrl: SafeResourceUrl;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl=
      this.sanitizer.bypassSecurityTrustResourceUrl('https://youtu.be/DuNjVVzDkW8?si=z6SxD4Gl8TcLOgzD');
  }
}
