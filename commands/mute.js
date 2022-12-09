module.exports = {
	data: {
        name: "mute-r",
        description: "ユーザーのチャットとボイスチャットを禁止します。",
    },
	async execute(interaction) {
		await interaction.reply('何様のつもり!?管理者以外実行できないよ');
	}
}