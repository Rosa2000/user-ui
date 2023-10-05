const validation = (values) => {
    let errors = {};

    if (!values.username) {
        errors.username = 'Vui lòng nhập trường này !';
    }
    if (!values.password) {
        errors.password = 'Vui lòng nhập trường này !';
    // } else if (values.password.length < 5) {
    //     errors.password = 'Trường này phải >5 ký tự';
    }

    return errors;
};

export default validation;
