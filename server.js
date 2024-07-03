const express = require('express');
const sequelize = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
