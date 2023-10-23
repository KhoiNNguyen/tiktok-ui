import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Components/Popper';

import { SearchIcon } from '~/Components/Icon';
import classNames from 'classnames/bind';
import styles from './Search.modual.scss';
import { useEffect, useRef, useState } from 'react';
import { useDebounced } from '~/Components/hooks';
import * as searchServices from '~/Services/SearchService'
import ListSearch from './ListSearch';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const DebouncedValue = useDebounced(searchValue, 500);

    useEffect(() => {
        if (!DebouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        
        const fetchApi = async () => {
            setLoading(true);
            const result=await searchServices.search(DebouncedValue);
            setSearchResult(result);
            setLoading(false);
            };
            fetchApi();
        }, [DebouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleClickOutSide = () => {
        setShowResult(false);
    };

    const handleChange=(e)=>{
        let searchValue=e.target.value;

        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue  )
        }
    }

    return (
        //Using a wrapper <div>  tag around the reference 
        //element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
    
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>You me like</h4>
                            <ListSearch searchResult={searchResult} />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleClickOutSide}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleChange}
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
    
                    <button className={cx('search-btn')} onMouseDown={e=>e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
