import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveGridComponent } from './save-grid.component';

describe('SaveGridComponent', () => {
  let component: SaveGridComponent;
  let fixture: ComponentFixture<SaveGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
