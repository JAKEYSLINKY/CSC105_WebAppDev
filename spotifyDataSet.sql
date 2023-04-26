SELECT * FROM lv1_tracks;
SELECT * FROM lv1_tracks LIMIT 10;
SELECT name,album,artist FROM lv1_tracks;
SELECT name,album,artist FROM lv1_tracks LIMIT 10;
SELECT * FROM lv1_tracks ORDER BY name ASC;
SELECT * FROM lv1_tracks ORDER BY name DESC;
SELECT * FROM lv1_tracks ORDER BY name ASC;
SELECT * FROM lv1_tracks ORDER BY name DESC;
# Show all data from table 'lv1_tracks' sorted by 'name' in descending order
SELECT * FROM lv1_tracks ORDER BY name DESC LIMIT 10;
# Show all data from table 'lv1_tracks' that duration is greater than 200000
SELECT * FROM lv1_tracks WHERE duration>200000;
# Show all data from table 'lv1_tracks' that duration is greater than 200000 and sort by 'name' in ascending order
SELECT * FROM lv1_tracks WHERE duration>200000 ORDER BY name ASC;
# Show all data from table 'lv1_tracks' that duration is greater than 200000 and duration is less than 300000.
SELECT * FROM lv1_tracks WHERE duration>200000 AND duration<300000;
# Show all data from table 'lv1_tracks' that duration is greater than 200000 and duration is less than 300000 and sort by 'name' in ascending order.
SELECT * FROM lv1_tracks WHERE duration>200000 AND duration<300000 ORDER BY name ASC;
# Show all data from table 'lv1_tracks' that duration is greater than 280000 and duration is less than 300000 and sort by 'name' in descending order.
SELECT * FROM lv1_tracks WHERE duration>280000 AND duration<300000 ORDER BY name DESC;
# Show all data from table 'lv1_tracks' that duration is greater than 280000 and duration is less than 300000 and sort by 'name' in descending order and limit to 10 rows.
SELECT * FROM lv1_tracks WHERE duration>280000 AND duration<300000 ORDER BY name DESC LIMIT 10;
# Show all data from table 'lv1_tracks' that duration is greater than 200000 and duration is less than 350000 and release year is 2020 and sort by 'name' in descending order and limit to 10 rows and offset to 3 rows.
SELECT * FROM lv1_tracks WHERE duration>200000 AND duration<350000 AND year=2020 ORDER BY name DESC LIMIT 10 OFFSET 3;
# Show all data from table 'lv1_tracks' that popularity is greater than or equal 40 and explicit is 1.
SELECT * FROM lv1_tracks WHERE popularity>=40 AND explicit=1;
# Show name of first 10 rows from table 'lv1_tracks' with a column named 'track_name' instead of name.
SELECT name AS track_name FROM lv1_tracks LIMIT 10;
# Show all tracks that track name start with 'A'
SELECT * FROM lv1_tracks WHERE name LIKE 'A%' ORDER BY 1;
# Show all tracks that track name start with 'A' or 'J'
SELECT * FROM lv1_tracks WHERE name LIKE 'A%' OR name LIKE 'J%' ORDER BY 1;
# Show all tracks that track name contains 'A' in the track name
SELECT * FROM lv1_tracks WHERE name LIKE '%a%' OR name LIKE '%A%';
SELECT * FROM lv1_tracks WHERE LOWER(name) LIKE '%a%';
# Query all rows with only 2 column, track name and track name in lowercase
SELECT name, LOWER(name) FROM lv1_tracks;
# Show all tracks that track name contains 'A' in the track name with case insensitive (contains 'a' or 'A')
SELECT * FROM lv1_tracks WHERE name LIKE '%A%' OR name LIKE '%a%';
SELECT * FROM lv1_tracks WHERE LOWER(name) LIKE '%a%';
# Show data that contains 'THE' (case-insensitive) in the track name or album name or artist name
SELECT * FROM lv1_tracks WHERE LOWER(name) LIKE '%the%' OR LOWER(album) LIKE '%the%' OR LOWER(artist) LIKE '%the%';
# Show data of first 10 rows from table 'lv1_tracks' with a column named 'track_name' instead of name and a column named 'track_duration' instead of duration.duration
SELECT name AS track_name, duration AS track_duration FROM lv1_tracks LIMIT 10;
# Show all columns from table 'lv1_tracks' but change only column named 'name' to 'track_name'.
SELECT track_name AS track_name, lv1_tracks.* FROM lv1_tracks;
# Find out the year of the oldest song.
SELECT MIN(year) FROM lv1_tracks;
# Find out 2 value of the oldest year and the newest year.
SELECT MIN(year) AS oldest_year, MAX(year) AS newest_year FROM lv1_tracks;
# Count all data from table 'lv1_tracks' without any condition.
SELECT COUNT(*) FROM lv1_tracks;
# Count all data from table 'lv1_tracks' and change the output column name to 'total_tracks'.
SELECT COUNT(*) AS total_tracks FROM lv1_tracks;
# Count all data from table 'lv1_tracks' released in each year.
SELECT COUNT(*) FROM lv1_tracks GROUP BY year;
# Count all data from table 'lv1_tracks' released in each year and change the output column name to 'total_tracks'.
SELECT name AS total_tracks, * FROM lv1_tracks;
# Sum the total duration of all tracks in table 'lv1_tracks' released in each year.
SELECT * FROM lv1