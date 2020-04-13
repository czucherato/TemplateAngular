import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, Observer } from 'rxjs';
import { TodoListService } from './todo-list.service'
import { Store } from './todo-list.store';
import { Task } from './components/Task';

const todoList: Task[] = [{ "id": 1, "nome": "Responder e-mails", "finalizado": true, "iniciado": false }];

function createResponse(body) {
    return Observable.create((observer: Observer<any>) => {
        observer.next(body);
    });
}

class MockHttp {
    get() {
        return createResponse(todoList);
    }
}

describe('TaskService', () => {
    let service: TodoListService;
    let http: HttpClient;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useClass: MockHttp },
                TodoListService,
                Store
            ]
        });

        http = bed.get(HttpClient);
        service = bed.get(TodoListService);
    });

    it('Deve retornar lista de tarefas', () => {
        //spyOn(http, 'get').and.returnValues(createResponse(todoList));

        service.getToDoList$
        .subscribe((result) => {
            expect(result.length).toBe(1);
            console.log(result);
            console.log(todoList);
            expect(result).toEqual(todoList);
        });
    })
})