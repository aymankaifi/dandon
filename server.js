// استيراد المكتبات
require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

// إعداد التطبيق
const app = express();
const PORT = process.env.PORT || 3000;

// إعداد الاتصال بقاعدة البيانات
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'db.yqjsahcqyfxpdxxzrali.supabase.co',
  database: process.env.DB_NAME || 'Dandun2025',
  password: process.env.DB_PASSWORD || '4120Ayman1$2',
  port: process.env.DB_PORT || 5432,
});

// نقطة اختبار الاتصال بقاعدة البيانات
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// نقطة اختبار بسيطة
app.get('/', (req, res) => {
  res.send('Welcome to Dandun Platform!');
});

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
