import { TestBed, inject } from '@angular/core/testing';

import { PessoaService } from './pessoa.service';

describe('PessoaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PessoaService]
    });
  });

  it('should be created', inject([PessoaService], (service: PessoaService) => {
    expect(service).toBeTruthy();
  }));
});
