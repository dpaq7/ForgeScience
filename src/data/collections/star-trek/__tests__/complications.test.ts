import { StarTrekComplicationData } from '../complications';

const { complications } = StarTrekComplicationData;

describe('Star Trek Complications', () => {
    test('complications array exists', () => {
        expect(complications).toBeDefined();
        expect(Array.isArray(complications)).toBe(true);
    });

    test('all complications are properly registered', () => {
        expect(complications).toBeDefined();
        expect(complications.length).toBe(4);
    });

    test('each complication has required properties', () => {
        complications.forEach(complication => {
            expect(complication.id).toBeDefined();
            expect(complication.name).toBeDefined();
            expect(complication.description).toBeDefined();
        });
    });

    test('complications have unique IDs', () => {
        const ids = complications.map(c => c.id);
        const uniqueIds = new Set(ids);
        expect(ids.length).toBe(uniqueIds.size);
    });

    test('complications have unique names', () => {
        const names = complications.map(c => c.name);
        const uniqueNames = new Set(names);
        expect(names.length).toBe(uniqueNames.size);
    });

    test('specific complications exist', () => {
        const requiredComplications = [
            'complication-prime-directive',
            'complication-borg-implants',
            'complication-telepathic-trauma',
            'complication-temporal-incursion'
        ];

        const complicationIds = complications.map(c => c.id);
        requiredComplications.forEach(id => {
            expect(complicationIds).toContain(id);
        });
    });
});
