import React from "react";

export default function NotifGroup({children, date}) {
    return (
        <div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700">
            <time class="text-lg font-semibold text-gray-900 dark:text-white">{date}</time>
            <ol class="mt-3 divide-y divide-gray-200 dark:divide-gray-500">
                {children}
            </ol>
        </div>
    );
}