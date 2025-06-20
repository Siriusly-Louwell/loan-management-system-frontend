import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <section class="bg-white h-screen dark:bg-gray-800">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-500 dark:text-gray-400">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-500 md:text-4xl dark:text-gray-400">Something's missing.</p>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to="/" className="inline-flex text-white bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-rose-900 my-4">Back to Homepage</Link>
                </div>   
            </div>
        </section>
    );
}