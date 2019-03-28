create table users (
    id serial primary key,
    first_name varchar(100), -- "varchar is equivalent to character  varying"
    last_name varchar (100), -- "varying means it wont be filled with spaces"
    email varchar (200),
    password varchar (300) -- we dont store passwords, we store "hashes"
                            -- NEVER store passwords unencrypted
);

create table favorites (
	id serial primary key,
	user_id int,
	restaurant_id int
);

create table restaurants (
    id serial primary key,
    name varchar (200),
    address varchar(200),
    street varchar(200),
    state varchar(30),
    phone varchar(20),
    menu varchar(200),
    picture varchar(500) -- NEVER try to store images in the database.
                        -- instead store a URL for the image you want to store.

    --  restaurants have many reviews
    -- bout i dont put a foreign key here
    -- the foreign key goes in the reviews table
);

create table reviews(
    id serial PRIMARY KEY,
    score INTEGER,
    content text,
    -- a single review belongs to a single restaurant
    restaurant_id INTEGER REFERENCES restaurants(id),
    -- a single review belongs to a single user.
    user_id INTEGER REFERENCES users(id)
    -- while we could capture the favorite info here
    -- we dont want to require a user to write a review just to add a restaurant to their favorites.
    -- is_favorite boolean,
);

-- this is known as a "linking table" which describes the following relationships
-- users can have many favorites
-- restaurants can have many favorites
-- users have many restaurants through favorites
-- restaurants have many users through favorites
create table favorites (
    id serial primary key, -- id is optional in this case.
    user_id integer references users(id), -- foreign key to the users table
    restaurant_id integer references restaurants(id) -- foreign key to restaurent table
    -- reviews text -- this is "meatdata" about th relationship
    --             --  this field has a plural name.
    --             -- that's not a good thing
);

-- decide what will be shown on these three pages
    -- user profile
        -- name
        -- favorites
            -- restaurant name
            -- favorite menu items, food/drink
            -- notes on items if any have been entered
    -- restaurant profile
        -- name
        -- address
            -- street, city, state
        -- phone number
        -- food items
            -- signature items
            -- specials
            -- pictures of items
        -- drink items
            -- signature items
            -- specials
                -- possible pictures of special/signature drinks
    
    -- restaurant search results
        -- restaurant name
            -- address
            -- website
            -- types of food
                -- with pictures if possible
            -- customer favorites.
