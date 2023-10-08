import useTrans from '@/hooks/useTrans';
import { PreImage } from './customization/PreImage';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const RenderFlag = (language: string) => {
  const flagMap: {
    [key: string]: {
      src: string;
      text: string;
    };
  } = {
    vi: {
      src: '/vietnam.png',
      text: 'Việt Nam',
    },
    en: {
      src: '/united-kingdom.png',
      text: 'English',
    },
  };

  const flagSource = flagMap[language] || flagMap['vi'];

  return (
    <div className='flex w-full items-center justify-between gap-2'>
      {flagSource.text}
      <div className='relative h-[24px] w-[24px] overflow-hidden'>
        <PreImage src={flagSource.src} alt={flagSource.text} objectFit='contain' />
      </div>
    </div>
  );
};

const LanguageSwitch = () => {
  const { lang, changeLanguage } = useTrans();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='cursor-pointer'>
        <div>{lang && RenderFlag(lang)}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => changeLanguage('vi')}>{lang && RenderFlag('vi')}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('en')}>{lang && RenderFlag('en')}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitch;
