import Head from 'next/head';
import Header from '@/components/Header';
import SideBar from '@/components/sideBar';
import { useEffect, useState } from 'react';
import loginImage from "../../../public/images/Login/login.png";
import Link from 'next/link';

export default function Login() {

    const [isSideBarAppeared, setIsSideBarAppeared] = useState(false);

    useEffect(() => {

        let header = document.querySelector("#__next .page-header"),
            pageContent = document.querySelector(".login .page-content");

        pageContent.style.minHeight = `calc(100vh - ${header.clientHeight}px)`;

    }, []);

    return (
        // Start Login Page
        <div className="login">
            <Head>
                <title>Mr. Fix - Login</title>
            </Head>
            <Header setIsSideBarAppeared={setIsSideBarAppeared} />
            {isSideBarAppeared && <SideBar />}
            {/* Start Page Content Section */}
            <div
                className="page-content"
                style={isSideBarAppeared ? {
                    position: "relative",
                    right: "300px",
                    width: "calc(100vw - 317px)"} : {}
                }
            >
                {/* Start Container From Bootstrap */}
                <div className="container">
                    {/* Start Grid System From Bootstrap */}
                    <div className="row align-items-center">
                    <h1 className='page-title text-center mb-2'>أهلاً بعودتك</h1>
                        {/* Start Column */}
                        <div className="col-md-6">
                            {/* Start Login Form */}
                            <form className="login-form bg-white p-4 text-center">
                                <h4 className='mb-4'>أهلاً بعودتك .</h4>
                                <input type="text" placeholder="البريد الالكتروني أو رقم الجوال" className="form-control mb-4 p-3" />
                                <input type="password" placeholder="كلمة السر" className="form-control mb-4 p-3" />
                                <Link href="/" className='mb-3 btn'>نسيت كلمة السر !</Link>
                                <button type='submit' className='btn login-btn w-100 p-3'>تسجيل الدخول</button>
                            </form>
                            {/* End Login Form */}
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-md-6">
                            <img src={loginImage.src} alt="Login Image !!" className='login-img' />
                        </div>
                        {/* End Column */}
                    </div>
                    {/* End Grid System From Bootstrap */}
                </div>
                {/* End Container From Bootstrap */}
            </div>
            {/* End Page Content Section */}
        </div>
        // End Who Are We Page
    );
}
