import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocLibraryComponent } from './poc-library.component';

describe('PocLibraryComponent', () => {
  let component: PocLibraryComponent;
  let fixture: ComponentFixture<PocLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PocLibraryComponent]
    });
    fixture = TestBed.createComponent(PocLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
