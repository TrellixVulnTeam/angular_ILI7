import { Job } from "./job.model";

export class jobService {
job = [
    {
      id: 1,
      title: 'Adviser',
      company: 'TATA',
      place: 'Chennai',
      time: '01-11-21',
    },
    {
      id: 2,
      title: 'Accountant',
      company: 'Spacex',
      place: 'Florida',
      time: '11-11-21',
    },
    {
      id: 3,
      title: 'Webdeveloper',
      company: 'TCS',
      place: 'Mumbai',
      time: '21-11-21',
    }
  ];

  getjobs() {
    return this.job;
  }

  getjob(id: number) {
    const job = this.job.find(
      (s) => {
        return s.id === id;
      }
    );
    return job;
  }

  addNewJob(newJob: Job){
    this.job.push(newJob);
  } 

  getLengthOfJobsArray(){
    return this.job.length;
  }

  getTime(){
    const time = new Date();
    return `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}
}