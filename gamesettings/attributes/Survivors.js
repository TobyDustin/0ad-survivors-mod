GameSettings.prototype.Attributes.Survivors = class Survivors extends GameSetting
{
	init()
	{
		this.enabled = true;
	}

	toInitAttributes(attribs)
	{
		attribs.settings.Survivors = this.enabled;
	}

	fromInitAttributes(attribs)
	{
		const val = this.getLegacySetting(attribs, "Survivors");
		if (val !== undefined)
			this.enabled = !!val;
	}

	setEnabled(enabled)
	{
		this.enabled = enabled;
	}
};
