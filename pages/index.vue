<template>
  <Head>
    <Title>News | Homepage</Title>
    <Meta name="description" content="Frontend Mentor Challenge" />
  </Head>

  <main class="container">
    <section class="content">
      <article class="main-article">
        <picture class="main-article__picture">
          <source
            srcset="/images/image-web-3-desktop.jpg"
            media="(min-width: 768px)"
          />
          <img src="/images/image-web-3-mobile.jpg" alt="Web 3.0" />
        </picture>

        <h1 class="main-article__title">The Bright Future of Web 3.0?</h1>

        <div class="main-article__content">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <a href="#">Read More</a>
        </div>
      </article>

      <aside class="new-posts">
        <h2 class="new-posts__title">New</h2>

        <ul class="new-posts__list">
          <li class="new-posts__item">
            <a href="#">Hydrogen VS Electric Cars</a>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </li>

          <li class="new-posts__item">
            <a href="#">The Downsides of AI Artistry</a>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </li>

          <li class="new-posts__item">
            <a href="#">Is VC Funding Drying Up?</a>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </li>
        </ul>
      </aside>
    </section>

    <section class="popular-posts">
      <article class="popular-post">
        <figure class="popular-post__image">
          <img src="/images/image-retro-pcs.jpg" alt="Retro PC" />
        </figure>

        <div data-ranking="01" class="popular-post__content">
          <a href="#">Reviving Retro PCs</a>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </article>

      <article class="popular-post">
        <figure class="popular-post__image">
          <img src="/images/image-top-laptops.jpg" alt="Mechanical Keyboard" />
        </figure>

        <div data-ranking="02" class="popular-post__content">
          <a href="#">Top 10 Laptops of 2022</a>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </article>

      <article class="popular-post">
        <figure class="popular-post__image">
          <img src="/images/image-gaming-growth.jpg" alt="Game Controller" />
        </figure>

        <div data-ranking="03" class="popular-post__content">
          <a href="#">The Growth of Gaming</a>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/media-query.scss' as media;

.content {
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @include media.query(lg) {
    flex-direction: row;
    gap: 2rem;
  }
}

.main-article {
  @include media.query(xl) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem 2rem;
  }

  &__title {
    margin: 1.5rem 0 1rem;
    font-size: clamp(2.5rem, 2.1479rem + 1.5023vw, 3.5rem);
    line-height: 1;

    @include media.query(xl) {
      margin: 0;
    }
  }

  &__picture {
    @include media.query(xl) {
      grid-column: 1 / 3;
    }

    img {
      margin: 0 auto;
    }
  }

  &__content {
    p {
      font-size: 0.9rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    a {
      display: inline-block;
      padding: 0.875rem 2rem;

      background-color: var(--soft-red);
      color: var(--off-white);

      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 4.375px;

      transition: background-color 200ms;

      &:hover {
        background-color: var(--very-dark-blue);
      }
    }
  }
}

.new-posts {
  padding: 1.5rem 1.25rem;
  background-color: var(--very-dark-blue);

  @include media.query(lg) {
    flex: 0 0 350px;
  }

  &__title {
    font-size: clamp(2rem, 1.8239rem + 0.7512vw, 2.5rem);
    color: var(--soft-orange);
    line-height: 1;
    margin-bottom: 2.25rem;
  }

  &__list > &__item:not(:first-child) {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--dark-grayish-blue);
  }

  &__item {
    a {
      font-size: 1.25rem;
      font-weight: 800;
      line-height: 1.5rem;
      color: var(--off-white);

      display: inline-block;
      margin-bottom: 0.5rem;

      transition: color 200ms;

      &:hover {
        color: var(--soft-orange);
      }
    }

    p {
      font-size: 0.9rem;
      line-height: 1.625rem;
      color: var(--grayish-blue);
    }
  }
}

.popular-posts {
  padding-top: 4rem;
  padding-bottom: 5rem;

  display: grid;
  gap: 2rem;

  @include media.query(xl) {
    padding-top: 4.375rem;
    grid-template-columns: repeat(3, 1fr);
  }
}

.popular-post {
  display: flex;
  align-items: center;
  gap: 1.5rem;

  &__image {
    flex-shrink: 0;
    width: 100px;
    height: 127px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__content {
    &::before {
      content: attr(data-ranking);
      display: block;
      margin-bottom: 0.75rem;

      font-size: 2rem;
      font-weight: 700;
      line-height: 1;
      color: var(--grayish-blue);
    }

    a {
      font-size: 1.125rem;
      font-weight: 800;
      line-height: 1.5rem;
      color: var(--very-dark-blue);

      display: inline-block;
      margin-bottom: 0.5rem;

      transition: color 200ms;

      &:hover {
        color: var(--soft-red);
      }
    }

    p {
      font-size: 0.9rem;
      line-height: 1.625rem;
    }
  }
}
</style>
