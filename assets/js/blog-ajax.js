/****

jQuery(document).ready(function($) {
    let totalPosts = <?php echo wp_count_posts()->publish; ?>;
    let postsPerPage = 3;

    function load_posts(page) {
        $.ajax({
            url: "<?php echo admin_url('admin-ajax.php'); ?>",
            type: "POST",
            data: {
                action: "load_more_posts",
                page: page,
                posts_per_page: postsPerPage,
            },
            beforeSend: function() {
                $("#load-more").text("Loading...");
            },
            success: function(res) {
                if (res) {
                    $("#blog-container").append(res);
                    let totalLoaded = $("#blog-container .blog-card").length;
                    if (totalLoaded >= totalPosts) {
                        $("#load-more").hide();
                    } else {
                        $("#load-more").text("Load More").data("page", page + 1);
                    }
                } else {
                    $("#load-more").hide();
                }
            }
        });
    }

    // Initial load
    load_posts(1);

    $("#load-more").click(function() {
        let page = $(this).data("page");
        load_posts(page);
    });
});

*/