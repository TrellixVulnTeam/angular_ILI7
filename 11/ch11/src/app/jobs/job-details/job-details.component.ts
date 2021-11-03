import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { jobService } from '../jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job:{id:number,title:string,company:string,place:string,time:string};
  // // job:{id:number,title:string};
  // paramsSubscription: Subscription;
  constructor(private route:ActivatedRoute,
    private jobservice:jobService,
    private router:Router) { }

  ngOnInit(): void {
    // this.job={
    //   id:this.route.snapshot.params['id'],
    //   title:this.route.snapshot.params['title'],
    //   company:this.route.snapshot.params['company'],
    //   place:this.route.snapshot.params['place'],
    //   time:this.route.snapshot.params['time']
    // };
    // this.paramsSubscription=this.route.params.subscribe(
    //   (params: Params)=> {
    //     this.job.id=params['id'];
    //     console.log(this.job.place);
    //   }
    // );
    // const id=+this.route.snapshot.params['id'];
    // this.job = this.logservice.getjob(id);
    // console.log(id);
    // this.route.params
    // .subscribe(
    //   (params:Params)=>{
    //     console.log("ok");
    //     this.job=this.logservice.getjob(+params['id']);
    //   }
    // );
    const id=+this.route.snapshot.params['id'];
    this.job = this.jobservice.getjob(id);
    // console.log(id);
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.job=this.jobservice.getjob(+params['id']);
      }
    );
  }

}
