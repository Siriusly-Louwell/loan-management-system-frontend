import React from 'react';
import CustomBadge from '../badges/CustomBadge';

export default function FormInput({label, id, type, name, value, onchange, placeholder, require = false}) {
    return (
        <div>
            <label for={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label} {require ? (<CustomBadge text='*required' color='pink' />) : ''}</label>
            <input type={type} name={name} id={id} value={value} onChange={onchange} placeholder={placeholder} required={require}
            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
        </div>
    );
}