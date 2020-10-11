import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';

const setPage = (page, itemsCount, itemsToShow, onChangePage) => {
  // calculate total pages
  const totalPages = Math.ceil(itemsCount / itemsToShow);

  if (page < 1 || page > totalPages) {
    return;
  }

  // call change page function in parent component
  onChangePage(page);
};

const PaginationComponent = ({
  itemsCount, itemsToShow, pageOfItems, onChangePage,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(itemsCount / itemsToShow); i += 1) {
    pages.push(i);
  }

  return itemsCount ? (
    <div className="pagination__wrap">
      {(itemsCount <= 1) ? ''
        : (
          <Pagination className="pagination" dir="ltr">
            <PaginationItem className="pagination__item" disabled={pageOfItems === 1}>
              <PaginationLink
                className="pagination__link pagination__link--arrow"
                type="button"
                onClick={() => setPage(1, itemsCount, itemsToShow, onChangePage)}
              >
                <ChevronLeftIcon className="pagination__link-icon" />
              </PaginationLink>
            </PaginationItem>
            {pages.map(page => (
              <PaginationItem
                className="pagination__item"
                key={page}
                active={pageOfItems === page}
              >
                <PaginationLink
                  className="pagination__link"
                  type="button"
                  onClick={() => setPage(page, itemsCount, itemsToShow, onChangePage)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))
          }
            <PaginationItem className="pagination__item" disabled={pageOfItems === pages.length}>
              <PaginationLink
                className="pagination__link pagination__link--arrow"
                type="button"
                onClick={() => setPage(pages.length, itemsCount, itemsToShow, onChangePage)}
              >
                <ChevronRightIcon className="pagination__link-icon" />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        )
      }
      <div className="pagination-info">
        <span>Showing {`${(itemsToShow * (pageOfItems - 1)) + 1} `}
          to {itemsToShow * pageOfItems > itemsCount ? itemsCount
          : itemsToShow * pageOfItems} of {itemsCount}
        </span>
      </div>
    </div>
  ) : <div />;
};

PaginationComponent.propTypes = {
  onChangePage: PropTypes.func.isRequired,
  itemsCount: PropTypes.number.isRequired,
  itemsToShow: PropTypes.number.isRequired,
  pageOfItems: PropTypes.number.isRequired,
};

export default PaginationComponent;
