export default class NewsService {

	getNews() {
		return [
			{
				id: 1,
				img: 'https://blog.scrapinghub.com/hubfs/spidermon%20article%20featured%20image.jpg#keepProtocol',
				title: 'Meet Spidermon: Scrapinghub’s Battle Tested Spider Monitoring Library [Now Open Sourced]',
				author: 'Renne Rocha',
				descr: 'Learn how to easily monitor scrapy spiders & validate data with Spidermon! Now available as an open source library.',
				link: 'https://blog.scrapinghub.com/spidermon-scrapy-spider-monitoring'
			},
			{
				id: 2,
				img: 'https://www.redditstatic.com/new-icon.png',
				title: 'What is it like working at a company during and after the release of a negatively received game?',
				author: 'Renne Rocha',
				descr: 'With the recent trend of several high-profile AAA games and companies receiving an exorbitant amount of negative press and backlash (Anthem,...',
				link: 'https://www.reddit.com/r/Games/comments/ax9uyj/what_is_it_like_working_at_a_company_during_and/'
			},
			{
				id: 3,
				img: 'https://avatars0.githubusercontent.com/u/46275?s=400&v=4',
				title: 'A random dungeon generator that fits on a business card',
				author: 'Andrey Goncharov',
				descr: 'A random dungeon generator that fits on a business card - generate',
				link: 'https://gist.github.com/munificent/b1bcd969063da3e6c298be070a22b604'
			},
		]
	}

}