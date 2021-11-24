import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Component, OnInit, Query, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  
  imageUrl: string;
  author:string;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  public Editor = ClassicEditor;
  @ViewChild('f') loginForm:NgForm;

  constructor(private router:Router,
    private blogService:BlogService,private auth:AuthService) { }

  ngOnInit(): void {
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
    console.log(this.author)
  }

  onNewBlogSubmit(){
    console.log(this.loginForm.value);
    let id=this.blogService.getLatestIndexOfBlog();
    let date=new Date();
    let description=this.loginForm.value.description;
    console.log(date);
    let a=this.blogService.addBlog({
      ...this.loginForm.value,
      description:description,
      id: id,
      date: date,
      publishBy: this.author,
    });
    this.router.navigate(['../']);
  }
}
