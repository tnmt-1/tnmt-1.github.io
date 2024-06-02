# Rye

> RyeはPythonのための包括的なプロジェクトおよびパッケージ管理ソリューションです。すべてのPythonユーザーのためのワンストップショップを確立したいという開発者の願いから生まれたRyeは、Pythonのインストール、pyproject.tomlベースのプロジェクト、依存関係、virtualenvsをシームレスに管理するための統一されたエクスペリエンスを提供します。複雑なプロジェクトやモノレポに対応し、グローバルツールのインストールを容易にするように設計されています。興味がありますか？イントロダクションをご覧ください。
>
> あらゆるレベルのPython開発者に手間のかからない体験を。

## URL

<https://rye.astral.sh/>

## Installation

``shell
curl -sSf <https://rye.astral.sh/get> | bash

```

### Updating Rye

```shell
rye self update
```

## Usage

### プロジェクトを作成する

```shell
rye init my-project
cd my-project
```

```shell
.
├── .git
├── .gitignore
├── .python-version
├── README.md
├── pyproject.toml
└── src
    └── my_project
        └── __init__.py
```

RyeにPythonのバージョンを指定するには`rye pin`を使う。たとえば、`3.10`を利用する場合。

```shell
rye pin 3.10
```

### ライブラリのインストール

1. 依存関係をプロジェクトに追加します。この時点では仮想環境にはインストールされていません。

    ```shell
    rye add "flask>=2.0"
    rye add --dev "ruff"
    ```

2. 依存関係を仮想環境にインストールします。

    ```shell
    rye sync
    rye sync --no-dev
    ```

### ライブラリのアンインストール

1. 依存関係をプロジェクトから削除します。この時点では仮想環境からアンインストールされていません。

    ```shell
    rye remove "flask>=2.0"
    ```

2. 依存関係を仮想環境からアンインストールします。

    ```shell
    rye sync
    rye sync --no-dev
    ```

## Uninstallation

```shell
rye self uninstall
```
