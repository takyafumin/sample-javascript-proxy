#!/usr/bin/env bash
export DIR_APP=app


function display_help {
    echo "Usage:";
    echo "  command [arguments]"
    echo "";
    echo "command:";
    echo "  build       build by webpack";
    echo "  npm-ci      npm install(ci)";
    echo "  exec        exec app.js";
    echo "  clean       cleanup dist directory";
    echo "  help        Display help for a command";
    echo "";
    exit 0;
}


if [ $# = 0 ]; then
    # 引数なしの場合, command helpを表示
    display_help

elif [ "$1" = "help" ]; then
    # command helpを表示
    display_help
fi

cd ${DIR_APP}

if [ "$1" = "build" ]; then
    rm -rf dist
    npm run build

elif [ "$1" = "npm-ci" ]; then
    npm ci

elif [ "$1" = "exec" ]; then
    node dist/app.js

elif [ "$1" = "clean" ]; then
    rm -rf node_modules
    rm -rf dist

fi
