const TELEGRAM_API = `https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage`;

interface ResponseBody {
    chat_id: string;
    text: string;
}

export const sendMessage = async (message: string) => {
    const postBody: ResponseBody = {
        chat_id: import.meta.env.VITE_CHAT_ID,
        text: message,
    };

    try {
        const response = await fetch(TELEGRAM_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postBody),
        });

        if (!response.ok) {
            throw new Error(`Failed to send message: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("An error occurred:", error);
        throw new Error("An error occurred while sending the message to the Telegram API");
    }
};
