// Add to the "Game Type" tab (identified by its "GameSpeed" entry)
g_GameSettingsLayout.find(cat => cat.settings.includes("GameSpeed"))
	?.settings.push("Survivors");

GameSettingControls.Survivors = class Survivors extends GameSettingControlCheckbox
{
	constructor(...args)
	{
		super(...args);
		g_GameSettings.survivors.watch(() => this.render(), ["enabled"]);
	}

	onLoad()
	{
		this.render();
	}

	render()
	{
		this.setChecked(g_GameSettings.survivors.enabled);
	}

	onPress(checked)
	{
		g_GameSettings.survivors.setEnabled(checked);
		this.gameSettingsController.setNetworkInitAttributes();
	}
};

GameSettingControls.Survivors.prototype.TitleCaption =
	translate("Survivors");

GameSettingControls.Survivors.prototype.Tooltip =
	translate("When a player is defeated, their units transfer to an ally instead of becoming Gaia.");
