import { Link } from "react-scroll";
import Menu from "@/components/layouts/header/menu";
import MobileMenu from "@/components/layouts/header/mobileMenu";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
import useLanguage from "@/stores/language";
import { useDarkMode } from "@/lib/dark-mode";
import { useToast } from "@/components/ui/use-toast";
import authStore from "@/stores/auth";

function Header() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { toggle } = useDarkMode();
  const { toggleLang } = useLanguage();
  const { logout, isAuth } = authStore();
  const menuItems = [{ path: "/example", name: t("menu.example") }];

  return (
    <header className="z-50 flex w-full flex-wrap justify-start py-4 text-sm fixed top-0 backdrop-blur-sm">
      <nav className="mx-auto  w-full max-w-[85rem] items-center justify-between px-4">
        <div className="sm:hidden">
          <MobileMenu menuItems={menuItems} />
        </div>
        <Link to="/" className="text-xl font-semibold text-left">
          {t("project.title")}
        </Link>

        <div className="flex justify-end space-x-4">
          <div className="hidden grow basis-full sm:block">
            <Menu menuItems={menuItems} />
          </div>
          <div>
            <Link
              className="text-xl font-semibold text-left"
              to="profile"
              smooth="true"
              duration={500}
            >
              Profile
            </Link>
          </div>
          <div>
            <Link
              className="text-xl font-semibold text-left"
              to="stack"
              smooth="true"
              duration={500}
            >
              Stack
            </Link>
          </div>
          <div>
            <Link
              className="text-xl font-semibold text-left"
              to="portfolio"
              smooth="true"
              duration={500}
            >
              PortFolio
            </Link>
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
