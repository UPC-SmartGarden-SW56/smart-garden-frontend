import {Component, OnInit} from '@angular/core';
import {Community} from "../../models/community-entity";
import {
  CommunityPurchasedCoursesService
} from "../../services/community-purchased-courses/community-purchased-courses.service";
import {CommunityService} from "../../services/community/community.service";
import {PurchasedCourse} from "../../../shared/models/purchased-course/purchased-course-entity";
import {CourseService} from "../../../smartGarden/services/course/course.service";
import {Course} from "../../../shared/models/course/course.entity";
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator";
import {MatTabsModule} from "@angular/material/tabs";
import {CommunityCardComponent} from "../community-card/community-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-community-list',
  standalone: true,
    imports: [
        MatTabsModule,
        MatPaginatorModule,
        CommunityCardComponent,
        NgForOf,
        NgIf,
        MatButton
    ],
  templateUrl: './community-list.component.html',
  styleUrl: './community-list.component.css'
})
export class CommunityListComponent implements OnInit{
  purchasedCommunities: Community[] = [];
  ownedCommunities: Community[] = [];
  paginatedPurchasedCommunities: Community[] = [];
  paginatedOwnedCommunities: Community[] = [];
  userId: number;
  userType: string;

  constructor(
    private communityPurchasedCoursesService: CommunityPurchasedCoursesService,
    private communityService: CommunityService,
    private courseService: CourseService,
    private router: Router
  ) {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.userId = user.id || null;
    this.userType = user.type || null;
  }

  ngOnInit(): void {
    this.communityPurchasedCoursesService.getPurchasedCoursesByUserId(this.userId)
      .subscribe((purchasedCourses: PurchasedCourse[]) => {
        purchasedCourses.forEach(purchasedCourse => {
          this.communityService.getCommunityByCourseId(purchasedCourse.courseId)
            .subscribe((community: Community) => {
              if (community.status === "available") {
                this.purchasedCommunities.push(community);
                this.updatePaginatedPurchasedCommunities({ pageIndex: 0, pageSize: 10, length: this.purchasedCommunities.length });
              }
            });
        });
      });

    this.ownedCommunities = [...this.purchasedCommunities];
    this.updatePaginatedOwnedCommunities({ pageIndex: 0, pageSize: 10, length: this.ownedCommunities.length });

    if(this.userType === 'expert') {
      this.communityService.getCommunitiesByExpertId(this.userId).subscribe((communities: Community[]) => {
        this.ownedCommunities = communities;
        this.updatePaginatedOwnedCommunities({ pageIndex: 0, pageSize: 10, length: this.ownedCommunities.length });
      });
    }
  }

  updatePaginatedPurchasedCommunities(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedPurchasedCommunities = this.purchasedCommunities.slice(startIndex, endIndex);
  }

  updatePaginatedOwnedCommunities(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedOwnedCommunities = this.ownedCommunities.slice(startIndex, endIndex);
  }

  redirectToExplore(): void {
    this.router.navigate(['/explore']);
  }

  isExpert(): boolean {
    if(this.userType==='expert') return true;
    else return false;
  }

}
