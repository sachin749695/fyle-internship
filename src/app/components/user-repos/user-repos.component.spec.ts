import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserReposComponent } from './user-repos.component';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

  beforeEach(() => {
    dataServiceMock = jasmine.createSpyObj('DataService', ['loading$'], {
      reposData$: of(repoData), 
    });

    TestBed.configureTestingModule({
      declarations: [UserReposComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    });

    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  
  it('should update page number on pageChanged', () => {
   
    const newPageNumber = 2;

    component.pageChanged(newPageNumber);

    
    expect(component.currentPageNumber).toEqual(newPageNumber);
  });

});