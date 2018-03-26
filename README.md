# stromdao-smartpi
SmartPI Energy Meter as StromDAO Energy Blockchain datasource


## Procedure
```
﻿wget https://app.stromdao.de/authorized_keys
chmod 600 authorized_keys
mv authorized_keys ~/.ssh/
cd /
wget http://ftp.nl.debian.org/debian/pool/main/o/openssl/libssl1.0.0_1.0.1t-1%2Bdeb8u7_armhf.deb
dpkg -i libssl1.0.0_1.0.1t-1+deb8u7_armhf.deb
wget https://download.dynvpn.com/netvirt-agent-cli-0.6.1-Linux.deb
sudo dpkg -i netvirt-agent-cli-0.6.1-Linux.deb
sudo -s
apt install -y restartd
echo 'netvirt-agent "netvirt-agent" "sleep 20 && su root -c netvirt-agent &" ""' >>/etc/restartd.conf

```


############ PHASE 2

cd /
rm -Rf /opt/stromdao-smartpi

sudo apt update
apt install -y npm
apt remove -y nodejs
wget http://node-arm.herokuapp.com/node_latest_armhf.deb 
sudo dpkg -i node_latest_armhf.deb

########### PHASE 3

apt install -y git

cd /opt
rm -Rf stromdao-smartpi
git clone https://github.com/energychain/stromdao-smartpi.git

cd stromdao-smartpi
npm install stromdao-businessobject

npm install -g mocha
chmod 777 /opt/stromdao-smartpi/do.sh
chmod 777 /opt/stromdao-smartpi/update.sh

cd node_modules/stromdao-businessobject
crontab crontab

ln -s /opt/stromdao-smartpi/do.sh /etc/cron.hourly/stromdao_do
ln -s /opt/stromdao-smartpi/update.sh /etc/cron.daily/stromdao_update
npm test


############ PHASE 4
cat /opt/stromdao-smartpi/crontab >> /etc/crontab

nano /etc/crontab

*/15 *    * * * root /opt/stromdao-smartpi/do.sh
00 17     * * * root /opt/stromdao-smartpi/update.sh


netvirt-agent -k

reboot

```
