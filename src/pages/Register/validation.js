const validation = (values) => {
    let errors = {};

    if (!values.username) {
        errors.username = 'username required!';
    }
    if (!values.password) {
        errors.password = 'password required!';
    } else if (values.password.length < 5) {
        errors.password = 'Trường này phải >5 ký tự';
    }

    return errors;
};

export default validation;
