import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgMaterialModule } from '../../ng-material/ng-material.module';
import { MaterialTableComponent } from './material-table.component';

describe('MaterialTableComponent', () => {
  let component: MaterialTableComponent;
  let fixture: ComponentFixture<MaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTableComponent ],
      imports: [
        NgMaterialModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
