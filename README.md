# chrome-extentions
技育CAMP Vol.4で制作するChrome拡張機能(名前未定)

## 開発環境のセットアップ
セットアップは以下の順番で行ってください
#### ※手順はWindowsのものです。1.と2.はOSによって変わる場合があることに留意してください。

### 1.リポジトリをクローンするフォルダを作成

![image](https://github.com/GeekCAMP-Vol-4/chrome-extentions/assets/128397176/b680ba78-e3f9-4821-b819-e1bc33b01eec)

### 2.ターミナル等で1で作ったフォルダへの移動(※画像はVSCodeのもので、作ったフォルダのパスによって変わります)

![image](https://github.com/GeekCAMP-Vol-4/chrome-extentions/assets/128397176/5a2f2968-1ba3-4b6d-8523-edeeaa4f59a9)

### 3.リモートのソースを取得
``` git clone https://github.com/GeekCAMP-Vol-4/chrome-extentions.git ```でGithubからソースコードを取得してください

### 4.Chromeの拡張機能に追加
Google ChromeのURL欄に```chrome://extensions/```を入力し、下のような画面になることを確認してください

![image](https://github.com/GeekCAMP-Vol-4/chrome-extentions/assets/128397176/0cd575d8-fae5-4999-ba3e-5685320bacaa)

右上の```デベロッパー モード```スイッチをONにすると、検索窓の下のスペースに新しく項目が出てきます

![image](https://github.com/GeekCAMP-Vol-4/chrome-extentions/assets/128397176/636e4068-31d3-4d6b-8b48-0864785ca822)

```パッケージ化されていない拡張機能を読み込む```から [手順3](#3.リモートのソースを取得) で取得したフォルダを選択し読み込んでください。
