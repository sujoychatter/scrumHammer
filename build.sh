cp -r ./frontend/dist/* ./public
rm ./public/index.html
cp ./frontend/dist/index.html ./public/app.html
cp ./public/app.html ./app/views/app.html