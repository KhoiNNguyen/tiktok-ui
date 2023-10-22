import styles from './Sidebar.module.scss'

import classNames from 'classnames/bind';

const cx=classNames.bind(styles)

function Sider() {
    return (
        <aside className={cx('wrapper')}>
            <h2>sliber</h2>
        </aside>

    )
}

export default Sider;