import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserBioComponent } from './user-bio.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

describe('UserBioComponent', () => {
  let component: UserBioComponent;
  let fixture: ComponentFixture<UserBioComponent>;
  let dataServiceMock: jasmine.SpyObj<DataService>;

      TestBed.configureTestingModule({
      declarations: [UserBioComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    });

    fixture = TestBed.createComponent(UserBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});