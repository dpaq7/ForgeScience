import { Hero, HeroState } from '../models/hero';
import { HeroLogic } from '../logic/hero-logic';
import { CampaignSettingData } from '../data/campaign-setting-data';
import { StarTrekAncestries } from '../data/collections/star-trek/ancestries';
import { StarTrekCareers } from '../data/collections/star-trek/careers';
import { StarTrekCultures } from '../data/collections/star-trek/cultures';
import { StarTrekKits } from '../data/collections/star-trek/kits';
import { KitType } from '../enums/kit';

describe('Hero Creation Flow', () => {
    let hero: Hero;
    const campaignSettings = CampaignSettingData.getCampaignSettings([]);

    beforeEach(() => {
        // Start with a fresh hero for each test
        hero = {
            id: 'test-hero',
            name: 'Test Character',
            settingIDs: ['star-trek'],
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

        // Initialize hero state
        HeroLogic.updateHero(hero);
    });

    test('should initialize with Star Trek setting', () => {
        expect(hero.settingIDs).toContain('star-trek');
        expect(hero.state).toBeDefined();
        expect(hero.state.xp).toBe(0);
    });

    test('should allow selecting Vulcan ancestry', () => {
        hero.ancestry = StarTrekAncestries.vulcan;
        expect(hero.ancestry).toBeDefined();
        expect(hero.ancestry?.name).toBe('Vulcan');
        
        // Verify Vulcan features are present
        const features = HeroLogic.getFeatures(hero);
        expect(features.some(f => f.name === 'Superior Physiology')).toBeTruthy();
        expect(features.some(f => f.name === 'Logical Mind')).toBeTruthy();
    });

    test('should allow selecting Star Trek culture', () => {
        hero.culture = StarTrekCultures.bespokeCulture;
        expect(hero.culture).toBeDefined();
        expect(hero.culture?.name).toBe('Star Trek Culture');
        
        // Verify culture features
        const features = HeroLogic.getFeatures(hero);
        expect(features.length).toBeGreaterThan(0);
    });

    test('should allow selecting Command Officer career', () => {
        hero.career = StarTrekCareers.commandOfficer;
        expect(hero.career).toBeDefined();
        expect(hero.career?.name).toBe('Command Officer');
        
        // Verify career features
        const features = HeroLogic.getFeatures(hero);
        expect(features.length).toBeGreaterThan(0);
    });

    test('should combine features from ancestry, culture, and career', () => {
        // Set up a complete hero
        hero.ancestry = StarTrekAncestries.vulcan;
        hero.culture = StarTrekCultures.bespokeCulture;
        hero.career = StarTrekCareers.commandOfficer;

        // Verify all required fields are set
        expect(hero.ancestry).toBeDefined();
        expect(hero.culture).toBeDefined();
        expect(hero.career).toBeDefined();

        // Verify features are properly combined
        const features = HeroLogic.getFeatures(hero);
        expect(features.length).toBeGreaterThan(0);
        
        // Features should include ones from all sources
        const ancestryFeatures = features.filter(f => 
            hero.ancestry?.features.some(af => af.name === f.name));
        const cultureFeatures = features.filter(f => 
            hero.culture?.environment?.name === f.name || 
            hero.culture?.organization?.name === f.name || 
            hero.culture?.upbringing?.name === f.name);
        const careerFeatures = features.filter(f => 
            hero.career?.features.some(cf => cf.name === f.name));
            
        expect(ancestryFeatures.length).toBeGreaterThan(0);
        expect(cultureFeatures.length).toBeGreaterThan(0);
        expect(careerFeatures.length).toBeGreaterThan(0);
    });

    test('should handle missing components', () => {
        // Test with missing ancestry
        hero.culture = StarTrekCultures.bespokeCulture;
        hero.career = StarTrekCareers.commandOfficer;
        expect(hero.ancestry).toBeNull();
        let features = HeroLogic.getFeatures(hero);
        expect(features.some(f => f.name === 'Superior Physiology')).toBeFalsy();

        // Test with missing culture
        hero.ancestry = StarTrekAncestries.vulcan;
        hero.culture = null;
        expect(hero.culture).toBeNull();
        features = HeroLogic.getFeatures(hero);
        expect(features.some(f => 
            f.name === hero.culture?.environment?.name || 
            f.name === hero.culture?.organization?.name || 
            f.name === hero.culture?.upbringing?.name
        )).toBeFalsy();

        // Test with missing career
        hero.culture = StarTrekCultures.bespokeCulture;
        hero.career = null;
        expect(hero.career).toBeNull();
        features = HeroLogic.getFeatures(hero);
        expect(features.some(f => 
            hero.career?.features.some(cf => cf.name === f.name)
        )).toBeFalsy();
    });

    // New Kit Tests
    describe('Kit System', () => {
        test('should allow adding engineering kit', () => {
            hero.kits = [StarTrekKits.engineeringKit];
            expect(hero.kits).toHaveLength(1);
            expect(hero.kits[0].type).toBe(KitType.Caster);
            expect(hero.kits[0].name).toBe('Engineering Kit');
        });

        test('should allow adding multiple kits', () => {
            hero.kits = [
                StarTrekKits.engineeringKit,
                StarTrekKits.scienceKit,
                StarTrekKits.securityKit
            ];
            expect(hero.kits).toHaveLength(3);
            expect(hero.kits.map(k => k.name)).toContain('Engineering Kit');
            expect(hero.kits.map(k => k.name)).toContain('Science Kit');
            expect(hero.kits.map(k => k.name)).toContain('Security Kit');
        });

        test('should verify kit types', () => {
            hero.kits = [
                StarTrekKits.engineeringKit,  // Caster
                StarTrekKits.securityKit      // Martial
            ];
            
            const casterKits = hero.kits.filter(k => k.type === KitType.Caster);
            const martialKits = hero.kits.filter(k => k.type === KitType.Martial);
            
            expect(casterKits).toHaveLength(1);
            expect(martialKits).toHaveLength(1);
            expect(casterKits[0].name).toBe('Engineering Kit');
            expect(martialKits[0].name).toBe('Security Kit');
        });

        test('should verify kit features', () => {
            hero.kits = [StarTrekKits.engineeringKit];
            const kit = hero.kits[0];
            
            expect(kit.features).toBeDefined();
            expect(kit.features.length).toBeGreaterThan(0);
            expect(kit.features.some(f => f.name === 'Emergency Repair')).toBeTruthy();
            expect(kit.features.some(f => f.name === 'System Diagnostic')).toBeTruthy();
        });

        test('should handle kit combat values', () => {
            hero.kits = [StarTrekKits.securityKit];
            const kit = hero.kits[0];
            
            expect(kit.stamina).toBeDefined();
            expect(kit.speed).toBeDefined();
            expect(kit.stability).toBeDefined();
            expect(kit.distance).toBeDefined();
            expect(kit.reach).toBeDefined();
        });
    });
});
