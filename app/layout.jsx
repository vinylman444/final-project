import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <nav>
        <Link href="/"><button className="large-button2">Home</button></Link>
        <Link href="/addlocation"><button className="large-button2">Add a Location</button></Link>
        <Link href="/addgame"><button className="large-button2">Add a Game</button></Link>
        <Link href="/locationlist"><button className="large-button2"> Show All Locations</button></Link>
        </nav>

        <h1 className="site-title">Rhythm Game Map</h1>
        {children}
      </body>
    </html>
  )
}
