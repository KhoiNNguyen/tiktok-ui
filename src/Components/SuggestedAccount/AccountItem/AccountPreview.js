import classNames from 'classnames/bind';
import styles from './AccountPreview.modual.scss';
import PropTypes from 'prop-types';
import Button from '~/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img
                        className={cx('avatar')}
                        src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b18eeaac7c07d854e8d03ec2d83e80f4~c5_100x100.jpeg?x-expires=1698242400&x-signature=jcYpaouku3MPHeVZGgYDXP4K%2FOg%3D'
                        alt=""
                    />
                    <Button className={cx('follow-btn')} primary>Follow</Button>
                </div>
                <div className={cx('body')}>
                 <p className={cx('nickname')}>
                        <strong>Nguyen Khoi Nguyen</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                    </p>
                    <p className={cx('name')}>KhoiNguyxn</p>
                    <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
                </div>
            </div>
        </>
    );
}

export default AccountPreview;
