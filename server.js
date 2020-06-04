const express = require('express');
const nunjucks = require('nunjucks');
const videos = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', function (req, res) {
  const data = {
    avatar_url:
      'https://avatars0.githubusercontent.com/u/62223545?s=460&u=e5b41eead5b46ed113d0fc416b8c84d10f1f07b6&v=4',
    name: 'Joao Sousa',
    role: 'Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur <a href="/"> rnadom link</a>adipisicing elit. Dicta, quos rem delectus tempora maiores tempore eum est numquam aliquam magnam voluptas voluptatibus nisi, ducimus in beatae exercitationem quis id iure.',
    links: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/joao-sousa-751628111/',
      },
      {
        name: 'Github',
        url: 'https://github.com/JoaoSousaJS',
      },
    ],
  };

  return res.render('about', { data });
});

server.get('/portfolio', function (req, res) {
  return res.render('portfolio', { items: videos });
});

server.listen(5000, function () {
  console.log('server is running');
});
