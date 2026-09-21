<footer>
    <div class="top-footer">
        <div class="inner-wrapper">
            <div class="logo">
                <a href="#top" aria-label="Back to top">
                    <img src="<?php echo get_field('footer_logo', 'option')['url']; ?>" alt="Independent Comdy Festival Logo" />
                </a>
            </div>
            <div class="footer-line">
                <?php echo get_field('footer_info_line', 'option'); ?>
            </div>
        </div>
    </div>
    <div class="bottom-footer">
        <div class="inner-wrapper">
            <div class="logo"></div>
            <div class="copy-wrapper">
                <div class="copyright">
                    &copy;<?php echo get_field('copyright', 'option'); ?> <?php echo date('Y'); ?>
                </div>
                <div class="designby">
                    Designed and built by <a href="https://reachmarketing.co.uk" target="_blank">Reach Marketing</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<div class="popup-form customer-form">
    <div class="inner-popup">
    <div class="form-overlay"></div>
    <div class="form-wrapper">
        <div class="close">X</div>
        <h3>Customer Mailing List Signup</h3>

        <div id="mc_embed_shell">
  <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
  <style type="text/css">
    #mc_embed_signup {
      background: #fff;
      clear: left;
      font: 14px Helvetica, Arial, sans-serif;
      width: 600px;
    }
  </style>

  <div id="mc_embed_signup">
    <form action="https://indiecomedyfest.us19.list-manage.com/subscribe/post?u=53930c3ba6166a42823a8153e&amp;id=3d25dcae86&amp;f_id=005eaae6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
      <div id="mc_embed_signup_scroll">
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>

        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
          <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">
        </div>

        <div class="mc-field-group">
          <label for="mce-PHONETXT">Phone </label>
          <input type="text" name="PHONETXT" class="text" id="mce-PHONETXT" value="">
        </div>

        <div class="mc-field-group">
          <label for="mce-FNAME">First name <span class="asterisk">*</span></label>
          <input type="text" name="FNAME" class="required text" id="mce-FNAME" required="" value="">
        </div>

        <div class="mc-field-group">
          <label for="mce-LNAME">Last Name <span class="asterisk">*</span></label>
          <input type="text" name="LNAME" class="required text" id="mce-LNAME" value="" required="">
        </div>

        <div class="mc-field-group">
          <label for="mce-ADDRSHORT">Address </label>
          <input type="text" name="ADDRSHORT" class="text" id="mce-ADDRSHORT" value="">
        </div>

        <!-- Tag assignment -->
        <div hidden=""><input type="hidden" name="tags" value="24266376"></div>

        <!-- Real anti-spam bot trap (Must remain hidden) -->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_53930c3ba6166a42823a8153e_3d25dcae86" tabindex="-1" value="">
        </div>

        <div class="clear">
          <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
        </div>
      </div>
    </form>
  </div>
</div>


    </div>
</div>


</body>
</html>