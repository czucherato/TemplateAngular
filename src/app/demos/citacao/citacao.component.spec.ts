import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CitacaoComponent } from './citacao.component';
import { CitacaoService } from 'src/app/services/citacao.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Citacao } from 'src/app/models/citacao.model';

describe('CitacaoComponent', () => {
  let component: CitacaoComponent;
  let fixture: ComponentFixture<CitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should use the quoteList from the service", () => {
    const citacaoService = fixture.debugElement.injector.get(CitacaoService);
    fixture.detectChanges();
    expect(citacaoService.filtrar()).toEqual(component.citacoes);
  });

  it("should create a new post", () => {
    component.texto = "I love this test";
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain("I love this test");
  });

  it("should disable the button when textArea is empty", () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

  it("should enable button when textArea is not empty", () => {
    component.texto = "I love this test";
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });

  it("should remove post upon card click", () => {
    component.texto = "This is a fresh post";
    fixture.detectChanges();

    fixture.debugElement
      .query(By.css(".row"))
      .query(By.css(".card"))
      .triggerEventHandler("click", null);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain("This is a fresh post");
  });

  it("should fetch data asynchronously", async () => {
    const fakedFetchedList = [
      new Citacao("I love unit testing", "Mon 4, 2018")
    ];
    const citacaoService = fixture.debugElement.injector.get(CitacaoService);
    let spy = spyOn(citacaoService, "filtrarDoServidor").and.returnValue(
      Promise.resolve(fakedFetchedList)
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.citacoes).toBe(fakedFetchedList);
    });
  });
  
});
