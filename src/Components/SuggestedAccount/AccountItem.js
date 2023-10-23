import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from'./SuggestedAccount.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const cx=classNames.bind(styles)
function AccountItem() {
    return ( 
    <div className={cx('account-item')}>
        <img 
        className={cx('avatar')} 
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b18eeaac7c07d854e8d03ec2d83e80f4~c5_100x100.jpeg?x-expires=1698242400&x-signature=jcYpaouku3MPHeVZGgYDXP4K%2FOg%3D" alt="" />
        <div className={cx('item-info')}>
            <p className={cx('nickname')}>
                <strong>Nguyen Khoi Nguyen</strong>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
            </p>
            <p className={cx('name')}>KhoiNguyxn</p>
        </div>

    </div> );
}

AccountItem.propTypes={

}

export default AccountItem;