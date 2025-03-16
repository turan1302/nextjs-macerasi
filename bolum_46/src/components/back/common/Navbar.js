"use client";
import React, {useEffect, useState} from 'react'
import Link from "next/link";
import {inject, observer} from "mobx-react";
import AuthLayout from "@/components/back/common/Layout/AuthLayout";
import RestClient from "@/RestAPI/RestClient";
import AppUrl from "@/RestAPI/AppUrl";
import {useRouter} from "next/navigation";

const Navbar = (props) => {
    const [appState,setAppState] = useState({});

    const router = useRouter();

    useEffect(() => {
        isLoggedIn();
    }, []);

    const isLoggedIn = async ()=>{
        await props.AuthStore.getToken();
        const token = (props.AuthStore.appState !== null) ? props.AuthStore.appState.user.access_token : null;

        await RestClient.getRequest(AppUrl.check,{
            headers : {
                "Authorization" : "Bearer "+token
            }
        }).then((res)=>{
            const result = res.data;

            if (result.isLoggedIn !== true){
                props.AuthStore.removeToken();
                router.push("/admin/login");
            }else{
                let userData = {
                    id : result.data.id,
                    name : result.data.name,
                    surname : result.data.surname,
                    email : result.data.email,
                    access_token : result.data.access_token,
                }

                let appState = {
                    isLoggedIn : true,
                    user : userData
                }

                props.AuthStore.saveToken(appState);
                setAppState(userData);
            }
        }).catch((err)=>{
            console.log(err);
            props.AuthStore.removeToken();
            router.push("/admin/login");
        })
    }

    return (
        <AuthLayout>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                             aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                           placeholder="Search for..." aria-label="Search"
                                           aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bell fa-fw"></i>
                            <span className="badge badge-danger badge-counter">3+</span>
                        </a>
                        <div
                            className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="alertsDropdown">
                            <h6 className="dropdown-header">
                                Alerts Center
                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-primary">
                                        <i className="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 12, 2019</div>
                                    <span
                                        className="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-success">
                                        <i className="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-warning">
                                        <i className="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Show All
                                Alerts</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-envelope fa-fw"></i>
                            <span className="badge badge-danger badge-counter">7</span>
                        </a>
                        <div
                            className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="messagesDropdown">
                            <h6 className="dropdown-header">
                                Message Center
                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="/back/img/undraw_profile_1.svg"
                                         alt="..."/>
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div className="font-weight-bold">
                                    <div className="text-truncate">Hi there! I am wondering if you can help me
                                        with a
                                        problem I've been having.
                                    </div>
                                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="/back/img/undraw_profile_2.svg"
                                         alt="..."/>
                                    <div className="status-indicator"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">I have the photos that you ordered last
                                        month,
                                        how
                                        would you like them sent to you?
                                    </div>
                                    <div className="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="/back/img/undraw_profile_3.svg"
                                         alt="..."/>
                                    <div className="status-indicator bg-warning"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">Last month's report looks great, I am very
                                        happy with
                                        the progress so far, keep up the good work!
                                    </div>
                                    <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle"
                                         src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                         alt="..."/>
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">Am I a good boy? The reason I ask is because
                                        someone
                                        told me that people say this to all dogs, even if they aren't good...
                                    </div>
                                    <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Read More
                                Messages</a>
                        </div>
                    </li>

                    <div className="topbar-divider d-none d-sm-block"></div>

                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                {appState.name + " "+appState.surname}
                            </span>
                            <img className="img-profile rounded-circle" alt={"admin"}
                                 src="/back/img/undraw_profile.svg"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                             aria-labelledby="userDropdown">
                            <Link className="dropdown-item" href="/admin/profile">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profilim
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" href="/admin/logout">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Çıkış Yap
                            </Link>
                        </div>
                    </li>

                </ul>

            </nav>
        </AuthLayout>
    )
}

export default inject("AuthStore")(observer(Navbar))
