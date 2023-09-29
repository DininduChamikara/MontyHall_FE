import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequest } from '../dto/api-request';
import { ApiResponse } from '../dto/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  runSimulation(iterationCount: number, keepSelection: boolean, selectedDoor: number): Observable<ApiResponse>{
    return this.httpClient.post<ApiResponse>(`/api/run_simulation`, <ApiRequest>{
      iterationCount,
      keepSelection,
      selectedDoor
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}
