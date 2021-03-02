<template>
  <section class="about-body">
    <div class="about-body_info">
      <div class="text-center section-title">
        <h2>About Us</h2>
      </div>
      <ul class="about-list">
        <li>
          <div class="about-list_header">An open way of looking at things</div>
          <div class="about-list_description">
            Pebbled thinks about design and web design mockups a little differently. We don’t think
            you should have to chase a gaggle of different freelancers or pay a truckload of money
            for sexy designs. So we’ve wedged ourselves somewhere in the middle. Into the sweet
            spot!
            <br />
            <br />
            Our subscription model means you can use our team of designers for one low, fixed
            monthly payment. Plain and simple. That’s us.
            <br />
            And if you’ve got ideas you want to fruition, we can’t wait to meet you.
          </div>
        </li>
        <li>
          <div class="about-list_header">We hear you ask “So how can Pebbled help me?”</div>
          <div class="about-list_description">
            We know what we do best. We keep our subscription prices low by making sure our team can
            deliver the the most bang for your buck. How do we do it? We have specially crafted our
            <a href="/donts">do's and don’ts list</a>, and built a team to match, ensuring we can
            offer the most essential services you’d need for your project or business. Websites
            mockups, web and print designs, that’s our jam. Wanna see? Mmmm…
            <a href="/portfolio">Pebbled flavoured jam.</a>
          </div>
        </li>
        <li>
          <div class="about-list_header">The magic of subscription</div>
          <div class="about-list_description">
            The greatest thing about an ongoing subscription is that there are no nasty surprises.
            We won’t charge you extra because things got delayed or you changed your mind halfway
            through a task! One revision or five, it all comes at the same cost!
            <br />
            <br />
            Subscription service means you can also pop in with design needs at any time, and we’re
            ready and waiting. Got an idea at 2 am that you need to get going now? No need to call
            someone tomorrow and organize meetings (ewww). Ain’t nobody got time for that. Hop on
            and let us know when the inspiration strikes and we’ll get busy cooking. Welcome to the
            good life, my friend.
          </div>
        </li>
        <li>
          <div class="about-list_header">Q &amp; A Party</div>
          <div class="about-list_description">
            <strong>When did you start?</strong> 2016 <br /><br /><strong
              >How many staff do you have?</strong
            >
            20-ish and growing <br /><br /><strong>Where are you based?</strong> We started in
            Australia and now we’re here. Where’s here? It’s everywhere. We love to roam the world
            like good little Millennials. <br /><br /><strong>What are your trading hours?</strong>
            We like to keep it fresh and flexible Monday to Friday in AEST. Our standard is to
            respond to our beautiful clients within 1 business day. <br /><br /><strong
              >How do you communicate with clients?</strong
            >
            We’re currently using Intercom which is a much better option to emails. However, we’re
            also building a client portal so we won’t need Intercom OR emails in the near future.
            <br />
          </div>
        </li>
      </ul>
    </div>
    <div class="about-body_values">
      <div class="section-title">
        <h2>Core Values</h2>
      </div>
      <div class="about-list_description">
        We want you to have the best and most awesome design. Visit
        <a href="/plans">our Plans </a>page for a complete overview of resources or see some
        highlights below.
      </div>
      <ul class="about-list">
        <li class="flex">
          <div>
            <img
              class="about-list_img"
              src="/about/getting_started_help_center.png"
              alt="value icon"
            />
          </div>
          <div class="info-text">
            <div class="about-list_header">Add value</div>
            <div class="about-list_description">
              Our mission is to make life easier for our clients. We know that when you run your own
              business or manage an important venture, things can get really hectic and stressful.
              Our team is here to support you so you can be a little more Zen!
            </div>
          </div>
        </li>
        <li class="flex">
          <div>
            <img
              class="about-list_img"
              src="/about/getting_started_other_teams.png"
              alt="value icon"
            />
          </div>
          <div class="info-text">
            <div class="about-list_header">Be human and be excited</div>
            <div class="about-list_description">
              We believe in having personality, and not being a boring professional robot that’s
              just running through scripts, we love what we do, and were excited and passionate
              about the direction of the company.
            </div>
          </div>
        </li>
        <li class="flex">
          <div>
            <img
              class="about-list_img"
              src="/about/getting_started_overview.png"
              alt="value icon"
            />
          </div>
          <div class="info-text">
            <div class="about-list_header">Be hungry to grow and learn</div>
            <div class="about-list_description">
              Our entire team is driven to find solutions for growth inside of our company, and
              we’re always researching and learning what is the latest when it comes to modern
              amazing design and web design mockups so our clients can have only the best.
            </div>
          </div>
        </li>
        <li class="flex">
          <div>
            <img
              class="about-list_img"
              src="/about/getting_started_contact_us.png"
              alt="value icon"
            />
          </div>
          <div class="info-text">
            <div class="about-list_header">Build a positive team spirit</div>
            <div class="about-list_description">
              We’re close, I mean really close ... We’re always joking with each other and creating
              a fun workspace, we dance, we play music, we send funny pictures to our clients, we’re
              weird and we like it.
            </div>
          </div>
        </li>
        <li class="flex">
          <div>
            <img
              class="about-list_img"
              src="/about/getting_started_contact_us.png"
              alt="value icon"
            />
          </div>
          <div class="info-text">
            <div class="about-list_header">Do more with less</div>
            <div class="about-list_description">
              We’re all about efficiency, and we won’t try something on just for fun or to see how
              it’ll pan out because vague ideas result in lost time. Time is the most valuable
              resource we have so we’re always looking for ways to be more efficient because this
              means we stay affordable to our clients!
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutBody",
}
</script>

<style lang="scss">
.about-body {
  width: 80%;
  border-radius: 0 0 1px 1px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 5% 5%;
  margin: 20px auto;
  li {
    padding: 1.5rem 0 2rem;
    border-bottom: 2px solid #e9edf5;
  }
  a {
    color: var(--acc-purple-color);
  }
  a:hover {
    color: var(--acc-pink-color);
  }
  .about-list_header {
    color: var(--dark-color);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
    line-height: 1.5;
  }
  .about-list_description {
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 1.5;
  }
  .about-list_img {
    margin: 5px 20px 0 0;
    max-width: none;
  }
}
.about-body_info {
  padding-top: 60px;
}
.text-center {
  text-align: center;
}
.section-title {
  padding: 30px 0;
}
.about-body_values {
  padding-top: 50px;
}
</style>
