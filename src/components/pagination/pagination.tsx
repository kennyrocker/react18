import './pagination.scss';
import {memo} from "react";

type PaginationProps = {
    totalPages: [],
    currentPage: number,
    onClick: (n: number) => void
}

const Pagination = memo((props: PaginationProps) => {

    console.log('Pagination render');

    const { totalPages, currentPage, onClick } = props;

    return (
        <>
            { totalPages.length > 1 &&
                <div className="pagination">
                    {
                        totalPages.map((i, index) =>
                            <button className={ `pagination-item ${(currentPage === (i - 1)) ? 'current-item' : ''}` }
                                    key={index} onClick={() => { onClick((i - 1)) }} >{i}</button>
                        )
                    }
                </div>
            }
        </>
    )

});
export default Pagination;