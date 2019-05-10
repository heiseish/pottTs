import geocoder from 'geocoder';
import idx from 'idx';
import getRandomGif from '../externalApis/giphy';
import { possibleNay, possibleYay } from '../lib/string';
import { randomIndex } from '../utils/array';

/**
 * Handle document from messenger
 * @param {userType} user
 * @return updated user
 * @throws if gif api or geocoder api fails
 */
export default async (user: userType): Promise<userType> => {
	try {
		switch (user.lastDoc.type) {
		case 'image':
			const res = await getRandomGif();
			user.response = {
				simpleText: null,
				answerable: true,
				image:  res,
			};
			break;

		case 'video':
			user.response = {
				answerable: true,
				simpleText: 'Nice video!',
			};
			break;

		case 'location':
			geocoder.reverseGeocode(user.lastLocation.lat, user.lastLocation.long, (err, data) => {
				if (err) {
					return Promise.reject(err);
				}
				const lastLocation = typeof user.toObject === 'function' ? user.toObject().lastLocation : user.lastLocation;
				const addr: string = idx(data, (_) => _.results[0].formatted_address) as unknown as string;
				user.lastLocation = {
					...lastLocation,
					formattedAddress: addr ,
				};
				user.response = {
					simpleText: 'I see that you are @ ' + addr + ' right now!',
					answerable: true,
				};
			});
			break;

		case 'QUICK_REPLY':
			if (user.lastDoc.value === 'INCORRECT_SERVICE') {
				user.text[user.text.length - 1].correctlyAnswered = false;
				user.response = {
					simpleText: randomIndex(possibleNay),
					answerable: true,
				};
			} else {
				user.response = {
					simpleText: randomIndex(possibleYay),
					answerable: true,
				};
			}
			break;

		case 'audio':
			user.response = {
				answerable: true,
				simpleText: 'Nice voice!',

			};
			break;
		}
		return user;
	} catch (e) {
		return Promise.reject(e);
	}
};