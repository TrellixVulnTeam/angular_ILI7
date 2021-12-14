import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Blog } from 'src/app/shared/Model/blog.model';

@Component({
  selector: 'app-editblogs',
  templateUrl: './editblogs.component.html'
})
export class EditblogsComponent implements OnInit {
  @Input() dataToTakeAsInput: number;
  @ViewChild('editBlogForm') updateForm: NgForm;

  public descriptionEditor = ClassicEditor;
  languagesDropdown = [];
  languageDropdownSettings = {};
  blogForEdit: Blog;

  constructor(private router: Router,
    private blogService: BlogService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.languagesDropdown = this.blogService.getLanguages();
    this.languageDropdownSettings = this.blogService.dropdownSettings();
    this.initForm();
  }

  initForm() {
    this.blogForEdit = this.blogService.getBlogByTitle(this.dataToTakeAsInput);
  }

  onEditBlogSubmit() {
    const id = this.blogService.blogs.findIndex(blog => blog.id === this.blogService.editBlogModal);
    this.blogService.updateBlogs(id, {...this.updateForm.value,date:this.blogForEdit.date});
    this.activeModal.close('Close click');
    this.router.navigate(['/myblog/']);
  }
}
