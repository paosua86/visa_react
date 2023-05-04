import React from 'react';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer class="bg-black px-3 py-8 text-gray-500 transition-colors duration-200 dark:bg-gray-800 text-2 dark:text-gray-200">
      <div class="flex flex-col">
        <div class="h-px mx-auto rounded-full md:hidden mt-7 w-11">
        </div>
        <div class="flex flex-col mt-4 md:mt-0 md:flex-row">
          <nav class="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
            <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
              Contacto
            </a>

            <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
              Whatsapp
            </a>
          </nav>
          <div class="h-px mx-auto mt-4 rounded-full md:hidden w-11">
          </div>
          <div class="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
            <a class="hover:text-primary-gray-20" href="https://tiktok.com">
            <FaTiktok class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"/>
            </a>

          </div>
          <div class="h-px mx-auto mt-4 rounded-full md:hidden w-11 ">
          </div>
          <div class="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
            <span class="">
              © 2023
            </span>
            <span class="mt-7 md:mt-1">
              Created by
              <a class="underline hover:text-primary-gray-20" href="https://www.quesevenda.com"> QueSeVenda.com</a>
            </span>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
