/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
// import './SearchForm.scss';

type SearchFormProps = {};

export function SearchForm({}: SearchFormProps): JSX.Element {
  const [search, setSearch] = useState('');
  // const dispatch = useAppDispatch();
  // const students = useSelector((store: RootState) => store.students.students);

  const onHandleSwitch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    setSearch(target);
    console.log(target);
  };

  return (
    <div className="SearchForm">
      <form>
        <input type="search" value={search} onChange={onHandleSwitch} />
        <button>Найти</button>
      </form>
    </div>
  );
}

export default SearchForm;
