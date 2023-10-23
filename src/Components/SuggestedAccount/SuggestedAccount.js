import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './SuggestedAccount.module.scss'
import AccountItem from './AccountItem';


const cx=classNames.bind(styles)
function SuggestedAccount({ lable }) {
    return ( <>
        <div>
            <div className={cx("wrapper")}>
                <p className={cx('lable')}>{lable}</p>
                <AccountItem />
                <AccountItem />
                <AccountItem />


                <p className={cx('more-btn')}>See all</p>
            </div>
        </div>
    </> );
}

SuggestedAccount.propsTypes={
    lable:PropTypes.string.isRequired,
}

export default SuggestedAccount;