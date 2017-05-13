import React from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import Greeting from 'components/PosMain/Greetings';


const NavigationMenu = () => (
  <NavigationDrawer
    drawerTitle="react-md with webpack"
    toolbarTitle="Welcome to react-md"
    tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
    desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
  >
    <Greeting />
  </NavigationDrawer>
);

export default NavigationMenu;