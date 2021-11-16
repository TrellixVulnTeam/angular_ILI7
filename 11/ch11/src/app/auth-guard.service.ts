import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private router:Router,
        private authServices:AuthService){
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.authServices.isAuthenticated().then(
            (auth:boolean) => {
                if(auth){
                    console.log(auth)
                    return true;
                }
                else{
                    alert("Kindly login first if you eant to edit any job");
                    this.router.navigate(['/']);
                }
            }
        )

    }
}