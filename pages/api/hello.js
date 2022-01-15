// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const values = [];
  for (const [key, value] of Object.entries(req.query)) {
    values.push({ key, value });
  }
  res.status(200).json(values || [{ key: 'name', value: '你好' }]);
}
