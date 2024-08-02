import classNames from 'classnames/bind';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import styles from './DefaultLayout.moule.scss'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (  
        <div className='wrapper'>
           <Header />
           <div className='container'>
            <Sidebar />
            <div className='content'>{ children }</div>
           </div>
        </div>
    );
}

export default DefaultLayout;