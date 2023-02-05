import {TENGRI_IMG_PATH, PRFILE_IMG_PATH} from '../images';
import Tweet from './Tweet';

export default function TweetsList() {
    const tweets =[
        {
            authorName: 'Tengrinews',
            authorUsername: '@tengrinewskz',
            img: TENGRI_IMG_PATH,
            content: 'Лавина накрыла отель и заблокировала 60 человек в Румынии',
            replies: 50,
            retweets: 200,
            likes: 100,
            view:5490,
        },
        {
            authorName: 'Sombody',
            authorUsername: '@dnkt',
            img: PRFILE_IMG_PATH,
            content: 'The moon was beautiful today',
            replies: 100,
            retweets: 20,
            likes: 1045,
            view:23067,
        },
        {
            authorName: 'Tengrinews',
            authorUsername: '@tengrinewskz',
            img: TENGRI_IMG_PATH,
            content: 'Разгромлена балюстрада на набережной Актау',
            replies: 37,
            retweets: 86,
            likes: 5,
            view:12407,
        },
        {
            authorName: 'Tengrinews',
            authorUsername: '@tengrinewskz',
            img: TENGRI_IMG_PATH,
            content: 'Задержана мошенница, обещавшая людям вывести деньги из пенсионного фонда. Сумма причиненного материального ущерба составила 22,8 миллиона тенге.',
            replies: 37,
            retweets: 86,
            likes: 5,
            view:9785,

        },
       


    ]
    return tweets.map((tweet, index) => <Tweet {...tweet} key={index}/>)
    
}