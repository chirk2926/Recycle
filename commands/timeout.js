module.exports = {
	data: {
        name: "timeout-r",
        description: "ユーザーをTIMEOUTします。",
    },
	async execute(interaction) {
		await interaction.reply('何様のつもり!?管理者以外実行できないよ');
	}
}