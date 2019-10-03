# Auto Cookie Clicking

[Cookie Clicker](https://orteil.dashnet.org/cookieclicker/)のマウスクリックを自動化するブックマークレットです。

## Usage

適当なサイトをブックマークして以下のコードをURLとして保存し直してください。

```
javascript:(function(){const timer=setInterval(function(){const b=document.getElementById('bigCookie');const g=document.getElementById('shimmers');b.click();if(g.hasChildNodes()){g.childNodes[0].click();}},4);}());
```

Cookie Clickerを開いたあと、同じタブで先程保存したブックマークレットを実行するだけです。

アクティブなタブの状態だと秒間250回(4ms)、非アクティブなタブの状態だと秒間1回(1000ms)のクリックを自動化されます。

詳しくは「[遅延が指定値より長い理由](https://developer.mozilla.org/ja/docs/Web/API/WindowTimers/setTimeout#Reasons_for_delays_longer_than_specified)」を参照してください。
