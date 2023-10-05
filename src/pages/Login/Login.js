import styles from './Login.scss';
import classNames from 'classnames/bind';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LoginUser } from './Login.action';
// import { environment } from '~/config';


const cx = classNames.bind(styles);

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, token, result, messageRes } = useSelector((state) => state.login);
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({ aaa: 111111 });

    const handleChange = (event) => {
        this.setState({ name: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(LoginUser({ username: values.username, password: values.password }));
    };

    // useEffect(() => {
    //     const handleToken = async () => {
    //         if (user && token) {
    //             //console.log(` Lưu Authorization=${token};domain=.mytv.vn;path=/`);
    //             if (environment == 'local') {
    //                 document.cookie = `Authorization=${token};domain=.localcms.com;path=/;`;
    //             } else if (environment == 'stage') document.cookie = `Authorization=${token};path=/`;
    //             //await localStorage.setItem('token', token);
    //             await localStorage.setItem('user', user);
    //         }
    //     };
    //     handleToken();
    // }, [user, token]);

    return (
        <div class={cx('container')}>
            <div class={cx('center')}>
                <h1>Login</h1>
                <form onSubmit={handleFormSubmit}>
                    <div class="txt_field">
                        <input
                            placeholder="Enter Username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div class="txt_field">
                        <input
                            placeholder="Enter Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div class="pass">Forgot Password?</div>
                    <input name="submit" type="Submit" value="Login"/>
                    <div class="register_link">
                        Not a Member ?
                        <a href="/register">Register</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
