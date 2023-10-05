import { useState } from 'react';

import styles from './Register.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Register() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    if (!file) {
        file = '~/images/default-avatar.png';
    }

    return (
        <div class={cx('container')}>
            <div class={cx('center')}>
                <h1>Register</h1>
                <form action='register' method='POST'>
                    <div class='img-upload'>
                        <input type="file" onChange={handleChange} />
                        <img src={file} alt='hehe'/>
                    </div>
                    <div class="txt_field">
                        <input type="text" name="text" required/>
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div class="txt_field">
                        <input type="text" name="text" required/>
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div class="txt_field">
                        <input type="password" name="password" required/>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div class="txt_field">
                        <input type="password" name="password" required/>
                        <span></span>
                        <label>Confirm password</label>
                    </div>
                    <input name="submit" type="Submit" value="Register"/>
                    <br/>
                    <a href="/login">Back</a>
                </form>
            </div>
        </div>
    );
}

export default Register;
