import { useTranslation } from 'react-i18next';
import PortFolioDetail from '@/pages/PortFolioDetail.tsx';

export default function PortFolio() {
  const { t } = useTranslation();
  return (
    <div className="relative overflow-hidden before:absolute before:start-1/2 before:top-0">
      <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto mt-5 max-w-2xl text-center">
          <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
            <span>
              {t('portFolio.title')}
            </span>
          </h1>
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <PortFolioDetail />
          <PortFolioDetail />
          <PortFolioDetail />
          <PortFolioDetail />
          {/* <p className="text-lg text-gray-600 dark:text-gray-400"> */}
          {/*   {t('portFolio.content')} */}
          {/* </p> */}
        </div>
      </div>
    </div>
  );
}
