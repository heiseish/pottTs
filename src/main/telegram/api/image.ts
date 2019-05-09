import {
	telegramEndpoint,
	moduleBot
} from '../';

export default async (chatId: string | number, url: string | Buffer, reply?: boolean, 
		messageId?: number): Promise<moduleBot.Message> => {
	try {
		if (reply) {
			return await telegramEndpoint.sendPhoto(chatId, url, {
				reply_to_message_id: messageId,
			});
		} else {
			return await telegramEndpoint.sendPhoto(chatId, url);
		}
	} catch (e) {
		return Promise.reject(e);
	}
};
