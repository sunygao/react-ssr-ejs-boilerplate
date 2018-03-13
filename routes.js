import HomepageContainer from './src/js/containers/homepage/Homepage';
import GridviewContainer from './src/js/containers/gridview/Gridview';


export const paths = {
  homepage: '/',
  gridview: '/grid-view'
}

export const Routes = [
  {
    path: paths.homepage,
    exact: true,
    component: HomepageContainer
  },
  {
    path: paths.gridview,
    exact: true,
    component: GridviewContainer
  }
];


