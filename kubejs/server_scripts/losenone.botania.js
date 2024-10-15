ServerEvents.recipes((event) => {
	// Add mana pearl
	event.shaped('botania:mana_pearl', ['   ', 'BDB', '   '], {
		B: 'botania:mana_bottle',
		D: 'gtceu:ender_pearl_dust',
	});
});
