import * as Yup from "yup";

export const yupSchema = Yup.object().shape({
    firstname: Yup.string().required(" نام الزامی می باشد"),
    lastname: Yup.string().required(" نام خانوادگی الزامی می باشد"),
    email: Yup.string().email(" ایمل خود را به درستی وارد کنید").required(" ایمیل الزامی می باشد"),
    text: Yup.string().required("متن خود را وارد کیند"),
    text: Yup.string().required("متن خود را وارد کیند"),
    recaptcha: Yup.string().required("تایید کپچا الزامی است"),
})


