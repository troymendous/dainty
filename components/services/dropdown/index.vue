<template>
  <div class="services-dropdown_parent">
    <nuxt-link to="/services" class="services-dropdown_parent-link">Services</nuxt-link>
    <ul class="services-dropdown">
      <li>
        <nuxt-link to="/services/unlimited-designs" class="services-dropdown_links">
          <unlimited-design-icon />
          <span>Unlimited Designs</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/services/website-builds" class="services-dropdown_links">
          <website-buids-icon />
          <span>Website Builds</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/services/website-maintanance" class="services-dropdown_links">
          <website-mantainance-icon />
          <span>Website Mantainance</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/services/google-ads-management" class="services-dropdown_links">
          <google-ads-management-icon />
          <span>Google Ads Management</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import GoogleAdsManagementIcon from "./google-ads-management-icon.vue"
import unlimitedDesignIcon from "./unlimited-design-icon.vue"
import WebsiteBuidsIcon from "./website-buids-icon.vue"
import WebsiteMantainanceIcon from "./website-mantainance-icon.vue"
export default {
  components: {
    unlimitedDesignIcon,
    WebsiteMantainanceIcon,
    GoogleAdsManagementIcon,
    WebsiteBuidsIcon,
  },
}
</script>

<style lang="scss" scoped>
.services-dropdown {
  position: absolute;
  padding: 8px;
  background: white;
  box-shadow: 0px 3px 16px #77777729;
  margin-top: 12px;
}

.services-dropdown_links {
  svg {
    display: inline;
  }
}

.services-dropdown_parent-link {
  padding: 12px;
}

.services-dropdown {
  display: none;
}

.services-dropdown_parent:hover > .services-dropdown {
  display: block;
}

.li-link {
  background: chocolate;
}
</style>
