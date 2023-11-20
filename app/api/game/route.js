import connectDB from "app/lib/mongodb";
import Games from "app/models/games";
import { NextResponse } from "next/server";


export async function POST(req) {
    const gameData = await req.json();
    console.log('Received game data:', gameData);

    try {
        await connectDB();
        const newGame = await Games.create(gameData);
        console.log('Game saved successfully:', newGame);

        return NextResponse.json({
          msg: ["Game saved successfully!"],
          success: true,
          game: newGame, // Include the newly created game in the response
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
      const allGames = await Games.find({}).exec();
      console.log('Games loaded from the database:', allGames);
      return NextResponse.json({
        games: allGames,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        msg: [error.message || 'An error has occurred'],
        success: false,
      });
    }
  }