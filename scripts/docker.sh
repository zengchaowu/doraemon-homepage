
sudo docker run --name doraemon-homepage-nginx -v /home/ubuntu/websites/doraemon-homepage:/usr/share/nginx/html:ro -e VIRTUAL_HOST=doraemon.zengchaowu.com -d nginx