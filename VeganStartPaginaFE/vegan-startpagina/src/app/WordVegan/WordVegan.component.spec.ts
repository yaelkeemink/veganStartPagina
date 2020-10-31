/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordVeganComponent } from './WordVegan.component';

describe('WordVeganComponent', () => {
  let component: WordVeganComponent;
  let fixture: ComponentFixture<WordVeganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordVeganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordVeganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
