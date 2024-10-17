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

	// Remove recipes of sticks (rods) (use gregtech's instead)
	event.remove({
		output: 'immersiveengineering:stick_steel',
	});
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

	// Steel in arc furnace
	event.custom({
		type: 'immersiveengineering:arc_furnace',
		additives: [{ tag: 'forge:dusts/coal_coke' }, { tag: 'forge:dusts/coal_coke' }],
		energy: 384000,
		input: { tag: 'forge:ingots/iron' },
		results: [{ tag: 'forge:ingots/steel' }],
		slag: { tag: 'forge:slag' },
		time: 450,
	});
	event.custom({
		type: 'immersiveengineering:arc_furnace',
		additives: [{ tag: 'forge:dusts/coke' }, { tag: 'forge:dusts/coke' }],
		energy: 384000,
		input: { tag: 'forge:ingots/iron' },
		results: [{ tag: 'forge:ingots/steel' }],
		slag: { tag: 'forge:slag' },
		time: 450,
	});

	// Recipe for tag forge:dusts/coke
	event.custom({
		type: 'immersiveengineering:crusher',
		energy: 2400,
		input: { tag: 'forge:gems/coke' },
		result: { tag: 'forge:dusts/coke' },
		secondaries: [],
	});
	event.custom({
		type: 'immersiveengineering:crusher',
		energy: 4800,
		input: { tag: 'forge:storage_blocks/coke' },
		result: { base_ingredient: { tag: 'forge:dusts/coke' }, count: 9 },
		secondaries: [],
	});
	event.custom({
		type: 'immersiveengineering:squeezer',
		energy: 19200,
		input: { base_ingredient: { tag: 'forge:dusts/coke' }, count: 8 },
		result: { tag: 'forge:dusts/hop_graphite' },
	});

	// Blastbrick -> Firebricks from GTCEu
	event.shaped('gtceu:firebricks', ['BB ', 'BB ', '   '], {
		B: 'immersiveengineering:blastbrick',
	});
});
