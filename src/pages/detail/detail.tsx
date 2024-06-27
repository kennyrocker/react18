import {useAppContext} from "../../context/appContext";

export default function Detail() {
    const { fullPage } = useAppContext();

    return (
        <div className="page">
            {JSON.stringify(fullPage)}
        </div>
    )
}