import { useTranslation } from 'react-i18next';

export default function PortFolioDetail() {
  const { t } = useTranslation();
  return (
    <>
      {/* 데이터팜 모바일 */}
      <div
        className="mt-10 relative overflow-hidden before:absolute before:start-1/2 before:top-0 border-2"
      >
        <div className="max-w-[85rem] px-4 pb-10 pt-6 sm:px-6 lg:px-8  ">
          <div className="mt-1 max-w-2xl">
            <h1
              className="block text-left  md:text-4xl lg:text-4xl"
            >
              <span>
                {t('PortFolioDetail1.title')}

              </span>

            </h1>
            <div className="max-w-3xl text-left">
              <h3 className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                {t('PortFolioDetail1.date')}
              </h3>
              <p className="text-xl text-primary">
                {t('PortFolioDetail1.stack')}
              </p>
            </div>
            <h4
              className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl"
            >
              {t('PortFolioDetail1.content1')}
            </h4>
            <h4
              className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl"
            >
              {t('PortFolioDetail1.content2')}
            </h4>
            <h4
              className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl"
            >
              {t('PortFolioDetail1.content3')}
            </h4>
            <h4
              className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl"
            >
              {t('PortFolioDetail1.content4')}
            </h4>
          </div>

        </div>
      </div>

      {/* 데이터팜 웹 */}
      <div
        className="mt-10 relative overflow-hidden before:absolute before:start-1/2 before:top-0 border-2"
      >
        <div className="max-w-[85rem] px-4 pb-10 pt-6 sm:px-6 lg:px-8  ">
          <div className="mt-1 max-w-2xl">
            <h1
              className="block text-left  md:text-4xl lg:text-4xl"
            >
              <span>
                {t('PortFolioDetail2.title')}

              </span>

            </h1>
            <div className="max-w-3xl text-left">
              <h3 className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                {t('PortFolioDetail2.date')}
              </h3>
              <p className="text-xl text-primary">
                {t('PortFolioDetail2.stack')}
              </p>
            </div>
            <h4
              className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl"
            >
              {t('PortFolioDetail2.content1')}
            </h4>
            <h4
              className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl"
            >
              {t('PortFolioDetail2.content2')}
            </h4>
            <h4
              className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl"
            >
              {t('PortFolioDetail2.content3')}
            </h4>
            <h4
              className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl"
            >
              {t('PortFolioDetail2.content4')}
            </h4>
          </div>

        </div>
      </div>

      {/* CS360 */}
      <div className="mt-10 relative overflow-hidden before:absolute before:start-1/2 before:top-0 border-2">
        <div className="max-w-[85rem] px-4 pb-10 pt-6 sm:px-6 lg:px-8  ">
          <div className="mt-1 max-w-2xl">
            <h1 className="block text-left  md:text-4xl lg:text-4xl">
              <span>
                {t('PortFolioDetail3.title')}

              </span>

            </h1>
            <div className="max-w-3xl text-left">
              <h3 className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                {t('PortFolioDetail3.date')}
              </h3>
              <p className="text-xl text-primary">
                {t('PortFolioDetail3.stack')}
              </p>
            </div>
            <h4
              className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl"
            >
              {t('PortFolioDetail3.content1')}
            </h4>
            <h4 className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl">
              {t('PortFolioDetail3.content2')}
            </h4>
            <h4 className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl">
              {t('PortFolioDetail3.content3')}
            </h4>
            <h4 className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl">
              {t('PortFolioDetail3.content4')}
            </h4>
          </div>

        </div>
      </div>

      {/*   상품출시지원 */}
      <div className="mt-10 relative overflow-hidden before:absolute before:start-1/2 before:top-0 border-2">
        <div className="max-w-[85rem] px-4 pb-10 pt-6 sm:px-6 lg:px-8  ">
          <div className="mt-1 max-w-2xl">
            <h1 className="block text-left  md:text-4xl lg:text-4xl">
              <span>
                {t('PortFolioDetail4.title')}
              </span>
            </h1>
            <div className="max-w-3xl text-left">
              <h3 className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                {t('PortFolioDetail4.date')}
              </h3>
              <p className="text-xl text-primary">
                {t('PortFolioDetail4.stack')}
              </p>

            </div>
            <h4
              className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl"
            >
              {t('PortFolioDetail4.content1')}
            </h4>
            <h4 className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl">
              {t('PortFolioDetail4.content2')}
            </h4>
            <h4 className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl">
              {t('PortFolioDetail4.content3')}
            </h4>
            <h4 className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl">
              {t('PortFolioDetail4.content4')}
            </h4>
          </div>

        </div>
      </div>

    </>
  );
}
