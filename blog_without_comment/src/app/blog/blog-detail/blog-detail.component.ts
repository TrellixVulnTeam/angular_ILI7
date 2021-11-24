import { AfterContentInit, Component, ElementRef,  OnInit, ViewChild, } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Blog } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit,AfterContentInit {
  blogid:number;
  blog:Blog;
  modalOpen = false;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(private blogService: BlogService,private auth:AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.blogid = +params['id'];
      this.blog = this.blogService.getBlog(this.blogid);
    });
  }

  ngAfterContentInit(){
      console.log('aaaaaaaaaa');
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onItemSelect(item: any) {
    console.log(item);
  } 

  onNextBlog(){
    if(this.blogid === this.blogService.getLatestIndexOfBlog()-1){
      alert("This is last blog!");
      return;
    }
    this.router.navigate(['../',this.blogid+1], {relativeTo: this.route});
  }

  onPreviousBlog(){
    if(this.blogid == 0){
      alert("This is first blog!");
      return;
    }
    this.router.navigate(['../',this.blogid-1], {relativeTo: this.route});
  }
}
