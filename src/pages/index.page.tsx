import MainLayout from 'common/components/layout/MainLayout'
import { NextPageWithLayout } from 'libs/next/type'

const HomePage: NextPageWithLayout = () => {
	return <div>HomePage</div>
}

HomePage.getLayout = MainLayout

export default HomePage
