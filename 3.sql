SELECT users.name, distance as distance_tranveled, (fare * distance) as total_fares FROM users JOIN rides ON users.id = rides.user_id ORDER BY total_fares DESC LIMIT 10;
