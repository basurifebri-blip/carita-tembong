<?php
/**
 * Plugin Name: Carita Tembong — Admin Ramah Desa
 * Description: Menyederhanakan & mempercantik admin WordPress agar mudah dikelola perangkat Desa Tembong (editor klasik, menu ringkas, panel panduan, login & admin berwarna brand desa).
 * Version:     1.1.0
 * Author:      CARITA TEMBONG
 *
 * Cara pakai di WordPress asli: taruh berkas ini di
 *   wp-content/mu-plugins/carita-tembong-admin.php
 * (mu-plugins aktif otomatis — tidak perlu diaktifkan manual).
 */

if (!defined('ABSPATH')) {
    exit;
}

/* Palet brand (Rimba & Kertas). */
if (!defined('CT_GREEN'))  define('CT_GREEN', '#2F5A4C');
if (!defined('CT_DEEP'))   define('CT_DEEP', '#20423A');
if (!defined('CT_CLAY'))   define('CT_CLAY', '#C0603A');
if (!defined('CT_PAPER'))  define('CT_PAPER', '#F7F4EC');

/* 1) Editor klasik (mirip Word) — matikan block editor untuk semua tulisan. */
add_filter('use_block_editor_for_post', '__return_false', 100);
add_filter('use_block_editor_for_post_type', '__return_false', 100);

/* 2) Ringkas menu samping untuk peran NON-admin (Editor Desa / Contributor). */
add_action('admin_menu', function () {
    if (current_user_can('manage_options')) {
        return; // admin tetap lihat semua
    }
    remove_menu_page('edit-comments.php');       // Komentar
    remove_menu_page('tools.php');               // Perkakas
    remove_menu_page('themes.php');              // Tampilan
    remove_menu_page('plugins.php');             // Plugin
    remove_menu_page('options-general.php');     // Pengaturan
    remove_menu_page('edit.php?post_type=page'); // Halaman
}, 999);

/* 3) Ganti label menu "Posts" menjadi "Kabar". */
add_action('admin_menu', function () {
    global $menu, $submenu;
    foreach ($menu as $key => $item) {
        if (isset($item[2]) && $item[2] === 'edit.php') {
            $menu[$key][0] = 'Kabar';
            if (isset($submenu['edit.php'])) {
                $submenu['edit.php'][5][0]  = 'Semua Kabar';
                $submenu['edit.php'][10][0] = 'Tambah Kabar';
            }
            break;
        }
    }
}, 1000);

/* 4) Placeholder ramah di kolom judul. */
add_filter('enter_title_here', function ($text, $post) {
    return (isset($post->post_type) && $post->post_type === 'post')
        ? 'Tulis judul kabar di sini…'
        : $text;
}, 10, 2);

/* 5) Dashboard: buang widget teknis + panel sambutan yang menarik. */
add_action('wp_dashboard_setup', function () {
    remove_meta_box('dashboard_primary', 'dashboard', 'side');
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
    remove_meta_box('dashboard_activity', 'dashboard', 'normal');
    remove_meta_box('dashboard_site_health', 'dashboard', 'normal');
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
    wp_add_dashboard_widget('ct_welcome', 'Selamat Datang di CMS Desa Tembong', 'ct_render_welcome_widget');
});

function ct_render_welcome_widget() {
    $add = esc_url(admin_url('post-new.php'));
    $all = esc_url(admin_url('edit.php'));
    echo '<div style="line-height:1.7;">';
    echo '<p style="font-size:14px;margin-top:0;"><strong>Wilujeng sumping!</strong> Kelola isi portal Desa Tembong dari sini.</p>';
    echo '<div style="background:#F6EBE2;border:1px solid #e6d3c4;border-radius:10px;padding:14px 16px;margin:12px 0;">';
    echo '<p style="margin:0 0 8px;font-weight:600;color:#7A3B22;">Cara menambah kabar baru</p>';
    echo '<ol style="margin:0 0 0 18px;padding:0;">';
    echo '<li>Klik tombol <strong>Tambah Kabar</strong> di bawah.</li>';
    echo '<li>Tulis <em>Judul</em> lalu isi beritanya.</li>';
    echo '<li>Isi kotak <em>Ringkasan</em> (1–2 kalimat).</li>';
    echo '<li>Pilih <em>Kategori</em> di sisi kanan.</li>';
    echo '<li>Pasang <em>Gambar Andalan</em> (foto utama).</li>';
    echo '<li>Klik tombol biru <em>Terbitkan</em>.</li>';
    echo '</ol></div>';
    echo '<a class="button button-primary button-hero" href="' . $add . '">+ Tambah Kabar Baru</a> ';
    echo '<a class="button button-hero" href="' . $all . '">Lihat Semua Kabar</a>';
    echo '</div>';
}

/* 6) Pastikan kotak "Ringkasan" (excerpt) tampil. */
add_action('init', function () {
    add_post_type_support('post', 'excerpt');
});
add_filter('default_hidden_meta_boxes', function ($hidden) {
    return array_values(array_diff((array) $hidden, ['postexcerpt']));
}, 10, 1);

/* 7) Teks bantuan singkat di bawah kolom judul. */
add_action('edit_form_after_title', function ($post) {
    if (isset($post->post_type) && $post->post_type === 'post') {
        echo '<p style="color:#666;margin:.5em 0 0;">Tips: judul yang jelas dan ringkas memudahkan warga menemukan kabar ini.</p>';
    }
});

/* 8) Halaman LOGIN diperindah & di-branding desa. */
add_filter('login_headertext', function () { return 'CARITA TEMBONG'; });
add_filter('login_headerurl', function () { return home_url('/'); });
add_filter('login_message', function ($m) {
    return '<p style="text-align:center;color:#EDE8DB;margin:0 0 18px;font-size:14px;line-height:1.6;">'
        . 'Ruang kelola isi portal <strong>Desa Tembong</strong><br>'
        . '<em>Setiap Sudut Punya Cerita.</em></p>';
});
add_action('login_enqueue_scripts', function () {
    echo '<style>' . ct_login_css() . '</style>';
});
function ct_login_css() {
    return '
    body.login{background:radial-gradient(1100px 480px at 50% -8%, ' . CT_GREEN . ' 0%, ' . CT_DEEP . ' 62%, #17342c 100%);}
    .login h1 a{background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDQyMCAxODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJDQVJJVEEgVEVNQk9ORyI+CiAgPCEtLSBNb25vZ3JhbTogQyAoQ2FyaXRhKSArIFQgKFRlbWJvbmcpIGpvaW5lZCBieSBhIGNsYXkgZmxvdyAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTAsMTApIj4KICAgIDxnIHN0cm9rZT0iIzJGNUE0QyIgc3Ryb2tlLXdpZHRoPSIxMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIj4KICAgICAgPHBhdGggZD0iTTc0IDI2IEEzMCAzMCAwIDEgMCA3NCA3NCIgLz4KICAgICAgPHBhdGggZD0iTTU4IDMwIEgxMDIiIC8+CiAgICAgIDxwYXRoIGQ9Ik04MCAzMCBWODAiIC8+CiAgICA8L2c+CiAgICA8cGF0aCBkPSJNMzQgNjAgQzU2IDczIDgyIDcxIDEwNiA1NSBDODggNjcgNjAgNjkgNDAgNjMgWiIgZmlsbD0iI0MwNjAzQSIgLz4KICA8L2c+CiAgPCEtLSBXb3JkbWFyayAtLT4KICA8dGV4dCB4PSIyMTAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIKICAgICAgICBmb250LXNpemU9IjMwIiBmb250LXdlaWdodD0iNjAwIiBsZXR0ZXItc3BhY2luZz0iNCIgZmlsbD0iIzJGNUE0QyI+Q0FSSVRBIFRFTUJPTkc8L3RleHQ+Cjwvc3ZnPgo=");background-size:232px auto;background-position:center;background-repeat:no-repeat;background-color:' . CT_PAPER . ';width:288px;height:120px;border-radius:16px;box-shadow:0 12px 34px rgba(0,0,0,.22);text-indent:-9999px;overflow:hidden;margin:0 auto 14px;}
    .login form{border:none;border-radius:14px;box-shadow:0 24px 60px rgba(0,0,0,.28);padding:26px 24px;}
    .login label{color:#3a352f;font-size:14px;}
    .login input[type=text],.login input[type=password]{border-radius:8px;padding:10px 12px;}
    .login input:focus{border-color:' . CT_GREEN . ' !important;box-shadow:0 0 0 2px rgba(47,90,76,.25) !important;}
    .wp-core-ui .button-primary{background:' . CT_CLAY . ';border-color:' . CT_CLAY . ';border-radius:999px;height:auto;line-height:2.3;padding:2px 22px;box-shadow:none;text-shadow:none;}
    .wp-core-ui .button-primary:hover{background:#a94f2f;border-color:#a94f2f;}
    .login #nav a,.login #backtoblog a{color:#e9e2d3;}
    .login #nav a:hover,.login #backtoblog a:hover{color:#fff;}
    ';
}

/* 9) Warna brand di dalam admin (menu, bilah atas, tombol utama). */
add_action('admin_head', function () {
    echo '<style>' . ct_admin_css() . '</style>';
});
function ct_admin_css() {
    return '
    #adminmenu,#adminmenuback,#adminmenuwrap{background:' . CT_DEEP . ';}
    #adminmenu a{color:#e9e2d3;}
    #adminmenu li.menu-top:hover,#adminmenu li.opensub>a.menu-top,#adminmenu li>a.menu-top:focus{background:' . CT_GREEN . ';color:#fff;}
    #adminmenu .wp-submenu,#adminmenu .wp-has-current-submenu .wp-submenu{background:#17342c;}
    #adminmenu li.current a.menu-top,#adminmenu .wp-has-current-submenu.wp-menu-open>a.menu-top,#adminmenu li.wp-has-current-submenu>a.wp-has-current-submenu{background:' . CT_GREEN . ';color:#fff;}
    #wpadminbar{background:' . CT_GREEN . ';}
    .wp-core-ui .button-primary,.wrap .page-title-action{background:' . CT_CLAY . ' !important;border-color:' . CT_CLAY . ' !important;border-radius:999px !important;text-shadow:none !important;box-shadow:none !important;}
    .wp-core-ui .button-primary:hover{background:#a94f2f !important;border-color:#a94f2f !important;}
    #ct_welcome h2.hndle{background:' . CT_GREEN . ';color:#fff;border-radius:8px 8px 0 0;}
    /* Ganti logo W di bilah admin dengan monogram CT */
    #wpadminbar #wp-admin-bar-wp-logo>.ab-item .ab-icon:before{content:""!important;display:block;width:26px;height:100%;background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjI0IDE2IDkyIDcwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNGN0Y0RUMiIHN0cm9rZS13aWR0aD0iMTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTc0IDI2IEEzMCAzMCAwIDEgMCA3NCA3NCIvPjxwYXRoIGQ9Ik01OCAzMCBIMTAyIi8+PHBhdGggZD0iTTgwIDMwIFY4MCIvPjwvZz48cGF0aCBkPSJNMzQgNjAgQzU2IDczIDgyIDcxIDEwNiA1NSBDODggNjcgNjAgNjkgNDAgNjMgWiIgZmlsbD0iI0U0QTA3QyIvPjwvc3ZnPg==") no-repeat center 6px;background-size:24px auto;}
    #wpadminbar #wp-admin-bar-wp-logo>.ab-item{padding:0 8px;}
    #wpadminbar #wp-admin-bar-wp-logo:hover>.ab-item,#wpadminbar #wp-admin-bar-wp-logo.hover>.ab-item{background:' . CT_DEEP . ';}
    /* Poles: kartu & kontrol membulat, judul serif */
    .postbox,.card,.welcome-panel{border-radius:12px!important;border-color:rgba(103,97,90,.14)!important;box-shadow:0 6px 20px rgba(45,42,38,.05)!important;}
    .postbox .postbox-header{border-radius:12px 12px 0 0!important;border-bottom-color:rgba(103,97,90,.12)!important;}
    .wrap h1.wp-heading-inline{font-family:Georgia,"Times New Roman",serif;color:' . CT_GREEN . ';}
    .wp-core-ui .button{border-radius:999px!important;}
    #wpbody input[type=text],#wpbody input[type=search],#wpbody input[type=email],#wpbody input[type=url],#wpbody textarea,#wpbody select{border-radius:8px!important;}
    #adminmenu a{transition:background .15s ease,color .15s ease;}
    ';
}

/* 9b) Favicon CT untuk tab admin & login (ganti ikon W). */
function ct_favicon_link() {
    echo '<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjIyIDE0IDEwMCA3NiI+PHJlY3QgeD0iMjIiIHk9IjE0IiB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc2IiByeD0iMTYiIGZpbGw9IiNGN0Y0RUMiLz48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMyRjVBNEMiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTc0IDI2IEEzMCAzMCAwIDEgMCA3NCA3NCIvPjxwYXRoIGQ9Ik01OCAzMCBIMTAyIi8+PHBhdGggZD0iTTgwIDMwIFY4MCIvPjwvZz48cGF0aCBkPSJNMzQgNjAgQzU2IDczIDgyIDcxIDEwNiA1NSBDODggNjcgNjAgNjkgNDAgNjMgWiIgZmlsbD0iI0MwNjAzQSIvPjwvc3ZnPg==">' . "\n";
}
add_action('admin_head', 'ct_favicon_link');
add_action('login_head', 'ct_favicon_link');

/* 10) Branding ringan "CMS Desa Tembong". */
add_filter('admin_footer_text', function () {
    return 'CMS Desa Tembong — Setiap Sudut Punya Cerita.';
});
add_action('admin_bar_menu', function ($bar) {
    $bar->add_node(array('id' => 'ct-brand', 'title' => 'CMS Desa Tembong', 'href' => admin_url()));
}, 999);
