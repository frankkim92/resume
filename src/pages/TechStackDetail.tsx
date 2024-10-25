// import { useTranslation } from 'react-i18next';

interface TechStackDetailProps {
  skillName:string;
  iconSrc:string;
}

export default function TechStackDetail({ skillName, iconSrc }:TechStackDetailProps) {
  // const { t } = useTranslation();
  return (
    <div className="relative overflow-hidden before:absolute before:start-1/2 before:top-0  ">
      <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto  max-w-2xl text-center">
          <h1
            className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl"
          >
            <img src={iconSrc} alt={`${skillName} icon`} className="  w-24 h-48" />

            {/* <p>{skillName}</p> */}
            <span
              className="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent"
            >
              {/* {t('techStack.subtitle')} */}
            </span>

          </h1>
        </div>

      </div>

    </div>
  );
}
