import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { getStyles } from "../../lib"


const DEFAULT_PAGINATION_CONFIG = {
    breakThreshold: 5,    // после какого кол-ва страниц показывать "…"
    centerPageRange: 3,   // сколько страниц показывать в центре
    edgePageRange: 1,     // сколько страниц всегда видно по краям
};

export const Pagination = ({
    totalItems,
    itemsPerPage,
    onPageChange,
    selectedPage, // 0 based
}) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const shouldShowBreak = pageCount > DEFAULT_PAGINATION_CONFIG.breakThreshold;

    const pageRangeDisplayed = shouldShowBreak
        ? DEFAULT_PAGINATION_CONFIG.centerPageRange
        : pageCount;

    if (pageCount <= 1) return null;

    return (
        <ReactPaginate
            pageCount={pageCount}
            forcePage={selectedPage}
            onPageChange={({ selected }) => onPageChange(selected)}
            previousLabel="‹"
            nextLabel="›"
            previousAriaLabel="Prev page"
            nextAriaLabel="Next page"
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={DEFAULT_PAGINATION_CONFIG.edgePageRange}
            containerClassName={getStyles(styles.paginationContainer, {}, [])}
            pageClassName={styles.indicator}
            activeClassName={styles.active}
            breakLabel={shouldShowBreak ? "…" : null}
            breakClassName={styles.breakItem}
            renderOnZeroPageCount={null}
        />
    );
};
