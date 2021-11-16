import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model';
import { JobsComponent } from '../jobs.component';
import { jobService } from '../jobs.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  job: Job[];
  // newJobFrom;
  constructor(private jobService:jobService) { }

  ngOnInit(): void {
    this.job = this.jobService.job;
  }
  onNewSubmitPost(titles:HTMLInputElement,companyname:HTMLInputElement,placename:HTMLInputElement){
    const title = titles.value;
    const company = companyname.value;
    const place = placename.value;
    // console.log(title,company,place);
    if(!title.trim() || !company.trim() || !place.trim()){
      alert("Empty Fields");
      return;
    }
    const time = this.jobService.getTime();
    const id = this.jobService.getLengthOfJobsArray()+1;
    const newJob = new Job(id, title, company, place, time);
    this.jobService.addNewJob(newJob);
    // this.newJobFrom.reset();
  }

}
