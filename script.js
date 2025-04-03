$(document).ready(function () {
    // ナビゲーションの動的読み込み
    $('body').prepend('<div id="nav"></div>');
    $('#nav').load('nav.html', function() {
        // ナビゲーションが読み込まれた後に現在のページを検出
        highlightCurrentPage();
    });

    // ページ遷移を制御
    $('nav').on('click', 'a', function (e) {
        e.preventDefault(); // デフォルトのリンク動作をキャンセル
        const target = $(this).attr('href'); // 遷移先のパスを取得

        // コンテンツエリアを動的に更新
        $('#content').fadeOut(300, function () {
            $('#content').load(target + ' #content', function () {
                $('#content').fadeIn(300); // フェードイン
                // ページ遷移後に現在のページをハイライト
                highlightCurrentPage();
            });
        });
    });
});

// 現在のページを検出してナビゲーションリンクをハイライトする関数
function highlightCurrentPage() {
    // 現在のページのパスを取得
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    // すべてのナビゲーションリンクからアクティブクラスを削除
    $('nav a').removeClass('active');
    
    // 現在のページに対応するリンクにアクティブクラスを追加
    if (currentPage === '') {
        // インデックスページの場合
        $('nav a[href="index.html"]').addClass('active');
    } else {
        $('nav a[href="' + currentPage + '"]').addClass('active');
    }
}

//showcase.html
// overview.html
window.onload = function () {
    console.log("スクリプトが正常に読み込まれました");

    initializeTabNavigation();  // タブナビゲーションを初期化

    const appIcons = document.querySelectorAll(".app-icon");
    const homeScreen = document.querySelector(".home-screen");
    const appScreen = document.querySelector(".app-screen");
    const appTitle = document.getElementById("app-title");
    const appDescription = document.getElementById("app-description");
    const backButton = document.querySelector(".back-btn");

     // **✅ 初期状態を明確にする**
     homeScreen.style.display = "flex";  // ホーム画面を表示
     appScreen.style.display = "none";   // アプリ画面を隠す

    if (!homeScreen || !appScreen || !appTitle || !appDescription || !backButton) {
        console.warn("必要な要素が見つかりません。タブナビゲーションは正常に動作します。");
        return;
    }

    // アプリの詳細情報（タイトル & 説明）
    const appData = {
        "app1": { title: "Visuy", description: "予定を可視化して共有するアプリ。SPAJAM2024予選で開発。" },
        "app2": { title: "ギャルリンガル", description: "ギャルが選挙公約を分かりやすく解説。SPAJAM道場2024最優秀賞。" },
        "app3": { title: "公民館予約アプリ", description: "南房総市の公民館の予約・抽選管理アプリ。" },
        "app4": { title: "UDC2024 散歩アプリ", description: "地域活性化を目的とした健康促進アプリ" },
    };

    // アプリアイコンをクリックしたとき
    appIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const appKey = icon.getAttribute("data-app");
            if (appData[appKey]) {
                console.log(`アプリ「${appData[appKey].title}」がクリックされました`);
                appTitle.innerText = appData[appKey].title;
                appDescription.innerText = appData[appKey].description;

                // 画面切り替え
                homeScreen.style.display = "none";
                appScreen.style.display = "block";
            } else {
                console.error(`データが見つかりません: ${appKey}`);
            }
        });
    });

    // 戻るボタン
    backButton.addEventListener("click", () => {
        console.log("ホーム画面に戻ります");

        // 画面切り替え
        homeScreen.style.display = "grid";
        appScreen.style.display = "none";
    });
};
