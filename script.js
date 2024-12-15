
$(document).ready(function () {
    // ナビゲーションの動的読み込み
    $('body').prepend('<div id="nav"></div>');
    $('#nav').load('nav.html');

    // ページ遷移を制御
    $('nav').on('click', 'a', function (e) {
        e.preventDefault(); // デフォルトのリンク動作をキャンセル
        const target = $(this).attr('href'); // 遷移先のパスを取得

        // コンテンツエリアを動的に更新
        $('#content').fadeOut(300, function () {
            $('#content').load(target + ' #content', function () {
                $('#content').fadeIn(300); // フェードイン
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // blue-box全体をクリック可能にする
    document.querySelectorAll('.blue-box').forEach(function (box) {
        box.addEventListener('click', function () {
            const appTitle = this.querySelector('h2').textContent.trim(); // h2のタイトルを取得
            let content = '';

            // アプリごとの詳細内容を設定
            if (appTitle === 'タスク管理アプリ') {
                content = '<h2>タスク管理アプリ</h2><p>開発環境: Glide</p><p>プライベートで開発中</p>';
            } else if (appTitle === '引っ越し支援アプリ') {
                content = '<h2>引っ越し支援アプリ</h2><p>開発環境: Flutter Flow</p><p>UDCにむけて開発中</p>';
            } else if (appTitle === '予定共有アプリ-visuy-') {
                content = '<h2>予定共有アプリ-visuy-</h2><p>開発環境: Flutter Flow</p><p>SPAJAM2024予選でプロトタイプ開発</p>';
            } else if (appTitle === '公約翻訳アプリ-ギャルリンガル-') {
                content = '<h2>公約翻訳アプリ-ギャルリンガル-</h2><p>開発環境: Monaca</p><p>SPAJAM道場2024で開発</p>';
            }

            // ポップアップの内容を設定
            document.getElementById('popup-content').innerHTML = content;

            // ポップアップを表示
            document.getElementById('popup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        });
    });

    // ポップアップを閉じる
    document.getElementById('popup-close').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    });

    // 背景クリックでポップアップを閉じる
    document.getElementById('overlay').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    });
});


function adjustPopupSize() {
    const popup = document.getElementById('popup');
    const windowHeight = window.innerHeight;

    if (popup.offsetHeight > windowHeight * 0.8) {
        popup.style.height = (windowHeight * 0.8) + 'px';
        popup.style.overflowY = 'auto';
    } else {
        popup.style.height = 'auto';
    }
}

// イベントリスナーを追加
window.addEventListener('resize', adjustPopupSize);
document.addEventListener('DOMContentLoaded', adjustPopupSize);
