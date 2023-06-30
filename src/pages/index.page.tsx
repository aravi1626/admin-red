import MainLayout from 'common/components/layout/MainLayout'
import { NextPageWithLayout } from 'libs/next/type'
import  Login  from '../common/components/login'

const HomePage: NextPageWithLayout = () => {
	return <Login/>
}

HomePage.getLayout = MainLayout

export default HomePage
