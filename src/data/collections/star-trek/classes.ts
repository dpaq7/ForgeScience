import { starfleetOfficer } from './classes/starfleet-officer';
import { vigilante } from './classes/vigilante';
import { diplomat } from './classes/diplomat';
import { smuggler } from './classes/smuggler';
import { trader } from './classes/trader';

export class StarTrekClasses {
    static readonly starfleetOfficer = starfleetOfficer;
    static readonly vigilante = vigilante;
    static readonly diplomat = diplomat;
    static readonly smuggler = smuggler;
    static readonly trader = trader;

    static readonly starTrekClasses = [
        starfleetOfficer,
        vigilante,
        diplomat,
        smuggler,
        trader
    ];
}