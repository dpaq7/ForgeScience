import { Language } from '../../../models/language';

export class StarTrekLanguages {
    private static languages: Language[] = [
        {
            name: 'Federation Standard',
            description: 'The common language of the United Federation of Planets.'
        },
        {
            name: 'Vulcan',
            description: 'The ancient and logical language of the Vulcan people.'
        },
        {
            name: 'Klingon',
            description: 'The warrior language of the Klingon Empire, known for its harsh consonants and military terminology.'
        },
        {
            name: 'Romulan',
            description: 'The sophisticated language of the Romulan Star Empire.'
        },
        {
            name: 'Andorian',
            description: 'The complex language of the Andorian people, one of the founding members of the Federation.'
        },
        {
            name: 'Tellarite',
            description: 'The argumentative language of the Tellarites, known for its debate-oriented structure.'
        },
        {
            name: 'Ferengi',
            description: 'The commerce-focused language of the Ferengi Alliance.'
        },
        {
            name: 'Cardassian',
            description: 'The formal and hierarchical language of the Cardassian Union.'
        },
        {
            name: 'Bajoran',
            description: 'The spiritual and poetic language of the Bajoran people.'
        }
    ];

    static getLanguages(): Language[] {
        return this.languages;
    }
}
