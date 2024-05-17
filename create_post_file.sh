#!/bin/bash

# 現在の日付と時間を取得し、指定されたフォーマットに変換
current_date=$(date +"%Y%m%d000000")

# ISO 8601形式での現在の日付と時間を取得
iso_date=$(date +"%Y-%m-%dT%H:%M:%S%z")

# タイムゾーンの+0900形式を+09:00に変換
iso_date="${iso_date:0:22}:${iso_date:22:24}"

# ファイル名を指定されたフォーマットで作成
file_name="docs/blog/posts/${current_date}.md"

# Markdownファイルを作成し、Front Matterを追加
cat <<EOT > $file_name
---
date: $iso_date
---

EOT

# 作成したファイル名を出力（確認用）
echo "Created file: $file_name"
