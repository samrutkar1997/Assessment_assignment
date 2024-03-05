<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function add_user(Request $request)
    {     
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            // 'password' => 'required|string|min:6',
        ]);

        
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            // 'password' => bcrypt($validatedData['password']),
        ]);       
        return response()->json(['message' => 'User added successfully', 'user' => $user], 201);
    }
  public function get_users(){
    $users = User::all();
    return response()->json($users);
  }

  public function delete_user($id)
  {
      $user = User::find($id);
      if (!$user) {
          return response()->json(['message' => 'User not found'], 404);
      }

      $user->delete();

      return response()->json(['message' => 'User deleted successfully'], 200);
  }

  public function edit_user_name(Request $request, $id)
    {
      // return response()->json($request);
        $user = User::find($id);
        // return response()->json($user);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->name = $request->username;
        $user->save();

        return response()->json(['message' => 'Username updated successfully', 'user' => $user], 200);
    }

    public function get_user($id)
    {      
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json(['user' => $user], 200);
    }

}
