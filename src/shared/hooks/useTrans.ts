import EnglishScript from 'public/locales/en';
import VnScript from 'public/locales/vi';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

function getTrans(locale: string | undefined) {
  switch (locale) {
    case 'vi':
      return VnScript;
    case 'en':
      return EnglishScript;
    default:
      return VnScript;
  }
}
function getCurrentcy(locale: string | undefined) {
  switch (locale) {
    case 'vi':
      return 'VND';
    case 'en':
      return 'USD';
    default:
      return 'VND';
  }
}

const useTrans = () => {
  const router = useRouter();
  const { pathname, query, asPath } = router;
  const langQueryParam = Array.isArray(router.query.lang) ? router.query.lang[0] : router.query.lang;
  const [lang, setLang] = useState(langQueryParam || 'vi');
  const [currentcy, setCurrentcy] = useState('VND');

  const trans = getTrans(lang);

  const changeLanguage = useCallback(
    (newLang: 'vi' | 'en') => {
      const newPath = `${pathname}?lang=${newLang}`;
      router.push(newPath, asPath, { locale: newLang });
      setLang(newLang);
      setCurrentcy(getCurrentcy(newLang));
    },
    [router, pathname, asPath],
  );

  useEffect(() => {
    setLang(langQueryParam || 'vi');
    setCurrentcy(getCurrentcy(langQueryParam || 'vi'));
  }, [langQueryParam]);

  return { trans, lang, changeLanguage, currentcy };
};

export default useTrans;
