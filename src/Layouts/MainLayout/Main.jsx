import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            This is main page
            <Outlet/>
        </div>
    );
};

export default Main;