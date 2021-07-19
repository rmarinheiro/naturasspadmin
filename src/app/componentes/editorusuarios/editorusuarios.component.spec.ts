import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorusuariosComponent } from './editorusuarios.component';

describe('EditorusuariosComponent', () => {
  let component: EditorusuariosComponent;
  let fixture: ComponentFixture<EditorusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
