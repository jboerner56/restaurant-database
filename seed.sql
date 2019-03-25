insert into users
	(first_name, last_name, email, password)
values
	('Jason','Boerner','jb56@bing.com','abc123'),
	('Luis','Abad','Luis@dc.com','ilovebeer'),
	('Bob','Barker','therealbobbarker@','itsreallyme'),
	('Happy','Gilmore','hockeyguy123@aol.com','stillhategolf')
;

insert into restaurants
    (name, address, street, state, phone, menu, picture)
values
    ('AppleBees','3421 Apple Lane Atlanta, Georgia','3421 Apple Lane','Georgia','404-123-4567','www.applebeesfake.com/menu','url-picture'),
    ('Chipotle','3421 Piedmont Park Buckhead, Georgia','3421 Piedmont Park','Georgia','404-213-2132','www.chiptoleok.com/menu','url-picture'),
    ('Lovies','3422 Piedmont Park Buckhead, Georgia','3422 Piedmont Park','Georgia','404-242-1352','www.loviestuesday.com/menu','url-picture'),
    ('DigitalCafe','3427 Piedmont Fantasy Buckhead, Georgia','3427 Piedmont Fantasy','Georgia','404-754-3467','www.dcafe.com/menu','url-picture')
;

insert into reviews
	(score, content, restaurant_id, user_id)
values
	(5, 'everything was good', 1, 1),
	(3, 'server was mean', 2, 2),
	(1, 'Found a roach in my food', 3, 4),
	(5, 'restaurant paid for my meal because some guy tried to beat the crap out of me', 1, 3)
	;
create table favorites (
	id serial primary key,
	user_id int,
	restaurant_id int
);
insert into favorites
	(user_id, restaurant_id)
values
(3,1),
(4,3),
(2,2),
(1,1)
;