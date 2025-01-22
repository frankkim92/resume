import { useTranslation } from 'react-i18next';

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div
      id="profile"
      className="relative overflow-hidden before:absolute before:start-1/2 before:top-0 border-4 "
    >
      <div className="max-w-[80rem] p-10 mt-3 sm:px-4 lg:px-6 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          <h1 className="block text-3xl font-bold text-gray-500 dark:text-gray-200 lg:text-4xl">            {/* Skeleton 사용하기 */}
            <span>소통과 협업을 중시하는 </span>
            <br />

            <span>프론트엔드 </span>
            <span className="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {/* {t('profile.subtitle')} */}
              개발자 김도훈입니다.
            </span>
          </h1>
        </div>
        <div className="mt-5 max-w-3xl  ">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {/* {t('profile.content')} */}
          </p>
        </div>
      </div>
    </div>
  );
}
