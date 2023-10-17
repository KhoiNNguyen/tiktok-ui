import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import Button from '~/Components/Button';
import styles from './Header.module.scss';
import image from '~/assets/image';

import Menu from '~/Components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/Components/Icon';
import Image from '~/Components/Image';
import Search from '../../Search';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'FeedBack and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shotcuts',
    },
];
function Header() {

    const currentUser = true;


    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@nguyen',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/Logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link className={cx("logo-link")} to={routes.home}>
                        <img src={image.logo}/>
                    </Link>
                </div>        
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <div className={cx('icon-header')}>
                            <Tippy 
                            delay={[0, 200]} 
                            content="Upload Video"
                            >
                                <button onMouseDown={e=>e.preventDefault()} className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                            </button>
                        </div>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b18eeaac7c07d854e8d03ec2d83e80f4~c5_100x100.jpeg?x-expires=1697274000&x-signature=Ge11Be8xXcTSmvOl3ho%2FxPH3dpQ%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Khoi Nguyen"
                                fallback="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvuipet.com%2Fbat-mi-cach-nuoi-meo-beo-map-cuc-ky-hieu-qua-va-khoe-manh&psig=AOvVaw2qFKOpAkhxt07yMjxy0jPZ&ust=1697427975432000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjh84-S94EDFQAAAAAdAAAAABAE"
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
