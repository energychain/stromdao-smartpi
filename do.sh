#!/bin/sh

cd /opt/stromdao-smartpi

READING=`cat /var/smartpi/consumecounter`

MULTI=1000

V=`echo "$READING*$MULTI"|bc`

stromdao store consumer $V

READING=`cat /var/smartpi/producecounter`

V=`echo "$READING*$MULTI"|bc`

stromdao store producer $V



