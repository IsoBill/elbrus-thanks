import React from 'react';
// import './SearchForm.scss';

type SearchFormProps = {
}

export const SearchForm = ({}: SearchFormProps): JSX.Element => {
  return (
    <div className='SearchForm'>
        <input type="search" />
        <button>Найти</button>
    </div>
  );
};

export default SearchForm;
