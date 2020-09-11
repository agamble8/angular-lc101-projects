import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueGifsComponent } from './true-gifs.component';

describe('TrueGifsComponent', () => {
  let component: TrueGifsComponent;
  let fixture: ComponentFixture<TrueGifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueGifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
