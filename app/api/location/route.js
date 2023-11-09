import connectDB from "app/lib/mongodb";
import Locations from "app/models/locations";
import { NextResponse } from "next/server";

export async function POST(req) {
  const locationData = await req.json();

  try {
    await connectDB();
    const newLocation = await Locations.create(locationData);

    return NextResponse.json({
      msg: ["Location saved successfully!"],
      success: true,
      location: newLocation, // Include the newly created location in the response
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      console.error(error);
      return NextResponse.json({
        msg: [error.message || 'An error has occurred'],
        success: false,
      });
    }
  }
}

export async function GET() {
  try {
    await connectDB();
    const allLocations = await Locations.find({}).exec();
    return NextResponse.json({
      locations: allLocations,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      msg: [error.message || 'An error has occurred'],
      success: false,
    });
  }
}