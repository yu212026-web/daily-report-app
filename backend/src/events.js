const express = require('express');
const router = express.Router();
let store = [];

// イベント一覧取得
router.get('/', (req, res) => res.json(store));
// 作成/更新
router.post('/', (req, res) => {
  const ev = req.body;
  store = store.filter(e => e.id !== ev.id).concat(ev);
  res.json({ status: 'ok' });
});

module.exports = router;