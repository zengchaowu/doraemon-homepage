rm -fr .nuxt
rm -fr .output
rm -fr dist
yarn generate
scp -r dist/* ubuntu@43.156.67.207:/home/ubuntu/websites/doraemon-homepage/
