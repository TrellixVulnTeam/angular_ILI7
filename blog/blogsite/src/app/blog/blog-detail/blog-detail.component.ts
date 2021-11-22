import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Blog } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  blogid:number;
  blog:Blog;
  modalOpen = false;

  @ViewChild('closeBtn') closeBtn: ElementRef;

  @ViewChild('f') updateForm: NgForm;
  public Editor = ClassicEditor;
  author:string;
  id: number;
  title: string="bbb";
  titles: string="bbb";
  date1:Date ;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  editMode = false;
  blogCurrent:Blog;
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


    this.dropdownList = [
      { item_id: 1, item_text: 'html' },
      { item_id: 2, item_text: 'css' },
      { item_id: 3, item_text: 'javascript' },
      { item_id: 4, item_text: 'angular' },
      { item_id: 5, item_text: 'reactJs' },
      { item_id: 6, item_text: 'PHP' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.author=(this.auth.loginUserNameOrEmail);
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      this.blogCurrent=this.blogService.getBlog(this.id);
      this.title=this.blogCurrent.title;
      this.selectedItems=this.blogCurrent.language;
      this.date1=this.blogCurrent.date;
      console.log(this.selectedItems +" date "+this.date1);
    });
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  private initForm() {
   
    if (this.editMode) {
      const blog = this.blogService.getBlog(this.id);
      // this.title = blog.title.toString();
      console.log(blog);
   
    }
  }
  onEditBlogSubmit() {
    // console.log(this.updateForm.value);
    this.blogService.updateBlogs(this.id, this.updateForm.value);
    this.router.navigate(['/blog/']);
    let myTag = this.el.nativeElement.querySelector("div");
    // myTag.classList.remove('modal-backdrop fade show'); 
    console.log(myTag);
    this.closeBtn.nativeElement.click();
  }
/*----------*/
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

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
  openXl(content) {
    // this.modalService.open(content, { size: 'xl' });
  }

  ngOnDestroy(){}
}
