import React from 'react';
import PfpLabel from '../components/PfpLabel';
import CustomBttn from '../components/buttons/CustomBttn';
import Edit from '../assets/icons/Edit';
import LogRow from '../components/tables/LogRow';
import Preorder from '../components/badges/Preorder';
import Cancelled from '../components/badges/Cancelled';
import Confirmed from '../components/badges/Confirmed';
import ProfileCard from '../components/cards/ProfileCard';
import BigCart from '../assets/icons/BigCart';
import SmallUpArrow from '../assets/icons/SmallUpArrow';
import BigStar from '../assets/icons/BigStar';
import BigHeart from '../assets/icons/BigHeart';
import BigReturn from '../assets/icons/BigReturn';

export default function Profile() {
    return (
        <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-8">
          <div class="mx-auto max-w-screen-lg px-4 2xl:px-0">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">Profile Information</h2>
            <div class="grid grid-cols-2 gap-6 border-b border-t border-gray-200 py-4 dark:border-gray-700 md:py-8 lg:grid-cols-4 xl:gap-16">
              <ProfileCard label="Loans made" amount="25" text="20 last 3 months" icon={<BigCart />} arrow={<SmallUpArrow />} percent="10.3%" />
              <ProfileCard label="Credit score" amount="5" text="14 last 3 months" icon={<BigStar />} arrow={<SmallUpArrow />} percent="12%" />
              <ProfileCard label="Favorite products added" amount="2" text="10 last 3 months" icon={<BigHeart />} arrow={<SmallUpArrow />} percent="1.3%" />
              <ProfileCard label="Paid loans" amount="13" text="2 last 3 months" icon={<BigReturn />} arrow={<SmallUpArrow />} percent="6%" />
            </div>
            <div class="py-4 md:py-8">
              <div class="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                <div class="space-y-4">
                  <div class="flex space-x-4">
                    <img class="h-16 w-16 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar" />
                    <h2 class="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">John Doe</h2>
                  </div>
                  <PfpLabel caption="Email Address" label="doe@gmail.com" />
                  <PfpLabel caption="Current Address" label="2 Miles Drive, NJ 071, New York, United States of America" />
                  <PfpLabel caption="SSS/GSIS Number" label="93F35J6OO35" />
                  <PfpLabel caption="TIN Number" label="25J683B8657" />
                </div>
                <div class="space-y-4">
                  <PfpLabel caption="Gender" label="Male" />
                  <PfpLabel caption="Mobile Number" label="09678575807" />
                  <PfpLabel caption="Employment Status" label="Working" />
                  <PfpLabel caption="Employer" label="Employer name" />
                  <PfpLabel caption="Employer Address" label="FLOWBITE LLC, Fiscal code: 18673557" />
                </div>
              </div>
              <CustomBttn text="Edit profile" className="inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
                <Edit />
              </CustomBttn>
            </div>
            <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:p-8">
              <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Latest orders</h3>
              <LogRow id="#FWB12546777" date="10.11.2024" badge={<Preorder />} name="John Doe" />
              <LogRow id="#FWB12546777" date="10.11.2024" badge={<Confirmed />} name="John Doe" />
              <LogRow id="#FWB12546777" date="10.11.2024" badge={<Cancelled />} name="John Doe" />
              <LogRow id="#FWB12546777" date="10.11.2024" badge={<Confirmed />} name="John Doe" />
              <LogRow id="#FWB12546777" date="10.11.2024" badge={<Preorder />} name="John Doe" />
            </div>
          </div>
        </section>
    );
}