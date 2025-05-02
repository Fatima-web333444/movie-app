// app/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { MdOutlineMovie } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md rounded-xl px-6 py-4 mb-6 flex gap-6 text-blue-600 font-semibold items-center">
      <Link href="/" className="flex items-center gap-2 hover:text-blue-800 transition-colors">
        <MdOutlineMovie className="text-2xl" />
        Now Playing
      </Link>

      <Link href="/top-rated" className="flex items-center gap-2 hover:text-blue-800 transition-colors">
        <FaStar className="text-2xl text-yellow-500" />
        Top Rated
      </Link>

      <Link href="/upcoming" className="flex items-center gap-2 hover:text-blue-800 transition-colors">
        <BiTimeFive className="text-2xl" />
        Upcoming
      </Link>
    </nav>
  );
}
