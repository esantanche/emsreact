#!/bin/zsh

if [ `basename ${PWD}` != "scripts" ] ; then
	echo "You should be in the scripts folder now"
	exit
fi

echo "For now it's manual"
echo "After you run the create react app script, you need a git checkout ."
echo "which gets rid of the changes create react app did (apart for node_modules)"
echo "Maybe you need others things"
echo "probably you need to do some git pull"

echo "Finished! Next step: container-after-git-pull-tasks.sh"

exit

