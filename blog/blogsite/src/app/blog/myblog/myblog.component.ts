import { Route } from '@angular/compiler/src/core';
import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Blog } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditblogsComponent } from '../editblogs/editblogs.component';

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css'],
})
export class MyblogComponent implements OnInit,OnChanges {
  myblognumber: boolean = false;
  myblog;
  blogone;
  a;
  b;
  c;
  i;
  myfinalblog=[];
  blogdetail;

  modalOpen = false;
  dataPassToChild: any = '12';

  @ViewChild('f') updateForm: NgForm;
  public Editor = ClassicEditor;
  author: string;
  id: number;
  title: string = 'bbb';
  titles: string = 'bbb';
  date1: Date;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  editMode = false;
  blogCurrent: Blog;
  constructor(
    private blogService: BlogService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {
    // console.log(this.blogCurrent)
    this.blogone = this.authService.loginUserNameOrEmail;
    // this.blogone="author2222"
    this.myblog = this.blogService.getauther(this.blogone);
    for (
      this.i = 0;
      this.i < this.blogService.getLatestIndexOfBlog();
      this.i++
    ) {
      // this.a=this.myblog[this.i].author;
      if (this.blogone == this.myblog[this.i].author) {
        // this.b=this.myblog[this.i].id;
        // console.log(this.myblog[this.i].id);
        this.myblognumber = true;
        this.myfinalblog.push(
          this.blogService.getblogbyid(this.i)
          );
      }
      // this.c=this.blogService.getBlog(this.b);

      // console.log(this.c);
    }
  }

  ngOnInit(): void {
    // console.log(this.blogCurrent)
    /*this.blogone = this.authService.loginUserNameOrEmail;
    // this.blogone="author2222"
    this.myblog=this.blogService.getauther(this.blogone);
    // this.a=this.myblog[0].author;
    for(this.i=0;this.i<(this.blogService.getLatestIndexOfBlog());this.i++){
      // this.a=this.myblog[this.i].author;
      if(this.blogone==this.myblog[this.i].author)
      { 
        this.b=this.myblog[this.i].id;
        // console.log(this.myblog[this.i].id);
        this.myblognumber=true;
        this.myfinalblog.push(this.blogService.getBlog(this.i));
      }
      this.c=this.blogService.getBlog(this.b);
      
      // console.log(this.c);
    }*/
    // console.log(this.myfinalblog);
    this.blogService.newBlog.subscribe(() => {
      this.myfinalblog = [];
      // for (let i = 0; i < this.sum; ++i)
      // {
      //   if(this.blogSerice.blogs[i] == null){
      //     break;
      //   }
      //   this.blogs.push(this.blogSerice.getBlog(i));
      //  // this.blogs=this.blogSerice.blogs;
      // }
      
      /*console.log(this.blogService.getLatestIndexOfBlog());
      console.log(this.blogService.getBlogs());
      for (
        this.i = 0;
        this.i < this.blogService.getLatestIndexOfBlog();
        this.i++
      ) {
        if(this.myblog[this.i].author==undefined){
          console.log(this.myblog[this.i].author);
            break;
        }
        if (this.blogone == this.myblog[this.i].author) {
          this.myblognumber = true;
          this.myfinalblog.push(
            this.blogService.getblogbyid(this.i)
          );
        }
      }*/
      this.blogone = this.authService.loginUserNameOrEmail;
    // this.blogone="author2222"
    this.myblog = this.blogService.getauther(this.blogone);
    for (
      this.i = 0;
      this.i < this.blogService.getLatestIndexOfBlog();
      this.i++
    ) {
      // this.a=this.myblog[this.i].author;
      if (this.blogone == this.myblog[this.i].author) {
        // this.b=this.myblog[this.i].id;
        // console.log(this.myblog[this.i].id);
        this.myblognumber = true;
        this.myfinalblog.push(
          this.blogService.getblogbyid(this.i)
          );
      }
      // this.c=this.blogService.getBlog(this.b);

      // console.log(this.c);
    }
      
    });

    /*------------------edit*/
    this.dropdownList = [
      { item_id: 1, item_text: 'html' },
      { item_id: 2, item_text: 'css' },
      { item_id: 3, item_text: 'javascript' },
      { item_id: 4, item_text: 'angular' },
      { item_id: 5, item_text: 'reactJs' },
      { item_id: 6, item_text: 'PHP' },
    ];
    if (this.authService.loginUserNameOrEmail == '') {
      alert('please login first');
      this.router.navigate(['/login']);
    }
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  initForm(id) {
    // if (this.editMode)
    {
      const blog = this.blogService.getBlog(id);
      // this.title = blog.title.toString();
      // console.log(blog);
    }
    this.blogCurrent = this.blogService.getBlog(id);
    this.title = this.blogCurrent.title;
    this.selectedItems = this.blogCurrent.language;
    this.date1 = this.blogCurrent.date;
  }

  onDetail(id,title) {
    this.blogdetail=this.blogService.getBlogDetails(id,title);
    console.log(this.blogdetail);
    this.router.navigate(['../blog/' + this.blogdetail], { relativeTo: this.route });
  }
  onEdit(id) {
    this.router.navigate(['../blog/' + id + '/edit'], {
      relativeTo: this.route,
    });
  }
  toggleModal(id: number) {
    // console.log(id);
    // this.router.navigate(['blog/'+id+'/edit'],{queryParams: {fragment: 'edit'}});
    this.modalOpen = !this.modalOpen;
    this.initForm(id);
  }

  onDelete(id) {
    console.log(id);
    this.blogService.deleteBlog(id);
    // this.router.navigate(['../this.myblog'],{relativeTo: this.route});
  }
  openModalDialogCustomClass(content,id) {
    // this.modalService.open(content, { modalDialogClass: 'dark-modal' });
    // this.modalService.open(EditblogsComponent, { modalDialogClass: 'dark-modal' });
    const modalRef = this.modalService.open(EditblogsComponent, {
      size: 'lg',
      backdrop: false,
    });

    (<EditblogsComponent>modalRef.componentInstance).dataToTakeAsInput =
      content;

    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((result) => {
        console.log(result);
      });
      this.blogService.editBlogModal=id;
  }

  onEditBlogSubmit() {}
  ngOnChanges(){
    this.blogone = this.authService.loginUserNameOrEmail;
    // this.blogone="author2222"
    this.myblog = this.blogService.getauther(this.blogone);
    for (
      this.i = 0;
      this.i < this.blogService.getLatestIndexOfBlog();
      this.i++
    ) {
      // this.a=this.myblog[this.i].author;
      if (this.blogone == this.myblog[this.i].author) {
        // this.b=this.myblog[this.i].id;
        // console.log(this.myblog[this.i].id);
        this.myblognumber = true;
        this.myfinalblog.push(
          this.blogService.getblogbyid(this.i)
          );
      }
      // this.c=this.blogService.getBlog(this.b);

      // console.log(this.c);
    }
  }
}
