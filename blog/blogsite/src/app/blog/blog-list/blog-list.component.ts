import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';
import { Blog } from 'src/app/shared/Model/blog.model';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  totalBlogToDisplay: number = 5;
  scrollDistance: number = 2;
  scrollThrottle: number = 1;

  constructor(private blogSerice: BlogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.blogSerice.blogs.length > this.totalBlogToDisplay) {
      this.blogs = this.blogSerice.blogs.slice(0, this.totalBlogToDisplay);
    } else {
      this.blogs = this.blogSerice.blogs.slice(0, this.blogSerice.blogs.length);
    }
  }

  onScrollDown() {
    const latestBlogDisplay = this.totalBlogToDisplay;
    this.totalBlogToDisplay += 5;
    if (this.blogSerice.blogs.length > this.totalBlogToDisplay) {
      var tempArray = this.blogSerice.blogs.slice(latestBlogDisplay, this.totalBlogToDisplay);
    }
    else {
      var tempArray = this.blogSerice.blogs.slice(latestBlogDisplay, this.totalBlogToDisplay);
    }
    this.blogs.push(...tempArray);
  }

  blogShowDetail(id: number) {
    this.router.navigate([+id], { relativeTo: this.route });
  }
}
