# 今日の予定 (Today's Schedule)

シンプルな一日タイムライン PWA。`04:00` から翌 `04:00` までの 24 時間を縦並びで表示し、ジャンル別の予定をドラッグ・リサイズで編集できます。データは `localStorage` に保存されます。

## Demo

GitHub Pages にデプロイ済み（リポジトリ Settings → Pages から有効化してください）。

## Features

- ドラッグ＆リサイズ可能なタイムライン
- 9 種類のジャンルテンプレート（仕事 / 勉強 / 食事 / 運動 / 睡眠 / 移動 / 休憩 / 趣味 / その他）
- 入力候補チップ（過去の内容から自動補完）
- ルーティン保存 & 適用
- 重なり予定の自動カラム配置
- PWA（ホーム画面に追加可能 / スタンドアロン表示）

## Run locally

`index.html` を直接開いてもほぼ動作しますが、Service Worker と manifest を完全に動かすには HTTP 配信が必要です：

```bash
npx serve .
# または
python -m http.server 8000
```

その後、ブラウザで `http://localhost:8000/` を開きます。

## Files

- `index.html` — アプリ本体（HTML / CSS / JS 一体）
- `manifest.json` — PWA マニフェスト
- `sw.js` — 最小限の Service Worker（オフライン非対応）
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` — アイコン（プレースホルダー）

アイコンはプレースホルダーです。デザインしたものに置き換えてください。
