import { useTranslation } from "react-i18next";
import TechStackDetail from "@/pages/TechStackDetail";

export default function TechStack() {
  const { t } = useTranslation();
  return (
    <div
      id="stack"
      className="relative overflow-hidden before:absolute before:start-1/2 before:top-0"
    >
      <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto mt-5 max-w-2xl text-center">
          <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
            {t("techStack.title")}
            <span className="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {/* {t('techStack.subtitle')} */}
            </span>
          </h1>
        </div>
        {/* 테크 스텍 상세내용 */}
        <div className="flex justify-center">
          <TechStackDetail
            skillName="Javascript"
            iconSrc="./src/assets/skill-icon/Javascript.svg"
          />
          <TechStackDetail
            skillName="Typescript"
            iconSrc="./src/assets/skill-icon/Typescript.svg"
          />
          <TechStackDetail
            skillName="Vue.js"
            iconSrc="./src/assets/skill-icon/VueJS-Light.svg"
          />
          <TechStackDetail
            skillName="React"
            iconSrc="./src/assets/skill-icon/React.svg"
          />
          <TechStackDetail
            skillName="Next.js"
            iconSrc="./src/assets/skill-icon/NextJS-Light.svg"
          />
        </div>
      </div>
    </div>
  );
}
