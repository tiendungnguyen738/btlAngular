import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-trainingform',
  templateUrl: './trainingform.component.html',
  styleUrls: ['./trainingform.component.css']
})
export class TrainingformComponent implements OnInit {

  trainingStatus="1";
  constructor(private trainingService:TrainingService,
              private location:Location) { }

  ngOnInit() {
  }
  
  goBack(){
    this.location.back();
  }
  submit(value)
  {
     this.trainingService.addTraining(value).subscribe(() =>this.goBack()) ;
    
  }

}
