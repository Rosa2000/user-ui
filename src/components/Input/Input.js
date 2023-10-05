import classNames from 'classnames/bind';
import styles from './Input.module.scss';
const cx = classNames.bind(styles);

function Input({
    children,
    size_s = false,
    size_m = false,
    size_l = false,
    size_xl = false,
    size_xxl = false,
    type = 'text',
    ...passprop
}) {
    var props = { size_s, size_m, size_l, size_xl, size_xxl };
    return <input type={type} className={cx('input', { ...props })} {...passprop}></input>;
}

export default Input;
