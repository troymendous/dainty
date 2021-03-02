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
          We`re a service, not a product
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          When you join Pebbled, you're not paying for a product, a logo, a website mockup, a
          certain design, or a particular piece of stationery. You're paying for the use of our team
          who will provide digital products to you.
          <br /><br />
          However, design is incredibly subjective.
          <br /><br />
          You're entitled to request a revision after revisions from our designers within the
          limitations of your selected plan, however, we may not be the right flavor for everyone!
          We do our best to ensure you're happy and that's why we allow for ongoing concepts and
          revision, however, if at any point you feel that we're not meeting your vision, you're
          more than welcome cancel your membership.
          <br /><br />
          Unlike a lot of design companies out there that charge per concept or per revision, we're
          not here to rip anyone off. Hence it being a subscription based model until you're 100%
          thrilled.
          <br /><br />
          Therefore, each membership payment is deemed as services rendered.
        </div>
      </li>
      <li class="collapsible-item">
        <div class="collapsible-button" @click="collapseToggle(1)">
          Payments & billing
          <collapse-button></collapse-button>
        </div>
        <div class="collapsible-content">
          <div class="about-list_header">Date of billing</div>
          <div class="about-list_description">
            Payments for active subscribers happen on the same date every month unless the sign up
            date was on the 31st and the debit date falls on a month that does not have 31 days -
            then the debit will occur on the last business date of the month.
          </div>
          <div class="about-list_header">Cancellations</div>
          <div class="about-list_description">
            All requests for cancellation must be submitted a minimum of
            <strong>three days</strong> before the billing date.<br /><br />Subscriptions are
            debited on the same date monthly - within 24 hours of the same date of sign up. Prior to
            cancellation we recommend you have all the files you need to move forward with another
            designer to you by our support staff. Once a subscription has been canceled, any files
            kept on our server related to that subscription will be removed immediately.
            <br /><br />
            Cancellations cannot be for a future date.
            <br /><br />
            When a subscription has been canceled, any service provided by Pebbled will be
            immediately suspended and/or canceled until the subscription has been renewed. This is
            inclusive of any pending jobs, tasks, revisions, hosting and support.
          </div>
          <div class="about-list_header">Canceling outside of business hours</div>
          <div class="about-list_description">
            If a cancellation happens outside of business hours, the cancellation takes effect upon
            the next operating business day. Cancellation requests must be made at least a business
            day before payment is due. Upon cancellation, any files of the clients kept on our
            server will be removed. <br /><br />
            It's the client's responsibility to ask for all needed files prior to their subscription
            being canceled, and to download any files from the links given to them previously.
          </div>
          <div class="about-list_header">Past due subscriptions</div>
          <div cclass="about-list_description">
            If a subscription becomes past due, any pending projects and revisions will be halted
            until the subscription has been reactivated by a successful debit.
          </div>
          <div class="about-list_header">Declining Payments</div>
          <div class="about-list_description">
            If your subscription payment becomes past due, the debit attempts will happen
            intermittently until the subscription payment attempt is successful or canceled. Once
            the overdue payment is successful the debit will continue as normal on the same date as
            the initial sign up.
          </div>
          <div class="about-list_header">If you don`t use it you lose it</div>
          <div class="about-list_description">
            Payments are recurring regardless of how much or how little you use the service. Think
            of it as an unlimited phone plan - just because you didn't use it doesn't mean you don't
            have a phone bill.
          </div>
          <div class="about-list_header">Pausing of memberships</div>
          <div class="about-list_description">
            At this point in time we do not offer the ability for pausing memberships, however you
            can cancel your subscription and re-join at any point in time at the current plan rates.
            <br /><br />

            Alternatively, if you're going to be away for a bulk period of time, you're more than
            welcome to give us a bulk amount of tasks to be distributed over that period of time.
          </div>
          <div class="about-list_header">Zombie apocalypse</div>
          <div class="about-list_description">
            In the event that you become a Zombie, we're not liable for if you're unable to stop any
            of your recurring payments, you're more than welcome to continue utilizing our services
            as long as you do not cause any harm ourselves, staff, clients or any penguins.
          </div>
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
  padding: 30px 0 10px 0;
}
.collapsible-button {
  font-weight: 600;
  font-size: 1.2rem;
  padding: 15px 0;
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
