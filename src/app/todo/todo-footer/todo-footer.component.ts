import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { BorrarAllTodoAccion } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: string;
  pendientes: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }
  borrarTodo(){
    const accion = new BorrarAllTodoAccion();
    this.store.dispatch(accion);
  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
    const accion = new fromFiltro.SetFlitroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {

    this.pendientes = todos.filter(todo => {
      return !todo.completado;
    }).length;

  }


}
