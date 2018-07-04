#!/bin/zsh

if [ `basename ${PWD}` != "scripts" ] ; then
	echo "You should be in the scripts folder now"
	exit
fi

# Making the script to send to the container to run
cat <<EOF >/tmp/container-setup-script-to-run.sh
#!/bin/sh

# This happens inside the container

echo "Script $0 starting"

cd /srv/app

# I want to install create react app, but exactly version 1.5.2. Not a newer version
yarn global add create-react-app@1.5.2 --exact 

create-react-app emsreact

cd emsreact

# this will happne inside the container. If you don't see the files belong to node in the host machine, that's not a problem
chown node:node -R .
EOF

chmod +x /tmp/container-setup-script-to-run.sh

# Copying script to run from host to container
sudo docker cp /tmp/container-setup-script-to-run.sh `sudo docker ps -q`:/

sudo docker exec `sudo docker ps -q` /container-setup-script-to-run.sh
