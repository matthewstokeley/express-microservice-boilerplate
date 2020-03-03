#! /usr/local/bash



# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# This script installs typescript globally
# in the development environment


npm install typescript --save

if [ -e tsconfig.json ]
	then 
		touch tsconfig.json && curl https://gist.githubusercontent.com/matthewstokeley/d439bd605e66f49af1e9baf21162170f/raw/a9dcdfe3dea29bc797ea2bd234df13337257afe2/tsconfig.json >> tsconfig.json
fi


# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Machine Formatting

# Prettier support

# if [ -e .prettierrc ]
# 	then
# 		npm install --save-dev 

# Eslint support

if [ -e .eslintrc.json ]
	then
		npm install --save-dev typescript-eslint
	else
		npm install --save-dev tslint
fi


# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Application and component development

# React support

# Vue support

# Angular support

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Bundlers

# Browserify
 
# Webpack support
if [ -f config.js ]
	then
		npm install ts-loader --save-dev
fi

# Parcel support
npm install --save-dev parcel-plugin-typescript

# Rollup support
npm install --save-dev rollup-plugin-typescript2

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Transpiling

# Babel support

if [ -f .babelrc ]
	then
		npm install --save-dev @babel/preset-typescript
fi


# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# UI Testing

# Storybook support

if [ -d .storybook ]
	then
		npm install --save-dev @storybook/preset-typescript
fi

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Snapshot Tests


# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Unit Tests

# Jest support
# 
if [ -f jest.config.js ]
	then
		npm install --save-dev ts-jest
fi

# Karma support

# Jasmine Support

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Contract Tests

# CucumberJS Support

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Regression Tests

# Webdriver / Selenium Support

if [ -f wdio.config.js ]
	then
		npm install --save-dev wdio-typescript-service


# Puppeteer Support