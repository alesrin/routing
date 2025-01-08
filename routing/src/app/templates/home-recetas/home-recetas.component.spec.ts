import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecetasComponent } from './home-recetas.component';

describe('HomeRecetasComponent', () => {
  let component: HomeRecetasComponent;
  let fixture: ComponentFixture<HomeRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRecetasComponent]
    });
    fixture = TestBed.createComponent(HomeRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
