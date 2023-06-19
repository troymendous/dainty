<template>
  <div class="pricing-cards-section">
    <div class="pricing-plans">
      <ol type="1" style="list-style-type: decimal">
        <li>Reliable Uptime: We ensure that your site is always available for your visitors.</li>
        <li>Fast Load Times: Speed is crucial in today's online world, and we deliver.</li>
        <li>Secure Environment: We take security seriously, protecting your site from threats.</li>
        <li>Scalability: Our plans grow with your business, allowing you to upgrade anytime.</li>
        <li>24/7 Support: We're always here to help, day or night.</li>
        <li>Free Migration: Switching to us? We'll migrate your site for free.</li>
        <li>
          Three-Hourly Backups: We keep regular backups every three hours to ensure your data's
          safety.
        </li>
        <li>Free SSL Certificate: Keep your customers' data secure with HTTPS.</li>
        <li>User-Friendly Control Panel: Manage your site with ease.</li>
        <li>Eco-Friendly: Our servers are powered by renewable energy.</li>
        <li>
          Free SEO Audit: Upon migrating, we'll conduct an SEO audit and optimize your site's
          on-page elements, including meta tags, image optimization, internal linking, and website
          speed enhancement.
        </li>
      </ol>
      <br />
    </div>
  </div>
</template>
<script>
export default {
  name: "HostingPlans",
}
</script>
<style lang="scss" scoped>
.pricing-cards-section {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 6rem 2rem 0;
}

.pricing-headliner {
  text-align: center;
  padding-top: 6rem;

  h2,
  p {
    margin-bottom: 30px;
  }
}

.pricing-plan_action-wrapper {
  display: flex;
  justify-content: center;
  padding: 3rem 0 3rem;
}

.pricing-plan_action {
  display: flex;

  > div:nth-child(1) {
    border-radius: 31px 0 0 31px;
  }

  > div:nth-child(2) {
    border-radius: 0 31px 31px 0;
  }
}

.baseClass {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 58px;
  padding: 0.5rem 0;
  font-weight: 500;
}

.pinkClass {
  background: var(--acc-pink-color) !important;
  color: #fff;
  border: 1px solid var(--acc-pink-color);
}

.whiteClass {
  background: #fff;
  color: var(--acc-pink-color);
  border: 1px solid #e6e6e6;
}

.pricing-plans_content {
  display: grid;
  grid-template-columns: repeat(3, 375px);
  grid-gap: 1rem;

  > div {
    padding: 50px 48px 60px;
    border: 1px solid transparent;
    border-radius: 6px;
    box-shadow: 0 0 0 1px rgba(67, 84, 149, 0.1), 0 1px 5px 1px rgba(19, 47, 70, 0.08);
    text-align: center;

    @screen md {
      padding: 50px 16px 60px;
    }
  }

  div:nth-child(1),
  div:nth-child(3) {
    > button {
      border: 2px solid rgb(194, 203, 211);
      @apply text-darkColor;
      background: transparent;

      &:hover {
        border: 2px solid var(--dark-color);
      }
    }
  }

  div:nth-child(2) {
    > button {
      border: 2px solid var(--dark-color);
      color: #fff;
      background: var(--dark-color);
      box-shadow: 0 3px 30px -2px rgba(20, 45, 100, 0.25);

      &:hover {
        box-shadow: 0 8px 36px -3px rgba(20, 45, 100, 0.35);
      }
    }
  }

  @screen md {
    grid-template-columns: 375px;
    grid-gap: 2rem;
    justify-content: center;
  }

  @screen sm {
    grid-template-columns: 320px;
  }
}
.pricing-plans_content-item {
  h4 {
    text-transform: capitalize;
  }

  p {
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }

  a {
    display: inline-block;
    height: 56px;
    line-height: 50px;
    max-width: 100%;
    width: 265px;
    border-radius: 5px;
    margin-top: 1.5rem;
    font-weight: 500;
    transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  &-headliner {
    height: 200px;
    margin-bottom: 1rem;
    color: rgb(116, 132, 148) !important;
  }
}

.pricing-plans_content-item-price {
  position: relative;
  text-align: left !important;

  > span:first-child {
    position: absolute;
    font-size: 26px;
    font-weight: 500;
    top: 11px;
    left: 5.5rem;
    @apply text-darkColor;

    @screen sm {
      left: 4.8rem;
      font-size: 16px;
    }
  }
  > span:not(:first-child) {
    display: inline-block;
    text-indent: 102px;
    @apply text-accentPink;
    font-size: 60px;

    @screen sm {
      text-indent: 90px;
      font-size: 40px;
    }
  }
}

.skeleton-btn {
  width: 300px;
  height: 60px;
  margin: 1rem 0 0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-color: #e2e8f0;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: shimmer 3s infinite;
    content: "";
  }

  @screen sm {
    width: 270px;
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.pricing-link-wrapper {
  text-align: center;
}

.pricing-link {
  display: inline-block;
  padding: 0.75rem;
  margin-top: 2rem;
  font-weight: 500;
  color: var(--acc-purple-color);
}
</style>
