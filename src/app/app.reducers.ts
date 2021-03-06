import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filtroReducer } from './filter/filtro.reduces';
import { filtrosValidos } from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;

}


export const AppReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}