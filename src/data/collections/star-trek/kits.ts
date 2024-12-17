import { KitArmor, KitImplement, KitType, KitWeapon } from '../../../enums/kit';
import { AbilityDistanceType } from '../../../enums/abiity-distance-type';
import { AbilityKeyword } from '../../../enums/ability-keyword';
import { AbilityLogic } from '../../../logic/ability-logic';
import { FeatureLogic } from '../../../logic/feature-logic';
import { Kit } from '../../../models/kit';

export class StarTrekKits {
    static phaser: Kit = {
        id: 'kit-phaser',
        name: 'Phaser',
        description: 'Standard Starfleet hand phaser, capable of both stun and kill settings.',
        type: KitType.Martial,
        weapon: [KitWeapon.Light],
        armor: [],
        implement: [],
        stamina: 0,
        speed: 0,
        stability: 0,
        meleeDamage: null,
        rangedDamage: {
            tier1: 4,
            tier2: 6,
            tier3: 8
        },
        magicalDamage: null,
        distance: 10,
        reach: 1,
        area: 0,
        mobility: true,
        features: [
            FeatureLogic.createFeature({
                id: 'phaser-stun',
                name: 'Stun Setting',
                description: 'Can be set to stun, allowing for non-lethal takedowns.'
            })
        ]
    };
}
