#! /usr/local/bin bash


ROOT='./..'



if [ ! -f "$ROOT/eslint.json" ]
	then
		touch $ROOT/eslint.json
fi




if [ .prettierrc -e ]
	then	
		touch .prettierrc
fi

npm install --save-dev prettier standard
