import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { getStyles } from "../../lib"

export const Pagination = ({ totalItems, itemsPerPage, onPageChange, selectedPage }) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const shouldShowBreak = 6 
    const pagePange =  shouldShowBreak ? 3 : pageCount

    return (
        <ReactPaginate 
            nextLabel=""
            previousLabel=""
            onPageChange={onPageChange}
            pageCount={pageCount}
            containerClassName={getStyles(styles.paginationContainer, {[styles.noPagination]: totalItems <= 1}, [])}   
            renderOnZeroPageCount={null}
            forcePage={selectedPage}
            pageRangeDisplayed={pagePange} 
            marginPagesDisplayed={1} 
            pageClassName={styles.indicator}
            activeClassName={styles.active}
            breakLabel={shouldShowBreak ? ". . ." : null} 
            breakClassName={styles.breakItem} 
        />
    );
};
