import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from "@angular/material/list";
import { TranslateService } from "@ngx-translate/core";
import { CreateCourseComponent } from './create-course/create-course.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from "@angular/material/divider";
import { BreakpointObserver } from "@angular/cdk/layout";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet,CreateCourseComponent, HeaderContentComponent, LanguageSwitcherComponent, MatSidenavModule, MatDividerModule, MatButtonModule, MatIconModule, MatToolbarModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'smart-garden-spa';
  @ViewChild(MatSidenav, {static: true}) sidenav!: MatSidenav;
options = [
  { icon: 'home', path: '/agregado', title: 'Agregado'},
  { icon: 'person', path: '/detalles', title: 'Detalles'}
];
constructor(private translate: TranslateService, private observer: BreakpointObserver) {
  translate.setDefaultLang('en');
  translate.use('en');
}
ngOnInit(): void {
  this.observer.observe(['(max-width: 1280px)'])
    .subscribe((response: any) => {
      if (response.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
}
}
