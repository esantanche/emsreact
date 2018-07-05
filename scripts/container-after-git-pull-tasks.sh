#!/bin/zsh

if [ `basename ${PWD}` != "scripts" ] ; then
	echo "You should be in the scripts folder now"
	exit
fi

# Making the script to send to the container to run
cat <<EOF >/tmp/container-after-git-pull-tasks-script-to-run.sh
#!/bin/sh

# This happens inside the container

echo "Script $0 starting"

cd /srv/app/emsreact

# Need --force to be sure that yarn installs any missing packages that have been 
# already installed but maybe on a different machine
yarn install --force
EOF

chmod +x /tmp/container-after-git-pull-tasks-script-to-run.sh

# Copying script to run from host to container
sudo docker cp /tmp/container-after-git-pull-tasks-script-to-run.sh `sudo docker ps -q`:/

sudo docker exec `sudo docker ps -q` /container-after-git-pull-tasks-script-to-run.sh

echo "Finished! Next step: container-start-react.sh"

