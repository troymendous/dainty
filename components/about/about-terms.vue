<template>
  <div class="about-body_section">
    <div class="section-title">
      <h2>Terms Of Service</h2>
    </div>
    <div class="about-list_header">The language in this document</div>
    <div class="about-list_description">
      Although we like to be as human as possible, some of the below points are worded in a way that
      cannot be written how we’d like, due to legal reasons for both parties… If you've done work
      with us you know that we don't like sounding highly professional, so this terms of service
      does hurt our soul a little bit but it’s necessary.
    </div>
    <ul class="about-list">
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(0)">
          Agreement to Terms
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          By using the services provided by Dainty Web Services ("we," "us," or "our"), you are
          agreeing to these Terms of Service. If you do not agree to these terms, you must not use
          our services.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(1)">
          Services
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          We offer various web-related services, including but not limited to web hosting, web
          development, digital marketing, and on-page SEO. We will perform the services for you in a
          professional and timely manner.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(2)">
          Web Hosting
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          We provide web hosting services under a shared hosting environment. While we endeavor to
          provide reliable and stable service, occasional downtime may occur due to server and
          network issues.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(3)">
          Website Development and Maintenance
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          Our website development and maintenance services include "unlimited small jobs", defined
          as tasks that take less than 30 minutes of a developer's time. These tasks will be put in
          a queue and executed within a couple of business days, subject to our Fair Use Policy.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(4)">
          On-Page SEO
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          We offer on-page SEO services aimed at optimizing individual web pages to rank higher in
          search engine results. However, we do not guarantee any specific ranking or results.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(5)">
          Fair Use Policy
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_description">
            Our Fair Use Policy ensures all clients receive quality service. "Unlimited" services
            are subject to a reasonable use clause. The definition of reasonable use is determined
            by Dainty Web Services at its sole discretion.
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(6)">
          Billing and Payment
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          Fees for our services will be automatically billed on a monthly basis. You agree to ensure
          that sufficient funds are available to cover these fees.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(7)">
          Refunds and Cancellations
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_description">
            Refund and cancellation requests must be made in writing and will be subject to our
            review.
            <br />
            Domain Management: If Dainty is managing the domain renewal process, note that domain
            prices are subject to change based on the domain registrar's policies. We will notify
            and confirm with you before renewing if there are any significant changes in the domain
            renewal cost.
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(8)">
          Data Protection
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          We will handle your data in accordance with our Privacy Policy. You are responsible for
          keeping your account information and data secure.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(9)">
          Termination
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          Either party may terminate this agreement with written notice. Fees will apply for any
          services rendered up to the termination date.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(10)">
          Changes to Terms
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_description">
            We reserve the right to change these terms at any time. We will provide notice of
            changes on our website or by email.
          </div>
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(11)">
          Disclaimer
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          Our services are provided "as is". We disclaim all warranties, express or implied,
          including but not limited to the implied warranties of merchantability and fitness for a
          particular purpose.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(12)">
          Limitation of Liability
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          We will not be liable for any indirect, incidental, special, consequential or punitive
          damages, or any loss of profits or revenues, whether incurred directly or indirectly, or
          any loss of data, use, goodwill, or other intangible losses.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(12)">
          Indemnity
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          You agree to indemnify and hold harmless Dainty Web Services and its officers, directors,
          employees and agents, from and against any liabilities, damages or costs arising from your
          use of our services.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(12)">
          Governing Law
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          These terms will be governed by and construed in accordance with the laws of Australia,
          and any disputes relating to these terms will be subject to the jurisdiction of the courts
          of Melbourne Australia
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CollapseButton from "./collapse-button"

export default {
  name: "AboutTerms",
  components: { CollapseButton },
  methods: {
    collapseToggle(index) {
      const buttons = document.getElementsByClassName("collapsible-button")
      const content = document.getElementsByClassName("collapsible-content")
      if (content[index].style.display === "block") {
        content[index].style.display = "none"
        buttons[index].classList.remove("collapsible-button_active")
      } else {
        content[index].style.display = "block"
        buttons[index].classList.add("collapsible-button_active")
      }
    },
  },
}
</script>

<style lang="scss">
.collapsible-item:first-child {
  border-top: 2px solid #e9edf5;
  margin-top: 30px;
}

.collapsible-item:hover {
  background: #fbfcfd;
}

.collapsible-content {
  display: none;
  padding: 30px 30px 10px 0;
}

.collapsible-button {
  font-weight: 600;
  font-size: 1.2rem;
  padding: 2rem 0;
  @screen sm {
    font-size: 0.95rem;
  }
  .collapsible-button-img {
    display: inline;
    float: right;
    margin-right: 50px;
    width: 28px;
    height: 28px;
    font-size: 14px;
    border: 3px solid;
    border-radius: 8px;
    padding: 0 4px;
    -moz-transition: all 0.1s linear;
    -ms-transition: all 0.1s linear;
    -o-transition: all 0.1s linear;
    transition: all 0.1s linear;
    @screen sm {
      margin-right: 0;
      width: 20px;
      height: 20px;
      border: none;
    }
  }

  .collapsible-button-img_plus {
    border-color: var(--acc-purple-color);
    color: var(--acc-purple-color);
  }

  .collapsible-button-img_minus {
    display: none;
    border-color: grey;
    color: grey;
  }

  .collapsible-button-img_minus:hover {
    border-color: var(--acc-purple-color);
    color: var(--acc-purple-color);
  }
}

.collapsible-button_active {
  .collapsible-button-img_plus {
    display: none;
  }

  .collapsible-button-img_minus {
    display: inline;
  }
}
</style>
