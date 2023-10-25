import React from 'react';

interface CustomDatePickerProps {
    className: string;
  placeholder: string;
}
const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ className, placeholder }) => {
  return (
    <div className='relative max-w-sm'>
      <input
        datepicker-autohide
        type='text'
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomDatePicker;
