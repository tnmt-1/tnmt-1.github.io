# anyenv

> これは rbenv スタイルの環境マネージャのシンプルなラッパーです。anyenvをインストールすれば、もう**envごとにgit cloneしたりシェルプロファイルを変更したりする必要はありません。

## URL

<https://github.com/anyenv/anyenv>

## Installation

```shell
git clone https://github.com/anyenv/anyenv ~/.anyenv
echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.bash_profile
~/.anyenv/bin/anyenv init
```

## Usage

`anyenv install **env`でインストールできます。

```shell
anyenv install pyenv
exec $SHELL -l
pyenv --version
```

## Uninstallation

1. `.anyenv`ディレクトリを削除します。

    ```shell
    rm -rf ~/.anyenv
    ```

2. インストール時に手動でシェル構成ファイルへ追記したパスを削除します。

## Plugin

[anyenv-update](https://github.com/znz/anyenv-update)を使うと、すべての`**env`とすべてのプラグインが更新できます。

### Installation

```shell
mkdir -p $(anyenv root)/plugins
git clone https://github.com/znz/anyenv-update.git $(anyenv root)/plugins/anyenv-update
```

### Usage

```shell
anyenv update
```

## **env でよく使うコマンド

おそらくすべての`**env`で一緒のコマンドだと思うので、以降は`pyenv`で記載します。

### インストール可能なバージョンを確認する

```shell
pyenv install --list
```

### インストール

`pyenv install <version>`でインストールします。

```shell
pyenv install 3.12.3
```

### Python のバージョンを切り替える

PyenvがインストールされているPythonを使用するバージョンとして選択するには、以下のコマンドのいずれかを実行します

- `pyenv shell <version>` -- 現在のシェルセッションだけを選択する。
- `pyenv local <version>` -- カレントディレクトリ（またはそのサブディレクトリ）にいるときに自動的に選択します。
- `pyenv global <version>` -- ユーザアカウントに対してグローバルに選択する。
