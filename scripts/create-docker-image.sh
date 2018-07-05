#!/bin/zsh

if [ `basename ${PWD}` != "scripts" ] ; then
	echo "You should be in the scripts folder now"
	exit
fi
	
cd ..

sudo docker build -t emsreact .

echo "Finished! Net step: run-docker-container.sh"
