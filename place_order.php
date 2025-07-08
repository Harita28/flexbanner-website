<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->items)) {
    echo json_encode(["status" => "error", "message" => "No items provided."]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO orders (product_name, size, price, file_name) VALUES (?, ?, ?, ?)");

foreach ($data->items as $item) {
    $stmt->bind_param("sids", $item->name, $item->size, $item->price, $item->fileName);
    $stmt->execute();
}

echo json_encode(["status" => "success", "message" => "Order placed successfully."]);
$conn->close();
?>