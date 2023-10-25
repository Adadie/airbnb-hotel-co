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
      label: 'Top of the world',
      icon: <GiHillConquest />,
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
      label: 'Amazing Views',
      icon: <FaMountainCity />,
    },
    {
      id: 8,
      label: 'Countryside',
      icon: <GiHillFort />,
    },
    {
      id: 9,
      label: 'Iconic cities',
      icon: <BsFillBuildingsFill />,
    },
    {
      id: 10,
      label: 'Top of the world 2',
      icon: <GiHillConquest />,
    },
    {
      id: 11,
      label: 'Tropical 2',
      icon: <GiPalmTree />,
    },
    {
      id: 12,
      label: 'New 2',
      icon: <GiStarKey />,
    },
    {
      id: 13,
      label: 'Castle 2',
      icon: <GiCastle />,
    },
    {
      id: 14,
      label: 'Homeboats 2',
      icon: <GiShoonerSailboat />,
    },
    {
      id: 15,
      label: 'Amazing Views 2',
      icon: <FaMountainCity />,
    },
    {
      id: 16,
      label: 'Countryside 2',
      icon: <GiHillFort />,
    },
  ];

  const itemsPerPage = 8;
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
    <div className='w-full bg-gray-900 p-4 flex flex-row justify-between'>
      <div
        onClick={prevSlide}
        className={`h-6 w-6 text-white ${
          isBeginning
            ? 'opacity-30 cursor-not-allowed'
            : 'group-hover:text-blue-400'
        }`}
      >
        <FaChevronLeft />
      </div>
      <div className='flex flex-row items-center justify-center'>
      {visibleNavItems.map((item) => (
        <Link
          key={item.id}
          href='#'
          className='hover:text-blue-400 text-md font-medium text-gray-300 flex flex-col items-center space-x-6'
        >
          {item.icon}
          <div className=''>{item.label}</div>
        </Link>
      ))}
      </div>
      <div
        onClick={nextSlide}
        className={`h-6 w-6 text-white ${
          isEnd ? 'opacity-30 cursor-not-allowed' : 'group-hover:text-blue-400'
        }`}
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default CategoriesNav;
