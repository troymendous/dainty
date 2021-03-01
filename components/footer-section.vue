<template>
  <footer>
    <div class="footer-inner">
      <div class="footer-primary">
        <div class="footer-primary_headliner">
          <Logo />
          <p>Tools for the world's most customer-centric businesses</p>
        </div>
        <div class="footer-primary_links">
          <div>
            <h5>Features</h5>
            <ul>
              <li>
                <nuxt-link to="/">Pricing</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/team">Team</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Web Development</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Portfolio</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Terms of Service</nuxt-link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Plans</h5>
            <ul>
              <li>
                <nuxt-link to="/">Standard</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Premium</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Bussiness</nuxt-link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Get Help</h5>
            <ul>
              <li><nuxt-link to="/">Docs</nuxt-link></li>
              <li><nuxt-link to="/">Blog</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-secondary">
        <hr />
        <div class="footer-secondary_inner">
          <div class="footer-secondary_socials">
            <nuxt-link to="/">
              <twitter-icon />
            </nuxt-link>
            <nuxt-link to="/">
              <ig-icon />
            </nuxt-link>
            <nuxt-link to="/">
              <linkedin-icon />
            </nuxt-link>
          </div>

          <div class="footer-secondary_copyright">
            <span>© 2021 Dainty</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./logo.vue"

export default {
  components: {
    Logo,
  },
}
</script>

<style lang="scss" scoped>
footer {
  width: 100;
  background: #f7f6f9;
}

a {
  display: inline-block;
  padding: 0.8rem 0;
}

.footer-inner {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 6rem 0rem 3rem;
}

.footer-primary {
  @apply grid;
  @apply grid-cols-5;
  padding-bottom: 4rem;

  @screen md {
    display: block;
    padding: 0 1rem;
  }
}

.footer-primary_headliner {
  @apply col-span-2;

  > p {
    font-size: 1.5rem !important;
    font-weight: 500;
    margin-top: 1rem;
    width: 300px;
  }
}

.footer-primary_links {
  @apply col-span-2;
  display: flex;
  justify-content: space-between;

  a {
    @apply text-darkColor;
    font-size: 1rem;
    font-weight: 500;
  }

  a:hover {
    @apply text-accentPink;
  }

  h5 {
    font-size: 1rem !important;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;

    @screen sm {
      margin-top: 1.5rem;
    }
  }

  @screen md {
    margin-top: 3rem;
  }

  @screen sm {
    flex-direction: column;
  }
}

.footer-secondary {
  color: grey;

  @screen sm {
    padding: 0 1rem;
  }
}

.footer-secondary_inner,
.footer-secondary_socials {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-secondary_socials > a {
  padding-right: 0.8rem;
}

.footer-secondary_copyright > span {
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
