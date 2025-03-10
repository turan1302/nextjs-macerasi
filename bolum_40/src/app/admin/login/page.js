import React from 'react'
import Link from "next/link";

const LoginPage = (props) => {
    return (
        <div className={"container"}>
            <div className={"row justify-content-center mt-5"}>
                <div className={"col-xl-6 col-lg-12 col-md-9"}>
                    <div className={"card o-hidden border-0 shadow-lg my-5"}>
                        <div className={"card-body p-0"}>
                            <div className={"row"}>
                                <div className={"col-lg-12"}>
                                    <div className={"p-5"}>
                                        <div className={"text-center"}>
                                            <h1 className={"h4 text-gray-900 mb-4"}>Admin Panel Giriş Sayfası!</h1>
                                        </div>
                                        <form className={"user"}>
                                            <div className={"form-group"}>
                                                <input type="email" className="form-control form-control-user"
                                                       id="exampleInputEmail" aria-describedby="emailHelp"
                                                       placeholder="E-Mail Adresiniz..."/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                       id="exampleInputPassword" placeholder="Şifeniz..."/>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="customCheck"/>
                                                </div>
                                            </div>
                                            <Link href="/admin" className="btn btn-primary btn-user btn-block">
                                                Giriş Yap
                                            </Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage
