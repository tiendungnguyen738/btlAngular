import { Component, OnInit } from '@angular/core';
import { Training } from '../Training';
import { TrainingService } from '../training.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

  constructor(private trainingService:TrainingService,
              private activatedRoute:ActivatedRoute,
              private location:Location) { }

  ngOnInit() {
    this.getTraining(this.id);
  }
  training:Training={
    id:0,
    trainingCode:'',
    trainingName:'',
    trainingEndDate:'',
    trainingStartDate:'',
    trainingStatus:1
  };

  //quay ve trang danh sach
  goBack(){
    this.location.back();
  }
  
  //get training
  id= +this.activatedRoute.snapshot.paramMap.get("id");
  getTraining(id:number):void{
    this.trainingService.getTraining(id).subscribe(training =>this.training = training);
  }

  //sua training
  submit(value){
    this.trainingService.editTraining(value).subscribe(() =>this.goBack())
    console.log(value);
  }

}
