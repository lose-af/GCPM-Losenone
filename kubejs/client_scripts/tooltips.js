ItemEvents.tooltip((event) => {
  // Disabled Items
  event.add(
    [
      "sophisticatedbackpacks:inception_upgrade",
      "sophisticatedbackpacks:battery_upgrade",
      "storagedrawers:redstone_upgrade",
      "storagedrawers:min_redstone_upgrade",
      "storagedrawers:max_redstone_upgrade",
      "storagedrawers:compacting_drawers_3",
      "storagedrawers:fill_level_upgrade",
      "storagedrawers:illumination_upgrade",

      "expatternprovider:caner",
      "ae2:inscriber",
      "expatternprovider:ex_inscriber",
      "expatternprovider:ingredient_buffer"
    ],
    Text.red("在此模组包中已禁用!").bold(true)
  );

  event.add("gtceu:greenhouse", Text.gray("两个大拇指竖起来!"));
  event.add(
    "gtceu:construction_core",
    Text.gray("提供更便宜的建筑方块配方!")
  );
  event.add(
    "gtceu:construction_core",
    Text.darkGray("Requires Construction Foam to operate.")
  );

  event.add("ae2:controller", Text.gray("频道已§c禁用§7."));

  event.add("expatternprovider:fishbig", Text.gray("恭喜!你赢得了Minecraft."));
});
