import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from 'src/app/shared/blog.model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editblogs',
  templateUrl: './editblogs.component.html'
})
export class EditblogsComponent implements OnInit {
  @Input() dataToTakeAsInput: any;
  @ViewChild('editBlogForm') updateForm: NgForm;

  public descriptionEditor = ClassicEditor;
  languagesDropdown = [];
  languageDropdownSettings = {};
  blogCurrent: Blog;


  constructor(private router: Router,
    private blogService: BlogService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.languagesDropdown = this.blogService.getLanguages();
    this.languageDropdownSettings = this.blogService.dropdownSettingsfunction();
    this.initForm();
  }

  initForm() {
    this.blogCurrent = this.blogService.getBlogByTitle(this.dataToTakeAsInput);
  }

  onEditBlogSubmit() {
    const id = this.blogService.blogs.findIndex(blog => blog.id === this.blogService.editBlogModal);
    this.blogService.updateBlogs(id, this.updateForm.value, this.blogCurrent.date);
    this.activeModal.close('Close click');
    this.router.navigate(['/myblog/']);
  }
}
