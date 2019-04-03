import { Action } from '@ngrx/store';

export const SET_FILTRO = '[Filter]  Set Filtro';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class SetFlitroAction implements Action {
    readonly type = SET_FILTRO;

    constructor(public filtro: filtrosValidos) {

    }

}


export type acciones = SetFlitroAction;