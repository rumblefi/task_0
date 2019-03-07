export default class NewsService {

    newsData = [
        {
            id: 1,
            img: 'https://blog.scrapinghub.com/hubfs/spidermon%20article%20featured%20image.jpg#ke' +
                    'epProtocol',
            title: 'Meet Spidermon: Scrapinghub’s Battle Tested Spider Monitoring Library [Now Open ' +
                    'Sourced]',
            author: 'Renne Rocha',
            descr: 'Learn how to easily monitor scrapy spiders & validate data with Spidermon! Now a' +
                    'vailable as an open source library.',
            link: 'https://blog.scrapinghub.com/spidermon-scrapy-spider-monitoring'
        }, {
            id: 2,
            img: 'https://www.redditstatic.com/new-icon.png',
            title: 'What is it like working at a company during and after the release of a negativel' +
                    'y received game?',
            author: 'Renne Rocha',
            descr: 'With the recent trend of several high-profile AAA games and companies receiving ' +
                    'an exorbitant amount of negative press and backlash (Anthem,...',
            link: 'https://www.reddit.com/r/Games/comments/ax9uyj/what_is_it_like_working_at_a_comp' +
                    'any_during_and/'
        }, {
            id: 3,
            img: 'https://avatars0.githubusercontent.com/u/46275?s=400&v=4',
            title: 'A random dungeon generator that fits on a business card',
            author: 'Andrey Goncharov',
            descr: 'A random dungeon generator that fits on a business card - generate',
            link: 'https://gist.github.com/munificent/b1bcd969063da3e6c298be070a22b604'
        }
    ]

    homeData = [
        {
            id: 1,
            title: `The official React documentation`,
            link: `https://reactjs.org/docs/hello-world.html`
        }, {
            id: 2,
            title: `Getting Started with Redux - Egghead's video lessons from Dan Abramov`,
            link: `https://egghead.io/courses/getting-started-with-redux`
        }, {
            id: 3,
            title: `React Redux [RU tutorial]`,
            link: `https://maxfarseer.gitbooks.io/redux-course-ru/content/`
        }, {
            id: 4,
            title: `Redux Step by Step: A Simple and Robust Workflow for Real Life Apps`,
            link: `https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092`
        }, {
            id: 5,
            title: `Container Components - Learn React with chantastic`,
            link: `https://medium.com/@learnreact/container-components-c0e67432e005`
        }
    ]

    getNews() {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(this.newsData)
                reject(new Error('News error'))
            }, 700);
        })
    }

    getHomeData() {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(this.homeData)
                reject(new Error('Home error'))
            }, 700);
        })
    }

}