//function to select a random message to simulate a interaction with the bot
export const randomMessage = (messages: string[]) =>
    messages[Math.floor(Math.random() * messages.length)];