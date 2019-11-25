import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from './Training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpClient:HttpClient) { }
  private urlTraining = "http://localhost:8080/aht/api/training";
  httpOption = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'my-auth-token'
    })
  };
  //get listTraining
  getListTraining():Observable<Training[]>
  {
    return this.httpClient.get<Training[]>(this.urlTraining);
  }

  //add training
  addTraining(training:Training):Observable<Training>
  {
    return this.httpClient.post<Training>(this.urlTraining,training,this.httpOption);
  }

  //get a training
  getTraining(id:number):Observable<Training>
  {
    const urlGetTraining = this.urlTraining+"/"+id;
    return this.httpClient.get<Training>(urlGetTraining);
  }

  //edit training
  editTraining(training:Training):Observable<Training>
  {
    return this.httpClient.put<Training>(this.urlTraining,training,this.httpOption);
  }

  //delete training
  deleteTraining(training:Training | number):Observable<Training>
  {
    const id = typeof training === 'number'?training : training.id;
    const urlDeleteTraining = this.urlTraining+"/"+id;
    return this.httpClient.delete<Training>(urlDeleteTraining);
  }
}
