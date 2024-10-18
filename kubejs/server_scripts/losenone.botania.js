ServerEvents.recipes((event) => {
	// Add mana pearl
	event.shaped('1x botania:mana_pearl', ['   ', 'BDB', '   '], {
		B: 'botania:mana_bottle',
		D: 'gtceu:ender_pearl_dust',
	});
	event.shaped('2x botania:mana_pearl', ['BDB', '   ', 'BDB'], {
		B: 'botania:mana_bottle',
		D: 'gtceu:ender_pearl_dust',
	});
	event.shaped('3x botania:mana_pearl', ['BDB', 'BDB', 'BDB'], {
		B: 'botania:mana_bottle',
		D: 'gtceu:ender_pearl_dust',
	});

	// Natura Pylon
	event.shaped('botania:natura_pylon', [' N ', 'NMN', ' B '], {
		N: '#forge:nuggets/terrasteel',
		M: 'botania:mana_pylon',
		B: '#forge:dusts/blaze',
	});
});
