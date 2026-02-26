import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { Icon } from "./Icon";

type LinkButtonProps = LinkProps

export function LinKButton (props: PropsWithChildren<LinkButtonProps>) {
  const {  ...otherProps } = props

  return (
    <Link 
      className="group w-max bg-secondary text-secondary-foreground rounded-full pr-1 pl-4 py-0.5 inline-flex items-center gap-3.5 transition-colors duration-300 ease hover:bg-secondary/90"
      {...otherProps}
    >
      <span className="text-sm font-normal">{props.children}</span>
      <div className="w-[40px] h-[40px]  rounded-full bg-secondary-foreground flex items-center justify-center overflow-hidden relative">
        {/* Arrow 1: começa escondida à esquerda, vai para o centro no hover */}
        <Icon
          name="ArrowRight"
          className="text-secondary absolute left-1/2 top-1/2 -translate-x-[100%] -translate-y-1/2 group-hover:-translate-x-1/2 group-hover:opacity-100 opacity-0 transition-all duration-300 ease"
        />
        {/* Arrow 2: começa no centro, vai para a direita e some no hover */}
        <Icon
          name="ArrowRight"
          className="text-secondary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[100%] group-hover:opacity-0 opacity-100 transition-all duration-300 ease"
        />
      </div>
    </Link>
  )

}