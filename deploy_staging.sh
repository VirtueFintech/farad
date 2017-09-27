#!/bin/sh
#
SERVERS="staging"
for s in $SERVERS; do
	ssh $s "cd /var/www/farad; git pull" 
	PID=`ssh $s ps -ef | grep node | grep -v grep | awk '{print $2}'` 
	ssh $s kill -9 $PID 
	ssh $s "cd /var/www/farad; nohup make run > /dev/null 2>&1 &"
done

