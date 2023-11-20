import connectDB from "app/lib/mongodb";
import Users from "app/models/users";
import { NextResponse } from "next/server";


export async function POST(req) {
    const userData = await req.json();
    console.log('Received user data:', userData);

    try {
        await connectDB();
        const newUser = await Users.create(userData);
        console.log('User saved successfully:', newUser);

        return NextResponse.json({
          msg: ["User saved successfully!"],
          success: true,
          user: userData, // Include the newly created game in the response
        });

    } catch (error) {
        if (error.name === 'ValidationError') {
            let errorlist = [];
            for (let e in error.errors) {
                errorlist.push(error.errors[e].message);
            }
            console.log('Validation errors:', errorlist);
            return NextResponse.json({msg: errorlist, success: false})
        } else {
            console.error('An error occurred:', error);
            return NextResponse.json({msg: [error.message || 'An error has occured'], success: false});
        }
    }
}


export async function GET() {
    try {
      await connectDB();
      const allUsers = await Users.find({}).exec();
      //console.log('Users loaded from the database:', allUsers);
      return NextResponse.json({
        users: allUsers,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        msg: [error.message || 'An error has occurred'],
        success: false,
      });
    }
  }