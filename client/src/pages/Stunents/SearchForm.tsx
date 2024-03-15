/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import './SearchForm.scss';

type SearchFormProps = {};

export function SearchForm({}: SearchFormProps): JSX.Element {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();

  const onHandleSwitch = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const target = e.target.value;
    console.log(target);

    setSearch(target);
    // console.log(target);
    dispatch({ type: 'students/search', payload: target });
  };

  return (
    <div className="SearchForm">
      <input type="search" value={search} onChange={onHandleSwitch} />
    </div>
  );
}

export default SearchForm;
