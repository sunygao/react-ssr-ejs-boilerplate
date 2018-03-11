import Homepage from './src/js/components/homepage/Homepage';
import Aboutpage from './src/js/components/aboutpage/Aboutpage';


export const paths = {
  homepage: '/',
  aboutpage: '/about'
}

export const Routes = [
  {
    path: paths.homepage,
    exact: true,
    component: Homepage
  },
  {
    path: paths.aboutpage,
    exact: true,
    component: Aboutpage
  }
];


