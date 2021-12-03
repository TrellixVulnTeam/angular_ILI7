import { Component,  OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs:Blog[]=[];
  blogScolled:Blog[]=[];
  sum = 5;
  scrollDistance = 2;
  scrollThrottle = 5;

  constructor(private blogSerice:BlogService,
    private router:Router,
    private route:ActivatedRoute) { 
      for (let i = 0; i < this.sum; ++i) {
        this.blogs.push(this.blogSerice.getBlog(i));
      }
    }

  ngOnInit(): void {
    this.blogSerice.newBlog.subscribe(
      () => {
        this.blogs=[];
        for (let i = 0; i < this.sum; ++i) 
        {
          if(this.blogSerice.blogs[i] == null){
            break;
          }
          this.blogs.push(this.blogSerice.getBlog(i));
        }
      }
    )
  }
 
  addBlogs(startIndex: number, endIndex: number) {
    for (let i = startIndex; i < endIndex; ++i) {
      if(this.blogs[i] == undefined){
        return;
      }
      this.blogs.push(this.blogs[i]);
    }
  }
  
  onScrollDown () {
    const start = this.sum;
    this.sum += 5;
    for (let i = start; i < this.sum; ++i) {
      if(this.blogSerice.getBlog(i)==null){
        break;
      }
      this.blogs.push(this.blogSerice.getBlog(i));
    }
  }
 
  blogShowDetail(id:number){
    this.router.navigate([+id],{relativeTo: this.route});
  }

  deleteBlog(id:number){
    console.log(id);
    this.blogSerice.deleteBlogs(id);
  }
}
