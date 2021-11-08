import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jobService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  job:{id:number,title:string,company:string,place:string,time:string}[];
  isShow = true;
  constructor(private jobservice:jobService,
    private router:Router) { }

  ngOnInit(): void {
    this.job=this.jobservice.getjobs();
    console.log(this.job);
  }
  // job = [
  //   {
  //     id: 1,
  //     title: 'Adviser',
  //     company: 'TATA',
  //     place: 'Chennai',
  //     time: '01-11-21',
  //   },
  //   {
  //     id: 2,
  //     title: 'Accountant',
  //     company: 'Space x',
  //     place: 'Florida',
  //     time: '11-11-21',
  //   },
  //   {
  //     id: 3,
  //     title: 'Web developer',
  //     company: 'TCS',
  //     place: 'Mumabi',
  //     time: '21-11-21',
  //   }
  // ];

  // getjobs() {
  //   return this.job;
  // }

  // getjob(id: number) {
  //   const job = this.job.find(
  //     (s) => {
  //       return s.id === id;
  //     }
  //   );
  //   return job;
  // }
  onReLoad(){}
  toggleChild(){
    
    this.isShow = !this.isShow;
  }
  toggleDisplay() {
  }
  onEdit(){
    // this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'});
    // this.router.navigate(['/jobs',this.job.id,'edit']);
  }
}
