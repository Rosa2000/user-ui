import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';

import { ResetStateLogin } from '../Login/Login.action';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

const Home = () => {
    const dispatch = useDispatch();
    const { alertLogin, result } = useSelector((state) => state.login);
    const [messageApi, contextHolder] = notification.useNotification();
    useEffect(() => {
        if (result === 0 && alertLogin == 'Login success') {
            messageApi.open({
                type: 'success',
                message: `Đăng nhập Thành Công`,
            });
            dispatch(ResetStateLogin());
        }
    }, [result, alertLogin]);
    return (
        <div className={cx('menu-body')}>
            {contextHolder}
            <h1>Hello</h1>
        </div>
    );
};

export default Home;
