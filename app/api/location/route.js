import connectDB from "app/lib/mongodb";
import Locations from "app/models/locations";
import { NextResponse } from "next/server";


export async function POST(req) {
    const {Name} = await req.json();

    try {
        await connectDB();
        await Locations.create({Name});
        return NextResponse.json({msg: ["Message sent Successfully!"], success: true});
    } catch (error) {
        if (error.name === 'ValidationError') {
            let errorlist = [];
            for (let e in error.errors) {
                errorlist.push(error.errors[e].message);
            }
            console.log(errorlist);
            return NextResponse.json({msg: errorlist, success: false})
        } else {
            console.log(error);
            return NextResponse.json({msg: [error.message || 'An error has occured'], success: false});
        }
    }
} 