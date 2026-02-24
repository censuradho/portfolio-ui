interface HomeHeroSectionProps {
  title: string,
  subtitle: string,
  description: string,
}

export function HomeHeroSection (props: HomeHeroSectionProps) {
  const { title, subtitle, description } = props;

  return (
    <div className="container mt-[46px] mb-[103px]">
      <h1 className="text-xl pb-2">{title}</h1>
      <h2 className="text-md pb-4">{subtitle}</h2>
      <p className="text-[54px] leading-[80px]">{description}</p>
    </div>
  )
}