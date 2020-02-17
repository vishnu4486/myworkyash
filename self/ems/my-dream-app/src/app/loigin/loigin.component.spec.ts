import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoiginComponent } from './loigin.component';

describe('LoiginComponent', () => {
  let component: LoiginComponent;
  let fixture: ComponentFixture<LoiginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoiginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoiginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
