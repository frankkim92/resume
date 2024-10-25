import { useTranslation } from 'react-i18next';

export default function PortFolioDetail() {
  const { t } = useTranslation();
  return (
    <div className="relative overflow-hidden before:absolute before:start-1/2 before:top-0 border-4">
      <div className="max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="mt-1 max-w-2xl">
          <h1
            className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl"
          >

            <span>
              각각의 포폴 내용이 들어감

            </span>

            <span
              className="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent"
            >
              프로젝트 내용
            </span>
          </h1>
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('portFolio.content')}
          </p>
        </div>
      </div>
    </div>
  );
}
