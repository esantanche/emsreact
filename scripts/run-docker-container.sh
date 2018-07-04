#!/bin/zsh

if [ `basename ${PWD}` != "scripts" ] ; then
	echo "You should be in the scripts folder now"
	exit
fi
	
cd ..

sudo docker run -t \
  -v ${PWD}:/srv/app \
  -p 3001:3000 \
  -d \
  emsreact
