import { v4 as uuidv4 } from 'uuid';
import { IMockStackData } from '@/data/mockStackData';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';

export default function TechStackDetail({ skillName, iconSrc }:IMockStackData) {
  const [isJavascriptModalOpen, setIsJavascriptModalOpen] = useState(false);
  const [isReactModalOpen, setIsReactModalOpen] = useState(false);
  const [isVueModalOpen, setIsVueModalOpen] = useState(false);
  const [isNextModalOpen, setIsNextModalOpen] = useState(false);
  const [isTypescriptModalOpen, setIsTypescriptModalOpen] = useState(false);

  const detailStack = (stack:string) => {
    if (stack === 'Javascript') {
      setIsJavascriptModalOpen(true);
    }
    if (stack === 'Typescript') {
      setIsTypescriptModalOpen(true);
    }
    if (stack === 'Vue') {
      setIsVueModalOpen(true);
    }
    if (stack === 'React') {
      setIsReactModalOpen(true);
    }
    if (stack === 'Next') {
      setIsNextModalOpen(true);
    }
  };

  return (
    <div>
      <div
        key={uuidv4()}
        className="relative overflow-hidden before:absolute before:start-1/2 before:top-0 p-4 transition-transform duration-200 hover:scale-150"
      >
        <div className="mx-auto max-w-[85rem]  pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto  max-w-2xl text-center">
            <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
              <button type="submit" onClick={() => detailStack(skillName)}>
                <img
                  src={iconSrc}
                  alt={`${skillName} icon`}
                  className="w-24 h-24"
                />
              </button>
              <span className="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent" />
            </h1>
          </div>
        </div>
      </div>
      <Dialog open={isJavascriptModalOpen} onOpenChange={setIsJavascriptModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Javasript</DialogTitle>
            <DialogDescription>
              ✅ 난이도가 높은 편이에요.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col">
            <div className="items-center mb-4">
              <div className="items-center mb-4">
                ✅ 객체와 배열에 대해 이해하고 있습니다.
              </div>
            </div>
            <div className="items-center mb-1">
              <div className="items-center mb-4">
                ✅ 배열함수를 통해 최적화를 시킬 수 있습니다.
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={isTypescriptModalOpen} onOpenChange={setIsTypescriptModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Typescript</DialogTitle>
            <DialogDescription>
              타입에 대한 이해가 높은 편이에요
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col">
            <div className="items-center mb-4">
              ✅ interface에 대한 이해

            </div>
            <div className="items-center mb-1">
              ✅ 제네릭에 대한 이해
            </div>
          </div>

        </DialogContent>
      </Dialog>
      <Dialog open={isVueModalOpen} onOpenChange={setIsVueModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Vue.js</DialogTitle>
            <DialogDescription>
              Vue에 대한 이해
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col">
            <div className="items-center mb-4">
              ✅ Vue 상태에 대한 이해

            </div>
            <div className="items-center mb-1">
              ✅ Vue Component에 대한 이해
            </div>
          </div>

        </DialogContent>
      </Dialog>
      <Dialog open={isReactModalOpen} onOpenChange={setIsReactModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>React</DialogTitle>
            <DialogDescription>
              컴포넌트에 대한 이해
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col">
            <div className="items-center mb-4">
              ✅ React 상태에 대한 이해

            </div>
            <div className="items-center mb-1">
              ✅ React Component에 대한 이해
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={isNextModalOpen} onOpenChange={setIsNextModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Next.js</DialogTitle>
            <DialogDescription>
              SSR와 SSG에 대한 이해
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col">
            <div className="items-center mb-4">
              ✅ SSG에 대한 이해
            </div>
            <div className="items-center mb-1">
              ✅ SSR에 대한 이해
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>

  );
}
