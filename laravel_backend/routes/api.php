<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/users', [UserController::class, 'get_users']);
Route::post('/add', [UserController::class, 'add_user']);
Route::delete('/users/{id}', [UserController::class, 'delete_user']);
Route::get('/users/{id}', [UserController::class, 'get_user']);
Route::put('/users/{id}/edit-username',[UserController::class, 'edit_user_name']);
