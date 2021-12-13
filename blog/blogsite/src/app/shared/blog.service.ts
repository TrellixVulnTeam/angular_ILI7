import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { Blog } from './Model/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  updateBlog = new Subject();
  editBlogModal;

  blogs: Blog[] = [
    new Blog(
      0,
      'aaa',
      'bbb',
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg',
      'aa',
      [
        { languageId: 1, languageName: 'HTML' },
        { languageId: 6, languageName: 'PHP' },
      ],
      new Date(2021, 10, 14)
    ),
    new Blog(
      1,
      'cc',
      'bbdddb',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'auth555',
      [
        { languageId: 5, languageName: 'reactJs' },
        { languageId: 6, languageName: 'PHP' },
      ],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      2,
      'dd',
      'bbb',
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'tulesh.g@prominentpixel.com',
      [
        { languageId: 5, languageName: 'reactJs' },
        { languageId: 6, languageName: 'PHP' },
      ],
      new Date(2021, 10, 14, 12, 38, 32, 0)
    ),
    new Blog(
      3,
      'ee',
      'bbdddb',
      'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'author111',
      [
        { languageId: 5, languageName: 'reactJs' },
        { languageId: 6, languageName: 'PHP' },
      ],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      4,
      'ff',
      'bbb',
      'https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'author2',
      [
        { languageId: 5, languageName: 'reactJs' },
        { languageId: 6, languageName: 'PHP' },
      ],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      5,
      'gg',
      'bbdddb',
      'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'tulesh.g@prominentpixel.com',
      [
        { languageId: 5, languageName: 'reactJs' },
        { languageId: 6, languageName: 'PHP' },
      ],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      6,
      'hh',
      'bbb',
      'https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'auth1',
      [
        { languageId: 5, languageName: 'reactJs' },
        { languageId: 6, languageName: 'PHP' },
      ],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      7,
      'ii',
      'bbdddb',
      'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'author2222',
      [
        { languageId: 5, languageName: 'reactJs' },
        { languageId: 6, languageName: 'PHP' },
      ],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      8,
      'jj',
      'bbdddb',
      'https://images.pexels.com/photos/461429/pexels-photo-461429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'tulesh.g@prominentpixel.com',
      [
        { languageId: 5, languageName: 'reactJs' },
        { languageId: 6, languageName: 'PHP' },
      ],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      9,
      'kk',
      'bbdddb',
      'https://images.pexels.com/photos/461421/pexels-photo-461421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'aaa',
      [
        { languageId: 5, languageName: 'reactJs' },
        { languageId: 6, languageName: 'PHP' },
      ],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      10,
      'll',
      'bbdddb',
      'https://images.pexels.com/photos/461422/pexels-photo-461422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'author2222',
      [
        { languageId: 5, languageName: 'reactJs' },
        { languageId: 6, languageName: 'PHP' },
      ],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
  ];

  getLatestIndexOfBlog() {
    return this.blogs.length;
  }

  getBlogs() {
    return this.blogs;
  }

  getBlogByTitle(id) {
    for (var blog of this.getBlogs()) {
      if (id == blog.id) {
        return blog;
      }
    }
  }

  getBlog(index: number) {
    return this.blogs[index];
  }

  addBlog(newBlog: Blog) {
    this.blogs.push(newBlog);
  }

  getBlogById(id: number) {
    return this.blogs.findIndex((item) => item.id === id);
  }

  updateBlogs(index: number, newBlog:Blog) {
    this.blogs[index] = newBlog;
    this.updateBlog.next(this.blogs.slice());
  }

  deleteBlog(id) {
    this.blogs = this.blogs.filter((item) => item.id !== id);
    this.updateBlog.next();
  }

  getLanguages() {
    return [
      { languageId: 1, languageName: 'html' },
      { languageId: 2, languageName: 'css' },
      { languageId: 3, languageName: 'javascript' },
      { languageId: 4, languageName: 'angular' },
      { languageId: 5, languageName: 'reactJs' },
      { languageId: 6, languageName: 'PHP' },
    ];;
  }

  dropdownSettings() {
    return {
      singleSelection: false,
      idField: 'languageId',
      textField: 'languageName',
      languageSelectAll: 'Select All',
      languageUnselectAll: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true,
    }
  }
}
