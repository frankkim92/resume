import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import mockPortFolioData, { IPortData, IChildren } from '@/data/mockPortFolioData';

export default function PortFolioDetail() {
  const [data, setData] = useState<IPortData[]>([]);

  const [commondata, setCommondata] = useState<IPortData[]>([]);

  useEffect(() => {
    setData(mockPortFolioData);
  }, []);
  return (
    <>
      {/* 데이터팜 모바일 */}
      {data.map((item) => (
        <div key={uuidv4()} className="mt-10 relative overflow-hidden before:absolute before:start-1/2 before:top-0 border-2">
          <div className="max-w-[85rem] px-4 pb-10 pt-6 sm:px-6 lg:px-8  ">
            <div className="mt-1 max-w-2xl">
              <h1 className="block text-left  md:text-4xl lg:text-4xl">
                <span>{item.title}</span>
              </h1>
              <div className="max-w-3xl text-left">
                <h3 className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                  {item.date}
                </h3>
                <p className="text-xl text-primary">{item.stack}</p>
              </div>
              {item.children.map((itemContent:IChildren) => (
                <h4 key={uuidv4()} className=" text-left text-gray-800 mt-1.5 dark:text-gray-200 md:text-1xl lg:text-1xl">
                  • {itemContent.content}
                </h4>
              ))}
            </div>
          </div>
        </div>
      ))}

    </>
  );
}
