<template>
  <Head>
    <Title>News | Homepage</Title>
    <Meta name="description" content="Frontend Mentor Challenge" />
  </Head>

  <main class="container">
    <section class="content">
      <article class="main-article">
        <picture class="main-article__picture">
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
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </li>

          <li class="new-posts__item">
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </li>

          <li class="new-posts__item">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </li>
        </ul>
      </aside>
    </section>

    <section class="popular-posts">
      <div class="popular-post">
        <figure class="popular-post__image">
          <img src="/images/image-retro-pcs.jpg" alt="Retro PC" />
        </figure>

        <div data-ranking="01" class="popular-post__content">
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>

      <div class="popular-post">
        <figure class="popular-post__image">
          <img src="/images/image-top-laptops.jpg" alt="Mechanical Keyboard" />
        </figure>

        <div data-ranking="02" class="popular-post__content">
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>

      <div class="popular-post">
        <figure class="popular-post__image">
          <img src="/images/image-gaming-growth.jpg" alt="Game Controller" />
        </figure>

        <div data-ranking="03" class="popular-post__content">
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.main-article {
  &__title {
    margin: 1.5rem 0 1rem;
    font-size: clamp(2.5rem, 2.1479rem + 1.5023vw, 3.5rem);
    line-height: 1;
  }

  &__picture img {
    margin: 0 auto;
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
    h3 {
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: var(--off-white);
      margin-bottom: 0.5rem;
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

    h4 {
      font-size: 1.125rem;
      line-height: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.625rem;
    }
  }
}
</style>
