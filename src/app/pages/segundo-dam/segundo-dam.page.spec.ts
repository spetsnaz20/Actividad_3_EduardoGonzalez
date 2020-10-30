import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundoDAMPage } from './segundo-dam.page';

describe('SegundoDAMPage', () => {
  let component: SegundoDAMPage;
  let fixture: ComponentFixture<SegundoDAMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoDAMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundoDAMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
