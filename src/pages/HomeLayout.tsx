import Header from '@/components/Header';
// import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
// import { Outlet, useNavigation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
  // const navigation = useNavigation();
  // const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {/* <div className='align-element py-20'> */}
      <main className='align-element py-20'>
        {/* isPageLoading ? <Loading /> : <Outlet /> */}
        {<Outlet />}
      </main>
    </>
  );
}
export default HomeLayout;
