ServerEvents.recipes((event) => {
	const greg = event.recipes.gtceu;

	// Recipe for Unsintered Blaze Powder
	greg.mixer('unsintered_blaze_powder')
		.itemInputs('4x #forge:dusts/netherrack', '3x #forge:dusts/gold', '4x #forge:dusts/redstone')
		.itemOutputs('2x losenone:unsintered_blaze_powder')
		.duration(400)
		.EUt(32);

	// Recipe for Blaze Rod
	greg.primitive_blast_furnace('blaze_rod')
		.itemInputs('losenone:unsintered_blaze_powder', '4x #minecraft:coals')
		.itemOutputs('minecraft:blaze_rod')
		.duration(1200);
	greg.electric_blast_furnace('blaze_rod')
		.itemInputs('losenone:unsintered_blaze_powder')
		.itemOutputs('minecraft:blaze_rod')
		.duration(600)
		.EUt(120);
});
