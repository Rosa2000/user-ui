// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { LoginUser } from './Login.action';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import Input from 'antd/es/input/Input';
// import Button from '~/component/Button/Button';

// import validation from './validation';

// import classNames from 'classnames/bind';
// import styles from './Login.module.scss';
// import { environment } from '~/config';
// const cx = classNames.bind(styles);

// function Login() {
//     const dispatch = useDispatch();
//     const { user, token, result, messageRes } = useSelector((state) => state.login);

//     const navigate = useNavigate();

//     const [values, setValues] = useState({
//         username: '',
//         password: '',
//     });
//     const [errors, setErrors] = useState({ aaa: 111111 });

//     const handleChange = (event) => {
//         setValues({
//             ...values,
//             [event.target.name]: event.target.value,
//         });
//     };
//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         dispatch(LoginUser({ username: values.username, password: values.password }));
//     };

//     useEffect(() => {
//         const handleToken = async () => {
//             if (user && token) {
//                 //console.log(` Lưu Authorization=${token};domain=.mytv.vn;path=/`);
//                 if (environment == 'local') {
//                     document.cookie = `Authorization=${token};domain=.localcms.com;path=/;`;
//                 } else if (environment == 'stage') document.cookie = `Authorization=${token};domain=.mytv.vn;path=/`;
//                 //await localStorage.setItem('token', token);
//                 await localStorage.setItem('user', user);
//             }
//         };
//         handleToken();
//     }, [user, token]);

//     useEffect(() => {
//         if (result === 0) {
//             // console.log('navi gate', localStorage.getItem('currentLocal'));
//             if (localStorage.getItem('currentLocal') && localStorage.getItem('currentLocal') !== 'null') {
//                 navigate(localStorage.getItem('currentLocal'));
//                 return () => {};
//             }
//             navigate('/');
//             return () => {};
//         } else if (result === -1) {
//             if (messageRes == 'username or password is incorrect') {
//                 setErrors(() => {
//                     var errors = {};
//                     errors.notification = 'Sai tài khoản hoặc mật khẩu, vui lòng thử lại!!!';
//                     errors;
//                 });
//                 navigate('/login');
//                 return () => {};
//             } else if (messageRes == 'Request failed with status code 422') {
//                 setErrors(validation(values));

//                 navigate('/login');
//                 return () => {};
//             }
//         }
//         return () => {};
//     }, [result, values, messageRes]);

//     return (
//         <div className={cx('wrapper')}>
//             <h1 className={cx('title', 'center')}>VMP - CONTENT MANAGEMENT SYSTEM</h1>
//             <form className={cx('formlogin')} onSubmit={handleFormSubmit}>
//                 <h1 className={cx('title')}>Đăng Nhập</h1>
//                 <div className={cx('row_input')}>
//                     <label className={cx('input__text')} htmlFor="username">
//                         {' '}
//                         Tài khoản:
//                     </label>
//                     <div className={cx('inputerror')}>
//                         <Input
//                             placeholder="Nhập vào user name"
//                             name="username"
//                             value={values.username}
//                             onChange={handleChange}
//                         ></Input>
//                         {errors.username && <p className="error">{errors.username}</p>}
//                     </div>
//                 </div>
//                 <div className={cx('row_input')}>
//                     <label className={cx('input__text')} htmlFor="password">
//                         {' '}
//                         Mật khẩu:
//                     </label>
//                     <div className={cx('inputerror')}>
//                         <Input
//                             placeholder="Nhập vào password"
//                             type="password"
//                             name="password"
//                             value={values.password}
//                             onChange={handleChange}
//                         ></Input>
//                         {errors.password && <p className="error">{errors.password}</p>}
//                     </div>
//                 </div>
//                 {errors.notification && <p className="error">{errors.notification}</p>}
//                 <Link className={cx('links')}> Quên mật khẩu?</Link>
//                 <Button className={cx('btn__login')}>
//                     <input type="submit" value="" />
//                     Đăng Nhập
//                 </Button>
//             </form>
//         </div>
//     );
// }

// export default Login;
