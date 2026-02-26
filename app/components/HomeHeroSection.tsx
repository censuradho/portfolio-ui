interface HomeHeroSectionProps {
  title: string,
  subtitle: string,
  description: string,
}

export function HomeHeroSection (props: HomeHeroSectionProps) {
  const { title, subtitle, description } = props;

  return (
    <div className="px-2">
      <div className="container mt-[100px] mb-[103px]">
        <h1 className="text-center md:text-left text-xl pb-2">{title}</h1>
        <h2 className="text-center md:text-left text-md pb-4">{subtitle}</h2>
        <p className="text-center md:text-left text-4xl md:text-[54px] md:leading-[80px] font-medium">{description}</p>
      </div>
    </div>
  )
}