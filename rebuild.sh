git pull
docker build -t danobot/suggestive-giraffe:rpi3 .
docker push danobot/suggestive-giraffe:rpi3
echo "$(date)    Built image on Raspberry Pi" >> builds.log
git add builds.log
git commit -m "Appended build record to build log"
git push

#cd ~/dockerfiles/master/
#docker stop ha-api-tool-prod
#docker rm ha-api-tool-prod
#docker-compose up -d ha-api-tool
