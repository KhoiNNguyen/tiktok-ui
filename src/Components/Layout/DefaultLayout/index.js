import classNames from "classnames/bind";

import Header from "~/Components/Layout/Components/Header";
import styles from "./DefaultLayput.module.scss"
import Sider from "./Sidebar";

const cx=classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
    <div className={cx("wrapper")}>
        <Header />
        <div className={cx("container")}>
            <Sider />
            <div className={cx("content")}>
                {children}
            </div>
        </div>
    </div>
    )
}

export default DefaultLayout;