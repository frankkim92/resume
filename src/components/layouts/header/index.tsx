// import { Link } from 'react-scroll';
import Menu from '@/components/layouts/header/menu';
import MobileMenu from '@/components/layouts/header/mobileMenu';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/lib/dark-mode';
import { Link as RouterLink } from 'react-router-dom'; // React Router의 Link
import { Link as ScrollLink } from 'react-scroll'; // React Scroll의 Link

function Header() {
  const { t } = useTranslation();
  const { toggle } = useDarkMode();
  const menuItems = [{ path: '/example', name: t('menu.example') }];

  return (
    <header className="z-50 flex w-full flex-wrap justify-start py-4 text-sm fixed top-0 backdrop-blur-sm">
      <nav className="mx-auto  w-full max-w-[85rem] items-center justify-between px-4">
        <div className="sm:hidden">
          <MobileMenu menuItems={menuItems} />
        </div>
        <RouterLink to="/" className="text-xl font-semibold text-left cursor-pointer">
          {t('project.title')}
        </RouterLink>

        <div className="flex justify-end space-x-4">
          <div className="hidden grow basis-full sm:block">
            <Menu menuItems={menuItems} />
          </div>
          <div>
            <ScrollLink
              className=" cursor-pointer text-xl font-semibold text-left"
              to="profile"
              smooth="true"
              duration={500}
            >
              Profile
            </ScrollLink>
          </div>
          <div>
            <ScrollLink
              className=" cursor-pointer text-xl font-semibold text-left"
              to="stack"
              smooth="true"
              duration={500}
            >
              Stack
            </ScrollLink>
          </div>
          <div>
            <ScrollLink
              className=" cursor-pointer text-xl font-semibold text-left"
              to="portfolio"
              smooth="true"
              duration={500}
            >
              PortFolio
            </ScrollLink>
          </div>
          <div>
            <ScrollLink
              className="cursor-pointer text-xl font-semibold text-left"
              to="contact"
              smooth="true"
              duration={500}
            >
              Contact
            </ScrollLink>
          </div>
          <Sun
            className="cursor-pointer ml-2 hidden dark:block"
            onClick={toggle}
          />
          <Moon className="cursor-pointer ml-2 dark:hidden" onClick={toggle} />
        </div>

        <div className="flex items-center justify-end sm:px-10" />
      </nav>
    </header>
  );
}

export default Header;
