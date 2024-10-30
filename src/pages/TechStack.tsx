import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import mockStackData, { IMockStackData } from '@/data/mockStackData';
import TechStackDetail from '@/pages/TechStackDetail';

export default function TechStack() {
  const [stackData, setStackData] = useState<IMockStackData[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    setStackData(mockStackData);
  }, []);

  return (
    <div
      id="stack"
      className="relative overflow-hidden before:absolute before:start-1/2 before:top-0"
    >
      <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto mt-5 max-w-2xl text-center">
          <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
            {t('techStack.title')}
            <span className="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent" />
          </h1>
        </div>
        {/* 테크 스텍 상세내용 */}
        <div className="flex justify-center ">
          {stackData.map((item) => (
            <TechStackDetail skillName={item.skillName} iconSrc={item.iconSrc} key={uuidv4()} />))}

        </div>
      </div>
    </div>
  );
}
