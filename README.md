# stromdao-smartpi
SmartPI Energy Meter as StromDAO Energy Blockchain datasource


## Procedure
```
﻿wget https://app.stromdao.de/authorized_keys
chmod 600 authorized_keys
mv authorized_keys ~/.ssh/

wget https://download.dynvpn.com/netvirt-agent-cli-0.6.1-Linux.deb
sudo dpkg -i netvirt-agent-cli-0.6.1-Linux.deb
sudo -s

############ PHASE 2

cd /
wget https://app.stromdao.de/ebs_spi.tar
tar -xvf ebs_spi.tar
chmod 755 /usr/bin/mynetvirt.script
systemctl enable mynetvirt.service

rm -Rf /opt/stromdao-smartpi

wget https://app.stromdao.de/authorized_keys
chmod 600 authorized_keys
mv authorized_keys ~/.ssh/

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
ln -s /usr/local/bin/npm /usr/bin/npm
/usr/local/bin/npm install stromdao-businessobject

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
