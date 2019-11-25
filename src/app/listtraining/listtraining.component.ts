import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Training } from '../Training';

@Component({
  selector: 'app-listtraining',
  templateUrl: './listtraining.component.html',
  styleUrls: ['./listtraining.component.css']
})
export class ListtrainingComponent implements OnInit {

  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
    this.getListTraining();
  }
  Trainings:Training[];
  
  //lay danh sach training
  getListTraining():void
  {
    this.trainingService.getListTraining().subscribe(listTraining =>this.Trainings = listTraining);
  }

  //xoa training
  deleteTraining(training:Training){
    if(window.confirm("you sure ???")){
      this.Trainings = this.Trainings.filter(daotao => daotao !== training)
      this.trainingService.deleteTraining(training).subscribe();
    }
  }

}
