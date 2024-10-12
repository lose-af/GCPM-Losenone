ServerEvents.recipes((event) => {
	// Don't allow hammering craftings, use gregtech recipes instead.
	// This removes the recipe of Barrel and Mineral Survey Tools either.
	event.remove({
		input: 'immersiveengineering:hammer',
	});

	// Remove Hammer either.
	event.remove({
		output: 'immersiveengineering:hammer',
	});

	// Add Barrel back. (Harder version)
	event.shaped('immersiveengineering:gunpart_barrel', ['  H', ' R ', 'I  '], {
		H: '#forge:tools/hammers',
		R: '#forge:rods/black_steel',
		I: '#forge:ingots/black_steel',
	});

	// Remove recipes of steel rods (use gregtech's instead)
	event.remove({
		output: 'immersiveengineering:stick_steel',
	});
});
