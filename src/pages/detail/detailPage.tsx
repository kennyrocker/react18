import {memo} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const DetailPage = memo(() => {
    const fullPage = useSelector((state: RootState) => state.job.fullPage);

    return (
        <div className="page">
            {JSON.stringify(fullPage)}
        </div>
    )
});
export default DetailPage;
