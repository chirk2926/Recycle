module.exports = {
    data: {
        name: "setting",
        description: "Greets!",
        options: [{
            type: "STRING",
            name: "language",
            description: "言語の設定,Choice your language",
            required: true,
            choices: [
                { name: "Japanese", value: "japanese" },
                { name: "English", value: "english" },
            ]
        }],
    },
    async execute(interaction) {
        if (interaction.options.getString('language') === 'japanese') {
			await interaction.reply('こんにちは！言語を英語から日本語に設定しました。');
        } else {
            await interaction.reply('Hello!Language has been changed from Japanese to English.');
        }
    }
}