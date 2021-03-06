import LootTable from '../structures/LootTable';
import RareDropTable, { GemTable } from './RareDropTable';
import SimpleMonster from '../structures/SimpleMonster';

export const GiantMoleTable = new LootTable()
	.every('Big bones')
	.every('Mole claw', 1)
	.every('Mole skin', [1, 3])
	.oneIn(400, 'Long bone')
	.oneIn(500, 'Clue scroll (elite)')
	.oneIn(3000, 'Baby mole')
	.oneIn(5000, 'Curved bone')

	/* Weapons and armour */
	.addItem('Adamant longsword', 1, 10)
	.addItem('Mithril platebody', 1, 9)
	.addItem('Amulet of strength', 1, 7)
	.addItem('Mithril axe', 1, 2)
	.addItem('Mithril battleaxe')
	.addItem('Rune med helm')

	/* Runes and ammunition */
	.addItem('Air rune', 105, 20)
	.addItem('Blood rune', 15, 19)
	.addItem('Fire rune', 105, 11)
	.addItem('Death rune', 7, 3)
	.addItem('Law rune', 15, 5)
	.addItem('Iron arrow', 690, 10)

	/* Other */
	.addItem('Yew logs', 100, 10)
	.addItem('Shark', 4, 4)
	.addItem('Mithril bar', 1, 3)
	.addItem('Iron ore', 100, 2)
	.addItem('Oyster pearls')

	/* Subtables */
	.add(RareDropTable)
	.add(GemTable);

export default new SimpleMonster({ id: 5779, name: 'Giant Mole', table: GiantMoleTable });
