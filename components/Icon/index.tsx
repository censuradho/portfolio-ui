import { icons } from './icons';

export type IconNames = keyof typeof icons;

interface IconProps  {
  name: IconNames;
  className?: string
}

export function Icon (props: IconProps) {
  const { name, className } = props;
  const Component = icons[name];

  return <Component className={className} />
}