import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vences a thanos');
const todo2 = new Todo('Vencer a Magneto');
const todo3 = new Todo('Vencer a Venom');
todo2.completado = true;
const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, accion: fromTodo.Acciones): Todo[] {
    switch (accion.type) {
        case fromTodo.BORRAR_TODO:
            return state.filter(Objecttodo => {
                return Objecttodo.id !== accion.id;
            });
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(accion.texto);
            return [...state, todo];
        case fromTodo.TOGGLE_ALL_TODO:
            return state.map(todoe => {
                return {
                    ...todoe,
                    completado: accion.completado
                }
            });
        case fromTodo.TOGGLE_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === accion.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };

                } else {
                    return todoEdit;
                }
            });
        case fromTodo.EDITAR_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === accion.id) {
                    return {
                        ...todoEdit,
                        texto: accion.texto
                    };
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.BORRAR_ALL_TODO:
            return state.filter(todo => !todo.completado)
        default:
            return state;
    }
}
