import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar Todo';
export const TOGGLE_TODO = '[TODO] Toggle Todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all Todo';
export const EDITAR_TODO = '[TODO] Ediatar Todo';
export const BORRAR_TODO = '[TODO] Borrar Todo';
export const BORRAR_ALL_TODO = '[TODO] Borrar all Todo';

export class BorrarTodoAccion implements Action {
    readonly type = BORRAR_TODO;

    constructor(public id: number) {

    }

}
export class AgregarTodoAccion implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string) {

    }

}
export class ToggleTodoAccion implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) {

    }

}
export class ToggleAllTodoAccion implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor(public completado: boolean) {

    }

}
export class EditarTodoAccion implements Action {
    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string) {

    }

}
export class BorrarAllTodoAccion implements Action {
    readonly type = BORRAR_ALL_TODO;
}


export type Acciones = AgregarTodoAccion | ToggleTodoAccion | EditarTodoAccion | BorrarTodoAccion |
    ToggleAllTodoAccion | BorrarAllTodoAccion;