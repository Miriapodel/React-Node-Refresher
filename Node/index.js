import express from 'express';
import bodyParser from 'body-parser';
import  helloMessages from './routes/helloMessages.js';
import UserRoutes from './routes/UserRoutes.js';
import * as paths from './util/paths/paths.js';
import cors from 'cors';
import sequelize from './util/database/database.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(paths.reactPath));
app.use(express.static('public'));
app.use(helloMessages);
app.use(UserRoutes);


sequelize.sync().then( result => {
  console.log(result);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch( error => {
  console.log(error);
});

