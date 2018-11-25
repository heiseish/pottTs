import analyze from './analyze'
import execute from './execute'
import identifySource from './identifySource'
import Logger from './logger'
import respond from './respond'
import retrieveOrCreateUser from './retrieveOrCreateUser'

export default class Headquarter {
	/**
	 * Handle receving events
	 * @param platform platforms currently supported
	 * @param payload message payload from user
	 */
	public async receive(platform: supportedPlatform, payload: any, UserDb: any, cache: any): Promise<void | Error> {
		Logger.info('Transfering event to headquarter..')
		try {
			const partialUniqueId = await identifySource(platform, payload)
			let user = await retrieveOrCreateUser(partialUniqueId, platform, payload, UserDb, cache)
			user = await analyze(platform, payload, user)
			user = await execute(platform, payload, user)
			await respond(platform, payload, user)
			cache.saveUser(user.id, user)
		} catch (err) {
			Logger.error(err)
		} finally {
			Logger.separator('=====================================')
		}
	}
}
