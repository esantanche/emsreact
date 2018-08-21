#!/bin/zsh

if [ `basename ${PWD}` != "scripts" ] ; then
	echo "You should be in the scripts folder now"
	exit
fi

NAME_OF_SCRIPT_TO_RUN=container-yarn-test-script-to-run.sh
PATH_OF_SCRIPT_TO_RUN=/tmp/$NAME_OF_SCRIPT_TO_RUN

# Making the script to send to the container to run
cat <<EOF >$PATH_OF_SCRIPT_TO_RUN
#!/bin/sh

# This happens inside the container

echo "Script $0 starting"

cd /srv/app/emsreact

yarn test

EOF

chmod +x $PATH_OF_SCRIPT_TO_RUN

# Copying script to run from host to container
sudo docker cp $PATH_OF_SCRIPT_TO_RUN `sudo docker ps -q`:/

sudo docker exec `sudo docker ps -q` /$NAME_OF_SCRIPT_TO_RUN

echo "Finished!"

