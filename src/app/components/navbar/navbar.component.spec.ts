import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { DataService } from 'src/app/services/data.service';
import { of, throwError } from 'rxjs';



describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let dataServiceMock: jasmine.SpyObj<DataService>;
  beforeEach(() => {
    dataServiceMock = jasmine.createSpyObj('DataService', ['setUsername', 'fetchUserData']);
    
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    });
    
    // spyOn(dataServiceMock, 'fetchUserData').and.returnValue(of(userData) as any); // Replace 'userData' with your test data
    
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.searchedUsername).toEqual('');
    expect(component.userdata).toBeUndefined();
    expect(component.isLoading).toBe(true);
  });

  it('should call onSearch method on ngOnInit', () => {
    // Arrange
    const searchedUsername = 'sachin749695';
    component.searchedUsername = searchedUsername;
    
    // Set up the userData$ observable in the mock
    dataServiceMock.userData$ = of(userData);
  
    // Act
    component.onSearch();
  
    // Assert
    expect(dataServiceMock.setUsername).toHaveBeenCalledWith(searchedUsername);
    expect(component.isLoading).toBe(false);
    expect(component.userdata).toEqual(userData);
  });

  it('should set username and update user data on successful fetch', () => {
    // Arrange
   

    // Mock the data service to return an observable with the mock user data
    dataServiceMock.userData$ = of(userData);

    // Act
    component.onSearch();

    // Assert
    expect(dataServiceMock.setUsername).toHaveBeenCalledWith(component.searchedUsername);
    expect(component.isLoading).toBe(false);
    expect(component.userdata).toEqual(userData);
  });

;

  it('should unsubscribe onDestroy', () => {
    // Arrange
    const component: any = fixture.componentInstance;
    spyOn(component.getDestroy$(), 'next');
    spyOn(component.getDestroy$(), 'complete');
  
    // Act
    component.ngOnDestroy();
  
    // Assert
    expect(component.getDestroy$().next).toHaveBeenCalledOnceWith();
    expect(component.getDestroy$().complete).toHaveBeenCalledOnceWith();
  });

  // Add more tests for different scenarios and edge cases
});