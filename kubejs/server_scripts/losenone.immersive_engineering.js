ServerEvents.recipes((event) => {
	// Don't allow hammering craftings, use gregtech recipes instead.
	// This removes the recipe of Barrel and Mineral Survey Tools either.
	event.remove({
		input: 'immersiveengineering:hammer',
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

	// Remove Iron Stick
	event.remove({
		output: 'immersiveengineering:stick_iron',
	});

	// Remove Aluminum
	event.remove({
		output: 'immersiveengineering:ingot_aluminum',
	});
	event.remove({
		output: 'immersiveengineering:nugget_aluminum',
	});
	event.remove({
		output: 'immersiveengineering:dust_aluminum',
	});

	// Remove Creosote
	event.remove({
		id: 'immersiveengineering:cokeoven/charcoal',
	});
	event.remove({
		id: 'immersiveengineering:cokeoven/coke_block',
	});
	event.remove({
		id: 'immersiveengineering:cokeoven/coke',
	});

	// Remove steel
	event.remove({
		id: 'immersiveengineering:blastfurnace/steel_block',
	});
	event.remove({
		id: 'immersiveengineering:blastfurnace/steel',
	});
	event.remove({
		id: 'immersiveengineering:arcfurnace/steel',
	});

	// Blastbrick -> Firebricks from GTCEu
	event.shaped('gtceu:firebricks', ['BB ', 'BB ', '   '], {
		B: 'immersiveengineering:blastbrick',
	});
});
