import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Job } from '../job.model';
import { JobsComponent } from '../jobs.component';
import { jobService } from '../jobs.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  job: Job;
  title: string = '';
  company: string = '';
  place: string = '';
  constructor(private route:ActivatedRoute, private jobService:jobService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.job = this.jobService.getjob(id);
        this.title = this.job.title;
        this.company = this.job.company;
        this.place = this.job.place;
      }
    )
  }

  onUpdateJob(){
   
    // console.log(title,company,place);
    if(!this.title.trim() || !this.company.trim() || !this.place.trim()){
      alert("Empty Fields");
      return;
    }
    this.job.title = this.title;
    this.job.company = this.company;
    this.job.place = this.place;
    this.job.time = this.jobService.getTime();
    console.log(this.job)
  }

}
