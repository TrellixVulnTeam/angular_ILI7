import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginUserName:string;
  subscription: Subscription;
  constructor(private authService:AuthService,public translate: TranslateService) { 
     translate.addLangs(['en', 'fr','hi']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|hi/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.subscription = this.authService.loginUser.subscribe(
      (loginUser) => {
        this.loginUserName = loginUser;
      }
    )
  }

  logOut(){
    this.authService.logOut();
  }

  


}
