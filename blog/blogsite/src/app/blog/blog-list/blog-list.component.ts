// import { Route } from '@angular/compiler/src/core';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Router,Route, ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';
// import {ScrollingModule} from '@angular/cdk/scrolling';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs:Blog[]=[];
  blogss:Blog[]=[];
  blogScolled:Blog[]=[];
 

  sum = 5;
  scrollDistance = 2;
  scrollThrottle = 5;
  constructor(private blogSerice:BlogService,
    private router:Router,
    private route:ActivatedRoute) { 
      // this.blogs=this.blogSerice.getBlogs();
      // this.appendItems();
      for (let i = 0; i < this.sum; ++i) {
        this.blogs.push(this.blogSerice.getBlog(i));
      }
    }

  ngOnInit(): void {
    this.blogss=this.blogSerice.getBlogs();
    // console.log(this.blogs);
    
    this.blogSerice.newBlog.subscribe(
      () => {
        this.blogs=[];
        for (let i = 0; i < this.sum; ++i) 
        {
          if(this.blogSerice.blogs[i] == null){
            break;
          }
          this.blogs.push(this.blogSerice.getBlog(i));
          // this.blogs=this.blogSerice.blogs;
        }
      }
    )
    // console.log(this.blogs)
    // this.addBlogs(0, this.sum);

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
    // console.log('scrolled!!');

    // add another 20 items
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
    console.log(id);
    this.router.navigate([+id],{relativeTo: this.route});
  }
  deleteBlog(id:number){
    console.log(id);
    this.blogSerice.deleteBlog(id);
    // this.router.navigate(['../'],{relativeTo: this.route});
  }
  
}
