import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from 'src/app/shared/auth.service';
import { BlogService } from 'src/app/shared/blog.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  public Editor = ClassicEditor;
  author:string;
  id: number;
  title: string;
  editMode = false;
  constructor(private router:Router,
    private blogService:BlogService,private auth:AuthService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'html' },
    //   { item_id: 2, item_text: 'css' },
    //   { item_id: 3, item_text: 'javascript' },
    //   { item_id: 4, item_text: 'angular' },
    //   { item_id: 5, item_text: 'reactJs' },
    //   { item_id: 6, item_text: 'PHP' },
    // ];
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true,
    // };

    this.author=(this.auth.loginUserNameOrEmail);
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    // let recipeName = '';
    // let recipeImagePath = '';
    // let recipeDescription = '';
    // let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const blog = this.blogService.getBlog(this.id);
      this.title = blog.title;
      // if (recipe['ingredients']) {
      //   for (let ingredient of recipe.ingredients) {
      //     recipeIngredients.push(
      //       new FormGroup({
      //         name: new FormControl(ingredient.name, Validators.required),
      //         amount: new FormControl(ingredient.amount, [
      //           Validators.required,
      //           Validators.pattern(/^[1-9]+[0-9]*$/)
      //         ])
      //       })
      //     );
      //   }
      // }
    }
  }
  onEditBlogSubmit() {

  }
}
