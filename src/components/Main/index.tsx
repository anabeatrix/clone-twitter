import React from "react";

import ProfilePage from '../ProfilePage';
import { 
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu, 
    HomeIcon, 
    SearchIcon,
    BellIcon, 
    EmailIcon } from '../Main/styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Ana Beatriz</strong>
          <span>530 Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage/>
      
      <BottomMenu>

          <HomeIcon className="active" />
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
