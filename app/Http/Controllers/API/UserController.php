<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name' => ['required'],
            'email' => ['required'],
            'password' => ['required'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        //$token = $user->createToken('Laravel Password Grant Client')->accessToken;

        $user->save();

        return response()->json([
            'status' => 'OK',
            'message' => 'Usuario registrado'
        ]);
    }

    public function login(Request $request){
        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        if (!Auth::attempt($request->only('email', 'password'))){
            return response()->json([
                'status' => 'BAD',
                'msg' => 'Credenciales incorrectas',
            ]);
        }

        $user = User::where('email', $request->email)->first();

        $token = $user->createToken('Laravel Password Grant Client')->accessToken;

        return response()->json([
            'status' =>  'OK',
            'token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function usuario(){
        return Auth::user();
    }

    public function logout(){
        Auth::user()->token()->revoke();
        return response()->json([
           'status' => 'OK',
            'msg' => 'Sesión cerrada con exito',
        ]);
    }
}
