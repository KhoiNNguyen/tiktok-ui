import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b43c58080446321d8dfe5a34bab1321a~c5_100x100.jpeg?x-expires=1696845600&x-signature=ysgmZZFQbW6CtzsppHDllbIpcm8%3D"
                alt="anh"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Khoi Nguyen</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenkhoinguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;
