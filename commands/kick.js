module.exports = {
	data: {
        name: "kick-r",
        description: "ユーザーをキックします。",
    },
	async execute(interaction) {
		await interaction.reply('何様のつもり!?管理者以外実行できないよ');
	}
}