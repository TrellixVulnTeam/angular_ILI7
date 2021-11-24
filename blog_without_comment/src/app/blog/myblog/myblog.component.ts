import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { BlogService } from 'src/app/shared/blog.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditblogsComponent } from '../editblogs/editblogs.component';

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css'],
})
export class MyblogComponent implements OnInit {
  myblog;
  authorname;
  i;
  myfinalblog = [];

  modalOpen = false;
  dataPassToChild: any = '12';

  constructor(
    private blogService: BlogService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.authorname = this.authService.loginUserNameOrEmail;
    this.myblog = this.blogService.getauther(this.authorname);
    for (
      this.i = 0;
      this.i < this.blogService.getLatestIndexOfBlog();
      this.i++
    ) {
      if (this.authorname == this.myblog[this.i].author) {
        this.myfinalblog.push(this.blogService.getblogbyid(this.i));
      }
    }
  }

  ngOnInit(): void {
    this.blogService.newBlog.subscribe(() => {
      this.myfinalblog = [];

      this.authorname = this.authService.loginUserNameOrEmail;
      this.myblog = this.blogService.getauther(this.authorname);
      for (
        this.i = 0;
        this.i < this.blogService.getLatestIndexOfBlog();
        this.i++
      ) {
        if (this.authorname == this.myblog[this.i].author) {
          this.myfinalblog.push(this.blogService.getblogbyid(this.i));
        }
      }
    });
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDetail(id, title) {
    this.router.navigate(
      ['../blog/' + this.blogService.getBlogDetails(id, title)],
      {
        relativeTo: this.route,
      }
    );
  }
  onEdit(id) {
    this.router.navigate(['../blog/' + id + '/edit'], {
      relativeTo: this.route,
    });
  }
  toggleModal(id: number) {
    this.modalOpen = !this.modalOpen;
  }

  onDelete(id) {
    this.blogService.deleteBlog(id);
  }
  openModalDialogCustomClass(content, id) {
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
    this.blogService.editBlogModal = id;
  }
}
