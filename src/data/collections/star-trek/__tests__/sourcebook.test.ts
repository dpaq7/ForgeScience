import { CampaignSetting } from '../../../../models/campaign-setting';
import * as fs from 'fs';
import * as path from 'path';

describe('Star Trek Sourcebook', () => {
    let sourcebook: CampaignSetting;

    beforeAll(() => {
        const sourcebookPath = path.join(__dirname, '../../../../../../Trek_Campaign_Setting.json');
        const sourcebookContent = fs.readFileSync(sourcebookPath, 'utf-8');
        sourcebook = JSON.parse(sourcebookContent);
    });

    test('sourcebook has required base properties', () => {
        expect(sourcebook.id).toBe('star-trek');
        expect(sourcebook.name).toBe('Star Trek');
        expect(sourcebook.description).toBeDefined();
        expect(sourcebook.isHomebrew).toBe(true);
    });

    test('ancestries are properly defined', () => {
        expect(sourcebook.ancestries).toBeDefined();
        expect(sourcebook.ancestries.length).toBe(8);

        const requiredAncestries = [
            'ancestry-vulcan',
            'ancestry-klingon',
            'ancestry-bajoran',
            'ancestry-cardassian',
            'ancestry-ferengi',
            'ancestry-trill',
            'ancestry-andorian',
            'ancestry-human'
        ];

        requiredAncestries.forEach(ancestryId => {
            const ancestry = sourcebook.ancestries.find(a => a.id === ancestryId);
            expect(ancestry).toBeDefined();
            expect(ancestry?.features.length).toBeGreaterThan(0);
        });
    });

    test('classes are properly defined', () => {
        expect(sourcebook.classes).toBeDefined();
        expect(sourcebook.classes.length).toBe(5);

        const requiredClasses = [
            'class-starfleet-officer',
            'class-vigilante',
            'class-smuggler',
            'class-trader',
            'class-diplomat'
        ];

        requiredClasses.forEach(classId => {
            const classObj = sourcebook.classes.find(c => c.id === classId);
            expect(classObj).toBeDefined();
            expect(classObj?.featuresByLevel.length).toBeGreaterThan(0);
            expect(classObj?.featuresByLevel[0].features.length).toBeGreaterThan(0);
        });
    });

    test('careers are properly defined', () => {
        expect(sourcebook.careers).toBeDefined();
        expect(sourcebook.careers.length).toBe(7);

        const requiredCareers = [
            'career-command-officer',
            'career-science-officer',
            'career-communications',
            'career-pilot',
            'career-engineer',
            'career-security',
            'career-medical'
        ];

        requiredCareers.forEach(careerId => {
            const career = sourcebook.careers.find(c => c.id === careerId);
            expect(career).toBeDefined();
            expect(career?.features.length).toBeGreaterThan(0);
        });
    });

    test('kits are properly defined', () => {
        expect(sourcebook.kits).toBeDefined();
        expect(sourcebook.kits.length).toBe(5);

        sourcebook.kits.forEach(kit => {
            expect(kit.type).toBeDefined();
            expect(['Martial', 'Caster']).toContain(kit.type);
            expect(kit.armor).toBeDefined();
            expect(Array.isArray(kit.armor)).toBe(true);
            expect(kit.weapon).toBeDefined();
            expect(Array.isArray(kit.weapon)).toBe(true);
            expect(kit.implement).toBeDefined();
            expect(Array.isArray(kit.implement)).toBe(true);
            expect(kit.stamina).toBeGreaterThan(0);
            expect(kit.speed).toBeGreaterThan(0);
            expect(kit.stability).toBeGreaterThan(0);
            expect(kit.meleeDamage).toBeDefined();
            expect(kit.meleeDamage?.tier1).toBeGreaterThan(0);
            expect(kit.meleeDamage?.tier2).toBeGreaterThan(0);
            expect(kit.meleeDamage?.tier3).toBeGreaterThan(0);
            expect(kit.features.length).toBeGreaterThan(0);
        });
    });

    test('complications are properly defined', () => {
        expect(sourcebook.complications).toBeDefined();
        expect(sourcebook.complications.length).toBeGreaterThan(0);

        sourcebook.complications.forEach(complication => {
            expect(complication.features.length).toBe(2); // One benefit and one drawback
            expect(complication.features[0].description).toContain('benefit');
            expect(complication.features[1].description).toContain('drawback');
        });
    });

    test('domains are properly defined', () => {
        expect(sourcebook.domains).toBeDefined();
        expect(sourcebook.domains.length).toBe(5);

        sourcebook.domains.forEach(domain => {
            expect(domain.featuresByLevel).toBeDefined();
            expect(domain.featuresByLevel.length).toBeGreaterThan(0);
            expect(domain.featuresByLevel[0].level).toBe(1);
        });
    });

    test('skills are properly defined', () => {
        expect(sourcebook.skills).toBeDefined();
        expect(sourcebook.skills.length).toBeGreaterThan(0);

        const validTypes = ['Technology:', 'Lore:', 'Science:', 'Interpersonal:'];
        sourcebook.skills.forEach(skill => {
            expect(skill.description).toBeDefined();
            expect(validTypes.some(type => skill.description.startsWith(type))).toBeTruthy();
        });
    });

    test('languages are properly defined', () => {
        expect(sourcebook.languages).toBeDefined();
        expect(sourcebook.languages.length).toBeGreaterThan(0);
        expect(sourcebook.defaultLanguages).toContain('Federation Standard');
    });

    test('cultures are properly defined', () => {
        expect(sourcebook.cultures).toBeDefined();
        expect(sourcebook.cultures.length).toBe(3);

        const requiredCultures = [
            'culture-federation',
            'culture-klingon-empire',
            'culture-romulan-star-empire'
        ];

        requiredCultures.forEach(cultureId => {
            const culture = sourcebook.cultures.find(c => c.id === cultureId);
            expect(culture).toBeDefined();
            expect(culture?.languages.length).toBeGreaterThan(0);
            expect(culture?.environment).toBeDefined();
            expect(culture?.organization).toBeDefined();
            expect(culture?.upbringing).toBeDefined();
        });
    });
});
