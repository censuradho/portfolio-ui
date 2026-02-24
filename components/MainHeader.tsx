import Link from "next/link";
import { NavLink } from "./NavLink";
import { paths } from "@/constants/paths";

export function MainHeader () {
  return (
    <header className="flex justify-between items-center px-[3.125rem] py-[1.875rem]">
      <Link href={paths.home} className="text-2xl underline font-semibold">
        Portfólio
      </Link>
      <nav>
        <ul className="flex gap-5">
          <li>
            <NavLink href={paths.home} className="text-xs uppercase" activeClassName="font-bold">
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink href={paths.projects} className="text-xs uppercase" activeClassName="font-semibold">
              Projetos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}