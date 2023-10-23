import { memo } from "react";
import AccountItem from "~/Components/AccountItem";

function ListSreach({ searchResult }) {
    return ( <>
         {searchResult.map((result) => {
            return <AccountItem data={result} key={result.id} />;
        })}
    </> );
}

export default memo(ListSreach);