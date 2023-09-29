import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be run simulate', () => {
    service.runSimulation(1, true, 0).subscribe({
      next: (response) => {
        console.log(response)
        expect(response).not.toBeUndefined()
      },
      error: (err) => console.log(err)
      
    });
  });
});
