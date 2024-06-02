# asdf

> asdfは、ツールのためのバージョンマネージャです。すべてのツールのバージョンは単一のファイル(.tool-versions)内で定義されるため、プロジェクトのGitリポジトリにチェックインして共有することで、チーム全員に同じーバージョンのツールを使ってもらえるようになります。

## URL

<https://github.com/asdf-vm/asdf>

## Docs

<https://asdf-vm.com/ja-jp/>

## Installation

```shell
git clone https://github.com/asdf-vm/asdf.git ~/.asdf
echo '. "$HOME/.asdf/asdf.sh"' >> ~/.bashrc
```

## Plugin Installation

以下はNode.jsをインストールする例です。

### 1. 依存関係のライブラリをインストールする

```shell
sudo apt-get install -y dirmngr gpg curl gawk
```

### 2. asdf-nodejsをインストールする

```shell
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
```

## Usage

### 1. バージョンを確認する

```shell
asdf list all nodejs
```

### 2. バージョンを指定してインストールする

```shell
asdf install nodejs 22.2.0

# 最新バージョンをインストールする場合は latest でできる
asdf install nodejs latest
```

`anyenv install **env`でインストールできます。

```shell
anyenv install pyenv
exec $SHELL -l
pyenv --version
```

### 3. Python のバージョンを切り替える

asdf-nodejsがインストールされているNode.jsを使用するバージョンとして選択するには、以下のコマンドのいずれかを実行します

- `asdf shell nodejs <version>` -- 現在のシェルセッションだけを選択する。
- `asdf local nodejs <version>` -- カレントディレクトリ（またはそのサブディレクトリ）にいるときに自動的に選択します。
- `asdf global nodejs <version>` -- ユーザアカウントに対してグローバルに選択する。

## Uninstallation

1. `$HOME/.asdf`ディレクトリを削除します。

    ```shell
    rm -rf "${ASDF_DATA_DIR:-$HOME/.asdf}"
    ```

2. `asdf`のすべての構成ファイルを削除するために次のコマンドを実行します

    ```shell
    rm -rf "$HOME/.tool-versions" "$HOME/.asdfrc"
    ```

3. インストール時に手動でシェル構成ファイルへ追記したパスを削除します。

## よく使うコマンド

### インストール済みバージョン一覧

```shell
asdf list <name>
# asdf list erlang
```

### インストール可能な全バージョン一覧

```shell
asdf list all <name>
# asdf list all erlang
```
