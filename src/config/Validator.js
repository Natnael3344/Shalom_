// @flow

const validate = (values) => {

    /*
    *
    * Validation for All Forms
    *
    */

    const error = {};

    if (!values.user_name) {
        error.user_name = "Please enter Mobile Number/Email."
    } else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/.test(values.user_name)) {
        error.user_name = "Please enter valid Mobile Number/Email."
    }

    if (!values.username) {
        error.username = "Please enter Mobile Number/Email."
    } else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/.test(values.username)) {
        error.username = "Please enter valid Mobile Number/Email."
    }

    if (!values.first_name) {
        error.first_name = "Please enter first name."
    } else if (values.first_name.length < 3) {
        error.first_name = "Name must be 3 characters long."
    }

    if (!values.name) {
        error.name = "Please enter full name."
    } else if (values.name.length < 3) {
        error.name = "Full Name must be 3 characters long."
    }

    if (!values.password) {
        error.password = "Please enter password."
    } else if (values.password.length < 6) {
        error.password = "Password length should be minimum 6 character."
    }

    if (!values.confirm_password) {
        error.confirm_password = "Please enter confirm password."
    } else if (values.confirm_password.length < 6) {
        error.confirm_password = "Confirm password length should be minimum 6 character."
    }

    // if (!values.email) {
    //     error.email = "Please enter email address."
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     error.email = "Email is not vaild email."
    // }
    if (!values.number) {
        error.number = "Please enter email address."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.number)) {
        error.number = "Email is not vaild email."
    }
    if (!values.mobile_number) {
        error.mobile_number = "Please enter mobile number."
    } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.mobile_number)) {
        error.mobile_number = "Mobile Number must be a valid number."
    }
    
    // if (!values.number) {
    //     error.number = "Please enter mobile number."
    // } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.number)) {
    //     error.number = "Mobile Number must be a valid number."
    // }

    if (!values.category) {
        error.category = "Please select feedback category."
    } 
    if (!values.title) {
        error.title = "Please enter title."
    } 
    if (!values.message) {
        error.message = "Please enter message."
    } 
    
    if (!values.otp) {
        error.otp = "Please enter OTP sent on your mobile."
    } 

    return error;
}

export default validate;