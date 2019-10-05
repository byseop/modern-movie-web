import React from 'react';
// import { Tab, Tabs, TabList } from 'react-tabs';

type HeaderProps = {};

function Header() {
  return (
    <header id="header">
      <div className="nav_wrap">
        <nav className="clearfix">
          {/* <Tabs>
            <TabList>
              <Tab>현재 상영중</Tab>
              <Tab>인기순</Tab>
              <Tab>평점순</Tab>
              <Tab>개봉순</Tab>
              <Tab>개봉예정</Tab>
            </TabList>
          </Tabs> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
