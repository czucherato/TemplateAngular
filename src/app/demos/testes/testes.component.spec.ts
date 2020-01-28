import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesComponent } from './testes.component';

describe('TestesComponent', () => {
  let component: TestesComponent;
  let fixture: ComponentFixture<TestesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TestesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-unit-test'`, async(() => {
    const fixture = TestBed.createComponent(TestesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-unit-test');
}));

it('should render in a h1 tag', async(() => {
  const fixture = TestBed.createComponent(TestesComponent);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-unit-test!');
}));

});
