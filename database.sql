CREATE DATABASE IF NOT EXISTS flex_banner_shop;
USE flex_banner_shop;

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255),
    size FLOAT,
    price FLOAT,
    file_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);