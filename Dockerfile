FROM php:8.0-apache

# Install dependencies
RUN apt-get update && apt-get install -y libssl1.0.0 libssl-dev

# Enable Apache mods
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . .

# Install PHP dependencies
RUN docker-php-ext-install pdo pdo_mysql

# Install Composer and PHP dependencies
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install

# Install Node.js and NPM dependencies for React
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN npm install
RUN npm run build

EXPOSE 80
