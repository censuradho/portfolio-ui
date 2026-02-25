'use client'

import styles from './styles.module.css'

interface TechStackCarrouselProps {
  data: string[]
}

const appendStar = (list: string[]) => list
  .sort(() => Math.random() - 0.5)
  .flatMap((item, idx) =>
    idx < list.length - 1 ? [item, '✦'] : [item]
  );

export function TechStackCarrousel(props: TechStackCarrouselProps) {
  const { data } = props;

  const row1 = appendStar(data)
  const row2 = appendStar(data)
  const row3 = appendStar(data)

  const techRows = [
    row1,
    row2,
    row3,
  ]

  return (
    <div className={styles.carousel}>
      {techRows.map((row, i) => (
        <div
          className={
            `${styles.carouselRow} ${i % 2 === 0 ? styles.left : styles.right}`
          }
          key={i}
        >
          <div className={styles.carouselTrack}>
            {[...row, ...row].map((tech, idx) => (
              <span className={styles.techItem} key={idx}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}