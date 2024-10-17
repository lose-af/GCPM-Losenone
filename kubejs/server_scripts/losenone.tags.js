// Item tags
ServerEvents.tags('item', (event) => {
	// For Immersive Engineering
	// Coal Coke -> Coke
	event.add('forge:gems/coke', '#forge:coal_coke');
	event.add('forge:dusts/coke', '#forge:dusts/coal_coke');
	event.add('forge:storage_blocks/coke', '#forge:storage_blocks/coal_coke');

	// Use GTCEu Bauxite tags for Raw Aluminum
	// (Take care of differences between "aluminium" and "aluminum")
	event.add('forge:raw_materials/bauxite', 'immersiveengineering:raw_aluminum');
	event.add('forge:storage_blocks/raw_bauxite', 'immersiveengineering:raw_block_aluminum');
	event.remove('forge:raw_materials/aluminum', 'immersiveengineering:raw_aluminum');
	event.remove('forge:storage_blocks/raw_aluminum', 'immersiveengineering:raw_block_aluminum');
});

// Fluid Tags
ServerEvents.tags('fluid', (event) => {
	// Use GTCTu Bio Diesel tags
	event.add('forge:bio_diesel', '#forge:biodiesel');
});
