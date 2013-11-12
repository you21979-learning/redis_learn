redis_learn
===========
個人的な勉強用の記録


* データベース切り替え

    `select 0`


* 全部削除(データベースすべて)

    `flushall`

* 全部削除(選択しているデータベースだけ)

    `flushdb`

* パターンでキーを削除

    `redis-cli KEYS "prefix*" | xargs redis-cli DEL`





