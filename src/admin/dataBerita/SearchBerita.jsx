import React from 'react';
import search from '../../images/search-normal.svg';

const SearchBerita = () => {
  return (
    <form className=" relative w-5/6">
      <input type="text" className="w-full pl-10 relative rounded-3xl  border-grey focus:ring-0   focus:outline-none" placeholder="Search" />
      <img src={search} alt="" className="absolute top-0 mt-2 ml-2" />
    </form>
  );
};

export default SearchBerita;