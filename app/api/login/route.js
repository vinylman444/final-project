import connectDB from "app/lib/mongodb";
import Users from "app/models/users";
import { NextResponse } from "next/server";
import { setCookie } from "app/cookie";

export async function POST(req, res) {
  if (req.method === 'POST') {
    const loginData = await req.json();
    console.log('Received login user data:', loginData);
    console.log("username: ",loginData.username);

    try {
      await connectDB();
      const allUsers = await Users.find({}).exec();
      const authenticatedUser = allUsers.find(
        (user) => user.Username === loginData.username && user.Password === loginData.password
      );

      if (authenticatedUser) {
        console.log('Login successful for user:', authenticatedUser.Username);
        setCookie(res, 'sessionId', authenticatedUser.Username, {
            httpOnly: true, // Ensures the cookie is only accessible on the server
            maxAge: 60 * 60 * 24 * 7, // Set the session duration (e.g., 7 days)
            path: '/', // Set the cookie path
          });

        // Uncomment and implement session management logic
        // session.set('user', { name: authenticatedUser.Username });

        return NextResponse.json({
            msg: ["Login successfully!"],
            success: true,
            user: authenticatedUser,
          });

      } else {
        console.log('Login failed');
        // Directly returning JSON response
        return NextResponse.json({
          msg: ["Authentication failed. Please check your credentials."],
          success: false,
        });

       

      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Directly returning JSON response
      return NextResponse.json({
        msg: ["Authentication failed. Please check your credentials."],
        success: false,
      });
    }
  } else {
    return NextResponse.json({
        msg: ["Authentication failed. Please check your credentials."],
        success: false,
      });
  }
}

