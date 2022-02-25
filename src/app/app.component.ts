import { Component } from '@angular/core';
import { applicants,Applicant } from './applicants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'job-app';
  company = "Exapmle KFt";
  description = "Exapmle description";
  applicants = applicants;
  isFormVisible = false;
  newApplicant!: Applicant;

  initializeApplicant(){
    this.newApplicant = {
      id : 11,
      name : '',
      age : 0,
      role : '',
      education : "BSc", 
      desiredSalary : 100000
    }
  }

  constructor(){
    this.initializeApplicant();
  }
  
  isOutlier(applicant: Applicant):boolean{
    return applicant.education === "középiskola" && applicant.desiredSalary > 600000;
  }

  deleteApplicant( applicant: Applicant):void{
    const index = this.applicants.indexOf(applicant);
    console.info(applicant,index);
    if(index > -1){
      this.applicants.splice(index, 1);
    }
  }
  
  addApplicant() {
    this.applicants.push(this.newApplicant);
    this.initializeApplicant();
    this.isFormVisible = false;
  }

  showForm(){
    this.isFormVisible=true;
  }

}
