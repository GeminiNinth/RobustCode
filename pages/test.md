---
layout: center
---

A good programmer is someone who always looks both ways before crossing a one-way street.
 
優れたプログラマーとは、一方通行の道路を渡る前に常に両方向を確認する者を指す。
<div style="text-align: right;">Doug Linder</div>

---

# テスト
コードを安全に保つ

「<b class="warn">たった一行コードを変更しただけ</b>で、コードベース全体がクラッシュしてしまう」ということはありえる。

小さくて無害っぽい変更を加えたけど......本当に無害って言い切れる？

→ 「そのコードが問題なく機能する」という保証が欲しい。

→ **テスト**の出番


### テストは、リファクタリングが成功した事を示す最も確かな唯一の手段。

<div class="min-center">
  <img src="/img/hato_olive.png"/>
</div>
<!-- ![hato_olive](img/hato_olive.png) -->


---

## テストの種類

<div class="small-text">

テストの種類として、主要なものは以下の3つ。

- ユニットテスト（Unit Testing）

  個々の関数やクラスといった小さい単位（ユニット）でテストすること。最も一般的で、最も頻繁に行うであろうテスト。

- 結合テスト（Integration Testing）

  システムは複数のコンポーネントやモジュール、サブシステムで構成される。

  これらが正しく連携しているかを確認するテスト。

- E2Eテスト（End-to-End Testing）
  
  システム全体の最初から最後まで代表的なフローを辿るテスト。

  実際のユーザーの操作に近いテストができる。

機械学習やロボットの挙動チェックは、乱数性や外部環境とのインタラクトが絡む関係上<b class="warn">E2Eテストや結合テストが難しい</b>ことが多い。

一方ユニットテストは<b class="safe">コードだけで完結する要素も多い</b>ため

<b class="safe">機械学習やロボット開発においてもユニットテストが用いられる</b>ことがある。

</div>

---

## ユニットテスト
**コードの単位**を**ある程度独立**した方法でテストすること

> コードの単位: 明確な定義は無いが、一般的に特定のクラス・関数・モジュールを指す

> ある程度独立: 多くのコードは他のコードに依存しているが、テスト対象のコードはその依存関係を最小限に抑えるべき

---

## テストコードの例

テストコードは「入力」と「出力」の関係が合っているかを確認する

```python {*}{lines:true}
def double_number(n):
  if not isinstance(n, (int, float)):
    raise TypeError("Input must be an int or float")
  return n * 2
```
```python {*}{lines:true}
def test_double_number():
  assert double_number(2) == 4
  assert double_number(-5) == -10
```

---

VSCode上のテストランナーの拡張機能を確認すると<b class="safe">各メソッドのテスト成功状況</b>が確認できる

またGUI操作で「<b class="safe">このパターンだけテストしてみる</b>」といった複雑なことも可能

<div class="center">
  <img src="/img/test.png"/>
</div>

<!-- ![test_1](img/test.png) -->

<b class="safe">テストを網羅的に書いておく</b>と、**コードの変更による影響を把握しやすくなる**。

---

......みなさんも"テストコード"を知らずとも、デバッグの名目で<b class="warn">似たようなことを手作業でやってきた</b>のでは？

### → テストコードを書くことで<b class="safe">手作業でやってきたデバッグ作業を自動化</b>

例外送出（エラー検知）にももちろん対応している。

以下は、`int`や`float`以外の型を入力したときに送出されるエラーの種類が正しいかを確認するテストコード[^1]

```python {*}{lines:true}
def test_double_number_type_error():
  with pytest.raises(TypeError):
      double_number("string")
  with pytest.raises(TypeError):
      double_number([1, 2, 3])
  with pytest.raises(TypeError):
      double_number(None)
  with pytest.raises(TypeError):
      double_number({"key": "value"})
```

[^1]: 送出されるエラーに着目したテストのことを**ファズテスト**と呼ぶ。

---

## テストの基本

細かい用語も説明せずにここまで進めてきてしまったので、いまいちど用語や概念を整理しておく。

- テスト対象のコード
  
  - テストコードに対して「プロダクションコード」と呼ばれることもある
  
- テストコード
  
  - <b class="safe">プロダクションコードとテストコードは1対1の関係</b>になることが多い。例えば`physics.py`というプロダクションコードに対して`test_physics.py`というテストコードを用意する。
  
  - プロダクションコードとテストコードを同じディレクトリに置くこともあれば、別ディレクトリに置くこともあり、チームや言語により異なる。
  
  - 全くコメントや使い方に関するドキュメントが充実していないコードベースにおいて、<b class="safe">"他者"にとっての最後の砦</b>となる
  
    テストコードによるプロダクションコードの利用方法が絶対的に正しいので<b class="safe">テストコードの内容を読むことでコードの使い方や挙動を理解できる</b>


---

- テストケース
  
  - 通常は<b class="safe">1つの機能に対して複数のテストケースを用意する</b>。例えば`double_number()`関数に対して、正負の数、文字列、リスト、`None`（Nullケース）など色々な種類を渡すなど。
  
  - やや複雑で実践的なレべルとなると、テストコードを以下の3セクションに分けることが多い。
    1. **アレンジ(Arrange)**: 入力値の準備
    
        テストに使用する値の定義やインスタンスの生成、依存関係のインポートなど

    2. **アクト(Act)**: テスト対象コードの実行
      
        テスト対象コードを実行し、結果を得る

    3. **アサーション(Assert)**: 出力の検証
        
      戻り値が期待値と等しい事、また結果の状態が期待通りであることを確認する。

    他にも「**Given**, **When**, **Then**」のセクションに分けることもあるが、基本的な考え方は同じ。

---

- テストランナー

  - テストを実行するツール。テストコード内の各テストコードを実行し、どのテストがパスしてどのテストが失敗したかを詳細に出力する。
  
  - GitHubにはActionsというテストランナーがあり、ある程度の規模があるプロジェクトなら、プルリクエストを送信した際に自動でテストを実行するよう設定されていることも多い。


---

## よいテストの5条件

<div class="small-text">

1. **破損を正確に検出する**

    <b class="warn">誤った警告</b>を出すテストは望ましくない

2. **実装の詳細にとらわれない**

    テスト対象コードのロジックが変更されても、<b class="safe">テストに変更を加える必要が無い</b>状態が理想的。

3. **よく説明された失敗**

    コードが壊れている場合、<b class="safe">問題の明確な説明を提供すべき</b>。テストが失敗した理由が分からないと、修正が難しくなってしまう

4. **わかりやすいテストコード**

    "他者"があなたのコードを見たときに、「<b class="safe">なにをテストしているか</b>」「<b class="safe">どのようにテストをしているか</b>」を理解できる必要がある

5. **簡単かつ迅速に実行可能**
    
    変更を実装するたびにテストを実行する必要がある。
    <b class="warn">遅くて実行の難しいテスト</b>は多くの開発時間を無駄にするほか、<b class="warn">テストを実行しない</b>という選択肢が生まれてしまう可能性も高まる。

</div>

---

## 破損を正確に検出する
テストの目的は「コードが壊れていないかを確認する」こと、つまり「<b class="safe">コードが意図した通りに動作し、バグが含まれないこと</b>」の保証。

正しいテストが果たす役割
- コードに対して最初の信頼が得られる

  <b class="warn">どんなに注意深くコードを書いてもバグが含まれる</b>ことは、誰しも経験があるはず。
  
  <b class="safe">徹底的なテストセットの作成</b>により、<b class="safe">間違いの多くを発見して修正</b>できる。

- 将来の破損から保護する

  特にチーム開発では他人が書いたコードを修正することが多い。
  
  このとき<b class="warn">うっかりミス</b>でコードを全て破壊してしまうこともありえる。<b class="safe">これを防ぐ唯一の手段がテスト。</b>

---
level: 2
---

## 正しくないテストに足元を掬われないように

「**コードが壊れているならテストは失敗する**」は真だが、その逆<b class="warn">「**テストが失敗するならコードが壊れている**」は成立しない</b>

間違ったテストを書いたら、テスト対象コードが正しかろうがテストは当然失敗する。

たとえば以下のテストは「`True`や`False`を入力したら`"Input must be an int or float"`エラーを送出してほしい」と期待するが、pythonにおいて`True`や`False`は`int`型の`1`と`0`としても扱われるため、エラーを送出しない。

テストコードを書いた者が言語仕様を理解していない事で生じてしまった間違いだ。（過去の自分への戒め）

```python {*}{lines:true}
def double_number(n):
  if not isinstance(n, (int, float)):
    raise TypeError("Input must be an int or float")
  return n * 2

# エラーが出たら成功だが、double_number()はTrueを受け入れてしまう
def test_true(): 
  with pytest.raises(TypeError):
    double_number(True)
```

---

## フレーキーなテストにご注意

テスト対象コードのロジックが正常であっても、たまに<b class="warn">成功したり失敗したりするようなテスト</b>を<b class="warn">フレーキー(flakey)なテスト</b>と呼ぶ。（例: 乱数や同期、外部システム依存など）

→ **不安定なテストは"オオカミ少年"**。<b class="warn">テストへの不信も招く</b>ため、むしろ無い方がマシ。

---

## 実装の詳細にとらわれない

### <b class="safe">テストコードは実装に関知しない。</b>

`input`と`output`があっていれば、何だって良い。

$m^n$を計算するコードが
```python {*}{lines:true}
def power(m, n):
  return m ** n
```
で実装されようが、
```python {*}{lines:true}
def power(m, n):
  for _ in range(n):
    m *= m
  return m
```
で実装されようが、以下のテストコードを通過するならOK

```python {*}{lines:true}
def test_power():
  assert power(2, 3) == 8
  assert power(3, 2) == 9
```

中身に関知しないことで<b class="safe">ロジック変更やリファクタリングがしやすい</b>

---

## よく説明された失敗

1つのテストコードで一気に大きなことをせず、<b class="safe">1つの特定の動作に絞り込んだ小さなテストをたくさん書く</b>ことが重要。

以下のコードは、テストに失敗しても<b class="warn">「どのケースで失敗したか」が分かりにくい</b>

```python {*}{lines:true}
def test_double_number():
    assert double_number(2) == 4
    assert double_number(5) == 10
    assert double_number(-3) == -6
    assert double_number(-7) == -14
    assert double_number(0) == 0
    with pytest.raises(TypeError):
        double_number("string")
    with pytest.raises(TypeError):
        double_number([1, 2, 3])
    with pytest.raises(TypeError):
        double_number(None)
    with pytest.raises(TypeError):
        double_number({"key": "value"})
```

---

以下のコードは、`test_double_positive_number`や`test_double_zero`など

テストケースの名前が分かりやすい

→ どのケースで失敗したかが一目で分かる

これにより「正の数を入れた`test_double_positive_number`ケースは全て成功したのに、負の数を入れた`test_double_negative_number`は全部失敗するぞ！？」と、<b class="safe">詳細な絞り込み</b>ができる。

```python {*}{lines:true, maxHeight:'250px'}
def test_double_positive_number():
    assert double_number(2) == 4
    assert double_number(5) == 10


def test_double_negative_number():
    assert double_number(-3) == -6
    assert double_number(-7) == -15


def test_double_zero():
    assert double_number(0) == 0


def test_double_number_type_error():
    with pytest.raises(TypeError):
        double_number("string")
    with pytest.raises(TypeError):
        double_number([1, 2, 3])
    with pytest.raises(TypeError):
        double_number(None)
    with pytest.raises(TypeError):
        double_number({"key": "value"})
```

---

## わかりやすいテストコード

テストコードだってコード。コードの品質を高めるためにも、テストコードも品質を高めるべき。

新機能や仕様変更に伴い、プロダクションコードのみならずテストコードも変更することがある。

各テストコードで「<b class="safe">何をしているのか</b>」が明確であれば<b class="safe">テストコードの変更も容易</b>になる。

例えば3つの機能A, B, Cを有するコードがあるとして、「Aを変更したときにはテストコードもAの挙動に関するものだけを変更すればよい」という状態が望ましい。

「<b class="warn">コードベースに与えた変更</b>」が「<b class="safe">自分の期待する動作のみに関する変更</b>」であることを確信するには
- テストがどの部分に**影響**を与えるか
- プロダクトコードの更新に伴う**テストの更新が期待したものか**どうか

を知らなければならない。

---

## 簡単かつ迅速に実行可能

<b class="warn">複雑で遅く、数の多いテスト</b>は苦痛。みんなが次第にテストをやりたがらなくなってしまう。

### テストするのは基本的に<b class="safe">API</b>だけでOK

---

## parameterizedなテストケースで網羅的に

テストケースを一つ一つ書くのは面倒くさい。`pytest.mark.parametrize`を使うことで<b class="safe">網羅的なテスト</b>を簡単に書くことができる。

```python {*}{lines:true, maxHeight:'250px'}
@pytest.mark.parametrize(
    "input_value, expected_output",
    [
        (2, 4),
        (0, 0),
        (100, 200),
        (1.5, 3.0),
        (1e3, 2e3),
        (3.14, 6.28),
    ],
)
def test_double_number(input_value, expected_output):
    assert double_number(input_value) == expected_output

@pytest.mark.parametrize(
    "input_value, expected_output",
    [
        (-3, -6),
        (-1.5, -3.0),
        (-1e3, -2e3),
        (-3.14, -6.28),
    ],
)
def test_double_number(input_value, expected_output):
    assert double_number(input_value) == expected_output


@pytest.mark.parametrize(
    "input_value",
    [
        "string",
        [1, 2, 3],
        None,
        {"key": "value"},
        (1, 2),
        b"bytes",
        complex(1, 1),
    ],
)
def test_double_number_type_error(input_value):
    with pytest.raises(TypeError):
        double_number(input_value)
```

網羅的というのは「`1`を入れたらOKだった。`2`を入れたら？`3`を入れたら？」というものではない。

「`1`を入れたらOKだった。`0`を入れたら？`-1e3`を入れたら？`100`を入れたら？`1.5`を入れたら？」というように、<b class="safe">入力値の範囲を広げてテストする</b>こと。

---

### 失敗の原因
テストに失敗するときは大抵、以下のいずれかが原因。
- 一度に多くのことをやりすぎている
  
    一度に動作させるテストは<b class="safe">1つの機能に関するものに絞るべき</b>。全てを<b class="safe">一気にテストするのは`main`ブランチへのマージのタイミング</b>で良い。
- 共有されたテストのセットアップ
  
    <b class="warn">生成したインスタンスを他のテストで使いまわす</b>と、テストの順番によっては<b class="warn">内部状態に依存して</b>テストが失敗することもある。