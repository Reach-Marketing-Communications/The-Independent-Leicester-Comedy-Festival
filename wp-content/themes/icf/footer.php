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
</body>
</html>