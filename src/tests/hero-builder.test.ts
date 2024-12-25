import { starfleetOfficer } from '../data/collections/star-trek/classes/starfleet-officer';
import { HeroLogic } from '../logic/hero-logic';
import { FeatureType } from '../enums/feature-type';
import { FeatureClassAbilityData } from '../models/feature';
import { Hero } from '../models/hero';

describe('Hero Builder Tests', () => {
    describe('Starfleet Officer Class', () => {
        let hero: Hero;

        beforeEach(() => {
            hero = {
                id: 'test-hero',
                name: 'Test Hero',
                class: starfleetOfficer,
                level: 1,
                settingIDs: [],
                ancestry: null,
                culture: null,
                career: null,
                complication: null,
                kits: [],
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

        test('should have correct ability selection features', () => {
            const level1Features = starfleetOfficer.featuresByLevel[0].features;
            
            // Find ability selection features
            const signatureAbility = level1Features.find(f => 
                f.type === FeatureType.ClassAbility && 
                (f.data as FeatureClassAbilityData).cost === 1
            );
            const threePointAbilities = level1Features.find(f => 
                f.type === FeatureType.ClassAbility && 
                (f.data as FeatureClassAbilityData).cost === 3
            );
            const fivePointAbility = level1Features.find(f => 
                f.type === FeatureType.ClassAbility && 
                (f.data as FeatureClassAbilityData).cost === 5
            );

            // Verify signature ability feature
            expect(signatureAbility).toBeDefined();
            expect((signatureAbility?.data as FeatureClassAbilityData).count).toBe(1);
            expect((signatureAbility?.data as FeatureClassAbilityData).selectedIDs).toHaveLength(0);

            // Verify 3-point ability feature
            expect(threePointAbilities).toBeDefined();
            expect((threePointAbilities?.data as FeatureClassAbilityData).count).toBe(2);
            expect((threePointAbilities?.data as FeatureClassAbilityData).selectedIDs).toHaveLength(0);

            // Verify 5-point ability feature
            expect(fivePointAbility).toBeDefined();
            expect((fivePointAbility?.data as FeatureClassAbilityData).count).toBe(1);
            expect((fivePointAbility?.data as FeatureClassAbilityData).selectedIDs).toHaveLength(0);
        });

        test('should have abilities with correct costs', () => {
            const abilities = starfleetOfficer.abilities;

            // Count abilities by cost
            const costOneAbilities = abilities.filter(a => a.cost === 1);
            const costThreeAbilities = abilities.filter(a => a.cost === 3);
            const costFiveAbilities = abilities.filter(a => a.cost === 5);

            // Verify we have at least enough abilities to choose from
            expect(costOneAbilities.length).toBeGreaterThanOrEqual(1);
            expect(costThreeAbilities.length).toBeGreaterThanOrEqual(2);
            expect(costFiveAbilities.length).toBeGreaterThanOrEqual(1);

            // Verify specific abilities have correct costs
            const tacticalAnalysis = abilities.find(a => a.id === 'starfleet-tactical-analysis');
            const photonTorpedoes = abilities.find(a => a.id === 'starfleet-photon-torpedoes');
            const shieldModulation = abilities.find(a => a.id === 'starfleet-shield-modulation');
            const commandAuthority = abilities.find(a => a.id === 'starfleet-command-authority');

            expect(tacticalAnalysis?.cost).toBe(1);
            expect(photonTorpedoes?.cost).toBe(3);
            expect(shieldModulation?.cost).toBe(3);
            expect(commandAuthority?.cost).toBe(5);
        });

        test('should allow selecting abilities', () => {
            const level1Features = starfleetOfficer.featuresByLevel[0].features;
            
            // Get ability selection features
            const signatureAbility = level1Features.find(f => 
                f.type === FeatureType.ClassAbility && 
                (f.data as FeatureClassAbilityData).cost === 1
            );
            const threePointAbilities = level1Features.find(f => 
                f.type === FeatureType.ClassAbility && 
                (f.data as FeatureClassAbilityData).cost === 3
            );
            const fivePointAbility = level1Features.find(f => 
                f.type === FeatureType.ClassAbility && 
                (f.data as FeatureClassAbilityData).cost === 5
            );

            // Add features to hero
            if (signatureAbility) hero.features.push(signatureAbility);
            if (threePointAbilities) hero.features.push(threePointAbilities);
            if (fivePointAbility) hero.features.push(fivePointAbility);

            // Select abilities
            if (signatureAbility) {
                const data = signatureAbility.data as FeatureClassAbilityData;
                data.selectedIDs = ['starfleet-tactical-analysis'];
            }

            if (threePointAbilities) {
                const data = threePointAbilities.data as FeatureClassAbilityData;
                data.selectedIDs = ['starfleet-photon-torpedoes', 'starfleet-shield-modulation'];
            }

            if (fivePointAbility) {
                const data = fivePointAbility.data as FeatureClassAbilityData;
                data.selectedIDs = ['starfleet-command-authority'];
            }

            // Verify selections
            expect((signatureAbility?.data as FeatureClassAbilityData).selectedIDs).toContain('starfleet-tactical-analysis');
            expect((threePointAbilities?.data as FeatureClassAbilityData).selectedIDs).toContain('starfleet-photon-torpedoes');
            expect((threePointAbilities?.data as FeatureClassAbilityData).selectedIDs).toContain('starfleet-shield-modulation');
            expect((fivePointAbility?.data as FeatureClassAbilityData).selectedIDs).toContain('starfleet-command-authority');
        });
    });
});
