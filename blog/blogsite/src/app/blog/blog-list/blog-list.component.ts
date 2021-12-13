import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  totalBlogToDisplay = 5;
  scrollDistance = 2;
  scrollThrottle = 1;

  constructor(private blogSerice: BlogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.blogs = this.blogSerice.blogs.slice(0, this.totalBlogToDisplay);
  }

  onScrollDown() {
    const latestBlogDisplay = this.totalBlogToDisplay;
    this.totalBlogToDisplay += 5;
    var tempArray = this.blogSerice.blogs.slice(latestBlogDisplay, this.totalBlogToDisplay);
    this.blogs.push(...tempArray);
  }

  blogShowDetail(id: number) {
    this.router.navigate([+id], { relativeTo: this.route });
  }
}
