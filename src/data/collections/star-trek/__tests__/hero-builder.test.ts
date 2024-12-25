import { starTrekSetting } from '../campaign-setting';
import { StarTrekAncestries } from '../ancestries';
import { StarTrekCareers } from '../careers';
import { StarTrekClasses } from '../classes';
import { StarTrekCultures } from '../cultures';
import { StarTrekKits } from '../kits';
import { Hero } from '../../../../models/hero';
import { HeroLogic } from '../../../../logic/hero-logic';
import { Characteristic } from '../../../../enums/characteristic';
import { FeatureField } from '../../../../enums/feature-field';
import { FeatureType } from '../../../../enums/feature-type';

describe('Star Trek Hero Builder', () => {
    let hero: Hero;

    beforeEach(() => {
        // Create a new hero for each test
        hero = {
            id: 'test-hero',
            name: 'Test Character',
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

    test('can create a Vulcan Science Officer', () => {
        // Set ancestry
        hero.ancestry = StarTrekAncestries.vulcan;
        expect(hero.ancestry).toBeDefined();
        expect(hero.ancestry?.name).toBe('Vulcan');

        // Set culture
        hero.culture = StarTrekCultures.bespokeCulture;
        expect(hero.culture).toBeDefined();
        expect(hero.culture?.name).toBe('Star Trek Culture');

        // Set class
        const starfleetOfficer = StarTrekClasses.starTrekClasses.find(c => c.id === 'class-starfleet-officer');
        hero.class = starfleetOfficer;
        expect(hero.class).toBeDefined();
        expect(hero.class?.name).toBe('Starfleet Officer');

        // Set career
        hero.career = StarTrekCareers.scienceOfficer;
        expect(hero.career).toBeDefined();
        expect(hero.career?.name).toBe('Science Officer');

        // Add science kit
        hero.kits = [StarTrekKits.scienceKit];
        expect(hero.kits).toHaveLength(1);
        expect(hero.kits[0].name).toBe('Science Kit');

        // Verify hero's characteristics
        const presence = HeroLogic.getCharacteristic(hero, Characteristic.Presence);
        expect(presence).toBeGreaterThan(0);
    });

    test('can create a Klingon Tactical Officer', () => {
        // Set ancestry
        hero.ancestry = StarTrekAncestries.klingon;
        expect(hero.ancestry).toBeDefined();
        expect(hero.ancestry?.name).toBe('Klingon');

        // Set culture
        hero.culture = StarTrekCultures.bespokeCulture;
        expect(hero.culture).toBeDefined();
        expect(hero.culture?.name).toBe('Star Trek Culture');

        // Set career
        hero.career = StarTrekCareers.securityOfficer;
        expect(hero.career).toBeDefined();
        expect(hero.career?.name).toBe('Security Officer');

        // Set class
        const starfleetOfficer = StarTrekClasses.starTrekClasses.find(c => c.id === 'class-starfleet-officer');
        hero.class = starfleetOfficer;
        expect(hero.class).toBeDefined();
        expect(hero.class?.name).toBe('Starfleet Officer');

        // Add tactical kit
        hero.kits = [StarTrekKits.tacticalKit];
        expect(hero.kits).toHaveLength(1);
        expect(hero.kits[0].name).toBe('Tactical Kit');

        // Verify hero's characteristics
        const might = HeroLogic.getCharacteristic(hero, Characteristic.Might);
        expect(might).toBeGreaterThan(0);
    });

    test('can create a Human Engineer', () => {
        // Set ancestry
        hero.ancestry = StarTrekAncestries.human;
        expect(hero.ancestry).toBeDefined();
        expect(hero.ancestry?.name).toBe('Human');

        // Set culture
        hero.culture = StarTrekCultures.bespokeCulture;
        expect(hero.culture).toBeDefined();
        expect(hero.culture?.name).toBe('Star Trek Culture');

        // Set career
        hero.career = StarTrekCareers.engineer;
        expect(hero.career).toBeDefined();
        expect(hero.career?.name).toBe('Engineer');

        // Set class
        const starfleetOfficer = StarTrekClasses.starTrekClasses.find(c => c.id === 'class-starfleet-officer');
        hero.class = starfleetOfficer;
        expect(hero.class).toBeDefined();
        expect(hero.class?.name).toBe('Starfleet Officer');

        // Add engineering kit
        hero.kits = [StarTrekKits.engineeringKit];
        expect(hero.kits).toHaveLength(1);
        expect(hero.kits[0].name).toBe('Engineering Kit');

        // Verify hero's characteristics
        const presence = HeroLogic.getCharacteristic(hero, Characteristic.Presence);
        expect(presence).toBeGreaterThan(0);
    });

    test('setting contains all required elements', () => {
        // Verify ancestries
        expect(starTrekSetting.ancestries).toBeDefined();
        expect(starTrekSetting.ancestries.length).toBeGreaterThan(0);

        // Verify cultures
        expect(starTrekSetting.cultures).toBeDefined();
        expect(starTrekSetting.cultures.length).toBeGreaterThan(0);

        // Verify careers
        expect(starTrekSetting.careers).toBeDefined();
        expect(starTrekSetting.careers.length).toBeGreaterThan(0);

        // Verify classes
        expect(starTrekSetting.classes).toBeDefined();
        expect(starTrekSetting.classes.length).toBeGreaterThan(0);

        // Verify kits
        expect(starTrekSetting.kits).toBeDefined();
        expect(starTrekSetting.kits.length).toBeGreaterThan(0);

        // Verify languages
        expect(starTrekSetting.languages).toBeDefined();
        expect(starTrekSetting.languages.length).toBeGreaterThan(0);
        expect(starTrekSetting.defaultLanguages).toContain('Federation Standard');
    });

    test('can create heroes with all Star Trek classes', () => {
        // Test each class can be assigned and has correct properties
        const allClasses = StarTrekClasses.starTrekClasses;
        expect(allClasses.length).toBe(5); // We should have 5 classes

        allClasses.forEach(heroClass => {
            // Reset hero class
            hero.class = heroClass;
            
            // Basic class properties
            expect(hero.class).toBeDefined();
            expect(hero.class?.id).toBeDefined();
            expect(hero.class?.name).toBeDefined();
            expect(hero.class?.description).toBeDefined();
            expect(hero.class?.heroicResource).toBeDefined();
            expect(hero.class?.primaryCharacteristics.length).toBe(2);

            // Verify features
            expect(hero.class?.featuresByLevel).toBeDefined();
            expect(hero.class?.featuresByLevel.length).toBeGreaterThan(0);

            // Calculate derived stats
            const stats = {
                maxStamina: hero.class?.featuresByLevel[0]?.features.some(f => 
                    f.type === FeatureType.Bonus && 
                    (f.data as { field: FeatureField })?.field === FeatureField.Stamina
                ) ? 1 : 0,
                maxHeroicResource: 3 // Default value for testing
            };
            expect(stats.maxStamina).toBeGreaterThanOrEqual(0);
            expect(stats.maxHeroicResource).toBeGreaterThan(0);
        });

        // Test specific classes
        const starfleetOfficer = allClasses.find(c => c.id === 'class-starfleet-officer');
        expect(starfleetOfficer?.name).toBe('Starfleet Officer');
        expect(starfleetOfficer?.heroicResource).toBe('Command Points');
        expect(starfleetOfficer?.primaryCharacteristics).toContain(Characteristic.Presence);
        expect(starfleetOfficer?.primaryCharacteristics).toContain(Characteristic.Reason);

        const vigilante = allClasses.find(c => c.id === 'class-vigilante');
        expect(vigilante?.name).toBe('Vigilante');
        expect(vigilante?.heroicResource).toBe('Determination');

        const diplomat = allClasses.find(c => c.id === 'class-diplomat');
        expect(diplomat?.name).toBe('Diplomat');

        const smuggler = allClasses.find(c => c.id === 'class-smuggler');
        expect(smuggler?.name).toBe('Smuggler');

        const trader = allClasses.find(c => c.id === 'class-trader');
        expect(trader?.name).toBe('Trader');
    });

    test('Starfleet Officer abilities are correctly implemented', () => {
        // Set class and initialize class abilities
        hero.class = StarTrekClasses.starfleetOfficer;
        hero.features = hero.class.abilities.map(ability => ({
            id: `feature-${ability.id}`,
            name: ability.name,
            description: ability.description,
            type: FeatureType.ClassAbility,
            data: {
                cost: 1,
                count: 1,
                selectedIDs: [ability.id]
            }
        }));

        expect(hero.class).toBeDefined();
        expect(hero.class?.name).toBe('Starfleet Officer');

        // Test abilities
        const abilities = HeroLogic.getAbilities(hero, true, false, true);
        expect(abilities).toBeDefined();
        expect(abilities.length).toBeGreaterThan(0);

        // Verify specific abilities
        const abilityNames = abilities.map(a => a.name);
        expect(abilityNames).toContain('Tactical Analysis');
        expect(abilityNames).toContain('Photon Torpedoes');
    });

    test('Smuggler abilities are correctly implemented', () => {
        // Set class and initialize class abilities
        hero.class = StarTrekClasses.smuggler;
        hero.features = hero.class.abilities.map(ability => ({
            id: `feature-${ability.id}`,
            name: ability.name,
            description: ability.description,
            type: FeatureType.ClassAbility,
            data: {
                cost: 1,
                count: 1,
                selectedIDs: [ability.id]
            }
        }));

        expect(hero.class).toBeDefined();
        expect(hero.class?.name).toBe('Smuggler');

        // Test abilities
        const abilities = HeroLogic.getAbilities(hero, true, false, true);
        expect(abilities).toBeDefined();
        expect(abilities.length).toBeGreaterThan(0);

        // Verify specific abilities
        const abilityNames = abilities.map(a => a.name);
        expect(abilityNames).toContain('Evasive Maneuvers');
        expect(abilityNames).toContain('Smuggler\'s Luck');
    });

    test('Diplomat abilities are correctly implemented', () => {
        // Set class and initialize class abilities
        hero.class = StarTrekClasses.diplomat;
        hero.features = hero.class.abilities.map(ability => ({
            id: `feature-${ability.id}`,
            name: ability.name,
            description: ability.description,
            type: FeatureType.ClassAbility,
            data: {
                cost: 1,
                count: 1,
                selectedIDs: [ability.id]
            }
        }));

        expect(hero.class).toBeDefined();
        expect(hero.class?.name).toBe('Diplomat');

        // Test abilities
        const abilities = HeroLogic.getAbilities(hero, true, false, true);
        expect(abilities).toBeDefined();
        expect(abilities.length).toBeGreaterThan(0);

        // Verify specific abilities
        const abilityNames = abilities.map(a => a.name);
        expect(abilityNames).toContain('Diplomatic Immunity');
        expect(abilityNames).toContain('Cultural Expertise');
    });

    test('Trader abilities are correctly implemented', () => {
        // Set class and initialize class abilities
        hero.class = StarTrekClasses.trader;
        hero.features = hero.class.abilities.map(ability => ({
            id: `feature-${ability.id}`,
            name: ability.name,
            description: ability.description,
            type: FeatureType.ClassAbility,
            data: {
                cost: 1,
                count: 1,
                selectedIDs: [ability.id]
            }
        }));

        expect(hero.class).toBeDefined();
        expect(hero.class?.name).toBe('Trader');

        // Test abilities
        const abilities = HeroLogic.getAbilities(hero, true, false, true);
        expect(abilities).toBeDefined();
        expect(abilities.length).toBeGreaterThan(0);

        // Verify specific abilities
        const abilityNames = abilities.map(a => a.name);
        expect(abilityNames).toContain('Negotiate Deal');
        expect(abilityNames).toContain('Market Manipulation');
    });

    test('Vigilante abilities are correctly implemented', () => {
        // Set class and initialize class abilities
        hero.class = StarTrekClasses.vigilante;
        hero.features = hero.class.abilities.map(ability => ({
            id: `feature-${ability.id}`,
            name: ability.name,
            description: ability.description,
            type: FeatureType.ClassAbility,
            data: {
                cost: 1,
                count: 1,
                selectedIDs: [ability.id]
            }
        }));

        expect(hero.class).toBeDefined();
        expect(hero.class?.name).toBe('Vigilante');

        // Test abilities
        const abilities = HeroLogic.getAbilities(hero, true, false, true);
        expect(abilities).toBeDefined();
        expect(abilities.length).toBeGreaterThan(0);

        // Verify specific abilities
        const abilityNames = abilities.map(a => a.name);
        expect(abilityNames).toContain('Guerrilla Tactics');
        expect(abilityNames).toContain('Improvised Explosives');
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
