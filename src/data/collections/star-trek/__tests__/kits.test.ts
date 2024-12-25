import { StarTrekKits } from '../kits';
import { KitType } from '../../../../enums/kit';

describe('Star Trek Kits', () => {
    test('all kits are properly registered', () => {
        const expectedKits = [
            'Engineering Kit',
            'Science Kit',
            'Security Kit',
            'Tactical Kit',
            'Diplomat Kit'
        ];

        const actualKits = StarTrekKits.allKits.map(kit => kit.name);
        expectedKits.forEach(kitName => {
            expect(actualKits).toContain(kitName);
        });
    });

    test('kits are properly typed', () => {
        const martialKits = StarTrekKits.allKits.filter(kit => kit.type === KitType.Martial);
        const casterKits = StarTrekKits.allKits.filter(kit => kit.type === KitType.Caster);

        expect(martialKits.length).toBeGreaterThan(0);
        expect(casterKits.length).toBeGreaterThan(0);
    });

    test('each kit has required properties', () => {
        const requiredProperties = [
            'id',
            'name',
            'description',
            'type',
            'armor',
            'weapon',
            'implement',
            'stamina',
            'speed',
            'stability',
            'meleeDamage'
        ];

        StarTrekKits.allKits.forEach(kit => {
            requiredProperties.forEach(prop => {
                expect(kit).toHaveProperty(prop);
            });
        });
    });

    test('specific kits exist', () => {
        const requiredKits = [
            StarTrekKits.engineeringKit,
            StarTrekKits.scienceKit,
            StarTrekKits.securityKit,
            StarTrekKits.tacticalKit,
            StarTrekKits.diplomatKit
        ];

        requiredKits.forEach(kit => {
            expect(kit).toBeDefined();
            expect(kit.id).toBeDefined();
            expect(kit.name).toBeDefined();
        });
    });
});
