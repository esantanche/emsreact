#!/bin/zsh

if [ `basename ${PWD}` != "scripts" ] ; then
	echo "You should be in the scripts folder now"
	exit
fi

cd ..

echo "I'm going to run a couple of commands that should fix the selinux problem"
echo "When selinux is enabled, the container may cause selinux error messages"

sudo setenforce 0
sudo chcon -Rt svirt_sandbox_file_t /var/db

# this may still be useful: https://www.projectatomic.io/blog/2015/06/using-volumes-with-docker-can-cause-problems-with-selinux/
