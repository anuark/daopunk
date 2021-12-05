export default async function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send([
    {
      name: 'Constitution DAO',
      transactions: 0
    },
    {
      name: 'Humana',
      transactions: 111
    },
    {
      name: 'Humana2',
      transactions: 121
    },
    {
      name: 'Humana3',
      transactions: 3
    },
    {
      name: 'Constitution DAO',
      transactions: 0
    },
    {
      name: 'Humana',
      transactions: 111
    },
    {
      name: 'Humana2',
      transactions: 121
    },
    {
      name: 'Humana3',
      transactions: 3
    }
  ]);
}
