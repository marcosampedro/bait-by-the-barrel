# bait-by-the-barrel
A website created using React and Firebase for a made up seafood market where the price, quantity and availability can be updated in a moment's notice

## Usage
Open the project in an IDE of your choice (Visual Studio Code was used to construct this)

Install the npm dependencies from the package.json file

Run the program on a local server (such as 'nodemon app.js' or 'npm start' on your terminal)

You'll be greeted by entering a store name, where you can either type your own store name or by using a randomly generated name that's already loaded into the input area

When you visit your store, you can either Load Sample Fishes or enter your own fishes in the Inventory menu. All the fishes will be stored in my Firebase, and will be saved in your store as long as you don't delete them

As you add the fishes to your cart, they'll be added to the Order menu and be saved in your localstorage. So even if you refresh your page or enter your store name again in your browser, all your fishes and orders will be saved as you last left it

You can also feel free to add more fishes in your Inventory, and update the data of your fishes. All instances of your fishes data will be automatically updated through the state, and saved on the Firebase Database

## License
The MIT License (MIT)

Copyright (c) 2020 Marco Sampedro

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
