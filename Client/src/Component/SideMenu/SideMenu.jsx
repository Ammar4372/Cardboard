import React, { useState } from 'react'; // Import useState
import { MdPhotoSizeSelectSmall, MdOutlineStyle } from 'react-icons/md';
import { FaBrush } from 'react-icons/fa6';
import { FaCalculator } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { selectDesign } from '../../Store/slices/designSelection';
import { setSideMenuSelection } from '../../Store/slices/sideMenuSelection';
import '../componantsStyle.css';

const menuIcons = [
  {
    icon: <MdPhotoSizeSelectSmall />,
    name: 'size',
  },
  {
    icon: <MdOutlineStyle />,
    name: 'material',
  },
  {
    icon: <FaBrush />,
    name: 'design',
  },
  {
    icon: <FaCalculator />,
    name: 'quantity',
  },
];

const SideMenu = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState('size'); // State to track the active item

  const setSelection = (s) => {
    if (s === 'design') {
      dispatch(selectDesign(true));
    }
    if (s === 'size' || s === 'material' || s === 'quantity') {
      dispatch(selectDesign(false));
    }
  };

  const handleClick = (n) => {
    setSelection(n);
    dispatch(setSideMenuSelection(n));
    setActiveItem(n); 
  };

  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 bg-light rounded-end shadow" style={{ width: '5.5rem' }}>
        <ul className="nav nav-flush flex-column mb-auto text-center vh-100">
          {menuIcons.map((item, index) => (
            <li
              className={`menuItem nav-item d-flex justify-content-center align-content-center flex-column ${
                activeItem === item.name ? 'active' : '' 
              }`}
              key={index}
              onClick={() => handleClick(item.name)}
            >
              <span className=" nav-link p-1 py-3 border-bottom fs-2 rounded-end d-flex justify-content-center align-items-center flex-column" style={{ color: '#F7744F' }}>
                {item.icon}
                <span className='itemSpan py-1 text-uppercase' style={{ color: '#FAAB95' }}>
                  {item.name}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
