import { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import Navigation from 'swiper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaMountainCity } from 'react-icons/fa6';
import { BsFillBuildingsFill } from 'react-icons/bs';
import {
  GiCastle,
  GiHillConquest,
  GiHillFort,
  GiPalmTree,
  GiShoonerSailboat,
  GiStarKey,
} from 'react-icons/gi';
import Link from 'next/link';

import 'swiper/swiper-bundle.css';
import { BiFilter, BiToggleRight } from 'react-icons/bi';

SwiperCore.use([Navigation]);

const CategoriesNav: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      });
    }
  }, [swiper]);

  const navItems = [
    {
      id: 1,
      label: 'Iconic cities',
      icon: <BsFillBuildingsFill />,
    },
    {
      id: 2,
      label: 'Top world',
      icon: <GiHillConquest />,
      className: 'text-gray-950 border-b-2',
    },
    {
      id: 3,
      label: 'Tropical',
      icon: <GiPalmTree />,
    },
    {
      id: 4,
      label: 'New',
      icon: <GiStarKey />,
    },
    {
      id: 5,
      label: 'Castle',
      icon: <GiCastle />,
    },
    {
      id: 6,
      label: 'Homeboats',
      icon: <GiShoonerSailboat />,
    },
    {
      id: 7,
      label: 'Views',
      icon: <FaMountainCity />,
    },
    {
      id: 8,
      label: 'Countryside',
      icon: <GiHillFort />,
    },
    {
      id: 9,
      label: 'Cities',
      icon: <BsFillBuildingsFill />,
    },
    {
      id: 10,
      label: 'Top',
      icon: <GiHillConquest />,
    },
    {
      id: 11,
      label: 'Tropical 2',
      icon: <GiPalmTree />,
    },
    {
      id: 12,
      label: 'New',
      icon: <GiStarKey />,
    },
    {
      id: 13,
      label: 'Mansion',
      icon: <GiCastle />,
    },
    {
      id: 14,
      label: 'Boat',
      icon: <GiShoonerSailboat />,
    },
    {
      id: 15,
      label: 'Hillside',
      icon: <FaMountainCity />,
    },
    {
      id: 16,
      label: 'Countryside',
      icon: <GiHillFort />,
    },
  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(navItems.length / itemsPerPage);

  const nextSlide = () => {
    if (currentSlide < totalPages - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const startIndex = currentSlide * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleNavItems = navItems.slice(startIndex, endIndex);

  return (
    <div className='w-full h-36 px-4 py-1 grid grid-flow-row grid-cols-4 gap-3 overflow-hidden '>
      <div className='w-full flex flex-row items-center justify-start col-span-3'>
        <div
          onClick={prevSlide}
          className={`h-6 w-6 text-gray-600 m-0 hover:cursor-pointer border rounded-full shadow ${
            isBeginning
              ? 'opacity-30 cursor-not-allowed'
              : 'group-hover:text-blue-400'
          }`}
        >
          {<FaChevronLeft />}
        </div>
        <div className='grid grid-flow-row grid-cols-10 gap-x-12 items-center justify-center col-span-3  overflow-hidden'>
          {visibleNavItems.map((item) => (
            <Link
              key={item.id}
              href='#'
              className={`${item.className ? item.className: 'text-gray-600'} text-sm py-3 font-medium  flex flex-col items-center space-y-2 hover:text-gray-950 hover:border-b-2`}
            >
              <div
                className={`${item.className && item.className} icon text-xl`}
              >
                {item.icon}
              </div>
              <div className='whitespace-nowrap'>{item.label}</div>
            </Link>
          ))}
        </div>
        <div
          onClick={nextSlide}
          className={`h-6 w-6 text-gray-950 justify-self-end ml-auto border border-gray-400 rounded-full  hover:cursor-pointer inline-flex items-center justify-center ${
            isEnd
              ? 'opacity-30 cursor-not-allowed'
              : 'group-hover:text-blue-400'
          }`}
        >
          <FaChevronRight />
        </div>
      </div>
      <div className='flex flex-row justify-between items-center space-x-2'>
        <button className='custom-button h-12'>
          <BiFilter /> <span>Filters</span>
        </button>
        <button className='custom-button whitespace-nowrap h-12'>
          <span>Display total before taxes</span>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input type='checkbox' value='' className='sr-only peer' />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-hover:ring-1 peer-hover:ring-gray-500 peer-focus:ring-0 peer-focus:ring-gray-950  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-950"></div>
          </label>
        </button>
      </div>
    </div>
  );
};

export default CategoriesNav;
