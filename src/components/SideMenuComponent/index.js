import {HOME_SVG, EXPLORE_SVG, NOTIFICATIONS_SVG, MESSAGES_SVG, BOOKMARKS_SVG, LIST_SVG, PROFIlE_SVG} from './images'
import MenuItem from './MenuItem'
import './styles.css'

export default function SideMenu() {
    const menu = [
        {
            icon: HOME_SVG,
            name:'Home'
        },
        {
            icon: EXPLORE_SVG,
            name:'Explore'
        },
        {
            icon: NOTIFICATIONS_SVG,
            name: 'Notifacations'
        },
        {
            icon: MESSAGES_SVG,
            name: 'Messages'
        },
        {
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks'
        },
        {
            icon: LIST_SVG,
            name: 'Lists'
        },
        {
            icon: PROFIlE_SVG,
            name: 'Profile'
        },
    ]

    return(
        <div className="w-15 mt-3 mx-5">
            <img src={require('./images/logo.png')} className="logo-icon mb-2"/>
            {menu.map((item, index) => <MenuItem item={item} key={index}/>)}
        </div>
                
    )
}

