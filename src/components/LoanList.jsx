import React from 'react';
import ColorLabel from './ColorLabel';
import ImageSkeleton from './loading components/ImageSkeleton';
import SmallSpin from './loading components/SmallSpin';

export default function LoanList({price, units, downpayment, img, name, color, load}) {
    return (
        <div className="space-y-4 p-6">
            <div className="flex items-center gap-6">
                {load ? (
                    <div className="h-20 w-20 object-contain flex-shrink-0">
                        <ImageSkeleton size={8} />
                    </div>
                ) : (
                    <img className="h-20 w-20 object-contain flex-shrink-0" src={`http://127.0.0.1:8000/storage/${img}`} alt="unit image" />
                )}
                
                <div className="flex items-center space-x-1">
                    {load ? (
                        <div className="w-20 h-5 rounded-lg bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
                    ) : (
                        <>
                            <ColorLabel style={color} />
                            <a href="#" className="min-w-0 font-medium text-gray-900 hover:underline dark:text-white">{name}</a>
                        </>
                    )}
                    
                </div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-normal flex space-x-2 text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-900 dark:text-white">Downpayment: </span> 
                    {load ? (
                        <SmallSpin size={20} />
                    ) : `₱${parseFloat(downpayment).toLocaleString()}`}
                </p>

                <div className="flex items-center justify-end gap-4">
                    <p className="text-base font-normal text-gray-900 dark:text-white">
                        {load ? (
                            <SmallSpin size={20} />
                        ) : `x${units}`}
                        </p>

                    {load ? (
                        <p className="w-20 h-8 bg-gray-200 dark:bg-gray-600 rounded-lg animate-pulse"></p>
                    ) : (
                        <p className="text-xl font-bold leading-tight text-gray-900 dark:text-white">₱{parseFloat(price).toLocaleString()}</p>
                    )}
                    
                </div>
            </div>
        </div>
    );
}