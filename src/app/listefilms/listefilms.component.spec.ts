import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefilmsComponent } from './listefilms.component';

describe('ListefilmsComponent', () => {
  let component: ListefilmsComponent;
  let fixture: ComponentFixture<ListefilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListefilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
