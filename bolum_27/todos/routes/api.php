<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix'=>'todos','as'=>'todos.'],function (){
    Route::get('',[\App\Http\Controllers\api\todo\indexController::class,'index'])->name('index');
});
