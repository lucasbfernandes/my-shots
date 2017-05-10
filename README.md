# banking-system

Simple 1-week Frontend project that uses the [Dribbble API]{http://developer.dribbble.com/} to show and apply operations involving Shots. To be more specific, this project implement the following features: 

* List Shots
* Search Shots
* Resize Shots
* Like Shots
* Shot description

This project has responsive design. You can use it on your Smartphone, Tablet or Desktop.

## Installation

### git

You must download this project. In order to do this, please install [git]{} and type the following command in your preferred directory:

	$ git clone https://github.com/lucasbfernandes/my-shots.git

### node

I use node in this project. In order to have it, please install the latest LTS [node]{} version (It will also install [npm]{}).

### ruby and compass
You should also install [ruby]{}, since we will need it for compass.

In order to install compass in your machine, please type:

	$ gem update --system
	$ gem install compass

### grunt

I use grunt as the task runner of this project. You must install the CLI if you want to use it in the command line:

	$ npm install -g grunt-cli

### bower 

Please install [bower]{}:

	$ npm install -g bower

## Usage

After you are done with the previous steps, you need to install the project dependencies. Please type:

	$ cd my-shots/

And run:

	$ npm install

This will install the project node dependencies. After it you must install the bower dependencies:

	$ bower install

After you finish all previous steps, open your browser and type [http://localhost:9000/html/home.html]{http://localhost:9000/html/home.html}. You are free to use this app! =)

### Future work

These are the topics I wasn't able to finish in the 1 week time frame:

* Unit tests
* Acceptance tests
* Enable [jshint]{} in the build proccess
* Use mockjax for prototyping
* Use Babel