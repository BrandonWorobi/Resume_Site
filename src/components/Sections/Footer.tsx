import {ChevronUpIcon} from '@heroicons/react/outline';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const Footer: FC = memo(() => (
  <div className="relative px-4 pt-12 pb-6 bg-neutral-900 sm:px-8 sm:pt-14 sm:pb-8">
    <div className="absolute inset-x-0 flex justify-center -top-4 sm:-top-6">
      <a
        className="p-1 rounded-full bg-neutral-100 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="w-6 h-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-500">
        <Socials />
      </div>
      <span className="text-sm text-neutral-700">© Copyright 2023 Brandon Worobi</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
