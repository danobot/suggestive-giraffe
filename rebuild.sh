git pull
docker build -t danobot/suggestive-giraffe:rpi3 .
docker push danobot/suggestive-giraffe:rpi3
echo "$(date)    Built image on Raspberry Pi" >> builds.log
git commit ./builds.log -m "Appended build record to build log"
git push

cd ~/dockerfiles/master/
docker stop suggestive-giraffe-demo
docker rm  suggestive-giraffe-demo
docker-compose up -d  giraffe-demo
