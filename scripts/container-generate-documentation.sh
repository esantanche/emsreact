#!/bin/zsh

if [ `basename ${PWD}` != "scripts" ] ; then
	echo "You should be in the scripts folder now"
	exit
fi

# Making the script to send to the container to run
cat <<EOF >/tmp/container-generate-documentation-script-to-run.sh
#!/bin/sh

# This happens inside the container

echo "Script $0 starting"

cd /srv/app/emsreact

jsdoc -c ./jsdoc_conf.json src -r -d docs

EOF

chmod +x /tmp/container-generate-documentation-script-to-run.sh

# Copying script to run from host to container
sudo docker cp /tmp/container-generate-documentation-script-to-run.sh `sudo docker ps -q`:/

sudo docker exec `sudo docker ps -q` /container-generate-documentation-script-to-run.sh

echo "Finished!"

