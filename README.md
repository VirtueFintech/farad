# FARAD Cryptoken

## Installation

1. `$ apt update`
2. `$ apt upgrade`
3. `$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`
4. `$ apt install nodejs nginx`
5. `$ cd /var/www; git clone https://github.com/VirtueFintech/farad.git`
6. `$ cd farad; npm install`
7. `$ cp .env.example .env; ./ace key:generate --force`

## Setup Nginx

Settings are under `/etc/nginx/sites-available/default`
Just change the `/` params to:

`
		...

        root /var/www/farad/public;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name _;

         location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                #try_files $uri $uri/ =404;
                proxy_pass http://localhost:3333;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;
        }

        ...
         
`         