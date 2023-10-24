import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';

import Menu,{MenuItem} from './Menu'
import config from '~/config';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '~/Components/Icon';
import SuggestedAccount from '~/Components/SuggestedAccount/SuggestedAccount';

const cx=classNames.bind(styles)

function Sider() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccount lable="Following accounts" />
        </aside>

    )
}

export default Sider;