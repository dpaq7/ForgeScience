import { Characteristic } from '../enums/characteristic';
import { HeroLogic } from '../logic/hero-logic';
import { Hero } from '../models/hero';
import { StarTrekAncestries } from '../data/collections/star-trek/ancestries';
import { StarTrekCareers } from '../data/collections/star-trek/careers';
import { StarTrekClasses } from '../data/collections/star-trek/classes';
import { StarTrekCultures } from '../data/collections/star-trek/cultures';
import { StarTrekKits } from '../data/collections/star-trek/kits';
import { starTrekSetting } from '../data/collections/star-trek/campaign-setting';

describe('Hero Builder Workflow Tests', () => {
    let hero: Hero;

    beforeEach(() => {
        hero = {
            id: 'test-hero',
            name: 'Test Hero',
            settingIDs: [starTrekSetting.id],
            ancestry: null,
            culture: null,
            career: null,
            class: null,
            complication: null,
            kits: [],
            level: 1,
            state: {
                staminaDamage: 0,
                recoveriesUsed: 0,
                victories: 0,
                xp: 0,
                heroicResource: 0,
                heroTokens: 0,
                renown: 0,
                projectPoints: 0,
                conditions: [],
                inventory: []
            },
            features: []
        };
    });

    test('can create a complete hero', () => {
        // Set ancestry
        hero.ancestry = StarTrekAncestries.vulcan;
        expect(hero.ancestry).toBeDefined();
        expect(hero.ancestry?.name).toBe('Vulcan');

        // Set culture
        hero.culture = StarTrekCultures.bespokeCulture;
        expect(hero.culture).toBeDefined();
        expect(hero.culture?.name).toBe('Star Trek Culture');

        // Set career
        hero.career = StarTrekCareers.scienceOfficer;
        expect(hero.career).toBeDefined();
        expect(hero.career?.name).toBe('Science Officer');

        // Set class
        const starfleetOfficer = StarTrekClasses.starTrekClasses.find(c => c.id === 'class-starfleet-officer');
        hero.class = starfleetOfficer;
        expect(hero.class).toBeDefined();
        expect(hero.class?.name).toBe('Starfleet Officer');

        // Add science kit
        hero.kits = [StarTrekKits.scienceKit];
        expect(hero.kits).toHaveLength(1);
        expect(hero.kits[0].name).toBe('Science Kit');

        // Verify hero's characteristics
        const presence = HeroLogic.getCharacteristic(hero, Characteristic.Presence);
        expect(presence).toBeGreaterThan(0);
    });

    test('hero features calculate correctly', () => {
        // Create a complete hero
        hero.ancestry = StarTrekAncestries.vulcan;
        hero.culture = StarTrekCultures.bespokeCulture;
        hero.career = StarTrekCareers.scienceOfficer;
        hero.class = StarTrekClasses.starTrekClasses.find(c => c.id === 'class-starfleet-officer');
        hero.kits = [StarTrekKits.scienceKit];

        // Get all features
        const features = HeroLogic.getFeatures(hero);
        expect(features).toBeDefined();
        expect(features.length).toBeGreaterThan(0);

        // Verify stamina calculation
        const stamina = HeroLogic.getStamina(hero);
        expect(stamina).toBeGreaterThan(0);

        // Verify speed calculation
        const speed = HeroLogic.getSpeed(hero);
        expect(speed).toBeGreaterThan(0);

        // Verify stability calculation
        const stability = HeroLogic.getStability(hero);
        expect(stability).toBeGreaterThan(0);
    });
});
