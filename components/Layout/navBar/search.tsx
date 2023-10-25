import {  BiSearch } from 'react-icons/bi';
import { DatePicker } from 'antd';
import CustomDropdown from '@/components/inputs/dropdown';
const Search = () => {
  return (
    <>
      <form
        action='#'
        className='grid grid-flow-row grid-cols-10 shadow-lg w-4/6 rounded-full px-6 py-2 border group'
      >
        <div className='search-bar-item flex-col col-span-3'>
          <div className='text-md font-medium px-2 whitespace-nowrap '>
            Where
          </div>
          <input
            type='text'
            placeholder='Search destinations'
            className='search-bar-input'
          />
        </div>
        <div className='search-bar-item flex-col col-span-2 border-x border-gray-200 group-hover:border-0 '>
          <div className='text-md font-medium whitespace-nowrap px-2'>
            Check-in
          </div>
          <DatePicker
            placeholder='Add dates'
            className='search-bar-input text-lg'
            style={{ fontSize: 'text-lg' }}
            suffixIcon={<span style={{ display: 'none' }}></span>}
            clearIcon={<span style={{ backgroundColor:'transparent'}}>x</span>}
          />
        </div>
        <div className='search-bar-item flex-col col-span-2 border-r group-hover:border-0'>
          <div className='text-md font-medium whitespace-nowrap px-2'>
            Check-out
          </div>
          <DatePicker
            placeholder='Add dates'
            className='search-bar-input'
            suffixIcon={<span style={{ display: 'none' }}></span>}
            clearIcon={<span style={{ backgroundColor:'transparent'}}>x</span>}
          />
        </div>
        <div className='search-bar-item flex-row justify-between col-span-3'>
          <div className='flex flex-col space-x-2 '>
            <div className='text-md font-medium px-2'>Who</div>
            <CustomDropdown
              placeholder='Add guests'
              className='search-bar-input'
            />
          </div>

          <div className='p-2 w-10 h-10 bg-rose-500 rounded-full text-white flex justify-center items-center'>
            <BiSearch size={18} />
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
