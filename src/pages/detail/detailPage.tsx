import {useAppContext} from "../../context/appContext";
import {memo} from "react";

const DetailPage = memo(() => {
    const { fullPage } = useAppContext();

    return (
        <div className="page">
            {JSON.stringify(fullPage)}
        </div>
    )
});
export default DetailPage;
