#!/bin/zsh

if [ `basename ${PWD}` != "scripts" ] ; then
	echo "You should be in the scripts folder now"
	exit
fi

cd ..

sudo docker exec -it `sudo docker ps -q` sh -il
