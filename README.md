# my-shots

Simple 1-week Frontend project that uses the [Dribbble API](http://developer.dribbble.com/) to show and apply operations involving Shots. This project implement the following features: 

* List Shots
* Search Shots
* Resize Shots
* Like Shots
* Shot description

This project has responsive design. You can use it on your Smartphone, Tablet or Desktop.

## Installation

### git

You must download this project. In order to do this, please install [git](https://git-scm.com/download/linux) and type the following command in your preferred directory:

	$ git clone https://github.com/lucasbfernandes/my-shots.git

### node

I use node in this project. In order to have it, please install the latest LTS [node](https://nodejs.org/en/) version (It will also install [npm](https://www.npmjs.com/)).

### ruby and compass
You should also install [ruby](https://www.ruby-lang.org/pt/documentation/installation/), since we will need it for compass.

In order to install [compass](http://compass-style.org/) in your machine, please type:

	$ gem update --system
	$ gem install compass

### grunt

I use [grunt](https://gruntjs.com/) as the task runner of this project. You must install the CLI if you want to use it in the command line:

	$ npm install -g grunt-cli

### bower 

Please install [bower](https://bower.io/):

	$ npm install -g bower

## Usage

After you are done with the previous steps, you need to install the project dependencies. Please type:

	$ cd my-shots/

And run:

	$ npm install

This will install the project node dependencies. After it you must install the bower dependencies:

	$ bower install

Run grunt:

	$ grunt

After you finish all previous steps, open your browser and type [http://localhost:9000/html/home.html](http://localhost:9000/html/home.html)! =)

### Future work

These are the topics I wasn't able to finish in the 1 week time frame:

* Unit tests
* Acceptance tests
* Enable [eslint](http://eslint.org/) in the build proccess
* Use [mockjax](https://github.com/jakerella/jquery-mockjax) for prototyping
* Use [Babel](https://babeljs.io/)
