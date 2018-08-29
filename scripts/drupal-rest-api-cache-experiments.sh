#!/bin/zsh

if [ `basename ${PWD}` != "scripts" ] ; then
	echo "You should be in the scripts folder now"
	exit
fi

cd ..

#echo "I'm going to run a couple of commands that should fix the selinux problem"
#echo "When selinux is enabled, the container may cause selinux error messages"

echo "Home page queries ==================================================="

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=How%20I%20work&sticky=1' 

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=The%20tools%20I%20use&sticky=1' 

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=Success%20stories&sticky=1' 

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=Testimonials&sticky=1'

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=Talking%20about%20my%20experiences&sticky=1' 

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=Where?%20How?&sticky=1' 

echo "Topic pages ==================================================="

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=How%20I%20work' 

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=The%20tools%20I%20use' 

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=Success%20stories' 

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=Testimonials' 

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=Talking%20about%20my%20experiences' 

curl -I 'https://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en&field_ems_topic_target_id=Where?%20How?' 

