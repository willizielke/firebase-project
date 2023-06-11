import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestorageComponent } from './firestorage.component';

describe('FirestorageComponent', () => {
  let component: FirestorageComponent;
  let fixture: ComponentFixture<FirestorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirestorageComponent]
    });
    fixture = TestBed.createComponent(FirestorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
