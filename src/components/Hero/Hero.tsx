import "./Hero.scss"
import Button from "../Button/Button"

export default function Hero() {
  const iceCreamItems = [
    // PNG assets were exported from Figma at 2x, so display size is half of pixel dimensions.
    { src: "/images/ice%20cream%201.png", width: 248.5, height: 384.5, tilt: "left" },
    { src: "/images/ice%20cream%203.png", width: 209, height: 379, tilt: "right" },
    { src: "/images/ice%20cream%209.png", width: 171.5, height: 335, tilt: "left" },
    { src: "/images/ice%20cream%202.png", width: 182.5, height: 336.5, tilt: "right" },
    { src: "/images/ice%20cream%204.png", width: 209, height: 379, tilt: "left" },
    { src: "/images/ice%20cream%205.png", width: 182.5, height: 336.5, tilt: "right" },
    { src: "/images/ice%20cream%206.png", width: 209, height: 379, tilt: "left" },
    { src: "/images/ice%20cream%207.png", width: 171.5, height: 335, tilt: "right" },
    { src: "/images/ice%20cream%2010.png", width: 182.5, height: 336.5, tilt: "left" },
    { src: "/images/ice%20cream%208.png", width: 248.5, height: 384.5, tilt: "right" },
  ]

  return (
    <section id="hero_section" className="hero" aria-labelledby="hero-heading">
      <div className="hero__inner container">
        <div className="hero__gradient" aria-hidden="true" />

        <div className="hero__heading">
          <h1 id="hero-heading">TASTE <span>(</span>IT<span>)</span></h1>
          <h3 className="hero__subtitle">THE EXPLOSION OF FLAVORS</h3>
        </div>

        <div className="hero__cta">
          <Button size="l" isArrow href="#order_section" />
        </div>

        <aside className="hero__sticker" aria-label="Hero product description">
          <img src="/images/Star%201.svg" alt="" aria-hidden="true" className="hero__sticker-shape" />
          <p className="hero__sticker-text p3">
            This is not just ice cream, it&apos;s a rebellious revolution for taste buds
          </p>
        </aside>
        <img src="/images/flower.svg" alt="" aria-hidden="true" className="hero__flower" />
        <div className="hero__carousel" aria-label="Ice cream products carousel">
          {iceCreamItems.map((item, index) => (
            <figure
              className={`hero__cone hero__cone--${item.tilt}`}
              key={item.src}
              style={{ width: `${item.width}px`, height: `${item.height}px` }}
            >
              <img
                className="hero__cone-image"
                src={item.src}
                alt={`Ice cream flavor ${index + 1}`}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
