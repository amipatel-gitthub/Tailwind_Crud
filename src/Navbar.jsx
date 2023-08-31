import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="bg-slate-200 p-4 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-zinc-800 font-semibold text-2xl">
                        <NavLink to="/" className="text-zinc-800 hover:text-blue-700 font-semibold  transition duration-300 ease-in-out">
                            My App
                        </NavLink>
                    </div>
                    <ul className="space-x-4 flex items-center">
                        <li className='px-2'>
                            <NavLink to="/Crud" className="text-zinc-800 hover:text-blue-700 font-semibold  transition duration-300 ease-in-out">
                                Crud
                            </NavLink>
                        </li>
                        <li className='px-2'>
                            <NavLink to="/Other" className="text-zinc-800 hover:text-blue-700 font-semibold  transition duration-300 ease-in-out">
                                Other
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
