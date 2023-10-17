import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import AccountItem from '~/Components/AccountItem';
import { SearchIcon } from '~/Components/Icon';
import classNames from 'classnames/bind';
import styles from './Search.modual.scss';
import { useEffect, useRef, useState } from 'react';
import { useDebounced } from '~/Components/hooks';
import * as searchServices from '~/apiServices/SearchServices'

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const Debounced = useDebounced(searchValue, 500);

    useEffect(() => {
        if (!Debounced.trim()) {
            setSearchResult([]);
            return;
        }
        
        const fetchApi = async () => {
            setLoading(true);
            const result=await searchServices.search(Debounced);
            setSearchResult(result);
            setLoading(false);
            };
            fetchApi();
        }, [Debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleClickOutSide = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>You me like</h4>
                        {searchResult.map((result) => {
                            return <AccountItem data={result} key={result.id} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleClickOutSide}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    placeholder="Search account and video"
                    spellCheck={false}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
