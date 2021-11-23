import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from 'src/app/shared/blog.model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';
import { AuthService } from 'src/app/shared/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editblogs',
  templateUrl: './editblogs.component.html',
  styleUrls: ['./editblogs.component.css']
})
export class EditblogsComponent implements OnInit {
  @Input() dataToTakeAsInput: any;

  @ViewChild('f') updateForm: NgForm;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  public Editor = ClassicEditor;
  isLoginUser=false;
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

  myblogedit= false;
  constructor(private router:Router,
    private blogService:BlogService,private authService:AuthService,
    private route:ActivatedRoute,public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'html' },
      { item_id: 2, item_text: 'css' },
      { item_id: 3, item_text: 'javascript' },
      { item_id: 4, item_text: 'angular' },
      { item_id: 5, item_text: 'reactJs' },
      { item_id: 6, item_text: 'PHP' },
    ];
    if(this.authService.loginUserNameOrEmail==''){
      alert("please login first");
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
    this.initForm(this.dataToTakeAsInput);
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
    this.blogCurrent=this.blogService.getBlog(id);
    this.title=this.blogCurrent.title;
    this.selectedItems=this.blogCurrent.language;
    this.date1=this.blogCurrent.date;
  }

  onEditBlogSubmit(){
    let date=this.date1;
    console.log(this.updateForm.value);
    this.blogService.updateBlogs(this.dataToTakeAsInput, this.updateForm.value,this.date1);
    console.log(this.blogService.updateBlogs(this.dataToTakeAsInput, this.updateForm.value,this.date1))
    // return ;
    /*if(this.myblogedit){
    }
    else{
      this.blogService.updateBlogs(this.id, this.updateForm.value,this.date1);
      this.closeBtn.nativeElement.click();
    }*/
    this.closeBtn.nativeElement.click();
    this.router.navigate(['/myblog/']);
  }
}
