import {Component, EventEmitter, Output} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-course-filter',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption
  ],
  templateUrl: './course-filter.component.html',
  styleUrl: './course-filter.component.css'
})
export class CourseFilterComponent {
  @Output() levelChange= new EventEmitter<string>();
  levels: string[] = ['Basic', 'Intermediate', 'Advance'];

  onLevelChange(level: string): void {
    this.levelChange.emit(level);
  }

}
