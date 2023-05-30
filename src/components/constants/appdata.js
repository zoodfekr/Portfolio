import restaurant from '../../assets/restaurant.jpg';
import words from '../../assets/words.png';
import contacts from '../../assets/contacts.jpg';
import portfolio from '../../assets/portfolio.png';
import { AiFillAccountBook } from "react-icons/ai";
import { MdOutlinePlayLesson } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiCodeCurly, BiBookAlt } from "react-icons/bi";

import html from '../../assets/cert/html.jpg';
import flexbox from '../../assets/cert/flexbox.jpg';
import es from '../../assets/cert/es.jpg';
import js from '../../assets/cert/js.jpg';
import sass from '../../assets/cert/sass.jpg';
import bootstrap from '../../assets/cert/bootstrap.jpg';


export const card_data = [
    {
        title: "رستوران تهران",
        text: "این پروه با استفاده از HTML،CSS،BOOTSTRAP طراحی شده و یک سایت تک صفحه ای می باشد",
        img: `${restaurant}`,
        color: "#DE901F",
        address: "https://zoodfekr.github.io/restaurant/",
        code: "https://github.com/zoodfekr/restaurant",
    },
    {
        title: " دفترچه مخاطبین ",
        text: "پروژه ای که با استفاده از React ساخته شده و کارآن ذخیره-ویرایش مخاطبین در سرور دلخواه است.",
        img: `${contacts}`,
        color: "#8369A6",
        address: "https://zoodfekr-org.github.io/",
        code: "https://github.com/zoodfekr/contacts-management",
    }, {
        title: " دفترچه لغت",
        text: "این پروه با استفاده از کتابخانه React برای تمرین لغات انگلیسی ساخته شده در واقع این پروژه یک دفترچه لغت هوشمند به حسابت می آید.",
        img: `${words}`,
        color: "#1976D2",
        address: "https://vocabulary-training-localstorage.github.io/",
        code: "https://github.com/zoodfekr/Vocabulary-training-LocalStorage",
    },
    {
        title: "وب اپلیکیشن پورتفولیو",
        text: "پروژه پورتفولیو، برنامه تحت وبی که اکنون در حال کارکردن با آن هستید. این پروژه هم با استفاده از react , Mui  ساخته شده. ",
        img: `${portfolio}`,
        color: "skyblue",
        address: "#",
        code: "https://github.com/zoodfekr/portfolio",
    },
];

export const aboutpage_tooltip = [
    {
        title: "دوره های طی شده",
        backgroundColor: "#FF1919",
        end: 9,
        icon: <MdOutlinePlayLesson></MdOutlinePlayLesson>,
    },
    {
        title: "تعداد استادهای من",
        backgroundColor: "#FF6969",
        end: 7,
        icon: <FaChalkboardTeacher></FaChalkboardTeacher>,
    },
    {
        title: " تعداد پروژه های من",
        backgroundColor: "#0EA293",
        end: 6,
        icon: <BiCodeCurly></BiCodeCurly>,
    },
];

export const timeline_data = [


    { icon:<BiBookAlt style={{ color: "white", fontSize: "20px" }}></BiBookAlt>, header: "کارشناسی", text: "دانشگاه تهران - مخابرات" },
];


export const slider_image = [{ img: html }, { img: sass }, { img: bootstrap }, { img: js }, { img: es }]


