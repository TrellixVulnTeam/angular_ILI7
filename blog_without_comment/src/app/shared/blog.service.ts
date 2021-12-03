import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  updateBlog = new Subject();
  newBlog = new Subject();
  editBlogModal;

  blogs: Blog[] = [
    new Blog(
      0,
      'aaa',
      'bbb',
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg',
      'aa',
      [
        { item_id: 1, item_text: 'HTML' },
        { item_id: 6, item_text: 'PHP' },
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
        { item_id: 5, item_text: 'reactJs' },
        { item_id: 6, item_text: 'PHP' },
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
        { item_id: 5, item_text: 'reactJs' },
        { item_id: 6, item_text: 'PHP' },
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
        { item_id: 5, item_text: 'reactJs' },
        { item_id: 6, item_text: 'PHP' },
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
        { item_id: 5, item_text: 'reactJs' },
        { item_id: 6, item_text: 'PHP' },
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
        { item_id: 5, item_text: 'reactJs' },
        { item_id: 6, item_text: 'PHP' },
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
        { item_id: 5, item_text: 'reactJs' },
        { item_id: 6, item_text: 'PHP' },
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
        { item_id: 5, item_text: 'reactJs' },
        { item_id: 6, item_text: 'PHP' },
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
        { item_id: 5, item_text: 'reactJs' },
        { item_id: 6, item_text: 'PHP' },
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
        { item_id: 5, item_text: 'reactJs' },
        { item_id: 6, item_text: 'PHP' },
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
        { item_id: 5, item_text: 'reactJs' },
        { item_id: 6, item_text: 'PHP' },
      ],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
  ];
  constructor(private authService: AuthService, private router: Router) {}

  getLatestIndexOfBlog() {
    return this.blogs.length;
  }

  getBlogs() {
    return this.blogs;
  }

  getblogbyid(id) {
    for (let i = 0; i < this.getLatestIndexOfBlog(); i++) {
      if (id == this.blogs[i].id) {
        return this.blogs[id];
      }
    }
  }
  getBlogByTitle(title, id1) {
    for (let i = 0; i < this.getLatestIndexOfBlog(); i++) {
      if (title == this.blogs[i].title && id1 == this.blogs[i].id) {
        return this.blogs[i];
      }
    }
  }

  getBlog(index: number) {
    return this.blogs[index];
  }

  addBlog(newBlog: Blog) {
    this.blogs.push(newBlog);
  }

  getauther(auth) {
    return this.blogs;
  }

  getBlogDetails(id: number, title: string) {
    for (let i = 0; i < this.getLatestIndexOfBlog(); i++) {
      if (title == this.blogs[i].title && id == this.blogs[i].id) {
        this.blogs.findIndex((item) => item.id === id);
        return this.blogs.findIndex((item) => item.id === id);
      }
    }
  }

  updateBlogs(index: number, newBlog, date: any) {
    this.blogs[index] = newBlog;
    this.blogs[index].date = date;
    this.updateBlog.next(this.blogs.slice());
    this.newBlog.next();
  }

  editBlog(id: number, updateBlog: Blog) {
    this.blogs[id] = updateBlog;

    this.updateBlog.next();
    this.newBlog.next();
  }

  deleteBlog(id) {
    this.blogs = this.blogs.filter((item) => item.id !== id);
    this.updateBlog.next();
    this.newBlog.next();
  }

  deleteBlogs(id: number) {
    this.blogs.splice(id, 1);
    this.updateBlog.next(this.blogs.slice());
    this.newBlog.next(this.blogs.slice());
  }
}
