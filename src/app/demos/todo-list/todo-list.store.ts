import { map } from 'rxjs/operators';
import { Task } from './components/Task';
import { BehaviorSubject, Observable } from 'rxjs';

export interface State {
    todoList: Task[];
}

const state: State = {
    todoList: []
}

export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    get value() {
        return this.subject.value;
    }

    public getTodoList(): Observable<Task[]> {
        return this.store
            .pipe(
                map(store => store.todoList)
            );
    }

    set(name: string, state: any) {
        this.subject.next({
            ...this.value, [name]: state
        });
    }
}