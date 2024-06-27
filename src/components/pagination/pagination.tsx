import './pagination.scss';

type PaginationProps = {
    totalPages: [],
    currentPage: number,
    onClick: (n: number) => void
}

export default function Pagination(props: PaginationProps) {
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

}