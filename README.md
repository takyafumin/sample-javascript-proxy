# sample-javascript-proxy

Javascript の Proxy によるライブラリ拡張の検証

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=true} -->

<!-- code_chunk_output -->

1. [目的](#目的)
2. [環境](#環境)
3. [使い方](#使い方)
4. [備考](#備考)
<!-- /code_chunk_output -->

## 目的

Javascript でライブラリを拡張する手段として Proxy を利用できるか検証する

## 環境

- node(v17.8.0)

// TODO Docker 環境を準備する

## 使い方

リポジトリをクローンして、`run.sh`を使って node modules をインストールしてください

```bash
git clone [リポジトリURL]
cd sample-javascript-proxy

./run.sh npm-ci
```

## 備考

Luxon2 をラップした独自クラスを作成して検証しています
