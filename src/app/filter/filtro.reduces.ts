import * as fromFiltro from './filter.actions';
const estadoInicial: fromFiltro.filtrosValidos = 'todos';

export function filtroReducer(state = estadoInicial, actions: fromFiltro.acciones): fromFiltro.filtrosValidos {
    switch (actions.type) {
        case fromFiltro.SET_FILTRO:
            return actions.filtro;
        default:
            return state;
    }
}
