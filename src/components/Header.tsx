import React, { useState } from 'react';
import { MenuList } from '../containers/HeaderContainer';

type HeaderProps = {
  menuList: MenuList[];
};

function Header({ menuList }: HeaderProps) {
  const [menu, setMenu] = useState(menuList);
  const toggleMenu = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const id = e.currentTarget.dataset.id;
    const updated: MenuList[] = menu.map(list => {
      if (list.id === id) {
        return {
          ...list,
          isOn: true
        };
      } else {
        return {
          ...list,
          isOn: false
        };
      }
    });
    setMenu(updated);
  };

  return (
    <header id="header">
      <div className="nav_wrap">
        <nav className="clearfix">
          <ul>
            {menu &&
              menu.map(list => (
                <li
                  key={list.id}
                  data-id={list.id}
                  className={list.isOn ? 'on' : undefined}
                  onClick={toggleMenu}
                >
                  {list.label}
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
