import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacauComponent } from './cacau.component';

describe('CacauComponent', () => {
  let component: CacauComponent;
  let fixture: ComponentFixture<CacauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
