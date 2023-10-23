import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [],hidenClick=false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };
    const handleResult=(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        onBack={handleBack}
                    />
                )}
                <div className={cx("menu-body")}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    )
    const handleResetToFirstPage=()=>{
        setHistory(prev=>prev.slice(0,1))
    }
    const handleBack=()=>{
        setHistory((prev)=> prev.slice(0,-1));
    }
    return (
        <Tippy
            interactive
            delay={[0, 1000]}
            offset={[10,10]}
            hideOnClick={hidenClick}
            placement="bottom-end"
            render={handleResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes={
    children: PropTypes.node.isRequired,
    item:PropTypes.array,
    hidenClick:PropTypes.bool,
}

export default Menu;
