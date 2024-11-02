import { Outlet } from "react-router-dom"

function ThankYouPage() {

    return (
        <div className="w-full h-full flexCol-itCenter bg-coffeBeans">
            <Outlet />
        </div>
    );
}

export default ThankYouPage;