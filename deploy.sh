#!/bin/sh
#
ssh staging "cd /var/www/farad; git pull"
PID=`ssh staging ps -ef | grep node | grep -v grep | awk '{print $2}'`
ssh staging kill -9 $PID
ssh staging "cd /var/www/farad; nohup make run"

