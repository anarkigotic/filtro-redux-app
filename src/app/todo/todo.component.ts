import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { Todo } from './model/todo.model';
import { ToggleAllTodoAccion } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  completado = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toogleAllNota() {
    this.completado = !this.completado;
    const accion = new ToggleAllTodoAccion(this.completado);
    this.store.dispatch(accion);
  }

}
