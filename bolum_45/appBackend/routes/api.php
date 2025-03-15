<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/** WEB KISMI ICIN **/
Route::group(["prefix" => "web"], function () {
    // AUTH ISLEMLERI
    Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
        Route::post('login', [\App\Http\Controllers\api\web\auth\admin\indexController::class, 'login'])->name('login');
        Route::post('register', [\App\Http\Controllers\api\web\auth\admin\indexController::class, 'register'])->name('register');

        Route::group(['middleware' => 'auth:api_admin'], function () {
            Route::get('profile', [\App\Http\Controllers\api\web\auth\admin\indexController::class, 'profile'])->name('profile');
            Route::get('logout', [\App\Http\Controllers\api\web\auth\admin\indexController::class, 'logout'])->name('logout');
            Route::post('update-profile', [\App\Http\Controllers\api\web\auth\admin\indexController::class, 'update_profile'])->name('update_profile');
            Route::get('check', [\App\Http\Controllers\api\web\auth\admin\indexController::class, 'check'])->name('check');
        });
    });
});
