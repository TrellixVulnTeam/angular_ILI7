import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit,OnChanges {
  job:{id:number,title:string,company:string,place:string,time:string};
  // job:{id:number,title:string};
  paramsSubscription: Subscription;
  @Input() jobone;

  ngOnChanges(){
    this.job = this.jobone;
    // console.log(this.jobone.id);
  }

  constructor(private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(){
    // this.job={
    //   id:this.route.snapshot.params['id'],
    //   title:'aa',

    // };
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
    //     console.log(this.job.id);
    //   }
    // );
  }
  
  onReLoad(){}
  onEdit(){
    // this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'});
    this.router.navigate(['/jobs',this.job.id,'edit']);
  }

}
