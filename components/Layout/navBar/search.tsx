import { BiArrowToBottom, BiSearch } from 'react-icons/bi';
import { DatePicker, Dropdown } from 'antd';
import CustomDatePicker from '@/components/inputs/datePicker';
import CustomDropdown from '@/components/inputs/dropdown';
import { RxArrowDown } from 'react-icons/rx';
const Search = () => {
  const formItems = [
    {
      globalClasses: '',
      items: [
        {
          element: <div></div>,
          text: 'Where',
          classes: '',
        },
        {
          element: 'div',
          text: 'Check-in',
          classes: '',
        },
      ],
    },
  ];

  const items = [
    {
      key: '1',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'
        >
          2nd menu item (disabled)
        </a>
      ),
      // icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ];

  return (
    <>
      <form
        action='#'
        className='grid grid-flow-row grid-cols-10 shadow-lg w-4/6 rounded-full px-6 py-2 border'
      >
        <div className='search-bar-item flex-col col-span-3'>
          <div className='text-md font-medium px-2 whitespace-nowrap'>
            Where
          </div>
          <input
            type='text'
            placeholder='Search destinations'
            className='search-bar-input'
          />
        </div>
        <div className='search-bar-item flex-col col-span-2 border-x border-gray-200'>
          <div className='text-md font-medium whitespace-nowrap px-2'>
            Check-in
          </div>
          <DatePicker
            placeholder='Add dates'
            className='search-bar-input text-lg'
            style={{ fontSize: 'text-lg' }}
            suffixIcon={<span style={{ display: 'none' }}></span>}
            clearIcon={<span style={{ display: 'none' }}></span>}
          />
        </div>
        <div className='search-bar-item flex-col col-span-2 '>
          <div className='text-md font-medium whitespace-nowrap px-2'>
            Check-out
          </div>
          <DatePicker
            placeholder='Add dates'
            className='search-bar-input'
            suffixIcon={<span style={{ display: 'none' }}></span>}
            clearIcon={<span style={{ display: 'none' }}></span>}
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
