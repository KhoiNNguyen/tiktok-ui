import Header from "./Header";
import Sider from "./Sidebar";

function DefaultLayout({ children }) {
    return <div>
        <Header />
        <div className="container">
            <Sider />
            <div className="content">
                {children}
            </div>
        </div>
    </div>;
}

export default DefaultLayout;