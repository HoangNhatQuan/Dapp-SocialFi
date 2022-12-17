import SCREEN_PATH_CODE from 'utils/enums/routes.enum';
import View from 'view';
import NotFoundComponent from './404/NotFound.component';
import CourseTestComponent from './course-test/CourseTest.component';
import CourseComponent from './courses/Course.component';
import HomeComponent from './home/Home.component';
import LandingPageComponent from './landingpage/LandingPage.component';
import SectionComponent from './section/Section.component';
import AccountComponent from './account/account';

const ViewRoutes = [
  {
    path: '*',
    exact: true,
    public: true,
    component: <View />,
    children: []
  },
  {
    path: SCREEN_PATH_CODE.LANDING_PAGE,
    exact: true,
    public: true,
    component: <LandingPageComponent />,
    children: []
  },
  {
    path: SCREEN_PATH_CODE.WEB_APP,
    exact: true,
    component: <HomeComponent />,
    children: []
  },
  {
    path: SCREEN_PATH_CODE.HOME,
    exact: true,
    component: <HomeComponent />,
    children: []
  },
  {
    path: SCREEN_PATH_CODE.COURSE_W_ID,
    exact: true,
    component: <CourseComponent />,
    children: []
  },
  {
    path: SCREEN_PATH_CODE.COURSE_TEST,
    exact: true,
    component: <CourseTestComponent />,
    children: []
  },
  {
    path: SCREEN_PATH_CODE.COURSE_W_ID_W_SECTION,
    exact: true,
    component: <SectionComponent />,
    children: []
  },
  {
    path: SCREEN_PATH_CODE.ACCOUNT,
    exact: true,
    component: <AccountComponent />,
    children: []
  },
];
export default ViewRoutes;