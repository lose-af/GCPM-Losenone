ServerEvents.recipes((event) => {
	const greg = event.recipes.gtceu;

	// Remove some world intercation recipes and replace with GTCEu style recipes.
	// Stable recipe for Redstone Crystal (#forge:gems/redstone)
	greg.mixer('redstone_crystal')
		.itemInputs('9x #forge:dusts/redstone', '#forge:dusts/fluix', 'ae2:sky_dust')
		.itemOutputs('#forge:gems/redstone')
		.duration(20 * 8)
		.EUt(16);

	// Stable recipe for Sky Steel
	event.remove({ id: 'megacells:transform/sky_steel_ingot' });
	greg.electric_blast_furnace('sky_steel_ingot')
		.itemInputs('ae2:charged_certus_quartz_crystal', '#forge:ingots/steel', 'ae2:sky_stone_block')
		.itemOutputs('2x #forge:ingots/sky_steel')
		.duration(20 * 36)
		.EUt(120);

	// Charged Redstone
	greg.polarizer('charged_redstone')
		.itemInputs('#forge:gems/redstone')
		.itemOutputs('appflux:charged_redstone')
		.duration(20 * 5)
		.EUt(16);

	// AE2 Press from extensions
	greg.laser_engraver('energy_processor_press')
		.itemInputs('#forge:plates/steel', 'appflux:charged_redstone')
		.itemOutputs('appflux:energy_processor_press')
		.duration(20 * 25)
		.EUt(120);

	greg.laser_engraver('accumulation_processor_press')
		.itemInputs('#forge:plates/steel', '#forge:ingots/sky_steel')
		.itemOutputs('megacells:accumulation_processor_press')
		.duration(20 * 25)
		.EUt(120);

	// AE2 circuits from extensions
	greg.forming_press('printed_energy_processor')
		.itemInputs('appflux:charged_redstone')
		.notConsumable('appflux:energy_processor_press')
		.itemOutputs('appflux:printed_energy_processor')
		.duration(20 * 10)
		.EUt(30);

	greg.forming_press('printed_accumulation_processor')
		.itemInputs('#forge:ingots/sky_steel')
		.notConsumable('megacells:accumulation_processor_press')
		.itemOutputs('megacells:printed_accumulation_processor')
		.duration(20 * 10)
		.EUt(30);

	// AE2 processors from extensions
	greg.circuit_assembler('energy_processor')
		.itemInputs(
			'appflux:printed_energy_processor',
			'ae2:printed_silicon',
			'#gtceu:circuits/lv',
			'#gtceu:resistors',
			'2x #forge:fine_wires/tin',
		)
		.itemOutputs('4x appflux:energy_processor')
		.duration(200)
		.EUt(30);

	greg.circuit_assembler('accumulation_processor')
		.itemInputs(
			'megacells:printed_accumulation_processor',
			'ae2:printed_silicon',
			'#gtceu:circuits/lv',
			'#gtceu:resistors',
			'2x #forge:fine_wires/tin',
		)
		.itemOutputs('4x megacells:accumulation_processor')
		.duration(200)
		.EUt(30);
});
