const path = require('path');
const express = require('express');
const useragent = require('express-useragent');

const buildPath = path.join(__dirname, './build');

const app = express();

app.use(useragent.express());

app.get('/', (req, res) => {
  const {isMobile, isTablet} = req.useragent;
  if (isMobile) {
    if (isTablet) {
      res.sendFile(path.join(buildPath, 'tablet.html'));
    } else {
      res.sendFile(path.join(buildPath, 'mobile.html'));
    }
  } else {
    res.sendFile(path.join(buildPath, 'desktop.html'));
  }
});

app.use(express.static(buildPath));

const listener = app.listen(process.env.PORT || 3000, () => {
  const {address, port} = listener.address();
  console.log(`App is listening on ${address}:${port}`);
});
