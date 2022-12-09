module.exports = {
	data: {
        name: "ban-r",
        description: "ユーザーを禁止します。",
    },
	async execute(interaction) {
		await interaction.reply('何様のつもり!?管理者以外実行できないよ');
	}
}