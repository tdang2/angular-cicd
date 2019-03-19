import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgMaterialModule } from '../../ng-material/ng-material.module';
import { ShibaComponent } from './shiba.component';

describe('ShibaComponent', () => {
  let component: ShibaComponent;
  let fixture: ComponentFixture<ShibaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShibaComponent ],
      imports: [
        NgMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
