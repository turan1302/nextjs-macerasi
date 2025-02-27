<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix'=>'todos','as'=>'todos.'],function (){
    Route::get('',[\App\Http\Controllers\api\todo\indexController::class,'index'])->name('index');
    Route::post('create',[\App\Http\Controllers\api\todo\indexController::class,'create'])->name('create');
    Route::get('/change-status/{id}',[\App\Http\Controllers\api\todo\indexController::class,'changeStatus'])->name('changeStatus');
    Route::get('/edit/{id}',[\App\Http\Controllers\api\todo\indexController::class,'edit'])->name('edit');
    Route::get('/delete/{id}',[\App\Http\Controllers\api\todo\indexController::class,'delete'])->name('delete');
});
