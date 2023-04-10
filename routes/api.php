<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\News_API;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:api'])->group(function (){
    Route::get('user', [UserController::class, 'usuario']);
    Route::post('logout', [UserController::class, 'logout']);


    Route::get('news-sources', [News_API::class, 'News_api']);

});

Route::get('news-sources-withoutCall', [News_API::class, 'News_api']);
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
