import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudDownload, faMessage, faCloudUpload, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';


import Button from '~/Components/Button';
import styles from './Header.module.scss';
import image from '~/assets/image';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import { useEffect, useState } from 'react';
import AccountItem from '~/Components/AccountItem';
import Menu from '~/Components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEM=[
    {
        icon:<FontAwesomeIcon icon={faEarthAsia}/>,
        title:"English",
        children:{
            title:"language",
            data:[
                {
                    code:"en",
                    title: "English",
                },
                {
                    code:"vn",
                    title:"Tieng Viet",
                },
            ]
        }
    },
    {
        icon:<FontAwesomeIcon icon={faCircleQuestion}/>,
        title:"FeedBack and help",
        to:'/feedback'
    },
    {
        icon:<FontAwesomeIcon icon={faKeyboard}/>,
        title:"Keyboard shotcuts",
    }
]
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser=true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    const userMenu=[
        {
            icon:<FontAwesomeIcon icon={faUser}/>,
            title:"View Profile",
            to:'/@nguyen'
        },
        {
            icon:<FontAwesomeIcon icon={faCoins}/>,
            title:"Get coin",
            to:'/coin'
        },
        {
            icon:<FontAwesomeIcon icon={faGear}/>,
            title:"Setting",
            to:'/setting'
        },
        ...MENU_ITEM,
        {
            icon:<FontAwesomeIcon icon={faSignOut}/>,
            title:"Log out",
            to:'/Logout',
            separate:true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>You me like</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and video" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('action')}>
                    {currentUser ?(
                        <>
                            <Tippy delay={[0,200]}content="Upload Video">
                            <button className={cx("action-btn")}>
                                <FontAwesomeIcon icon={faCloudUpload}/>
                            </button>
                            </Tippy>
                        </>
                    ):(
                        <>
                    <Button text >Upload</Button>
                    <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>}>Login</Button>
                        </>
                    )}
                    <Menu
                    items={currentUser? userMenu:MENU_ITEM}
                    >
                        {currentUser?(
                           
                                <img src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b18eeaac7c07d854e8d03ec2d83e80f4~c5_100x100.jpeg?x-expires=1697274000&x-signature=Ge11Be8xXcTSmvOl3ho%2FxPH3dpQ%3D" 
                                className={cx("user-avatar")} 
                                alt="Nguyen Khoi Nguyen" />
                            
                        ):(
                            <>
                                <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical}/>
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
