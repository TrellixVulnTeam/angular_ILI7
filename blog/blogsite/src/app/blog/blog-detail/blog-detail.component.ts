import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';
import { Blog } from 'src/app/shared/Model/blog.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blogId: number;
  blog: Blog;

  constructor(private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routerIdFetch();
  }

  routerIdFetch() {
    this.route.params.subscribe((params: Params) => {
      this.blogId = +params['id'];
      this.blog = this.blogService.getBlog(this.blogId);
    });
  }

  onNextBlog() {
    if (this.blogId === this.blogService.getLatestIndexOfBlog() - 1) {
      alert("This is last blog!");
      return;
    }
    this.router.navigate(['blog', this.blogId + 1]);
  }

  onPreviousBlog() {
    if (this.blogId == 0) {
      alert("This is first blog!");
      return;
    }
    this.router.navigate(['blog', this.blogId - 1]);
  }
}
